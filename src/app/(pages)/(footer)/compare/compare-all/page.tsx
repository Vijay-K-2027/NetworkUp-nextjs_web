"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export type FeatureStatus = "included" | "partial" | "not-available" | boolean;

export interface CompetitorComparisonRow {
    feature: string;
    networkUp: FeatureStatus;
    sendpilot: FeatureStatus;
    waalaxy: FeatureStatus;
    dripify: FeatureStatus;
    expandi: FeatureStatus;
    reachy: FeatureStatus;
    heyreach: FeatureStatus;
    apollo: FeatureStatus;
    lemlist: FeatureStatus;
    salesNavigator: FeatureStatus;
}

const comparisonData: CompetitorComparisonRow[] = [
    {
        feature: "LinkedIn Outreach Automation",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "included",
        dripify: "included",
        expandi: "included",
        reachy: "included",
        heyreach: "included",
        apollo: "partial",
        lemlist: "included",
        salesNavigator: "not-available",
    },
    {
        feature: "Multi-step Campaign Builder",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "included",
        dripify: "included",
        expandi: "included",
        reachy: "included",
        heyreach: "included",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "not-available",
    },
    {
        feature: "Conditional / Branching Workflows",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "partial",
        dripify: "included",
        expandi: "included",
        reachy: "partial",
        heyreach: "included",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "not-available",
    },
    {
        feature: "AI Outreach Message Writer",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "included",
        dripify: "included",
        expandi: "included",
        reachy: "included",
        heyreach: "partial",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "included",
    },
    {
        feature: "AI Lead Scoring / ICP Fit",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "partial",
        dripify: "not-available",
        expandi: "partial",
        reachy: "included",
        heyreach: "included",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "partial",
    },
    {
        feature: "Real-time Buying Signal Detection",
        networkUp: "included",
        sendpilot: "partial",
        waalaxy: "not-available",
        dripify: "not-available",
        expandi: "partial",
        reachy: "included",
        heyreach: "partial",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "included",
    },
    {
        feature: "AI Prospect / Company Research",
        networkUp: "included",
        sendpilot: "partial",
        waalaxy: "not-available",
        dripify: "not-available",
        expandi: "not-available",
        reachy: "partial",
        heyreach: "partial",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "included",
    },
    {
        feature: "Lead Discovery & Enrichment",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "included",
        dripify: "included",
        expandi: "included",
        reachy: "included",
        heyreach: "included",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "included",
    },
    {
        feature: "Lead Database / CRM",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "partial",
        dripify: "partial",
        expandi: "partial",
        reachy: "partial",
        heyreach: "partial",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "partial",
    },
    {
        feature: "Unified LinkedIn Inbox",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "partial",
        dripify: "included",
        expandi: "included",
        reachy: "included",
        heyreach: "included",
        apollo: "not-available",
        lemlist: "included",
        salesNavigator: "partial",
    },
    {
        feature: "AI Conversation Analysis",
        networkUp: "included",
        sendpilot: "partial",
        waalaxy: "partial",
        dripify: "not-available",
        expandi: "not-available",
        reachy: "partial",
        heyreach: "partial",
        apollo: "partial",
        lemlist: "partial",
        salesNavigator: "not-available",
    },
    {
        feature: "AI Follow-up Recommendations",
        networkUp: "included",
        sendpilot: "partial",
        waalaxy: "partial",
        dripify: "partial",
        expandi: "partial",
        reachy: "partial",
        heyreach: "partial",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "partial",
    },
    {
        feature: "AI Campaign Optimization",
        networkUp: "included",
        sendpilot: "partial",
        waalaxy: "partial",
        dripify: "partial",
        expandi: "partial",
        reachy: "partial",
        heyreach: "partial",
        apollo: "partial",
        lemlist: "partial",
        salesNavigator: "not-available",
    },
    {
        feature: "AI Campaign Health Monitoring",
        networkUp: "included",
        sendpilot: "not-available",
        waalaxy: "not-available",
        dripify: "not-available",
        expandi: "not-available",
        reachy: "not-available",
        heyreach: "partial",
        apollo: "partial",
        lemlist: "partial",
        salesNavigator: "not-available",
    },
    {
        feature: "Predictive Campaign Simulation",
        networkUp: "included",
        sendpilot: "not-available",
        waalaxy: "not-available",
        dripify: "not-available",
        expandi: "not-available",
        reachy: "not-available",
        heyreach: "not-available",
        apollo: "not-available",
        lemlist: "partial",
        salesNavigator: "not-available",
    },
    {
        feature: "AI Help / Outreach Assistant",
        networkUp: "included",
        sendpilot: "not-available",
        waalaxy: "partial",
        dripify: "not-available",
        expandi: "not-available",
        reachy: "not-available",
        heyreach: "partial",
        apollo: "partial",
        lemlist: "included",
        salesNavigator: "partial",
    },
    {
        feature: "Campaign A/B Testing & Analytics",
        networkUp: "included",
        sendpilot: "partial",
        waalaxy: "partial",
        dripify: "included",
        expandi: "included",
        reachy: "included",
        heyreach: "included",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "partial",
    },
    {
        feature: "Multi-account Management",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "included",
        dripify: "partial",
        expandi: "included",
        reachy: "included",
        heyreach: "included",
        apollo: "partial",
        lemlist: "included",
        salesNavigator: "partial",
    },
    {
        feature: "Team / Workspace Collaboration",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "partial",
        dripify: "included",
        expandi: "included",
        reachy: "included",
        heyreach: "included",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "included",
    },
    {
        feature: "CRM / Zapier / API Integrations",
        networkUp: "included",
        sendpilot: "included",
        waalaxy: "included",
        dripify: "partial",
        expandi: "included",
        reachy: "included",
        heyreach: "included",
        apollo: "included",
        lemlist: "included",
        salesNavigator: "partial",
    },
];

/** Hard-coded Stand Out Features */
const standOutCards = [
    {
        title: "AI Campaign Optimization",
        tagline: "Launch smarter campaigns, not just automated ones.",
        description:
            "NetworkUp analyzes campaign performance, identifies weak points, and recommends improvements to messaging, targeting, timing, and sequencing.",
    },
    {
        title: "Relationship Intelligence",
        tagline: "Understand every prospect beyond their profile.",
        description:
            "NetworkUp combines engagement history, prospect signals, and conversation context to identify intent and recommend the next best action.",
    },
    {
        title: "Predictive Campaign Simulator",
        tagline: "See potential campaign outcomes before you launch.",
        description:
            "Use historical outreach data and AI-driven insights to evaluate campaign performance and make better decisions before sending your first message.",
    },
    {
        title: "AI Health Monitoring",
        tagline: "Keep campaigns healthy while they run.",
        description:
            "NetworkUp monitors campaign performance and account activity, surfaces potential risks, & recommends corrective actions before problems impact results.",
    },
];

function StatusIcon({ status }: { status: FeatureStatus }) {
    if (status === "included" || status === true) {
        return (
            <div className="w-5 h-5 rounded-full bg-[#6eb600] flex items-center justify-center text-white shadow-2xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
        );
    }
    if (status === "partial") {
        return (
            <svg className="w-5 h-5 text-[#ffc531]" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M10 2 A8 8 0 0 1 10 18 Z" fill="currentColor" />
            </svg>
        );
    }
    return <span className="text-[#afafaf] font-medium text-base select-none">—</span>;
}

export default function CompareAllPage() {
    return (
        <div className="w-full bg-[#fafdf8]/50 min-h-screen relative overflow-hidden py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
            {/* Top-Right Ambient Glow Background */}
            <div
                className="w-full pointer-events-none py-4 sm:py-6 px-3 sm:px-6 md:px-10"
                style={{
                    background:
                        "radial-gradient(circle at bottom right, rgba(163, 255, 18, 0.18) 0%, rgba(140, 197, 34, 0.04) 25%, transparent 75%)",
                }}
            >
                {/* 1. HERO HEADER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black font-bold text-[#000400] tracking-tight leading-[1.15]">
                        NetworkUp vs. Leading Outreach Platforms
                    </h1>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#43483e] font-normal leading-relaxed max-w-3xl mx-auto">
                        See what makes NetworkUp more intelligent, connected, and built for modern outreach.
                    </p>
                </motion.div>
            </div>

            <div className="w-full max-w-[1440px] mx-auto relative flex flex-col items-center">
                {/* 2. MULTI-COMPETITOR COMPARISON TABLE */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="w-full mt-6 sm:mt-10 px-0 sm:px-2 md:px-4 lg:px-6"
                >
                    <div className="w-full overflow-x-auto rounded-2xl sm:rounded-3xl border border-[#e2e8f0] shadow-xs hover:border-[#71EB34] transition-colors">
                        <div className="min-w-[1100px] w-full">
                            {/* Table Header */}
                            <div className="grid grid-cols-[minmax(240px,1.6fr)_repeat(10,minmax(85px,1fr))] px-4 sm:px-6 py-3.5 sm:py-5 border-b border-[#e2e8f0] text-xs sm:text-[13px] md:text-sm font-bold bg-[#eff4ff]">
                                <div className="text-left pl-2 sm:pl-4 text-[#000400]">
                                    Feature
                                </div>
                                <div className="text-center text-[#000400] font-extrabold">NetworkUp</div>
                                <div className="text-center text-[#43483e]">Sendpilot</div>
                                <div className="text-center text-[#43483e]">Waalaxy</div>
                                <div className="text-center text-[#43483e]">Dripify</div>
                                <div className="text-center text-[#43483e]">Expandi</div>
                                <div className="text-center text-[#43483e]">Reachy</div>
                                <div className="text-center text-[#43483e]">HeyReach</div>
                                <div className="text-center text-[#43483e]">Apollo.io</div>
                                <div className="text-center text-[#43483e]">Lemlist</div>
                                <div className="text-center text-[#43483e]">Sales Navigator</div>
                            </div>

                            {/* Table Rows */}
                            <div className="divide-y divide-gray-200/70 bg-white">
                                {comparisonData.map((row, idx) => (
                                    <div
                                        key={idx}
                                        className="grid grid-cols-[minmax(240px,1.6fr)_repeat(10,minmax(85px,1fr))] px-4 sm:px-6 py-3.5 sm:py-4 items-center hover:bg-[#f7fcf2]/60 transition-colors"
                                    >
                                        <div className="text-left pl-2 sm:pl-4 text-xs sm:text-[13px] md:text-sm font-medium text-[#0b1c30] pr-2">
                                            {row.feature}
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.networkUp} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.sendpilot} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.waalaxy} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.dripify} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.expandi} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.reachy} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.heyreach} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.apollo} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.lemlist} />
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <StatusIcon status={row.salesNavigator} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Table Footer / Legend */}
                            <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-8 md:gap-14 px-4 sm:px-8 py-3.5 sm:py-4 bg-[#efefef] border-t border-[#e2e8f0] text-[11px] sm:text-xs text-[#73767a] font-medium">
                                <div className="flex items-center gap-2">
                                    <StatusIcon status="included" />
                                    <span>Included</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <StatusIcon status="partial" />
                                    <span>Partially available / limited / plan-dependent</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <StatusIcon status="not-available" />
                                    <span>Not publicly listed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. WHERE NETWORKUP STANDS OUT SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full mt-10 sm:mt-16 text-center py-6 sm:py-10 px-3 sm:px-6 md:px-10"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#191c1e] tracking-tight leading-tight">
                        So, where does NetworkUp stand out?
                    </h2>
                    <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-base text-[#414a34] font-normal leading-relaxed">
                        Engineered for depth, context, and intelligent workflows.
                    </p>

                    {/* 2x2 Stand Out Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10 text-left max-w-6xl mx-auto">
                        {standOutCards.map((card, idx) => {
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                                    className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-[#c0caae]/30 hover:border-[#c0caae] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Title */}
                                        <h3 className="text-base sm:text-lg font-bold text-[#191c1e] tracking-tight leading-snug">
                                            {card.title}
                                        </h3>

                                        {/* Tagline */}
                                        <p className="text-xs sm:text-sm md:text-[15px] font-semibold text-[#1c2124] mt-1.5 leading-snug">
                                            {card.tagline}
                                        </p>

                                        {/* Description */}
                                        <p className="text-xs sm:text-sm text-[#414a34] font-normal leading-relaxed mt-2 sm:mt-2.5">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
