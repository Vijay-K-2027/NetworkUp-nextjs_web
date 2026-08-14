"use client";

import { Rocket, Box, Send, Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const timelineItems = [
    {
        year: "2019",
        title: "The Beginning",
        description: "WhiterApps was founded with a vision to build digital products that make an impact.",
        icon: Rocket,
    },
    {
        year: "2021",
        title: "First Products",
        description: "Launched our first set of SaaS tools helping businesses automate workflows.",
        icon: Box,
    },
    {
        year: "2026",
        title: "NetworkUp.io Launch",
        description: "Introduced NetworkUp.io to simplify and supercharge LinkedIn outreach.",
        icon: Send,
    },
    {
        year: "Today",
        title: "Growing Together",
        description: "Continuing to innovate and help thousands of professionals and teams grow every day.",
        icon: Users,
    }
];

export default function Section2() {
    return (
        <section className="bg-[#fafcf7] w-full max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16">

                {/* Left Side: Story */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full lg:w-[45%] p-2 lg:p-5"
                >
                    <div className="flex flex-col items-start gap-y-6">
                        <span className="text-[#356221] uppercase text-xs sm:text-sm font-extrabold tracking-wider">Our Story ——</span>
                        <div className="flex flex-col text-left">
                            <h2 className="text-[#356221] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none">From an idea to a</h2>
                            <h2 className="text-[#356221] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none mt-1">platform</h2>
                            <h2 className="text-[#356221] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none mt-1">trusted by thousands</h2>
                        </div>
                        <div className="flex flex-col gap-y-4 text-black/80 text-lg sm:text-xl leading-relaxed text-left mt-4">
                            <p>WhiterApps was founded with a simple belief — software should empower people and businesses, not complicate their lives.</p>
                            <p>Over the years, we built and scaled multiple digital products, helping teams automate, engage, and grow efficiently.</p>
                            <p>With NetworkUp.io, we're focused on transforming LinkedIn outreach into a more human, intelligent, and impactful experience.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Timeline */}
                <div className="w-full lg:w-[50%] bg-transparent p-2 lg:p-5">
                    <div className="relative pl-2">
                        {/* Vertical timeline line (animates to draw downwards on scroll) */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute left-[50px] top-6 bottom-6 w-[2.5px] bg-[#71eb34] origin-top"
                        />

                        {timelineItems.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="relative pl-33 pb-12 last:pb-0 text-left flex flex-col items-start">

                                    {/* Timeline icon node with spring load scale animation */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.3 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-80px" }}
                                        transition={{ type: "spring", stiffness: 120, delay: index * 0.15 }}
                                        className="absolute left-15 top-0 w-14 h-14 rounded-full bg-black shadow-[0_0_5px_2px_rgba(113,235,52,1)] flex items-center justify-center z-10 shrink-0"
                                    >
                                        <IconComponent size={22} className="text-[#356221] stroke-[2]" />
                                    </motion.div>

                                    {/* Text content with slide-in animation */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-80px" }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                                        className="flex flex-col items-start gap-1 pt-1.5 pl-2"
                                    >
                                        <span className="text-[#356221] text-sm sm:text-md font-extrabold uppercase tracking-wide">
                                            {item.year}
                                        </span>
                                        <h3 className="text-black text-xl sm:text-2xl font-extrabold tracking-tight mt-0.5">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-650 text-md sm:text-lg leading-relaxed mt-1 max-w-xl">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}