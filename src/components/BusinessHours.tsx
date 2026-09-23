import { business } from "@/data/business";

export default function BusinessHours() {
  return (
    <dl className="space-y-3 text-[15px]">
      <div className="flex items-baseline justify-between gap-4">
        <dt className="text-stone">Calls</dt>
        <dd className="text-right text-cocoa">{business.hours.calls}</dd>
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <dt className="text-stone">WhatsApp</dt>
        <dd className="text-right text-cocoa">{business.hours.whatsapp}</dd>
      </div>
    </dl>
  );
}
