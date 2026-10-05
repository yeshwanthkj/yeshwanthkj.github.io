"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data/site";
import { Close, Download, Menu } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export function Brand() {
  return (
    <a href="#top" className="group inline-flex items-center gap-2.5 rounded-md" aria-label={`${site.name} — home`}>
      <span className="text-[1.35rem] font-semibold leading-none tracking-tight text-ink">
        KJ<span className="text-field">.</span>
      </span>
      <span aria-hidden className="h-4 w-px bg-line-strong" />
      <span className="font-mono text-[11px] tracking-[0.12em] text-muted transition-colors group-hover:text-ink-2">
        AI × AG
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const ids = ["top", ...nav.map((n) => n.href.slice(1))];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id === "top" ? "" : visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Mobile menu: lock scroll, close on Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Brand />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3 py-2 text-[13.5px] transition-colors ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-3 -bottom-px h-px bg-field transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href={site.cvPath}
            download
            className="ml-1 hidden min-h-10 items-center gap-1.5 rounded-full border border-line-strong px-4 text-[13px] font-medium text-ink transition-colors hover:border-field hover:text-field sm:inline-flex"
          >
            <Download width={15} height={15} /> CV
          </a>
          <button
            ref={menuButton}
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink hover:bg-surface-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-6">
          <ul className="divide-y divide-line">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 text-xl font-medium tracking-tight text-ink"
                >
                  <span className="w-6 font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={site.cvPath} download className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-full bg-field text-sm font-medium text-on-accent">
            <Download width={16} height={16} /> Download CV
          </a>
          <p className="eyebrow mt-8 text-center">{site.tagline}</p>
        </nav>
      </div>
    </header>
  );
}
