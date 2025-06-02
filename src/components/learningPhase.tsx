import React from "react";
import { learningPhase } from "./constants"; 
import SectionHeader from "./SectionHeader";

const LearningPhase = () => {
  return (
    <section
      id="learning"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans "
    >
      {/* Section Title */}
      <SectionHeader
        title="MY LEARNING JOURNEY"
        subtitle="From mastering the basics in 2024 to confidently building full-stack projects in 2025"
      />

      {/* Experience Timeline */}
      <div className="relative mt-16">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Timeline Entries */}
        {learningPhase.map((learn, index) => (
          <div
            key={learn.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Content Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8`}
            >
              {/* Date */}
              <p className="text-sm text-gray-500 mb-2">{learn.date}</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">{learn.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-semibold text-white mb-1">Technologies & Tools:</h5>
                <ul className="flex flex-wrap mt-2">
                  {learn.skills.map((skill: string, skillIdx: number) => (
                    <li
                      key={skillIdx}
                      className="bg-[#8245ec] text-gray-100 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPhase;
