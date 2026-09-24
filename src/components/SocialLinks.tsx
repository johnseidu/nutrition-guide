import { business } from "@/data/business";

export default function SocialLinks() {
  return (
    <ul className="space-y-2 text-[15px]">
      <li className="flex items-baseline justify-between gap-4">
        <span className="text-stone">TikTok</span>
        <a
          href={business.social.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-right text-cocoa underline decoration-cocoa/20 underline-offset-4 transition-colors hover:text-clay"
        >
          {business.social.tiktok.label}
        </a>
      </li>
      <li className="flex items-baseline justify-between gap-4">
        <span className="text-stone">Facebook</span>
        <span className="text-cocoa">{business.social.facebook.label}</span>
      </li>
    </ul>
  );
}
