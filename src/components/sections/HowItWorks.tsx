import {
  MessageCircle,
  ClipboardCheck,
  PackageCheck,
  HeartHandshake,
} from "lucide-react";
import { steps } from "@/data/business";
import SectionHeader from "@/components/SectionHeader";

const icons = [MessageCircle, ClipboardCheck, PackageCheck, HeartHandshake];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-moss py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeader
          kicker="How it works"
          title="From first message to ongoing support"
        />

        <div className="relative mt-16 grid gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-ivory/15 lg:block"
          />
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.number} className="relative">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ivory text-moss shadow-lg shadow-cocoa/10">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="font-display text-2xl text-ivory/40 lg:mt-4">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-display font-medium">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ivory/75">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
