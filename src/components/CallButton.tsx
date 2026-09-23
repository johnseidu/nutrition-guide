import { Phone } from "lucide-react";
import { buildTelLink } from "@/lib/links";

type Props = {
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
  ctaId: string;
};

export default function CallButton({
  label = "Call Now",
  variant = "outline",
  className = "",
  ctaId,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-all duration-200 active:scale-[0.98]";

  const variants: Record<string, string> = {
    solid:
      "bg-clay text-ivory shadow-lg shadow-clay/20 hover:bg-clay-dark hover:shadow-xl hover:shadow-clay/25 hover:-translate-y-0.5",
    outline:
      "border border-cocoa/20 text-cocoa hover:border-cocoa/50 hover:bg-cocoa/[0.03]",
  };

  return (
    <a
      href={buildTelLink()}
      data-cta="call"
      data-cta-id={ctaId}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <Phone size={18} strokeWidth={2} aria-hidden="true" />
      {label}
    </a>
  );
}
