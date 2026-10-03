import { NextResponse } from 'next/server';
import { HUNNIME_DATES_2025_2026, getNextHunnime, getDaysUntilHunnime, getUpcomingHunnimeDates } from '@/lib/temple-data';

export async function GET() {
  const nextHunnime = getNextHunnime();
  const daysAway = getDaysUntilHunnime();
  const upcoming = getUpcomingHunnimeDates(12);

  return NextResponse.json({
    nextHunnime,
    daysAway,
    upcoming,
    allDates: HUNNIME_DATES_2025_2026,
  });
}
