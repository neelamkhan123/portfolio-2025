import { profile } from "@/lib/content/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="section relative overflow-hidden pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-55 left-1/2 h-130 w-190 -translate-x-1/2 rounded-full"
        style={{ background: "var(--accent-soft)", opacity: 0.45 }}
      />
      <div className="shell relative text-center">
        <div
          data-reveal
          className="mb-7 text-xs font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          Contact
        </div>

        <h2
          data-reveal
          data-delay="80"
          className="serif mx-auto mt-0 mb-8 max-w-[15ch] text-[clamp(40px,6vw,84px)] leading-[1.05] font-light tracking-[-0.03em] text-balance"
        >
          {profile.contact.lead}{" "}
          <em className="italic" style={{ color: "var(--accent-ink)" }}>
            {profile.contact.emphasis}
          </em>
        </h2>

        <p
          data-reveal
          data-delay="160"
          className="mx-auto mt-0 mb-11 max-w-[52ch] text-lg leading-relaxed text-pretty"
          style={{ color: "var(--text-secondary)" }}
        >
          {profile.contact.body}
        </p>

        <div
          data-reveal
          data-delay="240"
          className="mb-18 flex flex-wrap justify-center gap-3"
        >
          <a href={`mailto:${profile.email}`} className="btn btn-solid">
            {profile.email}
          </a>
          <a href="#top" className="btn btn-quiet">
            Back to top
          </a>
        </div>

        <div
          data-reveal
          className="flex flex-wrap items-center justify-between gap-5 pt-7 text-[13px]"
          style={{
            borderTop: "1px solid var(--border-default)",
            color: "var(--text-muted)",
          }}
        >
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)]">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)]">
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
