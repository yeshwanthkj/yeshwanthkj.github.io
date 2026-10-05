import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight text-ink">{site.name}</p>
          <p className="eyebrow mt-1">{site.tagline}</p>
          <p className="mt-3 max-w-sm text-sm text-muted">Built around research, engineering and sustainable agriculture.</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <ul className="flex gap-5 text-sm">
            <li>
              <a className="text-ink-2 hover:text-field" href={site.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="text-ink-2 hover:text-field" href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="text-ink-2 hover:text-field" href={`mailto:${site.email}`}>
                Email
              </a>
            </li>
          </ul>
          <p className="font-mono text-[11px] text-muted">© {new Date().getFullYear()} · Stillwater, OK</p>
        </div>
      </div>
    </footer>
  );
}
