import Project from "../Projects/Project";
import { ProjectTemplate } from "@/types";
import { projectData } from "../../../lib/projectData";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-20 bg-slate-800 w-full text-white">
      <h2 className="text-5xl text-center">Projects</h2>
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {projectData.map((project: ProjectTemplate) => (
          <Project key={project.title} {...project} />
        ))}
      </div>

      <span className="text-xs text-center">
        + other small projects on my{" "}
        <a
          href="https://github.com/neelamkhan123"
          target="_blank"
          className="underline hover:no-underline"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </span>
    </div>
  );
}
