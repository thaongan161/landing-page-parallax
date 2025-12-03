import React from "react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import ContentSection from "@/components/ContentSection";

export default function App() {
  const heroBg = "/2.jpg";
  const sharedBg = "/1.jpg";

  return (
    <div className="antialiased text-gray-800 bg-white">
      <HeroSection
        title="Delight in Design"
        subtitle="Elegant, minimal, and meticulously crafted"
        bgUrl={heroBg}
      />


<ContentSection
  bgUrl={sharedBg}
  title="Background Parallax"
  description="Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry."
/>




      {/* PAGE 2 & 3 — Shared Background */}
      {/* <SharedBackground
        bgUrl={sharedBg}
        page2Heading="INSPIRATION"
        slides={[
          { title: "Concept One", text: "Details about concept one go here." },
          { title: "Concept Two", text: "More information about concept two." },
          { title: "Concept Three", text: "The final concept explanation." },
        ]}
      /> */}

      <ContactForm />
    </div>
  );
}
