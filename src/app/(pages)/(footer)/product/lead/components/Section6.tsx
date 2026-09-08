"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function Section6() {
    const [jobTitles, setJobTitles] = useState(["Founder", "CEO"]);

    const removeTitle = (titleToRemove: string) => {
        setJobTitles(jobTitles.filter(t => t !== titleToRemove));
    };

    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1500px] mx-auto flex flex-col items-center justify-center w-full">

                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center justify-center text-center max-w-3xl mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191c1e] tracking-tight leading-tight">
                        Build the Perfect Audience
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#414a34] leading-relaxed mt-4 max-w-[700px]">
                        Combine powerful boolean logic with intuitive filter chips to pinpoint your ideal customer profile with surgical precision.
                    </p>
                </motion.div>

                {/* Main Content: Left Filter Criteria + Right Image Slot */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 xl:gap-16 w-full px-4 sm:px-6 md:px-8 lg:px-10">

                    {/* Left Column: Filter Criteria Card */}
                    <motion.div
                        className="w-full lg:w-[38%] max-w-md bg-[#f2f4f6] border border-gray-200/80 rounded-[28px] sm:rounded-3xl p-6 sm:p-8 flex flex-col gap-y-6 shadow-xs shrink-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between w-full">
                            <h3 className="text-xl font-bold text-[#191c1e] tracking-tight">
                                Filter Criteria
                            </h3>
                            <span className="bg-[#406900]/10 text-[#406900] font-bold text-xs px-3 py-1 rounded-md border border-[#d2f2c5]">
                                14 Active
                            </span>
                        </div>

                        {/* Field 1: Job Title */}
                        <div className="flex flex-col items-start gap-y-2.5 w-full">
                            <span className="text-[11px] font-bold text-[#414a34] uppercase tracking-wide">
                                Job Title
                            </span>
                            <div className="flex flex-wrap items-center gap-2.5">
                                {jobTitles.map((title) => (
                                    <motion.div
                                        key={title}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-[#e0e3e5] text-[#191c1e] text-sm font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs transition-colors hover:bg-slate-200 cursor-pointer select-none"
                                        onClick={() => removeTitle(title)}
                                    >
                                        <span>{title}</span>
                                        <X size={14} className="text-[#414a34] hover:text-slate-800" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Field 2: Industry */}
                        <div className="flex flex-col items-start gap-y-2.5 w-full">
                            <span className="text-[11px] font-bold text-[#414a34] uppercase tracking-wide">
                                Industry
                            </span>
                            <div className="w-full bg-[#e0e3e5] rounded-xl p-3 sm:p-3.5 text-sm sm:text-base font-semibold text-[#191c1e] shadow-xs select-none">
                                SaaS & Software
                            </div>
                        </div>

                        {/* Field 3: Company Size */}
                        <div className="flex flex-col items-start gap-y-3 w-full">
                            <span className="text-[11px] font-bold text-[#414a34] uppercase tracking-wide">
                                Company Size
                            </span>

                            <div className="relative w-full h-2 bg-[#e0e3e5] rounded-full mt-2 select-none">
                                {/* Green Active Track */}
                                <div className="absolute left-[15%] right-[25%] h-full bg-[#406900] rounded-full" />

                                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f7f9fb] border-2 border-gray-300 shadow-sm cursor-grab" />
                                <div className="absolute right-[25%] top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-[#f7f9fb] border-2 border-gray-300 shadow-sm cursor-grab" />
                            </div>

                            <div className="flex items-center justify-between w-full text-xs sm:text-sm font-bold text-[#414a34] mt-1">
                                <span>50</span>
                                <span>1,000</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Dashboard Preview / Image Slot */}
                    <motion.div
                        className="w-full lg:w-[60%] flex items-center justify-center bg-white overflow-hidden"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                        <Image
                            src="/footer/product/feature/Files.png"
                            alt="Audience Builder Preview"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
