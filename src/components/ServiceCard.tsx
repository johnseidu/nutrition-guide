import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: {
    href: string;
    label: string;
    ctaId: string;
  };
};

export default function ServiceCard({ icon: Icon, title, description, link }: Props) {
  return (
    <div className="group relative rounded-2xl bg-cream p-7 ring-1 ring-cocoa/8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cocoa/[0.06] hover:ring-cocoa/12">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-moss/10 text-moss transition-colors duration-200 group-hover:bg-moss group-hover:text-ivory">
        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-display font-medium">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-stone">
        {description}
      </p>
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp-community"
          data-cta-id={link.ctaId}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-clay hover:underline"
        >
          {link.label}
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
