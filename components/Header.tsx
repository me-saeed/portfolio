"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "/#intro", label: "Intro" },
  { href: "/#tech-stack", label: "Stack" },
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#certificates", label: "Certificates" },
  { href: "/#recommendations", label: "Recommendations" },
];

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // iOS-safe scroll lock while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const headerSolid = scrolled || open;

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-[90] lg:hidden ${
          open ? "visible" : "invisible pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-background" />
        <nav className="relative h-full overflow-y-auto overscroll-contain px-4 py-8 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#work"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
          >
            View work
          </Link>
        </nav>
      </div>,
      document.body,
    );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 lg:sticky ${
          headerSolid
            ? "border-b border-border bg-background/95 shadow-sm lg:bg-background/80 lg:shadow-none lg:backdrop-blur-xl"
            : "border-b border-transparent bg-background lg:bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl min-w-0 items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex min-w-0 items-center gap-2 text-[15px] font-semibold tracking-tight text-foreground"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background transition-transform duration-300 group-hover:-rotate-6">
              {profile.name.charAt(0)}
            </span>
            <span className="truncate">{profile.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
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
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-foreground shadow-sm lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
