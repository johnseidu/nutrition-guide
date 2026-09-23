import { Truck } from "lucide-react";
import { business } from "@/data/business";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Delivery() {
  return (
    <section className="section-pad py-20 sm:py-28">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-[2.5rem] bg-clay px-8 py-14 text-ivory shadow-xl shadow-clay/15 sm:px-14 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ivory/[0.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 right-16 h-40 w-40 rounded-full bg-ivory/[0.05]"
        />

        <div className="relative max-w-xl">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory/15">
            <Truck size={22} strokeWidth={2} aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-3xl font-display font-medium leading-[1.15] text-balance sm:text-4xl">
            {business.delivery.headline}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ivory/85">
            {business.delivery.body}
          </p>
          <div className="mt-8">
            <WhatsAppButton
              ctaId="delivery"
              label="Order via WhatsApp"
              variant="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
