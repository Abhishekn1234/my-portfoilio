import { CheckCircle2 } from "lucide-react";

type BulletListProps = {
  items: string[];
  variant?: "dot" | "check";
};

export function BulletList({ items, variant = "dot" }: BulletListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6">
          {variant === "check" ? (
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
          ) : (
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-300" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
