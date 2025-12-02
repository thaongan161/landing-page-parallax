import React from "react";

interface HeroTitleProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="h-screen flex items-center justify-center text-center bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative text-white max-w-3xl px-6">
        <h1 className="text-6xl font-bold drop-shadow-xl mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl opacity-90 drop-shadow-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroTitle;
