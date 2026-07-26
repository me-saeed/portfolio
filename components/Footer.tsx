import Link from "next/link";
import { profile } from "@/lib/data";

const footerLinks = [
  { href: "/#intro", label: "Intro" },
  { href: "/#tech-stack", label: "Stack" },
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#certificates", label: "Certificates" },
  { href: "/#recommendations", label: "Recommendations" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="text-2xl font-semibold tracking-tight">{profile.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{profile.role}</p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Intelligent products · Production systems
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p></p>
        </div>
      </div>
    </footer>
  );
}
