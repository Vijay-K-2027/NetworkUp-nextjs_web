"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

export interface ComparisonCardItem {
    traditionalBadge?: string;
    traditionalTitle: string;
    traditionalDescription: string;

    advantageBadge?: string;
    advantageTitle?: string;
    advantageDescription: string;
}

export interface Section3TemplateProps {
    titleLine1?: string | React.ReactNode;
    titleLine2?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    cards?: ComparisonCardItem[];
    containerClass?: string;
    sectionClass?: string;
}

export const defaultSection3Cards: ComparisonCardItem[] = [
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Manual & Generic Outreach",
        traditionalDescription:
            "Reps spend valuable time researching prospects and writing repetitive messages that often lack relevant context.",
        advantageBadge: "NetworkUp Advantage",
        advantageTitle: "AI-Powered Personalization:",
        advantageDescription:
            "Generate contextual outreach using prospect data, professional activity, and campaign context.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Uncontrolled Automation",
        traditionalDescription:
            "Aggressive or poorly paced automation can create unnecessary account-safety risks and make outreach harder to manage.",
        advantageBadge: "NetworkUp Advantage",
        advantageTitle: "Smart Activity Controls:",
        advantageDescription:
            "Control campaign pacing, action limits, and account activity from one workspace.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Disconnected CRM Workflows",
        traditionalDescription:
            "Sales activity can become fragmented across LinkedIn, spreadsheets, inboxes, and CRM systems.",
        advantageBadge: "NetworkUp Advantage",
        advantageTitle: "Connected CRM Workflows:",
        advantageDescription:
            "Sync leads & outreach activity with your existing sales stack through CRM integrations, API access, and webhooks.",
    },
];

export const defaultSection3Props: Section3TemplateProps = {
    titleLine1: "Traditional LinkedIn Prospecting Is Fragmented.",
    titleLine2: "Here's How Modern Sales Teams Win.",
    cards: defaultSection3Cards,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

export default function Section3Template(props: Section3TemplateProps) {
    const {
        titleLine1 = defaultSection3Props.titleLine1,
        titleLine2 = defaultSection3Props.titleLine2,
        subtitle,
        cards = defaultSection3Props.cards,
        containerClass = "max-w-7xl mx-auto",
        sectionClass = "w-full bg-[#eff4ff] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden",
    } = props;

    return (
        <section className={sectionClass}>
            <div className={containerClass}>

                {/* SECTION HEADER */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="mb-10 sm:mb-14 lg:mb-16 text-left"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#000400] tracking-tight leading-[1.2] max-w-6xl">
                        {titleLine1} {titleLine2 && <><br className="hidden sm:inline" />{titleLine2}</>}
                    </h2>
                    {subtitle && (
                        <p className="text-sm sm:text-base md:text-[17px] text-[#43483e] leading-relaxed mt-3 sm:mt-4 max-w-3xl font-normal">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                {/* 3 COMPARISON CARDS */}
                {cards && cards.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between"
                            >
                                {/* Top: Traditional/Problem */}
                                <div>
                                    <span className="inline-block bg-[#ffdad6]/30 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ba1a1a] p-2 mb-2.5 sm:mb-3">
                                        {card.traditionalBadge || "TRADITIONAL"}
                                    </span>

                                    <h3 className="text-lg sm:text-xl font-bold text-[#000400] mb-2 sm:mb-3 leading-snug">
                                        {card.traditionalTitle}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-[#43483e] leading-relaxed mb-6">
                                        {card.traditionalDescription}
                                    </p>
                                </div>

                                {/* Bottom: NetworkUp Advantage Solution */}
                                <div className="bg-[#f8f9ff] rounded-lg sm:rounded-xl p-4 sm:p-5 border border-[#eaf0fc] mt-auto">
                                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#416900] mb-1.5">
                                        <CircleCheck className="w-4 h-4 text-[#416900] shrink-0 stroke-[2]" />
                                        <span>{card.advantageBadge || "NetworkUp Advantage"}</span>
                                    </div>

                                    <p className="text-xs sm:text-[13px] text-[#000400] leading-[1.5]">
                                        {card.advantageTitle && (
                                            <strong className="font-bold mr-1">
                                                {card.advantageTitle}
                                            </strong>
                                        )}
                                        <span className="font-medium text-[#43483e]">
                                            {card.advantageDescription}
                                        </span>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
