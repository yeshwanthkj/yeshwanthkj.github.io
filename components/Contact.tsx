"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { ArrowUpRight, Download, GitHub, LinkedIn, Mail, MapPin } from "./Icons";
import { btn } from "./ui";

const field =
  "mt-1.5 w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-muted/80 transition-colors focus:border-field focus:outline-none focus-visible:outline-2 focus-visible:outline-water";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // No backend: compose the message in the visitor's own email app.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
    { label: "LinkedIn", value: "abinavayeshwanth07", href: site.links.linkedin, icon: LinkedIn },
    { label: "GitHub", value: "yeshwanthkj", href: site.links.github, icon: GitHub },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="relative p-7 sm:p-10 lg:p-12">
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span className="text-field">10</span>
                <span aria-hidden className="h-px w-8 bg-line-strong" />
                <span>Contact</span>
              </p>
              <h2 id="contact-title" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Let&apos;s talk about water, data and agriculture.
              </h2>
              <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-ink-2">
                Open to research collaborations, conversations from conferences, and opportunities at the intersection
                of AI and agricultural engineering.
              </p>

              <ul className="mt-8 space-y-2">
                {links.map(({ label, value, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex min-h-12 items-center gap-4 rounded-xl border border-line px-4 py-3 transition-colors hover:border-field/50"
                    >
                      <Icon className="shrink-0 text-muted transition-colors group-hover:text-field" />
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">{label}</span>
                        <span className="block truncate text-[15px] text-ink">{value}</span>
                      </span>
                      <ArrowUpRight width={16} height={16} className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a href={site.cvPath} download className={btn.secondary}>
                  <Download width={16} height={16} /> Download CV
                </a>
                <p className="flex items-center gap-1.5 text-sm text-muted">
                  <MapPin width={15} height={15} /> {site.location}
                </p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="border-t border-line bg-bg/50 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12" aria-describedby="form-note">
              <h3 className="text-lg font-semibold tracking-tight text-ink">Send a note</h3>
              <p id="form-note" className="mt-1 text-sm text-muted">
                This opens your email app with the message pre-filled — nothing is sent from this site.
              </p>
              <label className="mt-6 block text-sm font-medium text-ink" htmlFor="c-name">
                Your name
              </label>
              <input id="c-name" name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className={field} />
              <label className="mt-5 block text-sm font-medium text-ink" htmlFor="c-msg">
                Message
              </label>
              <textarea
                id="c-msg"
                name="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${field} resize-y`}
              />
              <button type="submit" className={`${btn.primary} mt-6 w-full sm:w-auto`}>
                <Mail width={16} height={16} /> Compose email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
