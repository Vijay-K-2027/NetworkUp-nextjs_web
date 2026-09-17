"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface LogoItem {
    name: string;
    imageSrc?: string;
    icon?: React.ComponentType<{ className?: string }>;
}

export interface Section2TemplateProps {
    tagline?: string;
    logos?: LogoItem[];
    containerClass?: string;
    sectionClass?: string;
}

export const defaultLogos: LogoItem[] = [
    {
        name: "TechTalent",
        imageSrc: "/footer/solutions/section2/Chip.png",
    },
    {
        name: "VentureSearch",
        imageSrc: "/footer/solutions/section2/Rocket.png",
    },
    {
        name: "ApexHiring",
        imageSrc: "/footer/solutions/section2/TrendUp.png",
    },
    {
        name: "PipelineRecruit",
        imageSrc: "/footer/solutions/section2/Integrations.png",
    },
    {
        name: "TalentScale",
        imageSrc: "/footer/solutions/section2/Buildings.png",
    },
];

export default function Section2Template({
    tagline = "TRUSTED BY LEADING SEARCH FIRMS & HIGH-GROWTH TALENT TEAMS",
    logos = defaultLogos,
    containerClass = "max-w-7xl mx-auto",
    sectionClass = "w-full bg-[#fbfdfa] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-y border-[#f0f4eb]",
}: Section2TemplateProps) {
    return (
        <section className={sectionClass}>
            <div className={containerClass}>
                {/* TAGLINE / EYEBROW */}
                {tagline && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-6 sm:mb-8"
                    >
                        <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.07rem] text-[#43483e] uppercase">
                            {tagline}
                        </p>
                    </motion.div>
                )}

                {/* LOGO ROW */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 lg:gap-12"
                >
                    {logos.map((logo, idx) => {
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition-opacity duration-200"
                            >
                                {logo.imageSrc ? (
                                    <Image
                                        src={logo.imageSrc}
                                        alt={logo.name}
                                        width={24}
                                        height={24}
                                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
                                    />
                                ) : logo.icon ? (
                                    React.createElement(logo.icon, {
                                        className: "w-5 h-5 text-[#416900] shrink-0 stroke-[2.2]",
                                    })
                                ) : null}
                                <span className="text-base sm:text-lg font-bold text-[#000400] tracking-tight">
                                    {logo.name}
                                </span>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
