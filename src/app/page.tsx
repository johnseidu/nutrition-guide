import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Wellness from "@/components/sections/Wellness";
import HowItWorks from "@/components/sections/HowItWorks";
import Delivery from "@/components/sections/Delivery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Wellness />
      <HowItWorks />
      <Delivery />
      <Contact />
    </>
  );
}
