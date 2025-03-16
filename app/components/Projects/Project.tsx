"use client";

import { ProjectTemplate } from "@/types";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import github from "../../images/icons/github-icon.svg";
import webLink from "../../images/icons/link-hyperlink-icon.svg";

export default function Project({
  title,
  languages,
  links,
  description,
  images,
}: ProjectTemplate) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Title */}
      <div
        className="flex items-center bg-slate-800 rounded-lg shadow-2xl p-4 cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
      </div>

      {/* Content */}
      <div
        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-full" : "max-h-0"
        }`}
      >
        {isOpen && (
          <div className="pt-5">
            {/* Links */}
            <div>
              {links.map((link, index) => (
                <span key={index} className="flex items-center space-x-6">
                  <div className="flex space-x-2 items-center">
                    <Link
                      href={link.gitHub}
                      target="_blank"
                      className="flex justify-center items-center bg-white w-10 h-10 shadow-2xl rounded-lg cursor-pointer hover:shadow-none transition-all duration-300 ease-in-out"
                    >
                      <Image src={github} alt="GitHub" className="w-6 h-6" />
                    </Link>
                    <Link
                      href={link.gitHub}
                      target="_blank"
                      className="text-sm hover:underline cursor-pointer"
                    >
                      GitHub
                    </Link>
                  </div>

                  {link.website && (
                    <div className="flex space-x-2 items-center">
                      <Link
                        href={link.website}
                        target="_blank"
                        className="flex justify-center items-center bg-white w-10 h-10 shadow-2xl rounded-lg cursor-pointer hover:shadow-none transition-all duration-300 ease-in-out"
                      >
                        <Image src={webLink} alt="GitHub" className="w-6 h-6" />
                      </Link>
                      <Link
                        href={link.website}
                        target="_blank"
                        className="text-sm hover:underline cursor-pointer"
                      >
                        Live Demo
                      </Link>
                    </div>
                  )}
                </span>
              ))}
            </div>

            {/* Languages */}
            <ul className="flex flex-wrap items-center gap-4 mt-4">
              {languages.map((lang, index) => (
                <li
                  key={index}
                  className={`${lang.className} rounded-full shadow-lg px-3 py-1 md:px-4 md:py-2 text-xs w-fit`}
                >
                  {lang.language}
                </li>
              ))}
            </ul>

            {/* Description */}
            <ul className="mt-4 ml-4 list-disc">
              {description.map((point, index) => (
                <li key={index} className="text-xs">
                  {point}
                </li>
              ))}
            </ul>

            {/* Images */}
            <div className="flex flex-wrap gap-4 mt-4">
              {images.map((image, index) => (
                <div key={index}>
                  <Image className="w-80" src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
