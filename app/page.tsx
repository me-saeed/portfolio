import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Experience />
    </>
  );
}
