'use client';

import { Typewriter } from 'react-simple-typewriter';
import codingLootie from '@/app/assets/coding.json';
import Lottie from 'lottie-react';
import Link from 'next/link';

interface AboutProps {
  contactRef: React.RefObject<HTMLDivElement>; // ✅ no `| null`
}
const About: React.FC<AboutProps> = ({ contactRef }) => {
    return (
        <section
            id="home"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans  md:mt-24"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left  md:mt-0 -mt-10">
                    {/* Greeting */}
                    <h1 className="text-2xl sm:text-4xl  font-bold text-white mb-2 leading-tight">
                        Assalamulaikum, I am
                    </h1>
                    {/* Name */}
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                        Zakia Sultana
                        <span className="text-[#8245ec]">.</span>
                    </h2>
                    {/* Skills Heading with Typing Effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">I am a </span>
                        <Typewriter
                            words={[
                                'Front End Developer',
                                'React Developer',
                                'Next.js Developer',
                                'JavaScript Developer',
                                'MERN Stack Developer',
                                'Web Developer',
                                'Coder',
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h3>
                    {/* About Me Paragraph */}
       
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed md:hidden">
                        I am a creative front-end developer skilled in building sleek and responsive web interfaces using React, Next.js, and modern CSS tools.
                    </p>

                    {/* md and above */}
                    <p className="hidden md:block text-base sm:text-lg text-gray-400 md:mb-10 md:mt-8 leading-relaxed">
                        I am a passionate front-end developer with a keen eye for detail and design. I specialize in building responsive, high-performance web applications using React, Next.js, and modern styling techniques. My goal is to deliver smooth, accessible, and visually polished user experiences.
                    </p>


    
                    {/* Buttons */}
                    <div className="-mt-5 md:mt-3 flex flex-col-reverse gap-4 sm:flex-row sm:gap-5 items-center justify-center md:justify-start ">
                        <Link
                            href="https://github.com/ZakiaSultana4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
                            style={{
                                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                            }}
                        >
                            Explore My Code
                        </Link>

               <button
  onClick={() =>
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  className="inline-block text-[#8245ec] border-2 border-[#8245ec] py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 hover:bg-[#8245ec] hover:text-white mt-4 sm:mt-0"
>
  Hire Me
</button>

                    </div>

                </div>

                {/* Right Side - SVG Development Illustration */}
                <Lottie animationData={codingLootie} className="w-full max-w-md -mt-20 md:mt-0" loop={true} />
            </div>
        </section>
    );
};

export default About;