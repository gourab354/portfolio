# Gourab Dutta — 3D Portfolio

Based on the real open-source "portfolio-website" by Redoyanul Haque
(https://github.com/red1-for-hek/portfolio-website), customized with Gourab
Dutta's data. Built with React, TypeScript, Three.js, GSAP, and WebGL for the
animated 3D character scene and scroll-driven animations.

**Removed from the original:** the AI chatbot (`api/chat.js`) and the
RedxChess interactive chessbot (`/play` route + chess engine), since those
needed the original author's own API keys and chess engine binaries that
don't carry over. Everything else — the 3D character, navigation, scroll
animations, About/Experience/Projects/Contact sections — is intact.

## TODO before deploying
- **Profile photo**: `public/images/mypicnbg.png` is still Redoyanul's photo
  (used in the mobile view). Replace it with your own background-removed
  photo, same filename, to fix this.
- Everything else (name, bio, project, skills, links, resume) is already
  filled in via `src/config.ts`.

## Run locally
```
npm install
npm run dev
```
Open the local URL it prints (usually http://localhost:5173)

## Build
```
npm run build
```

## Deploy
Push to GitHub, then import the repo in Vercel — it auto-detects Vite.
