import { Leaf } from "lucide-react";
import {
  business,
  ownerTestimonials,
  customerTestimonials,
  testimonialDisclaimer,
} from "@/data/business";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="section-pad bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeader
          kicker="Real Results"
          title="Small Madam's journey, and the people she's helped"
          description="Genuine progress from her own experience with Herbalife products, and from customers she's supported along the way."
        />

        <div className="mt-14">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-moss">
            <Leaf size={15} aria-hidden="true" />
            Small Madam&rsquo;s Own Journey
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {ownerTestimonials.map((item) => (
              <TestimonialCard key={item.id} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-clay">
            Real Results From Our Customers
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {customerTestimonials.map((item) => (
              <TestimonialCard key={item.id} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-stone">
          {testimonialDisclaimer} Photos are shared by {business.ownerHandle}{" "}
          and her customers.
        </p>
      </div>
    </section>
  );
}
