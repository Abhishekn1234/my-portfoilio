import type { LucideIcon } from "lucide-react";

type IconHeadingProps = {
  title: string;
  icon: LucideIcon;
  color?: "teal" | "amber";
};

const colors = {
  teal: "bg-teal-300 text-slate-950",
  amber: "bg-amber-300 text-slate-950",
};

export function IconHeading({
  title,
  icon: Icon,
  color = "teal",
}: IconHeadingProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div
        className={`flex size-10 items-center justify-center rounded-[8px] ${colors[color]}`}
      >
        <Icon className="size-5" />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  );
}
