'use client';

import { useState } from 'react';
import { Moon, User, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface HunnimeDate {
  date: string;
  name: string;
  isSpecial?: boolean;
  specialNote?: string;
}

interface HunnimeSeva {
  id: string;
  name: string;
  nameKn: string;
  description: string;
  amount: number;
  duration: string;
  includes: string[];
}

interface HunnimeBookingFormProps {
  upcomingDates: HunnimeDate[];
  hunnimeSevas: HunnimeSeva[];
}

type Step = 'date' | 'seva' | 'details' | 'payment' | 'confirmation';

interface FormData {
  date: string;
  sevaId: string;
  devoteeName: string;
  devoteePhone: string;
  devoteeEmail: string;
  gotra: string;
  nakshatram: string;
  notes: string;
}

export default function HunnimeBookingForm({ upcomingDates, hunnimeSevas }: HunnimeBookingFormProps) {
  const [step, setStep] = useState<Step>('date');
  const [formData, setFormData] = useState<FormData>({
    date: '',
    sevaId: '',
    devoteeName: '',
    devoteePhone: '',
    devoteeEmail: '',
    gotra: '',
    nakshatram: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [error, setError] = useState('');

  const selectedDate = upcomingDates.find((d) => d.date === formData.date);
  const selectedSeva = hunnimeSevas.find((s) => s.id === formData.sevaId);

  const steps: { id: Step; label: string; num: number }[] = [
    { id: 'date', label: 'Select Date', num: 1 },
    { id: 'seva', label: 'Choose Seva', num: 2 },
    { id: 'details', label: 'Your Details', num: 3 },
    { id: 'payment', label: 'Payment', num: 4 },
    { id: 'confirmation', label: 'Confirmation', num: 5 },
  ];

  const currentStepIdx = steps.findIndex((s) => s.id === step);

  const handleNext = () => {
    const order: Step[] = ['date', 'seva', 'details', 'payment', 'confirmation'];
    const idx = order.indexOf(step);
    if (idx < order.length - 1) setStep(order[idx + 1]);
  };

  const handleBack = () => {
    const order: Step[] = ['date', 'seva', 'details', 'payment', 'confirmation'];
    const idx = order.indexOf(step);
    if (idx > 0) setStep(order[idx - 1]);
  };

  const handlePayment = async () => {
    setLoading(true);
    setError('');
    try {
      // Create booking order
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          isHunnimeBooking: true,
          amount: selectedSeva?.amount,
        }),
      });

      if (!res.ok) throw new Error('Booking failed');
      const data = await res.json();

      // Load Razorpay
      const rzpOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: (selectedSeva?.amount || 0) * 100,
        currency: 'INR',
        name: 'Abyadi Sri Mahishamardhini Temple',
        description: `Hunnime Pooja: ${selectedSeva?.name}`,
        order_id: data.orderId,
        prefill: {
          name: formData.devoteeName,
          email: formData.devoteeEmail,
          contact: formData.devoteePhone,
        },
        theme: { color: '#d97706' },
        handler: (response: { razorpay_payment_id: string }) => {
          setBookingRef(data.bookingRef || response.razorpay_payment_id);
          setStep('confirmation');
          setLoading(false);
        },
      };

      // @ts-expect-error Razorpay loaded via script
      const rzp = new window.Razorpay(rzpOptions);
      rzp.open();
    } catch {
      setError('Payment initiation failed. Please try again or contact the temple office.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-amber-500/20 rounded-2xl overflow-hidden">
      {/* Progress steps */}
      <div className="bg-[#120600] px-6 py-4 border-b border-amber-900/40">
        <div className="flex items-center justify-between">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    s.id === step
                      ? 'bg-amber-500 text-[#1a0a00]'
                      : idx < currentStepIdx
                      ? 'bg-amber-700 text-amber-100'
                      : 'bg-white/10 text-amber-500/50'
                  }`}
                >
                  {idx < currentStepIdx ? '✓' : s.num}
                </div>
                <span className={`text-xs mt-1 hidden sm:block ${s.id === step ? 'text-amber-300' : 'text-amber-500/40'}`}>
                  {s.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-px mx-2 ${idx < currentStepIdx ? 'bg-amber-600' : 'bg-amber-900/50'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Step 1: Select Date */}
        {step === 'date' && (
          <div>
            <h3 className="text-amber-100 font-bold text-lg mb-1">Select Hunnime Date</h3>
            <p className="text-amber-200/50 text-xs mb-5">Choose the full moon date for your seva</p>
            <div className="space-y-3">
              {upcomingDates.map((d, idx) => (
                <label
                  key={d.date}
                  className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.date === d.date
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-amber-900/50 hover:border-amber-500/40 bg-white/5'
                  }`}
                >
                  <input
                    type="radio"
                    name="hunnime-date"
                    value={d.date}
                    checked={formData.date === d.date}
                    onChange={() => setFormData({ ...formData, date: d.date })}
                    className="sr-only"
                  />
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                      formData.date === d.date ? 'bg-amber-500' : 'bg-amber-900/30'
                    }`}>
                      🌕
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-amber-100 text-sm">{d.name}</p>
                      {idx === 0 && <span className="text-xs bg-amber-500 text-[#1a0a00] px-1.5 py-0.5 rounded font-bold">Next Up</span>}
                      {d.isSpecial && <span className="text-xs bg-red-700/50 text-red-300 px-1.5 py-0.5 rounded">Special</span>}
                    </div>
                    <p className="text-amber-300/70 text-xs mt-0.5">{new Date(d.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    {d.specialNote && <p className="text-amber-400 text-xs mt-0.5 italic">{d.specialNote}</p>}
                  </div>
                  {formData.date === d.date && <CheckCircle size={16} className="text-amber-500 flex-shrink-0" />}
                </label>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={!formData.date}
              className="mt-5 w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-[#1a0a00] font-bold py-3 rounded-xl transition-colors"
            >
              Continue → Choose Seva
            </button>
          </div>
        )}

        {/* Step 2: Select Seva */}
        {step === 'seva' && (
          <div>
            <h3 className="text-amber-100 font-bold text-lg mb-1">Choose Seva Type</h3>
            <p className="text-amber-200/50 text-xs mb-5">For: {selectedDate?.name} — {selectedDate?.date}</p>
            <div className="space-y-3">
              {hunnimeSevas.map((seva) => (
                <label
                  key={seva.id}
                  className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.sevaId === seva.id
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-amber-900/50 hover:border-amber-500/40 bg-white/5'
                  }`}
                >
                  <input
                    type="radio"
                    name="seva-type"
                    value={seva.id}
                    checked={formData.sevaId === seva.id}
                    onChange={() => setFormData({ ...formData, sevaId: seva.id })}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-amber-100 text-sm">{seva.name}</p>
                        <p className="text-amber-400/60 text-xs italic">{seva.nameKn}</p>
                        <p className="text-amber-200/60 text-xs mt-1 leading-relaxed">{seva.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {seva.includes.map((item) => (
                            <span key={item} className="text-xs bg-amber-900/40 text-amber-300 border border-amber-700/30 px-2 py-0.5 rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-amber-400 font-bold text-lg">₹{seva.amount}</p>
                        <p className="text-amber-500/50 text-xs">{seva.duration}</p>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={handleBack} className="flex-1 border border-amber-700/50 text-amber-400 font-semibold py-3 rounded-xl hover:bg-amber-500/10 transition-colors">
                ← Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.sevaId}
                className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-[#1a0a00] font-bold py-3 rounded-xl transition-colors"
              >
                Continue → Your Details
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Devotee Details */}
        {step === 'details' && (
          <div>
            <h3 className="text-amber-100 font-bold text-lg mb-1">Your Details</h3>
            <p className="text-amber-200/50 text-xs mb-5">Required for the priest to recite during the seva</p>
            <div className="space-y-4">
              <div>
                <label className="block text-amber-300 text-xs font-medium mb-1.5">
                  <User size={11} className="inline mr-1" /> Devotee Full Name *
                </label>
                <input
                  type="text"
                  value={formData.devoteeName}
                  onChange={(e) => setFormData({ ...formData, devoteeName: e.target.value })}
                  placeholder="e.g. Ramesh Bhat"
                  className="w-full bg-white/5 border border-amber-700/40 rounded-lg px-4 py-2.5 text-amber-100 text-sm placeholder:text-amber-500/40 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-amber-300 text-xs font-medium mb-1.5">
                  <Phone size={11} className="inline mr-1" /> Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.devoteePhone}
                  onChange={(e) => setFormData({ ...formData, devoteePhone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-amber-700/40 rounded-lg px-4 py-2.5 text-amber-100 text-sm placeholder:text-amber-500/40 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-amber-300 text-xs font-medium mb-1.5">
                  <Mail size={11} className="inline mr-1" /> Email Address * (for e-receipt)
                </label>
                <input
                  type="email"
                  value={formData.devoteeEmail}
                  onChange={(e) => setFormData({ ...formData, devoteeEmail: e.target.value })}
                  placeholder="ramesh@example.com"
                  className="w-full bg-white/5 border border-amber-700/40 rounded-lg px-4 py-2.5 text-amber-100 text-sm placeholder:text-amber-500/40 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-amber-300 text-xs font-medium mb-1.5">Gotra (optional)</label>
                  <input
                    type="text"
                    value={formData.gotra}
                    onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                    placeholder="e.g. Bharadwaja"
                    className="w-full bg-white/5 border border-amber-700/40 rounded-lg px-4 py-2.5 text-amber-100 text-sm placeholder:text-amber-500/40 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-amber-300 text-xs font-medium mb-1.5">Nakshatram (optional)</label>
                  <input
                    type="text"
                    value={formData.nakshatram}
                    onChange={(e) => setFormData({ ...formData, nakshatram: e.target.value })}
                    placeholder="e.g. Rohini"
                    className="w-full bg-white/5 border border-amber-700/40 rounded-lg px-4 py-2.5 text-amber-100 text-sm placeholder:text-amber-500/40 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-amber-300 text-xs font-medium mb-1.5">Special Notes (optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any special prayers, family names to include, etc."
                  rows={2}
                  className="w-full bg-white/5 border border-amber-700/40 rounded-lg px-4 py-2.5 text-amber-100 text-sm placeholder:text-amber-500/40 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={handleBack} className="flex-1 border border-amber-700/50 text-amber-400 font-semibold py-3 rounded-xl hover:bg-amber-500/10 transition-colors">
                ← Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.devoteeName || !formData.devoteePhone || !formData.devoteeEmail}
                className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-[#1a0a00] font-bold py-3 rounded-xl transition-colors"
              >
                Review & Pay →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {step === 'payment' && (
          <div>
            <h3 className="text-amber-100 font-bold text-lg mb-4">Review & Payment</h3>
            {/* Summary */}
            <div className="bg-white/5 border border-amber-700/30 rounded-xl p-5 mb-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-amber-400">Date</span>
                <span className="text-amber-100 font-medium">{selectedDate?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-400">Seva</span>
                <span className="text-amber-100 font-medium">{selectedSeva?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-400">Devotee</span>
                <span className="text-amber-100 font-medium">{formData.devoteeName}</span>
              </div>
              {formData.gotra && (
                <div className="flex justify-between">
                  <span className="text-amber-400">Gotra</span>
                  <span className="text-amber-100 font-medium">{formData.gotra}</span>
                </div>
              )}
              <div className="border-t border-amber-700/30 pt-3 flex justify-between items-center">
                <span className="text-amber-300 font-semibold">Total Amount</span>
                <span className="text-amber-400 font-bold text-2xl">₹{selectedSeva?.amount}</span>
              </div>
            </div>
            {error && (
              <div className="flex items-start gap-2 bg-red-900/30 border border-red-700/40 text-red-300 text-xs rounded-lg p-3 mb-4">
                <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                {error}
              </div>
            )}
            <p className="text-amber-500/50 text-xs mb-4 text-center">
              Secured by Razorpay · UPI, Credit/Debit Cards, Net Banking accepted
            </p>
            <div className="flex gap-3">
              <button onClick={handleBack} className="flex-1 border border-amber-700/50 text-amber-400 font-semibold py-3 rounded-xl hover:bg-amber-500/10 transition-colors">
                ← Back
              </button>
              <button
                onClick={handlePayment}
                disabled={loading}
                className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-[#1a0a00] font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><Loader2 size={16} className="animate-spin" /> Processing...</>
                ) : (
                  <><Moon size={15} /> Pay ₹{selectedSeva?.amount}</>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {step === 'confirmation' && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-amber-500/20 border-2 border-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-amber-400" />
            </div>
            <h3 className="text-amber-100 font-bold text-xl mb-2">Booking Confirmed!</h3>
            <p className="text-amber-200/70 text-sm mb-4">
              Your Hunnime Pooja seva has been booked successfully.
            </p>
            {bookingRef && (
              <div className="bg-white/5 border border-amber-700/30 rounded-xl p-4 mb-4 text-sm">
                <p className="text-amber-400 text-xs mb-1">Booking Reference</p>
                <p className="text-amber-100 font-bold font-mono text-base">{bookingRef}</p>
              </div>
            )}
            <div className="bg-white/5 border border-amber-700/30 rounded-xl p-4 mb-5 text-sm text-left space-y-2">
              <p className="text-amber-300 font-medium mb-2">What&apos;s Next?</p>
              {[
                'You will receive a confirmation email with full details.',
                'An e-receipt will be sent to your email address.',
                'The priest will recite your name and gotra during the seva.',
                'Photos from the seva may be shared via WhatsApp if requested.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-amber-200/70">
                  <CheckCircle size={13} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setStep('date');
                setFormData({ date: '', sevaId: '', devoteeName: '', devoteePhone: '', devoteeEmail: '', gotra: '', nakshatram: '', notes: '' });
                setBookingRef('');
              }}
              className="bg-amber-500 hover:bg-amber-400 text-[#1a0a00] font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
            >
              Book Another Seva
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
