import Image from "next/image";
import coding from "../../images/icons/div-coding-icon.svg";

export default function Skills() {
  return (
    <div className="flex flex-col items-center py-20 box-content bg-slate-800 text-white">
      <span className="flex items-center space-x-3 mb-10 md:mb-16">
        <Image
          src={coding}
          alt="Building"
          className="w-10 h-10 md:w-14 md:h-14"
        />
        <h2 className="text-3xl md:text-5xl">Skills</h2>
      </span>

      <div className="flex gap-4 flex-wrap px-6 justify-center">
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 html text-lg w-fit">
          HTML
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  css text-lg w-fit">
          CSS
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  tailwind text-lg w-fit">
          TailwindCSS
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  sass text-lg w-fit">
          SASS/SCSS
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  javascript text-lg w-fit">
          JavaScript
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  typescript text-lg w-fit">
          TypeScript
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  react text-lg w-fit">
          React
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  vue text-lg w-fit">
          Vue
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  nuxt text-lg w-fit">
          Nuxt
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  mysql text-lg w-fit">
          mySQL
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  php text-lg w-fit">
          PHP
        </div>
        <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2  laravel text-lg w-fit">
          Laravel
        </div>
      </div>
    </div>
  );
}
