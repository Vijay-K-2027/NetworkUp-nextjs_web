"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ExecutionFeatureCard {
    title: string;
    description: string;
}

export interface Section213TemplateProps {
    heading?: string | React.ReactNode;
    cards?: ExecutionFeatureCard[];
    containerClass?: string;
    sectionClass?: string;
}

export const defaultExecutionCards: ExecutionFeatureCard[] = [
    {
        title: "Faster Prospect Discovery",
        description:
            "Find relevant decision-makers using targeted filters and prospect discovery.",
    },
    {
        title: "Less Manual Outreach",
        description:
            "Automate repetitive connection requests and follow-ups.",
    },
    {
        title: "Better Personalization",
        description:
            "Generate contextual messages with AI based on prospect information.",
    },
    {
        title: "Clearer Campaign Performance",
        description:
            "Track acceptance, replies, engagement, and campaign performance.",
    },
];

export const defaultSection213Props: Section213TemplateProps = {
    heading: "Built to Improve Sales Execution",
    cards: defaultExecutionCards,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Section213Template(props: Section213TemplateProps) {
    const {
        heading = defaultSection213Props.heading,
        cards = defaultSection213Props.cards,
        containerClass = "max-w-7xl mx-auto",
        sectionClass = "w-full bg-[#0a1a0a] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",
    } = props;

    return (
        <section className={`relative ${sectionClass} overflow-hidden`}>
            {/* Top-Left Radial Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#acf847]/10 blur-3xl"
            />

            <div className={`relative z-10 ${containerClass}`}>

                {/* MAIN HEADING */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
                        {heading}
                    </h2>
                </motion.div>

                {/* 4 FEATURE CARDS GRID */}
                {cards && cards.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="bg-[#2f3f1b] rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-start min-h-[180px] sm:min-h-[200px] shadow-sm transition-colors duration-200 hover:border-[#4d6c36]"
                            >
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 sm:mb-3 leading-snug">
                                    {card.title}
                                </h3>
                                <p className="text-xs sm:text-[13px] md:text-sm text-[#dce9ff]/80 leading-relaxed font-normal">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
