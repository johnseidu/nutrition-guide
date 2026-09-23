import { business } from "@/data/business";

export default function SocialLinks() {
  return (
    <ul className="space-y-2 text-[15px]">
      <li className="flex items-baseline justify-between gap-4">
        <span className="text-stone">TikTok</span>
        <span className="text-cocoa">{business.social.tiktok.label}</span>
      </li>
      <li className="flex items-baseline justify-between gap-4">
        <span className="text-stone">Facebook</span>
        <span className="text-cocoa">{business.social.facebook.label}</span>
      </li>
    </ul>
  );
}
