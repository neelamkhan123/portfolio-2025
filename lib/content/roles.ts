export type Role = {
  title: string;
  /** Short form for the timeline column, e.g. "2025 — now". */
  period: string;
  company: string;
  dates: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const roles: Role[] = [
  {
    title: "Frontend Engineer",
    company: "Tony Blair Institute for Global Change",
    period: "2025 — now",
    dates: "Jul 2025 to present",
    summary:
      "Building responsive, accessible interfaces end-to-end from Figma prototypes through production, maintaining the component libraries behind them, leading code reviews and mentoring junior developers.",
    bullets: [
      "Build responsive, accessible interfaces end-to-end (TypeScript, React, Tailwind) from Figma prototypes through production, integrating with Python/Django/FastAPI backends.",
      "Design and maintain component libraries and design systems, backed by unit and component tests (Vitest, React Testing Library) for long-term reliability.",
      "Lead code reviews and mentor junior developers to uphold engineering standards; optimise performance, accessibility, and cross-browser compatibility.",
      "Build internal AI-powered tools using Claude, ChatGPT, and Gemini, with Langfuse for prompt monitoring, evaluation, and observability.",
    ],
    tech: [
      "TypeScript",
      "React",
      "Tailwind",
      "Python",
      "Django",
      "FastAPI",
      "Vitest",
      "React Testing Library",
      "Figma",
      "Langfuse",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Euro Communications Ltd",
    period: "2024 — 2025",
    dates: "Feb 2024 to Jul 2025",
    summary:
      "Built and maintained production e-commerce interfaces serving live customer traffic, converting from a three-month internship to a full-time role after independently delivering production-ready features.",
    bullets: [
      "Converted from a 3-month front-end internship to a full-time Frontend Developer role in April 2024, after independently delivering production-ready features during the internship.",
      "Built and maintained production e-commerce interfaces (TypeScript, Vue.js, Nuxt.js, Tailwind) serving live customer traffic, translating Figma designs into pixel-perfect, reusable components.",
      "Improved Core Web Vitals through code splitting, lazy loading, and image optimisation; resolved cross-browser and cross-device compatibility issues.",
      "Contributed to the team's shared component library and followed Git workflow best practices across agile sprint cycles.",
    ],
    tech: ["TypeScript", "JavaScript", "Vue.js", "Nuxt.js", "Tailwind", "SASS", "Git", "Figma"],
  },
];
