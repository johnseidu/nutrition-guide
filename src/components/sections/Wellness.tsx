import Image from "next/image";
import {
  TrendingDown,
  Activity,
  TrendingUp,
  Dumbbell,
  Coffee,
  Sparkles,
  Scissors,
  Droplets,
  Target,
} from "lucide-react";
import { productGoals } from "@/data/business";
import SectionHeader from "@/components/SectionHeader";
import GoalTile from "@/components/GoalTile";
import WhatsAppButton from "@/components/WhatsAppButton";

const icons = {
  "weight-loss": TrendingDown,
  "flat-tummy": Activity,
  "weight-gain": TrendingUp,
  "muscle-building": Dumbbell,
  "healthy-breakfast": Coffee,
  "skin-care": Sparkles,
  "hair-care": Scissors,
  "stretch-marks": Droplets,
  "nutritional-goals": Target,
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
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader
              kicker="Products"
              title="What are you working toward?"
              description="Genuine Herbalife products across every goal, whichever you're working on. Tell us which applies to you, and we'll guide you from there."
            />

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {productGoals.map((goal) => (
                <GoalTile
                  key={goal.id}
                  icon={icons[goal.id]}
                  title={goal.title}
                />
              ))}
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
