# Isaac Makinde | Frontend Engineer portfolio

A minimal, responsive black-and-white portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Features

- Light and dark themes with remembered preferences
- Responsive navigation and accessible reduced-motion transitions
- Animated abstract monogram instead of a profile photograph
- Independent projects: Kanban, Klimate, and iM-Store
- Technology skills with icons, followed by professional experience at Lumina, Komtal and freelance
- Telegram, LinkedIn, GitHub and X social links
- Contact form with client-side validation, loading and error states
- CV-aligned printable résumé at `/resume.html`

## Contact form activation

The contact form submits to **[FormSubmit](https://formsubmit.co/)** using its AJAX endpoint for `ismakinde@gmail.com`. FormSubmit requires the owner to **activate the recipient email once** before messages start reaching the inbox.

1. Visit the live portfolio, enter a test inquiry and submit it.
2. Open the confirmation email delivered to `ismakinde@gmail.com` (check spam), then activate the form.
3. Submit a second test inquiry and verify it actually arrives.

The form has a hidden honeypot field and leaves CAPTCHA disabled for a seamless AJAX flow. If the provider does not respond, visitors are directed to email the same public address. Avoid representing delivery as fully tested until the recipient activation and actual delivery test are complete.

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

[Email](mailto:ismakinde@gmail.com) · [Telegram](https://t.me/isaacmakinde) · [LinkedIn](https://linkedin.com/in/isaacmakinde) · [GitHub](https://github.com/Oluwa-Laughter)
