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
      "I build performant, accessible web products in React and TypeScript, and the backends behind them in Python.",
  },

  summary:
    "Frontend engineer with 2+ years building performant, accessible web products. Skilled in React, TypeScript, JavaScript, Vue, and frontend component libraries, with a track record of shipping features that measurably improve engagement, load time, and conversion. Also builds backend services in Python with Django and FastAPI, enabling end-to-end ownership of features from architecture to pixel-level polish.",

  about: {
    opener: "as a self taught developer",
    body: [
      "I taught myself to code while getting my degree when I decided to change direction for the millionth time. I taught myself the basics: HTML, CSS and JavaScript first, then React and TypeScript, building projects until the gap between what I could read and what I could ship closed. That got me a three-month internship which needed Vue, Nuxt and Tailwind, none of which I knew. I learned them alongside working my internship, delivered production-ready features independently, and converted to a full-time role.",
      "The habit stuck. I basically have never stopped learning and building, constantly seeking out new challenges and opportunities to grow my skills. You can see the full journey of my development and skills in all my public projects on my GitHub.",
    ],
    facts: [
      { label: "Currently", value: "Frontend Engineer, TBI" },
      { label: "Based in", value: "London, UK" },
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
  { value: "2.5+", label: "Years shipping production" },
  { value: "40+", label: "Components published to npm" },
  { value: "London", label: "Based in, remote friendly" },
];

export const education = {
  degree: "BA Criminology",
  institution: "Goldsmiths, University of London",
  dates: "2019 — 2023",
  note: "Graduated in 2023, then taught myself frontend development from scratch.",
} as const;
