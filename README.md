# Isaac Makinde | Frontend Engineer portfolio

A minimal, responsive black-and-white portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Features

- Light and dark themes with remembered preferences
- Responsive navigation and accessible reduced-motion transitions
- Animated abstract monogram instead of a profile photograph
- Four selected projects: Kanban, Klimate, iM-Store, and Rock Paper Scissors; other repositories remain accessible from the GitHub link
- Technology skills with icons, followed by professional experience at Lumina, Komtal and freelance
- Telegram, LinkedIn, GitHub and X social links
- Contact form with validation, personalized confirmation and an expected reply within 24 hours; Resend backend with FormSubmit fallback
- Four real application screenshots under `public/projects/`, optimized as WebP for the responsive gallery
- Larger-text, mobile-friendly CV-aligned résumé at `/resume.html`, with compact print styles

## Contact form and Resend setup

The contact form sends to `POST /api/contact` (a [Vercel Function](https://vercel.com/docs/functions)), which uses the [Resend email API](https://resend.com/docs/send-with-vercel-functions) via **Node's built-in `fetch`**. There is no Node mail SDK dependency or client-side secret.

**Status:** The server-side implementation is in the repository but will not send through Resend until these **server-side environment variables** are configured in the Vercel project:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | A private Resend API key (`re_...`) |
| `RESEND_FROM_EMAIL` | An approved sender such as `Isaac Portfolio <contact@your-verified-domain.com>` |
| `CONTACT_TO_EMAIL` | Optional recipient address; otherwise the server-side default is used |

The Resend-Vercel Marketplace integration can create the API key and inject `RESEND_API_KEY` automatically. For full production sending from a custom domain, verify the sending domain in Resend, including its requested DNS records. Use the Resend test sender only under the provider's testing restrictions. **Never add API keys to `VITE_*` variables or commit them to GitHub.**

1. Create a Resend account and API key. Verify the domain you plan to send from.
2. In Vercel, open **Project > Settings > Environment Variables**, configure `RESEND_API_KEY` and `RESEND_FROM_EMAIL` for production; optionally configure `CONTACT_TO_EMAIL`.
3. Redeploy production so the Vercel Function receives the variables.
4. Check `GET https://isaacmakinde.vercel.app/api/contact`: `configured` should become `true`. This is a configuration check, not an email delivery test.
5. Submit a real test message from the portfolio. Verify the form success state, Resend delivery log, and that the message reaches your intended inbox, with Reply-To set to the visitor's email.

Until the Resend environment variables are configured, `POST /api/contact` intentionally responds with `503` and code `EMAIL_NOT_CONFIGURED`; **only in that explicit case** the frontend falls back to the existing [FormSubmit](https://formsubmit.co/) AJAX submission. FormSubmit requires one-time recipient activation:

1. Send a test message on the site.
2. Check the inbox configured for the contact form for FormSubmit's verification email and activate it.
3. Submit another test and verify receipt.

A form submission response alone doesn't prove delivery. The fallback is preserved so the existing contact method isn't disabled during the migration.

**Abuse safeguards:** The API validates fields and message sizes, rejects cross-origin browser submissions, and uses a honeypot. Add Turnstile or a durable rate limiter if bot traffic becomes an issue. The API key is never sent to clients, and provider errors are not exposed publicly.

## Resume

`public/resume.html` contains the latest CV content in a print-friendly format, including the October 2026 Summary, Education, Technical Skills, Experience, and Projects. It is **not the original PDF file**. To make the website serve the exact original, copy `Isaac_Makinde_Frontend_Engineer_Resume.pdf` into `public/` and update the résumé link in `src/App.jsx` to `/Isaac_Makinde_Frontend_Engineer_Resume.pdf`.

## Run locally

```bash
npm ci
npm run lint
npm run build
npm run dev
```

## Deployment

The repository auto-deploys to Vercel on changes to `main`. Build command: `npm run build`. Output directory: `dist`.

## Contact

<p align="center">
  <a href="mailto:ismakinde@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact%20me-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email — Contact me" />
  </a>
  <a href="https://t.me/isaacmakinde" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Telegram-Message%20me-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram — Message me" />
  </a>
  <a href="https://linkedin.com/in/isaacmakinde" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn — Connect" />
  </a>
  <a href="https://github.com/Oluwa-Laughter" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-View%20profile-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub — View profile" />
  </a>
  <a href="https://x.com/isaacmakinde_" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/X-Follow-000000?style=for-the-badge&logo=x&logoColor=white" alt="X — Follow" />
  </a>
</p>
