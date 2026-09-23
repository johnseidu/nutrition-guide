import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size?: "lg" | "md";
};

export default function TestimonialCard({ src, alt, size = "md" }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-sand shadow-sm shadow-cocoa/[0.06] ${
        size === "lg" ? "aspect-[4/3]" : "aspect-square"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 320px, 45vw"
        className="object-cover"
      />
    </div>
  );
}
