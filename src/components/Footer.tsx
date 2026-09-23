import { Leaf } from "lucide-react";
import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="border-t border-cocoa/10 bg-sand/40">
      <div className="mx-auto flex max-w-content flex-col gap-6 section-pad py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-moss/10 text-moss">
            <Leaf size={16} strokeWidth={2} aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-base font-medium">
              {business.brandName}{" "}
              <span className="font-sans text-sm font-normal text-stone">
                {business.brandTagline}
              </span>
            </p>
            <p className="mt-1 text-sm text-stone">
              {business.legalDescription} · {business.location.city}
            </p>
          </div>
        </div>
        <p className="text-sm text-stone">
          © {new Date().getFullYear()} {business.brandName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
