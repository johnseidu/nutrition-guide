import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
};

export default function GoalTile({ icon: Icon, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-ivory p-5 text-center shadow-sm shadow-cocoa/[0.04] ring-1 ring-cocoa/8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-cocoa/[0.06] hover:ring-cocoa/14">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay/10 text-clay">
        <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="text-[14px] font-medium leading-snug text-cocoa">
        {title}
      </span>
    </div>
  );
}
