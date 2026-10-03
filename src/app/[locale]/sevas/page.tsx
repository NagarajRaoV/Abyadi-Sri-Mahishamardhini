import type { Metadata } from 'next';
import Link from 'next/link';
import { Moon } from 'lucide-react';
import { SEVAS_DATA } from '@/lib/temple-data';

export const metadata: Metadata = {
  title: 'Sevas & Poojas',
  description: 'Book sevas and poojas at Abyadi Sri Mahishamardhini Temple. Special Hunnime Poojas, daily archanas, abhishekams, and more. Online booking available.',
};

export default function SevasPage() {
  const hunnimeSevas = SEVAS_DATA.filter((s) => s.isHunnimeSpecial);
  const dailySevas = SEVAS_DATA.filter((s) => !s.isHunnimeSpecial);

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-[#1a0a00] to-[#3d1500] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-4xl mb-3">🙏</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 mb-2">Sevas & Poojas</h1>
          <p className="text-amber-300">ಸೇವೆ ಮತ್ತು ಪೂಜೆ ಬುಕ್ಕಿಂಗ್</p>
          <p className="text-amber-200/60 text-sm mt-2 max-w-xl mx-auto">
            Sponsor a sacred ritual at Abyadi Sri Mahishamardhini Temple. Your seva is performed by 
            experienced temple priests, and your name/gotra is recited during the ritual.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 border-b border-amber-100 py-2">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-500">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Sevas & Poojas</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Hunnime Special Sevas */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Moon size={20} className="text-amber-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">Hunnime Special Sevas</h2>
              <p className="text-xs text-gray-500">Available only on Pournami (full moon) days</p>
            </div>
            <Link href="/hunnime-pooja#book" className="ml-auto bg-amber-500 text-[#1a0a00] font-bold text-xs px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors">
              Book Hunnime Seva →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hunnimeSevas.map((seva) => (
              <SevaCard key={seva.id} seva={seva} isHunnime />
            ))}
          </div>
        </section>

        {/* Daily Sevas */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Daily Sevas & Poojas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dailySevas.map((seva) => (
              <SevaCard key={seva.id} seva={seva} />
            ))}
          </div>
        </section>

        {/* Booking note */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm text-gray-600">
          <h3 className="font-bold text-gray-800 mb-3">How to Book a Seva</h3>
          <ol className="space-y-2">
            {[
              'Click "Book Now" on any seva above.',
              'Select your preferred date and time slot.',
              'Enter your name, gotra, nakshatram, and contact details.',
              'Complete secure payment via Razorpay (UPI/Cards/NetBanking).',
              'Receive instant e-confirmation and receipt on email.',
              'On the day of the seva, the priest will recite your name and perform the ritual.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-gray-400">
            For group bookings, Brahmotsava sponsorships, or custom sevas, please contact the temple office directly.
          </p>
        </div>
      </div>
    </div>
  );
}

function SevaCard({ seva, isHunnime = false }: { seva: typeof SEVAS_DATA[0]; isHunnime?: boolean }) {
  return (
    <div id={seva.id} className={`rounded-xl border p-5 flex flex-col ${isHunnime ? 'border-amber-300 bg-amber-50' : 'border-gray-200 bg-white hover:border-amber-200 hover:bg-amber-50/30'} transition-colors`}>
      {isHunnime && (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mb-3 self-start">
          <Moon size={10} /> Hunnime Only
        </span>
      )}
      <h3 className="font-semibold text-gray-800 mb-0.5">{seva.name}</h3>
      {seva.nameKn && <p className="text-xs text-amber-600 italic mb-2">{seva.nameKn}</p>}
      <p className="text-xs text-gray-500 leading-relaxed mb-3 flex-1">{seva.description}</p>
      <div className="flex flex-wrap gap-1 mb-3">
        {seva.includes.map((item) => (
          <span key={item} className="text-xs bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded-full">
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-amber-700 font-bold text-xl">₹{seva.amount}</span>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{seva.duration}</span>
      </div>
      <Link
        href={isHunnime ? '/hunnime-pooja#book' : `/sevas/book?seva=${seva.id}`}
        className="block text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors"
      >
        Book Now
      </Link>
    </div>
  );
}
