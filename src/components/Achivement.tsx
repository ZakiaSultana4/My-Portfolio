import React from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    image: string;
    date?: string;
    description?: string;
}

interface AchievementsSectionProps {
    certificates?: Certificate[];
}

const defaultCertificates: Certificate[] = [
    {
        id: 1,
        title: "Complete Web Development Course",
        issuer: "Programming Hero",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DUissnUHrOR4h8Cm7xainGzqJXv1sgoB2H0FS",
        date: "2024"
    },
    {
        id: 2,
        title: "Reactive Accelerator",
        issuer: "Learn With Sumit",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DE6UxrxuuizCIBSVtUM94v3fTwnFl8by5NQZ1",
        date: "2024"
    },
    {
        id: 3,
        title: "Mastering on Next JS & Prisma",
        issuer: "OSTAD",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DP7xekaw2Y4W31jDqSmJfneKcaxBHUIlCwpVv",
        date: "2024"
    },
    {
        id: 4,
        title: "Coding Interview",
        issuer: "OSTAD",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DHq7sidxn9reiWO45zZClLbtxw0fkMday7UHo",
        date: "2024"
    },
    {
        id: 5,
        title: "Communication Skills for Developers",
        issuer: "10 Minute School",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15DY5f1r29AgMk9hRjCP5GqTZnvW8sziaDeI1by",
        date: "2025"
    },
    {
        id: 6,
        title: "CV writing and Interview Preparation",
        issuer: "10 Minute School",
        image: "https://jehrfbtl7l.ufs.sh/f/soyLwyt7O15Dasw0ghbbs2pMAJvFqcRuH1hCmB5j6i3kYNd7",
        date: "2025"
    },

];

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
    certificates = defaultCertificates
}) => {
    return (
        <section  id="achivement" className="min-h-screen py-20 px-[7vw] md:px-[7vw] lg:px-[15vw]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="MY CERTIFICATES & ACHIEVEMENTS"
                    subtitle="Certified accomplishments that showcase my growth, expertise, and pursuit of excellence."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="group relative"
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* Certificate Card */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">

                                {/* Padding wrapper */}
                                <div className="w-full h-full relative p-4">
                                    {/* Rounded image container */}
                                    <div className="w-full h-full relative overflow-hidden rounded-xl">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                                        <p className="text-blue-200 text-sm">{cert.issuer}</p>
                                        {cert.date && (
                                            <p className="text-blue-300 text-xs mt-1">{cert.date}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decoration */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center space-x-2 text-blue-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Continuously Learning & Growing</span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
