import Image from "next/image";
import { Users, MessageCircle } from "lucide-react";
import { business } from "@/data/business";

export default function Community() {
  return (
    <section className="section-pad py-20 sm:py-28">
      <div className="mx-auto max-w-content overflow-hidden rounded-[2.5rem] bg-moss text-ivory shadow-xl shadow-moss/15">
        <div className="grid items-center gap-0 lg:grid-cols-[1fr_1fr]">
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full">
            <Image
              src="/images/community-banner.jpg"
              alt="Small Madam at a Herbalife wellness event"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            {/* abstract avatar accent — suggests a group without claiming specific members */}
            <div className="absolute bottom-5 left-5 flex items-center -space-x-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ivory bg-clay/80 text-xs font-semibold text-ivory shadow-md"
                  aria-hidden="true"
                >
                  <Users size={14} strokeWidth={2} />
                </span>
              ))}
            </div>
          </div>

          <div className="px-8 py-12 sm:px-12 sm:py-14">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory/15">
              <MessageCircle size={22} strokeWidth={2} aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-3xl font-display font-medium leading-[1.15] text-balance sm:text-4xl">
              Join Our WhatsApp Community
            </h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ivory/85">
              Ask questions, share your progress, and stay motivated
              alongside other members working on their own wellness goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.whatsappCommunityLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-community"
                data-cta-id="community-section"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-[15px] font-medium text-cocoa shadow-lg shadow-cocoa/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl active:scale-[0.98]"
              >
                <Users size={18} strokeWidth={2} aria-hidden="true" />
                Join the Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
