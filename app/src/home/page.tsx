import { skills } from "@/app/components/common/skills";


export default function HomePage() {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}
            <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Software Developer · Full-Stack Developer · Frontend & Backend
            </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="text-blue-600">
                  Abhishek N
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl">
                I build modern, responsive and scalable web applications
                with a focus on clean design, performance and great user
                experiences.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-blue-600 hover:text-blue-600"
                >
                  Contact Me
                </a>
              </div>

              {/* Tech Stack */}
              <div className="mt-10">
                <p className="mb-4 text-sm text-gray-500">
                  Technologies I work with
                </p>

            <div className="flex flex-wrap gap-3">
            {skills.flatMap((skill) =>
              skill.items.map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  {item.name}
                </span>
              ))
            )}
          </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gray-100 sm:h-96 sm:w-96">
                <div className="absolute inset-4 rounded-full border border-gray-200" />

                <div className="text-center">
                  <p className="text-6xl font-bold text-gray-950">
                    AN
                  </p>

                  <p className="mt-2 text-sm font-medium uppercase tracking-widest text-gray-500">
                    Developer
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}