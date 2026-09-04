import { heroStats, profile } from "@/lib/content/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-8 pt-30 pb-20 max-sm:px-5"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-35 -right-30 h-130 w-130 rounded-full blur-[4px]"
        style={{ background: "var(--accent-soft)", opacity: 0.5 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-45 -left-35 h-115 w-115 rounded-full"
        style={{ background: "var(--p2)", opacity: 0.45 }}
      />

      <div data-hero className="relative mx-auto w-full max-w-[1120px]">
        <h1
          data-reveal
          data-delay="80"
          className="serif m-0 mb-8 max-w-[16ch] text-[clamp(48px,7.5vw,104px)] leading-[1.02] font-light tracking-[-0.03em] text-balance"
        >
          {profile.hero.lead}{" "}
          <em className="italic" style={{ color: "var(--accent-ink)" }}>
            {profile.hero.emphasis}
          </em>
        </h1>

        <p
          data-reveal
          data-delay="160"
          className="m-0 mb-10 max-w-[56ch] text-xl leading-relaxed text-pretty"
          style={{ color: "var(--text-secondary)" }}
        >
          {profile.hero.intro}
        </p>

        <div
          data-reveal
          data-delay="240"
          className="mb-16 flex flex-wrap items-center gap-3"
        >
          <a href="#work" className="btn btn-solid">
            See selected work
          </a>
          <a href="#contact" className="btn btn-quiet">
            Get in touch
          </a>
        </div>

        <dl
          data-reveal
          data-delay="320"
          className="grid max-w-[840px] grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-px overflow-hidden rounded-xl"
          style={{
            background: "var(--border-default)",
            border: "1px solid var(--border-default)",
          }}
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-5"
              style={{ background: "var(--surface)" }}
            >
              <dd className="serif tabular m-0 text-[30px] font-normal tracking-[-0.025em]">
                {stat.value}
              </dd>
              <dt
                className="mt-1 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
