import { Leaf, Truck, HeartHandshake, MapPin } from "lucide-react";
import { business } from "@/data/business";

const items = [
  { icon: Leaf, label: "Genuine Herbalife Products" },
  { icon: Truck, label: "Doorstep Delivery Across Ghana" },
  { icon: HeartHandshake, label: "Ongoing Personal Support" },
  { icon: MapPin, label: `Based in ${business.location.city}` },
];

export default function TrustBar() {
  return (
    <div className="border-y border-cocoa/8 bg-ivory">
      <div className="mx-auto max-w-content section-pad py-6">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-moss/10 text-moss">
                <Icon size={17} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="text-[13.5px] font-medium leading-tight text-cocoa/80">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
