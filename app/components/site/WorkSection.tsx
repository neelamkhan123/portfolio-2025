import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { projects } from "@/lib/content/projects";
import Figure from "./Figure";

export default function WorkSection() {
  return (
    <section id="work" className="section relative">
      <div className="shell">
        <div data-reveal className="section-head flex items-baseline justify-between gap-6">
          <h2 className="section-title">Selected work</h2>
          <span
            className="text-xs whitespace-nowrap"
            style={{ color: "var(--text-muted)" }}
          >
            Three projects
          </span>
        </div>

        <div className="flex flex-col gap-30 max-md:gap-20">
          {projects.map((project, i) => {
            const index = String(i + 1).padStart(2, "0");
            const flipped = i % 2 === 1;

            return (
              <article
                key={project.slug}
                data-reveal
                className={`grid items-center gap-16 max-md:grid-cols-1 max-md:gap-8 ${
                  flipped ? "grid-cols-[1fr_1.15fr]" : "grid-cols-[1.15fr_1fr]"
                }`}
              >
                {/* Rows alternate: the figure keeps the wider column throughout. */}
                <div
                  className="max-md:order-2"
                  style={flipped ? { order: 1 } : { order: 2 }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className="serif tabular text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {index}
                    </span>
                    <span
                      aria-hidden
                      className="h-px w-8"
                      style={{ background: "var(--border-strong)" }}
                    />
                    <span
                      className="text-xs font-medium"
                      style={{ color: `var(--${project.tint}-ink)` }}
                    >
                      {project.label}
                    </span>
                  </div>

                  <h3 className="serif m-0 mb-4 text-4xl leading-[1.15] font-normal tracking-[-0.025em]">
                    {project.title}
                  </h3>

                  <p
                    className="m-0 mb-6 text-base leading-[1.65] text-pretty"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.pitch}
                  </p>

                  <ul className="mb-7 flex list-none flex-wrap gap-2 p-0">
                    {project.cardTech.map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 pb-[3px] text-sm font-medium transition-colors hover:text-[var(--accent-ink)]"
                    style={{ borderBottom: "1px solid var(--border-strong)" }}
                  >
                    Read the case study
                    <ChevronRight aria-hidden size={14} />
                  </Link>
                </div>

                <div
                  className="max-md:order-1"
                  style={flipped ? { order: 2 } : { order: 1 }}
                >
                  <Figure
                    tilt
                    tint={project.tint}
                    index={index}
                    caption={project.title}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
