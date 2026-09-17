"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export interface GovernanceCardItem {
    title: string;
    description: string;
}

export interface GovernanceStatItem {
    value: string;
    label: string;
}

export interface Section313TemplateProps {
    badgeText?: string;
    badgeIcon?: React.ReactNode;
    titleLine1?: string | React.ReactNode;
    titleLine2?: string | React.ReactNode;
    description?: string | React.ReactNode;
    stats?: GovernanceStatItem[];
    cards?: GovernanceCardItem[];
    containerClass?: string;
    sectionClass?: string;
}

export const defaultGovernanceCards: GovernanceCardItem[] = [
    {
        title: "Activity Controls",
        description:
            "Set campaign pacing and activity limits for greater control.",
    },
    {
        title: "Role-Based Access",
        description:
            "Control what team members can access and manage.",
    },
    {
        title: "Account Protection",
        description:
            "Use smart limits and controlled automation designed to support responsible LinkedIn activity.",
    },
    {
        title: "Audit & Governance",
        description:
            "Enterprise plans include governance features such as SSO/SAML and audit logs.",
    },
];

export const defaultSection313Props: Section313TemplateProps = {
    badgeText: "ENTERPRISE GOVERNANCE",
    titleLine1: "Built for Responsible",
    titleLine2: "Sales Automation",
    description:
        <>"Give sales teams the controls they need to manage <br />automated outreach responsibly while maintaining visibility <br />across campaigns and accounts."</>,
    cards: defaultGovernanceCards,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Section313Template(props: Section313TemplateProps) {
    const {
        badgeText = defaultSection313Props.badgeText,
        badgeIcon = <Shield className="w-4 h-4 text-[#3a6a00] shrink-0" />,
        titleLine1 = defaultSection313Props.titleLine1,
        titleLine2 = defaultSection313Props.titleLine2,
        description = defaultSection313Props.description,
        stats,
        cards = defaultSection313Props.cards,
        containerClass = "max-w-7xl mx-auto",
        sectionClass = "w-full bg-[#f8f9ff] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",
    } = props;

    return (
        <section className={sectionClass}>
            <div className={containerClass}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">

                    {/* LEFT COLUMN: TITLE & DESCRIPTION & STATS */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="lg:col-span-5 flex flex-col justify-center items-start text-left"
                    >
                        {badgeText && (
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                {badgeIcon}
                                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#416900]">
                                    {badgeText}
                                </span>
                            </div>
                        )}

                        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#000400] tracking-tight leading-[1.15] mb-4 sm:mb-5">
                            {titleLine1} {titleLine2 && <><br className="hidden sm:inline" />{titleLine2}</>}
                        </h2>

                        <p className="text-sm sm:text-base md:text-[17px] text-[#43483e] leading-relaxed font-normal max-w-lg">
                            {description}
                        </p>

                        {/* STATS ROW (CONDITIONAL) */}
                        {stats && stats.length > 0 && (
                            <div className="flex items-center gap-6 sm:gap-8 mt-8 sm:mt-10 pt-2">
                                {stats.map((stat, sIdx) => (
                                    <React.Fragment key={sIdx}>
                                        {sIdx > 0 && (
                                            <div className="h-9 w-[1px] bg-slate-300/80 shrink-0" />
                                        )}
                                        <div className="flex flex-col">
                                            <span className="text-base sm:text-lg font-bold text-[#000400] tracking-tight">
                                                {stat.value}
                                            </span>
                                            <span className="text-xs sm:text-[13px] text-[#5b6156] font-normal mt-0.5">
                                                {stat.label}
                                            </span>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* RIGHT COLUMN: 2x2 GOVERNANCE CARDS GRID */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="lg:col-span-7"
                    >
                        {cards && cards.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-stretch">
                                {cards.map((card, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                        className="bg-white rounded-2xl sm:rounded-[24px] p-6 sm:p-7 flex flex-col justify-start min-h-[150px] sm:min-h-[170px] shadow-sm transition-shadow duration-200 hover:shadow-md"
                                    >
                                        <h3 className="text-base sm:text-lg font-bold text-[#000400] mb-2 leading-snug">
                                            {card.title}
                                        </h3>
                                        <p className="text-xs sm:text-[13px] md:text-sm text-[#43483e] font-normal leading-relaxed">
                                            {card.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
