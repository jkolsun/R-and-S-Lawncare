interface SectionHeaderProps {
  label?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  titleAccent,
  description,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      {label && (
        <span
          className={`inline-block font-heading text-sm font-semibold uppercase tracking-widest mb-3 ${
            light ? "text-accent-light" : "text-accent"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-fg"
        }`}
      >
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className={light ? "text-accent-light" : "text-primary"}>
              {titleAccent}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-fg-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
