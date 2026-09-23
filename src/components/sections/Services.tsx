import {
  MessageSquareHeart,
  Utensils,
  Dumbbell,
  Users,
  ClipboardList,
  Package,
} from "lucide-react";
import { services } from "@/data/business";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const icons = {
  coaching: MessageSquareHeart,
  "meal-plans": Utensils,
  "workout-plans": Dumbbell,
  community: Users,
  consultancy: ClipboardList,
  products: Package,
} as const;

export default function Services() {
  return (
    <section id="services" className="section-pad bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeader
          kicker="Services"
          title="Support that goes beyond the order"
          description="Once you've chosen your products, ongoing support helps you actually use them well."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={icons[service.id]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-14">
          <WhatsAppButton
            ctaId="services"
            label="Ask About a Service"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
}
