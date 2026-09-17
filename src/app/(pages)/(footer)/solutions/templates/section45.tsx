"use client";

import React from "react";
import { motion } from "framer-motion";

export interface MarketingExecutionCard {
    title: string;
    description: string;
}

export interface Section45TemplateProps {
    eyebrow?: string;
    heading?: string | React.ReactNode;
    cards?: MarketingExecutionCard[];
    containerClass?: string;
    sectionClass?: string;
}

export const defaultMarketingExecutionCards: MarketingExecutionCard[] = [
    {
        title: "Better Prospect Discovery",
        description:
            "Identify relevant decision-makers within your target market.",
    },
    {
        title: "More Relevant Outreach",
        description:
            "Use AI to personalize messaging using prospect and company context.",
    },
    {
        title: "Faster Campaign Execution",
        description:
            "Launch & manage multi-step LinkedIn campaigns without repetitive manual work.",
    },
    {
        title: "Clearer Engagement Insights",
        description:
            "Track campaign performance, responses and prospect engagement.",
    },
];

export const defaultSection45Props: Section45TemplateProps = {
    eyebrow: "PROVEN ROI & PIPELINE EXPANSION",
    heading: "Built to Make B2B Marketing More Actionable",
    cards: defaultMarketingExecutionCards,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Section45Template(props: Section45TemplateProps) {
    const {
        eyebrow = defaultSection45Props.eyebrow,
        heading = defaultSection45Props.heading,
        cards = defaultSection45Props.cards,
        containerClass = "max-w-7xl mx-auto",
        sectionClass = "w-full bg-[#062300] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border border-[#e5e7eb]",
    } = props;

    return (
        <section className={sectionClass}>
            <div className={containerClass}>

                {/* 1. HEADER */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
                >
                    {eyebrow && (
                        <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#8ac443] mb-3 sm:mb-4">
                            {eyebrow}
                        </div>
                    )}

                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
                        {heading}
                    </h2>
                </motion.div>

                {/* 2. 4 CARDS GRID */}
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
                                className="bg-[#0b3302]/70 rounded-2xl sm:rounded-[22px] p-6 sm:p-7 md:p-8 border border-[#354f08]/60 flex flex-col justify-start min-h-[190px] sm:min-h-[210px] shadow-sm transition-colors duration-200 hover:border-[#3d632f]"
                            >
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 sm:mb-3 leading-snug">
                                    {card.title}
                                </h3>
                                <p className="text-xs sm:text-[13px] md:text-sm text-[#cbd5e1] leading-relaxed font-normal">
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
