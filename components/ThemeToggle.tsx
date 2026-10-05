"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "./Icons";

type Theme = "light" | "dark";

function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, () => null);

  const toggle = () => {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  };

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink ${className}`}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
