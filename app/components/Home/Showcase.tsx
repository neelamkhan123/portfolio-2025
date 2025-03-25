import Image from "next/image";
import showcase from "../../images/showcase.png";

export default function Showcase() {
  return (
    <div className="h-screen flex flex-col-reverse lg:flex-row justify-center items-center space-x-0 lg:space-x-10 2xl:space-x-28 lg:px-10">
      <div className="flex flex-col items-center lg:items-start justify-center slide-up  text-white px-2">
        <h1 className="text-5xl sm:text-7xl xl:text-8xl 2xl:text-9xl mb-2 text-center lg:text-left">
          Neelam Khan
        </h1>
        <h3 className="text-xl sm:text-3xl text-center lg:text-left mb-4">
          front end developer
        </h3>
        <div className="flex justify-center lg:justify-start gap-2 lg:gap-4 flex-wrap w-5/6 lg:w-full">
          <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 html text-xs sm:text-sm md:text-lg w-fit">
            HTML
          </div>
          <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 css text-xs sm:text-sm md:text-lg w-fit">
            CSS
          </div>
          <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 tailwind text-xs sm:text-sm md:text-lg w-fit">
            TailwindCSS
          </div>
          <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 javascript text-xs sm:text-sm md:text-lg w-fit">
            JavaScript
          </div>
          <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 typescript text-xs sm:text-sm md:text-lg w-fit">
            TypeScript
          </div>
          <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 react text-xs sm:text-sm md:text-lg w-fit">
            React
          </div>
          <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 next text-xs sm:text-sm md:text-lg w-fit">
            Next.js
          </div>
          <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 vue text-xs sm:text-sm md:text-lg w-fit">
            Vue
          </div>
          <div className="rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 mysql text-xs sm:text-sm md:text-lg w-fit">
            mySQL
          </div>
        </div>
      </div>

      <Image
        src={showcase}
        alt="Showcase"
        className="w-72 h-72 sm:w-80 sm:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] mb-6 lg:mb-0"
        loading="lazy"
      />
    </div>
  );
}
