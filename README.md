# portfolio-2025

Personal portfolio for Neelam Khan — Next.js App Router, Tailwind CSS v4, and a
warm editorial theme ported from Claude Design.

```sh
npm install
npm run dev
```

## Structure

```
app/
  layout.tsx                 Newsreader serif + globals
  page.tsx                   the one-page site, composed of sections
  projects/[slug]/           case study per project
  components/site/
    ScrollEffects.tsx        reveal, progress bar, nav spy, tilt (client)
    TopNav.tsx  Hero.tsx  WorkSection.tsx  StackSection.tsx
    ExperienceSection.tsx  AboutSection.tsx  ContactSection.tsx
    Figure.tsx               image slot, with a tinted fallback
lib/content/                 all copy, as typed data
```

Copy lives in `lib/content/` rather than in components, so editing the site is
editing data.

## Component library

This layout is bespoke and does not currently use `neelam-ui`. The package is
still a dependency so it can be reintroduced (the tag pills and case-study
sections are the natural fit); Tailwind no longer scans it, which keeps ~33KB
of unused utility classes out of the CSS.

## Theming

The palette is a set of CSS custom properties in `app/globals.css`, matching the
design's values. The accent ships as **Blush** (pink); the design's original
Clay, plus Sage, Sky and Lilac, are kept as presets — switch with a
`data-accent` attribute on `<body>`:

```html
<body data-accent="clay">
```

## Project images

`Figure` renders a tinted placeholder until you give it a `src`. Drop
screenshots into `public/` and pass the path to swap them in.
