import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Bus, Train, Car, Moon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description: 'How to reach Abyadi Sri Mahishamardhini Temple, Hosangadi. Road, bus, and train directions from Udupi, Kundapura, and Shankaranarayana. Special Hunnime day travel guide.',
};

export default function VisitPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-[#1a0a00] to-[#3d1500] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-4xl mb-3">🗺️</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 mb-2">Plan Your Visit</h1>
          <p className="text-amber-300">ಭೇಟಿ ಯೋಜಿಸಿ · Hosangadi, Udupi District, Karnataka</p>
        </div>
      </div>

      <div className="bg-amber-50 border-b border-amber-100 py-2">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-500">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Plan Your Visit</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* How to Reach */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <MapPin size={20} className="text-amber-600" /> How to Reach
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="border border-gray-200 rounded-xl p-5 hover:border-amber-200 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Car size={18} className="text-amber-700" />
                </div>
                <h3 className="font-semibold text-gray-800">By Road</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>From Kundapura</span><span className="text-amber-600 font-medium">~25 km</span></li>
                <li className="flex justify-between"><span>From Udupi</span><span className="text-amber-600 font-medium">~60 km</span></li>
                <li className="flex justify-between"><span>From Shankaranarayana</span><span className="text-amber-600 font-medium">~5 km</span></li>
                <li className="flex justify-between"><span>From Mangalore</span><span className="text-amber-600 font-medium">~90 km</span></li>
              </ul>
              <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                <p className="font-medium mb-1">Route from Kundapura:</p>
                <p>NH66 → Kundapura → Hosangadi road → Hole Shankaranarayana → Hosangadi.</p>
                <p className="mt-1 font-medium">From Udupi:</p>
                <p>NH66 → Kundapura → Hosangadi (1 hour 15 min)</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 hover:border-amber-200 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Bus size={18} className="text-amber-700" />
                </div>
                <h3 className="font-semibold text-gray-800">By Bus</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-medium text-gray-700">KSRTC buses</span> available from Kundapura to Hole Shankaranarayana</li>
                <li>Alight at <strong>Hosangadi</strong> stop (ask conductor)</li>
                <li>Auto-rickshaws available from Shankaranarayana to temple</li>
                <li>Special buses added on Hunnime days from Kundapura and Udupi</li>
              </ul>
              <p className="mt-3 text-xs text-gray-400">Contact the temple office for bus schedule on Hunnime days.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 hover:border-amber-200 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Train size={18} className="text-amber-700" />
                </div>
                <h3 className="font-semibold text-gray-800">By Train</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Nearest Station:</strong> Kundapura (25 km)</li>
                <li><strong>Alternate:</strong> Udupi Station (60 km)</li>
                <li>Trains from Mangalore, Goa, Bangalore to Kundapura</li>
                <li>Taxi/auto from Kundapura station to temple</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Map */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-amber-600" /> Temple Location
          </h2>
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <MapPin size={40} className="text-amber-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-700">Hosangadi, Near Hole Shankaranarayana</p>
              <p className="text-sm text-gray-500">Udupi District, Karnataka 576227</p>
              <a
                href="https://maps.google.com/?q=Hole+Shankaranarayana+Temple+Udupi+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Accommodation</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { type: 'Dharmashalas / Pilgrim Rest Houses', desc: 'Free or nominal-cost accommodation available near the temple. Contact the temple office in advance, especially for Hunnime days.', note: 'Limited capacity — book early for Pournami visits' },
              { type: 'Hotels & Guest Houses', desc: 'Multiple budget and mid-range hotels in Kundapura (25 km) and Udupi (60 km). Hole Shankaranarayana also has a few guesthouses nearby.', note: 'Hotels fill up fast on Karthika and Sharad Pournami' },
            ].map((acc) => (
              <div key={acc.type} className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 mb-2">{acc.type}</h3>
                <p className="text-sm text-gray-600 mb-2">{acc.desc}</p>
                <p className="text-xs text-amber-700 bg-amber-100 rounded-lg px-2 py-1 inline-block">{acc.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hunnime Day Notes */}
        <section className="bg-gradient-to-r from-[#1a0a00] to-[#2d1000] text-white rounded-2xl p-8">
          <h2 className="text-xl font-bold text-amber-100 mb-4 flex items-center gap-2">
            <Moon size={20} className="text-amber-400" /> Special Notes for Hunnime Days
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-amber-200/80">
            {[
              { icon: '🚗', title: 'Parking', desc: 'Extended parking area set up 300m from temple. Follow volunteer directions. On Karthika Pournami, arrive before 6 AM for parking.' },
              { icon: '🚌', title: 'Transport', desc: 'Special shuttle buses run from parking area to temple entrance on major Pournami days. Free service.' },
              { icon: '⏰', title: 'Arrive Early', desc: 'For morning arati — arrive by 7:30 AM. For Ratri Arati (main event) — arrive by 7 PM. On Karthika Pournami, arrive 90 min earlier.' },
              { icon: '🍽️', title: 'Food & Water', desc: 'Annadanam (free meals) served 9 AM–1 PM. Temple canteen open 5 AM–10 PM. Bring water bottles.' },
              { icon: '👶', title: 'Children & Elderly', desc: 'Priority darshan line available. Wheelchair assistance at entrance. Dedicated resting area inside.' },
              { icon: '📱', title: 'Stay Updated', desc: 'Follow our WhatsApp group and Facebook page for real-time updates on crowd levels and parking on Hunnime days.' },
            ].map((note) => (
              <div key={note.title} className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                <span className="text-xl flex-shrink-0">{note.icon}</span>
                <div>
                  <p className="font-semibold text-amber-300 text-sm">{note.title}</p>
                  <p className="text-xs text-amber-100/60 mt-0.5">{note.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
