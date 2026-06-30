# Gourab Dutta — Portfolio

This is the real "Developer Portfolio" open-source template (by Abu Said) at
https://github.com/said7388/developer-portfolio, customized with Gourab Dutta's
real data — so the UI, layout, and animations match the reference site exactly.

Built with Next.js 16, React 19, Tailwind CSS 4.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Customize further
All content lives in `utils/data/`:
- `personal-data.js` — name, bio, links, resume
- `experience.js`
- `skills.js`
- `projects-data.js`
- `educations.js`
- `contactsData.js`

## Contact form (optional)
Copy `.env.example` to `.env` and fill in Gmail App Password or Telegram bot
details if you want the contact form to actually send you messages. See the
original template's README for setup steps:
https://github.com/said7388/developer-portfolio#-gmail-app-password-setup

## Deploy
Push to GitHub, then import the repo in Vercel — it auto-detects Next.js.
