import SectionHeader from "@/components/SectionHeader";
import WhatsAppButton from "@/components/WhatsAppButton";

const questions = [
  {
    question: "Can I use it if I don't work out?",
    answer:
      "Yes, and here's why. Herbalife is nutrition, not a pre-workout. It can replace a meal, help fill nutritional gaps, and give your body helpful nutrition even on days you do not exercise.",
  },
  {
    question: "Which product is right for my goal?",
    answer:
      "It depends on your goal, routine, health needs, and current diet. We will ask a few questions and guide you toward an option that fits your lifestyle.",
  },
  {
    question: "Can I get delivery outside Kumasi?",
    answer:
      "Yes. We serve customers across Ghana, with delivery arranged through Herbalife and FedEx Ghana to your doorstep.",
  },
  {
    question: "How do I start a personalized plan?",
    answer:
      "Send us a message with your goal, age, routine, and any important dietary information. We will help you choose a practical starting point.",
  },
  {
    question: "Can I use Herbalife products every day?",
    answer:
      "Many products are designed for regular use as part of a balanced lifestyle. Follow the product directions and ask us for guidance based on your personal needs.",
  },
  {
    question: "Will I see the same results as other people?",
    answer:
      "Results vary from person to person. Your routine, food choices, activity, consistency, and starting point all matter, so we focus on realistic and sustainable progress.",
  },
  {
    question: "When will I see results?",
    answer:
      "Changes can start to show within 21 days, while optimum results become clearer by 90 days with consistency and discipline, coupled with a healthy, active lifestyle.",
  },
] as const;

export default function FAQ() {
  return (
    <section id="faq" className="section-pad bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeader
          kicker="FAQ"
          title="Questions you may be asking"
          description="Quick answers to common questions about nutrition, products, and support."
        />

        <div className="mt-12 max-w-3xl border-t border-cocoa/15">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group border-b border-cocoa/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-cocoa marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cocoa/[0.05] text-stone transition-transform duration-200 group-open:rotate-180">
                  <span aria-hidden="true" className="text-xl leading-none">⌄</span>
                </span>
              </summary>
              <p className="max-w-2xl pb-5 pr-14 text-[15px] leading-relaxed text-stone">
                {answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-ivory p-6 ring-1 ring-cocoa/8 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-display text-xl font-medium">Still have a question?</h3>
            <p className="mt-1 text-[15px] text-stone">
              Text us on WhatsApp for a full answer and personal guidance.
            </p>
          </div>
          <WhatsAppButton label="Text us on WhatsApp" ctaId="faq" />
        </div>
      </div>
    </section>
  );
}