import info from "../../images/icons/info-circle-line-icon.svg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center w-full bg-slate-800 text-white py-20 md:py-40 px-6">
      <div className="flex justify-center items-start space-x-2 md:space-x-10">
        <Image
          src={info}
          alt="Information"
          className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 hidden md:block"
        />
        <div className="flex flex-col justify-center space-y-10 w-full md:w-2/3">
          <span className="flex items-center space-x-3">
            <Image src={info} alt="Information" className="w-8 h-8 md:hidden" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl">About me</h2>
          </span>
          <p className="text-sm md:text-base">
            Frontend engineer with 2+ years building performant, accessible web
            products. Skilled in React, TypeScript, JavaScript, Vue, and
            frontend component libraries, with a track record of shipping
            features that measurably improve engagement, load time, and
            conversion. Also builds backend services in Python with Django and
            FastAPI, enabling end-to-end ownership of features from architecture
            to pixel-level polish. Thrives in fast-moving, product-driven teams.
          </p>
        </div>
      </div>
    </div>
  );
}
