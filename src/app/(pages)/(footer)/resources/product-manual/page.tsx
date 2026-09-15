"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Wand2,
    Zap,
    UserPlus,
    TrendingUp,
    GitFork,
    CheckCircle2,
    CircleCheck,
    SearchCode,
} from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

export default function ProductManualPage() {
    return (
        <div className="w-full bg-[#fbfdf9] text-[#181d13] min-h-screen overflow-x-hidden">
            {/* HERO BANNER */}
            <section className="w-full bg-[#081f04] py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#1b380d] relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative overflow-hidden flex flex-col items-center text-center">
                    {/* Gradient Glow Effect */}
                    <div className="absolute -top-1/2 left-1/4 -translate-x-1/2 w-full h-[800px] bg-radial-gradient from-[#84cc16] via-[#84cc16]/30 to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#416900] shadow-xs mb-6 relative z-10"
                    >
                        <span className="text-[11px] sm:text-xs font-bold text-white tracking uppercase">
                            PROCESS GUIDE
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] max-w-4xl relative z-10"
                    >
                        Scale Your Outreach <br />
                        <span className="text-[#acf847]">With Precision.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#ffffff]/80 max-w-2xl font-normal leading-relaxed relative z-10"
                    >
                        Discover the four fundamental pillars of the NetworkUp ecosystem designed to turn cold prospects into warm handshakes.
                    </motion.p>
                </div>
            </section>

            {/* MAIN CONTENT / 8 PROCESS STEPS */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 space-y-16 sm:space-y-24 lg:space-y-36">

                {/* 01: CONNECT YOUR ACCOUNTS */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center"
                >
                    {/* Left Info */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-4">
                            <div className="relative flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-[#416900]/10 blur-xl rounded-full scale-125 pointer-events-none" />
                                <span className="relative text-6xl sm:text-7xl lg:text-8xl font-black text-[#416900]/10 tracking-tighter select-none">
                                    01
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#062300] tracking-tight leading-tight">
                                Connect Your <br className="hidden sm:inline" /> Accounts
                            </h2>
                        </div>

                        <p className="text-sm sm:text-lg text-[#43483e] leading-relaxed mt-2">
                            Seamlessly bridge the gap between your professional network <br className="hidden md:inline" />and your sales pipeline. NetworkUp securely integrates with <br className="hidden md:inline" />LinkedIn and leading CRM platforms like HubSpot and <br className="hidden md:inline" />Salesforce. Our native integration ensures your data flows bi-<br className="hidden md:inline" />directionally without friction.
                        </p>

                        <div className="mt-6 sm:mt-8 pt-2 sm:pt-4">
                            <div className="flex items-center gap-2 text-sm sm:text-base text-[#416900] mb-4">
                                <ShieldCheck className="w-5 h-5 text-[#416900]" />
                                <span>Key Safety &amp; Benefits</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0b1c30]">
                                    <CircleCheck className="w-3.5 h-3.5 sm:w-3 sm:h-3 stroke-[2] text-[#416900] shrink-0" />
                                    <span>AES-256 Bit Encryption</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0b1c30]">
                                    <CircleCheck className="w-3.5 h-3.5 sm:w-3 sm:h-3 stroke-[2] text-[#416900] shrink-0" />
                                    <span>Real-time CRM Sync</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0b1c30]">
                                    <CircleCheck className="w-3.5 h-3.5 sm:w-3 sm:h-3 stroke-[2] text-[#416900] shrink-0" />
                                    <span>OAuth Secure Linking</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0b1c30]">
                                    <CircleCheck className="w-3.5 h-3.5 sm:w-3 sm:h-3 stroke-[2] text-[#416900] shrink-0" />
                                    <span>Auto-De-duplication</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="lg:col-span-6 flex items-center justify-center w-full">
                        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]">
                            <Image
                                src="/footer/resources/product-manual/01.png"
                                alt="Connect Your Accounts"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* 02: DISCOVER PROSPECTS */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center"
                >
                    {/* Left Visual (Enclosed container) */}
                    <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center">
                        <div className="w-full rounded-2xl sm:rounded-[28px] lg:rounded-[36px] border border-[#d8e0d2] bg-white p-4 sm:p-7 md:p-8 lg:p-10 shadow-xs">
                            <div className="relative w-full aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden">
                                <Image
                                    src="/footer/resources/product-manual/db.png"
                                    alt="Discover Prospects"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Info */}
                    <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
                        <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-4">
                            <div className="relative flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-[#416900]/10 blur-xl rounded-full scale-125 pointer-events-none" />
                                <span className="relative text-6xl sm:text-7xl lg:text-8xl font-black text-[#416900]/10 tracking-tighter select-none">
                                    02
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#062300] tracking-tight leading-tight">
                                Discover Prospects
                            </h2>
                        </div>

                        <p className="text-sm sm:text-lg text-[#43483e] leading-relaxed mt-2">
                            Stop guessing and start targeting. Access our proprietary <br className="hidden md:inline" />database of over 250 Million+ verified contacts. Use hyper-<br className="hidden md:inline" />granular filters to identify your ideal customer profile (ICP) <br className="hidden md:inline" />based on specific intent signals, historical growth, and <br className="hidden md:inline" />decision-making authority.
                        </p>

                        <div className="mt-6 sm:mt-8 pt-2 sm:pt-4">
                            <div className="flex items-center gap-2 text-sm sm:text-base text-[#416900] mb-4">
                                <SearchCode className="w-5 h-5 text-[#416900]" />
                                <span>What to expect</span>
                            </div>

                            <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                <span className="px-3.5 py-1.5 rounded-full bg-[#e5eeff] border border-[#c3c8bb] text-xs sm:text-sm font-semibold text-[#0b1c30]">
                                    Seniority Filter
                                </span>
                                <span className="px-4 sm:px-5 py-1 sm:py-1 rounded-full bg-[#e5eeff] border border-[#c3c8bb] text-xs sm:text-sm font-semibold text-[#0b1c30]">
                                    Industry Vertical
                                </span>
                                <span className="px-4 sm:px-5 py-1 sm:py-1 rounded-full bg-[#e5eeff] border border-[#c3c8bb] text-xs sm:text-sm font-semibold text-[#0b1c30]">
                                    Revenue Tier
                                </span>
                                <span className="px-4 sm:px-5 py-1 sm:py-1 rounded-full bg-[#e5eeff] border border-[#c3c8bb] text-xs sm:text-sm font-semibold text-[#0b1c30]">
                                    Tech Stack Signals
                                </span>
                                <span className="px-4 sm:px-5 py-1 sm:py-1 rounded-full bg-[#e5eeff] border border-[#c3c8bb] text-xs sm:text-sm font-semibold text-[#0b1c30]">
                                    Employee Growth %
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 03: SET UP AUTOMATIONS */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center"
                >
                    {/* Left Info */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-4">
                            <div className="relative flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-[#416900]/10 blur-xl rounded-full scale-125 pointer-events-none" />
                                <span className="relative text-6xl sm:text-7xl lg:text-8xl font-black text-[#416900]/10 tracking-tighter select-none">
                                    03
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#062300] tracking-tight leading-tight">
                                Set Up <br className="hidden sm:inline" /> Automations
                            </h2>
                        </div>

                        <p className="text-sm sm:text-lg text-[#43483e] leading-relaxed mt-2">
                            Scale your personality, not just your volume. Our visual <br className="hidden md:inline" />campaign builder allows you to craft multi-channel outreach <br className="hidden md:inline" />sequences that feel human. Use smart Personalized Tokens to <br className="hidden md:inline" />inject relevant details automatically, and set <strong className="text-[#181d13] font-bold">Trigger-based <br className="hidden md:inline" />Follow-ups</strong> that pause immediately once a prospect engages.
                        </p>

                        <div className="mt-6 sm:mt-8 pt-2 sm:pt-4">
                            <div className="flex items-center gap-2 text-sm sm:text-base text-[#416900] mb-4">
                                <Wand2 className="w-5 h-5 text-[#416900]" />
                                <span>Key Features</span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-[#416900] shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm sm:text-base font-bold text-[#0b1c30]">
                                            Smart Triggers
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#43483e] mt-0.5">
                                            Execute actions based on profile views, accepted invites, or link clicks.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <UserPlus className="w-5 h-5 text-[#416900] shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm sm:text-base font-bold text-[#0b1c30]">
                                            Dynamic Personalization
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#43483e] mt-0.5">
                                            Insert first names, company news, or shared alma maters automatically.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="lg:col-span-6 flex items-center justify-center w-full">
                        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]">
                            <Image
                                src="/footer/resources/product-manual/03.png"
                                alt="Set Up Automations"
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* 04: ANALYZE & SCALE */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center"
                >
                    {/* Left Visual (Enclosed container) */}
                    <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center">
                        <div className="w-full rounded-2xl sm:rounded-[28px] lg:rounded-[36px] border border-[#d8e0d2] bg-white p-4 sm:p-7 md:p-8 lg:p-10 shadow-xs">
                            <div className="relative w-full aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden">
                                <Image
                                    src="/footer/resources/product-manual/04.png"
                                    alt="Analyze & Scale"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Info */}
                    <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
                        <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-4">
                            <div className="relative flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-[#416900]/10 blur-xl rounded-full scale-125 pointer-events-none" />
                                <span className="relative text-6xl sm:text-7xl lg:text-8xl font-black text-[#416900]/10 tracking-tighter select-none">
                                    04
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#062300] tracking-tight leading-tight">
                                Analyze &amp; Scale
                            </h2>
                        </div>

                        <p className="text-sm sm:text-lg text-[#43483e] leading-relaxed mt-2">
                            Knowledge is power. Dive into a comprehensive performance <br className="hidden md:inline" />dashboard that tracks every open, click, and conversion. Utilize <br className="hidden md:inline" />A/B Testing Insights to compare messaging variations and <br className="hidden md:inline" />automatically double down on the strategies that deliver the <br className="hidden md:inline" />highest ROI.
                        </p>

                        <div className="mt-6 sm:mt-8 pt-2 sm:pt-4">
                            <div className="flex items-center gap-2 text-sm sm:text-base text-[#416900] mb-4">
                                <TrendingUp className="w-5 h-5 text-[#416900]" />
                                <span>Growth Strategy</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <div className="bg-white border border-[#c3c8bb] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-xs">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#416900]">
                                        84%
                                    </div>
                                    <div className="text-xs sm:text-sm font-semibold text-[#0b1c30] mt-1">
                                        Avg. Open Rate
                                    </div>
                                </div>

                                <div className="bg-white border border-[#c3c8bb] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-xs">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#416900]">
                                        12x
                                    </div>
                                    <div className="text-xs sm:text-sm font-semibold text-[#0b1c30] mt-1">
                                        Lead Velocity
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 05: IMPORT LEADS */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center"
                >
                    {/* Left Info */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-4">
                            <div className="relative flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-[#416900]/10 blur-xl rounded-full scale-125 pointer-events-none" />
                                <span className="relative text-6xl sm:text-7xl lg:text-8xl font-black text-[#416900]/10 tracking-tighter select-none">
                                    05
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#062300] tracking-tight leading-tight">
                                Import Leads
                            </h2>
                        </div>

                        <p className="text-sm sm:text-lg text-[#43483e] leading-relaxed mt-2">
                            Import leads from CSV files or integrate with your favorite <br className="hidden md:inline" />tools. NetworkUp.io supports multiple data sources to help you <br className="hidden md:inline" />get started in seconds.
                        </p>

                        <div className="mt-6 sm:mt-8 pt-2 sm:pt-4">
                            <div className="flex items-center gap-2 text-sm sm:text-base text-[#416900] mb-4">
                                <ShieldCheck className="w-5 h-5 text-[#416900]" />
                                <span>Key Safety &amp; Benefits</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0b1c30]">
                                    <CircleCheck className="w-3.5 h-3.5 sm:w-3 sm:h-3 stroke-[2] text-[#416900] shrink-0" />
                                    <span>Upload CSV, XLSX files</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0b1c30]">
                                    <CircleCheck className="w-3.5 h-3.5 sm:w-3 sm:h-3 stroke-[2] text-[#416900] shrink-0" />
                                    <span>Map and validate your data</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0b1c30]">
                                    <CircleCheck className="w-3.5 h-3.5 sm:w-3 sm:h-3 stroke-[2] text-[#416900] shrink-0" />
                                    <span>Start outreach instantly</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="lg:col-span-6 flex items-center justify-center w-full">
                        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]">
                            <Image
                                src="/footer/resources/product-manual/05.png"
                                alt="Import Leads"
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* 06: DATABASE */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center"
                >
                    {/* Left Visual (Enclosed container) */}
                    <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center">
                        <div className="w-full rounded-2xl sm:rounded-[28px] lg:rounded-[36px] border border-[#d8e0d2] bg-white p-4 sm:p-7 md:p-8 lg:p-10 shadow-xs">
                            <div className="relative w-full aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden">
                                <Image
                                    src="/footer/resources/product-manual/db.png"
                                    alt="Database"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Info */}
                    <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
                        <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-4">
                            <div className="relative flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-[#416900]/10 blur-xl rounded-full scale-125 pointer-events-none" />
                                <span className="relative text-6xl sm:text-7xl lg:text-8xl font-black text-[#416900]/10 tracking-tighter select-none">
                                    06
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#062300] tracking-tight leading-tight">
                                Database
                            </h2>
                        </div>

                        <p className="text-sm sm:text-lg text-[#43483e] leading-relaxed mt-2">
                            Store, organize, and manage all your leads, prospects, and <br className="hidden md:inline" />accounts in one place. Use powerful filters and smart tags to <br className="hidden md:inline" />keep your data clean and actionable.
                        </p>

                        <div className="mt-6 sm:mt-8 pt-2 sm:pt-4">
                            <div className="flex items-center gap-2 text-sm sm:text-base text-[#416900] mb-4">
                                <SearchCode className="w-5 h-5 text-[#416900]" />
                                <span>What to expect</span>
                            </div>

                            <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                <span className="px-3.5 py-1.5 rounded-full bg-[#e5eeff] border border-[#c3c8bb] text-xs sm:text-sm text-[#0b1c30]">
                                    Advanced filtering &amp; search
                                </span>
                                <span className="px-4 sm:px-5 py-1 rounded-full bg-[#e5eeff] border border-[#c3c8bb] text-xs sm:text-sm text-[#0b1c30]">
                                    Bulk actions &amp; export data
                                </span>
                                <span className="px-4 sm:px-5 py-1 rounded-full bg-[#e5eeff] border border-[#c3c8bb] text-xs sm:text-sm text-[#0b1c30]">
                                    Smart tags &amp; segmentation
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 07: CAMPAIGN BUILDER */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center"
                >
                    {/* Left Info */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-4">
                            <div className="relative flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-[#416900]/10 blur-xl rounded-full scale-125 pointer-events-none" />
                                <span className="relative text-6xl sm:text-7xl lg:text-8xl font-black text-[#416900]/10 tracking-tighter select-none">
                                    07
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#062300] tracking-tight leading-tight">
                                Campaign Builder
                            </h2>
                        </div>

                        <p className="text-sm sm:text-lg text-[#43483e] leading-relaxed mt-2">
                            Build multi-step outreach campaigns that engage your <br className="hidden md:inline" />prospects at every stage. Customize your steps, delays, and <br className="hidden md:inline" />conditions to maximize replies.
                        </p>

                        <div className="mt-6 sm:mt-8 pt-2 sm:pt-4">
                            <div className="flex items-center gap-2 text-sm sm:text-base text-[#416900] mb-4">
                                <Wand2 className="w-5 h-5 text-[#416900]" />
                                <span>Key Features</span>
                            </div>

                            <div className="space-y-3.5">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-[#416900] shrink-0" />
                                    <span className="text-sm sm:text-base font-bold text-[#0b1c30]">
                                        Multi-step sequences
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <UserPlus className="w-5 h-5 text-[#416900] shrink-0" />
                                    <span className="text-sm sm:text-base font-bold text-[#0b1c30]">
                                        Smart delays &amp; follow-ups
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <GitFork className="w-5 h-5 text-[#416900] shrink-0" />
                                    <span className="text-sm sm:text-base font-bold text-[#0b1c30]">
                                        Conditional logic &amp; variables
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="lg:col-span-6 flex items-center justify-center w-full">
                        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]">
                            <Image
                                src="/footer/resources/product-manual/07.png"
                                alt="Campaign Builder"
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* 08: AI WRITER */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center"
                >
                    {/* Left Visual (Enclosed container) */}
                    <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center">
                        <div className="w-full rounded-2xl sm:rounded-[28px] lg:rounded-[36px] border border-[#d8e0d2] bg-white p-4 sm:p-7 md:p-8 lg:p-10 shadow-xs">
                            <div className="relative w-full aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden">
                                <Image
                                    src="/footer/resources/product-manual/Ai.png"
                                    alt="AI Writer"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Info */}
                    <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
                        <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-4">
                            <div className="relative flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-[#416900]/10 blur-xl rounded-full scale-125 pointer-events-none" />
                                <span className="relative text-6xl sm:text-7xl lg:text-8xl font-black text-[#416900]/10 tracking-tighter select-none">
                                    08
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#062300] tracking-tight leading-tight">
                                AI Writer
                            </h2>
                        </div>

                        <p className="text-sm sm:text-lg text-[#43483e] leading-relaxed mt-2">
                            Create personalized messages that get replies. Our AI Writer <br className="hidden md:inline" />helps you craft connection requests and follow-ups tailored to <br className="hidden md:inline" />each prospect.
                        </p>

                        <div className="mt-6 sm:mt-8 space-y-3.5 pt-2">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 fill-[#7ceb2a] text-white shrink-0" />
                                <span className="text-sm sm:text-lg font-bold text-[#334155]">
                                    AI-powered personalization
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 fill-[#7ceb2a] text-white shrink-0" />
                                <span className="text-sm sm:text-lg font-bold text-[#334155]">
                                    Multiple tones &amp; styles
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 fill-[#7ceb2a] text-white shrink-0" />
                                <span className="text-sm sm:text-lg font-bold text-[#334155]">
                                    Save &amp; reuse templates
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
