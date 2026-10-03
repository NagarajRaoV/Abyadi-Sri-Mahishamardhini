'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';
import { TEMPLE_INFO } from '@/lib/temple-data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // Simulate API call
    setSent(true);
    setLoading(false);
  };

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-[#1a0a00] to-[#3d1500] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-4xl mb-3">📞</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 mb-2">Contact Us</h1>
          <p className="text-amber-300">ಸಂಪರ್ಕಿಸಿ · We&apos;re happy to help</p>
        </div>
      </div>

      <div className="bg-amber-50 border-b border-amber-100 py-2">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-500">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Contact</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Temple Office</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <MapPin size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Address</p>
                  <p className="text-sm text-gray-600 mt-1">{TEMPLE_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <Phone size={18} className="text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Phone</p>
                  <a href={`tel:${TEMPLE_INFO.phone}`} className="text-sm text-amber-700 hover:underline">{TEMPLE_INFO.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <MessageCircle size={18} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">WhatsApp</p>
                  <a href={`https://wa.me/${TEMPLE_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-green-700 hover:underline">
                    {TEMPLE_INFO.whatsapp}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <Mail size={18} className="text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Email</p>
                  <a href={`mailto:${TEMPLE_INFO.email}`} className="text-sm text-amber-700 hover:underline">{TEMPLE_INFO.email}</a>
                </div>
              </div>
            </div>

            {/* Office hours */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm">Office Hours</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between"><span>Morning</span><span className="text-amber-600 font-medium">9:00 AM – 12:00 PM</span></div>
                <div className="flex justify-between"><span>Evening</span><span className="text-amber-600 font-medium">5:00 PM – 7:30 PM</span></div>
                <p className="text-xs text-gray-400 mt-2">Closed on temple closure days. Available on Hunnime days with extended hours.</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-600">
              <p className="font-semibold text-amber-800 mb-2">🌕 Hunnime Pooja Inquiries</p>
              <p>For Hunnime Pooja seva bookings, sponsorships, and participation queries, please call or WhatsApp us directly for fastest response.</p>
              <a href={`tel:${TEMPLE_INFO.phone}`} className="inline-flex items-center gap-1 mt-2 text-amber-700 font-semibold text-xs hover:underline">
                <Phone size={11} /> Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-4">Thank you for contacting us. We will respond within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  className="bg-amber-600 text-white font-semibold px-5 py-2 rounded-lg text-sm hover:bg-amber-700 transition-colors">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 bg-white">
                    <option value="">Select a subject</option>
                    <option value="hunnime">Hunnime Pooja Inquiry</option>
                    <option value="seva">Seva / Pooja Booking</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="media">Media / Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                  {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={15} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
