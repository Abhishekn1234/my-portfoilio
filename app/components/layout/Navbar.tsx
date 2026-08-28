"use client";

import Link from "next/link";
import { useState } from "react";
import { Download } from "lucide-react";
import { navItems } from "../common/navlinks";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/documents/resume.pdf";
    link.download = "Abhishek_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/82 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-base font-bold tracking-tight text-slate-950 transition-opacity hover:opacity-80"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex size-9 items-center justify-center rounded-[8px] bg-slate-950 text-sm text-white shadow-sm">
            AN
          </span>
          <span>Abhishek</span>
          <span className="text-teal-600">.</span>
        </Link>

        <div className="hidden items-center rounded-full border border-slate-200/80 bg-white/72 p-1 shadow-xs md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-700"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button 
            onClick={handleDownloadResume}
            className="h-10 cursor-pointer gap-2 rounded-full bg-slate-950 px-4 text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md active:scale-95"
          >
            <Download className="size-4" />
            Resume
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex size-10 items-center justify-center rounded-[8px] border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:bg-teal-50 hover:text-teal-700 md:hidden"
        >
          <span className="sr-only">Menu</span>

          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-5 sm:px-6 gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-teal-700"
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-3">
            <Button 
              onClick={() => {
                handleDownloadResume();
                setIsOpen(false);
              }}
              className="h-10 w-full justify-center gap-2 rounded-full bg-slate-950 text-white shadow-xs hover:bg-teal-700"
            >
              <Download className="size-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
