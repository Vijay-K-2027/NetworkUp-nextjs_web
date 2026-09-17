"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleCheck, ArrowRight } from "lucide-react";

export interface RepProfileItem {
    initials: string;
    avatarBg?: string;
    nameAndRole: string;
    teamSubtitle: string;
    statText: string;
}

export interface Section4TemplateProps {
    mainHeading?: string | React.ReactNode;
    mainSubtitle?: string | React.ReactNode;

    badgeText?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;

    checklist?: string[];

    linkText?: string;
    linkHref?: string;

    cardTitle?: string;
    cardBadgeText?: string;
    profiles?: RepProfileItem[];

    containerClass?: string;
}

export const defaultProfiles: RepProfileItem[] = [
    {
        initials: "MR",
        avatarBg: "bg-black",
        nameAndRole: "Marcus Reyes (VP Sales)",
        teamSubtitle: "North America Enterprise",
        statText: "48 active prospects",
    },
    {
        initials: "SL",
        avatarBg: "bg-[#416900]",
        nameAndRole: "Sarah Lin (SDR Lead)",
        teamSubtitle: "EMEA Mid-Market",
        statText: "32 active prospects",
    },
    {
        initials: "DT",
        avatarBg: "bg-black",
        nameAndRole: "David Thorne (AE)",
        teamSubtitle: "Strategic Accounts",
        statText: "21 active prospects",
    },
];

export const defaultSection4Props: Section4TemplateProps = {
    mainHeading: "Built for Modern Multi-Rep Sales Teams",
    mainSubtitle:
        "Discover prospects, coordinate outreach, manage conversations, and measure pipeline performance from one connected workspace.",

    badgeText: "CONSOLE VIEW",
    title: "Manage Multiple LinkedIn Accounts From One Workspace",
    description:
        "Give sales leaders a centralized view of team accounts, campaigns, activity, and performance.",

    checklist: [
        "Centralized campaign management",
        "Team-level performance visibility",
        "Role-based access",
        "Shared lead and prospect workflows",
    ],

    linkText: "See team orchestration in action",
    linkHref: "#",

    cardTitle: "Assigned Rep Profiles",
    cardBadgeText: "8/10 SEATS ACTIVE",
    profiles: defaultProfiles,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Section4Template(props: Section4TemplateProps) {
    const {
        mainHeading = defaultSection4Props.mainHeading,
        mainSubtitle = defaultSection4Props.mainSubtitle,

        badgeText = defaultSection4Props.badgeText,
        title = defaultSection4Props.title,
        description = defaultSection4Props.description,

        checklist = defaultSection4Props.checklist,

        linkText = defaultSection4Props.linkText,
        linkHref = defaultSection4Props.linkHref,

        cardTitle = defaultSection4Props.cardTitle,
        cardBadgeText = defaultSection4Props.cardBadgeText,
        profiles = defaultSection4Props.profiles,

        containerClass = "max-w-7xl mx-auto",
    } = props;

    return (
        <section className="w-full py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className={containerClass}>

                {/* 1. TOP SECTION HEADER */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#000400] tracking-tight leading-[1.18]">
                        {mainHeading}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#43483e] mt-3.5 sm:mt-4 leading-relaxed font-normal px-8">
                        {mainSubtitle}
                    </p>
                </motion.div>

                {/* 2. INNER SHOWCASE CONTAINER */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="p-6 sm:p-10 lg:p-14"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                        {/* LEFT COLUMN: FEATURE OVERVIEW */}
                        <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
                            {badgeText && (
                                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#416900] mb-2.5 sm:mb-3">
                                    {badgeText}
                                </span>
                            )}

                            <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#000400] tracking-tight leading-[1.2] mb-3 sm:mb-4">
                                {title}
                            </h3>

                            <p className="text-sm sm:text-base text-[#43483e] leading-relaxed mb-6 max-w-lg">
                                {description}
                            </p>

                            {/* Checklist */}
                            {checklist && checklist.length > 0 && (
                                <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
                                    {checklist.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#000400]"
                                        >
                                            <CircleCheck className="w-4 h-4 text-[#416900] shrink-0 stroke-[2]" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Action Link */}
                            {linkText && (
                                <Link
                                    href={linkHref || "#"}
                                    className="text-xs sm:text-sm font-bold text-[#416900] hover:text-[#284a00] inline-flex items-center gap-1.5 transition-colors group"
                                >
                                    <span>{linkText}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            )}
                        </div>

                        {/* RIGHT COLUMN: REPS PROFILES CARD MOCKUP */}
                        <div className="lg:col-span-6 flex items-center justify-center w-full">
                            <div className="w-full bg-white rounded-2xl sm:rounded-[28px] p-5 sm:p-7 border border-[#e8efe3] shadow-lg shadow-slate-200/50 flex flex-col space-y-3 sm:space-y-3.5">

                                {/* Card Header */}
                                <div className="flex items-center justify-between gap-3 mb-4">
                                    <h4 className="font-bold text-base sm:text-lg text-[#000400]">
                                        {cardTitle}
                                    </h4>

                                    {cardBadgeText && (
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#416900]/10 text-[#416900] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                                            {cardBadgeText}
                                        </span>
                                    )}
                                </div>

                                {/* Profiles Rows */}
                                {profiles && profiles.length > 0 && (
                                    <div className="space-y-3">
                                        {profiles.map((p, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-[#eff4ff] rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center justify-between border border-[#eaf0fc] gap-3"
                                            >
                                                <div className="flex items-center gap-3 truncate">
                                                    <div
                                                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${p.avatarBg || "bg-black"
                                                            } text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0`}
                                                    >
                                                        {p.initials}
                                                    </div>
                                                    <div className="truncate">
                                                        <div className="text-xs sm:text-sm font-bold text-[#000400] leading-snug truncate">
                                                            {p.nameAndRole}
                                                        </div>
                                                        <div className="text-[11px] sm:text-xs text-[#43483e] font-medium truncate mt-0.5">
                                                            {p.teamSubtitle}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-xs sm:text-sm font-bold text-[#416900] shrink-0 font-medium">
                                                    {p.statText}
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
