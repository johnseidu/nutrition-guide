import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Wellness from "@/components/sections/Wellness";
import Testimonials from "@/components/sections/Testimonials";
import Community from "@/components/sections/Community";
import HowItWorks from "@/components/sections/HowItWorks";
import Delivery from "@/components/sections/Delivery";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Wellness />
      <Testimonials />
      <Community />
      <HowItWorks />
      <Delivery />
      <FAQ />
      <Contact />
    </>
  );
}
