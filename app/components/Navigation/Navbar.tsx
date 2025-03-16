"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import hamburger from "../../images/icons/hamburger-icon.svg";
import close from "../../images/icons/close-icon.svg";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `px-6 py-4 rounded-lg cursor-pointer font-bold transition-all duration-300 ${
      pathname === href
        ? "bg-slate-900 text-white shadow-2xl"
        : "hover:bg-slate-900 hover:shadow-2xl"
    }`;

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 text-white shadow-2xl">
      {/* Desktop */}
      <nav className="hidden md:flex space-x-2 justify-end items-center py-6 pr-20 lg:pr-32 xl:pr-80 bg-slate-950/90 backdrop-blur-lg pointer-events-auto rounded-b-lg shadow-md">
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link href="/projects" className={linkClasses("/projects")}>
          Projects
        </Link>
        <Link href="/contact" className={linkClasses("/contact")}>
          Contact
        </Link>
      </nav>

      {/* Mobile */}
      <div className="md:hidden w-full bg-slate-950/90 backdrop-blur-lg pointer-events-auto relative">
        <button
          onClick={toggleNav}
          className="cursor-pointer p-3 rounded-lg m-4 bg-slate-900 hover:shadow-2xl"
        >
          <Image
            src={showNav ? close : hamburger}
            alt="Menu"
            className="h-7 w-7"
          />
        </button>
        <div
          className={`fixed top-20 left-0 w-full bg-slate-950 transition-all duration-300 backdrop-blur-lg shadow-lg overflow-hidden z-50 ${
            showNav ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 w-full px-4 py-4">
            <Link href="/" onClick={closeNav} className={linkClasses("/")}>
              Home
            </Link>
            <Link
              href="/projects"
              onClick={closeNav}
              className={linkClasses("/projects")}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={closeNav}
              className={linkClasses("/contact")}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
