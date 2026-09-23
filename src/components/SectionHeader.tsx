type Props = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {kicker && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-clay" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">
            {kicker}
          </p>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-display font-medium leading-[1.12] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[17px] leading-relaxed text-stone">
          {description}
        </p>
      )}
    </div>
  );
}
