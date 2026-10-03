import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, History } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Temple',
  description: 'History and significance of Abyadi Sri Mahishamardhini Temple, Hosangadi. Learn about Goddess Mahishamardhini and the ancient traditions, especially Hunnime Pooja.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#1a0a00] to-[#3d1500] text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-4xl mb-3">🏛️</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 mb-2">About the Temple</h1>
          <p className="text-amber-300">ದೇವಾಲಯದ ಇತಿಹಾಸ ಮತ್ತು ಮಹತ್ವ</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-amber-50 border-b border-amber-100 py-2">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-500">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">About the Temple</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Deity Section */}
        <section className="mb-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">THE DEITY</span>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Goddess Mahishamardhini</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Mahishamardhini</strong> (also known as Mahishasura Mardini) is the divine form of Goddess Durga who 
                slew the demon Mahishasura. The name means "the one who slew Mahisha (buffalo demon)." She is depicted 
                as a powerful goddess riding a lion, bearing multiple weapons, and trampling the buffalo demon underfoot.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In the Shakti tradition, Mahishamardhini represents the triumph of good over evil, the power of divine 
                feminine energy, and the protection of her devotees from all misfortunes. She is especially worshipped 
                during Navaratri and on every full moon (Hunnime/Pournami) day.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Goddess at Abyadi is considered extremely powerful, and local tradition holds that she especially 
                blesses her devotees on Pournami (full moon) nights — which is why the Hunnime Pooja became the 
                temple's most celebrated ritual.
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 text-center border border-amber-200">
              <div className="text-8xl mb-4">🌸</div>
              <p className="text-amber-800 font-bold text-lg mb-1">Goddess Mahishamardhini</p>
              <p className="text-amber-600 text-sm mb-2">ಮಹಿಷಮರ್ದಿನಿ ದೇವಿ</p>
              <p className="text-gray-500 text-xs italic">
                "Ya Devi Sarvabhuteshu, Shakti Rupena Samsthita,<br/>
                Namastasyai, Namastasyai, Namastasyai Namo Namah"
              </p>
              <p className="text-gray-400 text-xs mt-2">— Devi Mahatmyam</p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-14 bg-amber-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <History size={20} className="text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-800">History & Legend</h2>
          </div>
          <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
            <p>
              The <strong>Abyadi Sri Mahishamardhini Temple</strong> at Hosangadi (near Hole Shankaranarayana) is one of the 
              ancient temples in the Udupi district of Karnataka. The temple stands on the banks of the Sauparnika River, 
              surrounded by the lush vegetation of the Western Ghats.
            </p>
            <p>
              According to local tradition and the temple&apos;s <em>sthala purana</em> (local legend), the deity 
              manifested spontaneously at this location centuries ago when a devotee farmer discovered a 
              swayambhu (self-manifested) idol of Goddess Mahishamardhini buried in the earth. 
              The idol glowed with divine light, and the temple was subsequently built to enshrine her.
            </p>
            <p>
              The <strong>Hunnime Pooja</strong> tradition at this temple is believed to have been initiated by 
              the original founder-priests, who observed that the Goddess&apos;s presence was especially felt on 
              full moon nights. Over generations, the ritual grew in scale and devotion, with devotees 
              traveling from distant villages to participate in the full moon pooja.
            </p>
            <p>
              The temple has been renovated multiple times over the centuries, with the current structure 
              incorporating traditional Kerala-Karnataka style temple architecture, featuring a distinctive 
              sloping tiled roof (<em>nalukettu</em>), carved wooden pillars, and a sacred <em>deepastambha</em> 
              (lamp pillar) in the courtyard.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Temple Architecture & Shrines</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏛️', name: 'Main Sanctum (Garbhagriha)', desc: 'Houses the principal deity Mahishamardhini. The idol is adorned with gold ornaments and fresh flowers daily.' },
              { icon: '🪔', name: 'Deepastambha (Lamp Pillar)', desc: 'The tall lamp pillar in the outer courtyard, lit with hundreds of oil lamps during Hunnime Pooja.' },
              { icon: '🌳', name: 'Sacred Grove (Devara Kaadu)', desc: 'The ancient sacred grove adjacent to the temple, believed to be home to divine serpents (Naga).' },
              { icon: '🔱', name: 'Navagraha Shrine', desc: 'Nine planetary deities\' shrine for complete blessings and removal of astrological doshas.' },
              { icon: '🐍', name: 'Naga Pratishthe', desc: 'Sacred serpent installation. Naga worship is an important tradition in this region.' },
              { icon: '🏠', name: 'Annadanam Hall', desc: 'Dining hall where free meals (annadanam) are served to devotees, especially on Hunnime days.' },
            ].map((shrine) => (
              <div key={shrine.name} className="border border-gray-200 rounded-xl p-5 hover:border-amber-200 hover:bg-amber-50/30 transition-colors">
                <div className="text-3xl mb-2">{shrine.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{shrine.name}</h3>
                <p className="text-sm text-gray-500">{shrine.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Significance of Hunnime */}
        <section className="mb-14 bg-gradient-to-r from-[#1a0a00] to-[#2d1000] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-100 mb-4 flex items-center gap-3">
            🌕 Why Hunnime Pooja is Special Here
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-amber-100/80 text-sm leading-relaxed">
            <div>
              <p className="mb-3">
                The Hunnime Pooja (Pournami Pooja) at Abyadi Sri Mahishamardhini Temple is considered one of the 
                most powerful full moon rituals in the Udupi-Kundapura region. Devotees believe that:
              </p>
              <ul className="space-y-2">
                {[
                  'The Goddess is in her most powerful form on full moon nights',
                  'Prayers offered here during Pournami are answered with special grace',
                  'The river Sauparnika nearby amplifies the sacred energy on full moon nights',
                  'Attending the midnight arati removes accumulated sins and brings prosperity',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-amber-100/70">The special Hunnime Poojas to look out for:</p>
              <ul className="space-y-2">
                {[
                  { name: 'Karthika Pournami', desc: 'Largest gathering — October/November' },
                  { name: 'Sharad Pournami', desc: 'Full moon of Ashwini — October' },
                  { name: 'Guru Pournima', desc: 'Special discourses and spiritual programs' },
                  { name: 'Buddha Pournami', desc: 'Vaishakha full moon — May' },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-2 bg-white/5 rounded-lg p-2">
                    <span className="text-amber-400 text-lg">🌕</span>
                    <div>
                      <p className="font-medium text-amber-300 text-sm">{item.name}</p>
                      <p className="text-xs text-amber-100/60">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/hunnime-pooja" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#1a0a00] font-bold px-5 py-2.5 rounded-lg text-sm transition-all">
              Full Hunnime Pooja Details <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Location */}
        <section className="bg-gray-50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={18} className="text-amber-600" />
            <h2 className="text-xl font-bold text-gray-800">Location</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            <strong>Hosangadi, near Hole Shankaranarayana</strong>, Udupi District, Karnataka — PIN 576227.
          </p>
          <p className="text-gray-500 text-sm mb-4">
            The temple is approximately 25 km from Kundapura, 60 km from Udupi, and 5 km from 
            Hole Shankaranarayana on the Kundapura-Agumbe road.
          </p>
          <div className="flex gap-3">
            <Link href="/visit" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
              Plan Your Visit <ArrowRight size={13} />
            </Link>
            <a
              href="https://maps.google.com/?q=Hole+Shankaranarayana+Temple+Udupi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <MapPin size={13} /> Google Maps
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
