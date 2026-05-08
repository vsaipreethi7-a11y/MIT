export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 ${a}`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.35em] text-gold-dark font-semibold">{eyebrow}</span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy max-w-3xl leading-tight">
        {title}
      </h2>
      <div className="gold-divider" />
      {subtitle && <p className="max-w-2xl text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
