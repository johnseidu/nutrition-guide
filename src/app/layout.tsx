import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const siteUrl = "https://nutritionguide.xyz";
const title =
  "nutritionguide by MisScilla Thecoach | Herbalife Independent Distributor, Ghana";
const description =
  "Nutrition and wellness support from an Independent Herbalife Distributor based in Kumasi, serving customers across Ghana. Coaching, meal plans, and doorstep delivery nationwide.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Herbalife distributor Ghana",
    "Herbalife independent distributor Ghana",
    "nutrition coaching Ghana",
    "wellness products Ghana",
    "Herbalife Kumasi",
    "nutrition support Ghana",
    "weight loss coach Ghana",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "nutritionguide by MisScilla Thecoach",
    images: ["/images/hero-priscilla.jpg"],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-priscilla.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
