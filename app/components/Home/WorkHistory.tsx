import Image from "next/image";
import building from "../../images/icons/building-icon.svg";
import WorkBlock, { WorkBlockProps } from "../UI/WorkBlock";
import { workHistory } from "@/lib/workData";

export default function WorkHistory() {
  return (
    <div className="flex flex-col items-center text-white py-20 box-content">
      <span className="flex items-center space-x-3 mb-10 md:mb-16">
        <Image src={building} alt="Building" className="w-10 h-10" />
        <h2 className="text-3xl md:text-5xl">Work History</h2>
      </span>

      <div className="w-full md:w-2/3">
        <div className="flex flex-col w-full">
          {workHistory.map((job: WorkBlockProps, index: number) => (
            <WorkBlock
              key={index}
              role={job.role}
              company={job.company}
              employment_period={job.employment_period}
              description={job.description}
              skills={job.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
