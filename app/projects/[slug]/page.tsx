import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/lib/content/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function CaseStudyPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <article className="px-8 pt-24 pb-32 max-sm:px-5">
      <div className="mx-auto max-w-[780px]">
        <Link
          href="/#work"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft aria-hidden size={14} />
          All work
        </Link>

        <header
          className="pb-10"
          style={{ borderBottom: "1px solid var(--border-default)" }}
        >
          <div
            className="mb-5 text-xs font-medium"
            style={{ color: `var(--${project.tint}-ink)` }}
          >
            {project.label}
          </div>
          <h1 className="serif m-0 mb-6 text-[clamp(36px,5vw,60px)] leading-[1.08] font-light tracking-[-0.03em] text-balance">
            {project.title}
          </h1>
          <p
            className="m-0 mb-8 max-w-[64ch] text-lg leading-[1.65] text-pretty"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.summary}
          </p>
          <ul className="mb-8 flex list-none flex-wrap gap-2 p-0">
            {project.tech.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-solid">
              Source on GitHub
              <ArrowUpRight aria-hidden size={15} />
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-quiet">
              {project.demoLabel}
              <ArrowUpRight aria-hidden size={15} />
            </a>
          </div>
        </header>

        <section className="pt-14">
          <h2 className="serif m-0 mb-8 text-[32px] font-light tracking-[-0.025em]">
            By the numbers
          </h2>
          <dl
            className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-px overflow-hidden rounded-xl"
            style={{
              background: "var(--border-default)",
              border: "1px solid var(--border-default)",
            }}
          >
            {project.metrics.map((metric) => (
              <div key={metric.label} className="px-6 py-5" style={{ background: "var(--surface)" }}>
                <dd className="serif tabular m-0 text-[28px] font-normal tracking-[-0.025em]">
                  {metric.value}
                </dd>
                <dt className="mt-1.5 text-xs font-medium">{metric.label}</dt>
                <dd className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                  {metric.note}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-14">
          <h2 className="serif m-0 mb-8 text-[32px] font-light tracking-[-0.025em]">
            Key features
          </h2>
          <dl className="flex flex-col">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="py-5"
                style={{ borderTop: "1px solid var(--border-default)" }}
              >
                <dt className="mb-1.5 text-[15px] font-medium">{feature.title}</dt>
                <dd
                  className="m-0 max-w-[68ch] text-[15px] leading-[1.65] text-pretty"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feature.body}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-14">
          <h2 className="serif m-0 mb-8 text-[32px] font-light tracking-[-0.025em]">
            Tech stack
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            {project.stack.map((group) => (
              <div
                key={group.group}
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
                  {group.group}
                </h3>
                <ul className="flex list-none flex-col gap-2.5 p-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-[1.55]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-14">
          <h2 className="serif m-0 mb-4 text-[32px] font-light tracking-[-0.025em]">
            Skills demonstrated
          </h2>
          <p
            className="m-0 max-w-[68ch] text-base leading-[1.7] text-pretty"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.skills}
          </p>
        </section>

        <div
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border-default)" }}
        >
          <Link href="/#work" className="btn btn-quiet">
            <ArrowLeft aria-hidden size={15} />
            Back to all work
          </Link>
        </div>
      </div>
    </article>
  );
}
