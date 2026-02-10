import { NextResponse } from 'next/server';

// Simple in-memory storage for MVP (replace with database in production)
const waitlist: string[] = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Add to waitlist
    if (!waitlist.includes(email)) {
      waitlist.push(email);
      console.log('Waitlist signup:', email);
      console.log('Total waitlist:', waitlist.length);
    }

    // TODO: Send to email service, database, etc.
    // For now, just log it

    return NextResponse.json({ success: true, position: waitlist.length });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ count: waitlist.length });
}
