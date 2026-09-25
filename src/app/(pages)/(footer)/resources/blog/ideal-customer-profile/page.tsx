"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    Building2,
    Laptop,
    Zap,
    Radio,
    CircleX,
    CircleCheck,
    TrendingUp,
} from "lucide-react";

export default function IdealCustomerProfileArticlePage() {
    return (
        <div className="w-full bg-[#f7f9fb] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white w-full max-w-9xl mx-auto rounded-xl p-5">
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
                        How to Build an Ideal Customer Profile (ICP) That Converts
                    </span>
                </nav>

                {/* 2. HERO HEADER BOX */}
                <div className="w-full bg-gradient-to-r from-[#78c418]/20 to-[#ffffff]/20 rounded-3xl p-6 sm:p-10 md:p-12 border border-[#85e032]/30 shadow-xs">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Left Info */}
                        <div className="md:col-span-7 flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-[#3a6a00]/10 text-[#3a6a00] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                                    LEAD GENERATION
                                </span>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#181d13] mt-3 sm:mt-4 tracking-tight leading-[1.15]">
                                    How to Build an Ideal <br className="hidden sm:inline" />
                                    Customer Profile (ICP) That <br className="hidden sm:inline" />
                                    Converts
                                </h1>
                                <p className="text-md sm:text-lg text-[#414a37] font-normal leading-[2rem] mt-8 max-w-4xl">
                                    Stop wasting pipeline on bad-fit accounts. Learn how top-performing B2B revenue teams build data-driven Ideal Customer Profiles that supercharge conversion rates and accelerate sales velocity.
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-6 sm:mt-8 pt-5 border-t border-[#b8f47c]/50">
                                <Image
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                                    alt="Rashi Gupta"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover shrink-0"
                                />
                                <div>
                                    <div className="text-xs sm:text-sm font-bold text-[#181d13]">
                                        Rashi Gupta
                                    </div>
                                    <div className="text-[11px] sm:text-xs text-[#414a37]">
                                        Aug 1, 2026 · 8 min read
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Graphic */}
                        <div className="md:col-span-5 flex items-center justify-center">
                            <Image
                                src="/footer/resources/blog/Article3.png"
                                alt="How to Build an Ideal Customer Profile (ICP) That Converts"
                                width={500}
                                height={380}
                                className="w-full h-auto object-contain max-h-[380px]"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* 3. PROSE INTRO */}
                <div className="mt-8 sm:mt-10 space-y-4">
                    <p className="text-sm sm:text-lg text-[#181d13] tracking-[0.3px] leading-relaxed">
                        Every minute your sales team spends talking to an unqualified lead is revenue left on the table. In modern B2B SaaS, casting a wide net is a fast track to high churn, bloated customer acquisition costs (CAC), and burned-out reps.
                    </p>
                    <p className="text-sm sm:text-lg text-[#414a37] tracking-[0.3px] leading-relaxed">
                        The antidote isn't more cold emails or higher ad spend, it is precision. An Ideal Customer Profile (ICP) acts as the architectural blueprint for your entire go-to-market engine. When built correctly, it aligns marketing, sales, and product around the accounts that convert fastest, stay longest, and expand highest.
                    </p>
                </div>

                {/* 4. SECTION: WHAT IS AN ICP? */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 ">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        What is an ICP?
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#414a37] leading-relaxed">
                        An Ideal Customer Profile (ICP) is a hypothetical description of the company type that derives the most value from your product - and, in return, provides the highest lifetime value <br />(LTV) to your business. Unlike buyer personas, which focus on the individual user, an ICP defines the macro organizational charateristics.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Too Broad */}
                        <div className="bg-[#ffffff] border border-[#c0cab2]/30 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <CircleX size={20} className="text-[#ba1a1a]" />
                                    <span className="text-lg sm:text-xl font-bold text-[#181d13]">
                                        Too Broad
                                    </span>
                                </div>
                                <div className="space-y-2 text-xs sm:text-sm text-[#414a37] font-medium leading-relaxed pl-1">
                                    <p>• &ldquo;All B2B companies with 10-500 employees&rdquo;</p>
                                    <p>• Low conversion rates across campaigns</p>
                                    <p>• Unpredictable sales cycles</p>
                                </div>
                            </div>
                        </div>

                        {/* More Effective */}
                        <div className="bg-gradient-to-b from-[#7ccb2a]/5 to-[#7ccb2a]/0 border border-[#3a6a00]/40 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <CircleCheck size={25} className="text-[#3a6a00]" />
                                    <span className="text-lg sm:text-xl font-bold text-[#181d13]">
                                        More Effective
                                    </span>
                                </div>
                                <div className="space-y-2 text-xs sm:text-sm text-[#414a37] font-medium leading-relaxed pl-1">
                                    <p>• Series B/C Fintechs using AWS & Kubernetes</p>
                                    <p>• 50-200 engineering headcount</p>
                                    <p>• 3x faster sales velocity & high retention</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. SECTION: ICP VS. BUYER PERSONA */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        ICP vs. Buyer Persona: Knowing the Difference
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#414a37] leading-relaxed">
                        A common mistake is treating ICP and buyer personas as interchangeable. They serve completely different functions in <br />your outreach strategy.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Ideal Customer Profile (ICP) */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div>
                                <span className="inline-block text-[#3a6a00] font-bold text-[10px] tracking-wider px-2.5 py-1 rounded-md uppercase mb-3">
                                    MACRO LEVEL
                                </span>
                                <h3 className="text-base sm:text-lg font-bold text-[#181d13] mb-2">
                                    Ideal Customer Profile (ICP)
                                </h3>
                                <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                    Focuses on the company. Industry, revenue size, <br />tech stack, geography, compliance needs, and <br />growth rate.
                                </p>
                            </div>
                        </div>

                        {/* Buyer Persona */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div>
                                <span className="inline-block text-[#3a6a00] font-bold text-[10px] tracking-wider px-2.5 py-1 rounded-md uppercase mb-3">
                                    MICRO LEVEL
                                </span>
                                <h3 className="text-base sm:text-lg font-bold text-[#181d13] mb-2">
                                    Buyer Persona
                                </h3>
                                <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                    Focuses on the human. Job title, daily pain points, <br />KPIs, personal objections, and buying committee <br />role.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. SECTION: KEY COMPONENTS OF A HIGH-CONVERTING ICP */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Key Components of a High-Converting ICP
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#414a37] leading-relaxed">
                        To make your ICP actionable for sales and marketing automation, it must be built on quantifiable pillars.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Firmographics */}
                        <div className="bg-white border border-[#c0caae]/30 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg bg-[#7ccb2a]/30 flex items-center justify-center text-[#3a6a00] mb-3">
                                <Building2 className="w-4 h-4 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13]">
                                Firmographics
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] mt-1.5 leading-relaxed">
                                Company size, annual recurring revenue (ARR), <br />employee count, and geographical headquarters.
                            </p>
                        </div>

                        {/* Technographics */}
                        <div className="bg-white border border-[#c0caae]/30 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg bg-[#7ccb2a]/30 flex items-center justify-center text-[#3a6a00] mb-3">
                                {/* Use the image from public/footer/resources/blog/server.png instead of icon */}
                                <Laptop className="w-4 h-4 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13]">
                                Technographics
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] mt-1.5 leading-relaxed">
                                Infrastructure software, cloud providers, APIs, and <br />legacy systems currently in use.
                            </p>
                        </div>

                        {/* Trigger Events */}
                        <div className="bg-white border border-[#c0caae]/30 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg bg-[#7ccb2a]/30 flex items-center justify-center text-[#3a6a00] mb-3">
                                <TrendingUp className="w-4 h-4 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13]">
                                Trigger Events
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] mt-1.5 leading-relaxed">
                                Leadership changes, recent funding rounds, <br />geographic expansion, or regulatory shifts.
                            </p>
                        </div>

                        {/* Behavioral Intent */}
                        <div className="bg-white border border-[#c0caae]/30 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg bg-[#7ccb2a]/30 flex items-center justify-center text-[#3a6a00] mb-3">
                                {/* Use the image from public/footer/resources/blog/personnel.png instead of icon */}
                                <Radio className="w-4 h-4 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13]">
                                Behavioral Intent
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] mt-1.5 leading-relaxed">
                                Active search queries, content downloads, and <br />peer review site engagement spikes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 7. SECTION: HOW TO BUILD YOUR ICP: A 9-STEP FRAMEWORK */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        How to Build Your ICP: A 9-Step Framework
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#414a37] leading-relaxed">
                        Follow this sequential roadmap to transition from gut-feeling guesswork to an empirical targeting engine.
                    </p>

                    <div className="space-y-0 mt-8">
                        {[
                            {
                                number: "01",
                                title: "Analyze Your Top 20% Customers",
                                description:
                                    "Look at clients with the highest retention, shortest sales cycle, and highest net revenue retention (NRR).",
                            },
                            {
                                number: "02",
                                title: "Segment by Revenue Contribution",
                                description:
                                    "Filter out customers who required excessive support tickets or churned within the first 6 months.",
                            },
                            {
                                number: "03",
                                title: "Identify Common Firmographic Traits",
                                description:
                                    "Extract overlapping characteristics in company size, industry vertical, and geographic location.",
                            },
                            {
                                number: "04",
                                title: "Audit Technographic Footprints",
                                description:
                                    "Determine what tools your champions integrate with daily to ensure seamless product compatibility.",
                            },
                            {
                                number: "05",
                                title: "Interview Your Customer Success Team",
                                description:
                                    "CS reps know who actually uses the product versus who bought it under pressure. Gather qualitative feedback.",
                            },
                            {
                                number: "06",
                                title: "Map Out Buying Committee Roles",
                                description:
                                    "Identify the economic buyer, champion, influencer, and technical evaluator for each target account.",
                            },
                            {
                                number: "07",
                                title: "Define Negative ICP Parameters",
                                description:
                                    "Explicitly list company types or industries your sales reps are forbidden from spending pipeline on.",
                            },
                            {
                                number: "08",
                                title: "Build Scoring Weights in CRM",
                                description:
                                    "Assign point values to firmographic and intent criteria to automate lead qualification scoring.",
                            },
                            {
                                number: "09",
                                title: "Iterate Quarterly with Revenue Data",
                                description:
                                    "Review conversion rates every 90 days with sales and marketing leadership to refine parameters.",
                            },
                        ].map((step, idx, arr) => (
                            <div key={step.number} className="relative">
                                {/* Header: Badge + Title */}
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-[#3a6a00] text-white text-[11px] font-bold flex items-center justify-center shrink-0 z-10">
                                        {step.number}
                                    </span>
                                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#181d13]">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Body: Left line + Description */}
                                <div
                                    className={`ml-3 pl-6 ${idx === arr.length - 1
                                        ? "pb-0 border-l-0"
                                        : "pb-6 border-l border-[#3a6a00]/30"
                                        } pt-1.5`}
                                >
                                    <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 8. SECTION: FIT VS. ENGAGEMENT MATRIX */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Fit vs. Engagement Matrix
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#414a37] leading-relaxed">
                        Not every prospect requires the same outreach approach. Use this matrix to prioritize your accounts based on ICP fit and engagement signals:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 bg-[#f4ffd9] rounded-2xl p-5">
                        {/* High Fit · Low Engagement */}
                        <div className="bg-[#e5eed3] rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-xs">
                            <span className="text-xs text-[#3a6a00] font-semibold mb-1">
                                High Fit / Low Engagement
                            </span>
                            <div className="text-sm sm:text-base font-bold text-[#181d13]">
                                Targeted Account-Based Marketing <br className="hidden sm:inline" /> (ABM)
                            </div>
                        </div>

                        {/* High Fit · High Engagement */}
                        <div className="bg-[#3a6a00] rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-xs text-white">
                            <span className="text-xs text-[#a6f955] font-semibold mb-1">
                                High Fit / High Engagement
                            </span>
                            <div className="text-sm sm:text-base font-bold text-white">
                                Immediate Sales Outreach
                            </div>
                        </div>

                        {/* Low Fit · Low Engagement */}
                        <div className="bg-[#e5eed3] rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-xs">
                            <span className="text-xs text-[#717a65] font-semibold mb-1">
                                Low Fit / Low Engagement
                            </span>
                            <div className="text-sm sm:text-base font-bold text-[#181d13]">
                                Ignore / Exclude
                            </div>
                        </div>

                        {/* Low Fit · High Engagement */}
                        <div className="bg-[#e5eed3] rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-xs">
                            <span className="text-xs text-[#717a65] font-semibold mb-1">
                                Low Fit / High Engagement
                            </span>
                            <div className="text-sm sm:text-base font-bold text-[#181d13]">
                                Nurture / Automated Content
                            </div>
                        </div>
                    </div>
                </div>

                {/* 9. SECTION: COMMON ICP MISTAKES TO AVOID */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Common ICP Mistakes to Avoid
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Mistake 01 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <span className="text-[11px] font-bold text-[#ba1a1a] tracking-wider uppercase block mb-1.5">
                                MISTAKE 01
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1.5">
                                Building the ICP in a Silo
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Creating an ICP without interviewing customer success and <br />sales reps leads to unrealistic assumptions.
                            </p>
                        </div>

                        {/* Mistake 02 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <span className="text-[11px] font-bold text-[#ba1a1a] tracking-wider uppercase block mb-1.5">
                                MISTAKE 02
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1.5">
                                Targeting Everyone
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Saying &ldquo;anyone who needs software&rdquo; means your messaging <br />resonates with no one.
                            </p>
                        </div>

                        {/* Mistake 03 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <span className="text-[11px] font-bold text-[#ba1a1a] tracking-wider uppercase block mb-1.5">
                                MISTAKE 03
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1.5">
                                Ignoring Negative Churn Signals
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Failing to analyze which customer segments churn the <br />fastest when defining parameters.
                            </p>
                        </div>

                        {/* Mistake 04 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <span className="text-[11px] font-bold text-[#ba1a1a] tracking-wider uppercase block mb-1.5">
                                MISTAKE 04
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1.5">
                                Never Updating the ICP
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Treating your ICP as a one-time PDF document instead of a <br />living, breathing CRM filter.
                            </p>
                        </div>

                        {/* Mistake 05 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <span className="text-[11px] font-bold text-[#ba1a1a] tracking-wider uppercase block mb-1.5">
                                MISTAKE 05
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1.5">
                                Confusing Persona with ICP
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Targeting job titles instead of company-level revenue and <br />technological compatibility.
                            </p>
                        </div>

                        {/* Mistake 06 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                            <span className="text-[11px] font-bold text-[#ba1a1a] tracking-wider uppercase block mb-1.5">
                                MISTAKE 06
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mb-1.5">
                                Disregarding Regional Nuance
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] leading-relaxed">
                                Assuming compliance and tech stacks are identical across <br />North America and EMEA markets.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 10. SECTION: FINAL THOUGHTS */}
                <div className="mt-6 sm:mt-8 pb-12 sm:pb-16 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Final Thoughts
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#414a37] leading-relaxed">
                        Building an Ideal Customer Profile is the single highest-leverage exercise your revenue leadership team can undertake. <br className="hidden sm:inline" />
                        By narrowing your focus to accounts that genuinely match your product&apos;s superpower, you transform sales from a <br className="hidden sm:inline" />
                        numbers game into a predictable science.
                    </p>

                    {/* Pull Quote Card */}
                    <div className="mt-6 bg-[#f1f6e4] border-l-4 border-[#181d13] rounded-2xl p-6 sm:p-8 shadow-xs">
                        <p className="text-sm sm:text-lg md:text-xl font-medium font-inter text-[#181d13] italic leading-relaxed">
                            &ldquo;Precision in targeting beats volume in outreach every single time. Define your ideal customer clearly, and let your revenue engine do the rest.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
