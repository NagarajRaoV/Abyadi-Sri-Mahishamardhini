import Link from 'next/link';
import { Moon, Clock, Calendar, Heart, ArrowRight, Play, Star } from 'lucide-react';
import { getNextHunnime, getDaysUntilHunnime, formatHunnimeDate, getUpcomingHunnimeDates, SEVAS_DATA, DONATION_CATEGORIES, DARSHAN_TIMINGS, AARTI_TIMINGS } from '@/lib/temple-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home — Abyadi Sri Mahishamardhini Temple',
  description: 'Official home of Abyadi Sri Mahishamardhini Temple, Hosangadi. Famous for Hunnime Pooja (Full Moon Pooja). Book sevas, donate, and plan your visit to this sacred temple in Udupi, Karnataka.',
};

export default function HomePage() {
  const nextHunnime = getNextHunnime();
  const daysAway = getDaysUntilHunnime();
  const upcomingHunnimeDates = getUpcomingHunnimeDates(4);
  const featuredSevas = SEVAS_DATA.slice(0, 4);

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#1a0a00] via-[#3d1500] to-[#1a0a00] text-white overflow-hidden">
        {/* Decorative mandala pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          {/* Hunnime badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <Moon size={13} />
            ⟡ Famous for Hunnime Pooja (Pournami) ⟡
            <Moon size={13} />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-100 mb-4 leading-tight">
            Abyadi Sri<br />
            <span className="text-amber-400">Mahishamardhini Temple</span>
          </h1>
          <p className="text-amber-300 text-base sm:text-lg mb-2 font-medium">
            ಅಬ್ಯಾಡಿ ಶ್ರೀ ಮಹಿಷಮರ್ದಿನಿ ದೇವಾಲಯ
          </p>
          <p className="text-amber-200/70 text-sm sm:text-base mb-8">
            Hosangadi · Hole Shankaranarayana · Udupi District, Karnataka 576227
          </p>

          <p className="text-amber-100/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Blessings of Goddess Mahishamardhini — destroyer of Mahishasura.<br />
            Every full moon, the temple comes alive with the sacred <strong className="text-amber-300">Hunnime Pooja</strong>.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              href="/hunnime-pooja#book"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#1a0a00] font-bold px-6 py-3 rounded-lg text-sm transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              <Moon size={16} />
              Book Hunnime Pooja
            </Link>
            <Link
              href="/sevas"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-5 py-3 rounded-lg text-sm transition-all"
            >
              Book Seva / Pooja
            </Link>
            <Link
              href="/donations"
              className="flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-all"
            >
              <Heart size={14} />
              Donate Now
            </Link>
            <Link
              href="/media"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-5 py-3 rounded-lg text-sm transition-all"
            >
              <Play size={14} />
              Live Darshan
            </Link>
          </div>

          {/* Next Hunnime countdown */}
          {nextHunnime && (
            <div className="inline-block bg-[#1a0a00]/80 border border-amber-500/40 rounded-xl px-6 py-4 text-center">
              <p className="text-amber-400 text-xs font-semibold mb-1 flex items-center justify-center gap-1">
                <Moon size={12} /> Next Hunnime (Full Moon) Pooja
              </p>
              <p className="text-amber-100 font-bold text-lg">{nextHunnime.name}</p>
              <p className="text-amber-300 text-sm mb-2">{formatHunnimeDate(nextHunnime.date)}</p>
              <div className="flex items-center justify-center gap-3">
                <span className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-500/30">
                  🌕 {daysAway} days away
                </span>
                <Link href="/hunnime-pooja#book" className="text-amber-400 hover:text-amber-300 text-xs font-medium underline">
                  Book Now →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── QUICK INFO CARDS ──────────────────────────────────────── */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Today's darshan */}
            <div className="bg-white rounded-xl p-4 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={15} className="text-amber-600" />
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Darshan Today</span>
              </div>
              {DARSHAN_TIMINGS.regular.map((t) => (
                <div key={t.label} className="text-xs text-gray-600">
                  <span className="font-medium">{t.label}:</span> {t.open} – {t.close}
                </div>
              ))}
            </div>

            {/* Next aarti */}
            <div className="bg-white rounded-xl p-4 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-600 text-sm">🪔</span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Next Aarti</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">{AARTI_TIMINGS[1].name}</p>
              <p className="text-amber-600 font-semibold text-sm">{AARTI_TIMINGS[1].time}</p>
            </div>

            {/* Next Hunnime */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-4 text-white shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Moon size={15} />
                <span className="text-xs font-semibold uppercase tracking-wide opacity-90">Next Hunnime</span>
              </div>
              <p className="font-bold text-sm">{nextHunnime?.name}</p>
              <p className="text-xs opacity-90">{nextHunnime ? formatHunnimeDate(nextHunnime.date, 'en-IN').split(',')[0] : '—'}</p>
              <p className="text-xs mt-1 font-semibold">{daysAway} days away 🌕</p>
            </div>

            {/* Today's events */}
            <div className="bg-white rounded-xl p-4 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={15} className="text-amber-600" />
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Today</span>
              </div>
              <p className="text-sm font-medium text-gray-700">Regular Darshan Day</p>
              <p className="text-xs text-gray-500 mt-1">No special events today</p>
              <Link href="/festivals" className="text-xs text-amber-600 font-medium hover:underline">View calendar →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HUNNIME POOJA HIGHLIGHT ───────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#1a0a00] to-[#2d1000] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #f59e0b 0%, transparent 70%)`,
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <Moon size={12} /> SIGNATURE RITUAL
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-amber-100 mb-2">
                Hunnime Pooja
              </h2>
              <p className="text-amber-400 font-medium mb-4">Pournami / Full Moon Pooja</p>
              <p className="text-amber-100/80 text-base leading-relaxed mb-6">
                On every full moon night, thousands of devotees gather at Abyadi Sri Mahishamardhini Temple 
                to witness the magnificent <strong className="text-amber-300">Hunnime Pooja</strong> — a grand 
                ritual celebrating the divine power of Goddess Mahishamardhini. The temple glows with 
                hundreds of lamps, fragrant flowers, and resonates with Vedic chants under the full moon sky.
              </p>
              <p className="text-amber-100/70 text-sm leading-relaxed mb-6">
                The ritual includes an elaborate <em>Panchamruta Abhishekam</em>, 108-flower alankaram, 
                special homams, and a breathtaking <em>Mahamangala Arati</em> at night under the full moon.
                Karthika Pournami (October/November) sees the largest gathering of the year.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/hunnime-pooja"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#1a0a00] font-bold px-5 py-3 rounded-lg text-sm transition-all"
                >
                  <Moon size={15} />
                  Hunnime Pooja Details
                </Link>
                <Link
                  href="/hunnime-pooja#book"
                  className="flex items-center gap-2 border border-amber-400 text-amber-300 hover:bg-amber-500/10 font-semibold px-5 py-3 rounded-lg text-sm transition-all"
                >
                  Book Hunnime Seva
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Upcoming Hunnime dates */}
            <div className="bg-[#120600] border border-amber-900/50 rounded-2xl p-6">
              <h3 className="text-amber-400 font-semibold mb-4 flex items-center gap-2">
                <Calendar size={16} /> Upcoming Hunnime Dates
              </h3>
              <div className="space-y-3">
                {upcomingHunnimeDates.map((h, idx) => (
                  <div
                    key={h.date}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      idx === 0 ? 'bg-amber-500/20 border border-amber-500/30' : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-400 text-sm font-semibold">
                          {idx === 0 ? '🌕 Next:' : '🌔'}
                        </span>
                        <span className={`text-sm font-medium ${idx === 0 ? 'text-amber-100' : 'text-amber-200/70'}`}>
                          {h.name}
                        </span>
                        {h.isSpecial && (
                          <span className="bg-red-600/30 text-red-300 text-xs px-1.5 py-0.5 rounded">Special</span>
                        )}
                      </div>
                      <p className={`text-xs mt-0.5 ${idx === 0 ? 'text-amber-300' : 'text-amber-200/50'}`}>
                        {formatHunnimeDate(h.date)}
                      </p>
                      {h.specialNote && (
                        <p className="text-xs text-amber-400 mt-0.5 italic">{h.specialNote}</p>
                      )}
                    </div>
                    <Link
                      href="/hunnime-pooja#book"
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                        idx === 0
                          ? 'bg-amber-500 text-[#1a0a00] hover:bg-amber-400'
                          : 'border border-amber-600/40 text-amber-400 hover:bg-amber-500/10'
                      }`}
                    >
                      Book
                    </Link>
                  </div>
                ))}
              </div>
              <Link
                href="/festivals"
                className="block text-center text-amber-400/70 hover:text-amber-400 text-xs mt-4 transition-colors"
              >
                View full festival calendar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ─────────────────────────────────────────── */}
      <section className="py-14 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-amber-600 text-3xl mb-4">🙏</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">About the Temple</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Nestled in the serene Western Ghats near Hole Shankaranarayana, <strong>Abyadi Sri Mahishamardhini Temple</strong> is 
              a revered shrine dedicated to <strong>Goddess Mahishamardhini</strong> — the divine form of Durga who vanquished 
              the demon Mahishasura. The temple's ancient traditions, especially the 
              <strong className="text-amber-700"> Hunnime Pooja</strong>, draw pilgrims from across Karnataka and beyond.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The temple complex sits at Hosangadi, near the confluence of the Sauparnika River, surrounded by lush greenery. 
              It is believed that prayers offered here, especially on Hunnime (full moon) days, are answered with special grace 
              by the Goddess.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Read Full History <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── POPULAR SEVAS ─────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Popular Sevas & Poojas</h2>
            <p className="text-gray-500 text-sm">Sponsor a sacred ritual at the temple</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredSevas.map((seva) => (
              <div
                key={seva.id}
                className={`rounded-xl border p-5 flex flex-col ${
                  seva.isHunnimeSpecial
                    ? 'border-amber-300 bg-amber-50'
                    : 'border-gray-200 bg-white hover:border-amber-200 hover:bg-amber-50/30'
                } transition-colors`}
              >
                {seva.isHunnimeSpecial && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mb-3 self-start">
                    <Moon size={10} /> Hunnime Special
                  </span>
                )}
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{seva.name}</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed flex-1">{seva.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-amber-700 font-bold text-lg">₹{seva.amount}</span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{seva.duration}</span>
                </div>
                <Link
                  href={`/sevas#${seva.id}`}
                  className="block text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs py-2 rounded-lg transition-colors"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/sevas" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-600 text-sm">
              View all sevas & poojas <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DONATION SECTION ──────────────────────────────────────── */}
      <section className="py-14 bg-gradient-to-r from-red-900 to-[#1a0a00] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Heart size={28} className="text-red-400 mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 mb-2">Support the Temple</h2>
            <p className="text-amber-200/70 text-sm max-w-xl mx-auto">
              Your contribution sustains the divine traditions of Abyadi Sri Mahishamardhini Temple and ensures the 
              continuation of Hunnime Pooja and other sacred rituals.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {DONATION_CATEGORIES.map((cat) => (
              <Link
                key={cat.value}
                href={`/donations?category=${cat.value}`}
                className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-4 text-center transition-all group"
              >
                <div className="text-2xl mb-1">{cat.icon}</div>
                <p className="text-xs font-medium text-amber-100 group-hover:text-amber-300 transition-colors leading-tight">
                  {cat.label}
                </p>
                <p className="text-xs text-amber-300/60 mt-0.5">from ₹{cat.minAmount}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/donations"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#1a0a00] font-bold px-8 py-3 rounded-lg transition-all"
            >
              <Heart size={16} />
              Donate Now
            </Link>
            <p className="text-amber-200/50 text-xs mt-3">100% Secure Payments · 80G Receipt Available</p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS / DEVOTEE VOICES ─────────────────────────── */}
      <section className="py-14 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Devotee Experiences</h2>
            <p className="text-gray-500 text-sm">Voices from those who attended Hunnime Pooja</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Savitha Hegde',
                location: 'Udupi',
                text: 'The Hunnime Pooja at Abyadi temple is unlike anywhere else. The midnight arati under the full moon, with hundreds of lamps lit simultaneously, is an experience that stays with you forever.',
                rating: 5,
              },
              {
                name: 'Ramesh Bhat',
                location: 'Bangalore',
                text: 'I book the Hunnime Abhishekam online every month. The online booking system is very smooth, and I receive a confirmation with all details. The prasad delivery is a bonus!',
                rating: 5,
              },
              {
                name: 'Latha Kamath',
                location: 'Kundapura',
                text: 'Karthika Pournami at Abyadi is spectacular. Thousands of devotees, the entire temple complex lit with thousands of deepas, and the energy of Goddess Mahishamardhini is palpable.',
                rating: 5,
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-amber-100 shadow-sm">
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS BAR ───────────────────────────────────────── */}
      <section className="bg-[#1a0a00] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { href: '/hunnime-pooja', label: 'Hunnime Pooja', icon: '🌕', highlight: true },
              { href: '/darshan', label: 'Darshan Timings', icon: '⏰' },
              { href: '/sevas', label: 'Book Sevas', icon: '🙏' },
              { href: '/festivals', label: 'Festival Calendar', icon: '📅' },
              { href: '/media', label: 'Live Darshan', icon: '📺' },
              { href: '/visit', label: 'Plan Your Visit', icon: '🗺️' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all text-center ${
                  link.highlight
                    ? 'bg-amber-500/20 border-amber-500/40 hover:bg-amber-500/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <span className="text-2xl">{link.icon}</span>
                <span className={`text-xs font-medium ${link.highlight ? 'text-amber-300' : 'text-amber-100/70'}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
