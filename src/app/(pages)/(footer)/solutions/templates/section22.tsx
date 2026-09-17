"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hourglass, CheckCircle2, PiggyBank } from "lucide-react";
import { BsSpeedometer2 } from "react-icons/bs";

export interface MetricCardItem {
    metric: string;
    label: string | React.ReactNode;
    footerText: string;
    iconType?: "zap" | "hourglass" | "check" | "roi" | "custom";
    customIcon?: React.ReactNode;
}

export interface Section22TemplateProps {
    eyebrowBadge?: string;
    titleLine1?: string | React.ReactNode;
    titleLine2?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    cards?: MetricCardItem[];
    containerClass?: string;
    sectionClass?: string;
}

export const defaultMetricCards: MetricCardItem[] = [
    {
        metric: "3×",
        label: (
            <>
                Faster Candidate <br />
                Discovery
            </>
        ),
        footerText: "4x faster pipeline builds",
        iconType: "zap",
    },
    {
        metric: "Hours",
        label: "Saved on Manual Outreach",
        footerText: "Focus on closing talent",
        iconType: "hourglass",
    },
    {
        metric: "1 Workspace",
        label: (
            <>
                For Sourcing & <br />
                Engagement
            </>
        ),
        footerText: "Guaranteed recruiter safety",
        iconType: "check",
    },
    {
        metric: "24/7",
        label: "Automated Follow-Ups",
        footerText: "Immediate procurement ROI",
        iconType: "roi",
    },
];

export const defaultSection22Props: Section22TemplateProps = {
    eyebrowBadge: "PROVEN ROI & EFFICIENCY METRICS",
    titleLine1: "Measurable Recruiting Impact & Placement",
    titleLine2: "Speed",
    subtitle:
        "Top recruitment teams swap tedious manual tasks for instant pipeline throughput.",
    cards: defaultMetricCards,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Section22Template(props: Section22TemplateProps) {
    const {
        eyebrowBadge = defaultSection22Props.eyebrowBadge,
        titleLine1 = defaultSection22Props.titleLine1,
        titleLine2 = defaultSection22Props.titleLine2,
        subtitle = defaultSection22Props.subtitle,
        cards = defaultSection22Props.cards,
        containerClass = "max-w-7xl mx-auto",
        sectionClass = "w-full bg-[#062300] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",
    } = props;

    const renderFooterIcon = (card: MetricCardItem) => {
        if (card.customIcon) return card.customIcon;
        switch (card.iconType) {
            case "zap":
                return <BsSpeedometer2 className="w-3.5 h-3.5 text-[#8ced36] shrink-0" />;
            case "hourglass":
                return <Hourglass className="w-3.5 h-3.5 text-[#8ced36] shrink-0" />;
            case "check":
                return <CheckCircle2 className="w-3.5 h-3.5 text-[#8ced36] shrink-0" />;
            case "roi":
            default:
                return <PiggyBank className="w-3.5 h-3.5 text-[#8ced36] shrink-0" />;
        }
    };

    return (
        <section className={`relative ${sectionClass} overflow-hidden`}>
            {/* Top-Left Radial Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#acf847]/10 blur-3xl"
            />

            <div className={`relative z-10 ${containerClass}`}>

                {/* HEADER SECTION */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
                >
                    {eyebrowBadge && (
                        <span className="inline-block px-3.5 py-1 rounded-full bg-[#416900]/20 text-[#acf847] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border border-[#2b4722] mb-4 sm:mb-5">
                            {eyebrowBadge}
                        </span>
                    )}

                    <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
                        {titleLine1} <br className="hidden sm:inline" />
                        {titleLine2}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-[#6d8e5b] mt-3.5 sm:mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* 4 METRIC CARDS */}
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
                                className="bg-[#1a1e20]/60 rounded-2xl sm:rounded-[24px] p-6 sm:p-7 md:p-8 border border-[#243a1d] flex flex-col justify-between min-h-[210px] sm:min-h-[230px] shadow-sm transition-colors duration-200 hover:border-[#38592c]"
                            >
                                {/* Top: Metric & Label */}
                                <div>
                                    <div className="text-4xl font-bold text-[#acf847] tracking-tight mb-3">
                                        {card.metric}
                                    </div>
                                    <div className="text-sm sm:text-base font-bold text-white leading-snug">
                                        {card.label}
                                    </div>
                                </div>

                                {/* Bottom: Footer with Icon & Divider */}
                                <div className="pt-5 mt-6 border-t border-[#23381c] flex items-center gap-2">
                                    {renderFooterIcon(card)}
                                    <span className="text-xs sm:text-[13px] text-[#acf847] font-medium">
                                        {card.footerText}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
