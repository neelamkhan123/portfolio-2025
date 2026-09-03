export const profile = {
  name: "Neelam Khan",
  role: "Frontend engineer",
  location: "London, UK",
  availability: "Open to frontend roles",
  email: "neelamkhanwork@gmail.com",
  github: "https://github.com/neelamkhan123",
  linkedin: "https://www.linkedin.com/in/neelam-khan-6008901a5/",

  /** Hero headline, split so the last phrase can be set in italic accent. */
  hero: {
    lead: "Neelam Khan, frontend",
    emphasis: "engineer",
    intro:
      "I build performant, accessible web products in React and TypeScript, and the backends behind them in Python. Currently at the Tony Blair Institute for Global Change, where I own features end-to-end — from the Figma prototype to the pixel-level polish.",
  },

  summary:
    "Frontend engineer with 2+ years building performant, accessible web products. Skilled in React, TypeScript, JavaScript, Vue, and frontend component libraries, with a track record of shipping features that measurably improve engagement, load time, and conversion. Also builds backend services in Python with Django and FastAPI, enabling end-to-end ownership of features from architecture to pixel-level polish.",

  about: {
    opener:
      "I write frontend code for a living, and I care most about the part where an interface stops fighting the person using it — accessible by construction, fast on a bad connection, and honest about what it is doing.",
    body: [
      "I studied criminology at Goldsmiths and finished in 2023. Nothing in that degree was going to get me a frontend job, so I taught myself one: HTML, CSS and JavaScript first, then React and TypeScript, building projects until the gap between what I could read and what I could ship closed. That got me a three-month internship in February 2024, which needed Vue, Nuxt and Tailwind — none of which I knew. I learned them alongside the brief, delivered production-ready features independently, and converted to a full-time role in April.",
      "The habit stuck. Everything under selected work was built outside working hours to answer a question the day job could not: what it actually takes to publish and version a package other people install, to run a real Kubernetes cluster, to prove a performance claim with a benchmark instead of asserting it. The write-ups record the decisions, including the optimisations that turned out not to help.",
    ],
    facts: [
      { label: "Currently", value: "Frontend Engineer, TBI" },
      { label: "Based in", value: "London, UK" },
      { label: "Latest project", value: "OSS health dashboard" },
    ],
  },

  contact: {
    lead: "Tell me what you are",
    emphasis: "building",
    body: "Open to frontend and full-stack roles in London or remote. Email is the fastest route — a line about the team and the problem is plenty to start.",
  },
} as const;

export type HeroStat = { value: string; label: string };

export const heroStats: HeroStat[] = [
  { value: "2.5", label: "Years shipping production" },
  { value: "40", label: "Components published to npm" },
  { value: "21×", label: "Faster after Redis caching" },
  { value: "London", label: "Based in, remote friendly" },
];

export const education = {
  degree: "BA Criminology",
  institution: "Goldsmiths, University of London",
  dates: "2019 — 2023",
  note: "Graduated in 2023, then taught myself frontend development from scratch.",
} as const;
