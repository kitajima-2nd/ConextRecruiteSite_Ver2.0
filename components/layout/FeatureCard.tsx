type FeatureCardProps = {
  badge: string;
  title: React.ReactNode;
  description: string;
  href: string;
  linkLabel?: string;
  id?: string;
};

export default function FeatureCard({
  badge,
  title,
  description,
  href,
  linkLabel = "詳しく見る",
  id,
}: FeatureCardProps) {
  return (
    <article
      id={id}
      className="feature-card group flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white">
          {badge}
        </span>
        <h3 className="text-xl font-bold leading-snug text-neutral-900">{title}</h3>
      </div>
      <p className="mb-8 flex-1 text-sm leading-relaxed text-neutral-600 md:text-base">
        {description}
      </p>
      <a
        href={href}
        className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 transition-colors group-hover:text-sky-600"
      >
        {linkLabel}
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </article>
  );
}
