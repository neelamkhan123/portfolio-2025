import { education, profile } from "@/lib/content/profile";
import { roles } from "@/lib/content/roles";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <div data-reveal className="section-head">
          <h2 className="section-title">Where I have been</h2>
        </div>

        <div className="flex flex-col">
          {roles.map((role) => (
            <div
              key={role.company}
              data-reveal
              className="grid grid-cols-[180px_1fr] gap-12 py-8 max-md:grid-cols-1 max-md:gap-2"
              style={{ borderBottom: "1px solid var(--border-default)" }}
            >
              <div
                className="tabular pt-1 text-[13px]"
                style={{ color: "var(--text-muted)" }}
              >
                {role.period}
              </div>
              <div>
                <h3 className="serif m-0 mb-1.5 text-[26px] font-normal tracking-[-0.02em]">
                  {role.title}
                </h3>
                <div
                  className="mb-3 text-sm font-medium"
                  style={{ color: "var(--accent-ink)" }}
                >
                  {role.company}
                </div>
                <p
                  className="m-0 max-w-[62ch] text-[15px] leading-[1.65] text-pretty"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {role.summary}
                </p>
                <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                  {role.tech.slice(0, 6).map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div
            data-reveal
            className="grid grid-cols-[180px_1fr] gap-12 py-8 max-md:grid-cols-1 max-md:gap-2"
          >
            <div
              className="tabular pt-1 text-[13px]"
              style={{ color: "var(--text-muted)" }}
            >
              {education.dates}
            </div>
            <div>
              <h3 className="serif m-0 mb-1.5 text-[26px] font-normal tracking-[-0.02em]">
                {education.degree}
              </h3>
              <div
                className="mb-3 text-sm font-medium"
                style={{ color: "var(--accent-ink)" }}
              >
                {education.institution}
              </div>
              <p
                className="m-0 max-w-[62ch] text-[15px] leading-[1.65] text-pretty"
                style={{ color: "var(--text-secondary)" }}
              >
                {education.note}
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="sr-only">{profile.name}</span>
    </section>
  );
}
