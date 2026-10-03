import type { Metadata } from 'next';
import Link from 'next/link';
import { Play, Moon } from 'lucide-react';
import { getNextHunnime, formatHunnimeDate } from '@/lib/temple-data';

export const metadata: Metadata = {
  title: 'Live Darshan & Media',
  description: 'Watch live darshan and Hunnime Pooja (Full Moon Pooja) arati at Abyadi Sri Mahishamardhini Temple. Live streaming schedule, gallery, and devotional content.',
};

export default function MediaPage() {
  const nextHunnime = getNextHunnime();

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-[#1a0a00] to-[#3d1500] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-4xl mb-3">📺</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 mb-2">Live Darshan & Media</h1>
          <p className="text-amber-300">ನೇರ ದರ್ಶನ ಮತ್ತು ಮಾಧ್ಯಮ</p>
        </div>
      </div>

      <div className="bg-amber-50 border-b border-amber-100 py-2">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-500">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Live Darshan & Media</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Live stream placeholder */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Play size={18} className="text-red-600" />
            Live Darshan / Live Stream
          </h2>
          <div className="bg-[#1a0a00] rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-500/50 flex items-center justify-center mx-auto mb-4">
                <Play size={28} className="text-red-400 ml-1" />
              </div>
              <p className="text-amber-100 font-bold text-lg mb-2">Live Darshan</p>
              <p className="text-amber-200/60 text-sm mb-4">
                Live streaming available on our YouTube channel during aartis and Hunnime Pooja days.
              </p>
              <a
                href="https://youtube.com/@abyaditemple"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                <Play size={14} /> Watch on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Hunnime Live Streaming */}
        <section className="bg-gradient-to-r from-[#1a0a00] to-[#2d1000] text-white rounded-2xl p-8">
          <h2 className="text-xl font-bold text-amber-100 mb-2 flex items-center gap-2">
            <Moon size={20} className="text-amber-400" /> Hunnime Pooja Live Streaming
          </h2>
          {nextHunnime && (
            <p className="text-amber-300 text-sm mb-4">
              Next Hunnime: <strong className="text-amber-200">{nextHunnime.name}</strong> — {formatHunnimeDate(nextHunnime.date)}
            </p>
          )}
          <p className="text-amber-200/70 text-sm mb-6">
            Every full moon (Pournami), the Ratri Hunnime Arati — the grandest ritual of the month — is 
            live-streamed on our YouTube channel. Watch from anywhere in the world and experience the 
            divine blessings of Goddess Mahishamardhini.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { time: '08:30 AM', label: 'Morning Mahamangala Arati', note: 'Hunnime special' },
              { time: '05:30 PM', label: 'Evening Abhishekam', note: 'Hunnime only' },
              { time: '08:00 PM', label: 'Ratri Hunnime Arati', note: 'Main live stream' },
            ].map((stream) => (
              <div key={stream.time} className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <p className="text-amber-400 font-bold text-lg">{stream.time}</p>
                <p className="text-amber-100 font-medium text-sm">{stream.label}</p>
                <p className="text-amber-400/60 text-xs mt-0.5">{stream.note}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href="https://youtube.com/@abyaditemple"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              <Play size={14} /> Subscribe to YouTube
            </a>
            <Link href="/hunnime-pooja#book" className="flex items-center gap-2 border border-amber-400/40 text-amber-300 hover:bg-amber-500/10 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              Book Seva Online
            </Link>
          </div>
        </section>

        {/* Gallery placeholder */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Photo & Video Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: 'Hunnime Pooja', emoji: '🌕', color: 'bg-amber-100' },
              { label: 'Temple Exterior', emoji: '🏛️', color: 'bg-orange-100' },
              { label: 'Abhishekam', emoji: '🪔', color: 'bg-red-100' },
              { label: 'Alankaram', emoji: '🌺', color: 'bg-pink-100' },
              { label: 'Annadanam', emoji: '🍱', color: 'bg-green-100' },
              { label: 'Navaratri', emoji: '🌟', color: 'bg-yellow-100' },
              { label: 'Brahmotsava', emoji: '⛩️', color: 'bg-purple-100' },
              { label: 'Daily Arati', emoji: '🔔', color: 'bg-blue-100' },
            ].map((cat) => (
              <div key={cat.label} className={`${cat.color} rounded-xl aspect-square flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}>
                <span className="text-4xl mb-2">{cat.emoji}</span>
                <span className="text-xs font-medium text-gray-700">{cat.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Full photo gallery available on our Facebook and Instagram pages. Videos on YouTube.
          </p>
        </section>
      </div>
    </div>
  );
}
