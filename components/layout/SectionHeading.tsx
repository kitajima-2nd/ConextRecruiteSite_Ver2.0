type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleTone = tone === "light" ? "text-white" : "text-neutral-900";
  const descTone = tone === "light" ? "text-neutral-300" : "text-neutral-600";
  const eyebrowTone = tone === "light" ? "text-sky-300" : "text-sky-600";

  return (
    <div className={`section-heading max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${eyebrowTone}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl leading-tight ${titleTone}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${descTone}`}>
          {description}
        </p>
      )}
    </div>
  );
}
