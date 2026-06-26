import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Recommendations } from "@/components/sections/Recommendations";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Experience />
      {/* <Certifications /> */}
      <Recommendations />
    </>
  );
}
