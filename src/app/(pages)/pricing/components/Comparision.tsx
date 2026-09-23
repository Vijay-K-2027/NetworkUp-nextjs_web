"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Star, Tag, Monitor, Lightbulb, MessageSquare, Target,
    RefreshCw, BarChart3, Users, Puzzle, UserCheck, Gift, Check
} from "lucide-react";

const headings = [
    "HEYREACH",
    "EXPANDI",
    "DRIPIFY",
    "LINKED HELPER",
    "MEET ALFRED",
    "WE-CONNECT",
    "WAALAXY"
];

const comparisons = [
    {
        feature: "Pricing",
        icon: Tag,
        networkUp: "Free → $39/mo",
        values: ["$$$", "$$$", "$$", "$$", "$$", "$$", "$$"]
    },
    {
        feature: "Runs locally (your IP)",
        icon: Monitor,
        networkUp: "Yes",
        values: ["No", "No", "No", "Yes", "No", "No", "No"]
    },
    {
        feature: "Al-powered lead discovery",
        icon: Lightbulb,
        networkUp: "Yes",
        values: ["No", "Partial", "No", "No", "Partial", "No", "Partial"]
    },
    {
        feature: "Smart Al messaging (0% spam risk)",
        icon: MessageSquare,
        networkUp: "Yes",
        values: ["No", "No", "Partial", "No", "No", "No", "No"]
    },
    {
        feature: "Lead scoring / ICP fit",
        icon: Target,
        networkUp: "Yes",
        values: ["No", "No", "Partial", "No", "No", "No", "No"]
    },
    {
        feature: "Multi-account auto-rotation",
        icon: RefreshCw,
        networkUp: "Yes",
        values: ["Yes", "Partial", "No", "No", "No", "Yes", "No"]
    },
    {
        feature: "Advanced analytics & reports",
        icon: BarChart3,
        networkUp: "Yes",
        values: ["Partial", "Partial", "Partial", "No", "Partial", "Partial", "No"]
    },
    {
        feature: "Team collaboration",
        icon: Users,
        networkUp: "Yes",
        values: ["Partial", "Yes", "Partial", "No", "Yes", "Yes", "Partial"]
    },
    {
        feature: "CRM & Zapier integration",
        icon: Puzzle,
        networkUp: "Yes",
        values: ["Yes", "Yes", "Partial", "Yes", "Partial", "Partial", "Yes"]
    },
    {
        feature: "Dedicated account manager",
        icon: UserCheck,
        networkUp: "Yes",
        values: ["No", "No", "No", "No", "No", "No", "Partial"]
    },
    {
        feature: "Free to start — no card",
        icon: Gift,
        networkUp: "Yes",
        values: ["No", "No", "No", "No", "No", "No", "Yes"]
    }
];

export default function Comparision() {
    return (
        <section className="w-full bg-[#fafcf7] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <motion.div
                    className="flex flex-col items-center justify-center gap-4 mb-14 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="uppercase text-[#5e9600] tracking-widest font-extrabold text-xs">
                        alternatives
                    </span>
                    <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight max-w-7xl leading-tight">
                        How NetworkUp compares to other LinkedIn automation tools
                    </h2>
                    <p className="mt-3 text-[#223500] text-base sm:text-lg max-w-3xl leading-relaxed">
                        Most tools send messages from the cloud. NetworkUp is a local agent that finds, scores and reaches your buyers from your own machine.
                    </p>
                </motion.div>

                {/* Table Container */}
                <motion.div
                    className="w-full bg-[#0c1017] rounded-3xl border border-zinc-800/80 shadow-2xl p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <table className="min-w-[1190px] w-full text-left border-separate border-spacing-0 table-fixed select-none">
                        {/* Table Header Row */}
                        <thead>
                            <tr>
                                {/* Features Column Header */}
                                <th className="w-[280px] pl-4 py-4 shrink-0 text-left align-middle font-normal border-b border-zinc-800/80">
                                    <div className="flex items-center gap-2.5">
                                        <Star size={16} className="text-[#7ceb2a] " />
                                        <span className="text-[#7ceb2a] font-bold text-xs tracking-wider uppercase">Features</span>
                                    </div>
                                </th>

                                {/* NetworkUp Column Header */}
                                <th className="w-[160px] py-4 rounded-t-2xl sm:rounded-t-3xl border-t border-x border-[#7ceb2a] bg-[#7ceb2a]/5 shrink-0 text-center align-middle font-normal">
                                    <span className="text-[#7ceb2a] font-bold text-xs tracking-widest block">NETWORKUP.IO</span>
                                </th>

                                {/* Competitor Column Headers */}
                                {headings.map((comp) => (
                                    <th key={comp} className="w-[110px] text-center shrink-0 px-2 py-4 align-middle font-normal border-b border-zinc-800/80">
                                        <span className="text-[#9ca3af] font-bold text-[10px] sm:text-xs tracking-wider uppercase leading-tight block">
                                            {comp}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Table Body Rows */}
                        <tbody>
                            {comparisons.map((row, index) => {
                                const isLast = index === comparisons.length - 1;
                                return (
                                    <motion.tr
                                        key={index}
                                        className="hover:bg-white/[0.02] transition-colors"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
                                    >
                                        {/* Feature Name */}
                                        <td className={`w-[280px] pl-4 py-4 shrink-0 align-middle ${isLast ? "" : "border-b border-zinc-800/50"}`}>
                                            <div className="flex items-center gap-3">
                                                <row.icon size={16} className="text-[#7ceb2a] animate-pulse" />
                                                <span className="text-white text-sm font-semibold tracking-wide">{row.feature}</span>
                                            </div>
                                        </td>

                                        {/* NetworkUp Value */}
                                        <td className={`w-[160px] py-4 border-x border-[#7ceb2a] bg-[#7ceb2a]/5 shrink-0 align-middle text-center ${isLast ? "border-b rounded-b-2xl sm:rounded-b-3xl" : ""}`}>
                                            <div className="flex items-center justify-center">
                                                {row.networkUp === "Yes" ? (
                                                    <Check size={20} className="text-[#7ceb2a] stroke-[3]" />
                                                ) : (
                                                    <span className="text-[#7ceb2a] text-sm font-bold">{row.networkUp}</span>
                                                )}
                                            </div>
                                        </td>

                                        {/* Competitor Values */}
                                        {row.values.map((val, idx) => (
                                            <td key={idx} className={`w-[110px] shrink-0 py-4 align-middle text-center ${isLast ? "" : "border-b border-zinc-800/50"}`}>
                                                <div className="flex items-center justify-center">
                                                    {(() => {
                                                        if (val === "Yes") {
                                                            return <Check size={18} className="text-[#7ceb2a] stroke-[2.5]" />;
                                                        }
                                                        if (val === "No") {
                                                            return <span className="text-[#9ca3af] font-semibold text-lg select-none">—</span>;
                                                        }
                                                        if (val === "Partial") {
                                                            return <span className="text-[#9ca3af] font-bold text-md select-none">~</span>;
                                                        }
                                                        return <span className="text-[#9ca3af] text-sm font-medium">{val}</span>;
                                                    })()}
                                                </div>
                                            </td>
                                        ))}
                                    </motion.tr>
                                );
                            })}
                        </tbody>
                    </table>
                </motion.div>

                {/* Table Legend */}
                <div className="flex flex-row flex-wrap items-center justify-between gap-x-10 gap-y-3 w-full max-w-4xl mx-auto mt-10 text-[#243800] text-xs sm:text-sm font-semibold">
                    <span className="flex items-center gap-1.5">
                        <Check size={16} className="text-[#243800]" /> included
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-[#243800] text-lg font-bold">—</span> not available
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-[#243800] text-md font-bold">~</span> partial or paid add-on
                    </span>
                </div>

                <div className="text-center text-[10px] sm:text-xs text-[#243800] font-medium mt-6">
                    Based on public pricing pages, July 2024. Click a competitor's name for the full comparison.
                </div>
            </div>
        </section>
    );
}