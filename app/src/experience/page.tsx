import { Briefcase, Building2, Calendar, GraduationCap, Sparkles } from "lucide-react";
import { education } from "@/app/components/common/education";
import {
  experiences,
  internshipsAndFreelance,
} from "@/app/components/common/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-band bg-slate-950 text-white">
      <div className="section-container">
        <div className="reveal-on-scroll mb-14 max-w-3xl">
          <span className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
            Career journey
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Experience & Education
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A practical mix of product development, full-stack engineering,
            enterprise systems, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="reveal-on-scroll lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-[8px] bg-teal-300 text-slate-950">
                <Briefcase className="size-5" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative ml-3 space-y-6 border-l border-white/15 pl-6">
              {experiences.map((exp) => (
                <article key={`${exp.role}-${exp.period}`} className="relative">
                  <span className="absolute -left-[33px] top-6 size-4 rounded-full border-2 border-teal-300 bg-slate-950" />
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 transition hover:border-teal-300/40 hover:bg-white/[0.08] sm:p-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal-300/10 px-3 py-1 text-xs font-bold text-teal-200">
                      <Calendar className="size-3.5" />
                      {exp.period}
                    </span>

                    <h4 className="mt-4 text-lg font-bold text-white">
                      {exp.role}
                    </h4>
                    <p className="mt-2 flex items-start gap-2 text-sm font-semibold leading-6 text-slate-300">
                      <Building2 className="mt-0.5 size-4 shrink-0 text-amber-200" />
                      {exp.company}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal-on-scroll lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-[8px] bg-amber-300 text-slate-950">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative ml-3 space-y-6 border-l border-white/15 pl-6">
              {education.map((edu) => (
                <article key={`${edu.degree}-${edu.period}`} className="relative">
                  <span className="absolute -left-[33px] top-6 size-4 rounded-full border-2 border-amber-300 bg-slate-950" />
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5 transition hover:border-amber-300/40 hover:bg-white/[0.08] sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-teal-300/10 px-3 py-1 text-xs font-bold text-teal-200">
                        <Calendar className="size-3.5" />
                        {edu.period}
                      </span>
                      <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-bold text-amber-100">
                        {edu.grade}
                      </span>
                    </div>

                    <h4 className="mt-4 text-lg font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="mt-2 flex items-start gap-2 text-sm font-semibold leading-6 text-slate-300">
                      <Building2 className="mt-0.5 size-4 shrink-0 text-amber-200" />
                      {edu.institution}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal-on-scroll mt-14">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-[8px] bg-teal-300 text-slate-950">
              <Sparkles className="size-5" />
            </div>
            <h3 className="text-2xl font-bold">Internships</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {internshipsAndFreelance.map((item) => (
              <article
                key={`${item.role}-${item.period}`}
                className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 transition hover:border-teal-300/40 hover:bg-white/[0.08] sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-teal-300/10 px-3 py-1 text-xs font-bold text-teal-200">
                    <Calendar className="size-3.5" />
                    {item.period}
                  </span>
                  <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-bold text-amber-100">
                    {item.type}
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-white">
                  {item.role}
                </h4>
                <p className="mt-2 flex items-start gap-2 text-sm font-semibold leading-6 text-slate-300">
                  <Building2 className="mt-0.5 size-4 shrink-0 text-amber-200" />
                  {item.company}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.description.map((description) => (
                    <li
                      key={description}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-300" />
                      <span>{description}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
