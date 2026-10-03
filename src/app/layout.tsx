import type { Metadata } from 'next';
import { Inter, Noto_Sans_Kannada } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoKannada = Noto_Sans_Kannada({ subsets: ['kannada'], variable: '--font-kannada', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://abyadi-mahishamardhini.org'),
  title: {
    default: 'Abyadi Sri Mahishamardhini Temple | Hosangadi, Udupi',
    template: '%s | Abyadi Mahishamardhini Temple',
  },
  description:
    'Official website of Abyadi Sri Mahishamardhini Temple, Hosangadi, Udupi district, Karnataka. Famous for Hunnime Pooja (Full Moon Pooja). Book sevas, donate, and get darshan timings.',
  keywords: [
    'Abyadi Mahishamardhini Temple',
    'Hunnime Pooja',
    'Pournami Pooja',
    'Full Moon Pooja',
    'Hole Shankaranarayana Temple',
    'Hosangadi Temple',
    'Udupi Temple',
    'Karnataka Temple',
    'Mahishamardhini Temple',
    'Pournami Pooja Mahishamardhini',
    'Hunnime Pooja Abyadi',
  ],
  authors: [{ name: 'Abyadi Sri Mahishamardhini Temple Trust' }],
  creator: 'Abyadi Sri Mahishamardhini Temple Trust',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://abyadi-mahishamardhini.org',
    siteName: 'Abyadi Sri Mahishamardhini Temple',
    title: 'Abyadi Sri Mahishamardhini Temple — Famous for Hunnime Pooja',
    description:
      'Visit or virtually attend the magnificent Hunnime Pooja (Full Moon Pooja) at Abyadi Sri Mahishamardhini Temple, Hosangadi, Udupi, Karnataka. Book sevas, donate, and plan your pilgrimage.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abyadi Sri Mahishamardhini Temple | Hunnime Pooja',
    description: 'Official temple website with darshan timings, Hunnime Pooja booking, sevas, donations, and festivals.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://abyadi-mahishamardhini.org',
    languages: {
      'en': 'https://abyadi-mahishamardhini.org/en',
      'kn': 'https://abyadi-mahishamardhini.org/kn',
      'hi': 'https://abyadi-mahishamardhini.org/hi',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoKannada.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'PlaceOfWorship',
              name: 'Abyadi Sri Mahishamardhini Temple',
              alternateName: ['Abyadi Mahishamardhini Temple', 'ಅಬ್ಯಾಡಿ ಶ್ರೀ ಮಹಿಷಮರ್ದಿನಿ ದೇವಾಲಯ'],
              description:
                'Ancient temple dedicated to Goddess Mahishamardhini, famous for Hunnime Pooja (Full Moon Pooja)',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hosangadi',
                addressLocality: 'Hole Shankaranarayana',
                addressRegion: 'Karnataka',
                postalCode: '576227',
                addressCountry: 'IN',
              },
              telephone: '+91-98765-43210',
              email: 'info@abyadi-mahishamardhini.org',
              url: 'https://abyadi-mahishamardhini.org',
              sameAs: [
                'https://facebook.com/abyadi.temple',
                'https://instagram.com/abyadi.temple',
                'https://youtube.com/@abyaditemple',
              ],
              openingHours: ['Mo-Su 06:00-12:00', 'Mo-Su 17:00-20:30'],
              image: 'https://abyadi-mahishamardhini.org/images/temple-exterior.jpg',
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        {/* Razorpay SDK — loaded async for payment pages */}
        <script src="https://checkout.razorpay.com/v1/checkout.js" async />
      </body>
    </html>
  );
}
