const LINKS = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  // Shortened below `sm`, where the full phrase costs more width than the
  // other four links combined.
  { id: "contact", label: "Get in touch", short: "Contact" },
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
        className="fixed top-5 left-1/2 z-50 flex w-max max-w-[calc(100vw-16px)] -translate-x-1/2 items-center gap-0.5 rounded-full p-[5px] backdrop-blur-md max-sm:top-3 max-sm:gap-0 max-sm:p-1"
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
            className="nav-link rounded-full px-3.5 py-[7px] text-[13px] font-medium tracking-[0.01em] whitespace-nowrap max-sm:px-2 max-sm:py-1.5 max-sm:text-xs"
          >
            {link.short ? (
              <>
                <span className="max-sm:hidden">{link.label}</span>
                <span className="sm:hidden">{link.short}</span>
              </>
            ) : (
              link.label
            )}
          </a>
        ))}
      </nav>
    </>
  );
}
