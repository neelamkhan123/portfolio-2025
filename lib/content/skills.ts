export type SkillGroup = {
  title: string;
  /** Which project tint the pills take: p1, p2, p3, or the neutral surface. */
  tint: "p1" | "p2" | "p3" | "neutral";
  items: string[];
};

export const stackIntro =
  "I reach for the boring, well-documented thing first, and spend the saved time on accessibility and performance. Everything here has shipped in production or in one of the projects above.";

export const skillGroups: SkillGroup[] = [
  {
    title: "Front end",
    tint: "p1",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Vue",
      "Nuxt.js",
      "Tailwind",
      "SASS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Back end",
    tint: "p2",
    items: ["Python", "Django", "Django REST Framework", "FastAPI", "REST APIs"],
  },
  {
    title: "Data and infrastructure",
    tint: "p3",
    items: ["PostgreSQL", "Redis", "Celery", "Docker", "Kubernetes"],
  },
  {
    title: "Practices and tools",
    tint: "neutral",
    items: [
      "Accessibility (WCAG 2.2)",
      "Design systems",
      "Storybook",
      "Vitest",
      "React Testing Library",
      "axe-core",
      "CI/CD",
      "Git",
      "Figma",
      "Langfuse",
    ],
  },
];
