# Fix My Forklift — Website

Astro static site for fixmyforklift.com.au. Built to deploy on Cloudflare Pages (free).

---

## Quick start (local dev)

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`. Make changes, browser auto-reloads.

To build for production:
```bash
npm run build
```
Output goes to `dist/` — that's what gets deployed.

---

## Before you deploy — three things to fix

### 1. Contact form access key (2 minutes)
1. Go to https://web3forms.com
2. Enter your email, click "Create Access Key", verify email
3. Copy the key
4. Open `src/pages/index.astro`
5. Search for `YOUR_ACCESS_KEY_HERE` and replace with your key
6. Done — free for 250 submissions/month, way more than you'll need

If you ever want to change the form provider:
- **Formspree** (free 50/mo): change form `action` to your Formspree URL
- **Cloudflare Pages Forms** (free, native): add `data-static-form-name="contact"` to the form
- **mailto fallback**: change `action="mailto:info@fixmyforklift.com.au"` and `method="POST"` to `method="GET"`

### 2. Images
Right now the site has zero images (intentional — clean, fast, prioritises type). If you want to add the forklift photos from your current site:
1. Save them into `public/images/`
2. Reference them as `/images/filename.jpg` anywhere in the markup

The site is designed to look great without images, but a few sharp photos in the services or hero sections would only help.

### 3. Double-check the copy
Particularly:
- The stats numbers (30 years, 8 years foreman — change if I got those wrong)
- The "Dromana, VIC 3936" address — change if you'd rather not list it
- Any service feature lines under each service card

---

## Deploying to Cloudflare Pages (free, ~10 minutes)

### Option A: GitHub-connected (recommended)
1. Push this folder to a new GitHub repo (private is fine)
2. Go to https://dash.cloudflare.com → Pages → Create a project
3. Connect GitHub, select the repo
4. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
5. Save and deploy. Done in ~90 seconds.
6. Custom domain: Pages → your project → Custom domains → Add `fixmyforklift.com.au`
7. Update your domain's DNS to point at Cloudflare (or transfer the domain to Cloudflare Registrar)

### Option B: Direct upload (no Git)
1. Run `npm run build` locally
2. Cloudflare Pages → Create project → Direct upload
3. Drag the `dist/` folder in

---

## Cancelling HostPapa (the satisfying bit)

Once the new site is live on `fixmyforklift.com.au`:

1. **Now:** Website Builder cancellation already requested ✓
2. **Before June 2026:** Site already live on Cloudflare Pages, so when the builder ends, nothing breaks
3. **Before Oct 2026 (domain):** Transfer domain to Cloudflare Registrar — they charge at-cost (~$13/yr for .com.au), no markup
4. **Before Nov 2026 (hosting):** Cancel the AU-Pro hosting line
5. **Email:** Before any of the above, set up Cloudflare Email Routing — forwards info@fixmyforklift.com.au → your Gmail for free

Total annual cost after migration: ~$15 (just the domain).

---

## What's in this site

- **One page**, semantic HTML, no JavaScript needed for core functionality
- **Astro** static site generator (zero runtime, pure HTML/CSS output)
- **Custom CSS** — no Tailwind, no frameworks, ~10KB of styles
- **Three Google Fonts** loaded via standard `<link>` (cached aggressively)
- **Local business schema** (JSON-LD) for SEO — Google understands you're a Peninsula trade business
- **Open Graph tags** so the site previews properly when shared on Facebook/SMS
- **Mobile-first responsive** — tested down to 320px width
- **Reduced motion support** — animations turn off for users who prefer that
- **Accessible** — semantic HTML, proper labels, sufficient contrast

## Future additions (when you're ready)

The structure is set up so adding pages is trivial:

- **`/used-forklifts`** — listing page for the flipping side. Create `src/pages/used-forklifts.astro`, add to the nav.
- **Blog/articles** — `/blog/index.astro` + content collection. Astro has first-class markdown support.
- **Service area landing pages** — `/services/mornington`, `/services/rosebud` etc for local SEO.

If you want any of these built when the time comes, just ask.
