import Image from "next/image";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { siFiverr, siUpwork } from "simple-icons";

function PlatformMark({ path, label }: { path: string; label: string }) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={`${label} logo`} className="h-7 w-7 fill-current">
      <path d={path} />
    </svg>
  );
}

function CompanyLogo({
  logo,
  logoKind,
  company,
}: {
  logo?: string;
  logoKind?: "xpera" | "freelance";
  company: string;
}) {
  if (logo) {
    return (
      <div className="relative h-12 w-full overflow-hidden">
        <Image
          src={logo}
          alt={`${company} logo`}
          fill
          sizes="112px"
          className="object-contain"
        />
      </div>
    );
  }

  if (logoKind === "freelance") {
    return (
      <div className="flex items-center justify-center gap-3">
        <span className="text-[#14a800]">
          <PlatformMark path={siUpwork.path} label="Upwork" />
        </span>
        <span className="h-7 w-px bg-border" aria-hidden="true" />
        <span className="text-[#1dbf73]">
          <PlatformMark path={siFiverr.path} label="Fiverr" />
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-accent text-lg font-bold text-slate-950">
        X
      </span>
      <span className="text-sm font-semibold tracking-tight">XPera</span>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border bg-surface">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-24 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Experience</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Professional experience, proven in production.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Healthcare, IoT, retail, mobile, backend, and client delivery across more than eight years.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-4">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.period}`} delay={i * 70}>
              <li className="group grid min-w-0 gap-6 rounded-2xl border border-border bg-background/40 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/25 hover:bg-surface-2/70 md:grid-cols-[7.5rem_minmax(0,1fr)_auto] md:items-start md:p-7">
                <div className="relative flex min-h-20 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <span className="absolute left-2.5 top-2 font-mono text-[9px] text-muted-2">0{i + 1}</span>
                  <CompanyLogo logo={item.logo} logoKind={item.logoKind} company={item.company} />
                </div>
                <div>
                  <h3 className="break-words text-lg font-semibold tracking-tight">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/75">{item.company}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="whitespace-nowrap font-mono text-xs text-muted-2">{item.period}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
