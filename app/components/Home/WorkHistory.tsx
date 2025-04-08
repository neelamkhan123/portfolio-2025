import Image from "next/image";
import building from "../../images/icons/building-icon.svg";
import blueBuilding from "../../images/icons/blue-building.icon.svg";

export default function WorkHistory() {
  return (
    <div className="flex flex-col items-center text-white py-20 box-content">
      <span className="flex items-center space-x-3 mb-10 md:mb-16">
        <Image src={building} alt="Building" className="w-10 h-10" />
        <h2 className="text-3xl md:text-5xl">Work History</h2>
      </span>

      <div className="w-full md:w-2/3">
        {/* Item 1 */}
        <div className="flex space-x-10 md:space-x-20 px-6 w-full h-full">
          {/* Timeline */}
          <div className="relative">
            <div className="w-[1px] h-full bg-white"></div>
            <div className="w-5 h-5 bg-yellow-200 rounded-full absolute top-0 -left-2.5 z-10"></div>
          </div>

          {/* Content */}
          <div className="w-full h-full pb-10">
            <h2>Junior Front End Developer</h2>
            <span className="flex items-center space-x-2 bg-white text-slate-900 px-4 py-2 rounded-full shadow-sm text-xs w-fit my-2">
              <Image src={blueBuilding} alt="Company" className="w-3 h-3" />
              <h4>The Big Phone Store</h4>
            </span>
            <span className="text-[11px]">April 2024 - Present</span>
            <ul className="flex flex-col space-y-2 mt-8 mb-5 ml-4 text-xs md:text-sm list-disc">
              <li>
                Build and optimize website functionality and UI/UX using clean,
                scalable code with HTML, CSS, TailwindCSS, JavaScript, and
                TypeScript across modern frameworks including React, Vue.js, and
                Nuxt.js.
              </li>
              <li>
                Implementing responsive web design principles to ensure the
                website functions across various devices.
              </li>
              <li>
                Creating and implementing my own UI/UX design mockups to the
                site.
              </li>
              <li>
                Collaborate with mid-senior developers in-person and use Git,
                GitHub Desktop, and GitLab for version control and seamless team
                workflows.
              </li>
              <li>
                Drive feature development and enhancement initiatives through
                planning and teamwork.
              </li>
              <li>
                Expanding skills in backend technologies (PHP, Laravel) and
                database management (mySQL), working as a full-stack developer
                to aid my front end tasks.
              </li>
            </ul>
            <ul className="flex gap-2 flex-wrap text-xs">
              <li className="rounded-full shadow-sm px-2 py-1 html">HTML</li>
              <li className="rounded-full shadow-sm px-2 py-1 css">CSS</li>
              <li className="rounded-full shadow-sm px-2 py-1 tailwind">
                TailwindCSS
              </li>
              <li className="rounded-full shadow-sm px-2 py-1 javascript">
                JavaScript
              </li>
              <li className="rounded-full shadow-sm px-2 py-1 typescript">
                TypeScript
              </li>
              <li className="rounded-full shadow-sm px-2 py-1 react">
                ReactJS
              </li>
              <li className="rounded-full shadow-sm px-2 py-1 vue">VueJS</li>
              <li className="rounded-full shadow-sm px-2 py-1 nuxt">NuxtJS</li>
            </ul>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex space-x-10 md:space-x-20 px-6 w-full h-full">
          {/* Timeline */}
          <div className="relative">
            <div className="w-[1px] h-full bg-white"></div>
            <div className="w-5 h-5 bg-yellow-200 rounded-full absolute top-0 -left-2.5 z-10"></div>
          </div>

          {/* Content */}
          <div className="w-full h-full">
            <h2>Front End Developer Internship</h2>
            <span className="flex items-center space-x-2 bg-white text-slate-900 px-4 py-2 rounded-full shadow-sm text-xs w-fit my-2">
              <Image src={blueBuilding} alt="Company" className="w-3 h-3" />
              <h4>The Big Phone Store</h4>
            </span>
            <span className="text-[11px]">February 2024 - April 2024</span>
            <ul className="flex flex-col space-y-2 mt-8 mb-5 ml-4 text-xs md:text-sm list-disc">
              <li>
                Acquired proficiency in TailwindCSS, VueJS, and NuxtJS through
                self-directed learning.
              </li>
              <li>
                Delivered a complete application replicating a provided design,
                showcasing advanced front-end development skills.
              </li>
              <li>
                Gained hands-on experience in integrating modern frameworks and
                tools within development pipelines.
              </li>
            </ul>
            <ul className="flex gap-2 flex-wrap text-xs">
              <li className="rounded-full shadow-sm px-2 py-1 html">HTML</li>
              <li className="rounded-full shadow-sm px-2 py-1 css">CSS</li>
              <li className="rounded-full shadow-sm px-2 py-1 tailwind">
                TailwindCSS
              </li>
              <li className="rounded-full shadow-sm px-2 py-1 javascript">
                JavaScript
              </li>
              <li className="rounded-full shadow-sm px-2 py-1 vue">VueJS</li>
              <li className="rounded-full shadow-sm px-2 py-1 nuxt">NuxtJS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
