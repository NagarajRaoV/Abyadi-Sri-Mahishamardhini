import type { Metadata } from 'next';
import Link from 'next/link';
import { Moon, Calendar, Clock, Users, CheckCircle, ChevronDown, ArrowRight, Play } from 'lucide-react';
import {
  getNextHunnime,
  getDaysUntilHunnime,
  formatHunnimeDate,
  getUpcomingHunnimeDates,
  SEVAS_DATA,
} from '@/lib/temple-data';
import HunnimeBookingForm from '@/components/hunnime/HunnimeBookingForm';

export const metadata: Metadata = {
  title: 'Hunnime Pooja — Pournami / Full Moon Pooja',
  description:
    'Experience the famous Hunnime Pooja (Pournami / Full Moon Pooja) at Abyadi Sri Mahishamardhini Temple, Hosangadi. Book sevas online for the next full moon. Ritual schedule, participation guide, and FAQs.',
  keywords: [
    'Hunnime Pooja Abyadi',
    'Pournami Pooja Mahishamardhini',
    'Full Moon Pooja Hosangadi',
    'Hunnime Pooja booking',
    'Pournami Pooja Udupi',
  ],
};

const timeline = [
  { time: '04:30 AM', ritual: 'Nirmalya Visharjana', notes: 'Removal of previous day\'s offerings', icon: '🌙' },
  { time: '05:00 AM', ritual: 'Prabhata Pooja (Dawn Worship)', notes: 'Temple opens for early darshan', icon: '🌅' },
  { time: '06:00 AM', ritual: 'Hunnime Abhishekam Begins', notes: 'Panchamruta & Shodasha Upachara Puja — priests perform elaborate sacred bathing', icon: '🪔', highlight: true },
  { time: '07:30 AM', ritual: 'Special Alankaram', notes: '108 flowers, turmeric, kumkuma decoration of the deity', icon: '🌺', highlight: true },
  { time: '08:30 AM', ritual: 'Mahamangala Arati', notes: 'Morning grand arati — arrive by 7:30 AM for good darshan', icon: '🔔', highlight: true },
  { time: '09:30 AM', ritual: 'Archana & Individual Sevas', notes: 'Devotee-sponsored poojas and archanas begin', icon: '📜' },
  { time: '12:00 PM', ritual: 'Madhyana Pooja & Naivedya', notes: 'Midday offering and brief closure', icon: '☀️' },
  { time: '05:30 PM', ritual: 'Evening Abhishekam', notes: 'Second special abhishekam of the day', icon: '🌸', highlight: true },
  { time: '07:00 PM', ritual: 'Pradosha Pooja', notes: 'Evening puja, entire temple lit with oil lamps', icon: '🪔' },
  { time: '08:00 PM', ritual: 'Ratri Hunnime Arati', notes: 'Grand night arati under the full moon — the most celebrated moment of the day', icon: '🌕', highlight: true, isMain: true },
  { time: '08:45 PM', ritual: 'Prasad Distribution', notes: 'Sacred prasad distributed to all devotees', icon: '🙏' },
];

const faqs = [
  {
    q: 'How crowded does it get on Hunnime days?',
    a: 'Hunnime Poojas typically draw 500–2000+ devotees depending on the month. Karthika Pournami (Oct/Nov) is the most crowded with 3000+ devotees. Arrive 90 minutes before the arati for comfortable darshan. On major Pournami days, expect queues from early morning.',
  },
  {
    q: 'What is the best time to arrive for Hunnime Pooja?',
    a: 'For the morning Mahamangala Arati: arrive by 7:30 AM. For the most spectacular Ratri Hunnime Arati under the full moon: arrive by 7:00 PM to get a good spot. On Karthika Pournami, arrive even earlier.',
  },
  {
    q: 'Is parking available on Hunnime days?',
    a: 'Yes, an extended parking area is set up 300m from the temple. On major Pournami days, a free shuttle service runs between the parking area and the temple entrance. Follow the directions of volunteers near the road.',
  },
  {
    q: 'Can I book Hunnime Pooja seva in advance online?',
    a: 'Yes! You can book up to 3 months in advance online. Popular sevas like Abhishekam Sponsorship and Annadanam fill up fast — we recommend booking at least 2 weeks before the Pournami date.',
  },
  {
    q: 'Is food available on Hunnime days?',
    a: 'Annadanam (free meals for all) is served from 9:00 AM to 1:00 PM on most Hunnime days. Nearby shops and a temple canteen are open from 5:00 AM to 10:00 PM. Special Hunnime prasad is available from the counter.',
  },
  {
    q: 'Are children and elderly welcome?',
    a: 'Absolutely. A priority darshan line is available for the elderly, differently-abled, and families with young children. Wheelchair assistance is available at the temple entrance on request.',
  },
  {
    q: 'Can I watch the Hunnime Arati online?',
    a: 'Yes! The Ratri Hunnime Arati is live-streamed on the temple\'s YouTube channel every full moon. Join the live stream link available on the Media page. You can also sponsor sevas online and they will be performed on your behalf.',
  },
];

export default function HunnimePoojaPage() {
  const nextHunnime = getNextHunnime();
  const daysAway = getDaysUntilHunnime();
  const upcomingDates = getUpcomingHunnimeDates(6);
  const hunnimeSevas = SEVAS_DATA.filter((s) => s.isHunnimeSpecial);

  return (
    <div className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#0d0500] via-[#1a0a00] to-[#2d1000] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, #f59e0b33 0%, transparent 60%), radial-gradient(circle at 20% 80%, #dc262633 0%, transparent 40%)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
            <Moon size={12} /> Signature Ritual
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 mb-3">
            Hunnime Pooja
          </h1>
          <p className="text-amber-400 text-lg sm:text-xl font-medium mb-2">
            ಹುಣ್ಣಿಮೆ ಪೂಜೆ · Pournami / Full Moon Pooja
          </p>
          <p className="text-amber-200/60 text-sm mb-6">
            Abyadi Sri Mahishamardhini Temple, Hosangadi · Udupi, Karnataka
          </p>

          <p className="text-amber-100/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            On every full moon, thousands gather here for the most celebrated ritual at Abyadi Temple —
            the grand <strong className="text-amber-300">Hunnime Pooja</strong>, where the divine energy of 
            Goddess Mahishamardhini is believed to be at its peak.
          </p>

          {/* Countdown */}
          {nextHunnime && (
            <div className="inline-flex flex-col items-center bg-amber-500/15 border border-amber-500/30 rounded-2xl px-8 py-5 mb-8">
              <p className="text-amber-400 text-xs font-semibold mb-1 uppercase tracking-wider">Next Full Moon Pooja</p>
              <p className="text-amber-100 font-bold text-xl">{nextHunnime.name}</p>
              <p className="text-amber-300 text-sm">{formatHunnimeDate(nextHunnime.date)}</p>
              {nextHunnime.specialNote && (
                <p className="text-amber-400 text-xs mt-1 italic">{nextHunnime.specialNote}</p>
              )}
              <div className="mt-3 flex items-center gap-2">
                <span className="bg-amber-500/30 text-amber-200 text-sm font-bold px-3 py-1 rounded-full border border-amber-400/30">
                  🌕 {daysAway} days away
                </span>
              </div>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#book"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#1a0a00] font-bold px-7 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-lg"
            >
              <Moon size={15} />
              Book Hunnime Seva
            </a>
            <a
              href="#schedule"
              className="flex items-center gap-2 border border-amber-400/40 text-amber-200 hover:bg-amber-500/10 font-semibold px-5 py-3 rounded-xl text-sm transition-all"
            >
              <Clock size={14} /> View Schedule
            </a>
            <Link
              href="/media"
              className="flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-5 py-3 rounded-xl text-sm transition-all"
            >
              <Play size={13} /> Watch Live
            </Link>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-14 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Hunnime Pooja?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Hunnime Pooja</strong> (also called <em>Pournami Pooja</em> or <em>Full Moon Pooja</em>) 
                is performed on the day of the full moon every month. At Abyadi Sri Mahishamardhini Temple, 
                this ritual holds extraordinary significance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The full moon amplifies the divine energy of Goddess Mahishamardhini, and devotees firmly 
                believe that prayers offered here on Pournami are answered with special grace. The temple 
                has celebrated this ritual for generations, making it the defining tradition of Abyadi.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The ritual includes an elaborate <em>Panchamruta Abhishekam</em>, decorating the deity with 
                108 varieties of flowers, special fire rituals (homams), and the spectacular 
                <em> Ratri Hunnime Arati</em> — the grand night arati performed under the light of 
                the full moon, which is the most moving spiritual experience at this temple.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 mb-3">Why Hunnime Pooja is Special Here</h3>
              {[
                { icon: '🌕', title: 'Peak Divine Energy', desc: 'The full moon amplifies Goddess Mahishamardhini\'s divine energy. Prayers are believed to be especially powerful.' },
                { icon: '🌊', title: 'Sacred River Energy', desc: 'The proximity of the Sauparnika River is said to amplify the spiritual energy on full moon nights.' },
                { icon: '🪔', title: 'Ancient Tradition', desc: 'This full moon ritual has been performed continuously for generations, making it a living tradition.' },
                { icon: '👁️', title: 'Night Arati Under the Moon', desc: 'The Ratri Arati performed under the open sky with the full moon overhead is a breathtaking experience.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-amber-100">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RITUAL TIMELINE ──────────────────────────────────────── */}
      <section id="schedule" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Ritual Schedule on Hunnime Day</h2>
            <p className="text-gray-500 text-sm">Complete timeline from dawn to midnight</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 sm:left-[120px] top-0 bottom-0 w-px bg-amber-200" />

            <div className="space-y-1">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex gap-4 sm:gap-6 p-4 rounded-xl transition-colors ${item.isMain ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/5 border border-amber-300' : item.highlight ? 'bg-amber-50 border border-amber-100' : ''}`}>
                  {/* Time */}
                  <div className="flex-shrink-0 w-16 sm:w-24 text-right">
                    <span className={`text-xs font-bold ${item.isMain ? 'text-amber-600' : 'text-gray-500'}`}>
                      {item.time}
                    </span>
                  </div>
                  {/* Dot */}
                  <div className={`flex-shrink-0 w-4 h-4 rounded-full border-2 mt-0.5 z-10 ${item.isMain ? 'bg-amber-500 border-amber-400' : item.highlight ? 'bg-amber-400 border-amber-300' : 'bg-white border-amber-200'}`} />
                  {/* Content */}
                  <div className="flex-1">
                    <p className={`font-semibold text-sm ${item.isMain ? 'text-amber-700' : 'text-gray-800'}`}>
                      {item.icon} {item.ritual}
                      {item.isMain && <span className="ml-2 text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">⭐ Main Event</span>}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              * Times are approximate. Actual timings may vary by 15–30 minutes. Extended rituals are observed on 
              Karthika Pournami, Sharad Pournami, and other special full moons.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW TO PARTICIPATE ───────────────────────────────────── */}
      <section className="py-14 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">How to Participate</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* In Person */}
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl">🚶</div>
                <h3 className="font-bold text-gray-800 text-lg">In Person</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Arrive by 7:00 AM for the morning Mahamangala Arati',
                  'Collect your queuing token at the entrance gate on busy Pournami days',
                  'Wear traditional attire (saree/dhoti preferred)',
                  'Photography only in the outer courtyard',
                  'Children and elderly: use the priority darshan line',
                  'For the night arati, arrive by 7:00 PM',
                  'Bring your booking confirmation if you have booked a seva',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Online */}
            <div className="bg-gradient-to-br from-[#1a0a00] to-[#2d1000] text-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-xl">💻</div>
                <h3 className="font-bold text-amber-100 text-lg">Online Participation</h3>
              </div>
              <p className="text-amber-200/80 text-sm mb-4">
                Can&apos;t attend in person? You can still participate in Hunnime Pooja from anywhere in the world.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: '🌕', title: 'Book Hunnime Seva', desc: 'Sponsor a seva online — priests will perform it on your behalf and send photos/video.' },
                  { icon: '📺', title: 'Live Stream', desc: 'Watch the Hunnime Arati live on our YouTube channel every full moon.' },
                  { icon: '💝', title: 'Donate to Hunnime Fund', desc: 'Contribute to the Hunnime Pooja fund and receive blessings in your name.' },
                ].map((opt) => (
                  <li key={opt.title} className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                    <span className="text-lg">{opt.icon}</span>
                    <div>
                      <p className="font-semibold text-amber-300 text-sm">{opt.title}</p>
                      <p className="text-xs text-amber-100/60">{opt.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HUNNIME SEVAS ────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Hunnime Pooja Special Sevas</h2>
            <p className="text-gray-500 text-sm">Available only on Pournami days — book your slot in advance</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hunnimeSevas.map((seva) => (
              <div key={seva.id} className="border border-amber-200 rounded-xl p-5 bg-amber-50 hover:bg-amber-100/50 transition-colors">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mb-3">
                  <Moon size={10} /> Hunnime Only
                </span>
                <h3 className="font-semibold text-gray-800 mb-1">{seva.name}</h3>
                <p className="text-xs text-gray-500 mb-1 italic">{seva.nameKn}</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">{seva.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {seva.includes.map((item) => (
                    <span key={item} className="text-xs bg-white text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-amber-700 font-bold text-xl">₹{seva.amount}</span>
                    <span className="text-xs text-gray-400 ml-2">{seva.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ─────────────────────────────────────────── */}
      <section id="book" className="py-14 bg-gradient-to-b from-[#1a0a00] to-[#2d1000]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
              <Moon size={12} /> ONLINE BOOKING
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 mb-2">Book Hunnime Pooja Seva</h2>
            <p className="text-amber-200/60 text-sm">Select a date, seva, and complete payment securely</p>
          </div>
          <HunnimeBookingForm upcomingDates={upcomingDates} hunnimeSevas={hunnimeSevas} />
        </div>
      </section>

      {/* ── UPCOMING DATES ───────────────────────────────────────── */}
      <section className="py-14 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Calendar size={20} className="text-amber-600" /> Upcoming Hunnime Dates
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingDates.map((h, idx) => (
              <div
                key={h.date}
                className={`rounded-xl p-4 border ${
                  idx === 0
                    ? 'bg-amber-500 border-amber-400 text-white'
                    : h.isSpecial
                    ? 'bg-white border-amber-300'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-semibold ${idx === 0 ? 'text-amber-100' : 'text-amber-600'}`}>
                    {idx === 0 ? '🌕 Next Up' : '🌔'}
                  </span>
                  {h.isSpecial && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${idx === 0 ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'}`}>
                      Special
                    </span>
                  )}
                </div>
                <p className={`font-bold text-sm ${idx === 0 ? 'text-white' : 'text-gray-800'}`}>{h.name}</p>
                <p className={`text-xs mt-0.5 ${idx === 0 ? 'text-amber-100' : 'text-gray-500'}`}>
                  {formatHunnimeDate(h.date)}
                </p>
                {h.specialNote && (
                  <p className={`text-xs mt-1 italic ${idx === 0 ? 'text-amber-100' : 'text-amber-600'}`}>
                    {h.specialNote}
                  </p>
                )}
                <a
                  href="#book"
                  className={`mt-3 block text-center text-xs font-semibold py-1.5 rounded-lg transition-colors ${
                    idx === 0
                      ? 'bg-[#1a0a00] text-amber-300 hover:bg-[#0d0500]'
                      : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  Book Seva
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm">Everything you need to know about Hunnime Pooja</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-gray-800 text-sm hover:bg-amber-50 transition-colors list-none">
                  {faq.q}
                  <ChevronDown size={16} className="text-amber-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Moon size={32} className="mx-auto mb-3 text-white/80" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Join Us for the Next Hunnime Pooja</h2>
          <p className="text-amber-100/80 text-sm mb-6">
            {nextHunnime ? (
              <>
                <strong className="text-white">{nextHunnime.name}</strong> — {formatHunnimeDate(nextHunnime.date)} · {daysAway} days away
              </>
            ) : (
              'Check our festival calendar for upcoming Hunnime dates'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#book" className="bg-white text-orange-700 font-bold px-7 py-3 rounded-xl text-sm hover:bg-amber-50 transition-colors">
              Book Hunnime Seva
            </a>
            <Link href="/donations?category=HUNNIME_POOJA" className="border border-white/40 text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors">
              Donate to Hunnime Fund
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
