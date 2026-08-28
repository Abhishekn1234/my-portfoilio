import { ArrowDown, ArrowUpRight, Code2, Database, Server } from "lucide-react";
import { skills } from "@/app/components/common/skills";

const heroStats = [
  { value: "2+", label: "Years building apps" },
  { value: "8", label: "Featured projects" },
  { value: "8.4", label: "B.Tech CGPA" },
];

const focusAreas = [
  { label: "Frontend", icon: Code2 },
  { label: "Backend", icon: Server },
  { label: "Databases", icon: Database },
];

export default function HomePage() {
  const featuredSkills = skills.flatMap((skill) => skill.items).slice(0, 12);

  return (
    <section
      id="home"
      className="section-band relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32"
    >
      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="reveal-on-scroll">
            <p className="section-eyebrow">Software Developer</p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Building clean, scalable web experiences with full-stack craft.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Hi, I am Abhishek N. I design and develop responsive web
              applications across React, Next.js, Node.js, PHP, and database-led
              systems with a sharp eye for usability and performance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:bg-teal-700"
              >
                View Projects
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 text-sm font-bold text-slate-800 shadow-sm transition hover:border-teal-400 hover:text-teal-700"
              >
                Contact Me
                <ArrowDown className="size-4" />
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[8px] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-black text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-on-scroll lg:justify-self-end">
            <div className="soft-card relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 via-blue-600 to-amber-400" />
              <div className="rounded-[8px] bg-slate-950 p-5 text-white shadow-inner">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-teal-300">
                      Abhishek N
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Full-stack web portfolio
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-rose-400" />
                    <span className="size-2.5 rounded-full bg-amber-300" />
                    <span className="size-2.5 rounded-full bg-teal-300" />
                  </div>
                </div>

                <div className="py-8 text-center">
                  <div className="mx-auto flex size-32 items-center justify-center rounded-[8px] border border-white/10 bg-white/5 text-5xl font-black text-teal-200 sm:size-40 sm:text-6xl">
                    AN
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                    Developer
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {focusAreas.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-[8px] border border-white/10 bg-white/[0.06] p-3"
                    >
                      <Icon className="size-5 text-teal-300" />
                      <p className="mt-3 text-sm font-semibold">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Technologies I work with
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredSkills.map((item) => (
                    <span
                      key={item.name}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
