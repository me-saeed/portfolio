import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certificates } from "@/components/sections/Certificates";
import { Recommendations } from "@/components/sections/Recommendations";
import { JsonLd } from "@/components/JsonLd";
import { itemListJsonLd, websiteJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={[websiteJsonLd(), itemListJsonLd()]} />
      <Hero />
      <Work />
      <Services />
      <Experience />
      <Education />
      <Certificates />
      <Recommendations />
    </>
  );
}
