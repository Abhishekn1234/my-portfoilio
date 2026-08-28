import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { projects } from "@/app/components/common/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-band bg-teal-50/65">
      <div className="section-container">
        <div className="reveal-on-scroll mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="section-eyebrow">My work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-copy">
              Applications and systems built with modern web technologies,
              practical workflows, and responsive user interfaces.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-teal-700"
          >
            Start a conversation
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="reveal-on-scroll soft-card group flex h-full flex-col overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-300 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-[8px] bg-slate-950 text-sm font-black text-teal-200">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-800">
                  <Layers className="size-3.5" />
                  Project
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950 transition-colors group-hover:text-teal-700">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition group-hover:border-teal-200 group-hover:text-teal-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Key features
                </p>

                <ul className="space-y-3">
                  {project.features.slice(0, 5).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-7">
                <div className="flex items-center justify-between border-t border-slate-200 pt-5">
                  <span className="text-sm font-bold text-slate-400">
                    {project.url ? "Live Website" : "Web Application"}
                  </span>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-teal-500 hover:bg-teal-600 hover:text-white"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : (
                    <span className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-hover:border-teal-500 group-hover:bg-teal-600 group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
