export type SkillGroup = {
  title: string;
  /** Which project tint the pills take: p1, p2, p3, or the neutral surface. */
  tint: "p1" | "p2" | "p3" | "neutral";
  items: string[];
};

export const stackIntro =
  "I specialise in frontend development, with a strong focus on building accessible, performant, and maintainable user interfaces using TypeScript, React, and Tailwind. I also have experience with backend development, data management, and infrastructure, which allows me to create full-stack solutions when needed using Python, Django, and FastAPI. Aside from this, I continuously explore new technologies and best practices to enhance my skill set and deliver high-quality software solutions, which you can see in my github projects over the years.";

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
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "REST APIs",
    ],
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
