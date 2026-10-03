import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Moon, AlertCircle, Info } from 'lucide-react';
import { DARSHAN_TIMINGS, AARTI_TIMINGS } from '@/lib/temple-data';

export const metadata: Metadata = {
  title: 'Darshan & Timings',
  description: 'Darshan timings, aarti schedule, and special Hunnime Pooja day extended timings for Abyadi Sri Mahishamardhini Temple, Hosangadi.',
};

export default function DarshanPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a0a00] to-[#3d1500] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-4xl mb-3">⏰</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 mb-2">Darshan & Timings</h1>
          <p className="text-amber-300">ದರ್ಶನ ಮತ್ತು ಸಮಯ ವೇಳಾಪಟ್ಟಿ</p>
        </div>
      </div>

      <div className="bg-amber-50 border-b border-amber-100 py-2">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-500">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Darshan & Timings</span>
        </div>
      </div>

      {/* Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-start gap-2 text-sm text-amber-800">
            <AlertCircle size={15} className="mt-0.5 text-amber-600 flex-shrink-0" />
            <span>
              <strong>Notice:</strong> Temple timings may change during festivals, Hunnime (Full Moon) days, and special occasions. 
              Please check this page or call the temple before visiting.
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Regular Timings */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Clock size={20} className="text-amber-600" /> Regular Daily Timings
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {DARSHAN_TIMINGS.regular.map((timing) => (
              <div key={timing.label} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-700 mb-2">{timing.label} Darshan</h3>
                <p className="text-amber-700 font-bold text-2xl">
                  {timing.open} — {timing.close}
                </p>
                <p className="text-gray-400 text-sm mt-1">{timing.labelKn}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-2">
            <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-700">
              The temple remains closed for a brief period between 12:00 PM and 5:00 PM for daily maintenance and priests&apos; rest.
            </p>
          </div>
        </section>

        {/* Aarti Schedule */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            🪔 Aarti & Pooja Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-100">
                  <th className="text-left px-4 py-3 rounded-tl-lg font-semibold text-gray-700">Ritual</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Regular Days</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg font-semibold text-amber-700 flex items-center gap-1">
                    <Moon size={13} /> Hunnime Days
                  </th>
                </tr>
              </thead>
              <tbody>
                {AARTI_TIMINGS.map((aarti, i) => (
                  <tr key={aarti.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-800">{aarti.name}</td>
                    <td className="px-4 py-3 text-gray-600">{aarti.time}</td>
                    <td className="px-4 py-3 text-amber-700 font-medium">{aarti.hunnimeTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Hunnime Day Special Timings */}
        <section className="bg-gradient-to-r from-[#1a0a00] to-[#2d1000] text-white rounded-2xl p-8">
          <h2 className="text-xl font-bold text-amber-100 mb-2 flex items-center gap-2">
            <Moon size={20} className="text-amber-400" /> Hunnime (Full Moon) Day Extended Timings
          </h2>
          <p className="text-amber-200/70 text-sm mb-6">
            On every Pournami (full moon), the temple observes extended timings to accommodate the large 
            number of devotees who come for the special Hunnime Pooja.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {DARSHAN_TIMINGS.hunnime.map((timing) => (
              <div key={timing.label} className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-4">
                <h3 className="text-amber-300 font-medium mb-1">{timing.label} Darshan</h3>
                <p className="text-amber-100 font-bold text-2xl">
                  {timing.open} — {timing.close}
                </p>
              </div>
            ))}
          </div>
          <p className="text-amber-400 text-xs">
            * Karthika Pournami, Sharad Pournami, and other special Hunnime days may have further extended timings. Check announcements.
          </p>
        </section>

        {/* Dress Code & Rules */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Temple Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: '👗',
                title: 'Dress Code',
                points: [
                  'Traditional attire preferred: saree, salwar, or churidar for women',
                  'Dhoti or pyjama-kurta for men',
                  'No shorts, bermudas, or sleeveless tops',
                  'Footwear must be removed at the entrance',
                ],
              },
              {
                icon: '📷',
                title: 'Photography',
                points: [
                  'Photography allowed only in the outer courtyard and gardens',
                  'Photography strictly prohibited inside the sanctum sanctorum',
                  'Video recording of aartis from the public viewing area is permitted',
                  'Live streaming from phones inside the sanctum is not allowed',
                ],
              },
              {
                icon: '🙏',
                title: 'Conduct',
                points: [
                  'Maintain silence and reverence inside the temple',
                  'Switch phones to silent mode inside the temple',
                  'Queue discipline is strictly enforced on Hunnime days',
                  'Children and elderly may use the priority darshan line',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <div className="text-3xl mb-2">{section.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-3">{section.title}</h3>
                <ul className="space-y-1.5">
                  {section.points.map((p) => (
                    <li key={p} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
