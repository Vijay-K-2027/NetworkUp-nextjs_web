"use client";

import {
    History,
    UserPlus,
    Mail,
    Eye,
    Sparkles,
    X,
    Equal,
    Briefcase,
    Coffee,
    RotateCw,
    Clock,
    ArrowRight,
    ListCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Section6() {
    return (
        <section className="w-full bg-gray-100 py-10 sm:py-16 px-4 sm:px-10 lg:px-20 overflow-hidden rounded-3xl">
            <div className="w-full max-w-[1440px] mx-auto">

                {/* Section Header */}
                <div className="max-w-[600px] text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-[35px] font-bold text-[#191C1E] tracking-tight leading-[1.15]"
                    >
                        AI prepares the message.
                        <br />
                        <span className="text-[#414A34]">You stay in control.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-5 text-md sm:text-lg text-black/75 font-normal leading-relaxed max-w-[500px]"
                    >
                        The suggestion engine doesn&apos;t just guess; it reads the room. It
                        cross-references previous messages and CRM data to ensure
                        relevance.
                    </motion.p>
                </div>

                {/* Interactive Visual Graphic / Layered Composition */}
                <div className="mt-14 sm:mt-18 relative w-full max-w-[1300px] mx-auto pb-6 sm:pb-10">
                    <div className="relative flex flex-col lg:block">

                        {/* Left Card: Conversation History */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-[550px] xl:w-[640px] bg-white rounded-2xl border border-[#C0CAAE] shadow-sm p-6 sm:p-7 relative z-10"
                        >
                            {/* Card Header */}
                            <div className="flex items-center gap-2.5 pb-4.5 border-b border-[#C0CAAE]">
                                <History className="w-5 h-5 text-[#414A34]" />
                                <h3 className="text-base sm:text-lg font-semibold text-[#191C1E] tracking-tight">
                                    Conversation History
                                </h3>
                            </div>

                            {/* Timeline List */}
                            <div className="relative mt-7 space-y-7 py-10">
                                {/* Vertical Connecting Timeline Line */}
                                <div className="absolute left-[19px] top-5 bottom-5 w-[1.5px] h-[95%] bg-[#C0CAAE]/50 z-0" />

                                {/* Timeline Item 1: Connection Request */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.15 }}
                                    className="relative flex items-start gap-4 z-10"
                                >
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#ECEEF0] border border-[#C0CAAE] flex items-center justify-center text-[#414A34] shadow-xs">
                                        <UserPlus className="w-4.5 h-4.5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs sm:text-[13px] font-medium text-[#414A34] mb-2">
                                            Oct 12 • Connection Request
                                        </div>
                                        <div className="bg-[#F7F9FB] rounded-2xl p-4 border border-[#C0CAAE] shadow-2xs text-[14px] sm:text-[15px] text-[#191C1E] leading-relaxed max-w-[440px]">
                                            Hi Alex, noticed you&apos;re leading growth at TechCorp. We&apos;re working on some new outbound strategies I think you&apos;d find interesting.
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Timeline Item 2: Email Follow-up */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.25 }}
                                    className="relative flex items-start gap-4 z-10"
                                >
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#ECEEF0] border border-[#C0CAAE] flex items-center justify-center text-[#414A34] shadow-xs">
                                        <Mail className="w-4.5 h-4.5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs sm:text-[13px] font-medium text-[#414A34] mb-2">
                                            Oct 14 • Email Follow-up
                                        </div>
                                        <div className="bg-[#F7F9FB] rounded-2xl p-4 border border-[#C0CAAE] shadow-2xs text-[14px] sm:text-[15px] text-[#191C1E] leading-relaxed max-w-[440px]">
                                            Sent the PDF case study on scaling SDR teams via automated workflows.
                                        </div>
                                        <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A3FF12]/20 border border-[#406900]/20 text-[#191C1E] text-xs sm:text-[13px] font-medium">
                                            <ListCheck className="w-3.5 h-3.5 text-[#406900]" />
                                            Data extracted
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Timeline Item 3: Activity */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.35 }}
                                    className="relative flex items-start gap-4 z-10"
                                >
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#ECEEF0] border border-[#C0CAAE] flex items-center justify-center text-[#414A34] shadow-xs">
                                        <Eye className="w-4.5 h-4.5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs sm:text-[13px] font-medium text-[#414A34] mb-2">
                                            Oct 15 • Activity
                                        </div>
                                        <div className="bg-[#F7F9FB] rounded-2xl p-4 border border-[#C0CAAE] shadow-2xs text-[14px] sm:text-[15px] text-[#191C1E] leading-relaxed max-w-[440px]">
                                            <span className="font-semibold text-gray-900">Alex Rivera</span>{" "}
                                            viewed the case study (Time spent: 4m 12s).
                                        </div>
                                        <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A3FF12]/20 border border-[#406900]/20 text-[#191C1E] text-xs sm:text-[13px] font-medium">
                                            <ListCheck className="w-3.5 h-3.5 text-[#406900]" />
                                            High intent signal
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Card: Smart Follow-up Draft */}
                        <motion.div
                            initial={{ opacity: 0, x: 24, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, delay: 0.2 }}
                            className="w-full lg:w-[550px] xl:w-[640px] mt-6 lg:mt-0 lg:absolute lg:right-15 lg:top-[90px] xl:top-[75px] bg-white rounded-xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.13)] relative z-20 overflow-hidden"
                        >
                            {/* Gradient Top Border */}
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#406900] to-[#A3FF12]" />
                            {/* Card Header */}
                            <div className="p-6 pb-4 sm:pb-5 flex items-start justify-between border-b border-gray-100">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-[#406900] shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-[#191C1E] tracking-tight leading-tight">
                                            Smart Follow-up Draft
                                        </h3>
                                        <p className="text-xs sm:text-[13px] text-[#414A34] mt-1 font-normal">
                                            Based on 3 historical data points.
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="text-[#414A34] p-1 rounded-lg transition-colors"
                                    aria-label="Close draft"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Message Body Area */}
                            <div className="p-6 space-y-5">
                                {/* Text Box */}
                                <div className="rounded-2xl border border-[#C0CAAE] bg-[#F7F9FB] p-5 pb-20 text-[14.5px] sm:text-[15.5px] text-[#191C1E] leading-relaxed shadow-xs">
                                    Hi Alex, saw you took a look at the{" "}
                                    <mark className="bg-[#406900]/10 text-[#191C1E] font-medium px-1.5 py-0.5 rounded">
                                        SDR case study yesterday
                                    </mark>
                                    . Given the
                                    <br />
                                    interest, would you be open to a brief chat next week on how we might
                                    <br />
                                    implement those{" "}
                                    <mark className="bg-[#406900]/10 text-[#191C1E] font-medium px-1.5 py-0.5 rounded">
                                        automated workflows
                                    </mark>{" "}
                                    at TechCorp?
                                </div>

                                {/* Modifier Buttons */}
                                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            type="button"
                                            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl border border-[#C0CAAE] bg-[#F7F9FB] text-xs sm:text-[13px] font-medium text-[#191C1E] shadow-2xs"
                                        >
                                            <Equal className="w-4 h-4 text-[#191C1E]" />
                                            Shorten
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            type="button"
                                            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl border border-[#C0CAAE] bg-[#F7F9FB] text-xs sm:text-[13px] font-medium text-[#191C1E] shadow-2xs"
                                        >
                                            <Briefcase className="w-4 h-4 text-[#191C1E]" />
                                            More Professional
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            type="button"
                                            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl border border-[#C0CAAE] bg-[#F7F9FB] text-xs sm:text-[13px] font-medium text-[#191C1E] shadow-2xs"
                                        >
                                            <Coffee className="w-4 h-4 text-[#191C1E]" />
                                            Make Warmer
                                        </motion.button>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        type="button"
                                        className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl border border-[#C0CAAE] bg-[#F7F9FB] text-xs sm:text-[13px] font-medium text-[#191C1E] shadow-2xs"
                                    >
                                        <RotateCw className="w-4 h-4 text-[#191C1E]" />
                                        Regenerate
                                    </motion.button>
                                </div>
                            </div>

                            {/* Bottom Footer Actions */}
                            <div className="border-t border-gray-100 px-6 py-4 sm:py-5 bg-white flex items-center justify-between mt-33">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#414A34] hover:text-gray-900 transition-colors"
                                >
                                    <Clock className="w-4 h-4" />
                                    Schedule
                                </button>

                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        className="text-xs sm:text-sm font-medium text-[#414A34] px-3 py-1.5 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <motion.button
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        type="button"
                                        className="inline-flex items-center gap-2 bg-[#406900] text-[#FFFFFF] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                                    >
                                        Insert
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
