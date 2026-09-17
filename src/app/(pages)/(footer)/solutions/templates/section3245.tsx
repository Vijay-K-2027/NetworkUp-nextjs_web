"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, ShieldCheck, GitMerge, ShieldAlert, Laptop, LockKeyhole, FilterX, ShieldUser } from "lucide-react";

export interface EnterpriseReadinessCard {
    iconType?: "sync" | "rbac" | "dedup" | "privacy" | "custom";
    customIcon?: React.ReactNode;
    title: string;
    description: string;
}

export interface Section3245TemplateProps {
    eyebrowBadge?: string;
    eyebrowBadgeClassName?: string;
    heading?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    cards?: EnterpriseReadinessCard[];
    containerClass?: string;
    sectionClass?: string;
}

export const defaultReadinessCards: EnterpriseReadinessCard[] = [
    {
        iconType: "sync",
        title: "ATS Two-Way Sync",
        description:
            "Real-time contact creation and job stage progression directly inside Greenhouse, Lever, Ashby, and Workday without CSV uploads.",
    },
    {
        iconType: "rbac",
        title: "Role-Based Talent RBAC",
        description:
            "Configure tailored access rights for sourcers, executive recruiters, and hiring managers with audit logging for every message sent.",
    },
    {
        iconType: "dedup",
        title: "Automated Deduplication",
        description:
            "Automatic collision detection prevents team members from contacting candidates currently engaged in another recruiter's active pipeline.",
    },
    {
        iconType: "privacy",
        title: "Data Privacy & Opt-Out",
        description:
            "Full CCPA and GDPR compliance with built-in instant candidate do-not-contact lists and automated contact record purging.",
    },
];

export const defaultSection3245Props: Section3245TemplateProps = {
    eyebrowBadge: "ENTERPRISE READINESS",
    heading: "Built for Responsible Recruiting & Enterprise Workflows",
    subtitle:
        "Designed with controlled automation, access management, data protection, and team-level workflows for modern recruiting organizations.",
    cards: defaultReadinessCards,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Section3245Template(props: Section3245TemplateProps) {
    const {
        eyebrowBadge = defaultSection3245Props.eyebrowBadge,
        eyebrowBadgeClassName,
        heading = defaultSection3245Props.heading,
        subtitle = defaultSection3245Props.subtitle,
        cards = defaultSection3245Props.cards,
        containerClass = "max-w-7xl mx-auto",
        sectionClass = "w-full bg-[#fbfdfa] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",
    } = props;

    const renderCardIcon = (card: EnterpriseReadinessCard) => {
        if (card.customIcon) return card.customIcon;
        switch (card.iconType) {
            case "sync":
                return <Laptop className="w-5 h-5 text-[#000400] stroke-[2]" />;
            case "rbac":
                return <ShieldUser className="w-5 h-5 text-[#000400] stroke-[2]" />;
            case "dedup":
                return <FilterX className="w-5 h-5 text-[#000400] stroke-[2]" />;
            case "privacy":
            default:
                return <ShieldAlert className="w-5 h-5 text-[#000400] stroke-[2]" />;
        }
    };

    return (
        <section className={sectionClass}>
            <div className={containerClass}>

                {/* 1. HEADER SECTION */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20"
                >
                    {eyebrowBadge && (
                        <span
                            className={
                                eyebrowBadgeClassName ||
                                "inline-block px-3.5 py-1 rounded-full bg-[#dce9ff] text-[#000400] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-4 sm:mb-5"
                            }
                        >
                            {eyebrowBadge}
                        </span>
                    )}

                    <h2 className="text-3xl sm:text-4xl font-bold text-[#000400] tracking-tight leading-[1.18]">
                        {heading}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-[#43483e] mt-3.5 sm:mt-4 leading-relaxed font-normal max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* 2. 4 ENTERPRISE CARDS GRID */}
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
                                className="bg-white rounded-2xl sm:rounded-[24px] p-6 sm:p-7 md:p-8 border border-[#e8efe3] shadow-xs flex flex-col justify-start min-h-[240px] sm:min-h-[260px] transition-shadow duration-200 hover:shadow-md"
                            >
                                {/* Icon container */}
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#e5eeff] flex items-center justify-center mb-5 sm:mb-6 shrink-0 shadow-xs">
                                    {renderCardIcon(card)}
                                </div>

                                <h3 className="text-base sm:text-lg font-bold text-[#000400] mb-2.5 sm:mb-3 leading-snug">
                                    {card.title}
                                </h3>

                                <p className="text-xs sm:text-[13px] md:text-sm text-[#43483e] leading-relaxed font-normal">
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
