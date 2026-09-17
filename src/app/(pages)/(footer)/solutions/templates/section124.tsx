"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export interface SourcingFeatureItem {
    iconType?: "lock" | "share" | "role" | "custom";
    iconSrc?: string;
    customIcon?: React.ReactNode;
    title: string;
    description: string;
}

export interface SourcingCampaignCard {
    title: string;
    badge: string;
    locationAndIndustry: string;
    candidatesCount?: string | number;
    prospectsCount?: string | number;
    repliesCount: string;
    screensCount?: string;
    demosCount?: string;
    metric1Label?: string;
    metric1Value?: string | number;
    metric2Label?: string;
    metric2Value?: string;
    metric3Label?: string;
    metric3Value?: string;
}

export interface Section124TemplateProps {
    mainHeading?: string | React.ReactNode;
    mainSubtitle?: string | React.ReactNode;

    tabs?: string[];
    defaultActiveTab?: number;

    eyebrowBadge?: string;
    headlineLine1?: string | React.ReactNode;
    headlineLine2?: string | React.ReactNode;
    description?: string | React.ReactNode;

    featureList?: SourcingFeatureItem[];

    linkText?: string;
    linkHref?: string;

    mockupHeaderTitle?: string;
    mockupHeaderBadge?: string;
    mockupHeaderIconSrc?: string;
    mockupHeaderIcon?: React.ReactNode;
    metric1DefaultLabel?: string;
    metric2DefaultLabel?: string;
    metric3DefaultLabel?: string;
    campaigns?: SourcingCampaignCard[];

    containerClass?: string;
    sectionClass?: string;
}

export const defaultTabs = [
    "Multi-Recruiter Pooling",
    "Passive Candidate AI",
    "ATS Bi-Directional Sync",
    "InMail Cost Reducer",
];

export const defaultFeatureList: SourcingFeatureItem[] = [
    {
        iconSrc: "/footer/solutions/section2/2/lock.png",
        iconType: "lock",
        title: "Candidate Ownership Rules:",
        description:
            "Assign prospects to specific recruiters and prevent duplicate outreach.",
    },
    {
        iconSrc: "/footer/solutions/section2/2/integrate.png",
        iconType: "share",
        title: "Shared Talent Visibilities:",
        description:
            "Give recruiters visibility into candidate status, conversations, and outreach history.",
    },
    {
        iconSrc: "/footer/solutions/section2/2/id.png",
        iconType: "role",
        title: "Role-Based Access",
        description:
            "Control access to candidates, campaigns, and recruiting workflows based on team responsibilities.",
    },
];

export const defaultCampaigns: SourcingCampaignCard[] = [
    {
        title: "Principal Distributed Systems Engineer",
        badge: "Active (3 Recruiter Seats)",
        locationAndIndustry: "San Francisco / Remote • Series B FinTech",
        candidatesCount: 142,
        repliesCount: "64 (45.1%)",
        screensCount: "19 Booked",
    },
    {
        title: "VP of Global Enterprise Sales",
        badge: "Active (1 Recruiter Seat)",
        locationAndIndustry: "New York, NY • High-Growth CyberTech",
        candidatesCount: 88,
        repliesCount: "49 (55.6%)",
        screensCount: "14 Booked",
    },
    {
        title: "Lead Product Designer (Design Systems)",
        badge: "Active (2 Recruiter Seats)",
        locationAndIndustry: "Austin, TX / Remote • Enterprise SaaS",
        candidatesCount: 116,
        repliesCount: "61 (52.5%)",
        screensCount: "22 Booked",
    },
];

export const defaultSection124Props: Section124TemplateProps = {
    mainHeading: "A Smarter Sourcing Workflow for Modern Recruiting Teams",
    mainSubtitle:
        "Discover candidates, personalize outreach, automate follow-ups, and manage your talent pipeline from one connected workspace.",

    tabs: defaultTabs,
    defaultActiveTab: 0,

    eyebrowBadge: "TEAM PIPELINE CONTROL",
    headlineLine1: "Coordinate Recruiting Workflows",
    headlineLine2: "Across Your Team",
    description:
        "Eliminate chaotic internal competition. NetworkUp gives leadership global oversight while keeping each sourcer, recruiter, and hiring manager's workflow clean and dedicated.",

    featureList: defaultFeatureList,

    mockupHeaderTitle: "Active Sourcing Campaigns",
    mockupHeaderBadge: "Live Real-Time",
    mockupHeaderIconSrc: "/footer/solutions/section2/2/search.png",
    metric1DefaultLabel: "Candidates",
    metric2DefaultLabel: "Replies",
    metric3DefaultLabel: "Screens",
    campaigns: defaultCampaigns,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Section124Template(props: Section124TemplateProps) {
    const {
        mainHeading = defaultSection124Props.mainHeading,
        mainSubtitle = defaultSection124Props.mainSubtitle,

        tabs,
        defaultActiveTab = 0,

        eyebrowBadge = defaultSection124Props.eyebrowBadge,
        headlineLine1 = defaultSection124Props.headlineLine1,
        headlineLine2 = defaultSection124Props.headlineLine2,
        description = defaultSection124Props.description,

        featureList = defaultSection124Props.featureList,

        linkText,
        linkHref = "#",

        mockupHeaderTitle = defaultSection124Props.mockupHeaderTitle,
        mockupHeaderBadge = defaultSection124Props.mockupHeaderBadge,
        mockupHeaderIconSrc = defaultSection124Props.mockupHeaderIconSrc,
        mockupHeaderIcon,
        metric1DefaultLabel = "Candidates",
        metric2DefaultLabel = "Replies",
        metric3DefaultLabel = "Screens",
        campaigns = defaultSection124Props.campaigns,

        containerClass = "max-w-7xl mx-auto",
        sectionClass = "w-full bg-[#fbfdfa] py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",
    } = props;

    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    const renderFeatureIcon = (item: SourcingFeatureItem) => {
        if (item.customIcon) return item.customIcon;
        const src =
            item.iconSrc ||
            (item.iconType === "lock"
                ? "/footer/solutions/section2/2/lock.png"
                : item.iconType === "share"
                ? "/footer/solutions/section2/2/integrate.png"
                : item.iconType === "role"
                ? "/footer/solutions/section2/2/id.png"
                : null);

        if (src) {
            return (
                <Image
                    src={src}
                    alt={item.title}
                    width={16}
                    height={16}
                    className="w-3.5 h-3.5 object-contain"
                />
            );
        }
        return null;
    };

    return (
        <section className={sectionClass}>
            <div className={containerClass}>

                {/* 1. TOP HEADER & SUBTITLE */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="text-center max-w-6xl mx-auto mb-4 sm:mb-6 lg:mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#000400] tracking-tight leading-[1.18]">
                        {mainHeading}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#43483e] mt-3.5 sm:mt-4 leading-relaxed font-normal max-w-6xl mx-auto">
                        {mainSubtitle}
                    </p>
                </motion.div>

                {/* 2. PILL / TAB NAVIGATION (CONDITIONAL) */}
                {tabs && tabs.length > 0 && (
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 max-w-4xl mx-auto"
                    >
                        <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-[#e8efe3] shadow-xs">
                            {tabs.map((tab, idx) => {
                                const isActive = activeTab === idx;
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setActiveTab(idx)}
                                        className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer ${isActive
                                            ? "bg-[#689e24] text-white shadow-sm"
                                            : "text-[#43483e]"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {/* 3. SHOWCASE CONTAINER */}
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
                                <span className="inline-block px-3 py-1 rounded-md bg-[#416900]/15 text-[#416900] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-3.5 sm:mb-4">
                                    {eyebrowBadge}
                                </span>
                            )}

                            <h3 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#000400] tracking-tight leading-[1.2] mb-4">
                                {headlineLine1} {headlineLine2 && <><br className="hidden sm:inline" />{headlineLine2}</>}
                            </h3>

                            <p className="text-sm sm:text-base text-[#43483e] leading-relaxed mb-6 sm:mb-8 max-w-lg font-normal">
                                {description}
                            </p>

                            {/* Feature items with custom icon pills */}
                            {featureList && featureList.length > 0 && (
                                <div className="space-y-4 sm:space-y-5 mb-6">
                                    {featureList.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 sm:gap-3.5">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#acf847] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                                {renderFeatureIcon(item)}
                                            </div>
                                            <div>
                                                <div className="text-xs sm:text-sm font-bold text-[#000400] leading-snug">
                                                    {item.title}
                                                </div>
                                                <div className="text-xs sm:text-[13px] text-[#43483e] leading-relaxed mt-0.5">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Optional Bottom Link CTA */}
                            {linkText && (
                                <a
                                    href={linkHref || "#"}
                                    className="text-xs sm:text-sm font-bold text-[#416900] hover:text-[#284a00] inline-flex items-center gap-1.5 transition-colors mt-2"
                                >
                                    <span>{linkText}</span>
                                    <span>&rarr;</span>
                                </a>
                            )}
                        </div>

                        {/* RIGHT COLUMN: CAMPAIGNS MOCKUP */}
                        <div className="lg:col-span-6 flex items-center justify-center w-full">
                            <div className="w-full bg-[#e5eeff] rounded-2xl sm:rounded-[32px] p-4 sm:p-5 border border-[#d2e4fc] space-y-3.5 sm:space-y-4 shadow-sm">

                                {/* Mockup Header */}
                                <div className="flex items-center justify-between gap-3 px-1 mb-4">
                                    <div className="flex items-center gap-2">
                                        {mockupHeaderIcon ? (
                                            mockupHeaderIcon
                                        ) : mockupHeaderIconSrc ? (
                                            <Image
                                                src={mockupHeaderIconSrc}
                                                alt="Campaigns"
                                                width={16}
                                                height={16}
                                                className="w-4 h-4 object-contain inline mr-1"
                                            />
                                        ) : null}
                                        <h4 className="font-bold text-xs sm:text-sm md:text-base text-[#000400]">
                                            {mockupHeaderTitle}
                                        </h4>
                                    </div>

                                    {mockupHeaderBadge && (
                                        <span className="px-2.5 py-1 rounded-md bg-white text-[#43483e] text-[10px] sm:text-[11px] font-bold font-mono tracking-wider shadow-xs">
                                            {mockupHeaderBadge}
                                        </span>
                                    )}
                                </div>

                                {/* 3 Campaign Cards */}
                                {campaigns && campaigns.length > 0 && (
                                    <div className="space-y-3 sm:space-y-3.5">
                                        {campaigns.map((card, idx) => {
                                            const m1Label = card.metric1Label || metric1DefaultLabel || "Candidates";
                                            const m1Val = card.metric1Value ?? card.prospectsCount ?? card.candidatesCount ?? "-";

                                            const m2Label = card.metric2Label || metric2DefaultLabel || "Replies";
                                            const m2Val = card.metric2Value ?? card.repliesCount ?? "-";

                                            const m3Label = card.metric3Label || metric3DefaultLabel || "Screens";
                                            const m3Val = card.metric3Value ?? card.demosCount ?? card.screensCount ?? "-";

                                            return (
                                                <div
                                                    key={idx}
                                                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 space-y-2.5 sm:space-y-3 shadow-2xs"
                                                >
                                                    {/* Card Top Row */}
                                                    <div className="flex items-start justify-between gap-2">
                                                        <div>
                                                            <h5 className="text-sm sm:text-base md:text-lg font-bold text-[#000400] leading-snug w-full max-w-lg">
                                                                {card.title}
                                                            </h5>
                                                            <p className="text-[11px] sm:text-xs text-[#43483e] font-medium truncate mt-0.5">
                                                                {card.locationAndIndustry}
                                                            </p>
                                                        </div>

                                                        <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#416900]/15 text-[#416900] text-[10px] sm:text-[11px] font-bold">
                                                            {card.badge}
                                                        </span>
                                                    </div>

                                                    {/* Metrics Row */}
                                                    <div className="bg-[#eff4ff] rounded-xl p-2.5 sm:p-3 grid grid-cols-3 divide-x divide-[#e2edfc] text-center">
                                                        <div className="px-1">
                                                            <div className="text-[10px] sm:text-[11px] text-[#43483e] font-medium">
                                                                {m1Label}
                                                            </div>
                                                            <div className="text-xs sm:text-sm font-extrabold text-[#000400] mt-0.5">
                                                                {m1Val}
                                                            </div>
                                                        </div>

                                                        <div className="px-1">
                                                            <div className="text-[10px] sm:text-[11px] text-[#43483e] font-medium">
                                                                {m2Label}
                                                            </div>
                                                            <div className="text-xs sm:text-sm font-extrabold text-[#416900] mt-0.5">
                                                                {m2Val}
                                                            </div>
                                                        </div>

                                                        <div className="px-1">
                                                            <div className="text-[10px] sm:text-[11px] text-[#43483e] font-medium">
                                                                {m3Label}
                                                            </div>
                                                            <div className="text-xs sm:text-sm font-extrabold text-[#000400] mt-0.5">
                                                                {m3Val}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            );
                                        })}
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
