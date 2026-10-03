# 🪔 Abyadi Sri Mahishamardhini Temple — Official Website

> **Dedicated to Goddess Mahishamardhini · Famous for Hunnime Pooja (Pournami / Full Moon Pooja)**  
> Hosangadi, Hole Shankaranarayana, Udupi District, Karnataka 576227

---

## Overview

A modern, mobile-first, multilingual web application for **Abyadi Sri Mahishamardhini Temple**. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, PostgreSQL (Prisma), and Razorpay payment integration.

### Key Features

| Feature | Details |
|---|---|
| 🌕 **Hunnime Pooja** | Dedicated page, ritual timeline, online seva booking |
| 🙏 **Online Seva Booking** | Multi-step form with Razorpay payment |
| 💝 **Donations** | 6 categories, recurring, 80G receipts |
| 📅 **Festival Calendar** | Hunnime dates highlighted, 2025–2026 |
| 📺 **Live Darshan** | YouTube streaming integration |
| 🌐 **Multilingual** | English, ಕನ್ನಡ, हिन्दी |
| 🗺️ **Plan Your Visit** | Directions, Hunnime-day transport notes |
| 🔐 **Admin Dashboard** | Bookings, donations, sevas, events management |
| 🔍 **SEO Optimised** | Schema.org (PlaceOfWorship), OG tags, sitemap |
| 🔒 **Secure** | Security headers, CSRF, HTTPS |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, SSR)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (saffron/gold/deep-red palette)
- **Fonts:** Inter + Noto Sans Kannada
- **i18n:** next-intl (EN / KN / HI)
- **Database:** PostgreSQL via Prisma ORM
- **Payments:** Razorpay (UPI/Cards/NetBanking)
- **Deployment:** Vercel (recommended) or any Node.js host

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- PostgreSQL database (local or cloud — Supabase/Railway recommended)
- Razorpay account (test/live)

### 1. Clone & Install

```bash
git clone https://github.com/your-org/abyadi-temple.git
cd abyadi-temple
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in:

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `RAZORPAY_KEY_ID` | Razorpay Key ID (from dashboard) |
| `RAZORPAY_KEY_SECRET` | Razorpay Key Secret |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Same Key ID (browser-safe) |
| `JWT_SECRET` | Random string for admin JWT |
| `SMTP_*` | Email server for receipts |

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database (dev)
npx prisma db push

# Seed initial data (sevas, timings, etc.)
npx prisma db seed
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to [http://localhost:3000/en](http://localhost:3000/en).

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # All localized pages
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About the Temple
│   │   ├── darshan/        # Darshan & Timings
│   │   ├── hunnime-pooja/  # ⭐ Hunnime Pooja (signature page)
│   │   ├── sevas/          # Sevas & Poojas listing
│   │   ├── donations/      # Donation page
│   │   ├── festivals/      # Festival & event calendar
│   │   ├── media/          # Live Darshan & Gallery
│   │   ├── visit/          # Plan Your Visit
│   │   ├── contact/        # Contact form
│   │   └── admin/          # Admin dashboard
│   ├── api/
│   │   ├── bookings/       # Booking + Razorpay orders
│   │   ├── donations/      # Donation + Razorpay orders
│   │   ├── sevas/          # Seva listing API
│   │   └── hunnime/        # Hunnime dates API
│   ├── layout.tsx          # Root layout (metadata, structured data)
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header with language switcher
│   │   └── Footer.tsx      # Full-featured footer
│   └── hunnime/
│       └── HunnimeBookingForm.tsx  # 5-step booking form
├── lib/
│   ├── temple-data.ts      # Hunnime dates, sevas, timings data
│   └── prisma.ts           # Prisma client singleton
├── i18n.ts                 # next-intl configuration
└── middleware.ts           # Locale routing middleware
messages/
├── en.json                 # English translations
├── kn.json                 # Kannada translations
└── hi.json                 # Hindi translations
prisma/
└── schema.prisma           # Full DB schema
```

---

## Admin Guide (for Temple Staff)

### Accessing the Admin Dashboard

Navigate to `/admin` (or `/en/admin`). Login with admin credentials.

### Managing Hunnime Pooja Details

1. Go to **Admin → Hunnime Pooja Schedule**
2. Each Pournami date has: name, date, ritual timeline, special notes
3. To add a new Hunnime date: click "Add Hunnime Date" and fill in the form
4. Mark major Pournami days (Karthika, Sharad) as "Special" for prominent display

### Adding/Editing Sevas

1. Go to **Admin → Sevas & Poojas**
2. Toggle "Hunnime Special" for sevas only available on full moon days
3. Set capacity limits to prevent overbooking

### Viewing Bookings

1. Go to **Admin → Bookings**
2. Filter by "Hunnime Bookings" to see full moon day reservations
3. Export to CSV for temple records
4. Confirm/cancel bookings and mark payment status

### Managing Donations

1. Go to **Admin → Donations**
2. View by category (including Hunnime Pooja Fund)
3. Generate/resend 80G receipts from the actions menu

### Updating Darshan Timings

1. Go to **Admin → Darshan Timings & Notices**
2. Update "Regular" timings for normal days
3. Update "Hunnime" timings separately for full moon days
4. Post notices for temple closure, special events, etc.

### Uploading Gallery Photos

1. Go to **Admin → Gallery**
2. Upload photos and tag them as "Hunnime Pooja", "Festival", "Daily", etc.
3. Mark Hunnime Pooja photos as "Featured" to appear on the Hunnime page

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set all environment variables in the Vercel dashboard under **Settings → Environment Variables**.

### Other Platforms (Railway, Render, DigitalOcean)

```bash
npm run build
npm start
```

Ensure `DATABASE_URL` and all Razorpay keys are set in the deployment environment.

---

## SEO Configuration

The site is pre-configured for strong SEO targeting:

- **Primary keywords:** "Hunnime Pooja Abyadi", "Pournami Pooja Mahishamardhini", "Full Moon Pooja Hosangadi"
- **Schema.org:** `PlaceOfWorship` structured data in root layout
- **Hreflang:** EN/KN/HI alternate language tags
- **Sitemap:** Auto-generated at `/sitemap.xml`
- **OpenGraph + Twitter Cards:** Configured for social sharing

---

## Razorpay Integration

The site uses Razorpay for:

1. **Seva/Hunnime Pooja Bookings** — `/api/bookings` creates an order, client opens Razorpay checkout
2. **Donations** — `/api/donations` creates an order, client opens Razorpay checkout

To test payments, use Razorpay test mode keys and test card numbers from the [Razorpay docs](https://razorpay.com/docs/payments/payments/test-card-upi-details/).

For production: replace `rzp_test_*` keys with `rzp_live_*` keys.

---

## Multilingual Support

Translations are in `messages/` directory:
- `messages/en.json` — English
- `messages/kn.json` — Kannada (ಕನ್ನಡ)  
- `messages/hi.json` — Hindi (हिन्दी)

To add a new language (e.g., Tulu):
1. Create `messages/tulu.json` with all keys from `en.json`
2. Add `'tulu'` to the `locales` array in `src/middleware.ts` and `src/i18n.ts`

---

## License

© Abyadi Sri Mahishamardhini Temple Trust. All rights reserved.

---

*Built with dedication to Goddess Mahishamardhini and the devotees of Abyadi Temple.*  
*ॐ महिषमर्दिन्यै नमः*
