// components/SwiperProjects.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Link from "next/link";

const initialProjects = [

    {
        id: 1,
        title: "Bicycle Store - E-Commerce Client",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DBeZpnA9oMe6yNsJtRdclHvzjI7QXqExnLbGw",
        description:
            "A responsive frontend for a bike shop application with JWT auth, role-based access for Admin & Customers, product management, and SurjoPay payment integration.",
        technologies: ["React", "Redux", "Tailwind CSS", "JWT", "SurjoPay", "Express.js", "MongoDB", "Node.js"],
        liveLink: "https://bicycle-store.vercel.app",
        frontend: "https://github.com/ZakiaSultana4/Bi-Cycle-Store-Frontend",
        backend: "https://github.com/ZakiaSultana4/Bi-Cycle-Store-Backend"
    },
    {
        id: 2,
        title: "Book Land - Online Book Shop",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DXnaH5GVwG9QKaNYonECLsTFvkBS2VzyfRW7q",
        description:
            "Book Land is a full-featured online bookstore with authentication, admin & user dashboards, book filtering, and SurjoPay integration for payments.",
        technologies: ["React", "Redux", "Tailwind CSS", "JWT", "SurjoPay", "Express.js", "MongoDB", "Node.js"],
        liveLink: "https://booklandclient.vercel.app/",
        frontend: "https://github.com/ZakiaSultana4/Book-Land-Frontend",
        backend: "https://github.com/ZakiaSultana4/Book-Land-Backend"
    },
    {
        id: 3,
        title: "Scholary - Scholarship Application System",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DtNe9WfXu582EbtVhaXPzGgIAjeqdyLspvR3C",
        description:
            "Scholary is a full-featured scholarship application system with authentication, admin & user dashboards, application tracking, and email notifications.",
        technologies: ["React", "Redux", "Tailwind CSS", "JWT", "Express.js", "MongoDB", "Node.js"],
        liveLink: "scholary-90512.web.app/",
        frontend: "https://github.com/ZakiaSultana4/Scholarship-Client",
        backend: "https://github.com/ZakiaSultana4/Scholarship-Server"
    },
    {
        id: 4,
        title: "JobHub - Job Listing Platform",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DrhxRNHlyFe9LdpW3T8BRqiEa2V0tMr7Zm6xG",
        description:
            "JobHub is a React-based job listing and application platform with secure authentication, job management, and seamless Google login integration.",
        technologies: [
            "React.js",
            "Tailwind CSS",
            "Daisy UI",
            "React to PDF",
            "Firebase",
            "JWT",
            "Node.js",
            "Express.js",
            "MongoDB"
        ],
        liveLink: "https://jobhub-a11.web.app/",
        frontend: "https://github.com/ZakiaSultana4/JobHub-Client",
        backend: "https://github.com/ZakiaSultana4/JobHub-Server",
    },
    {
        id: 5,
        title: "Food Donation Platform",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DilEhfcCOMkSpQbquWC9aFcfDEKmH2GXYd1sV",
        description:
            "A community-driven React app for food donation and requests, featuring secure authentication, food listing management, and real-time request status tracking.",
        technologies: [
            "React.js",
            "Tailwind CSS",
            "Daisy UI",
            "Firebase",
            "JWT",
            "Node.js",
            "Express.js",
            "MongoDB"
        ],
        liveLink: "https://assignment-11-4dcde.web.app/",
        frontend: "https://github.com/ZakiaSultana4/Cookieter-Client",
        backend: "https://github.com/ZakiaSultana4/Cookieter-Server",
    },
];


const SwiperProjects = () => {
    return (
        <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="py-8"
            loop={false}
        >
            {initialProjects.map((project) => (
                <SwiperSlide
                    key={project.id}
                    className="bg-[#111827] border border-[#2e3a59] rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition-transform duration-300 mx-2"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={350}
                        className="w-full h-48 md:h-56 lg:h-64 object-cover"
                    />
                    <div className="p-4 sm:p-5">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 bg-[#1f2937] text-xs rounded-full border border-gray-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition"
                            >
                                <LuExternalLink className="text-lg" />
                                Live
                            </Link>
                            <Link
                                href={project.frontend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 border border-indigo-500 text-white text-sm rounded hover:bg-indigo-700 transition"
                            >
                                <FaGithub className="text-lg" />
                                Frontend
                            </Link>
                            <Link
                                href={project.backend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 border border-emerald-500 text-white text-sm rounded hover:bg-emerald-700 transition"
                            >
                                <FaGithub className="text-lg" />
                                Backend
                            </Link>
                        </div>


                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperProjects;
