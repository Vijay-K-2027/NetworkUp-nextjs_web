"use client";

import Link from "next/link";
import { TrendingUp, MoreHorizontal, Megaphone, File } from "lucide-react";

export default function Section1() {
    return (
        <section className="w-full bg-[#f8fafb]/60 py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12 lg:gap-[6%]">

                    {/* Left Column : Headline, Badge, Description, CTA */}
                    <div className="w-full lg:w-[47%] relative flex flex-col items-start text-left">
                        <div
                            className="absolute -inset-6 sm:-inset-12 -z-10 pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle at center, rgba(80, 95, 118, 0.58) 0%, rgba(80, 95, 118, 0.16) 45%, transparent 75%)",
                            }}
                        />
                        {/* Engine Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#eceef0] rounded-full px-3.5 py-1.5 shadow-2xs">
                            <span className="w-2 h-2 rounded-full bg-[#46730a]" />
                            <span className="text-[11px] sm:text-xs font-bold text-gray-700 tracking-wider uppercase">
                                Campaign Engine
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-950 tracking-tight w-full max-w-[600px]">
                            Build outreach campaigns that work while you focus on the conversation.
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-[650px]">
                            A NetworkUp campaign is a structured, intelligent outreach workflow
                            designed to automate your initial connection requests and follow-ups. Set
                            your strategy, personalize at scale, and let the engine drive engagement.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                            <Link
                                href="/subscription"
                                className="inline-flex items-center justify-center bg-gradient-to-b from-[#B8FF84] to-[#7CEB2A] text-black font-bold text-sm sm:text-base px-7 py-3.5 rounded-2xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Create Campaign
                            </Link>
                            <Link
                                href="/subscription"
                                className="inline-flex items-center justify-center bg-[#F7F9FB] text-black font-bold text-sm sm:text-base px-7 py-3.5 rounded-2xl border border-gray-200/60 shadow-2xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                View Templates
                            </Link>
                        </div>
                    </div>

                    {/* Right Column : Campaign Overview Dashboard Card */}
                    <div className="w-full lg:max-w-[50%] bg-gradient-to-bl from-[#F7F9FB] to-[#ECEEF0] rounded-2xl rotate-[2deg] p-3">
                        <div className="w-full flex justify-center lg:justify-end -rotate-[2deg]">
                            <div className="w-full bg-white rounded-[28px] border border-gray-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.07)] p-6 sm:p-8">

                                {/* Card Header */}
                                <div className="flex items-center justify-between pb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight">
                                        Campaign Overview
                                    </h3>
                                    <button
                                        type="button"
                                        className="text-gray-600 hover:text-gray-900 p-1 rounded-lg transition-colors cursor-pointer"
                                        aria-label="More options"
                                    >
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* 2x2 Metrics Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    <div className="rounded-2xl shadow-xs bg-[#fbfdfc] p-4.5 sm:p-5">
                                        <span className="text-xs font-semibold text-[#414A34]">
                                            Active Campaigns
                                        </span>
                                        <div className="text-3xl sm:text-4xl font-bold text-[#191C1E] mt-1.5 tracking-tight">
                                            12
                                        </div>
                                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#406900] mt-2.5">
                                            <TrendingUp className="w-3.5 h-3.5" />
                                            <span>+2 this week</span>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl shadow-xs bg-[#fbfdfc] p-4.5 sm:p-5">
                                        <span className="text-xs font-semibold text-[#414A34]">
                                            Leads Enrolled
                                        </span>
                                        <div className="text-3xl sm:text-4xl font-bold text-[#191C1E] mt-1.5 tracking-tight">
                                            4,820
                                        </div>
                                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#406900] mt-2.5">
                                            <TrendingUp className="w-3.5 h-3.5" />
                                            <span>+8% vs last</span>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl shadow-xs bg-[#fbfdfc] p-4.5 sm:p-5">
                                        <span className="text-xs font-semibold text-[#414A34]">
                                            Avg Acceptance Rate
                                        </span>
                                        <div className="text-3xl sm:text-4xl font-bold text-[#191C1E] mt-1.5 tracking-tight">
                                            34.2%
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3.5 overflow-hidden">
                                            <div
                                                className="h-full bg-[#406900] rounded-full"
                                                style={{ width: "34.2%" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl shadow-xs bg-[#fbfdfc] p-4.5 sm:p-5">
                                        <span className="text-xs font-semibold text-[#414A34]">
                                            Reply Rate
                                        </span>
                                        <div className="text-3xl sm:text-4xl font-bold text-[#191C1E] mt-1.5 tracking-tight">
                                            18.5%
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3.5 overflow-hidden">
                                            <div
                                                className="h-full bg-[#505F76] rounded-full"
                                                style={{ width: "18.5%" }}
                                            />
                                        </div>
                                    </div>

                                </div>

                                {/* Campaign List Items */}
                                <div className="mt-6 space-y-3">

                                    <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white hover:bg-gray-50/80 transition-colors">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-10 h-10 rounded-lg bg-[#A3FF12] flex items-center justify-center text-gray-950 shadow-2xs shrink-0">
                                                <Megaphone className="w-5 h-5 stroke-[#467300]" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm sm:text-[15px] font-bold text-[#191C1E] leading-tight">
                                                    Q3 Enterprise Outreach
                                                </h4>
                                                <p className="text-xs text-[#414A34] font-normal mt-0.5">
                                                    Step 2: Follow-up
                                                </p>
                                            </div>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-md bg-[#ECEEF0] text-[11px] font-bold text-[#191C1E] uppercase">
                                            ACTIVE
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white hover:bg-gray-50/80 transition-colors">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-10 h-10 rounded-xl bg-[#ECEEF0] flex items-center justify-center text-gray-600 shadow-2xs shrink-0">
                                                <File className="w-5 h-5 stroke-[#414A34]" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm sm:text-[15px] font-bold text-[#191C1E] leading-tight">
                                                    SaaS Founders Series
                                                </h4>
                                                <p className="text-xs text-[#414A34] font-normal mt-0.5">
                                                    Drafting sequence
                                                </p>
                                            </div>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-md bg-[#ECEEF0] text-[11px] font-bold text-[#191C1E] uppercase">
                                            DRAFT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}