import { business } from "@/data/business";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-pad py-20 sm:py-28">
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <SectionHeader kicker="About" title={`Meet ${business.ownerHandle}`} />

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4 text-[17px] leading-relaxed text-stone">
            <p>
              {business.ownerHandle} is an independent Herbalife distributor
              based in {business.location.city}, helping customers access
              genuine nutrition and wellness products and learn how to use
              them well.
            </p>
            <p>
              Beyond the products themselves, she offers coaching, meal
              planning, workout support, and an online community — so
              ordering is the start of your journey, not the end of it.
            </p>
          </div>

          <div className="rounded-[2rem] bg-sand/50 p-8">
            <p className="font-display text-xl leading-snug text-balance">
              &ldquo;Every recommendation is built around your goals, your
              routine, and consistency you can actually keep up
              with.&rdquo;
            </p>
            <p className="mt-5 text-sm text-stone">
              {business.ownerHandle} · {business.legalDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
