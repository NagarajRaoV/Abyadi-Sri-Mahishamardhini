'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Shield, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { DONATION_CATEGORIES, TEMPLE_INFO } from '@/lib/temple-data';
import type { Metadata } from 'next';

const QUICK_AMOUNTS = [100, 251, 500, 1001, 2500, 5000, 10001];

export default function DonationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('GENERAL');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [step, setStep] = useState<'form' | 'details' | 'payment' | 'done'>('form');
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', phone: '', pan: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [donationRef, setDonationRef] = useState('');

  const totalAmount = parseInt(amount || customAmount || '0', 10);
  const selectedCat = DONATION_CATEGORIES.find((c) => c.value === selectedCategory);

  const handlePayment = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...donorInfo, amount: totalAmount, category: selectedCategory, isRecurring }),
      });
      if (!res.ok) throw new Error('Failed');
      const data = await res.json();

      // @ts-expect-error Razorpay loaded via script
      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: totalAmount * 100,
        currency: 'INR',
        name: TEMPLE_INFO.name,
        description: `Donation: ${selectedCat?.label}`,
        order_id: data.orderId,
        prefill: { name: donorInfo.name, email: donorInfo.email, contact: donorInfo.phone },
        theme: { color: '#d97706' },
        handler: () => { setDonationRef(data.donationRef); setStep('done'); setLoading(false); },
      });
      rzp.open();
    } catch {
      setError('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-red-900 to-[#1a0a00] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Heart size={36} className="mx-auto mb-3 text-red-400" />
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 mb-2">Support the Temple</h1>
          <p className="text-amber-300">ದೇಣಿಗೆ ನೀಡಿ · ದೇವಾಲಯವನ್ನು ಬೆಂಬಲಿಸಿ</p>
          <p className="text-amber-200/60 text-sm mt-2 max-w-xl mx-auto">
            Your contribution sustains the sacred traditions of Abyadi Sri Mahishamardhini Temple, 
            including the beloved Hunnime Pooja.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 border-b border-amber-100 py-2">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-500">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Donations</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {step === 'done' ? (
          <div className="text-center py-10">
            <div className="w-20 h-20 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You for Your Donation!</h2>
            <p className="text-gray-500 text-sm mb-4">
              May Goddess Mahishamardhini bless you and your family abundantly.
            </p>
            {donationRef && (
              <div className="inline-block bg-amber-50 border border-amber-200 rounded-xl px-6 py-3 mb-4">
                <p className="text-xs text-gray-500">Donation Reference</p>
                <p className="font-bold font-mono text-amber-700">{donationRef}</p>
              </div>
            )}
            <p className="text-xs text-gray-400 mb-6">An 80G/acknowledgment receipt will be sent to your email address.</p>
            <button onClick={() => { setStep('form'); setAmount(''); setCustomAmount(''); setDonorInfo({ name: '', email: '', phone: '', pan: '', message: '' }); }}
              className="bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-amber-700 transition-colors text-sm">
              Donate Again
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Category selection */}
              {step === 'form' && (
                <>
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Choose Donation Category</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {DONATION_CATEGORIES.map((cat) => (
                        <button
                          key={cat.value}
                          onClick={() => setSelectedCategory(cat.value)}
                          className={`p-4 rounded-xl border text-center transition-all ${
                            selectedCategory === cat.value
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-gray-200 hover:border-amber-200 hover:bg-amber-50/30'
                          }`}
                        >
                          <div className="text-2xl mb-1">{cat.icon}</div>
                          <p className="text-xs font-medium text-gray-700 leading-tight">{cat.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">from ₹{cat.minAmount}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Choose Amount</h2>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {QUICK_AMOUNTS.map((a) => (
                        <button
                          key={a}
                          onClick={() => { setAmount(String(a)); setCustomAmount(''); }}
                          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                            amount === String(a) ? 'bg-amber-500 border-amber-500 text-[#1a0a00]' : 'border-gray-200 hover:border-amber-300 text-gray-700'
                          }`}
                        >
                          ₹{a.toLocaleString('en-IN')}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 font-medium">₹</span>
                      <input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <label className="flex items-center gap-2 mt-3 text-sm text-gray-600 cursor-pointer">
                      <input type="checkbox" checked={isRecurring} onChange={(e) => setIsRecurring(e.target.checked)} className="rounded border-gray-300 text-amber-500" />
                      Make this a monthly recurring donation
                    </label>
                  </div>

                  <button
                    onClick={() => setStep('details')}
                    disabled={totalAmount <= 0}
                    className="w-full bg-red-700 hover:bg-red-600 disabled:opacity-40 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Heart size={16} /> Continue to Donor Details
                  </button>
                </>
              )}

              {step === 'details' && (
                <div>
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Your Details</h2>
                  <div className="space-y-4">
                    {[
                      { key: 'name', label: 'Full Name *', type: 'text', placeholder: 'As per PAN card' },
                      { key: 'email', label: 'Email Address *', type: 'email', placeholder: 'For receipt' },
                      { key: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91...' },
                      { key: 'pan', label: 'PAN Number (for 80G receipt)', type: 'text', placeholder: 'ABCDE1234F' },
                      { key: 'message', label: 'Message / Occasion (optional)', type: 'text', placeholder: 'e.g. In memory of, Birthday offering...' },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={donorInfo[field.key as keyof typeof donorInfo]}
                          onChange={(e) => setDonorInfo({ ...donorInfo, [field.key]: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    ))}
                  </div>
                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg p-3 mt-4">
                      <AlertCircle size={14} className="mt-0.5 flex-shrink-0" /> {error}
                    </div>
                  )}
                  <div className="flex gap-3 mt-5">
                    <button onClick={() => setStep('form')} className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                      ← Back
                    </button>
                    <button
                      onClick={handlePayment}
                      disabled={loading || !donorInfo.name || !donorInfo.email || !donorInfo.phone}
                      className="flex-1 bg-red-700 hover:bg-red-600 disabled:opacity-40 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      {loading ? <><Loader2 size={15} className="animate-spin" /> Processing...</> : <><Heart size={14} /> Donate ₹{totalAmount.toLocaleString('en-IN')}</>}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Summary */}
              {totalAmount > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-800 mb-3">Donation Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Category</span>
                      <span className="font-medium text-gray-700">{selectedCat?.icon} {selectedCat?.label}</span>
                    </div>
                    <div className="flex justify-between border-t border-amber-200 pt-2">
                      <span className="font-semibold text-gray-700">Amount</span>
                      <span className="font-bold text-amber-700 text-lg">₹{totalAmount.toLocaleString('en-IN')}</span>
                    </div>
                    {isRecurring && (
                      <div className="text-xs text-green-600 bg-green-50 rounded-lg px-2 py-1">♻️ Monthly recurring</div>
                    )}
                  </div>
                </div>
              )}

              {/* Trust info */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={16} className="text-green-600" />
                  <h3 className="font-semibold text-gray-700 text-sm">Secure & Trusted</h3>
                </div>
                <ul className="space-y-2 text-xs text-gray-500">
                  <li className="flex items-start gap-1.5"><CheckCircle size={12} className="text-green-500 mt-0.5" /> 100% secure payments via Razorpay</li>
                  <li className="flex items-start gap-1.5"><CheckCircle size={12} className="text-green-500 mt-0.5" /> 80G receipt on eligible donations</li>
                  <li className="flex items-start gap-1.5"><CheckCircle size={12} className="text-green-500 mt-0.5" /> Funds used exclusively for temple activities</li>
                  <li className="flex items-start gap-1.5"><CheckCircle size={12} className="text-green-500 mt-0.5" /> Annual accounts published by the Trust</li>
                </ul>
              </div>

              <div className="bg-amber-700/10 border border-amber-200 rounded-xl p-4 text-xs text-amber-800">
                <p className="font-semibold mb-1">🌕 Hunnime Pooja Fund</p>
                <p>Donations to the Hunnime Pooja Fund directly support the elaborate full moon rituals, priest honorarium, flowers, lamps, and annadanam on Pournami days.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
