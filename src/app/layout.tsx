import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://nutritionguide.xyz";
const title = "Nutrition Guide by Small Madam | Herbalife Distributor, Kumasi";
const description =
  "Nutrition and wellness support from an independent Herbalife distributor in Kumasi, Ghana. Coaching, meal plans, and doorstep delivery across Ghana.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Herbalife distributor Kumasi",
    "nutrition coaching Kumasi",
    "wellness products Ghana",
    "Herbalife Ghana",
    "nutrition support Ghana",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Nutrition Guide by Small Madam",
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
      <body className={`${fraunces.variable} ${workSans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
