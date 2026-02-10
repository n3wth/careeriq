# 🚀 Quick Setup Guide - CareerIQ

## 1. Add Stripe Keys to Vercel

1. Go to https://dashboard.stripe.com/apikeys
2. Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)
3. Copy your **Publishable key** (starts with `pk_test_` or `pk_live_`)
4. Go to https://vercel.com/n3wth/careeriq/settings/environment-variables
5. Add these variables:
   - `STRIPE_SECRET_KEY` = your secret key
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your publishable key
   - `NEXT_PUBLIC_URL` = `https://careeriq-six.vercel.app` (or your custom domain)
6. Click **Save**
7. Redeploy: `vercel --prod` or trigger from Vercel dashboard

## 2. Test Payment Flow

1. Visit https://careeriq-six.vercel.app/waitlist
2. Enter test email
3. Click "Reserve Founder Spot"
4. You'll be redirected to Stripe Checkout
5. Use test card: `4242 4242 4242 4242` (any future date, any CVC)
6. Complete checkout
7. Verify webhook events in Stripe dashboard

## 3. Set Up Custom Domain (Optional)

### Option A: Vercel Domain
1. Go to https://vercel.com/n3wth/careeriq/settings/domains
2. Add domain: `careeriq.newth.ai` or `careeriq.app`
3. Follow DNS instructions

### Option B: Register New Domain
1. Buy domain from Namecheap/Cloudflare
2. Point nameservers to Vercel
3. Add domain in Vercel settings

## 4. Add Analytics

```bash
cd /Users/n3wth/.openclaw/workspace/revenue-sprint/careeriq
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// In the component:
<body>
  {children}
  <Analytics />
</body>
```

## 5. Create OG Image

Create `public/og-image.png` (1200x630px) with:
- CareerIQ logo
- Tagline: "Get Promoted Faster with AI Career Intelligence"
- Clean design matching brand

Add to `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  // ... existing
  openGraph: {
    images: ['/og-image.png'],
  },
};
```

## 6. Set Up Email Notifications

When someone joins waitlist, send email:

```bash
npm install @sendgrid/mail
# or
npm install resend
```

Update `app/api/waitlist/route.ts` to send welcome email.

## 7. Monitor & Track

- **Vercel Dashboard:** https://vercel.com/n3wth/careeriq
- **Stripe Dashboard:** https://dashboard.stripe.com
- **GitHub Repo:** https://github.com/n3wth/careeriq

## 8. Share & Launch

Tweet template:
```
🚀 Just launched CareerIQ - AI-powered career intelligence for ambitious professionals

Stop guessing where you stand. Track progress, identify skill gaps, and build the promotion case your manager can't ignore.

✅ Free waitlist + founder access (limited spots)
🔗 https://careeriq-six.vercel.app

Built in 1 day. Ship fast. 💪
```

LinkedIn post:
```
Excited to share CareerIQ - a career intelligence platform I built to help professionals get promoted faster.

After years at Google, I learned promotions aren't just about hard work - they're about:
📊 Documenting your impact
🎯 Tracking the right metrics  
🚀 Building a compelling case

CareerIQ makes this simple with:
- Career progress tracking
- AI promotion readiness score
- Skill gap analysis
- Learning recommendations

Join the waitlist: https://careeriq-six.vercel.app

#CareerGrowth #TechCareers #ProductManagement
```

## ✅ You're Done!

Your SaaS is LIVE and ready to accept customers. Now focus on:
1. Driving traffic
2. Collecting signups  
3. Getting feedback
4. Building the full product based on validation

Good luck! 🚀
