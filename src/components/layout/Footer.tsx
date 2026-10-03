import Link from 'next/link';
import { TEMPLE_INFO } from '@/lib/temple-data';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a0a00] text-amber-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🪔</span>
              <div>
                <h3 className="font-bold text-amber-400 text-lg">Abyadi Sri Mahishamardhini Temple</h3>
                <p className="text-amber-300 text-sm">ಅಬ್ಯಾಡಿ ಶ್ರೀ ಮಹಿಷಮರ್ದಿನಿ ದೇವಾಲಯ</p>
              </div>
            </div>
            <p className="text-amber-200/80 text-sm mb-4 leading-relaxed">
              A sacred shrine dedicated to Goddess Mahishamardhini, famous for its grand Hunnime Pooja 
              (Full Moon Pooja) that draws thousands of devotees every month. Located in the serene 
              Western Ghats near Hole Shankaranarayana, Udupi district, Karnataka.
            </p>
            <div className="space-y-2 text-sm text-amber-200/80">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-amber-400 flex-shrink-0" />
                <span>{TEMPLE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-amber-400 flex-shrink-0" />
                <a href={`tel:${TEMPLE_INFO.phone}`} className="hover:text-amber-300 transition-colors">
                  {TEMPLE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-amber-400 flex-shrink-0" />
                <a href={`mailto:${TEMPLE_INFO.email}`} className="hover:text-amber-300 transition-colors">
                  {TEMPLE_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-amber-200/80">
              {[
                { href: '/hunnime-pooja', label: '🌕 Hunnime Pooja', highlight: true },
                { href: '/sevas', label: 'Book Sevas & Poojas' },
                { href: '/donations', label: 'Donate to Temple' },
                { href: '/darshan', label: 'Darshan Timings' },
                { href: '/festivals', label: 'Festival Calendar' },
                { href: '/media', label: 'Live Darshan' },
                { href: '/visit', label: 'Plan Your Visit' },
                { href: '/about', label: 'Temple History' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-amber-300 transition-colors ${link.highlight ? 'text-amber-400 font-medium' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Timings + Social */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Temple Timings</h4>
            <div className="space-y-2 text-sm text-amber-200/80 mb-6">
              <div className="flex justify-between">
                <span>Morning</span>
                <span className="text-amber-300">6:00 AM – 12:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Evening</span>
                <span className="text-amber-300">5:00 PM – 8:30 PM</span>
              </div>
              <div className="mt-2 pt-2 border-t border-amber-900/50">
                <p className="text-amber-400 text-xs font-medium mb-1">🌕 Hunnime Days</p>
                <div className="flex justify-between text-xs">
                  <span>Morning</span>
                  <span className="text-amber-300">4:30 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Evening</span>
                  <span className="text-amber-300">4:30 PM – 9:30 PM</span>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-amber-400 mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href={TEMPLE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-amber-900/50 flex items-center justify-center hover:bg-amber-700 transition-colors text-amber-200 text-xs font-bold"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href={TEMPLE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-amber-900/50 flex items-center justify-center hover:bg-amber-700 transition-colors text-amber-200 text-xs font-bold"
                  aria-label="Instagram"
                >
                  ig
                </a>
                <a
                  href={TEMPLE_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-amber-900/50 flex items-center justify-center hover:bg-amber-700 transition-colors text-amber-200 text-xs font-bold"
                  aria-label="YouTube"
                >
                  yt
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-amber-900/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-amber-200/50">
          <p>© {new Date().getFullYear()} {TEMPLE_INFO.trustName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-300 transition-colors">Terms of Use</Link>
            <Link href="/admin" className="hover:text-amber-300 transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
