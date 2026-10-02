"use client";

import React from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export type FeatureStatus = "included" | "partial" | "not-available" | boolean;

export interface ComparisonRow {
    feature: string;
    networkUp: FeatureStatus;
    competitor: FeatureStatus;
}

export interface OverlapItems {
    left: string[];
    right: string[];
}

export interface ComparisonTemplateProps {
    competitorName: string;
    overlapTitle?: string;
    overlapItems?: OverlapItems;
    comparisonRows?: ComparisonRow[];
}

/** Default 2-column overlap data (SendPilot baseline) */
export const defaultOverlapItems: OverlapItems = {
    left: [
        "Multi-channel outreach",
        "Automated multi-step sequences",
        "LinkedIn campaign automation",
    ],
    right: [
        "Lead enrichment & ICP scoring",
        "Unified inbox & conversation management",
        "CRM & workflow integrations",
    ],
};

/** Default comparison table rows (SendPilot baseline) */
export const defaultComparisonRows: ComparisonRow[] = [
    {
        feature: "LinkedIn Outreach Automation",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Multi-step Campaign Builder",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Conditional / Branching Workflows",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "AI Outreach Message Writer",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "AI Lead Scoring / ICP Fit",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Real-time Buying Signal Detection",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "AI Prospect / Company Research",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "Lead Discovery & Enrichment",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Lead Database / CRM",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Unified LinkedIn Inbox",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "AI Conversation Analysis",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "AI Follow-up Recommendations",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "AI Campaign Optimization",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "AI Campaign Health Monitoring",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "Predictive Campaign Simulation",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "AI Help / Outreach Assistant",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "Campaign A/B Testing & Analytics",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "Multi-account Management",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Team / Workspace Collaboration",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "CRM / Zapier / API Integrations",
        networkUp: "included",
        competitor: "included",
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

export default function Template({
    competitorName = "SendPilot",
    overlapTitle,
    overlapItems = defaultOverlapItems,
    comparisonRows = defaultComparisonRows,
}: ComparisonTemplateProps) {
    const finalOverlapTitle = overlapTitle || `Where NetworkUp and ${competitorName} overlap`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ItemPage",
                "@id": `https://networkup.io/compare/${competitorName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}#comparison`,
                "name": `NetworkUp.io vs ${competitorName} Comparison`,
                "description": `Comprehensive feature and capability comparison between NetworkUp.io and ${competitorName} for LinkedIn outreach automation and B2B lead generation.`,
                "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "NetworkUp.io",
                    "applicationCategory": "BusinessApplication, SalesAutomationSoftware",
                    "operatingSystem": "All (Cloud-Based)",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD",
                        "description": "Free Trial Available"
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://networkup.io/compare/${competitorName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://networkup.io"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Compare",
                        "item": "https://networkup.io/compare/compare-all"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": `NetworkUp vs ${competitorName}`,
                        "item": `https://networkup.io/compare/${competitorName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": `https://networkup.io/compare/${competitorName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}#faq`,
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `Why choose NetworkUp over ${competitorName}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `NetworkUp provides cloud-native LinkedIn automation with dedicated residential proxies, predictive campaign simulations, AI intent-based conversation routing, and unified multi-account management that outperforms ${competitorName} in scale and account safety.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `What are the key differences between NetworkUp and ${competitorName}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `While ${competitorName} offers basic outreach sequences, NetworkUp adds predictive campaign simulation, real-time buying signal detection, AI prospect research, unified multi-account Convobox messaging, and automated 24/7 campaign health monitoring.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `Is NetworkUp safer for my LinkedIn profile than ${competitorName}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Yes. NetworkUp runs entirely in the cloud with isolated residential proxies, randomized human action delays, and proactive health monitoring, protecting your profile from detection risks common in extension-based tools.`
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="w-full bg-[#fafdf8]/50 min-h-screen relative overflow-hidden py-7 sm:py-10 px-4 sm:px-6 lg:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Top-Right Ambient Glow Background */}
            <div
                className="w-full pointer-events-none py-5 px-10 "
                style={{
                    background:
                        "radial-gradient(circle at bottom right, rgba(163, 255, 18, 0.18) 0%, rgba(140, 197, 34, 0.04) 25%, transparent 75%)",
                }}
            >

                {/* 1. HERO HEADER SECTION (Hardcoded structure) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-[55px] font-black font-bold text-[#000400] tracking-tight leading-[1.12]">
                        NetworkUp.io vs {competitorName}:
                        <br />
                        <span className="text-[#416900]">The Enterprise Choice</span>
                    </h1>
                    <p className="mt-5 text-sm sm:text-base md:text-lg text-[#43483e] font-normal leading-relaxed max-w-2xl mx-auto">
                        Discover why serious data management teams and high-growth enterprises are switching to the robust, cloud-native architecture of NetworkUp.io over standard extension-based tools.
                    </p>
                </motion.div>
            </div>
            <div className="w-full max-w-9xl mx-auto relative flex flex-col items-center">

                {/* 2. LIGHT GREEN OVERLAP SECTION (Dynamic from Props) */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full mt-6 sm:mt-8 bg-[#8bfa00]/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs hover:border-[#71EB34] transition-colors"
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] text-center tracking-tight mb-6">
                        {finalOverlapTitle}
                    </h2>

                    <div className="bg-white w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200/60 shadow-xs">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 lg:gap-x-12">
                            {/* Left Column */}
                            <div className="space-y-3.5 sm:space-y-4">
                                {overlapItems.left.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#406900] shrink-0">
                                            <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                                        </div>
                                        <span className="text-sm sm:text-md font-medium text-[#414a34]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Right Column */}
                            <div className="space-y-3.5 sm:space-y-4">
                                {overlapItems.right.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#406900] shrink-0">
                                            <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                                        </div>
                                        <span className="text-sm sm:text-md font-medium text-[#414a34]]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. COMPARISON TABLE SECTION (Dynamic from Props) */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="w-full mt-12 sm:mt-16 px-10 rounded-3xl overflow-hidden shadow-xs hover:border-[#71EB34] transition-colors"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-6 px-6 sm:px-8 py-4 sm:py-5 border border-[#e2e8f0] text-sm sm:text-lg font-bold text-[#000400] bg-[#eff4ff] rounded-t-3xl">
                        <div className="col-span-2 text-left pl-10 text-[#000400]">Feature</div>
                        <div className="col-span-2 text-center text-[#000400]">NetworkUp</div>
                        <div className="col-span-2 text-center text-[#43483e]">{competitorName}</div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-gray-200/70 bg-white">
                        {comparisonRows.map((row, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-6 px-8 sm:px-12 py-4 sm:py-6 items-center border border-[#e2e8f0] hover:bg-[#f7fcf2]/60 transition-colors"
                            >
                                <div className="col-span-2 text-left text-sm sm:text-lg font-medium text-[#0b1c30] pr-2">
                                    {row.feature}
                                </div>
                                <div className="col-span-2 flex justify-center items-center">
                                    <StatusIcon status={row.networkUp} />
                                </div>
                                <div className="col-span-2 flex justify-center items-center">
                                    <StatusIcon status={row.competitor} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Table Footer / Legend */}
                    <div className="flex flex-wrap items-center justify-start gap-5 md:gap-14 px-6 sm:px-8 py-4 bg-[#efefef] border border-[#e2e8f0] text-[11px] sm:text-xs text-[#73767a] font-medium rounded-b-3xl">
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
                </motion.div>

                {/* 4. WHERE NETWORKUP STANDS OUT SECTION (Hardcoded) */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full mt-10 sm:mt-12 text-center py-10 px-6 sm:px-8 md:px-10"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#191c1e] tracking-tight leading-tight">
                        So, where does NetworkUp stand out?
                    </h2>
                    <p className="mt-2.5 text-xs sm:text-sm md:text-[16px] text-[#414a34] font-normal leading-relaxed">
                        Engineered for depth, context, and intelligent workflows.
                    </p>

                    {/* 2x2 Stand Out Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
                        {standOutCards.map((card, idx) => {
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                                    className="bg-white rounded-3xl p-6 sm:p-8 border border-[#c0caae]/30 hover:border-[#c0caae] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Title */}
                                        <h3 className="text-base sm:text-lg font-bold text-[#191c1e] tracking-tight leading-snug">
                                            {card.title}
                                        </h3>

                                        {/* Tagline */}
                                        <p className="text-sm sm:text-md font-semibold text-[#1c2124] mt-1.5 leading-snug">
                                            {card.tagline}
                                        </p>

                                        {/* Description */}
                                        <p className="text-xs sm:text-sm text-[#414a34] font-normal leading-relaxed mt-2.5">
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
