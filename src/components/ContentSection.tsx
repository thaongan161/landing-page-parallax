import React from "react";

interface ContentProps {
  title: string;
  text: string;
  image: string;
  parallax?: boolean;
}

const ContentSection: React.FC<ContentProps> = ({
  title,
  text,
  image,
  parallax = false,
}) => {
  return (
    <section
      className={`relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center ${
        parallax ? "bg-fixed" : ""
      }`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h2>
        <p className="text-lg md:text-xl leading-relaxed">{text}</p>
      </div>
    </section>
  );
};

export default ContentSection;
