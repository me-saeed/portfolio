import { Hero } from "@/components/sections/Hero";
import { IntroVideo } from "@/components/sections/IntroVideo";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certificates } from "@/components/sections/Certificates";
import { Recommendations } from "@/components/sections/Recommendations";
import { JsonLd } from "@/components/JsonLd";
import { introVideo } from "@/lib/data";
import { itemListJsonLd, videoJsonLd, websiteJsonLd } from "@/lib/seo";

export default function Home() {
  const jsonLd = [
    websiteJsonLd(),
    itemListJsonLd(),
    ...(introVideo.youtubeId ? [videoJsonLd()] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <IntroVideo />
      <Work />
      <Services />
      <Experience />
      <Education />
      <Certificates />
      <Recommendations />
    </>
  );
}
