"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const tabs = [
    {
        id: "rewrite",
        label: "Rewrite",
        before: "Hey, saw you work in sales. We do sales software. Wanna chat?",
        after: "Hi {{first_name}}, noticed you're leading the sales team at {{company}}. We've helped similar teams increase reply rates by 40%. Open to a brief chat to share some insights?"
    },
    {
        id: "shorten",
        label: "Shorten",
        before: "I am writing to reach out because I saw your company is growing fast and wanted to know if you might have time for a demo of our platform.",
        after: "Hi {{first_name}}, love what you're building at {{company}}. Quick question: open to seeing how we help scale reply rates?"
    },
    {
        id: "professional",
        label: "Make Professional",
        before: "Yo, check out our tool, it's pretty cool for getting more leads.",
        after: "Hi {{first_name}}, I noticed your strategic growth initiatives at {{company}} and wanted to introduce our enterprise outreach framework."
    }
];

export default function Section5() {
    const [activeTab, setActiveTab] = useState("rewrite");
    const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

    return (
        <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#f1f6eb] flex items-center justify-center">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center w-full">

                {/* Centered Top Sparkle Icon Badge */}
                <motion.div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-[#f7f9fb] border border-white/80 shadow-xs flex items-center justify-center mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Sparkles size={28} className="text-[#406900] stroke-[2]" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#191c1e] tracking-tight leading-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Personalization without starting from scratch.
                </motion.h2>

                {/* Subtitle Description */}
                <motion.p
                    className="text-sm sm:text-base md:text-lg text-[#414a34] leading-relaxed max-w-[700px] mx-auto mb-10 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                    Use NetworkUp.ai to instantly rewrite, shorten, or adjust the tone of your messages. Generate personalized icebreakers based on a prospect's recent activity or company news.
                </motion.p>

                {/* Comparison Card Widget */}
                <motion.div
                    className="w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl border border-[#e0e3e5] shadow-md sm:shadow-lg p-6 sm:p-8 flex flex-col gap-6 text-left"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 border border-[#e0e3e5] rounded-t-2xl">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer select-none
                                        bg-[#eceef0] text-[#191c1e] shadow-2xs
                                        `}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="pt-5 flex flex-col sm:flex-row items-start justify-between w-full">
                        <div className="w-full sm:w-[44%] text-left">
                            <p className="text-xs sm:text-sm text-[#414a34] line-through leading-relaxed select-none">
                                {currentTab.before}
                            </p>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-[#f7f9fb] border border-[#e0e3e5] flex items-center justify-center shrink-0 text-[#414a34] shadow-2xs select-none z-10">
                            <ArrowRight size={14} className="stroke-[2.2]" />
                        </div>

                        {/* Rewritten AI Output (After) with Green Vertical Line */}
                        <div className="w-full sm:w-[50%] border-l-2 border-[#406900] pl-3 text-left">
                            <p className="text-xs sm:text-sm text-[#191c1e] leading-relaxed font-normal">
                                {currentTab.after.split(/(\{\{[a-zA-Z0-9_]+\}\})/).map((part, i) => {
                                    if (part.startsWith("{{") && part.endsWith("}}")) {
                                        return (
                                            <span key={i} className="font-semibold text-gray-900">
                                                {part}
                                            </span>
                                        );
                                    }
                                    return <span key={i}>{part}</span>;
                                })}
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
