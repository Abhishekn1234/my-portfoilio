import Link from "next/link";
import { socialLinks } from "../common/sociallinks";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold tracking-tight"
            >
              <span className="flex size-9 items-center justify-center rounded-[8px] bg-teal-400 text-sm text-slate-950">
                AN
              </span>
              Abhishek<span className="text-amber-300">.</span>
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              Software Developer building modern, scalable and user-focused web
              applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:border-teal-300 hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-slate-500">
            (c) {new Date().getFullYear()} Abhishek N. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
