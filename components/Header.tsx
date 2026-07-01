"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certificates", label: "Certificates" },
  { href: "/#recommendations", label: "Recommendations" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-background/0"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 text-[15px] font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background transition-transform duration-300 group-hover:-rotate-6">
            {profile.name.charAt(0)}
          </span>
          <span>{profile.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#work"
            className="ml-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
          >
            View work
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-background transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-6 py-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 text-2xl font-medium tracking-tight transition-colors hover:text-accent"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
