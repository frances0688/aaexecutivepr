# A&A Executive Management LLC PR

A modern, single-page marketing website for **A&A Executive Management LLC PR** — a Puerto Rico–based consulting firm specializing in franchise development, healthcare technology solutions, and remote workforce management.

This repository is a React single-page website, with a contact form powered by [EmailJS](https://www.emailjs.com/) so consultation requests are delivered directly to your inbox without a custom backend.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [EmailJS Configuration](#emailjs-configuration)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

---

## Features

### Page sections


| Section              | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Navigation**       | Fixed header with logo, anchor links, and a consultation CTA. Mobile slide-out menu via Radix Dialog.                            |
| **Hero**             | Full-width background image with gradient overlay, headline, service tagline, and primary CTA.                                   |
| **About**            | Three-column layout: photo, company overview, and value pillars (Professional, Strategic, Reliable).                             |
| **Services**         | Three service cards — Senior Care Franchise, Healthcare Technology, Remote Workforce — with numbered badges and territory links. |
| **Why Choose Us**    | Four feature blocks with Lucide icons and scroll-triggered animations.                                                           |
| **CTA**              | Navy call-to-action band with watermark branding.                                                                                |
| **Footer / Contact** | Logo, physical address, phone, and email.                                                                                        |


### Contact form

- Opens in a modal from any **Schedule A Consultation** or **Let's Discuss Your Goals** button
- Fields: Full Name, Email, Phone, Company, Message
- Client-side validation for required fields
- Success and error states with user-friendly messaging
- Sends email via EmailJS (no server required)

### Animations & UX

- **Framer Motion** entrance animations on hero load and scroll-into-view sections
- Staggered delays on service cards and feature blocks
- Smooth anchor scrolling between sections
- Accessible modal dialogs (focus trap, Escape to close, ARIA labels)

---

## Tech Stack


| Category      | Technology                                                                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework     | [React 19](https://react.dev/)                                                                                                                           |
| Language      | [TypeScript](https://www.typescriptlang.org/)                                                                                                            |
| Build tool    | [Vite 8](https://vite.dev/)                                                                                                                              |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com/)                                                                                                               |
| Animations    | [Framer Motion](https://www.framer.com/motion/)                                                                                                          |
| Icons         | [Lucide React](https://lucide.dev/)                                                                                                                      |
| UI primitives | [Radix UI](https://www.radix-ui.com/) (Dialog, Slot)                                                                                                     |
| Email         | [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`)                                                                                                 |
| Fonts         | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (headings), [Montserrat](https://fonts.google.com/specimen/Montserrat) (body) |


---

## Project Structure

```
aaexecutivepr/
├── public/
│   ├── images/              # Site imagery (logo, hero, service photos, footer logo)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── ContactModal.tsx # Consultation form modal + EmailJS integration
│   │   └── ui/
│   │       ├── button.tsx   # Reusable button (variants: default, outline, ghost)
│   │       └── sheet.tsx    # Mobile navigation drawer
│   ├── lib/
│   │   └── utils.ts         # `cn()` helper (clsx + tailwind-merge)
│   ├── pages/
│   │   └── Index.tsx        # Main single-page layout and content
│   ├── App.tsx              # Root component
│   ├── main.tsx             # React entry point
│   └── index.css            # Tailwind theme tokens and global styles
├── .env.example             # EmailJS environment variable template
├── index.html
├── package.json
├── tsconfig.app.json
└── vite.config.ts           # Vite + Tailwind + `@/` path alias
```

### Key files

- `**src/pages/Index.tsx**` — All page sections, content, and layout. Start here when editing copy or structure.
- `**src/components/ContactModal.tsx**` — Modal UI and EmailJS `send()` logic.
- `**src/index.css**` — Design tokens (`primary`, `foreground`, `border`, fonts).
- `**vite.config.ts**` — Path alias `@/` maps to `src/`.

### Required images

Place the following files in `public/images/`:


| File                   | Usage                             |
| ---------------------- | --------------------------------- |
| `logo.png`             | Header logo                       |
| `hero-bg.png`          | Hero background                   |
| `about.png`            | About section photo               |
| `senior-care.png`      | Service card 1                    |
| `healthcare.png`       | Service card 2                    |
| `remote-workforce.png` | Service card 3                    |
| `footer-logo.png`      | Footer logo (light/white variant) |


---

## Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+ (or pnpm / yarn)
- An [EmailJS](https://www.emailjs.com/) account (free tier is sufficient for low-volume contact forms)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/aaexecutivepr.git
cd aaexecutivepr
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your EmailJS credentials (see [EmailJS Configuration](#emailjs-configuration) below).

### 4. Add site images

Ensure all images listed in [Required images](#required-images) exist under `public/images/`.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 6. Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## EmailJS Configuration

The contact form sends emails through EmailJS using three environment variables. None of these secrets should be committed to git — `.env` is listed in `.gitignore`.

### Step 1: Create an EmailJS account

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Verify your email address

### Step 2: Add an email service

1. Go to **Email Services** → **Add New Service**
2. Choose your provider (e.g. **Gmail**)
3. Connect the inbox that should receive consultation requests (e.g. `aaexecutivepr@gmail.com`)
4. Copy the **Service ID** (e.g. `service_xxxxxxx`)

### Step 3: Create an email template

1. Go to **Email Templates** → **Create New Template**
2. Use a subject line such as: `New Consultation Request from {{from_name}}`
3. Add a body that references these template variables (must match the code):


| Variable        | Source field  |
| --------------- | ------------- |
| `{{from_name}}` | Full Name     |
| `{{reply_to}}`  | Email Address |
| `{{phone}}`     | Phone Number  |
| `{{company}}`   | Company       |
| `{{message}}`   | Message       |


Example template body:

```
New consultation request

Name: {{from_name}}
Email: {{reply_to}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}
```

1. Set **To Email** to your business inbox
2. Copy the **Template ID** (e.g. `template_xxxxxxx`)

### Step 4: Get your public key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### Step 5: Update `.env`

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Restart the dev server after changing `.env`.

> **Note:** Vite only exposes variables prefixed with `VITE_` to the client bundle. The EmailJS public key is designed for browser use; never put private API keys or server secrets in frontend env vars.

---

## Available Scripts


| Command           | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot module replacement                             |
| `npm run build`   | Type-check with TypeScript, then build optimized production assets to `dist/` |
| `npm run preview` | Serve the production build locally for testing                                |
| `npm run lint`    | Run ESLint across the project                                                 |


---

## Environment Variables


| Variable                   | Required       | Description                 |
| -------------------------- | -------------- | --------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | Yes (for form) | EmailJS service identifier  |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes (for form) | EmailJS template identifier |
| `VITE_EMAILJS_PUBLIC_KEY`  | Yes (for form) | EmailJS public API key      |


If any variable is missing, the form displays a configuration error instead of failing silently.

---

## Deployment

This is a static SPA — deploy the `dist/` folder to any static host.

### Vercel

1. Import the GitHub repository on [vercel.com](https://vercel.com)
2. Framework preset: **Vite**
3. Add environment variables under **Settings → Environment Variables**
4. Deploy

### Netlify

1. Connect the repo on [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `VITE_`* env vars in **Site settings → Environment variables**

### GitHub Pages

1. Set `base` in `vite.config.ts` if deploying to a project subpath:
  ```ts
   export default defineConfig({
     base: '/aaexecutivepr/',
     // ...
   })
  ```
2. Build and deploy `dist/` to the `gh-pages` branch (e.g. with [gh-pages](https://www.npmjs.com/package/gh-pages) or GitHub Actions)

### Other hosts

Cloudflare Pages, AWS S3 + CloudFront, and similar services work the same way: build with `npm run build`, upload `dist/`, and configure the three `VITE_*` variables at build time.

---

## Customization

### Update copy or layout

Edit `src/pages/Index.tsx`. Section anchors used by the nav:

- `#about`
- `#services`
- `#why-us`
- `#contact`

### Change brand colors

Design tokens live in `src/index.css`:

```css
--color-primary: #0a192f;
--color-foreground: #333333;
--color-muted-foreground: #636569;
--color-border: #e3e5e8;
```

### Modify the contact form

- **Fields** — Update the form in `src/components/ContactModal.tsx` and add matching variables to your EmailJS template
- **Trigger buttons** — Wrap any button with `<ContactModal>`:
  ```tsx
  <ContactModal>
    <Button>Schedule A Consultation</Button>
  </ContactModal>
  ```

### Animation timing

Framer Motion props are set inline in `Index.tsx`:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8 }}
>
```

Adjust `duration`, `delay`, and `y` to taste.

---

## Troubleshooting

### Form shows "EmailJS is not configured"

- Confirm `.env` exists at the project root (not only `.env.example`)
- Verify all three `VITE_*` variables are set
- Restart the dev server after editing `.env`

### Form submits but no email arrives

- Check the EmailJS dashboard **Logs** for delivery errors
- Confirm the template variable names match: `from_name`, `reply_to`, `phone`, `company`, `message`
- Verify the connected email service is still authorized (Gmail tokens can expire)

### Images not loading

- Ensure files are in `public/images/` (paths in code are `/images/...`, not `src/`)
- File names are case-sensitive on Linux-based deploy environments

### Build fails on TypeScript errors

```bash
npm run build
```

Fix reported errors in the listed files. The build runs `tsc -b` before Vite bundles.

### Mobile menu does not close after clicking a link

The mobile sheet uses anchor links. You may want to add an `onClick` handler on mobile nav links to close the sheet programmatically if that behavior is desired.

---

## Contact

**A&A Executive Management LLC PR**

- **Address:** 807 Ave Ponce de León PMB 0123, San Juan, PR 00907-3326
- **Phone:** 787-665-2594
- **Email:** [aaexecutivepr@gmail.com](mailto:aaexecutivepr@gmail.com)
- **Website:** [aaexecutivepr.com](https://aaexecutivepr.com/)

---

## License

Private / proprietary. All rights reserved by A&A Executive Management LLC PR unless otherwise specified by the repository owner.