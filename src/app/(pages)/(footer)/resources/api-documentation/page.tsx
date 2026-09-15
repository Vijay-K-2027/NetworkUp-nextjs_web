"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Zap,
    Lock,
    Code2,
    SlidersHorizontal,
    RotateCw,
    Copy,
    Check,
    Info,
    Shield,
    RefreshCw,
    UserSearch,
    SendHorizonal,
    MessagesSquare,
    ChartNoAxesCombined,
} from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function ApiDocumentationPage() {
    const [copiedUrl, setCopiedUrl] = useState(false);
    const [copiedHeader, setCopiedHeader] = useState(false);

    const handleCopyUrl = () => {
        navigator.clipboard.writeText("https://api.networkup.io/v1");
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
    };

    const handleCopyHeader = () => {
        navigator.clipboard.writeText("Authorization: Bearer YOUR_API_KEY");
        setCopiedHeader(true);
        setTimeout(() => setCopiedHeader(false), 2000);
    };

    return (
        <div className="w-full max-w-9xl mx-auto my-6 sm:my-10 px-4 md:px-10 space-y-10 sm:space-y-12 lg:space-y-16 overflow-x-hidden">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-1 sm:px-5"
            >
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold tracking-tight text-[#181d13]">
                    API Documentation
                </h1>
                <h2 className="text-base sm:text-lg lg:text-[20px] mt-2 leading-normal text-[#414a34]/80 font-normal">
                    Programmatic access to outreach data &amp; automation. Integrate Networkup&apos;s powerful engine <br className="hidden lg:inline" />
                    directly into your own applications, workflows, and CRMs.
                </h2>
            </motion.div>

            {/* 1. TOP 5 FEATURE / VALUE PROP CARDS */}
            <div className="space-y-4 sm:space-y-6">
                {/* Row 1: 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {/* Card 1: Powerful */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="bg-[#f6fcea] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-[#7ccb2a]/30 flex items-center justify-center text-[#416900] mb-4 sm:mb-5">
                                <Zap className="w-5 h-5 fill-[#3a6a00] text-[#3a6a00]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#181d13] mb-2 sm:mb-3">
                                Powerful
                            </h3>
                            <p className="text-sm sm:text-lg text-[#414a37] leading-relaxed">
                                Execute complex <br className="hidden sm:inline" />
                                automation sequences <br className="hidden sm:inline" />
                                and data enrichment at <br className="hidden sm:inline" />
                                scale.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Secure */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="bg-[#f6fcea] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-[#7ccb2a]/30 flex items-center justify-center text-[#416900] mb-4 sm:mb-5">
                                <Lock className="w-5 h-5 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#181d13] mb-2 sm:mb-3">
                                Secure
                            </h3>
                            <p className="text-sm sm:text-lg text-[#414a37] leading-relaxed">
                                Enterprise-grade <br className="hidden sm:inline" />
                                security with OAuth 2.0 <br className="hidden sm:inline" />
                                and granular scoped <br className="hidden sm:inline" />
                                access.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Developer Friendly */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="bg-[#f6fcea] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between sm:col-span-2 md:col-span-1"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-[#7ccb2a]/30 flex items-center justify-center text-[#416900] mb-4 sm:mb-5">
                                <Code2 className="w-5 h-5 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#181d13] mb-2 sm:mb-3 leading-snug">
                                Developer <br className="hidden sm:inline" />
                                Friendly
                            </h3>
                            <p className="text-sm sm:text-lg text-[#414a37] leading-relaxed">
                                Predictable RESTful <br className="hidden sm:inline" />
                                architecture with <br className="hidden sm:inline" />
                                comprehensive SDKs.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Row 2: 2 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {/* Card 4: Flexible */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="bg-[#f6fcea] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-[#7ccb2a]/30 flex items-center justify-center text-[#416900] mb-4 sm:mb-5">
                                <SlidersHorizontal className="w-5 h-5 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#181d13] mb-2 sm:mb-3">
                                Flexible
                            </h3>
                            <p className="text-sm sm:text-lg text-[#414a37] leading-relaxed">
                                Adaptable payloads <br className="hidden sm:inline" />
                                supporting custom <br className="hidden sm:inline" />
                                fields and variable data <br className="hidden sm:inline" />
                                types.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 5: Real-time */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="bg-[#f6fcea] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-[#7ccb2a]/30 flex items-center justify-center text-[#416900] mb-4 sm:mb-5">
                                <RefreshCw className="w-5 h-5 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#181d13] mb-2 sm:mb-3">
                                Real-time
                            </h3>
                            <p className="text-sm sm:text-lg text-[#414a37] leading-relaxed">
                                Instant event delivery <br className="hidden sm:inline" />
                                via webhooks for up-to- <br className="hidden sm:inline" />
                                the-second syncing.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 2. BASE URL SECTION */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="space-y-3 sm:space-y-4"
            >
                <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-[#181d13] tracking-tight">
                        Base URL
                    </h2>
                    <p className="text-sm sm:text-lg text-[#414a37] mt-1.5 leading-relaxed">
                        All API requests should be prefixed with the following base URL. We use HTTPS for all requests to <br className="hidden md:inline" />
                        ensure data privacy.
                    </p>
                </div>

                <div className="bg-[#e5ead9] rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-7">
                    {/* URL Bar */}
                    <div className="bg-white rounded-xl p-3 sm:p-4 flex items-center justify-between border border-[#d6e3c5] shadow-2xs">
                        <code className="text-xs sm:text-sm text-[#181d13] select-all overflow-x-auto mr-2">
                            https://api.networkup.io/v1
                        </code>
                        <button
                            type="button"
                            onClick={handleCopyUrl}
                            className="p-2 rounded-lg bg-[#ebf0de] text-[#414a37] hover:bg-[#dfe6d1] transition-colors flex items-center justify-center shrink-0 ml-2"
                            title="Copy URL"
                            aria-label="Copy URL"
                        >
                            {copiedUrl ? (
                                <Check className="w-4 h-4 text-[#416900]" />
                            ) : (
                                <Copy className="w-4 h-4 text-[#414a37]" />
                            )}
                        </button>
                    </div>

                    {/* Versioning note */}
                    <div className="mt-3.5 sm:mt-5 flex items-start gap-2.5 text-xs sm:text-sm text-[#43483e]">
                        <Info className="w-5 h-5 sm:w-6 sm:h-6 text-[#3a6a00] shrink-0 mt-0.5" />
                        <div>
                            <span className="text-base sm:text-lg font-medium text-[#181d13] mr-1.5">
                                Versioning
                            </span>
                            <div className="text-xs sm:text-sm text-[#414a37] mt-0.5">
                                When we make backwards-incompatible changes to the API, we release a new version. The <br className="hidden md:inline" />
                                current version is v1.
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. AUTHENTICATION SECTION */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="space-y-3 sm:space-y-4"
            >
                <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-[43px] text-[#181d13] tracking-tight">
                        Authentication
                    </h2>
                    <p className="text-sm sm:text-lg text-[#414a37] mt-1.5 leading-relaxed">
                        NetworkUp API supports OAuth 2.0 for user-facing applications and API Keys for server-to-server <br className="hidden md:inline" />
                        integrations. Pass your token in the Authorization header.
                    </p>
                </div>

                <div className="bg-[#2d3226] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-7 text-white">
                    <div className="text-[11px] font-bold text-[#eef3e1]/70 tracking-wider uppercase mb-3 font-mono">
                        HTTP HEADER
                    </div>

                    {/* Code Bar */}
                    <div className="bg-[#13180f] rounded-xl px-3.5 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between border border-[#2b3624]">
                        <div className="text-xs sm:text-sm lg:text-[15px] truncate mr-2 overflow-x-auto">
                            <span className="text-[#8bdb3b]">
                                Authorization: Bearer
                            </span>{"  "}
                            <span className="text-gray-300">
                                YOUR_API_KEY
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={handleCopyHeader}
                            className="text-[#eef3e1] hover:text-white transition-colors p-1.5 rounded shrink-0"
                            title="Copy Header"
                            aria-label="Copy Header"
                        >
                            {copiedHeader ? (
                                <Check className="w-4 h-4 text-[#8bdb3b]" />
                            ) : (
                                <Copy className="w-4 h-4 text-[#eef3e1]" />
                            )}
                        </button>
                    </div>

                    {/* Security note */}
                    <div className="mt-3.5 sm:mt-5 flex items-center gap-2.5 text-xs sm:text-sm text-[#eef3e1]/80">
                        <Shield className="w-4 h-4 text-[#8bdb3b] shrink-0" />
                        <span>
                            Never share your API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* 4. WHAT CAN YOU BUILD? SECTION */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="space-y-4 sm:space-y-6"
            >
                <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-[#181d13] tracking-tight">
                        What Can You Build?
                    </h2>
                    <p className="text-sm sm:text-lg text-[#414a37] mt-1.5 leading-relaxed">
                        Unlock the full potential of your platform by integrating our key capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Item 1: Find & Enrich Leads */}
                    <motion.div
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        className="rounded-2xl border border-[#000000]/0 bg-white p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 shadow-2xs hover:border-[#cfdebe] transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-[#3a6a00]/10 flex items-center justify-center text-[#416900] shrink-0">
                            <UserSearch className="w-5 h-5 text-[#3a6a00]" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1">
                                Find &amp; Enrich Leads
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Search our global database and <br className="hidden sm:inline" />
                                append missing contact data to your <br className="hidden sm:inline" />
                                existing records.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2: Run Campaigns */}
                    <motion.div
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        className="rounded-2xl border border-[#000000]/0 bg-white p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 shadow-2xs hover:border-[#cfdebe] transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-[#486639]/10 flex items-center justify-center text-[#416900] shrink-0">
                            <SendHorizonal className="w-5 h-5 text-[#486639]" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1">
                                Run Campaigns
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Trigger multi-channel sequences <br className="hidden sm:inline" />
                                based on external events in your <br className="hidden sm:inline" />
                                CRM.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 3: Manage Conversations */}
                    <motion.div
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        className="rounded-2xl border border-[#000000]/0 bg-white p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 shadow-2xs hover:border-[#cfdebe] transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-[#983986]/10 flex items-center justify-center text-[#416900] shrink-0">
                            <MessagesSquare className="w-5 h-5 text-[#983986]" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1">
                                Manage Conversations
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Retrieve replies, classify intent <br className="hidden sm:inline" />
                                automatically, and route hot leads to <br className="hidden sm:inline" />
                                sales reps.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 4: Sync Data */}
                    <motion.div
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        className="rounded-2xl border border-[#000000]/0 bg-white p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 shadow-2xs hover:border-[#cfdebe] transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-[#3a6a00]/10 flex items-center justify-center text-[#416900] shrink-0">
                            <RefreshCw className="w-5 h-5 text-[#3a6a00]" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1">
                                Sync Data
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Keep bi-directional sync active <br className="hidden sm:inline" />
                                between NetworkUp and your <br className="hidden sm:inline" />
                                bespoke internal tools.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 5: Track Performance */}
                    <motion.div
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        className="rounded-2xl border border-[#000000]/0 bg-white p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 shadow-2xs hover:border-[#cfdebe] transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-[#486639]/10 flex items-center justify-center text-[#416900] shrink-0">
                            <ChartNoAxesCombined className="w-5 h-5 text-[#486639]" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1">
                                Track Performance
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Export raw event logs to build custom <br className="hidden sm:inline" />
                                BI dashboards for your growth team.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
}
