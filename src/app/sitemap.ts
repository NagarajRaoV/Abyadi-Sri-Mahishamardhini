import { MetadataRoute } from 'next';
import { HUNNIME_DATES_2025_2026 } from '@/lib/temple-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abyadi-mahishamardhini.org';
  const locales = ['en', 'kn', 'hi'];

  const staticPages = [
    '',
    '/about',
    '/darshan',
    '/hunnime-pooja',
    '/sevas',
    '/donations',
    '/festivals',
    '/media',
    '/visit',
    '/contact',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' || page === '/darshan' ? 'daily' : 'weekly',
      priority: page === '' ? 1 : page === '/hunnime-pooja' ? 0.95 : 0.8,
    }))
  );

  // Hunnime dates for structured data (not separate pages but still valuable)
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...staticRoutes,
  ];
}
