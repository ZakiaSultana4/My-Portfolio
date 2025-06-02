'use client';
import React, { useState } from "react";
import { SkillsInfo } from "./constants";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

const tabs = SkillsInfo.map((category) => ({
    id: category.title.toLowerCase().replace(/\s+/g, "-"),
    label: category.title,
}));

type Particle = {
    top: number;
    left: number;
    duration: number;
    delay: number;
};

const generateParticles = (): Particle[] => {
    return [...Array(25)].map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 2 + Math.random() * 1.5,
        delay: Math.random() * 2,
    }));
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [particles, setParticles] = useState<Particle[]>([]);

    // Only generate particles once on client
    React.useEffect(() => {
        setParticles(generateParticles());
    }, []);

    const activeCategory = SkillsInfo.find(
        (category) => category.title.toLowerCase().replace(/\s+/g, "-") === activeTab
    );

    return (
        <section
            id="skills"
            className="relative py-28 px-[7vw] md:px-[7vw] lg:px-[15vw] text-white font-sans overflow-hidden z-10"
        >
            {/* Section Header */}
            <div className="relative z-10 text-center mb-16">
                <SectionHeader
                    title="MY SKILLS"
                    subtitle="Tools, technologies, and languages I&#39;ve mastered over time through passion and projects."
                />
            </div>

            {/* Tabs */}
            <div className="relative z-10 flex justify-center overflow-x-auto scrollbar-hide mb-12">
                <div className="flex flex-nowrap sm:flex-wrap gap-3 p-2 rounded-full bg-[#1f1f2e] border border-[#8245ec]/30 shadow-[0_0_40px_rgba(130,69,236,0.1)] backdrop-blur-md">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-5 py-2 text-sm sm:text-base font-semibold rounded-full transition-all
              ${activeTab === tab.id ? "text-white" : "text-white/60 hover:text-white"}`}
                        >
                            {activeTab === tab.id && (
                                <motion.span
                                    layoutId="active-tab"
                                    className="absolute inset-0 bg-[#8245ec] rounded-full z-0"
                                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Skill Cards */}
            <AnimatePresence mode="wait">
                {activeCategory && (
                    <motion.div
                        key={activeCategory.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl px-10 py-12 shadow-[0_0_50px_rgba(130,69,236,0.08)] overflow-hidden"
                    >
                        {/* Moving dotted particles */}
                        <div className="absolute inset-0 pointer-events-none -z-10">
                            {particles.map(({ top, left, duration, delay }, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-[#8245ec]/40 rounded-full"
                                    style={{ top: `${top}%`, left: `${left}%` }}
                                    animate={{
                                        y: ["0%", "-10%", "0%"],
                                        x: ["0%", "5%", "0%"],
                                        opacity: [0.3, 0.7, 0.3],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        duration,
                                        delay,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10">
                            {activeCategory.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.08, rotate: 1 }}
                                    className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-700/50 bg-gray-900/60 rounded-2xl text-center transition-all hover:border-[#8245ec] hover:shadow-[0_0_20px_rgba(130,69,236,0.3)]"
                                >
                                    <Image
                                        src={skill.logo as string | StaticImageData}
                                        alt={skill.name}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 object-contain"
                                    />
                                    <span className="text-sm text-gray-200">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;
