"use client";
import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Building, Check, MapPin, Tag, UserPlus, ChevronDown } from "lucide-react";

const features = [
    "Extract from Multiple Sources: LinkedIn search, Sales Navigator, company pages, groups, events & more.",
    "Advanced Filters: Filter by job title, seniority, location, industry, company size and more.",
    "Bulk Extract: Extract hundreds or thousands of leads at once.",
    "Instant Export: Add leads directly to campaigns or your database.",
    "Clean & Verified Data: Get only relevant, valid and actionable leads."
];

const dataChart = [
    {
        icon: BriefcaseBusiness,
        title: "Job Title",
        description: "Marketing Manager, Growth Manager"
    },
    {
        icon: MapPin,
        title: "Location",
        description: "United States"
    },
    {
        icon: Building,
        title: "Industry",
        description: "SaaS, Marketing, Technology"
    },
    {
        icon: Tag,
        title: "Keywords",
        description: "Growth, Demand Generation"
    },
    {
        icon: UserPlus,
        title: "Connections",
        description: "2nd"
    }
];

export default function Section7() {
    return (
        <section className="bg-[#fafcf7] w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 w-full">

                {/* Column 1: Left Title & Description */}
                <motion.div
                    className="flex flex-col lg:max-w-[45%] items-start gap-y-6 w-full order-1 lg:order-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#71EB34] font-bold tracking-widest bg-[#EAFCEB] p-1.5 rounded w-fit">
                        Lead Extractor
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-left text-gray-900 leading-tight tracking-tight">
                        Find High-Quality Leads, Faster Than Ever
                    </h2>

                    <p className="text-md sm:text-lg text-left text-black/60">
                        Extract targeted leads from LinkedIn, Sales Navigator, company pages, groups, events and more. Advanced filters help you find the right prospects in seconds.
                    </p>

                    <div className="flex flex-col items-start gap-y-1 mt-2">
                        {features.map((data, index) => (
                            <div key={index} className="flex flex-row items-center gap-x-3 py-1">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <Check size={25} className="stroke-[#71EB34] stroke-[1]" />
                                </div>
                                <span className="text-md text-gray-700 font-bold text-left">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: Lead Extractor Mockup Widget */}
                <motion.div
                    className="flex flex-col items-start justify-start w-full lg:max-w-[50%] border border-gray-200 bg-[#f8fafc]/50 rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 gap-y-6 shrink-0 shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-xl font-bold text-slate-800 text-left">
                        Lead Extractor
                    </span>

                    {/* Tabs */}
                    <div className="flex flex-row items-center gap-x-6 border-b border-gray-100 w-full pb-1">
                        <span className="text-sm text-slate-900 font-bold pb-2 border-b-2 border-[#71EB34] cursor-pointer select-none">Search</span>
                        <span className="text-sm text-slate-400 font-bold pb-2 hover:text-slate-600 transition-colors cursor-pointer select-none">Company</span>
                        <span className="text-sm text-slate-400 font-bold pb-2 hover:text-slate-600 transition-colors cursor-pointer select-none">Events</span>
                        <span className="text-sm text-slate-400 font-bold pb-2 hover:text-slate-600 transition-colors cursor-pointer select-none">Posts</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 w-full">
                        {/* Left Side: Filter Stack */}
                        <div className="flex flex-col gap-4 w-full sm:w-[60%] shrink-0">
                            {dataChart.map((object, index) => {
                                const IconComponent = object.icon;
                                const isJobTitle = object.title === "Job Title";
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex flex-row items-center justify-between px-4 py-3 bg-white border border-gray-155 rounded-2xl shadow-sm w-full gap-2 hover:scale-[1.01] transition-transform duration-300"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                                    >
                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <IconComponent size={18} className="text-slate-600 shrink-0" />
                                            <div className="flex flex-row items-center text-left flex-1 min-w-0">
                                                {isJobTitle ? (
                                                    <div className="flex flex-col text-[11px] text-slate-400 font-bold leading-none pr-3 w-[75px] sm:w-[85px] shrink-0">
                                                        <span>Job</span>
                                                        <span>Title</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-[11px] text-slate-400 font-bold pr-3 w-[75px] sm:w-[85px] shrink-0 text-left leading-none">
                                                        {object.title}
                                                    </span>
                                                )}
                                                <span className="text-xs sm:text-[13px] font-bold text-slate-800 truncate flex-1 min-w-0">
                                                    {object.description}
                                                </span>
                                            </div>
                                        </div>
                                        <ChevronDown size={14} className="text-slate-400 shrink-0" />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Right Side: Extraction Results List Card Mockup */}
                        <motion.div
                            className="relative flex flex-col gap-3.5 bg-white border border-gray-155 rounded-[28px] p-5 shadow-md w-full sm:w-[38%] min-h-[250px] overflow-hidden justify-center shrink-0"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="flex flex-row items-center justify-between w-full select-none">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-5.5 h-5.5 rounded-full bg-slate-100 shrink-0" />
                                        <div className="h-1.5 w-12 bg-slate-100 rounded shrink-0" />
                                    </div>
                                    {item === 3 && (
                                        <div className="w-4 h-4 rounded-full bg-[#71EB34] text-white flex items-center justify-center text-[9px] font-black shadow-sm mr-5 shrink-0">
                                            ✓
                                        </div>
                                    )}
                                    {item <= 2 && (
                                        <div className="w-4 h-4 rounded-full bg-[#71EB34] text-white flex items-center justify-center text-[9px] font-black shadow-sm shrink-0">
                                            ✓
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Floating Magnifying Glass Overlay */}
                            <motion.div
                                className="absolute top-[28%] right-[10%] w-24 h-24 select-none pointer-events-none z-30"
                                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                whileInView={{ opacity: 0.9, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                            >
                                <div className="relative">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 drop-shadow-md opacity-90">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}