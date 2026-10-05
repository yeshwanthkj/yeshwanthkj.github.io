import { site } from "@/data/site";
import Ecosystem from "./graphics/Ecosystem";
import FieldToGrid from "./graphics/FieldToGrid";
import { ArrowDown, Download, MapPin } from "./Icons";
import { btn } from "./ui";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-16">
      <FieldToGrid />
      {/* soften the background behind the text for legibility */}
      <div aria-hidden className="absolute inset-0 -z-0 bg-[radial-gradient(60%_70%_at_20%_45%,var(--bg)_30%,transparent_100%)]" />

      <div className="container-page relative grid items-center gap-10 pb-16 pt-12 sm:pt-16 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-20 lg:pt-8">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-field">AI</span>
            <span aria-hidden>•</span>
            <span className="text-water">Agriculture</span>
            <span aria-hidden>•</span>
            <span className="text-soil">Water</span>
          </p>

          <h1 id="hero-title" className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.25rem]">
            Abinava
            <br />
            Yeshwanth <span className="text-field">KJ</span>
          </h1>

          <p className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-[15px] font-medium text-ink-2 sm:text-base">
            {site.roles.map((r, i) => (
              <span key={r} className="inline-flex items-center gap-2">
                {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-line-strong" />}
                {r}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl font-serif text-xl leading-relaxed text-ink sm:text-[1.4rem]">
            Bridging computer science, artificial intelligence and agricultural engineering to build data-driven
            tools for <em className="text-field not-italic">irrigation</em> and{" "}
            <em className="text-water not-italic">sustainable water management</em>.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#research" className={btn.primary}>
              Explore my research <ArrowDown width={16} height={16} />
            </a>
            <a href="#projects" className={btn.secondary}>
              View projects
            </a>
            <a href={site.cvPath} download className={btn.ghost}>
              <Download width={16} height={16} /> Download CV
            </a>
          </div>

          <p className="mt-10 flex items-start gap-2 text-sm text-muted">
            <MapPin width={16} height={16} className="mt-0.5 shrink-0" />
            <span>
              PhD researcher · {site.affiliation}
            </span>
          </p>
        </div>

        <Ecosystem className="mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px]" />
      </div>
    </section>
  );
}
