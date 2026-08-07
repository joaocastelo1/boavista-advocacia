import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Profile } from "@/components/sections/profile";
import { Areas } from "@/components/sections/areas";
import { Diferenciais } from "@/components/sections/diferenciais";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Ebook } from "@/components/sections/ebook";
import { Gallery } from "@/components/sections/gallery";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Profile />
      <Areas />
      <Diferenciais />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Ebook />
      <Gallery />
      <Faq />
      <Cta />
      <Contact />
    </>
  );
}
