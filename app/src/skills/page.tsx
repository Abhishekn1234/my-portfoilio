import { Layers3 } from "lucide-react";
import { skills } from "@/app/components/common/skills";
import { levelConfig } from "@/app/components/common/skillslevelconfig";

export default function Skills() {
  return (
    <section id="skills" className="section-band bg-white/72">
      <div className="section-container">
        <div className="reveal-on-scroll mx-auto mb-14 max-w-3xl text-center">
          <span className="section-eyebrow">My expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-copy mx-auto">
            Tools and frameworks I use to build responsive frontends, APIs,
            database-backed systems, and production-ready full-stack products.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="reveal-on-scroll soft-card p-5 transition hover:-translate-y-1 hover:border-teal-300 sm:p-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-slate-950 text-teal-200">
                  <Layers3 className="size-5" />
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {skill.category}
                </h3>
              </div>

              <div className="space-y-5">
                {skill.items.map((item) => {
                  const level =
                    levelConfig[item.level as keyof typeof levelConfig];

                  return (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="text-sm font-bold text-slate-800">
                          {item.name}
                        </span>

                        <span className={`text-xs font-bold ${level.text}`}>
                          {item.level}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${level.bg} ${level.width} transition-all duration-700`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-on-scroll mt-10 flex flex-wrap justify-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 font-semibold text-slate-600">
            <span className="size-2.5 rounded-full bg-amber-400" />
            Beginner
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 font-semibold text-slate-600">
            <span className="size-2.5 rounded-full bg-blue-500" />
            Intermediate
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 font-semibold text-slate-600">
            <span className="size-2.5 rounded-full bg-teal-500" />
            Master
          </span>
        </div>

        <div className="reveal-on-scroll mt-10 rounded-[8px] bg-slate-950 px-6 py-8 text-center text-white shadow-2xl shadow-slate-900/15 sm:px-10">
          <h3 className="text-xl font-bold sm:text-2xl">
            Full-Stack Web Development
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Comfortable across responsive UI, REST APIs, authentication flows,
            databases, admin dashboards, and business workflow applications.
          </p>
        </div>
      </div>
    </section>
  );
}
