import { ArrowUpRight, Layers } from "lucide-react";
import type { Project } from "@/app/data/projects";
import { BulletList } from "@/app/components/shared/BulletList";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const label = project.url ? "Live Website" : "Web Application";

  return (
    <article className="reveal-on-scroll soft-card group flex h-full flex-col overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-300 sm:p-6">
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

      <ProjectTags items={project.technologies} />
      <ProjectFeatures items={project.features.slice(0, 5)} />
      <ProjectFooter label={label} project={project} />
    </article>
  );
}

function ProjectTags({ items }: { items: string[] }) {
  return (
    <div className="mt-6">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
        Technologies
      </p>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition group-hover:border-teal-200 group-hover:text-teal-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectFeatures({ items }: { items: string[] }) {
  return (
    <div className="mt-6 border-t border-slate-200 pt-5 text-slate-600">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
        Key features
      </p>
      <BulletList items={items} variant="check" />
    </div>
  );
}

function ProjectFooter({
  label,
  project,
}: {
  label: string;
  project: Project;
}) {
  return (
    <div className="mt-auto pt-7">
      <div className="flex items-center justify-between border-t border-slate-200 pt-5">
        <span className="text-sm font-bold text-slate-400">{label}</span>
        <ProjectLink project={project} />
      </div>
    </div>
  );
}

function ProjectLink({ project }: { project: Project }) {
  const className =
    "flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-hover:border-teal-500 group-hover:bg-teal-600 group-hover:text-white";

  if (!project.url) {
    return (
      <span className={className}>
        <ArrowUpRight className="size-4" />
      </span>
    );
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title}`}
      className={className}
    >
      <ArrowUpRight className="size-4" />
    </a>
  );
}
