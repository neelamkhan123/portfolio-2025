import React from "react";
import Image from "next/image";
import blueBuilding from "../../images/icons/blue-building.icon.svg";

export interface WorkBlockProps {
  role: string;
  company: string;
  employment_period: string;
  description: string[];
  skills: string[];
}

const WorkBlock = ({
  role,
  company,
  employment_period,
  description,
  skills,
}: WorkBlockProps) => {
  return (
    <div className="flex space-x-10 md:space-x-20 px-6 w-full h-full">
      {/* Timeline */}
      <div className="relative">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-5 h-5 bg-yellow-200 rounded-full absolute top-0 -left-2.5 z-10"></div>
      </div>
      <div className="w-full h-full pb-10">
        <h2>{role}</h2>
        <span className="flex items-center space-x-2 bg-white text-slate-900 px-4 py-2 rounded-full shadow-sm text-xs w-fit my-2">
          <Image src={blueBuilding} alt="Company" className="w-3 h-3" />
          <h4>{company}</h4>
        </span>
        <span className="text-[11px]">{employment_period}</span>
        <ul className="flex flex-col space-y-2 mt-8 mb-5 ml-4 text-xs md:text-sm list-disc">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="flex gap-2 flex-wrap text-xs">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={`rounded-full shadow-sm px-2 py-1 ${skill}`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkBlock;
