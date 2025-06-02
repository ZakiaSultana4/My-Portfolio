import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="lg:text-6xl font-bold tracking-widest mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-fade-in text-4xl sm:text-5xl drop-shadow-lg title-font">
        {title}
      </h2>
      <div className="w-56 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-2 rounded" />
      <p className="text-gray-400 mt-4 text-lg font-semibold">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
