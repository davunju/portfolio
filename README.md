# David Enock — Portfolio

React + Vite portfolio with Web3Forms contact.

## Local development

```bash
npm install
cp .env.example .env
```

Add your Web3Forms access key to `.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Get a key at [web3forms.com](https://web3forms.com) (free).

```bash
npm run dev
```

## Deploy to Vercel

### 1. Connect the repo

1. Push this project to GitHub.
2. In [Vercel](https://vercel.com), **Add New Project** and import the repo.
3. Vercel should detect **Vite** automatically (`build`: `npm run build`, `output`: `dist`).  
   `vercel.json` in the repo matches those settings.

### 2. Set the environment variable

The contact form needs this variable **at build time** (Vite only exposes `VITE_*` vars when `npm run build` runs).

| Name | Value |
|------|--------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Your Web3Forms access key |

**In the dashboard**

1. Open your project → **Settings** → **Environment Variables**.
2. **Key:** `VITE_WEB3FORMS_ACCESS_KEY`
3. **Value:** paste the same key you use in local `.env`.
4. Enable **Production**, **Preview**, and **Development** (recommended).
5. Click **Save**.

**With Vercel CLI** (after `npm i -g vercel` and `vercel link`):

```bash
vercel env add VITE_WEB3FORMS_ACCESS_KEY
```

Paste the key when prompted, then select Production, Preview, and Development.

### 3. Redeploy

After adding or changing env vars, trigger a new deployment:

- **Deployments** → latest deployment → **⋯** → **Redeploy**, or  
- Push a new commit to your default branch.

Without a redeploy, production builds will not include the key and the contact form will show the setup notice.

### 4. Verify

1. Open the live site and scroll to **Contact**.
2. Submit a test message.
3. Check the inbox tied to your Web3Forms access key.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint |

## Security notes

- Do **not** commit `.env` or put your access key in the repo.
- Web3Forms access keys are intended to be used in the browser; still avoid committing them in `.env.example` or source code.
- If a key was ever committed, create a new key at [web3forms.com](https://web3forms.com) and update Vercel + local `.env`.
