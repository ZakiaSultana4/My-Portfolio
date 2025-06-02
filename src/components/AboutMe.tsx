'use client';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import contactLootie from '@/app/assets/me.json';
import Lottie from 'lottie-react';
import SectionHeader from './SectionHeader';
import Link from 'next/link';

interface TabContent {
  id: string;
  label: string;
  content: React.ReactNode;
}

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('about');

  const tabContent: TabContent[] = [
    {
      id: 'about',
      label: 'About me',
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-slate-300">
            Hi! I’m <span className="text-[#8245ec] font-semibold">Zakia Sultana</span>, a passionate <span className="text-[#8245ec] font-semibold">Junior Front-End Web Developer</span> with a strong foundation in building interactive and responsive web interfaces using modern technologies like <span className="text-[#8245ec] font-semibold">React.js, Next.js, and Tailwind CSS</span>.
          </p>

          <p className="text-lg leading-relaxed text-slate-300">
            I’ve worked on several real-world projects including <span className="text-[#8245ec] font-semibold">EventSphere</span>, a full-stack event booking platform. My goal is to continuously grow by learning from hands-on experiences, contributing to exciting projects, and collaborating with other developers.
          </p>

          <p className="text-lg leading-relaxed text-slate-300">
            I love turning design ideas into clean and functional code, and I’m always curious about new tools and best practices in front-end development.
          </p>

          <div className="flex gap-4 mt-8 justify-center">
            {[
              {
                icon: FaGithub,
                href: 'https://github.com/ZakiaSultana4',
                label: 'GitHub',
              },
              {
                icon: FaLinkedin,
                href: 'https://www.linkedin.com/in/zakia-sultana4/',
                label: 'LinkedIn',
              },

              {
                icon: FaDiscord,
                href: 'https://discord.com/users/zakiasultana_4',
                label: 'Discord',
              },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-slate-600 rounded-full flex items-center justify-center text-white hover:border-[#8245ec] hover:bg-[#8245ec]/10 transition-all duration-300 hover:-translate-y-1"
                title={label}
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>

        </div>
      )
    },
    {
      id: 'skills',
      label: 'Skills',
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-slate-300">
          {[
            'JavaScript',
            'TypeScript',
            'React.js',
            'Redux',
            'Next.js',
            'Tailwind CSS',
            "Framer Motion",
            "GSAP",,
            'Shadcn UI',
            'Node.js',
            'Express.js',
            'Mongoose',
            'Git & GitHub',
            'REST APIs',
            'JWT'
          ].map((skill, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-[#8245ec]/30 text-center">
              {skill}
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'hobby',
      label: 'Hobby',
      content: (
        <div className="space-y-4">
          {[
            {
              title: '👩‍💻 Coding & Learning',
              description: 'I enjoy coding new UI components and exploring open-source projects. Learning new libraries or frameworks excites me.'
            },
            {
              title: '📚 Reading Tech Articles',
              description: 'I stay updated with frontend trends, tools, and performance tips by reading blogs and watching tutorials.'
            },

            {
              title: '🌐 Exploring New Technologies',
              description: 'I frequently experiment with new frontend technologies and tools to enhance my skill set and stay current.'
            },
            {
              title: '🎨 Playing with Design Tools',
              description: 'I often experiment with tools like Figma or Canva, which helps me understand design better for building polished interfaces.'
            }
          ].map((hobby, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-[#8245ec]">
              <h3 className="text-xl font-semibold text-[#8245ec] mb-3">{hobby.title}</h3>
              <p className="text-slate-300 leading-relaxed">{hobby.description}</p>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <section id="about" className="min-h-screen py-16 mt-20 px-[7vw] md:px-[7vw] lg:px-[15vw]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <SectionHeader
          title="ABOUT ME"
          subtitle="An introduction to my journey, values, and the mindset behind my work"
        />
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Lottie animationData={contactLootie} className="w-full max-w-md" loop={true} />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:pl-8">
            {/* Tab Navigation */}
            <div className="flex bg-white/5 backdrop-blur-sm rounded-full p-2 mb-8">
              {tabContent.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#8245ec] to-blue-500 text-white shadow-lg shadow-[#8245ec]/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="relative min-h-[200px] md:min-h-[400px] w-full">
              {tabContent.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-all duration-500 ease-in-out w-full ${activeTab === tab.id
                      ? 'opacity-100 translate-y-0 relative'
                      : 'opacity-0 translate-y-4 absolute pointer-events-none'
                    }`}
                >
                  {tab.content}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
