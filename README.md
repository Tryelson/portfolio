# Tryelson Marques · Portfolio

Personal portfolio, bilingual (PT-BR / EN): [tryelsonmarques.vercel.app](https://tryelsonmarques.vercel.app)

## Stack

- **Next.js 16** (App Router, static generation per locale)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Motion** for animations (respects `prefers-reduced-motion`)

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root path redirects to `/pt` or `/en` based on the browser language (`proxy.ts`).

## Structure

```
portfolio/
├── app/[locale]/     # Layout, page and Open Graph image per locale
├── components/
│   ├── sections/     # Hero, Highlights, Approach, Experience, Projects, Contact
│   ├── navigation/   # Floating nav with language switch
│   ├── background/   # Animated background and cursor spotlight
│   └── ui/           # Small reusable pieces
├── content/          # All copy: pt.ts, en.ts and shared types
└── public/           # Photo, resumes (PT/EN) and project screenshots
```

To change any text, edit `content/pt.ts` and `content/en.ts`.
