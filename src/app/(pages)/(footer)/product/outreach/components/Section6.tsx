"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Mail, CornerUpLeft, GitFork, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Section6() {
    return (
        <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#f7f9fb] flex items-center justify-center">
            <div className="max-w-9xl mx-auto flex flex-col items-center justify-center text-center w-full">

                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center justify-center max-w-3xl mb-10 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191c1e] tracking-tight leading-tight">
                        Smart Outreach Sequences
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#414a34] leading-relaxed mt-4 max-w-3xl">
                        Design multi-touch campaigns with conditional logic. Control the timing of every interaction and automatically stop sequences when a prospect replies.
                    </p>
                </motion.div>

                {/* Top Interactive Workflow Diagram Card */}
                <motion.div
                    className="w-full bg-[#f7f9fb] border border-[#e0e3e5] rounded-[28px] sm:rounded-3xl p-6 sm:p-10 lg:p-14 flex flex-col items-center justify-center gap-10 shadow-xs"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                    {/* Workflow Connecting Diagram (Cards + Connecting Line & Badges) */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl py-4">

                        <div className="hidden md:block absolute left-24 right-24 top-1/2 -translate-y-1/2 h-[2px] bg-[#93ab87]/40 z-0" />

                        <div className="relative z-10 bg-[#f7f9fb] border border-[#e0e3e5] rounded-2xl p-6 w-48 sm:w-52 flex flex-col items-center justify-center text-center shadow-xs transition-transform duration-300 hover:scale-[1.02]">
                            <div className="w-10 h-10 rounded-full bg-[#eceef0] flex items-center justify-center mb-3 text-[#191c1e]">
                                <UserPlus size={18} className="stroke-[2.2]" />
                            </div>
                            <h4 className="font-bold text-base text-[#191c1e] leading-tight">
                                Connect
                            </h4>
                            <span className="text-xs text-[#414a34] font-medium mt-1">
                                Day 1
                            </span>
                        </div>

                        <div className="relative z-10 my-3 md:my-0">
                            <div className="block md:hidden w-[2px] h-6 bg-[#93ab87]/40 mx-auto" />
                            <div className="bg-[#f7f9fb] border border-[#e0e3e5] text-[#414a34] text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-2xs whitespace-nowrap select-none">
                                Wait 3 Days
                            </div>
                            <div className="block md:hidden w-[2px] h-6 bg-[#93ab87]/40 mx-auto" />
                        </div>

                        <div className="relative z-10 bg-white border border-gray-200/90 rounded-2xl p-6 w-52 sm:w-56 flex flex-col items-center justify-center text-center shadow-lg md:-translate-y-1 transition-transform duration-300 hover:scale-[1.02]">
                            <div className="w-11 h-11 rounded-full bg-[#a3ff12] flex items-center justify-center mb-3 text-[#406900]">
                                <Mail size={18} className="stroke-[2.5]" />
                            </div>
                            <h4 className="font-bold text-base text-[#191c1e] leading-tight">
                                Message 1
                            </h4>
                            <span className="text-xs text-[#414a34] font-medium mt-1">
                                Day 4
                            </span>
                        </div>

                        <div className="relative z-10 my-3 md:my-0">
                            <div className="block md:hidden w-[2px] h-6 bg-[#93ab87]/40 mx-auto" />
                            <div className="bg-[#f7f9fb] border border-[#e0e3e5] text-[#414a34] text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-2xs flex items-center gap-1.5 whitespace-nowrap select-none">
                                <GitFork size={13} className="text-[#414a34]" />
                                <span>If No Reply</span>
                            </div>
                            <div className="block md:hidden w-[2px] h-6 bg-[#93ab87]/40 mx-auto" />
                        </div>

                        {/* Step 3: Follow-up Card */}
                        <div className="relative z-10 bg-white border border-gray-200/90 rounded-2xl p-6 w-48 sm:w-52 flex flex-col items-center justify-center text-center shadow-xs transition-transform duration-300 hover:scale-[1.02]">
                            <div className="w-10 h-10 rounded-full bg-[#eceef0] flex items-center justify-center mb-3 text-[#191c1e]">
                                <CornerUpLeft size={18} className="stroke-[2.2]" />
                            </div>
                            <h4 className="font-bold text-base text-[#191c1e] leading-tight">
                                Follow-up
                            </h4>
                            <span className="text-xs text-[#414a34] font-medium mt-1">
                                Day 7
                            </span>
                        </div>

                    </div>

                    {/* Build a Campaign Button */}
                    <Link
                        href="/subscription"
                        className="bg-[#eceef0] border border-[#c0caae] rounded-xl px-7 py-2.5 text-sm sm:text-base font-bold text-[#191c1e] shadow-2xs hover:shadow-xs transition-all duration-200 select-none inline-flex items-center justify-center"
                    >
                        Build a Campaign
                    </Link>
                </motion.div>

                {/* Bottom Metrics / KPI Cards Container */}
                <motion.div
                    className="w-full bg-[#e0e3e5]/40 rounded-3xl p-5 sm:p-6 lg:p-8 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left shadow-2xs">
                        <span className="text-[10px] font-bold text-[#414a34] tracking-wider uppercase mb-2 block">
                            Invitations Sent
                        </span>
                        <div className="text-3xl sm:text-4xl font-black text-[#191c1e] leading-tight tracking-tight">
                            2,450
                        </div>
                        <div className="text-xs font-bold text-[#406900] flex items-center gap-1 mt-3">
                            <TrendingUp size={14} className="stroke-[2.5]" />
                            <span>+12% this month</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left shadow-2xs">
                        <span className="text-[10px] font-bold text-[#414a34] tracking-wider uppercase mb-2 block">
                            Acceptance Rate
                        </span>
                        <div className="text-3xl sm:text-4xl font-black text-[#191c1e] leading-tight tracking-tight">
                            32.8%
                        </div>
                        <div className="w-full h-2 bg-[#eceef0] rounded-full mt-4 overflow-hidden">
                            <div className="w-[32.8%] h-full bg-[#406900] rounded-full" />
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left shadow-2xs">
                        <span className="text-[10px] font-bold text-[#414a34] tracking-wider uppercase mb-2 block">
                            Reply Rate
                        </span>
                        <div className="text-3xl sm:text-4xl font-black text-[#191c1e] leading-tight tracking-tight">
                            14.2%
                        </div>
                        <div className="flex items-end gap-1.5 h-6 mt-3">
                            <div className="w-1/5 h-2 bg-[#a3ff12] rounded-xs" />
                            <div className="w-1/5 h-3.5 bg-[#a3ff12] rounded-xs" />
                            <div className="w-1/5 h-2.5 bg-[#a3ff12] rounded-xs" />
                            <div className="w-1/5 h-5 bg-[#a3ff12] rounded-xs" />
                            <div className="w-1/5 h-6 bg-[#406900] rounded-xs" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
