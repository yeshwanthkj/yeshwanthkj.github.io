const WORDS = [
  "Irrigation scheduling",
  "Soil moisture",
  "Machine learning",
  "Evapotranspiration",
  "Weather forecasts",
  "Remote sensing",
  "Decision support",
  "Sensor networks",
  "Water balance",
  "Sustainable water use",
];

/** Slow scrolling keyword ribbon between the hero and the content. */
export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {WORDS.map((w) => (
        <li key={w} className="flex items-center whitespace-nowrap px-6 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-2">
          <span aria-hidden className="mr-6 h-1.5 w-1.5 rotate-45 bg-field/70" />
          {w}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-y border-line bg-surface py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
