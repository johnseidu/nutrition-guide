import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ProductCategoryCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="rounded-2xl bg-ivory p-6 shadow-sm shadow-cocoa/[0.04] ring-1 ring-cocoa/8 transition-all duration-200 hover:shadow-md hover:shadow-cocoa/[0.06] hover:ring-cocoa/14">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay/10 text-clay">
        <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-lg font-medium">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-stone">
        {description}
      </p>
    </div>
  );
}
