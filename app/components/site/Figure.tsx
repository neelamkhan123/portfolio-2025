import Image from "next/image";

/**
 * Stands in for the design's <image-slot>. Renders a real image when one is
 * supplied, otherwise the tinted ground the design shows behind the slot —
 * so the layout is complete before any screenshots exist.
 */
export default function Figure({
  tint,
  ratio = "4/3",
  index,
  caption,
  src,
  alt,
  tilt = false,
}: {
  tint: "p1" | "p2" | "p3";
  ratio?: string;
  index?: string;
  caption?: string;
  src?: string;
  alt?: string;
  tilt?: boolean;
}) {
  return (
    <div
      {...(tilt ? { "data-tilt": "" } : {})}
      className="relative overflow-hidden rounded-xl transition-transform duration-300 ease-out"
      style={{
        aspectRatio: ratio,
        background: `var(--${tint})`,
        border: "1px solid var(--border-default)",
      }}
    >
      {src ? (
        <Image src={src} alt={alt ?? ""} fill className="object-cover" sizes="(max-width: 900px) 100vw, 600px" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          {index ? (
            <span
              className="serif tabular text-5xl font-light"
              style={{ color: `var(--${tint}-ink)`, opacity: 0.32 }}
            >
              {index}
            </span>
          ) : null}
          {caption ? (
            <span
              className="text-xs font-medium"
              style={{ color: `var(--${tint}-ink)`, opacity: 0.55 }}
            >
              {caption}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
