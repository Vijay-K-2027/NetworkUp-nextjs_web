"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, UserPlus, Mail, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Section2() {
    return (
        <section className="w-full bg-white pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">

                {/* Browser Mockup Window */}
                <motion.div
                    className="w-full bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Window Top Chrome Bar */}
                    <div className="bg-[#ECEEF0]/70 px-4 sm:px-6 py-3 border-b border-gray-200/80 flex items-center justify-between relative select-none">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#BA1A1A]/80 inline-block shadow-2xs" />
                            <span className="w-3 h-3 rounded-full bg-[#C0CAAE]/80 inline-block shadow-2xs" />
                            <span className="w-3 h-3 rounded-full bg-[#406900]/80 inline-block shadow-2xs" />
                        </div>

                        <div className="mx-auto bg-white border border-gray-200/80 rounded-lg px-4 py-1 flex items-center justify-center gap-1.5 text-xs text-gray-500 shadow-2xs w-full max-w-[240px] sm:max-w-xs">
                            <Lock size={12} className="text-gray-400 shrink-0" />
                            <span className="font-mono text-[11px] sm:text-xs text-[#414A34] truncate">
                                app.networkup.io/outreach
                            </span>
                        </div>

                        <div className="w-12 hidden sm:block" />
                    </div>

                    {/* Window Body Canvas */}
                    <div className="p-6 sm:p-8 lg:p-10 bg-white flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">

                        {/* Left Column: Sequence Builder (65% width) */}
                        <div className="w-full lg:w-[68%] flex flex-col items-start">
                            <div className="flex items-center justify-between w-full pb-2 mb-6 border-b border-[#E0E3E5]">
                                <h3 className="text-lg sm:text-xl font-bold text-[#191C1E] tracking-tight">
                                    Sequence Builder
                                </h3>
                                <span className="text-xs font-semibold text-[#414A34] bg-[#ECEEF0] border border-[#E0E3E5] px-2.5 py-0.5 rounded-md select-none">
                                    Draft
                                </span>
                            </div>

                            {/* Step 1: Connection Request Card */}
                            <div className="relative w-full">
                                <div className="absolute -left-2 sm:-left-3 top-15 w-6 h-6 rounded-full bg-[#A3FF12] text-[#467300] flex items-center justify-center font-bold text-xs shadow-xs z-10 select-none">
                                    1
                                </div>

                                <div className="w-full rounded-2xl border-1 border-[#C0CAAE] bg-[#FFFFFF] p-4 sm:p-5 pl-7 sm:pl-7 shadow-2xs">
                                    <div className="flex items-center justify-between w-full mb-3">
                                        <div className="flex items-center gap-2">
                                            <UserPlus size={18} className="text-[#406900] stroke-[2.2]" />
                                            <span className="font-bold text-sm sm:text-base text-[#191C1E]">
                                                Connection Request
                                            </span>
                                        </div>
                                        <span className="text-xs font-bold text-[#414A34] select-none">
                                            Day 1
                                        </span>
                                    </div>

                                    {/* Message Body with Highlighted Variable Tags */}
                                    <div className="w-full bg-[#F2F4F6] border border-[#E0E3E5] rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-[#191C1E] leading-relaxed">
                                        <span>Hi </span>
                                        <span className="bg-[#A3FF12]/30 text-[#467300] font-semibold px-1.5 py-0.5 rounded text-xs mx-0.5 inline-block">
                                            {"{{first_name}}"}
                                        </span>
                                        <span>, noticed your recent post about </span>
                                        <span className="bg-[#A3FF12]/30 text-[#467300] font-semibold px-1.5 py-0.5 rounded text-xs mx-0.5 inline-block">
                                            {"{{industry}}"}
                                        </span>
                                        <span> trends at </span>
                                        <span className="bg-[#A3FF12]/30 text-[#467300] font-semibold px-1.5 py-0.5 rounded text-xs mx-0.5 inline-block">
                                            {"{{company}}"}
                                        </span>
                                        <span>. Would love to connect and follow your work!</span>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical Connecting Line */}
                            <div className="w-0.5 h-6 sm:h-8 bg-gray-200 ml-6 sm:ml-10 my-1 self-start pl-0.5" />

                            {/* Step 2: Follow-up Message Card */}
                            <div className="relative w-full">
                                <div className="absolute -left-2 sm:-left-3 top-15 w-6 h-6 rounded-full bg-[#E6e8EA] text-[#414A34] flex items-center justify-center font-bold text-xs shadow-xs z-10 select-none">
                                    2
                                </div>

                                <div className="w-full rounded-2xl border border-[#E6e8EA] bg-white p-4 sm:p-5 pl-7 sm:pl-7 shadow-2xs">
                                    <div className="flex items-center justify-between w-full mb-3">
                                        <div className="flex items-center gap-2">
                                            <Mail size={18} className="text-[#414A34] stroke-[2]" />
                                            <span className="font-bold text-sm sm:text-base text-[#191C1E]">
                                                Follow-up Message
                                            </span>
                                        </div>
                                        <span className="text-xs font-bold text-[#414A34] select-none">
                                            Wait 3 Days
                                        </span>
                                    </div>

                                    {/* Message Body */}
                                    <div className="w-full bg-[#F2F4F6] rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-[#191C1E] leading-relaxed">
                                        Would love to connect and follow your work!
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Target Audience & AI Insights (32% width) */}
                        <div className="w-full lg:w-[32%] flex flex-col justify-between h-full gap-x-8 gap-y-28 border-l border-[#E0E3E5] pl-5">
                            <div className="w-full flex flex-col items-center sm:items-start">
                                <span className="text-[11px] font-bold text-[#414A34] uppercase tracking-wider mb-2.5 text-center sm:text-left w-full">
                                    Target Audience
                                </span>
                                <div className="w-full bg-[#F2F4F6] border border-[#E0E3E5] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 shadow-2xs">
                                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#E0E3E5] shadow-xs">
                                        <img
                                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&fit=crop&q=80"
                                            alt="VP of Sales"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <h4 className="font-bold text-xs sm:text-sm text-[#191C1E] leading-tight">
                                            VP of Sales
                                        </h4>
                                        <p className="text-[11px] font-medium text-[#414A34] mt-0.5 leading-snug">
                                            Software Dev • 100-500 EMP
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full bg-[#A3FF12]/20 border border-[#406900]/20 rounded-2xl p-4 sm:p-5 text-left shadow-2xs mt-auto">
                                <div className="flex items-center gap-1.5 mb-2">
                                    <Sparkles size={16} className="text-[#406900]" />
                                    <h4 className="font-bold text-xs sm:text-sm text-[#406900]">
                                        AI Insights
                                    </h4>
                                </div>
                                <p className="text-md text-[#414A34] max-w-[280px] text-center font-medium leading-relaxed">
                                    Sequence has an estimated 82% acceptance rate based on historical data for this audience.
                                </p>
                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
