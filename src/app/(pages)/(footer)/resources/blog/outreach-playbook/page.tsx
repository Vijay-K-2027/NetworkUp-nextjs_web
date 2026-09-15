"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    Sparkles,
    Check,
} from "lucide-react";

export default function SaaSOutreachPlaybookArticlePage() {
    return (
        <div className="w-full bg-[#f7f9fb] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white w-full max-w-9xl mx-auto p-5">
                {/* 1. BREADCRUMB */}
                <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#414a37] mb-6 sm:mb-8">
                    <Link
                        href="/resources/blog"
                        className="transition-colors font-medium hover:text-[#3a6a00]"
                    >
                        Blog
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[#181d13] font-medium truncate">
                        The SaaS LinkedIn Outreach Playbook
                    </span>
                </nav>

                {/* 2. HERO HEADER BOX */}
                <div className="w-full bg-gradient-to-r from-[#78c418]/20 to-[#ffffff]/20 rounded-3xl p-6 sm:p-10 md:p-12 border border-[#85e032]/30 shadow-xs">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Left Info */}
                        <div className="md:col-span-7 flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-[#3a6a00]/10 text-[#3a6a00] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                                    CAMPAIGNS & PLAYBOOKS
                                </span>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold text-[#181d13] mt-3 sm:mt-4 tracking-tight leading-[1.15]">
                                    The SaaS LinkedIn Outreach <br className="hidden sm:inline" />
                                    Playbook
                                </h1>
                                <p className="text-md sm:text-lg text-[#414a37] font-normal leading-[2rem] mt-8 max-w-4xl">
                                    Stop wasting pipeline on bad-fit accounts. Learn how top-performing B2B revenue teams build data-driven Ideal Customer Profiles that supercharge conversion rates and accelerate sales velocity.
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-6 sm:mt-8 pt-5 border-t border-[#b8f47c]/50">
                                <Image
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
                                    alt="Aarav Tiwari"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover shrink-0"
                                />
                                <div>
                                    <div className="text-sm sm:text-lg font-bold text-[#181d13]">
                                        Aarav Tiwari
                                    </div>
                                    <div className="text-[13px] sm:text-sm text-[#414a37]">
                                        July 11, 2026 · 10 min read
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Graphic */}
                        <div className="md:col-span-5 flex items-center justify-center">
                            <Image
                                src="/footer/resources/blog/Article5.png"
                                alt="The SaaS LinkedIn Outreach Playbook"
                                width={500}
                                height={380}
                                className="w-full h-auto object-contain max-h-[380px]"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* 3. SECTION: WHAT MAKES A LINKEDIN OUTREACH CAMPAIGN SUCCESSFUL? */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        What Makes a LinkedIn Outreach Campaign Successful?
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#596257] leading-relaxed">
                        A high-performing campaign rests on five absolute pillars that ensure you connect with the right accounts using the right narrative.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 w-full max-w-[58%] gap-3 sm:gap-4 mt-6">
                        {/* 01 Right Audience */}
                        <div className="bg-[#fdfefb] border border-[#3a6a00]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-start shadow-xs">
                            <span className="text-xs sm:text-sm font-bold text-[#4caf00] mb-2">
                                01
                            </span>
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold text-[#181d13] mb-1">
                                    Right Audience
                                </h3>
                                <p className="text-[11px] sm:text-xs text-[#596257] leading-relaxed">
                                    Pinpoint exact <br />buyer personas.
                                </p>
                            </div>
                        </div>

                        {/* 02 Relevant Messaging */}
                        <div className="bg-[#fdfefb] border border-[#3a6a00]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-start shadow-xs">
                            <span className="text-xs sm:text-sm font-bold text-[#4caf00] mb-2">
                                02
                            </span>
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold text-[#181d13] mb-1">
                                    Relevant Messaging
                                </h3>
                                <p className="text-[11px] sm:text-xs text-[#596257] leading-relaxed">
                                    Focus entirely on <br />their pain points.
                                </p>
                            </div>
                        </div>

                        {/* 03 Structured Follow-Ups */}
                        <div className="bg-[#fdfefb] border border-[#3a6a00]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-start shadow-xs">
                            <span className="text-xs sm:text-sm font-bold text-[#4caf00] mb-2">
                                03
                            </span>
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold text-[#181d13] mb-1">
                                    Structured Follow-Ups
                                </h3>
                                <p className="text-[11px] sm:text-xs text-[#596257] leading-relaxed">
                                    Multi-step <br />persistence.
                                </p>
                            </div>
                        </div>

                        {/* 04 Personalization */}
                        <div className="bg-[#fdfefb] border border-[#3a6a00]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-start shadow-xs">
                            <span className="text-xs sm:text-sm font-bold text-[#4caf00] mb-2">
                                04
                            </span>
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold text-[#181d13] mb-1">
                                    Personalization
                                </h3>
                                <p className="text-[11px] sm:text-xs text-[#596257] leading-relaxed">
                                    Contextual triggers.
                                </p>
                            </div>
                        </div>

                        {/* 05 Optimization */}
                        <div className="bg-[#fdfefb] border border-[#3a6a00]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-start shadow-xs col-span-2 md:col-span-1">
                            <span className="text-xs sm:text-sm font-bold text-[#4caf00] mb-2">
                                05
                            </span>
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold text-[#181d13] mb-1">
                                    Optimization
                                </h3>
                                <p className="text-[11px] sm:text-xs text-[#596257] leading-relaxed">
                                    Continuous A/B <br />testing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. SECTION: LINKEDIN OUTREACH FRAMEWORK */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        LinkedIn Outreach Framework
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#596258] leading-relaxed">
                        Execute this end-to-end multi-step workflow to turn cold profiles into warm conversations:
                    </p>

                    {/* 7 Horizontal Process Tabs inside green container */}
                    <div className="w-fit mt-6 bg-[#f2f9ea] border border-[#e5eae2] flex flex-row items-center justify-start rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xs">
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-2 mx-5">
                            {[
                                { name: "01. ICP" },
                                { name: "02. Find" },
                                { name: "03. Write" },
                                { name: "04. Launch" },
                                { name: "05. Follow Up", multiline: true },
                                { name: "06. Analyze" },
                                { name: "07. Scale" },
                            ].map((item) => (
                                <div
                                    key={item.name}
                                    className="w-full max-w-[150px] bg-white border border-[#e5eae2] rounded-xl py-3 px-5 sm:px-8 text-center flex items-center justify-center shadow-xs min-h-[52px]"
                                >
                                    <div className="text-xs sm:text-sm font-bold text-[#181d13] leading-tight">
                                        {item.multiline ? (
                                            <>
                                                <span>05. Follow</span>
                                                <br />
                                                <span>Up</span>
                                            </>
                                        ) : (
                                            item.name
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. SECTION: STEP 1. DEFINE YOUR ICP */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Step 1. Define Your ICP
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#596257] leading-relaxed">
                        Before writing a single line of copy, establish precise filters for industry, company size, tech stack, and trigger events.
                    </p>

                    <div className="mt-6 bg-[#f2f9ea] border border-[#e5eae2] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xs">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            {/* Left Parameters */}
                            <div className="md:col-span-8">
                                <h3 className="text-lg sm:text-xl font-bold text-[#181d13] mb-3">
                                    Ideal Customer Profile Parameters
                                </h3>
                                <div className="space-y-1.5 mx-5 text-xs sm:text-sm text-[#596257] leading-relaxed">
                                    <p>Industry: B2B SaaS, FinTech, DevTools</p>
                                    <p>Company Size: 50–500 employees</p>
                                    <p>Geography: North America & Western Europe</p>
                                    <p>Key Roles: VP of Sales, Head of Growth, RevOps</p>
                                </div>
                            </div>

                            {/* Right Score Box */}
                            <div className="md:col-span-4 bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xs border border-[#e5eae2] flex flex-col items-center justify-center">
                                <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#4caf00]">
                                    94%
                                </div>
                                <span className="text-[10px] sm:text-[11px] font-bold text-[#596257] uppercase tracking-wider mt-1.5">
                                    ICP MATCH SCORE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. SECTION: STEP 2. FIND THE RIGHT PROSPECTS */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Step 2. Find the Right Prospects
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#596257] leading-relaxed">
                        Use advanced boolean search and intent signals to source individuals actively experiencing the bottleneck your product solves.
                    </p>

                    <div className="mt-6 bg-white border border-[#e5e7eb] rounded-2xl p-5 sm:p-6 shadow-xs">
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#f3f4f6]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#f2f9ea] text-[#4caf00] font-bold text-sm flex items-center justify-center shrink-0">
                                    SJ
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-[#181d13]">
                                        Sarah Jenkins
                                    </div>
                                    <div className="text-xs text-[#596257]">
                                        VP of Sales at TechCorp · 94% ICP Match
                                    </div>
                                </div>
                            </div>
                            <span className="text-[11px] font-bold text-[#4caf00] bg-[#f2f9ea] px-3 py-1 rounded-full">
                                Ready to Outreach
                            </span>
                        </div>
                        <p className="text-sm text-[#596257] mt-4 leading-relaxed">
                            Signal Detected: TechCorp recently hired 5 new account executives and expanded their outbound infrastructure <br />stack last month.
                        </p>
                    </div>
                </div>

                {/* 7. SECTION: STEP 3. WRITE THE CONNECTION REQUEST */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Step 3. Write the Connection Request
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#596257] leading-relaxed">
                        Keep your connection note under 300 characters. Never pitch in the first note; focus solely on context and relevance.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Generic */}
                        <div className="bg-white border border-[#e5eae2] rounded-xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div>
                                <span className="text-[13px] font-bold text-[#dc2626] uppercase block mb-3">
                                    GENERIC NOTE (12% ACCEPTANCE)
                                </span>
                                <p className="text-sm sm:text-[17px] text-[#596257] italic leading-relaxed font-normal">
                                    &ldquo;Hi Sarah, I saw you work at TechCorp and wanted <br />to connect about our SaaS revenue acceleration <br />platform.&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Personalized */}
                        <div className="bg-[#f2f9ea] border border-[#4caf00]/40 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div>
                                <span className="text-[13px] font-bold text-[#4caf00] uppercase block mb-3">
                                    PERSONALIZED NOTE (58% ACCEPTANCE)
                                </span>
                                <p className="text-sm sm:text-[17px] text-[#181d13] italic leading-relaxed font-medium">
                                    &ldquo;Hi Sarah, noticed TechCorp just expanded the <br />sales team. We recently helped a similar team solve <br />inbound routing bottlenecks...&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8. SECTION: STEP 4. BUILD A MULTI-STEP SEQUENCE */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Step 4. Build a Multi-Step Sequence
                    </h2>
                    <p className="mt-3 text-sm sm:text-[17.5px] text-[#e5eae2] leading-relaxed">
                        Conversion rarely happens on the first touch. Deploy a structured multi-day sequence:
                    </p>

                    <div className="mt-6 bg-[#f2f9ea] border border-[#e5eae2] rounded-xl sm:rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
                        {[
                            { day: "Day 1", text: "Send contextual connection request" },
                            { day: "Day 2-3", text: "First direct message upon acceptance (Share industry insight)" },
                            { day: "Day 5", text: "Follow-up with a brief case study or relevant asset" },
                            { day: "Day 8", text: "Value-based audio note or quick question" },
                            { day: "Day 12", text: "Polite breakup / final touch message" },
                        ].map((item) => (
                            <div
                                key={item.day}
                                className="bg-white rounded-xl p-3.5 sm:p-4 flex items-center gap-5 shadow-2xs border border-[#e5eae2"
                            >
                                <span className="text-[#4caf00] text-sm sm:text-base font-bold w-20 shrink-0">
                                    {item.day}
                                </span>
                                <span className="text-sm sm:text-base font-normal text-[#181d13]">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 9. SECTION: STEP 5. PERSONALIZE THE CONVERSATION */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Step 5. Personalize the Conversation
                    </h2>
                    <p className="mt-3 text-sm sm:text-[17.5px] text-[#596257] leading-relaxed">
                        Shift from superficial personalization (&ldquo;I love your profile&rdquo;) to deep contextual hooks based on company milestones, tech stack changes, or published content.
                    </p>
                </div>

                {/* 10. SECTION: STEP 6. USE AI WITHOUT LOSING THE HUMAN TOUCH */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Step 6. Use AI Without Losing the Human Touch
                    </h2>
                    <p className="mt-3 text-sm sm:text-[17.5px] text-[#596257] leading-relaxed">
                        Leverage autonomous AI engines to research profiles and draft hyper-personalized messages at scale while retaining full human editorial control.
                    </p>

                    <div className="mt-6 bg-[#f2f9ea] border border-[#e5eae2] rounded-xl p-5 sm:p-6 shadow-xs max-w-sm">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-bold text-[#181d13]">
                                NetworkUp AI Outreach Writer
                            </span>
                            <span className="text-[12px] font-bold text-white bg-[#4caf00] px-3 py-1 rounded-full shadow-2xs">
                                GPT-4o Engine
                            </span>
                        </div>
                        <button className="w-full bg-[#4caf00] text-white text-xs font-bold py-3 rounded-xl transition-colors text-center shadow-xs cursor-pointer">
                            Generate Message
                        </button>
                    </div>
                </div>

                {/* 11. SECTION: STEP 7. TRACK CAMPAIGN PERFORMANCE */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Step 7. Track Campaign Performance
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#596257] leading-relaxed">
                        Monitor core metrics in real-time to identify drop-off points and continuously refine your conversion funnel.
                    </p>

                    <div className="mt-6 bg-[#f2f9ea] border border-[#e5eae2] flex items-center justify-center rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xs">
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 w-full max-w-4xl">
                            {[
                                { label: "CONNECTION RATE", value: "48%", isGreen: false },
                                { label: "REPLY RATE", value: "24%", isGreen: true },
                                { label: "POSITIVE REPLY", value: "12%", isGreen: false },
                                { label: "MEETING RATE", value: "8%", isGreen: false },
                                { label: "CONVERSION", value: "3%", isGreen: true },
                            ].map((metric) => (
                                <div
                                    key={metric.label}
                                    className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-xs border border-gray-100 flex flex-col justify-center items-center min-h-[95px]"
                                >
                                    <span className="text-[10px] font-extrabold text-[#596257] uppercase tracking-wider block mb-1.5 max-w-[100px]">
                                        {metric.label}
                                    </span>
                                    <div className={`text-2xl sm:text-3xl font-bold ${metric.isGreen ? "text-[#4caf00]" : "text-[#181d13]"}`}>
                                        {metric.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 12. SECTION: CAMPAIGN EXAMPLE */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Campaign Example
                    </h2>
                    <p className="mt-3 text-sm sm:text-[17.5px] text-[#596257] leading-relaxed">
                        Here is a complete end-to-end example of a high-converting prospect profile matched with an AI-generated outreach sequence.
                    </p>
                </div>

                {/* 13. SECTION: CAMPAIGN OPTIMIZATION */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Campaign Optimization
                    </h2>
                    <p className="mt-3 text-sm sm:text-[17.5px] text-[#596257] leading-relaxed">
                        Four key optimization strategies to boost engagement across existing sequences:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-[#f2f9ea] border border-[#e5eae2] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <h3 className="text-lg font-bold text-[#181d13] mb-1.5">
                                1. Timing Adjustments
                            </h3>
                            <p className="text-[16px] text-[#596257]">
                                Launch batches on Tuesday and Thursday mornings <br />for optimal open rates.
                            </p>
                        </div>

                        <div className="bg-[#f2f9ea] border border-[#e5eae2] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <h3 className="text-lg font-bold text-[#181d13] mb-1.5">
                                2. Hook Variations
                            </h3>
                            <p className="text-[16px] text-[#596257]">
                                Test question-based hooks against milestone-based <br /> hooks weekly.
                            </p>
                        </div>

                        <div className="bg-[#f2f9ea] border border-[#e5eae2] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <h3 className="text-lg font-bold text-[#181d13] mb-1.5">
                                3. CTA Softening
                            </h3>
                            <p className="text-[16px] text-[#596257]">
                                Replace &ldquo;Can we jump on a call?&rdquo; with &ldquo;Open to <br />seeing a 2-min breakdown?&rdquo;
                            </p>
                        </div>

                        <div className="bg-[#f2f9ea] border border-[#e5eae2] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <h3 className="text-lg font-bold text-[#181d13] mb-1.5">
                                4. Follow-up Cadence
                            </h3>
                            <p className="text-[16px] text-[#596257]">
                                Extend follow-up intervals to 4–5 days to prevent <br />prospect fatigue.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 14. SECTION: A/B TESTING PLAYBOOK */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        A/B Testing Playbook
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#596257] leading-relaxed">
                        Systematically test variables across your campaign runs to maximize ROI:
                    </p>

                    <div className="mt-6 bg-white border border-[#e5e7eb] rounded-2xl overflow-x-auto shadow-xs">
                        <table className="w-full text-left text-xs sm:text-sm min-w-[700px]">
                            <colgroup>
                                <col className="w-[15%] sm:w-[16%]" />
                                <col className="w-[16%] sm:w-[16%]" />
                                <col className="w-[22%] sm:w-[16%]" />
                                <col className="w-[24%] sm:w-[17%]" />
                                <col className="w-[16%] sm:w-[13%]" />
                                <col className="w-[15%] sm:w-[15%]" />
                            </colgroup>
                            <thead className="bg-[#f2f9ea] text-[#181d13] font-bold border-b border-[#e5eae2]">
                                <tr>
                                    <th className="py-4"></th>
                                    <th className="py-4 px-3">Variable</th>
                                    <th className="py-4 px-3">Variant A</th>
                                    <th className="py-4 px-3">Variant B</th>
                                    <th className="py-4 px-3">Winner</th>
                                    <th className="py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-[#596257]">
                                <tr>
                                    <td className="py-4.5"></td>
                                    <td className="py-4.5 px-3 font-bold text-[#181d13]">Message Length</td>
                                    <td className="py-4.5 px-3">Short (&lt;150 chars)</td>
                                    <td className="py-4.5 px-3">Detailed (&lt;300 chars)</td>
                                    <td className="py-4.5 px-3 font-bold text-[#4caf00]">Variant A</td>
                                    <td className="py-4.5"></td>
                                </tr>
                                <tr>
                                    <td className="py-4.5"></td>
                                    <td className="py-4.5 px-3 font-bold text-[#181d13]">Opening Hook</td>
                                    <td className="py-4.5 px-3">Shared Connection</td>
                                    <td className="py-4.5 px-3">Recent Post Comment</td>
                                    <td className="py-4.5 px-3 font-bold text-[#4caf00]">Variant B</td>
                                    <td className="py-4.5"></td>
                                </tr>
                                <tr>
                                    <td className="py-4.5"></td>
                                    <td className="py-4.5 px-3 font-bold text-[#181d13]">Call to Action</td>
                                    <td className="py-4.5 px-3">Direct Meeting Link</td>
                                    <td className="py-4.5 px-3">Soft Permission Question</td>
                                    <td className="py-4.5 px-3 font-bold text-[#4caf00]">Variant B</td>
                                    <td className="py-4.5"></td>
                                </tr>
                                <tr>
                                    <td className="py-4.5"></td>
                                    <td className="py-4.5 px-3 font-bold text-[#181d13]">Personalization</td>
                                    <td className="py-4.5 px-3">Company Trigger</td>
                                    <td className="py-4.5 px-3">Personal Milestone</td>
                                    <td className="py-4.5 px-3 font-bold text-[#4caf00]">Variant A</td>
                                    <td className="py-4.5"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 15. SECTION: COMMON MISTAKES TO AVOID */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Common Mistakes to Avoid
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#596257] leading-relaxed">
                        Steer clear of these common outreach pitfalls that instantly trigger account blocks or ignore rates:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {[
                            {
                                num: "1",
                                node: (
                                    <>
                                        Pitching your entire product in the initial <br />
                                        connection note.
                                    </>
                                ),
                            },
                            {
                                num: "2",
                                node: (
                                    <>
                                        Using unverified placeholder tags like <br />
                                        [Company Name].
                                    </>
                                ),
                            },
                            {
                                num: "3",
                                node: (
                                    <>
                                        Sending overly robotic, rigid messages <br />
                                        without human tone.
                                    </>
                                ),
                            },
                            {
                                num: "4",
                                node: (
                                    <>
                                        Ignoring daily connection limits and triggering <br />
                                        LinkedIn bans.
                                    </>
                                ),
                            },
                            {
                                num: "5",
                                node: (
                                    <>
                                        Failing to follow up past the second <br />
                                        touchpoint.
                                    </>
                                ),
                            },
                            {
                                num: "6",
                                node: (
                                    <>
                                        Targeting overly broad personas without <br />
                                        clear intent.
                                    </>
                                ),
                            },
                        ].map((m) => (
                            <div
                                key={m.num}
                                className="bg-[#f2f9ea] border border-[#e5eae2] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs"
                            >
                                <div className="w-6 h-6 rounded-full bg-[#4caf00] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {m.num}
                                </div>
                                <p className="text-xs sm:text-sm text-[#181d13] font-bold leading-relaxed">
                                    {m.node}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 16. SECTION: CAMPAIGN LAUNCH CHECKLIST */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Campaign Launch Checklist
                    </h2>
                    <p className="mt-3 text-sm sm:text-[17.5px] text-[#596257] leading-relaxed">
                        Verify every box before pushing your next campaign live:
                    </p>

                    <div className="mt-6 bg-[#f2f9ea] border border-[#e5eae2] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs space-y-3.5">
                        {[
                            "Audience ICP filters locked and verified",
                            "Messaging tested and under character limit",
                            "Multi-step sequence configured with proper delays",
                            "Measurement analytics dashboard linked",
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-md bg-[#4caf00] text-white flex items-center justify-center shrink-0 shadow-2xs">
                                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-[#181d13]">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 17. SECTION: FINAL THOUGHTS */}
                <div className="mt-6 sm:mt-8 pb-12 sm:pb-16 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Final Thoughts
                    </h2>
                    <p className="mt-3 text-sm sm:text-[19px] text-[#596257] leading-relaxed">
                        Mastering LinkedIn outreach is an ongoing iteration of empathy, relevance, and precise timing. By combining robust AI automation with genuine human context, <br />your team can consistently scale pipeline without burning through your addressable market.
                    </p>

                    {/* Pull Quote Card */}
                    <div className="mt-6 bg-[#f1f6e4] border-l-4 border-[#181d13] rounded-2xl p-6 sm:p-8 shadow-xs">
                        <p className="text-sm sm:text-base md:text-lg font-medium text-[#181d13] italic leading-relaxed">
                            &ldquo;Better targeting. Better messaging. Better conversations.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
