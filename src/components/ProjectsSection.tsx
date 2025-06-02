// components/ProjectsSection.tsx
"use client";

import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";

const SwiperProjects = dynamic(() => import("./SwiperProjects"), {
    ssr: false,
});

const ProjectsSection = () => {
    return (
        <section className=" text-white py-16 px-[7vw] md:px-[7vw] lg:px-[15vw]" id="work">

            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="MY FEATURED PROJECTS"
                    subtitle="A selection of impactful projects highlighting my experience, skills, and collaborative roles."
                />
                <SwiperProjects />
            </div>
        </section>
    );
};

export default ProjectsSection;
