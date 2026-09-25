"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Copy, RefreshCcw } from "lucide-react";
import Image from "next/image";

const features = [
    "AI Message Generator: Generate personalized messages that get replies.",
    "Follow-up Ideas: Get smart follow-ups and icebreakers.",
    "InMail Assistant: Write better InMails that stand out.",
    "Improve & Optimize: Enhanced tone, clarity and impact.",
    "Save Templates: Save your best messages and reuse anytime."
];

export default function Section8() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16 w-full">

                {/* Column 1: Left Title & Description (50% Flex) */}
                <motion.div
                    className="flex flex-col w-full lg:w-1/2 lg:max-w-[50%] items-start gap-y-6 pl-2 md:pl-4 lg:pl-6 xl:pl-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Icon Box */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-xs font-bold tracking-wide px-3 py-1 bg-[#7ceb2a]/10 text-[#7ceb2a] uppercase rounded-md"
                    >
                        Content Assistant
                    </motion.span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-left text-[#1f2937] leading-tight tracking-tighter">
                        Write Better Messages. Reply Smarter. Close Faster.
                    </h2>

                    <p className="text-base sm:text-lg text-left text-[#4b5563] leading-relaxed">
                        AI-powered content assistant helps you create personalized, relevant and high-converting messages in seconds.
                    </p>

                    <div className="flex flex-col items-start gap-y-1 mt-2 w-full">
                        {features.map((data, index) => (
                            <div key={index} className="flex flex-row items-center gap-x-3 py-1">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <Check size={20} className="stroke-[#a3ff12] stroke-[2]" />
                                </div>
                                <span className="text-sm sm:text-base text-[#111827] font-bold text-left">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: Content Assistant Mockup Widget (50% Flex) */}
                <motion.div
                    className="flex flex-col items-start justify-start w-full lg:w-1/2 lg:max-w-[50%] border border-gray-200 bg-gray-50 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 gap-y-6 shadow-sm shrink-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-xl font-bold text-slate-800 text-left">
                        AI Content Studio
                    </span>

                    {/* Tabs */}
                    <div className="flex flex-row items-center gap-x-6 border-b border-gray-100 w-full pb-1">
                        <span className="text-sm text-slate-900 font-bold pb-2 border-b-2 border-[#71EB34] cursor-pointer select-none">Message</span>
                        <span className="text-sm text-slate-400 font-bold pb-2 hover:text-slate-600 transition-colors cursor-pointer select-none">Follow-up</span>
                        <span className="text-sm text-slate-400 font-bold pb-2 hover:text-slate-600 transition-colors cursor-pointer select-none">Icebreaker</span>
                        <span className="text-sm text-slate-400 font-bold pb-2 hover:text-slate-600 transition-colors cursor-pointer select-none">InMail</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch justify-between gap-5 sm:gap-6 w-full">
                        {/* Left Side: Parameters Form */}
                        <motion.div
                            className="flex flex-col gap-5 w-full sm:w-[48%] sm:flex-1 shrink-0 text-left"
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                        >
                            <div className="flex flex-col items-start gap-y-2">
                                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Lead Context</span>
                                <div className="flex flex-col gap-2 p-5 border border-gray-200 rounded-2xl bg-white w-full shadow-sm text-left">
                                    <p className="text-sm sm:text-md text-black leading-relaxed">Name: Liam Anderson</p>
                                    <p className="text-sm sm:text-md text-black leading-relaxed">Title: Growth Manager</p>
                                    <p className="text-sm sm:text-md text-black leading-relaxed">Company: DevFlow</p>
                                    <p className="text-sm sm:text-md text-black leading-relaxed">Industry: SaaS</p>
                                    <p className="text-sm sm:text-md text-black leading-relaxed">Location: San Francisco, USA</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-y-2">
                                <span className="text-xs sm:text-[13px] text-slate-800 font-bold">What would you like to say?</span>
                                <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-xs sm:text-sm text-black/80 leading-relaxed shadow-sm">
                                    Introduce my product for LinkedIn automation to help with outreach and lead generation.
                                </div>
                            </div>

                            <div className="w-full bg-gradient-to-b from-[#b3ff7a] to-[#7ceb2a] active:scale-[0.99] flex flex-row items-center justify-center gap-2 rounded-xl py-3 px-4 shadow-sm transition-all duration-200">
                                <span className="text-sm text-slate-900 font-bold">Generate Message</span>
                                <Zap size={14} className="fill-slate-900 stroke-none" />
                            </div>
                        </motion.div>

                        {/* Right Side: Generated AI Draft Output Mockup */}
                        <motion.div
                            className="flex flex-col gap-4 bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm w-full sm:w-[48%] sm:flex-1 min-h-[300px] shrink-0 justify-between text-left"
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                        >
                            <div className="flex flex-col items-start w-full">
                                <span className="text-xs sm:text-[13px] text-[#15803d] font-bold uppercase tracking-wider mb-3">AI Generated Message</span>

                                <div className="text-xs sm:text-sm text-black/90 leading-relaxed pr-1">
                                    <p className="mb-4">Hi Liam,</p>
                                    <p className="mb-4">I came across your work at DevFlow and really liked how your team is scaling growth. We help SaaS teams automate LinkedIn outreach in a safe and personalized way to generate more conversations and qualified leads consistently.</p>
                                    <p className="mb-4">Would love to connect and see if it makes sense for your team.</p>
                                    <p className="mb-1">Best,</p>
                                    <p>Alex</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-end gap-x-4 pt-3 border-t border-gray-100 w-full">
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors font-semibold">
                                    <RefreshCcw size={12} />
                                    <span>Regenerate</span>
                                </div>
                                <div
                                    onClick={handleCopy}
                                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors font-semibold relative cursor-pointer"
                                >
                                    <Copy size={12} />
                                    <span>Copy</span>
                                    {copied && (
                                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded shadow-sm font-normal">
                                            Copied
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}