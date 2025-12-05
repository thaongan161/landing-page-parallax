"use client";

import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import ContentSection from "@/components/ContentSection";
import HorizontalWrapper from "@/components/HorizontalWrapper";

export default function App() {
  const heroBg = "/1.jpg";
  const test = "/2.jpg";

  return (
    <div className="antialiased text-gray-800 bg-white">
      <HeroSection
        title="Delight in Design"
        subtitle="Elegant, minimal, and meticulously crafted"
        bgUrl={heroBg}
      />

      <HorizontalWrapper>
        <ContentSection>
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${test})` }}
          />
          <h1 className="text-[5vw] text-white uppercase">Content1</h1>
        </ContentSection>

        <ContentSection>
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${test})` }}
          />
          <h1 className="text-[5vw] text-white uppercase">Content2</h1>
        </ContentSection>
      </HorizontalWrapper>

      <ContentSection>
        <h1 className="text-[5vw] uppercase">Contact</h1>
      </ContentSection>
      {/* <ContactForm /> */}
    </div>
  );
}
