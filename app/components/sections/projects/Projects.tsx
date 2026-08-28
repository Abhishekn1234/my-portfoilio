import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "@/app/components/shared/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section-band bg-teal-50/65">
      <div className="section-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="My work"
            title="Featured Projects"
            copy="Applications built with modern web technologies, practical workflows, and responsive interfaces."
          />

          <a
            href="#contact"
            className="mb-14 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-teal-700"
          >
            Start a conversation
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
