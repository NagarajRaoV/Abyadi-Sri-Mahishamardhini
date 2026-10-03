/**
 * Hunnime (Full Moon / Pournami) utility functions
 * Calculates upcoming full moon dates for the temple schedule
 */

// Known Pournami dates for 2025-2027 (Indian Calendar)
export const HUNNIME_DATES_2025_2026: { date: string; name: string; isSpecial?: boolean; specialNote?: string }[] = [
  { date: '2025-01-13', name: 'Pausha Pournami' },
  { date: '2025-02-12', name: 'Magha Pournami' },
  { date: '2025-03-13', name: 'Phalguna Pournami (Holi)' },
  { date: '2025-04-12', name: 'Chaitra Pournami', isSpecial: true, specialNote: 'Chaitra Navaratri ends' },
  { date: '2025-05-12', name: 'Vaishakha Pournami (Buddha Pournami)', isSpecial: true },
  { date: '2025-06-11', name: 'Jyeshtha Pournami (Vat Pournima)' },
  { date: '2025-07-10', name: 'Ashadha Pournami (Guru Pournima)', isSpecial: true, specialNote: 'Guru Pournima — special discourses' },
  { date: '2025-08-09', name: 'Shravana Pournami (Rakshabandhan)' },
  { date: '2025-09-07', name: 'Bhadrapada Pournami' },
  { date: '2025-10-07', name: 'Ashwin Pournami (Sharad Pournami)', isSpecial: true, specialNote: 'Sharad Pournami — most celebrated' },
  { date: '2025-11-05', name: 'Karthika Pournami', isSpecial: true, specialNote: 'Karthika Pournami — largest gathering of the year' },
  { date: '2025-12-04', name: 'Margashira Pournami' },
  { date: '2026-01-03', name: 'Pausha Pournami' },
  { date: '2026-02-01', name: 'Magha Pournami' },
  { date: '2026-03-03', name: 'Phalguna Pournami' },
  { date: '2026-04-01', name: 'Chaitra Pournami', isSpecial: true, specialNote: 'Ram Navami period' },
  { date: '2026-05-01', name: 'Vaishakha Pournami (Buddha Pournami)', isSpecial: true },
  { date: '2026-05-30', name: 'Jyeshtha Pournami' },
  { date: '2026-06-28', name: 'Ashadha Pournami' },
  { date: '2026-07-28', name: 'Shravana Pournami (Guru Pournima)', isSpecial: true, specialNote: 'Guru Pournima 2026' },
  { date: '2026-08-26', name: 'Bhadrapada Pournami' },
  { date: '2026-09-25', name: 'Ashwin Pournami (Sharad Pournami)', isSpecial: true, specialNote: 'Sharad Pournami — most celebrated' },
  { date: '2026-10-24', name: 'Karthika Pournami', isSpecial: true, specialNote: 'Karthika Pournami — largest gathering' },
  { date: '2026-11-23', name: 'Margashira Pournami' },
  { date: '2026-12-22', name: 'Pausha Pournami' },
  { date: '2027-01-20', name: 'Magha Pournami 2027' },
  { date: '2027-02-19', name: 'Phalguna Pournami 2027' },
];

/**
 * Get the next upcoming Hunnime date from today
 */
export function getNextHunnime(): typeof HUNNIME_DATES_2025_2026[0] | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return (
    HUNNIME_DATES_2025_2026.find((h) => new Date(h.date) >= today) || null
  );
}

/**
 * Get days until next Hunnime
 */
export function getDaysUntilHunnime(): number {
  const next = getNextHunnime();
  if (!next) return 0;
  const diff = new Date(next.date).getTime() - new Date().setHours(0, 0, 0, 0);
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Format a date string to a readable format
 */
export function formatHunnimeDate(dateStr: string, locale: string = 'en-IN'): string {
  return new Date(dateStr).toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get upcoming Hunnime dates (next N)
 */
export function getUpcomingHunnimeDates(count: number = 6): typeof HUNNIME_DATES_2025_2026 {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return HUNNIME_DATES_2025_2026
    .filter((h) => new Date(h.date) >= today)
    .slice(0, count);
}

// Temple darshan timings
export const DARSHAN_TIMINGS = {
  regular: [
    { label: 'Morning', labelKn: 'ಬೆಳಿಗ್ಗೆ', open: '06:00 AM', close: '12:00 PM' },
    { label: 'Afternoon', labelKn: 'ಮಧ್ಯಾಹ್ನ', open: '05:00 PM', close: '08:30 PM' },
  ],
  hunnime: [
    { label: 'Morning', labelKn: 'ಬೆಳಿಗ್ಗೆ', open: '04:30 AM', close: '01:00 PM' },
    { label: 'Evening', labelKn: 'ಸಾಯಂಕಾಲ', open: '04:30 PM', close: '09:30 PM' },
  ],
};

// Aarti timings
export const AARTI_TIMINGS = [
  { name: 'Prabhata Pooja', time: '06:00 AM', hunnimeTime: '05:00 AM' },
  { name: 'Shodashopachar Puja', time: '08:00 AM', hunnimeTime: '08:30 AM (Hunnime Arati)' },
  { name: 'Madhyana Pooja', time: '12:00 PM', hunnimeTime: '12:00 PM' },
  { name: 'Sandhya Pooja', time: '06:00 PM', hunnimeTime: '07:00 PM' },
  { name: 'Ratri Arati', time: '08:00 PM', hunnimeTime: '08:00 PM (Grand Hunnime Ratri Arati)' },
];

// Available sevas
export const SEVAS_DATA = [
  {
    id: 'archana-basic',
    name: 'Sapta Archana',
    nameKn: 'ಸಪ್ತ ಅರ್ಚನೆ',
    description: 'Basic archana with seven types of flowers',
    amount: 50,
    duration: '15 min',
    isHunnimeSpecial: false,
    includes: ['Prasad', 'Archana ticket'],
  },
  {
    id: 'abhisheka',
    name: 'Panchamruta Abhishekam',
    nameKn: 'ಪಂಚಾಮೃತ ಅಭಿಷೇಕ',
    description: 'Sacred bathing of the deity with five sacred liquids (milk, curd, honey, ghee, sugar)',
    amount: 500,
    duration: '45 min',
    isHunnimeSpecial: false,
    includes: ['Prasad', 'Abhisheka ticket', 'Vibhuti & Kumkuma'],
  },
  {
    id: 'hunnime-archana',
    name: 'Hunnime Special Archana',
    nameKn: 'ಹುಣ್ಣಿಮೆ ವಿಶೇಷ ಅರ್ಚನೆ',
    description: 'Full moon archana with 108 names of Goddess Mahishamardhini',
    amount: 200,
    duration: '30 min',
    isHunnimeSpecial: true,
    includes: ['Special Prasad', 'Archana ticket', 'Vibhuti & Kumkuma', 'Flowers'],
  },
  {
    id: 'hunnime-abhisheka',
    name: 'Hunnime Abhishekam Sponsorship',
    nameKn: 'ಹುಣ್ಣಿಮೆ ಅಭಿಷೇಕ ಸ್ಪಾನ್ಸರ್',
    description: 'Sponsor the full moon abhishekam on behalf of your family',
    amount: 1500,
    duration: '1 hour',
    isHunnimeSpecial: true,
    includes: ['Special Prasad', 'Sponsorship certificate', 'Family name recited during puja', 'Vibhuti & Kumkuma'],
  },
  {
    id: 'annadanam',
    name: 'Annadanam (Meal for Devotees)',
    nameKn: 'ಅನ್ನದಾನ',
    description: 'Sponsor free meals for devotees visiting the temple',
    amount: 2500,
    duration: 'Full day',
    isHunnimeSpecial: false,
    includes: ['Receipt', 'Name board at dining area', 'Special blessing from priest'],
  },
  {
    id: 'hunnime-annadanam',
    name: 'Hunnime Annadanam',
    nameKn: 'ಹುಣ್ಣಿಮೆ ಅನ್ನದಾನ',
    description: 'Sponsor free meals for all devotees on Hunnime day (typically 500+ devotees)',
    amount: 10000,
    duration: 'Full day',
    isHunnimeSpecial: true,
    includes: ['Receipt', 'Special name board', 'Priest blessing', 'Certificate of honor'],
  },
  {
    id: 'deepa-seva',
    name: 'Deepa Seva (108 Lamps)',
    nameKn: 'ದೀಪ ಸೇವೆ',
    description: 'Lighting of 108 lamps in the temple complex for auspiciousness',
    amount: 300,
    duration: '30 min',
    isHunnimeSpecial: true,
    includes: ['Prasad', 'Deepa seva ticket'],
  },
  {
    id: 'homam',
    name: 'Chandi Homam',
    nameKn: 'ಚಂಡಿ ಹೋಮ',
    description: 'Vedic fire ritual invoking Goddess Mahishamardhini',
    amount: 5000,
    duration: '3 hours',
    isHunnimeSpecial: false,
    includes: ['Prasad', 'Homam ticket', 'Vibhuti', 'Family name recited', 'Certificate'],
  },
];

// Donation categories
export const DONATION_CATEGORIES = [
  { value: 'GENERAL', label: 'General Donation', labelKn: 'ಸಾಮಾನ್ಯ ದೇಣಿಗೆ', icon: '🙏', minAmount: 100 },
  { value: 'ANNADANAM', label: 'Annadanam (Free Meals)', labelKn: 'ಅನ್ನದಾನ', icon: '🍱', minAmount: 500 },
  { value: 'RENOVATION', label: 'Temple Renovation', labelKn: 'ಜೀರ್ಣೋದ್ಧಾರ', icon: '🏛️', minAmount: 1000 },
  { value: 'FESTIVAL_FUND', label: 'Festival Fund', labelKn: 'ಉತ್ಸವ ನಿಧಿ', icon: '🎉', minAmount: 500 },
  { value: 'HUNNIME_POOJA', label: 'Hunnime Pooja Fund', labelKn: 'ಹುಣ್ಣಿಮೆ ಪೂಜಾ ನಿಧಿ', icon: '🌕', minAmount: 500 },
  { value: 'GOPURAM', label: 'Gopuram Construction', labelKn: 'ಗೋಪುರ ನಿರ್ಮಾಣ', icon: '⛩️', minAmount: 5000 },
  { value: 'EDUCATION', label: 'Vedic Education', labelKn: 'ವೈದಿಕ ಶಿಕ್ಷಣ', icon: '📚', minAmount: 1000 },
];

// Temple info
export const TEMPLE_INFO = {
  name: 'Abyadi Sri Mahishamardhini Temple',
  nameKn: 'ಅಬ್ಯಾಡಿ ಶ್ರೀ ಮಹಿಷಮರ್ದಿನಿ ದೇವಾಲಯ',
  nameHi: 'अब्यादि श्री महिषमर्दिनी मंदिर',
  address: 'Hosangadi, Hole Shankaranarayana, Udupi District, Karnataka 576227',
  phone: '+91 98765 43210',
  email: 'info@abyadi-mahishamardhini.org',
  whatsapp: '+91 98765 43210',
  maps: 'https://maps.google.com/?q=Hole+Shankaranarayana+Temple+Udupi',
  facebook: 'https://facebook.com/abyadi.temple',
  instagram: 'https://instagram.com/abyadi.temple',
  youtube: 'https://youtube.com/@abyaditemple',
  trustName: 'Abyadi Sri Mahishamardhini Temple Trust',
  pan: 'XXXXX0000X',
  registration80G: 'Pending (contact temple office)',
};
