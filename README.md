# Fayllabs company website

Professional company site for **Fayllabs** (`faycallabs.com`).

- Brand: Fayllabs
- Business email: bahria@faycallabs.com
- Stack: Next.js 14 (App Router) + TypeScript + CSS
- Deploy target: Vercel

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home — value prop, what Fayllabs does, CTA |
| `/about` | Company blurb — digital products & online services worldwide |
| `/services` | Digital products, e-commerce / stores, software tools |
| `/contact` | mailto bahria@faycallabs.com |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/support` | Support & Refund Policy |

SEO: unique titles/descriptions, Open Graph tags, `public/robots.txt`, `app/sitemap.ts`.

## Local development

```bash
cd /workspace/fayllabs-site
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start   # optional: preview production build
```

## Deploy on Vercel (do this when ready — not done automatically)

1. Push this folder to a Git repo, or import the project in the Vercel dashboard.
2. In Vercel: **Add New Project** → select the repo / directory `fayllabs-site`.
3. Framework preset: **Next.js** (auto-detected). Build command: `npm run build`. Output: default.
4. Deploy. Confirm the `*.vercel.app` URL loads all pages over HTTPS.
5. **DNS (important):** `faycallabs.com` currently points to **Squarespace**. After the Vercel deploy looks good, switch DNS to Vercel:
   - In Vercel → Project → Settings → Domains → add `faycallabs.com` and `www.faycallabs.com`.
   - At your DNS host, replace Squarespace A/CNAME records with the A/CNAME values Vercel shows (typically A record for apex + CNAME for `www`).
   - Wait for DNS propagation, then verify HTTPS on the live domain.
6. Do **not** point the domain at Vercel until the Vercel deployment is ready, or the site will go down during the cutover.

## Notes for Paymentwall / merchant review

- Clear company identity (Fayllabs logo mark + name)
- Working contact email on Contact + Footer
- Real Privacy, Terms, and Support & Refund pages
- Concrete description of digital products / online stores / software tools
- No lorem ipsum, fake reviews, fake clients, fake stats, or invented office addresses

## Project isolation

This site lives only in `/workspace/fayllabs-site`. Do not mix with boostcrown, followers-site, or other apps.
