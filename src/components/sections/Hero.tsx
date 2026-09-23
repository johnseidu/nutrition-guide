import Image from "next/image";
import { MapPin, Leaf } from "lucide-react";
import { business } from "@/data/business";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft decorative backdrop — organic, not a tech gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-moss/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-clay/[0.07] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-content items-center gap-14 section-pad pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-24">
        <div className="animate-reveal">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-moss/10 px-3.5 py-1.5 text-sm font-medium text-moss">
            <MapPin size={14} strokeWidth={2.25} aria-hidden="true" />
            {business.serviceArea}
          </p>

          <h1 className="mt-6 max-w-xl text-[2.6rem] font-display font-medium leading-[1.06] tracking-[-0.01em] text-balance sm:text-5xl lg:text-[3.4rem]">
            Nutrition guidance that fits your{" "}
            <span className="text-clay">everyday life</span>
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-stone">
            {business.ownerHandle} helps people across Ghana build healthier
            habits with genuine Herbalife nutrition products, honest
            guidance, and support that continues long after your first
            order.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton ctaId="hero-primary" />
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/20 px-6 py-3.5 text-[15px] font-medium text-cocoa transition-all duration-200 hover:border-cocoa/50 hover:bg-cocoa/[0.03]"
            >
              Explore Our Services
            </a>
          </div>

          <p className="mt-9 flex items-center gap-2 text-sm text-stone">
            <Leaf size={15} className="text-moss" aria-hidden="true" />
            {business.legalDescription} · Based in {business.location.city}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-3 -z-10 rounded-[2.75rem] bg-clay/[0.10] sm:-inset-4" />
          <div className="absolute -inset-6 -z-20 rounded-[3rem] bg-sand/70 sm:-inset-8" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-cocoa/15">
            <Image
              src="/images/hero-priscilla.jpg"
              alt={`${business.ownerHandle}, independent Herbalife distributor, at a Herbalife nutrition event`}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-ivory px-5 py-4 shadow-xl shadow-cocoa/15 sm:-left-8">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-moss/10 text-moss">
              <Leaf size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight text-cocoa">
                Doorstep Delivery
              </p>
              <p className="text-xs text-stone">Anywhere in Ghana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
