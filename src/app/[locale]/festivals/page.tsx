import type { Metadata } from 'next';
import Link from 'next/link';
import { Moon, Calendar } from 'lucide-react';
import { HUNNIME_DATES_2025_2026, formatHunnimeDate } from '@/lib/temple-data';

export const metadata: Metadata = {
  title: 'Festivals & Events Calendar',
  description: 'Festival calendar for Abyadi Sri Mahishamardhini Temple. Hunnime (full moon) dates, Navaratri, Brahmotsava, and all major temple events.',
};

const festivals = [
  { date: '2025-10-02', name: 'Navaratri Begins', description: 'Nine nights of Goddess worship', icon: '🌟', category: 'FESTIVAL' },
  { date: '2025-10-02', name: 'Navaratri Begins', description: 'Nine nights of Goddess worship with special sevas every day', icon: '🌟', category: 'FESTIVAL' },
  { date: '2025-10-07', name: 'Sharad Pournami (Hunnime Pooja)', description: 'Special full moon pooja during Navaratri — grandest celebration', icon: '🌕', category: 'HUNNIME', isHunnime: true },
  { date: '2025-10-10', name: 'Vijayadashami (Dasara)', description: 'Dasara celebration with grand procession of the deity', icon: '🎊', category: 'FESTIVAL' },
  { date: '2025-11-05', name: 'Karthika Pournami (Hunnime Pooja)', description: 'Largest gathering of the year — thousands of devotees, special extended timings', icon: '🌕', category: 'HUNNIME', isHunnime: true, isSpecial: true },
  { date: '2025-12-04', name: 'Margashira Pournami (Hunnime Pooja)', description: 'Monthly full moon pooja', icon: '🌕', category: 'HUNNIME', isHunnime: true },
  { date: '2026-01-03', name: 'Pausha Pournami (Hunnime Pooja)', description: 'Monthly full moon pooja', icon: '🌕', category: 'HUNNIME', isHunnime: true },
  { date: '2026-01-14', name: 'Makara Sankranti', description: 'Harvest festival with special puja and sesame offerings', icon: '🌾', category: 'FESTIVAL' },
  { date: '2026-02-01', name: 'Magha Pournami (Hunnime Pooja)', description: 'Monthly full moon pooja', icon: '🌕', category: 'HUNNIME', isHunnime: true },
  { date: '2026-03-08', name: 'Annual Temple Brahmotsava Begins', description: '3-day annual festival with special rituals, processions, and cultural programs', icon: '⛩️', category: 'BRAHMOTSAVA', isSpecial: true },
];

export default function FestivalsPage() {
  const upcomingHunnimeDates = HUNNIME_DATES_2025_2026.filter((h) => new Date(h.date) >= new Date()).slice(0, 12);

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-[#1a0a00] to-[#3d1500] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-4xl mb-3">📅</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 mb-2">Festivals & Events</h1>
          <p className="text-amber-300">ಉತ್ಸವ ಮತ್ತು ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳು</p>
        </div>
      </div>

      <div className="bg-amber-50 border-b border-amber-100 py-2">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-500">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Festivals & Events</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Hunnime calendar */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Moon size={20} className="text-amber-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">Hunnime (Full Moon) Pooja Dates</h2>
              <p className="text-xs text-gray-500">Next 12 months — mark your calendar</p>
            </div>
            <Link href="/hunnime-pooja#book" className="ml-auto bg-amber-500 text-[#1a0a00] font-bold text-xs px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors hidden sm:block">
              Book Hunnime Seva
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {upcomingHunnimeDates.map((h, idx) => (
              <div
                key={h.date}
                className={`rounded-xl p-4 border ${
                  idx === 0 ? 'bg-amber-500 border-amber-400' : h.isSpecial ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200'
                }`}
              >
                <div className="text-xl mb-1">🌕</div>
                <p className={`font-semibold text-xs ${idx === 0 ? 'text-white' : 'text-gray-800'}`}>{h.name}</p>
                <p className={`text-xs mt-0.5 ${idx === 0 ? 'text-amber-100' : 'text-gray-400'}`}>
                  {formatHunnimeDate(h.date, 'en-IN').split(',').slice(0, 2).join(',')}
                </p>
                {h.specialNote && (
                  <p className={`text-xs mt-1 italic ${idx === 0 ? 'text-amber-100' : 'text-amber-600'}`}>{h.specialNote}</p>
                )}
                {h.isSpecial && idx !== 0 && (
                  <span className="inline-block mt-1 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Special</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Festival list */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Calendar size={20} className="text-amber-600" />
            <h2 className="text-xl font-bold text-gray-800">All Festivals & Special Events</h2>
          </div>
          <div className="space-y-3">
            {festivals.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((event, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 p-4 rounded-xl border ${
                  event.isHunnime ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-200 hover:border-amber-100'
                } transition-colors`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                  event.isHunnime ? 'bg-amber-100' : 'bg-gray-100'
                }`}>
                  {event.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-gray-800 text-sm">{event.name}</p>
                        {event.isHunnime && (
                          <span className="inline-flex items-center gap-0.5 text-xs bg-amber-500/10 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded-full">
                            <Moon size={9} /> Hunnime
                          </span>
                        )}
                        {event.isSpecial && !event.isHunnime && (
                          <span className="text-xs bg-red-100 text-red-700 border border-red-200 px-1.5 py-0.5 rounded-full">Special</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{event.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-semibold text-gray-700">
                        {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                      </p>
                      <p className="text-xs text-gray-400">
                        {new Date(event.date).getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
