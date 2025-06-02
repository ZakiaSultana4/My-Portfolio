'use client';
import React from 'react';
import educationLootie from '@/app/assets/education.json';
import Lottie from 'lottie-react';
import SectionHeader from './SectionHeader';
interface EducationItem {
  id: number;
  date: string;
  title: string;
  institution: string;
  delay: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      date: "2020 - Present",
      title: "BACHELOR OF SCIENCE IN CHEMISTRY",
      institution: "National University of Bangladesh",
      delay: "delay-200"
    },
    {
      id: 2,
      date: "2017 - 2019",
      title: "HIGHER SECONDARY CERTIFICATE",
      institution: "Badiul Alam College, Cumilla",
      delay: "delay-400"
    },
    {
      id: 3,
      date: "2015 - 2017",
      title: "SECONDARY SCHOOL CERTIFICATE",
      institution: "Badiul Alam High School, Cumilla",
      delay: "delay-600"
    }
  ];

  return (
    <section   id="education" className="min-h-screen  text-white py-16 px-[7vw] md:px-[7vw] lg:px-[15vw]">
     
        <SectionHeader
        title="MY EDUCATION"
        subtitle="Educational Expertise: My Journey Through Education"
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left">
       
          
          {/* Right Side - SVG Development Illustration */}
                <Lottie animationData={educationLootie} className="w-full max-w-md" loop={true} />
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:border-pink-500/30 animate-fade-in ${item.delay}`}
            >
           
              
              {/* Date */}
              <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
                {item.date}
              </div>
              
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-xl">
                  🎓
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-base">
                    {item.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;