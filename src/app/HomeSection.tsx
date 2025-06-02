'use client'
import React from 'react'
import About from "@/components/About";
import AboutMe from "@/components/AboutMe";
import AchievementsSection from "@/components/Achivement";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
// import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import { useRef } from "react";
import LearningPhase from '@/components/learningPhase';
const HomeSection = () => {
    const contactRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    return (
        <div>
            <Navbar />
            <About contactRef={contactRef} />
            <AboutMe />
            <ProjectsSection />
            <Skills />
            <AchievementsSection />
            <Education />
            <LearningPhase />
            {/* <Experience /> */}
            <Contact contactRef={contactRef} />
            <Footer />
        </div>
    )
}

export default HomeSection
