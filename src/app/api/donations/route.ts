import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, pan, message, amount, category, isRecurring } = body;

    if (!name || !email || !amount || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (amount < 1) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
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
      receipt: `donation_${Date.now()}`,
      notes: {
        donor: name,
        category,
        pan: pan || '',
      },
    });

    const donationRef = `DON-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;

    // In production: save to DB, send confirmation email, generate 80G PDF

    return NextResponse.json({
      orderId: order.id,
      donationRef,
      amount,
      category,
      message: 'Donation order created',
    });
  } catch (error) {
    console.error('Donation API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  // In production, query from DB
  const donations = [
    { id: '1', donorName: 'Devotee', category: 'HUNNIME_POOJA', amount: 1000, status: 'PAID' },
  ];

  return NextResponse.json({
    donations: category ? donations.filter((d) => d.category === category) : donations,
  });
}
