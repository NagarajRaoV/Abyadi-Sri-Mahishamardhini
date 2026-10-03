'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Moon, Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', labelKn: 'ಮುಖಪುಟ', labelHi: 'मुख पृष्ठ' },
  { href: '/about', label: 'About', labelKn: 'ದೇವಾಲಯ', labelHi: 'मंदिर' },
  { href: '/darshan', label: 'Darshan & Timings', labelKn: 'ದರ್ಶನ', labelHi: 'दर्शन' },
  { href: '/hunnime-pooja', label: 'Hunnime Pooja', labelKn: 'ಹುಣ್ಣಿಮೆ ಪೂಜೆ', labelHi: 'हुन्निमे पूजा', highlight: true },
  { href: '/sevas', label: 'Sevas & Poojas', labelKn: 'ಸೇವೆ', labelHi: 'सेवाएं' },
  { href: '/donations', label: 'Donate', labelKn: 'ದೇಣಿಗೆ', labelHi: 'दान' },
  { href: '/festivals', label: 'Festivals', labelKn: 'ಉತ್ಸವ', labelHi: 'उत्सव' },
  { href: '/visit', label: 'Plan Your Visit', labelKn: 'ಭೇಟಿ', labelHi: 'यात्रा' },
  { href: '/contact', label: 'Contact', labelKn: 'ಸಂಪರ್ಕ', labelHi: 'संपर्क' },
];

const locales = [
  { code: 'en', label: 'English' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'hi', label: 'हिन्दी' },
];

interface HeaderProps {
  locale?: string;
}

export default function Header({ locale = 'en' }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const getLinkLabel = (link: typeof navLinks[0]) => {
    if (locale === 'kn') return link.labelKn;
    if (locale === 'hi') return link.labelHi;
    return link.label;
  };

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split('/');
    const localeList = ['en', 'kn', 'hi'];
    if (localeList.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join('/') || '/');
    setLangOpen(false);
  };

  return (
    <header className="bg-[#1a0a00] text-amber-50 shadow-lg sticky top-0 z-50">
      {/* Top bar — temple name */}
      <div className="bg-gradient-to-r from-[#8B1A1A] via-[#A0522D] to-[#8B1A1A] py-1 text-center text-xs tracking-widest font-medium text-amber-100">
        ॥ ಅಬ್ಯಾಡಿ ಶ್ರೀ ಮಹಿಷಮರ್ದಿನಿ ದೇವಾಲಯ ॥ Abyadi Sri Mahishamardhini Temple ॥
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-lg font-bold text-[#1a0a00] shadow-md group-hover:bg-amber-400 transition-colors">
              🪔
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-amber-400 text-sm leading-tight">Abyadi Sri Mahishamardhini</div>
              <div className="text-amber-200 text-xs">Hosangadi, Udupi · Karnataka</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  link.highlight
                    ? 'bg-amber-500 text-[#1a0a00] hover:bg-amber-400 font-semibold flex items-center gap-1'
                    : 'text-amber-100 hover:text-amber-300 hover:bg-white/10'
                }`}
              >
                {link.highlight && <Moon size={12} />}
                {getLinkLabel(link)}
              </Link>
            ))}
          </nav>

          {/* Right side: Language + Book CTA */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-amber-200 hover:text-amber-100 text-xs px-2 py-1.5 rounded hover:bg-white/10 transition-colors"
                aria-label="Change language"
              >
                <Globe size={14} />
                <span className="hidden sm:inline">{locales.find((l) => l.code === locale)?.label || 'EN'}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white text-gray-800 rounded shadow-lg py-1 min-w-[120px] z-50">
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLocaleChange(l.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-amber-50 transition-colors ${locale === l.code ? 'font-semibold text-amber-700' : ''}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Hunnime CTA */}
            <Link
              href="/hunnime-pooja#book"
              className="hidden sm:flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-[#1a0a00] text-xs font-semibold px-3 py-2 rounded transition-colors"
            >
              <Moon size={13} />
              Book Hunnime
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-amber-200 hover:text-amber-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#120600] border-t border-amber-900/50">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  link.highlight
                    ? 'bg-amber-500 text-[#1a0a00] font-semibold flex items-center gap-2'
                    : 'text-amber-100 hover:bg-white/10'
                }`}
              >
                {link.highlight && <Moon size={14} />}
                {getLinkLabel(link)}
              </Link>
            ))}
            <div className="pt-2 border-t border-amber-900/50">
              <p className="text-amber-500 text-xs px-3 pb-1">Language / ಭಾಷೆ</p>
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { handleLocaleChange(l.code); setMobileOpen(false); }}
                  className={`block w-full text-left px-3 py-2 text-sm rounded ${locale === l.code ? 'text-amber-400 font-semibold' : 'text-amber-200'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
