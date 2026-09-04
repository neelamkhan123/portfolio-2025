import { profile } from "@/lib/content/profile";

const GITHUB_LABEL = "GitHub";

function withGithubLink(paragraph: string) {
  const parts = paragraph.split(GITHUB_LABEL);

  return parts.flatMap((part, index) =>
    index === 0
      ? [part]
      : [
          <a
            key={index}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-1 underline-offset-4 transition-colors hover:text-[var(--accent-ink)]"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {GITHUB_LABEL}
          </a>,
          part,
        ],
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: "var(--paper-deep)" }}
    >
      <div className="shell grid grid-cols-[0.85fr_1.15fr] items-start gap-20 max-lg:grid-cols-1 max-lg:gap-10">
        <div data-reveal className="max-lg:max-w-sm">
          <img
            src="/avatar.png"
            alt="Portrait of Neelam Khan"
            className="w-3/4 h-auto rounded-lg"
          />
        </div>

        <div data-reveal data-delay="120">
          <h2 className="section-title mb-8">A little about me</h2>

          <p className="serif m-0 mb-6 text-[22px] leading-[1.55] text-pretty">
            {profile.about.opener}
          </p>

          {profile.about.body.map((paragraph) => (
            <p
              key={paragraph}
              className="m-0 mb-6 text-base leading-[1.7] text-pretty"
              style={{ color: "var(--text-secondary)" }}
            >
              {withGithubLink(paragraph)}
            </p>
          ))}

          <dl
            className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 pt-8"
            style={{ borderTop: "1px solid var(--border-strong)" }}
          >
            {profile.about.facts.map((fact) => (
              <div key={fact.label}>
                <dt
                  className="mb-1.5 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {fact.label}
                </dt>
                <dd className="m-0 text-[15px] font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
