import Image from "next/image";
import linkedin from "../../images/icons/linkedin-square-icon.svg";
import github from "../../images/icons/github-icon.svg";
import resume from "../../images/icons/download-file-icon.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-40 text-white flex flex-col justify-center items-center">
      <h6 className="mb-4">Coded with ❤️ by Neelam</h6>
      <div className="flex justify-center items-center space-x-4">
        <Link
          href="https://www.linkedin.com/in/neelam-khan-6008901a5"
          target="_blank"
          className="flex justify-center items-center bg-white w-10 h-10 shadow-2xl rounded-lg cursor-pointer hover:shadow-none hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <Image src={linkedin} alt="Linkedin" className="w-6 h-6 shadow-2xl" />
        </Link>
        <Link
          href="https://github.com/neelamkhan123"
          target="_blank"
          className="flex justify-center items-center bg-white w-10 h-10 shadow-2xl rounded-lg cursor-pointer hover:shadow-none hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <Image src={github} alt="GitHub" className="w-6 h-6" />
        </Link>
        <a
          href="Neelam Khan - Resume.pdf"
          target="_blank"
          download="Neelam Khan - Resume"
          className="flex justify-center items-center bg-white w-10 h-10 shadow-2xl rounded-lg cursor-pointer hover:shadow-none hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <Image src={resume} alt="Resume" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
