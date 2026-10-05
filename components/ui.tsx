import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  labelledBy,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy ?? `${id}-title`} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  id,
  index,
  eyebrow,
  title,
  intro,
  aside,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header data-reveal className="mb-12 grid gap-6 sm:mb-14 lg:grid-cols-[1fr_auto] lg:items-end">
      <div className="max-w-3xl">
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="text-field">{index}</span>
          <span aria-hidden className="h-px w-8 bg-line-strong" />
          <span>{eyebrow}</span>
        </p>
        <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 text-base leading-relaxed text-ink-2 sm:text-lg">{intro}</p>}
      </div>
      {aside}
    </header>
  );
}

export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "field" | "water" | "soil" }) {
  const tones = {
    neutral: "border-line bg-surface text-ink-2",
    field: "border-transparent bg-field-soft text-field",
    water: "border-transparent bg-water-soft text-water",
    soil: "border-transparent bg-soil-soft text-soil",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] leading-5 ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: "active" | "ongoing" | "completed" }) {
  const map = {
    active: { label: "Active development", cls: "bg-field-soft text-field", dot: "bg-field" },
    ongoing: { label: "Ongoing research", cls: "bg-soil-soft text-soil", dot: "bg-soil" },
    completed: { label: "Built", cls: "bg-water-soft text-water", dot: "bg-water" },
  } as const;
  const s = map[status];
  return (
    <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] leading-5 ${s.cls}`}>
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

const btnBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px cursor-pointer";

export const btn = {
  primary: `${btnBase} bg-field text-on-accent hover:bg-field-strong`,
  secondary: `${btnBase} border border-line-strong bg-surface text-ink hover:border-ink/40`,
  ghost: `${btnBase} text-ink-2 hover:text-ink px-3`,
};
