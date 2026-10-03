import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      date,
      sevaId,
      devoteeName,
      devoteePhone,
      devoteeEmail,
      gotra,
      nakshatram,
      notes,
      isHunnimeBooking,
      amount,
    } = body;

    // Validate required fields
    if (!date || !sevaId || !devoteeName || !devoteePhone || !devoteeEmail || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create Razorpay order
    const Razorpay = (await import('razorpay')).default;
    const rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await rzp.orders.create({
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: `booking_${Date.now()}`,
      notes: {
        devotee: devoteeName,
        seva: sevaId,
        isHunnime: String(isHunnimeBooking),
      },
    });

    // In production, save to DB via Prisma here
    const bookingRef = `HNM-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;

    return NextResponse.json({
      orderId: order.id,
      bookingRef,
      amount,
      message: 'Order created successfully',
    });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');

  // In production, query from DB via Prisma
  if (type === 'hunnime') {
    return NextResponse.json({
      bookings: [
        { id: '1', devoteeName: 'Sample Devotee', seva: 'Hunnime Abhishekam', date: '2025-11-05', status: 'PAID' },
      ],
    });
  }

  return NextResponse.json({ bookings: [] });
}
