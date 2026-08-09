import Project from "../Projects/Project";
import { ProjectTemplate } from "@/types";
import { projectData } from "../../../lib/projectData";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16 bg-slate-800 text-white">
      <h2 className="text-5xl text-center">Projects</h2>
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {projectData.map((project: ProjectTemplate) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
