# 🌿 Golden Days

An example care-home website — a Conjure portfolio piece.

The visitor is not the older person; it's their son or daughter, deciding at
night, tired and afraid of getting it wrong. The site has one job: take away
the fear and guilt so they take one small, reversible step — **come for lunch**.

One call to action, repeated word for word: **Come have lunch with us.**

## What's inside

```
docs/                 # the published static site (GitHub Pages serves this)
├── index.html        # the 7 sections, in order
├── styles.css        # warm "home, not clinic" theme, big type, AA contrast
├── main.js           # renders content, form, keyboard, reveal-on-scroll
├── content.js        # ← everything the home edits lives here
└── favicon.svg
server.js             # local preview only
```

## Editing the content

Open `docs/content.js`. Change the text and numbers — the metrics, the daily
board, the team, the visit times. You never touch the layout. Anything marked
`TODO` needs a real photo, video, or figure from the home.

The **daily board** (`today`) is the signature element: update `menu` and
`activity` each morning. Leave `today.date` empty and it quietly shows the
weekly fallback instead, so a missed day never looks broken.

## Run it locally

```bash
npm install
npm start   # http://localhost:3000
```

## Status

Phase 1 — the full front-end with placeholders. Still to come:
- **Phase 2:** form → instant SMS to the person who calls back; real visit times.
- **Phase 3:** swap in the home's real photos, video, testimonials, and figures.
- **Phase 4:** a private area for families.

## Deploying

Static — GitHub Pages serves `docs/` (Settings → Pages → Deploy from a branch
→ `/docs`). Any static host works; point it at `docs/`.
