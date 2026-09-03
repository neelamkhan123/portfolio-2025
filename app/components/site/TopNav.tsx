const LINKS = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
];

export default function TopNav() {
  return (
    <>
      <div
        data-progress
        aria-hidden
        className="fixed top-0 left-0 z-[60] h-0.5 w-0 transition-[width] duration-75 ease-linear"
        style={{ background: "var(--accent)" }}
      />
      <nav
        aria-label="Sections"
        className="fixed top-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-full p-[5px] backdrop-blur-md max-sm:gap-0 max-sm:p-1"
        style={{
          background: "rgba(253,252,249,0.82)",
          border: "1px solid var(--border-default)",
          boxShadow:
            "0 8px 24px rgba(29,27,23,0.06), 0 1px 0 rgba(29,27,23,0.04)",
        }}
      >
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            data-navlink={link.id}
            className="rounded-full px-3.5 py-[7px] text-[13px] font-medium tracking-[0.01em] transition-colors max-sm:px-2.5 max-sm:text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 rounded-full px-4 py-[7px] text-[13px] font-medium tracking-[0.01em] transition-colors max-sm:px-3 max-sm:text-xs"
          style={{
            color: "var(--action-solid-fg)",
            background: "var(--action-solid-bg)",
          }}
        >
          Get in touch
        </a>
      </nav>
    </>
  );
}
