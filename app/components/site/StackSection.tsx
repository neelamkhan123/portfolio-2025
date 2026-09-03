import { skillGroups, stackIntro } from "@/lib/content/skills";

const tintStyles = {
  p1: { background: "var(--p1)", color: "var(--p1-ink)" },
  p2: { background: "var(--p2)", color: "var(--p2-ink)" },
  p3: { background: "var(--p3)", color: "var(--p3-ink)" },
  neutral: { background: "var(--surface-muted)", color: "var(--text-secondary)" },
} as const;

export default function StackSection() {
  return (
    <section id="stack" className="section" style={{ background: "var(--paper-deep)" }}>
      <div className="shell">
        <div data-reveal className="mb-16 max-w-[52ch]">
          <h2 className="section-title mb-4">What I build with</h2>
          <p
            className="m-0 text-[17px] leading-relaxed text-pretty"
            style={{ color: "var(--text-secondary)" }}
          >
            {stackIntro}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              data-reveal
              data-delay={i * 80}
              className="rounded-xl p-6"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-default)",
              }}
            >
              <h3
                className="m-0 mb-4 text-xs font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                {group.title}
              </h3>
              <ul className="flex list-none flex-wrap gap-2 p-0">
                {group.items.map((item) => (
                  <li key={item} className="tag-tinted" style={tintStyles[group.tint]}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
