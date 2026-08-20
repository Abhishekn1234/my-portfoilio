import { skills } from "@/app/components/common/skills";
import React from "react";

const levelConfig = {
  Beginner: {
    width: "w-1/3",
    text: "text-yellow-600",
    bg: "bg-yellow-500",
  },
  Intermediate: {
    width: "w-2/3",
    text: "text-blue-600",
    bg: "bg-blue-600",
  },
  Master: {
    width: "w-full",
    text: "text-green-600",
    bg: "bg-green-600",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#f9f8f6] px-6 py-20 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#800000]">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Technologies and tools I use to build modern, scalable, and
            user-friendly web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#800000]/30 hover:shadow-lg"
            >
              {/* Category */}
              <div className="mb-6 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-[#800000]" />

                <h3 className="text-xl font-semibold text-gray-900">
                  {skill.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {skill.items.map((item) => {
                  const level =
                    levelConfig[item.level as keyof typeof levelConfig];

                  return (
                    <div key={item.name}>
                      {/* Name + Level */}
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          {item.name}
                        </span>

                        <span
                          className={`text-xs font-semibold ${level.text}`}
                        >
                          {item.level}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full rounded-full ${level.bg} ${level.width} transition-all duration-700 group-hover:opacity-90`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Level Legend */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="text-gray-600">Beginner</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-600" />
            <span className="text-gray-600">Intermediate</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-600" />
            <span className="text-gray-600">Master</span>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl bg-gray-900 px-6 py-8 text-center sm:px-10">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Full-Stack Web Development
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-400">
            Experienced in developing responsive frontend applications,
            RESTful APIs, database-driven systems, and production-ready
            full-stack solutions.
          </p>
        </div>
      </div>
    </section>
  );
}