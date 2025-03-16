import Project from "../components/Projects/Project";
import { ProjectTemplate } from "@/types";
import { projectData } from "../../lib/projectData";
import Footer from "../components/Footer/Footer";

export default function Projects() {
  return (
    <div className="flex flex-col justify-between">
      <div className="w-full flex flex-col justify-center space-y-5 text-white mt-28 px-10">
        {projectData.map((project: ProjectTemplate) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
