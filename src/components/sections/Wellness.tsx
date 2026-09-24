import Image from "next/image";
import { productGoals } from "@/data/business";
import SectionHeader from "@/components/SectionHeader";
import GoalGrid from "@/components/GoalGrid";
import WhatsAppButton from "@/components/WhatsAppButton";

const productImages = [
  {
    src: "/images/product-aloe.jpg",
    alt: "Herbalife herbal aloe concentrate drink",
  },
  {
    src: "/images/product-capsules.jpg",
    alt: "Herbalife nutrition softgel supplement",
  },
  {
    src: "/images/product-vitamin.jpg",
    alt: "Herbalife vitamin and mineral complex for women",
  },
];

export default function Wellness() {
  return (
    <section id="wellness" className="section-pad py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader
              kicker="Products"
              title="What are you working toward?"
              description="Tap a goal to see the products behind it and ask Small Madam directly — genuine Herbalife products for every goal below."
            />

            <aside className="mt-8 rounded-2xl border border-clay/25 bg-clay/10 p-5 text-sm leading-relaxed text-cocoa">
              <p className="font-semibold uppercase tracking-[0.14em] text-clay">
                Important disclaimer
              </p>
              <p className="mt-2">
                These products are food and nutritional supplements, not drugs
                or medicine. They do not cure or treat any condition. Food
                provides nutrition, and your body uses nutrition to support its
                normal functions.
              </p>
            </aside>

            <div className="mt-10">
              <GoalGrid goals={productGoals} />
            </div>

            <p className="mt-6 text-sm text-stone">
              Looking for something specific? Reach out on WhatsApp for
              current availability and pricing.
            </p>

            <div className="mt-6">
              <WhatsAppButton ctaId="wellness" label="Ask About Products" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl bg-sand shadow-sm shadow-cocoa/[0.06]">
              <Image
                src={productImages[0].src}
                alt={productImages[0].alt}
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl bg-sand shadow-sm shadow-cocoa/[0.06]">
              <Image
                src={productImages[1].src}
                alt={productImages[1].alt}
                fill
                sizes="(min-width: 1024px) 230px, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl bg-sand shadow-sm shadow-cocoa/[0.06]">
              <Image
                src={productImages[2].src}
                alt={productImages[2].alt}
                fill
                sizes="(min-width: 1024px) 230px, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
