import Link from "next/link";
import { socialLinks } from "../common/sociallinks";


export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              Abhishek<span className="text-blue-500">.</span>
            </Link>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">
              Software Developer building modern, scalable and
              user-focused web applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Abhishek N. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}