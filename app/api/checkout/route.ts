import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';

const stripe = new Stripe(stripeKey, {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: Request) {
  try {
    // Check if Stripe is properly configured
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes('placeholder')) {
      return NextResponse.json({ 
        error: 'Stripe not configured. Please contact support.' 
      }, { status: 503 });
    }

    const { email } = await request.json();

    // Create Stripe checkout session for pre-order
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'CareerIQ Pro - Founder Access',
              description: 'Lifetime founder pricing - $99/month forever',
              images: ['https://careeriq.newth.ai/og-image.png'],
            },
            recurring: {
              interval: 'month',
            },
            unit_amount: 9900, // $99.00
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        metadata: {
          plan: 'founder',
        },
        trial_period_days: 30, // 30-day free trial
      },
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/waitlist`,
      metadata: {
        email,
        plan: 'founder',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
