import React from "react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import ContentSection from "@/components/ContentSection";
import HorizontalWrapper from "@/components/HorizontalWrapper";

export default function App() {
  const heroBg = "/1.jpg";
  const test = "/2.jpg";
  const themeBg = "/theme.jpg";

  return (
    <div className="antialiased text-gray-800 bg-white">
      <HeroSection
        title="Delight in Design"
        subtitle="Elegant, minimal, and meticulously crafted"
        bgUrl={heroBg}
      />

      <HorizontalWrapper>
        <ContentSection
          bgUrl={themeBg}
          title="Content1"
        />
          <ContentSection
          bgUrl={test}
          title="Content2"
        />
      </HorizontalWrapper>

      <ContactForm />
    </div>
  );
}
