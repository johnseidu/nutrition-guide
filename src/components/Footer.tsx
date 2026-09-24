import Image from "next/image";
import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="border-t border-cocoa/10 bg-sand/40">
      <div className="mx-auto flex max-w-content flex-col gap-8 section-pad py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Image
              src="/images/logo-icon.png"
              alt=""
              width={36}
              height={36}
              className="mt-0.5 h-9 w-9 flex-shrink-0"
            />
            <div>
              <p className="font-display text-base font-medium">
                {business.brandName}{" "}
                <span className="font-sans text-sm font-normal text-stone">
                  {business.brandTagline}
                </span>
              </p>
              <p className="mt-1 text-sm text-stone">
                {business.brandSuffix} · {business.location.city}
              </p>
            </div>
          </div>
          <p className="text-sm text-stone">
            © {new Date().getFullYear()} {business.brandName}. All rights
            reserved.
          </p>
        </div>

        <div className="flex items-center gap-3 border-t border-cocoa/8 pt-6">
          <Image
            src="/images/herbalife-badge.jpg"
            alt="Herbalife"
            width={116}
            height={34}
            className="h-[26px] w-auto flex-shrink-0"
          />
          <p className="text-xs leading-snug text-stone">
            Proud {business.legalDescription}. Products and results
            referenced on this site are genuine Herbalife Nutrition
            offerings.
          </p>
        </div>

        <p className="text-center text-xs text-stone">Developed by Light</p>
      </div>
    </footer>
  );
}
