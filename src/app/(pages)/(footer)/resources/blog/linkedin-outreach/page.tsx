"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    Sparkles,
    Send,
    Check,
    Lightbulb,
    CircleX,
    CircleCheck,
    UserSearch,
} from "lucide-react";

export default function LinkedInOutreachArticlePage() {
    return (
        <div className="w-full bg-[#fafdf8]/40 min-h-screen py-8 sm:py-12 px-5 lg:px-15">
            <div className="w-full max-w-9xl mx-auto">
                {/* 1. BREADCRUMB */}
                <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#414a37] mb-6 sm:mb-8">
                    <Link
                        href="/resources/blog"
                        className="hover:text-[#316a00] transition-colors font-medium"
                    >
                        Blog
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[#181d13] font-medium truncate">
                        How AI is Changing LinkedIn Outreach in 2027
                    </span>
                </nav>

                {/* 2. HERO HEADER BOX */}
                <div className="w-full bg-gradient-to-r from-[#78c418]/20 to-[#ffffff]/20 rounded-3xl p-6 sm:p-10 md:p-12 border border-[#85e032]/30 shadow-xs">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Left Info */}
                        <div className="md:col-span-7 flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-[#3a6a00]/10 text-[#3a6a00] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                                    AI & AUTOMATION
                                </span>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-[#181d13] mt-3 sm:mt-4 tracking-tight leading-[1.15]">
                                    How AI is Changing LinkedIn Outreach in 2027
                                </h1>
                                <p className="text-xs sm:text-sm md:text-base text-[#414a37] font-normal leading-relaxed mt-4">
                                    Discover how AI is transforming LinkedIn outreach in 2026: from smarter prospecting and
                                    personalized messaging to adaptive campaigns and sales automation.
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-6 sm:mt-8 pt-5 border-t border-[#b8f47c]/50">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                                    alt="Ananya Sharma"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover shrink-0"
                                />
                                <div>
                                    <div className="text-xs sm:text-sm font-bold text-[#181d13]">
                                        Ananya Sharma
                                    </div>
                                    <div className="text-[11px] sm:text-xs text-[#414a37]">
                                        Sept 4, 2026 · 8 min read
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Graphic */}
                        <div className="md:col-span-5 flex items-center justify-center">
                            <Image
                                src="/footer/resources/blog/Article1.png"
                                alt="AI LinkedIn Outreach 2027"
                                width={400}
                                height={320}
                                className="w-full h-auto object-contain max-h-[280px]"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* 3. PROSE INTRO */}
                <div className="mt-8 sm:mt-10 space-y-4 text-md sm:text-lg md:text-xl text-[#181d13] leading-relaxed">
                    <p>
                        The landscape of LinkedIn prospecting has undergone a seismic shift. Gone are the days of rigid,
                        template-driven sequence blasts that yield single-digit response rates. In 2026, buyers demand contextual
                        relevance, instantaneous value, and human-like empathy; expectations that human sales reps alone cannot
                        scale to meet across thousands of accounts.
                    </p>
                    <p>
                        Enter autonomous AI agents. Powered by real-time intent signals and deep neural language modeling,
                        modern outbound pipelines now operate with surgical precision.
                    </p>
                </div>

                {/* 4. KEY TAKEAWAY BOX */}
                <div className="mt-8 bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                    <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#2b5100]">
                        <Lightbulb className="w-4 h-4 text-[#3a6a00]" />
                        <span>Key Takeaway for 2026</span>
                    </div>
                    <p className="mt-2 text-xl sm:text-2xl text-[#2b5100] leading-relaxed">
                        Teams utilizing AI-driven contextual sequencing see an average <strong className="text-[#181d13] font-semibold">3.4x increase</strong> in positive reply rates
                        and a 65% reduction in time spent on manual research.
                    </p>
                </div>

                {/* 5. SECTION: SMARTER PROSPECTING WITH AI (2-COLUMN LAYOUT) */}
                <div className="mt-12 sm:mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                        {/* Left Column: Heading & Text */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                                Smarter Prospecting With AI
                            </h2>
                            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                                Traditional lead generation relied on static filters like job titles and company headcount. Modern AI ingests multi-dimensional signals,
                                including recent funding rounds, tech stack migrations, executive job changes, and public social sentiment.
                            </p>
                        </div>

                        {/* Right Column: Lead Scale Analysis Model Widget */}
                        <div className="lg:col-span-7 bg-[#e5ead9]/50 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-bold text-[#181d13]">
                                    Lead Scale Analysis Model
                                </span>
                                <span className="text-[10px] font-bold text-[#3a6a00] bg-white/80 px-2.5 py-0.5 rounded-full tracking-wide">
                                    REAL-TIME ENGINE
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 pt-4">
                                <div className="bg-white rounded-xl p-3.5 sm:p-4">
                                    <span className="text-[11px] font-semibold text-[#717a65] uppercase tracking-wider block">
                                        INTENT SIGNAL
                                    </span>
                                    <div className="text-lg sm:text-[20px] font-bold text-[#3a6a00] mt-0.5">
                                        High
                                    </div>
                                    <div className="text-xs text-[#414a37] mt-0.5">
                                        Active Hiring in DevOps
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-3.5 sm:p-4">
                                    <span className="text-[11px] font-semibold text-[#717a65] uppercase tracking-wider block">
                                        FIT SCORE
                                    </span>
                                    <div className="text-lg sm:text-[20px] font-bold text-[#181d13] mt-0.5">
                                        98%
                                    </div>
                                    <div className="text-xs text-[#414a37] mt-0.5">
                                        Matches ideal customer profile
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-3.5 sm:p-4">
                                    <span className="text-[11px] font-bold text-[#717a65] uppercase tracking-wider block">
                                        TIMING INDEX
                                    </span>
                                    <div className="text-lg sm:text-[20px] font-bold text-[#316a00] mt-0.5">
                                        Optimal
                                    </div>
                                    <div className="text-xs text-[#414a37] mt-0.5">
                                        Q3 budget allocation period
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. SECTION: PERSONALIZATION AT SCALE */}
                <div className="mt-12 sm:mt-16 flex flex-col items-start">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                        Personalization at Scale
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed ">
                        Generic outreach is instantly flagged and ignored by modern decision-makers. AI eliminates the false dichotomy between scale and personalization by generating unique hooks for every single recipient based on their digital footprint.
                    </p>

                    {/* Widget: AI Outreach Writer vs. Traditional Template */}
                    <div className="mt-5 w-full max-w-4xl bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                        <h3 className="text-xs sm:text-sm font-bold text-[#181d13] mb-4">
                            AI Outreach Writer vs. Traditional Template
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Traditional Template */}
                            <div className="bg-white rounded-xl p-4 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-[#ba1a1a]">
                                        <CircleX size={15} className="text-[#ba1a1a]" />
                                        <span>Traditional Template</span>
                                    </div>
                                    <p className="text-xs text-[#414a37] italic mt-3 leading-relaxed">
                                        &ldquo;Hi &#123;First Name&#125;, I saw you work at &#123;Company&#125; and wanted to connect about our SaaS solution that helps companies like yours increase revenue.&rdquo;
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 text-xs text-[#717a65]">
                                    Response Rate: 7.2%
                                </div>
                            </div>

                            {/* AI-Assisted Context */}
                            <div className="bg-white rounded-xl p-4 flex flex-col justify-between shadow-2xs">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-[#3a6a00]">
                                        <CircleCheck size={15} className="text-[#3a6a00]" />
                                        <span>AI-Assisted Context</span>
                                    </div>
                                    <p className="text-xs text-[#181d13] mt-3 leading-relaxed font-medium">
                                        &ldquo;Hi Marcus, loved your recent post on distributed tracing challenges at ScaleCloud. We solved a similar latency bottleneck in our proxy layer...&rdquo;
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 text-xs text-[#3a6a00] font-bold">
                                    Response Rate: 24.8%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 7. SECTION: ADAPTIVE LINKEDIN CAMPAIGNS (2-COLUMN LAYOUT) */}
                <div className="mt-12 sm:mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                        {/* Left Column: Heading & Text */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                                Adaptive LinkedIn Campaigns
                            </h2>
                            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                                Campaigns no longer follow rigid linear paths. If a prospect engages with a shared resource or visits your company page mid-sequence, the AI instantly adapts the next touchpoint to match their updated buyer journey stage.
                            </p>
                        </div>

                        {/* Right Column: Adaptive Campaign Flow */}
                        <div className="lg:col-span-7 bg-[#e5ead9]/40 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <h3 className="text-xs sm:text-sm font-bold text-[#181d13] mb-4">
                                Adaptive Campaign Flow
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
                                {/* Step 1 */}
                                <div className="bg-white rounded-xl p-4 text-center flex flex-col items-center justify-center">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                        <UserSearch className="w-4 h-4 text-[#3a6a00]" />
                                    </div>
                                    <div className="text-xs font-bold text-[#181d13]">
                                        1. Signal Detected
                                    </div>
                                    <div className="text-[11px] text-[#414a37] mt-1">
                                        Website view on pricing page
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white rounded-xl p-4 text-center flex flex-col items-center justify-center">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                        <Sparkles className="w-4 h-4 text-[#3a6a00]" />
                                    </div>
                                    <div className="text-xs font-bold text-[#181d13]">
                                        2. AI Contextualize
                                    </div>
                                    <div className="text-[11px] text-[#414a37] mt-1">
                                        Matches intent with product cases
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white rounded-xl p-4 text-center flex flex-col items-center justify-center">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                        <Send className="w-4 h-4 text-[#3a6a00]" />
                                    </div>
                                    <div className="text-xs font-bold text-[#181d13]">
                                        3. Tailored Touch
                                    </div>
                                    <div className="text-[11px] text-[#414a37] mt-1">
                                        Specific hyper-relevant message
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8. SECTION: AI-POWERED FOLLOW-UPS */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                        AI-Powered Follow-ups
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed ">
                        Timing and tone are everything in follow-up sequences. Autonomous agents analyze reply semantics to determine whether a prospect is genuinely busy, asking a technical objection, or ready for a booking link.
                    </p>

                    {/* Follow-up Handling Box */}
                    <div className="mt-5 bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                        <div className="bg-white rounded-xl p-4">
                            <div className="flex items-center justify-between border-b border-[#c0cab2]/40 pb-2">
                                <span className="text-lg font-semibold text-[#414a37]">
                                    Incoming Reply from Prospect
                                </span>
                                <span className="text-[15px] font-bold text-[#3a6a00] px-4 py-1 rounded-full bg-[#3a6a00]/10">
                                    Intent Detection: [Pricing]
                                </span>
                            </div>
                            <p className="text-md sm:text-lg text-[#181d13] italic font-medium mt-2.5">
                                &ldquo;Looks interesting, but we already have internal tools built for this and budget is locked until Q4.&rdquo;
                            </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200/70">
                            <div className="text-lg font-bold text-[#181d13] mb-2.5">
                                The Result: Autonomous Handling
                            </div>
                            <div className="space-y-2 text-lg text-[#181d13]">
                                <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 rounded-full text-[#3a6a00] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-5 h-5 stroke-[3]" />
                                    </div>
                                    <span>AI acknowledges internal build void vs. maintenance overhead.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 rounded-full text-[#3a6a00] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-5 h-5 stroke-[3]" />
                                    </div>
                                    <span>Offers lightweight pilot requiring zero engineering hours.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 rounded-full text-[#3a6a00] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-5 h-5 stroke-[3]" />
                                    </div>
                                    <span>Automatically schedules calendar check-in for Q4 budgeting window.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 9. SECTION: SMARTER LEAD QUALIFICATION */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                        Smarter Lead Qualification
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed ">
                        Filtering out unqualified leads before your team spends valuable minutes on discovery calls prevents pipeline bloat. AI qualification scores inbound interactions against your historical closed-won patterns instantly.
                    </p>

                    <div className="mt-5 max-w-3xl bg-[#e5ead9]/40 rounded-2xl p-5 sm:p-6 shadow-xs">
                        <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm font-bold text-[#181d13]">
                                Automated BANT Qualification
                            </span>
                            <span className="text-[10px] font-bold text-[#ffffff] bg-[#3a6a00] px-2.5 py-0.5 rounded-full">
                                98.1% Accuracy
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#414a37] mt-2.5 leading-relaxed">
                            Budget, Authority, Need, and Timeline are continuously evaluated through natural language processing during live chat and message exchanges.
                        </p>
                    </div>
                </div>

                {/* 10. SECTION: CAMPAIGN INTELLIGENCE */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                        Campaign Intelligence
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                        Stop guessing which subject lines or hooks work. Campaign Intelligence engines run continuous multi-variant tests across messaging variants, automatically shifting traffic to high-performing hooks within hours.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 max-w-4xl">
                        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
                            <span className="text-[10px] font-bold text-[#717a65] uppercase tracking-wider">
                                TRADITIONAL A/B TESTING
                            </span>
                            <div className="text-sm sm:text-base font-bold text-[#181d13] mt-1">
                                14-Day Cycles
                            </div>
                            <p className="text-xs text-[#414a37] mt-1 leading-relaxed">
                                Requires manual sample sizing and batch evaluation periods before implementation.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
                            <span className="text-[10px] font-bold text-[#3a6a00] uppercase tracking-wider">
                                NETWORKUP INTELLIGENCE
                            </span>
                            <div className="text-sm sm:text-base font-bold text-[#3a6a00] mt-1">
                                Real-Time Optimization
                            </div>
                            <p className="text-xs text-[#414a37] mt-1 leading-relaxed">
                                Dynamic allocation shifts live campaigns every 50 impressions for maximum conversion.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 11. SECTION: CONVERSATION INTELLIGENCE */}
                <div className=" mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                        Conversation Intelligence
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                        Every reply is parsed for sentiment, buying signals, and competitor mentions. Sales managers get a bird&apos;s-eye view of team pipeline health without digging through individual message threads.
                    </p>

                    <div className="md:relative grid grid-cols-1 sm:grid-cols-12 gap-4 mt-5 ">
                        {/* Active Sentiment Monitoring */}
                        <div className="sm:col-span-5 bg-[#f1f6e4] rounded-2xl px-5 py-8 flex items-center justify-between shadow-xs">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#3a6a00] animate-pulse" />
                                <span className="text-lg font-bold text-[#181d13]">
                                    Active Sentiment Monitoring
                                </span>
                            </div>
                            <span className="text-[15px] font-bold text-[#3a6a00] bg-[#708e4c]/10 px-4 py-1 rounded-full">
                                Live View
                            </span>
                        </div>

                        {/* Opportunity Intelligence */}
                        <div className="md:absolute md:top-15 md:right-10 sm:col-span-7 bg-white border-l-2 border-[#3a6a00] rounded-2xl p-5 shadow-xs">
                            <span className="text-[10px] font-bold text-[#3a6a00] uppercase tracking-wider">
                                OPPORTUNITY INTELLIGENCE
                            </span>
                            <div className="text-xs sm:text-sm font-bold text-[#181d13] mt-1">
                                Recommendation: Share Enterprise Security Whitepaper
                            </div>
                            <p className="text-xs text-[#414a37] mt-1">
                                Prospect viewed compliance documentation twice on company website following last message.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12. SECTION: NEXT BEST ACTION */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                        Next Best Action
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed max-w-3xl">
                        When a prospect goes dark or asks a complex technical question, sales reps receive instant AI recommendations on whether to send a case study, offer a sandbox environment, or step back.
                    </p>
                </div>

                {/* 13. SECTION: FUTURE OF LINKEDIN OUTREACH & QUOTE */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                        Future of LinkedIn Outreach
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed max-w-3xl">
                        As autonomous agents become standard practice across enterprise sales organizations, the winning differentiator will not be volume, but the authenticity and depth of contextual engagement.
                    </p>

                    {/* Pull Quote Card */}
                    <div className="mt-6 bg-[#f1f6e4] border-l-2 border-[#181d13] rounded-2xl p-6 sm:p-8 shadow-xs">
                        <p className="text-sm sm:text-lg md:text-xl font-semibold text-[#181d13] italic leading-relaxed">
                            &ldquo;The future belongs to revenue teams who treat AI not as a replacement for human connection, but as an amplifier of genuine context and empathy.&rdquo;
                        </p>
                        <div className="mt-4 text-[11px] sm:text-xs font-bold text-[#181d13] tracking-wider uppercase">
                            DR. ELENA MARIS · CHIEF ECONOMIST, REVTECH
                        </div>
                    </div>
                </div>

                {/* 14. SECTION: THE FUTURE IS INTELLIGENT OUTREACH */}
                <div className="mt-12 sm:mt-16 pb-12 sm:pb-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                        The Future is Intelligent Outreach, Not Just Automated Outreach
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                        Transforming your sales motion from primitive automation to true AI-powered orchestration requires the right platform stack. By embedding intent signals, real-time personalization, and adaptive multi-channel sequences into your daily workflow, your team can achieve unprecedented pipeline growth without scaling headcount.
                    </p>
                </div>
            </div>
        </div>
    );
}
