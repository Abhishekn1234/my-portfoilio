type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy: string;
  center?: boolean;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  center = false,
  dark = false,
}: SectionHeaderProps) {
  const align = center ? "mx-auto text-center" : "";
  const copyColor = dark ? "text-slate-300" : "text-slate-600";
  const titleColor = dark ? "text-white" : "text-slate-950";

  return (
    <div className={`reveal-on-scroll mb-14 max-w-3xl ${align}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      <p className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg ${copyColor}`}>
        {copy}
      </p>
    </div>
  );
}
