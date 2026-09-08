"use client";

import { motion } from "framer-motion";
import {
    Plus,
    Hand,
    HardDrive,
    UserPlus,
    MoreVertical,
    Eye,
    Clock,
    Heart,
    MessageSquare,
    Split,
    CopyPlus,
    MessageSquareReply,
    MessageSquareText,
    SlidersHorizontal,
} from "lucide-react";

export default function Section3() {
    const features = [
        {
            title: "Smart Branching",
            description: "Route leads dynamically based on their actions, ensuring relevance.",
            icon: Split,
            isHighlighted: true,
        },
        {
            title: "Template Library",
            description: "Access proven messaging frameworks or save your own top performers.",
            icon: CopyPlus,
            isHighlighted: false,
        },
        {
            title: "Precision Control",
            description: "Fine-tune delays between steps down to the hour for perfect pacing.",
            icon: SlidersHorizontal,
            isHighlighted: false,
        },
    ];

    return (
        <section className="w-full bg-white py-10 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[6%]">

                    {/* Left Column: Heading, Subtitle & Feature Highlights */}
                    <div className="w-full lg:w-[31%] flex flex-col items-start text-left">
                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl sm:text-3xl lg:text-4xl font-bold text-[#191C1E] tracking-tight leading-[1.15]"
                        >
                            Design your ideal
                            <br />
                            engagement path.
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-10 text-sm sm:text-base md:text-lg text-[#414A34] font-normal leading-relaxed max-w-[400px]"
                        >
                            The visual sequence builder gives you complete control over the cadence of
                            your outreach. Drag and drop steps to create intricate, multi-touch campaigns
                            that feel natural and human.
                        </motion.p>

                        {/* 3 Feature Items */}
                        <div className="mt-8 sm:mt-10 px-5 py-3 space-y-7 sm:space-y-8 w-full max-w-[480px]">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: index * 0.1 + 0.15 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div
                                            className={`mt-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 shadow-2xs ${
                                                feature.isHighlighted
                                                    ? "bg-[#A3FF12] text-[#467300]"
                                                    : "bg-[#ECEEF0] text-[#414A34]"
                                            }`}
                                        >
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                                        </div>
                                        <div>
                                            <h3 className="text-md sm:text-xl font-bold text-[#191C1E] leading-snug">
                                                {feature.title}
                                            </h3>
                                            <p className="text-md sm:text-lg text-[#414A34] font-normal leading-relaxed mt-1">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Visual Sequence Builder Interactive Canvas */}
                    <div className="w-full lg:w-[63%] flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="w-full bg-white rounded-[28px] sm:rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-4 sm:p-6"
                        >

                            {/* Canvas Toolbar Header */}
                            <div className="flex items-center justify-between pb-4 sm:pb-5 px-1 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        className="p-1.5 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
                                        aria-label="Add element"
                                    >
                                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                    <button
                                        type="button"
                                        className="p-1.5 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
                                        aria-label="Pan tool"
                                    >
                                        <Hand className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-[#414A34] font-medium">
                                    <HardDrive className="w-3.5 h-3.5 text-[#414A34]" />
                                    <span>Auto-saved</span>
                                </div>
                            </div>

                            {/* Canvas Workspace Area */}
                            <div className="relative mt-4 sm:mt-5 bg-[#fbfdfc] shadow-[0_-5px_30px_-15px_rgba(0,0,0,0.15)] rounded-2xl p-6 sm:p-8 min-h-[600px] sm:min-h-[680px] overflow-hidden flex flex-col items-center justify-between">

                                {/* Vertical Flow Connector Line */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                    className="origin-top absolute left-1/2 -translate-x-1/2 top-14 bottom-20 w-[1.5px] bg-gray-200 z-0 mb-17"
                                />

                                {/* Floating Action Pill 1 (Top-Right): View Profile */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.35 }}
                                    animate={{ y: [0, -3, 0] }}
                                    className="absolute top-10 sm:top-16 right-5 sm:right-8 lg:right-30 z-20 inline-flex items-center gap-2 bg-[#F9FFF1] px-3.5 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-semibold text-gray-800 shadow-2xs"
                                >
                                    <Eye className="w-3.5 h-3.5 text-[#A855F7]" />
                                    <span>View Profile</span>
                                </motion.div>

                                {/* Step Node 1: Connection Request */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.25 }}
                                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                    className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-2xl p-4 sm:p-4.5 border border-gray-200/90 shadow-xs"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-md bg-[#D9E7FF] text-[#58687E] flex items-center justify-center">
                                                <UserPlus className="w-3 h-3" />
                                            </div>
                                            <h4 className="text-sm sm:text-lg font-bold text-gray-950">
                                                Connection Request
                                            </h4>
                                        </div>
                                        <MoreVertical className="w-4 h-4 text-[#414A34] cursor-pointer" />
                                    </div>
                                    <div className="mt-3 bg-[#ECEEF0] rounded-xl p-2.5 sm:p-3 text-[11px] sm:text-[12px] text-[#191C1E] leading-relaxed border border-gray-100/90">
                                        Hi &#123;&#123;firstName&#125;&#125;, noticed your work at &#123;&#123;companyName&#125;&#125;. I&apos;d love to connect and follow your journey
                                    </div>
                                </motion.div>

                                <div className="relative w-full flex items-center justify-center my-4 sm:my-6 z-10">
                                    {/* Floating Action Pill 2 (Middle-Left): Withdraw Connection */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        animate={{ y: [0, -3, 0] }}
                                        className="absolute -top-15 left-0 sm:left-15 inline-flex items-center gap-2 bg-[#F9FFF1] px-3 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-semibold text-black"
                                    >
                                        <MessageSquareReply className="w-3.5 h-3.5 text-[#2F88FF]" />
                                        <span>Withdraw Connection</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: 0.35 }}
                                        className="inline-flex items-center gap-1.5 bg-[#ECEEF0] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-[#414A34] z-20"
                                    >
                                        <Clock className="w-3.5 h-3.5 text-[#414A34]" />
                                        <span>Wait 2 Days</span>
                                    </motion.div>

                                    {/* Floating Action Pill 3 (Middle-Right): Like Recent Post */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.45 }}
                                        animate={{ y: [0, -3, 0] }}
                                        className="absolute top-15 right-0 sm:right-15 inline-flex items-center gap-2 bg-[#F9FFF1] px-3 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-semibold text-black"
                                    >
                                        <Heart className="w-3.5 h-3.5 text-[#F97316]" />
                                        <span>Like Recent Post</span>
                                    </motion.div>
                                </div>

                                {/* Step Node 2: Follow-up Message 1 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.4 }}
                                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                    className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-2xl p-4 sm:p-4.5 border border-gray-200/90 shadow-xs"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-md bg-[#A3FF12] text-gray-950 flex items-center justify-center">
                                                <MessageSquareText className="w-3 h-3 text-[#467300]" />
                                            </div>
                                            <h4 className="text-sm sm:text-lg font-bold text-[#191C1E]">
                                                Follow-up Message 1
                                            </h4>
                                        </div>
                                        <MoreVertical className="w-4 h-4 text-[#414A34] cursor-pointer" />
                                    </div>
                                    <div className="mt-3 bg-[#ECEEF0] rounded-xl p-2.5 sm:p-3 text-[11px] sm:text-[12px] text-[#191C1E] leading-relaxed border border-gray-100/90">
                                        Thanks for connecting, &#123;&#123;firstName&#125;&#125;. I recently published an article on scaling SDR teams that might resonate...
                                    </div>
                                </motion.div>

                                <div className="relative w-full flex items-center justify-center mt-4 sm:mt-6 z-10">
                                    {/* Floating Action Pill 4 (Bottom-Left): Send Message */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        animate={{ y: [0, -3, 0] }}
                                        className="absolute -top-10 left-10 sm:left-20 lg:left-30 inline-flex items-center gap-2 bg-[#F9FFF1] px-3.5 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-semibold text-black"
                                    >
                                        <MessageSquare className="w-3.5 h-3.5 text-[#316B00]" />
                                        <span>Send Message</span>
                                    </motion.div>

                                    {/* Add Step Circular Button */}
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F7F9FB] border border-gray-200 shadow-xs flex items-center justify-center text-[#414A34] hover:text-black hover:border-gray-400 transition-colors z-20 cursor-pointer"
                                        aria-label="Add next sequence step"
                                    >
                                        <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
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
