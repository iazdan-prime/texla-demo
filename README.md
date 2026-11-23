# Texla-style demo: chapters 01 and 02

A Vite + React + GSAP demo of a scroll-driven hero ("Arrival") and "Our story" chapter.
Built as a practice piece. It uses placeholder content and the Walton logo. It is
desktop-only and dark-theme only.

## Run it

```bash
npm install
npm run dev        # development
npm run build      # production build
npm run preview    # serve the production build
```

Test window: 1482 × 767.

## What it does

- **Chapter 01 (hero).** The page loads showing only the header and the photo. Scrolling
  reveals the text word by word, draws the hairline, slides the header out and zooms the photo.
  Scrolling back up reverses everything.
- **Chapter 02 (story).** A rounded image card grows to full-bleed (`clip-path`), then the label,
  heading, paragraph, side notes and button fade in. Also fully reversible.
- **Journey pill.** Shows the active chapter live. The down arrow scrolls to the next chapter's
  final frame. The pause button is a stub.

## How it works

- Each chapter is a tall **track** (`.track--hero`, `.track--story`) with a `position: sticky`
  stage inside. One scrubbed GSAP timeline per chapter drives all its motion, tied to scroll position.
- `useGSAP` scopes and reverts each timeline, so React StrictMode doesn't double the animations.
- `JourneyContext` is split into two contexts (active chapter, and its setter), so only the pill
  re-renders when the chapter changes and the sections never do.
- `useRefreshOnLoad` re-measures ScrollTrigger after fonts and images load.
- Design tokens (colors, fonts, spacing) live in `src/styles/tokens.css`. The accent color is
  one value, `--accent-rgb`.

## Structure

```
src/
  components/   Header, Chapter, ChapterLabel, Button, JourneyControl, Words
  sections/     Hero, Story
  hooks/        useChapterActive, useRefreshOnLoad
  context/      JourneyContext
  styles/       tokens, base, per-component css, responsive
  assets/       images and logo
```

## Notes

- Why sticky tracks instead of GSAP `pin`: pinning caused a visible shake when a pin engaged
  or released, and `normalizeScroll` made mouse-wheel scrolling feel choppy.
- Narrow windows get a simple fallback (`responsive.css`). Phones are not a target.
- Images and text are placeholders for a demo. Do not share outside the company without approval.