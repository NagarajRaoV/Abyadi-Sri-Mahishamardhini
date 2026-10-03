import { NextRequest, NextResponse } from 'next/server';
import { SEVAS_DATA } from '@/lib/temple-data';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const hunnimeOnly = searchParams.get('hunnime') === 'true';

  const sevas = hunnimeOnly
    ? SEVAS_DATA.filter((s) => s.isHunnimeSpecial)
    : SEVAS_DATA;

  return NextResponse.json({ sevas });
}
