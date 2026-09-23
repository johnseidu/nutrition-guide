import Image from "next/image";
import { Apple, Sparkles, Droplets, Activity } from "lucide-react";
import { wellnessCategories } from "@/data/business";
import SectionHeader from "@/components/SectionHeader";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const icons = {
  nutrition: Apple,
  wellness: Droplets,
  "personal-care": Sparkles,
  lifestyle: Activity,
} as const;

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
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeader
              kicker="Products"
              title="Nutrition, wellness & personal care"
              description="Genuine Herbalife products across a few simple categories. Looking for something specific? Reach out on WhatsApp for current availability and pricing."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {wellnessCategories.map((category) => (
                <ProductCategoryCard
                  key={category.id}
                  icon={icons[category.id]}
                  title={category.title}
                  description={category.description}
                />
              ))}
            </div>

            <div className="mt-10">
              <WhatsAppButton ctaId="wellness" label="Ask About Products" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl bg-sand shadow-sm shadow-cocoa/[0.06]">
              <Image
                src={productImages[0].src}
                alt={productImages[0].alt}
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl bg-sand shadow-sm shadow-cocoa/[0.06]">
              <Image
                src={productImages[1].src}
                alt={productImages[1].alt}
                fill
                sizes="(min-width: 1024px) 270px, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl bg-sand shadow-sm shadow-cocoa/[0.06]">
              <Image
                src={productImages[2].src}
                alt={productImages[2].alt}
                fill
                sizes="(min-width: 1024px) 270px, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
