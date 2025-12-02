import HeroTitle from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Section 1 – Title */}
      <HeroTitle
        title="Title Parallax Landing Page"
        subtitle="Modern • Smooth • Professional"
        bgImage="hero.jpg"
      />

      {/* Section 2 – Content 1 */}
      <ContentSection
        title="Content 1"
        text="Your content here."
        image="content1.jpg"
        parallax
      />

      {/* Section 3 – Content 2 */}
      <ContentSection
        title="Content 2"
        text="Your content here."
        image="content2.jpg"
        parallax
      />

      {/* Section 4 – Contact */}
      <ContactForm />
    </>
  );
}
