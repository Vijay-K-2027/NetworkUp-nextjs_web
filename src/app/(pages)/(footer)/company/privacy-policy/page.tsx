"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Database,
    Zap,
    Cookie,
    Lock,
    CircleCheck,
} from "lucide-react";
import { TbShieldLock } from "react-icons/tb";

export default function PrivacyPolicyPage() {
    return (
        <div className="w-full bg-[#fbfdf9] min-h-screen text-[#181d13]">
            {/* Header Area */}
            <section className="w-full pt-14 pb-8 sm:pt-18 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-9xl mx-auto flex flex-col items-center justify-center">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-xs font-bold uppercase tracking-widest text-[#406900] mb-3"
                    >
                        LEGAL &amp; TRANSPARENCY
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#191c1e]"
                    >
                        Privacy Policy
                    </motion.h1>
                </div>
            </section>

            {/* Main Content Card Area */}
            <main className="w-full max-w-9xl mx-auto p-6 sm:p-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="bg-white rounded-2xl sm:rounded-3xl border border-[#e5ece0] p-6 sm:p-10 md:p-12 lg:p-14 shadow-xs space-y-10 sm:space-y-12"
                >
                    {/* 01. Introduction */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 border-b border-[#c0caae]/50">
                            <ShieldCheck className="w-5 h-5 text-[#89cf1c] stroke-[2.2] shrink-0" />
                            <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] tracking-tight">
                                Introduction
                            </h2>
                        </div>

                        <p className="text-sm sm:text-[15px] text-[#414a34] leading-relaxed">
                            At NetworkUp.ai, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our high-velocity growth platform for LinkedIn automation and analytics. We believe in total transparency regarding your data.
                        </p>

                        <p className="text-sm sm:text-[15px] text-[#414a34] leading-relaxed">
                            By using NetworkUp.ai, you agree to the collection and use of information in accordance with this policy. If you have any questions or concerns about our practices, please reach out to our privacy team at{" "}
                            <a
                                href="mailto:privacy@networkup.ai"
                                className="text-[#406900] font-semibold hover:underline"
                            >
                                privacy@networkup.ai
                            </a>
                            .
                        </p>
                    </section>

                    {/* 02. Data We Collect */}
                    <section className="space-y-4 pt-10 sm:pt-12">
                        <div className="flex items-center gap-3 border-b border-[#c0caae]/50">
                            <Database className="w-5 h-5 text-[#89cf1c] stroke-[2.2] shrink-0" />
                            <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] tracking-tight">
                                Data We Collect
                            </h2>
                        </div>

                        <p className="text-sm sm:text-[15px] text-[#414a34] leading-relaxed">
                            We collect several different types of information for various purposes to provide and improve our service to you. This includes:
                        </p>

                        <div className="space-y-4 pt-1">
                            {/* Information You Provide */}
                            <div className="bg-[#eceef0] rounded-xl p-5 sm:p-6 space-y-3">
                                <h3 className="font-bold text-sm sm:text-base text-[#191c1e]">
                                    Information You Provide
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#414a34]">
                                        <CircleCheck className="w-4 h-4 text-[#406900] stroke-[2] shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="font-semibold text-[#191c1e]">Account Data:</strong> Name, email address, password, and billing information.
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#414a34]">
                                        <CircleCheck className="w-4 h-4 text-[#406900] stroke-[2] shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="font-semibold text-[#191c1e]">Integration Data:</strong> LinkedIn profile URLs, session cookies required for automation, and preferences you set.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Information Automatically Collected */}
                            <div className="bg-[#eceef0] rounded-2xl p-5 sm:p-6 space-y-3">
                                <h3 className="font-bold text-sm sm:text-base text-[#191c1e]">
                                    Information Automatically Collected
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#414a34]">
                                        <CircleCheck className="w-4 h-4 text-[#406900] stroke-[2] shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="font-semibold text-[#191c1e]">Usage Data:</strong> How the service is accessed and used, IP addresses, browser types, and diagnostic data.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 03. How We Use Your Information */}
                    <section className="space-y-4 pt-10 sm:pt-12">
                        <div className="flex items-center gap-3 border-b border-[#c0caae]/50">
                            <Image
                                src="/footer/GlowSetting.png"
                                alt="How We Use Your Information"
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain shrink-0"
                            />
                            <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] tracking-tight">
                                How We Use Your Information
                            </h2>
                        </div>

                        <p className="text-sm sm:text-[15px] text-[#414a34] leading-relaxed">
                            The data we collect is utilized strictly to provide, maintain, and improve our services. Specifically, we use your data to:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                            <div className="bg-[#f7f9fb] border border-[#c0caae]/50 rounded-xl p-4 flex items-center gap-3 shadow-2xs">
                                <Zap className="w-4 h-4 text-[#406900] shrink-0" />
                                <span className="text-xs sm:text-sm text-[#414a34] font-medium">
                                    Execute automated LinkedIn campaigns on your behalf.
                                </span>
                            </div>

                            <div className="bg-[#f7f9fb] border border-[#c0caae]/50 rounded-xl p-4 flex items-center gap-3 shadow-2xs">
                                <Image
                                    src="/footer/Bar.png"
                                    alt="Analytics"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4 object-contain shrink-0"
                                />
                                <span className="text-xs sm:text-sm text-[#414a34] font-medium">
                                    Generate analytics and performance reports.
                                </span>
                            </div>

                            <div className="bg-[#f7f9fb] border border-[#c0caae]/50 rounded-xl p-4 flex items-center gap-3 shadow-2xs">
                                <Image
                                    src="/footer/Headphone.png"
                                    alt="Customer Support"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4 object-contain shrink-0"
                                />
                                <span className="text-xs sm:text-sm text-[#414a34] font-medium">
                                    Provide customer support and respond to inquiries.
                                </span>
                            </div>

                            <div className="bg-[#f7f9fb] border border-[#c0caae]/50 rounded-xl p-4 flex items-center gap-3 shadow-2xs">
                                <Image
                                    src="/footer/Protect.png"
                                    alt="Security"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4 object-contain shrink-0"
                                />
                                <span className="text-xs sm:text-sm text-[#414a34] font-medium">
                                    Detect, prevent and address technical or security issues.
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 04. Cookies & Tracking */}
                    <section className="space-y-4 pt-10 sm:pt-12">
                        <div className="flex items-center gap-3 border-b border-[#c0caae]/50">
                            <Cookie className="w-5 h-5 text-[#89CF1C] stroke-[2.2] shrink-0" />
                            <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] tracking-tight">
                                Cookies &amp; Tracking
                            </h2>
                        </div>

                        <p className="text-sm sm:text-[15px] text-[#414a34] leading-relaxed">
                            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                        </p>

                        <p className="text-sm sm:text-[15px] text-[#414a34] leading-relaxed">
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service, particularly the authentication features necessary for NetworkUp.ai to function securely.
                        </p>
                    </section>

                    {/* 05. Data Security */}
                    <section className="space-y-4 pt-10 sm:pt-12">
                        <div className="flex items-center gap-3 border-b border-[#c0caae]/50">
                            <Lock className="w-5 h-5 text-[#89CF1C] stroke-[2.2] shrink-0" />
                            <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] tracking-tight">
                                Data Security
                            </h2>
                        </div>

                        <p className="text-sm sm:text-[15px] text-[#414a34] leading-relaxed">
                            The security of your data is paramount. We employ enterprise-grade encryption for data at rest and in transit. While no method of transmission over the Internet, or method of electronic storage is 100% secure, we strive to use commercially acceptable means to protect your Personal Data.
                        </p>

                        {/* End-to-End Encryption Box */}
                        <div className="bg-[#eceef0] rounded-2xl p-5 sm:p-6 flex items-start gap-4 mt-2">
                            <TbShieldLock className="w-6 h-6 text-[#406900] stroke-[2.2] shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-sm sm:text-base text-[#191c1e]">
                                    End-to-End Encryption
                                </h3>
                                <p className="text-xs sm:text-sm text-[#414a34] mt-1 leading-relaxed">
                                    All sensitive credentials, including LinkedIn session cookies, are encrypted using AES-256 before being stored in our secure database clusters.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 06. Your Rights */}
                    <section className="space-y-4 pt-10 sm:pt-12">
                        <div className="flex items-center gap-3 border-b border-[#c0caae]/50">
                            <Image
                                src="/footer/Right.png"
                                alt="Your Rights"
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain shrink-0"
                            />
                            <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] tracking-tight">
                                Your Rights
                            </h2>
                        </div>

                        <p className="text-sm sm:text-[15px] text-[#414a34] leading-relaxed">
                            Under applicable data protection laws (such as GDPR and CCPA), you have specific rights regarding your personal information. NetworkUp.ai respects these rights and is committed to facilitating them.
                        </p>

                        <div className="space-y-2.5 pt-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#414a34]">
                                <span className="px-2.5 py-1 rounded bg-[#eceef0] text-[#191c1e] font-bold text-[11px] w-fit shrink-0">
                                    Right to Access
                                </span>
                                <span>Request a copy of the personal data we hold about you.</span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#414a34]">
                                <span className="px-2.5 py-1 rounded bg-[#eceef0] text-[#191c1e] font-bold text-[11px] w-fit shrink-0">
                                    Right to Rectification
                                </span>
                                <span>Request correction of inaccurate or incomplete data.</span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#414a34]">
                                <span className="px-2.5 py-1 rounded bg-[#eceef0] text-[#191c1e] font-bold text-[11px] w-fit shrink-0">
                                    Right to Erasure
                                </span>
                                <span>Request deletion of your personal data (&quot;Right to be Forgotten&quot;).</span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#414a34]">
                                <span className="px-2.5 py-1 rounded bg-[#eceef0] text-[#191c1e] font-bold text-[11px] w-fit shrink-0">
                                    Right to Object
                                </span>
                                <span>Object to our processing of your personal data.</span>
                            </div>
                        </div>

                        {/* DPO Callout Note */}
                        <div className="rounded-xl bg-[#406900]/5 border border-[#406900]/20 p-4 sm:p-5 mt-6">
                            <p className="text-xs sm:text-sm text-[#414a34] leading-relaxed">
                                To exercise any of these rights, please contact our Data Protection Officer at{" "}
                                <a
                                    href="mailto:info@whiterapps.com"
                                    className="text-[#414a34] font-semibold hover:underline"
                                >
                                    info@whiterapps.com
                                </a>
                                . We aim to respond to all legitimate requests within one month.
                            </p>
                        </div>
                    </section>
                </motion.div>
            </main>
        </div>
    );
}
