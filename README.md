# Walton scroll-story demo

A front-end demo of two scroll-driven chapters, built with Vite, React and GSAP:
a hero ("Explore Walton") and a leadership chapter ("Our Owners").
Desktop only, dark theme only, with demo content.

The layout and motion are modelled on an existing scroll-driven company website.
This project is an independent re-creation built from scratch.

## Tech stack

- [Vite](https://vite.dev) + [React](https://react.dev)
- [GSAP](https://gsap.com) with ScrollTrigger, and `@gsap/react` (`useGSAP`)
- Plain CSS with design tokens (no CSS framework)

## Run it

You need Node.js (a current LTS version).

```bash
npm install
npm run dev        # development
npm run build      # production build
npm run preview    # serve the production build
```

Designed and tested at a window size of 1482 × 767 on desktop.

## What it does

- **Chapter 01 (hero, "Explore Walton").** The page loads showing only the header and the photo.
  Scrolling slides the header out, zooms the photo, reveals the heading and a one-line subtitle
  word by word, draws a gold hairline, and fades out the bottom hints. Scrolling back up
  reverses everything.
- **Chapter 02 (leadership, "Our Owners").** A rounded photo card with a gold border sits on
  the right. As you scroll it grows slightly around its centre line while its corners straighten.
  The label, heading, paragraph and button then fade in. Also fully reversible.
- **Journey pill.** Shows the active chapter live ("01 /02 Explore Walton", then
  "02 /02 Our Owners"). The down arrow scrolls to the next chapter's final frame and is disabled
  on the last chapter. The pause button is a stub.

## How it works

- Each chapter is a tall **track** (`.track--hero`, `.track--story`) with a `position: sticky`
  stage inside. One scrubbed GSAP timeline per chapter drives all its motion, tied to scroll position.
- `useGSAP` scopes and reverts each timeline, so React StrictMode does not double the animations.
- The journey state is split into two contexts (the active chapter, and its setter), so only the
  pill re-renders when the chapter changes and the sections never do.
- `useRefreshOnLoad` re-measures ScrollTrigger after fonts and images load.
- Design tokens (colours, fonts, spacing) live in `src/styles/tokens.css`. The accent colour is
  one value, `--accent-rgb`.
- In chapter 02 the photo card and the text block share one centre line (`--story-center` in
  `story.css`), so they stay aligned at any window size. The card's height follows the photo's
  aspect ratio, so the photo is never cropped.

## Structure

```
src/
  components/   Header, Chapter, ChapterLabel, Button, JourneyControl, Words
  sections/     Hero, Story
  hooks/        useChapterActive, useRefreshOnLoad
  context/      journey.js (chapter list and the two contexts)
  styles/       tokens, base, per-component css, responsive
  assets/       images and logo
```

## Design decisions

- **Sticky tracks instead of GSAP `pin`.** Pinning caused a visible shake when a pin engaged
  or released, and `normalizeScroll` made mouse-wheel scrolling feel choppy.
- **The photo card animates its box, not `clip-path`.** A `clip-path` also clips the card's
  border at the edges, and the design needs a gold border. So GSAP animates the card's edges
  and corner radius instead. This costs a little more layout work per scroll frame, which is
  fine for a single image.

## Known limitations

- Desktop only. Narrow windows get a simple fallback (`responsive.css`); phones are not a target.
- Very short, wide windows can push the chapter 02 photo card close to the journey pill,
  because the card's height follows its width.
- The pause button does nothing yet.

## Content notice

The images, logo and text are demo material used for demonstration only. They belong to their
respective owners. This repository is not open source and grants no licence to reuse them.