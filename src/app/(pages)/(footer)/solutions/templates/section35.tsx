"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export interface MarketingChecklistItem {
    title: string;
    description: string;
}

export interface AbmCampaignCard {
    title: string;
    subtitle: string;
    badge?: string;
    accountsCount: string | number;
    engagedStat: string;
    demoRequestsCount: string | number;
}

export interface Section35TemplateProps {
    mainHeading?: string | React.ReactNode;
    mainSubtitle?: string | React.ReactNode;

    eyebrowBadge?: string;
    headlineLine1?: string | React.ReactNode;
    headlineLine2?: string | React.ReactNode;
    description?: string | React.ReactNode;

    checklist?: MarketingChecklistItem[];

    linkText?: string;
    linkHref?: string;

    mockupHeaderTitle?: string;
    mockupHeaderBadge?: string;
    campaigns?: AbmCampaignCard[];

    containerClass?: string;
    sectionClass?: string;
}

export const defaultMarketingChecklist: MarketingChecklistItem[] = [
    {
        title: "Account & Prospect Intelligence -",
        description: "Research companies and identify relevant decision-makers.",
    },
    {
        title: "AI-Powered Personalization -",
        description: "Create contextual messaging tailored to each prospect.",
    },
    {
        title: "Automated Engagement -",
        description: "Build multi-step outreach sequences with follow-ups and conditions.",
    },
];

export const defaultAbmCampaigns: AbmCampaignCard[] = [
    {
        title: "Enterprise CyberTech Tier-1",
        subtitle: "Targeting CISOs & VP Security",
        badge: "Active ABM",
        accountsCount: 184,
        engagedStat: "92 (50.0%)",
        demoRequestsCount: 34,
    },
    {
        title: "FinTech Mid-Market Expansion",
        subtitle: "Targeting Heads of Compliance",
        badge: "Active ABM",
        accountsCount: 310,
        engagedStat: "148 (47.7%)",
        demoRequestsCount: 42,
    },
    {
        title: "Series B SaaS Demand Surge",
        subtitle: "Targeting Growth & RevOps Leaders",
        badge: "Active ABM",
        accountsCount: 220,
        engagedStat: "118 (53.6%)",
        demoRequestsCount: 29,
    },
];

export const defaultSection35Props: Section35TemplateProps = {
    mainHeading: "LinkedIn Growth Infrastructure for Modern Marketing Teams",
    mainSubtitle:
        "Discover target accounts, identify relevant prospects, launch personalized campaigns, and measure engagement from one connected workspace.",

    eyebrowBadge: "ACCOUNT-BASED ORCHESTRATION",
    headlineLine1: "Engage the Right People Across",
    headlineLine2: "Your Target Accounts",
    description:
        "Identify multiple stakeholders within target companies and coordinate personalized outreach based on their roles, context, and campaign goals.",

    checklist: defaultMarketingChecklist,

    linkText: "Explore Marketing Playbooks",
    linkHref: "#",

    mockupHeaderTitle: "Active ABM Campaigns",
    mockupHeaderBadge: "Live Real-Time",
    campaigns: defaultAbmCampaigns,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Section35Template(props: Section35TemplateProps) {
    const {
        mainHeading = defaultSection35Props.mainHeading,
        mainSubtitle = defaultSection35Props.mainSubtitle,

        eyebrowBadge = defaultSection35Props.eyebrowBadge,
        headlineLine1 = defaultSection35Props.headlineLine1,
        headlineLine2 = defaultSection35Props.headlineLine2,
        description = defaultSection35Props.description,

        checklist = defaultSection35Props.checklist,

        linkText = defaultSection35Props.linkText,
        linkHref = defaultSection35Props.linkHref,

        mockupHeaderTitle = defaultSection35Props.mockupHeaderTitle,
        mockupHeaderBadge = defaultSection35Props.mockupHeaderBadge,
        campaigns = defaultSection35Props.campaigns,

        containerClass = "max-w-7xl mx-auto",
        sectionClass = "w-full bg-[#fbfdfa] py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",
    } = props;

    return (
        <section className={sectionClass}>
            <div className={containerClass}>

                {/* 1. TOP HEADER & SUBTITLE */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0f172a] tracking-tight leading-[1.18]">
                        {mainHeading}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#64748b] mt-3.5 sm:mt-4 leading-relaxed font-normal max-w-3xl mx-auto">
                        {mainSubtitle}
                    </p>
                </motion.div>

                {/* 2. SHOWCASE CONTAINER */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="bg-white rounded-2xl sm:rounded-[36px] lg:rounded-[44px] p-6 sm:p-10 lg:p-14 border border-[#e6eee0] shadow-sm"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                        {/* LEFT COLUMN */}
                        <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
                            {eyebrowBadge && (
                                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#416303] mb-2.5 sm:mb-3">
                                    {eyebrowBadge}
                                </span>
                            )}

                            <h3 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#0f172a] tracking-tight leading-[1.2] mb-4">
                                {headlineLine1} <br className="hidden sm:inline" />
                                {headlineLine2}
                            </h3>

                            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6 sm:mb-8 max-w-lg font-normal">
                                {description}
                            </p>

                            {/* Checklist items */}
                            {checklist && checklist.length > 0 && (
                                <div className="space-y-4 sm:space-y-4.5 mb-8">
                                    {checklist.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 sm:gap-3.5">
                                            <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#e7f5d3] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-[#416303] stroke-[2]" />
                                            </div>
                                            <div className="text-xs sm:text-sm leading-relaxed">
                                                <span className="font-bold text-[#0f172a] mr-1.5">
                                                    {item.title}
                                                </span>
                                                <span className="text-[#0f172a]">
                                                    {item.description}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* CTA Link */}
                            {linkText && (
                                <Link
                                    href={linkHref || "#"}
                                    className="text-xs sm:text-sm font-bold text-[#416303] hover:text-[#356221] inline-flex items-center gap-1.5 transition-colors group"
                                >
                                    <span>{linkText}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            )}
                        </div>

                        {/* RIGHT COLUMN: ACTIVE ABM CAMPAIGNS MOCKUP */}
                        <div className="lg:col-span-6 flex items-center justify-center w-full">
                            <div className="w-full bg-[#f8fafc] rounded-2xl sm:rounded-[32px] p-5 sm:p-7 border border-[#e2e8f0] space-y-3.5 shadow-sm">

                                {/* Mockup Header */}
                                <div className="flex items-center justify-between gap-3 px-1 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#689f00] shrink-0" />
                                        <h4 className="font-bold text-xs sm:text-sm md:text-base text-[#1e293b]">
                                            {mockupHeaderTitle}
                                        </h4>
                                    </div>

                                    {mockupHeaderBadge && (
                                        <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8] tracking-wider">
                                            {mockupHeaderBadge}
                                        </span>
                                    )}
                                </div>

                                {/* 3 ABM Campaign Cards */}
                                {campaigns && campaigns.length > 0 && (
                                    <div className="space-y-3">
                                        {campaigns.map((card, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#e2e8f0]/80 shadow-xs space-y-3"
                                            >
                                                {/* Top Row */}
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="truncate">
                                                        <h5 className="text-xs sm:text-sm font-bold text-[#0f172a] leading-snug truncate">
                                                            {card.title}
                                                        </h5>
                                                        <p className="text-[11px] sm:text-xs text-[#94a3b8] font-medium truncate mt-0.5">
                                                            {card.subtitle}
                                                        </p>
                                                    </div>

                                                    {card.badge && (
                                                        <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#f4faeb] text-[#416303] rounded-full border border-[#d0eaab] text-[10px] sm:text-[11px] font-bold">
                                                            {card.badge}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Metrics Grid */}
                                                <div className="grid grid-cols-3 text-center pt-1 border border-[#f8fafc]">
                                                    <div>
                                                        <div className="text-[10px] sm:text-[11px] text-[#94a3b8] font-medium">
                                                            Accounts
                                                        </div>
                                                        <div className="text-xs sm:text-sm font-extrabold text-[#1e293b] mt-0.5">
                                                            {card.accountsCount}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="text-[10px] sm:text-[11px] text-[#94a3b8] font-medium">
                                                            Engaged
                                                        </div>
                                                        <div className="text-xs sm:text-sm font-extrabold text-[#528000] mt-0.5">
                                                            {card.engagedStat}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="text-[10px] sm:text-[11px] text-[#94a3b8] font-medium">
                                                            Demo Requests
                                                        </div>
                                                        <div className="text-xs sm:text-sm font-extrabold text-[#0f172a] mt-0.5">
                                                            {card.demoRequestsCount}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
