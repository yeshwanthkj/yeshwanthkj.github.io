import Image from "next/image";
import { fieldActivities, fieldPhotos } from "@/data/field";
import OklahomaMap from "./graphics/OklahomaMap";
import { Camera } from "./Icons";
import { Section, SectionHeader, Tag } from "./ui";

export default function FieldWork() {
  return (
    <Section id="field">
      <SectionHeader
        id="field"
        index="06"
        eyebrow="Field research"
        title={
          <>
            Grounded in <span className="text-field">real field data.</span>
          </>
        }
        intro="Good models need good measurements. I help install and maintain sensor networks on research stations and growers' fields across Oklahoma."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <div data-reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
            <OklahomaMap />
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              ["15", "producer fields instrumented"],
              ["3", "regions of Oklahoma"],
              ["Bi-weekly", "logger data collection"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl border border-line bg-surface px-2 py-4">
                <dt className="sr-only">{l}</dt>
                <dd className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{v}</dd>
                <dd className="mt-1 text-[11.5px] leading-snug text-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="space-y-3">
          {fieldActivities.map((a) => (
            <li key={a.id} data-reveal className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-field/40 sm:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-field">{a.region}</p>
              <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-ink">{a.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">{a.description}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {a.equipment.map((e) => (
                  <li key={e}>
                    <Tag tone="field">{e}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      {/* Photo strip — placeholders until real field photos are added in data/field.ts */}
      <div data-reveal className="mt-14 grid gap-3 sm:grid-cols-2">
        {fieldPhotos.map((p) => (
          <figure
            key={p.caption}
            className={`lift flex flex-col overflow-hidden rounded-2xl border border-line bg-surface ${
              p.featured ? "sm:row-span-2" : ""
            }`}
          >
            <div className={`relative ${p.featured ? "aspect-[4/5] sm:aspect-auto sm:min-h-[360px] sm:flex-1" : "aspect-[4/3]"}`}>
              {p.src ? (
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={p.featured ? "(min-width: 640px) 40vw, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                  className="object-cover"
                  style={p.position ? { objectPosition: p.position } : undefined}
                  loading="lazy"
                />
              ) : (
                <div className="grid-texture flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-2/60 text-muted">
                  <Camera width={22} height={22} />
                  <span className="font-mono text-[10.5px] uppercase tracking-wider">Field photo · coming soon</span>
                </div>
              )}
            </div>
            <figcaption className="border-t border-line px-4 py-3 text-[13px] text-ink-2">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
