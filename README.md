# David Enock — Portfolio

Personal portfolio site for **David Enock**, a frontend developer based in Dodoma, Tanzania. The site presents an introduction, tech stack, selected projects, and a contact form — built as a fast, static React app with no custom backend.

## Live site

Deploy via [Vercel](https://vercel.com) (see [Deploy](#deploy-to-vercel) below). After deployment, your production URL will be shown in the Vercel dashboard.

## What’s on the site

| Section | Description |
|---------|-------------|
| **About** | Intro, “Who am I?” bio, and profile photo |
| **Technologies** | Stack as interactive pills (HTML, CSS, JS, React, Next.js, Tailwind, GitHub, Zabbix, Grafana) |
| **Projects** | Featured work with live previews and links |
| **Contact** | Form powered by [Web3Forms](https://web3forms.com) (email delivery without a server) |

**UX details:** sticky navigation with anchor links, mobile menu, light/dark theme (saved in `localStorage`), and a violet/cyan visual style with Inter typography.

## Tech stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **Web3Forms** for contact submissions
- **ESLint** for linting

## Project structure

```
src/
├── App.jsx              # Page layout and section order
├── index.css            # Theme tokens, utilities, global styles
├── main.jsx
└── components/
    ├── Navbar.jsx       # Nav, theme toggle, mobile menu
    ├── Hero.jsx         # About / intro
    ├── Tools.jsx        # Technology pills
    ├── Projects.jsx     # Project cards
    ├── Contact.jsx      # Web3Forms contact form
    ├── Footer.jsx
    └── SectionHeading.jsx
```

Static assets (images, logos) live in `public/`.

## Local development

**Requirements:** Node.js 18+ and npm.

```bash
npm install
cp .env.example .env
```

Add your Web3Forms access key to `.env` (free at [web3forms.com](https://web3forms.com)):

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

```bash
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run preview  # preview production build
npm run lint
```

Without `VITE_WEB3FORMS_ACCESS_KEY`, the contact section still renders but shows a setup notice instead of sending mail.

## Deploy to Vercel

1. Push the repo to GitHub and import it in Vercel (framework: **Vite**; settings are also in `vercel.json`).
2. Add an environment variable:

   | Key | Value |
   |-----|--------|
   | `VITE_WEB3FORMS_ACCESS_KEY` | Your Web3Forms access key |

   In the dashboard: **Project → Settings → Environment Variables**. Enable **Production**, **Preview**, and **Development**.

   CLI alternative: `vercel env add VITE_WEB3FORMS_ACCESS_KEY` (after `vercel link`).

3. **Redeploy** after adding or changing the variable — Vite embeds `VITE_*` values at build time.
4. Test the contact form on the live URL and confirm email in your Web3Forms inbox.

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Yes (for contact) | Web3Forms access key; used client-side in `Contact.jsx` |

Never commit `.env`. Keep `.env.example` as a template with an empty value only.

## Featured projects (live)

- [REST Countries API](https://davunju-rest-countries.vercel.app/)
- [E-commerce product page](https://davunju-ecommerce-product-page.vercel.app/)
- [Age calculator](https://davunju.github.io/age-calculator/)
- [Advice generator](https://davunju.github.io/random-advices/)
- [More on Frontend Mentor](https://www.frontendmentor.io/profile/davunju/solutions)

## Author

**David Enock** — [GitHub](https://github.com/davunju) · [LinkedIn](https://www.linkedin.com/in/david-enock/) · [Frontend Mentor](https://www.frontendmentor.io/profile/davunju)
