"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    ArrowRight,
    Target,
    Scissors,
    Shield,
    CircleX,
    CircleCheck,
    UserSearch,
    Sparkles,
    Send,
    ChevronDown,
    Handshake,
    FoldVertical,
} from "lucide-react";

export default function LinkedInConnectionMessageArticlePage() {
    return (
        <div className="w-full bg-[#f7f9fb] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white w-full max-w-9xl mx-auto rounded-2xl p-5">
                {/* 1. BREADCRUMB */}
                <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#414a37] mb-6 sm:mb-8">
                    <Link
                        href="/resources/blog"
                        className="transition-colors font-medium"
                    >
                        Blog
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[#181d13] font-medium truncate">
                        15 LinkedIn Connection Message Templates that actually Work
                    </span>
                </nav>

                {/* 2. HERO HEADER BOX */}
                <div className="w-full bg-gradient-to-r from-[#78c418]/20 to-[#ffffff]/20 rounded-3xl p-6 sm:p-10 md:p-12 border border-[#85e032]/30 shadow-xs">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Left Info */}
                        <div className="md:col-span-7 flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-[#3a6a00]/10 text-[#3a6a00] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                                    LINKEDIN OUTREACH
                                </span>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[65px] font-bold text-[#181d13] mt-3 sm:mt-4 tracking-tight leading-[1.15]">
                                    15 LinkedIn Connection <br className="hidden sm:inline" />
                                    Message Templates that <br className="hidden sm:inline" />
                                    actually Work
                                </h1>
                                <p className="text-md sm:text-lg text-[#414a37] font-normal leading-[2rem] mt-8 max-w-4xl">
                                    Stop getting left on &ldquo;Seen&rdquo;. Master the art of cold B2B connection requests with
                                    proven templates designed for high response rates, genuine context, and new relationships.
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-6 sm:mt-8 pt-5 border-t border-[#b8f47c]/50">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                                    alt="Rohit Verma"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover shrink-0"
                                />
                                <div>
                                    <div className="text-xs sm:text-sm font-bold text-[#181d13]">
                                        Rohit Verma
                                    </div>
                                    <div className="text-[11px] sm:text-xs text-[#414a37]">
                                        Aug 18, 2026 · 7 min read
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Graphic */}
                        <div className="md:col-span-5 flex items-center justify-center">
                            <Image
                                src="/footer/resources/blog/Article2.png"
                                alt="15 LinkedIn Connection Message Templates"
                                width={400}
                                height={320}
                                className="w-full h-auto object-contain max-h-[280px]"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* 3. PROSE INTRO */}
                <div className="mt-8 sm:mt-10 space-y-4">
                    <p className="text-sm sm:text-lg md:text-xl font-bold text-[#181d13] leading-relaxed">
                        If your current LinkedIn connection rate is hovering below 20%, the problem isn&apos;t your product or your offer, it&apos;s your opening line.
                    </p>
                    <p className="text-sm sm:text-lg text-[#181d13] tracking-[1px] leading-relaxed">
                        In today&apos;s crowded digital marketplace, decision-makers receive dozens of pitch-slaps daily. Generic templates praising their &ldquo;impressive background&rdquo; are instantly ignored or declined. To break through the noise, your outreach must be contextual, concise, and focused entirely on the recipient.
                    </p>
                </div>

                {/* 4. THE GOLDEN RULE CARD */}
                <div className="mt-8 bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs border-l-4 border-[#181d13]">
                    <div className="text-sm sm:text-lg font-bold text-[#181d13] flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#3a6a00]" />
                        <span>The Golden Rule of Connection Requests</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm md:text-base text-[#181d13] italic leading-relaxed">
                        &ldquo;Why should this person want to connect with you before they even know what you sell?&rdquo;
                    </p>
                </div>

                {/* 5. SECTION: WHAT MAKES A GOOD CONNECTION MESSAGE */}
                <div className="mt-12 sm:mt-16 flex flex-col gap-y-2">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        What Makes a Good Connection Message?
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                        Before diving into templates, successful connection requests share three fundamental pillars:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* Pillar 1: Relevance */}
                        <div className="bg-[#f1f6e4] border border-[#8f8f8f]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                <Target className="w-5 h-5 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-[#181d13]">
                                Relevance
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] mt-2 leading-relaxed w-full max-w-[200px]">
                                Tie your note to something specific they wrote, built, or shared recently.
                            </p>
                        </div>

                        {/* Pillar 2: Brevity */}
                        <div className="bg-[#f1f6e4] border border-[#8f8f8f]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                <FoldVertical className="w-5 h-5 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-[#181d13]">
                                Brevity
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] mt-2 leading-relaxed w-full max-w-[200px]">
                                Keep it under 300 characters so it fits neatly without clicking &ldquo;see more&rdquo;.
                            </p>
                        </div>

                        {/* Pillar 3: No Pitch */}
                        <div className="bg-[#f1f6e4] border border-[#8f8f8f]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                <Handshake className="w-5 h-5 text-[#3a6a00]" />
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-[#181d13]">
                                No Pitch
                            </h3>
                            <p className="text-xs sm:text-sm text-[#414a37] mt-2 leading-relaxed w-full max-w-[200px]">
                                Never sell in the connection request. Build rapport first.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 6. SECTION: 15 LINKEDIN CONNECTION MESSAGE TEMPLATES */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        15 LinkedIn Connection Message Templates
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                        Here are 5 detailed templates to get you started immediately, ranging from mutual group hooks to recent content triggers:
                    </p>

                    <div className="space-y-4 mt-6">
                        {/* Template 01 */}
                        <div className="bg-white border border-[#c0caae]/20 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="flex items-center justify-between">
                                <span className="bg-[#7ccb2a]/20 text-[#2b5100] font-bold text-[12px] tracking-wider px-4 py-1 rounded-lg uppercase">
                                    TEMPLATE 01
                                </span>
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-[#181d13] mt-3 mb-3">
                                The Recent Post Comment Hook
                            </h3>
                            <div className="bg-[#f1f6e4] rounded-xl p-4 text-xs sm:text-sm text-[#181d13] italic tracking-[0.5px] leading-relaxed font-medium">
                                &ldquo;Hi [Name], really enjoyed your take on [Topic] in your post yesterday, especially your point about [Specific <br /> Detail]. Would love to connect and follow your insights.&rdquo;
                            </div>
                        </div>

                        {/* Template 02 */}
                        <div className="bg-white border border-[#c0caae]/20 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="flex items-center justify-between">
                                <span className="bg-[#7ccb2a]/20 text-[#2b5100] font-bold text-[12px] tracking-wider px-2.5 py-0.5 rounded-lg uppercase">
                                    TEMPLATE 02
                                </span>
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-[#181d13] mt-3 mb-3">
                                The Mutual Connection Bridge
                            </h3>
                            <div className="bg-[#f1f6e4] rounded-xl p-4 text-xs sm:text-sm text-[#181d13] italic tracking-[0.5px] leading-relaxed font-medium">
                                &ldquo;Hi [Name], I noticed we both share a connection with [Mutual Friend/Colleague]. Admiring your work at <br />[Company], I wanted to connect.&rdquo;
                            </div>
                        </div>

                        {/* Template 03 */}
                        <div className="bg-white border border-[#c0caae]/20 rounded-2xl p-5 sm:p-6 shadow-xs">
                            <div className="flex items-center justify-between">
                                <span className="bg-[#7ccb2a]/20 text-[#2b5100] font-bold text-[12px] tracking-wider px-2.5 py-0.5 rounded-lg uppercase">
                                    TEMPLATE 03
                                </span>
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-[#181d13] mt-3 mb-3">
                                The Shared Community Angle
                            </h3>
                            <div className="bg-[#f1f6e4] rounded-xl p-4 text-xs sm:text-sm text-[#181d13] italic tracking-[0.5px] leading-relaxed font-medium">
                                &ldquo;Hi [Name], saw you&apos;re also active in the [Group Name] community. Would love to connect with fellow <br />builders in the space.&rdquo;
                            </div>
                        </div>

                        {/* Expand CTA */}
                        <button className="w-full bg-[#f1f6e4] border border-[#c0caae]/20 text-[#3a6a00] font-bold text-xs sm:text-sm py-3.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs">
                            <span>View All 15 Templates</span>
                            <ChevronDown className="w-4 h-4 text-[#3a6a00]" />
                        </button>
                    </div>
                </div>

                {/* 7. SECTION: HOW TO PERSONALIZE MESSAGES AT SCALE */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-3xl md:text-[36px] font-bold text-[#181d13] tracking-tight">
                        How to Personalize Messages at Scale
                    </h2>
                    <p className="mt-3 text-xs sm:text-base md:text-[16px] text-[#181d13] leading-relaxed">
                        Manual personalization takes hours. Here is how modern sales teams contrast generic templates against AI-assisted contextual hooks:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Traditional Template */}
                        <div className="bg-[#f1f6e4] border border-[#8f8f8f]/15 rounded-2xl p-5 flex flex-col justify-between shadow-xs">
                            <div>
                                <div className="flex items-center gap-2 text-sm font-bold text-[#ba1a1a]">
                                    <CircleX size={18} className="text-[#ba1a1a] stroke-[2]" />
                                    <span>Traditional Template</span>
                                </div>
                                <p className="text-sm text-[#414a37] italic mt-3 leading-relaxed">
                                    &ldquo;Hi [First Name], I saw you work at [Company] and <br />wanted to connect about our SaaS solution that <br />helps companies increase revenue.&rdquo;
                                </p>
                            </div>
                            <div className="mt-4 pt-3 text-sm text-[#717a65] border-t border-gray-100">
                                Acceptance rate: 12%
                            </div>
                        </div>

                        {/* AI-Assisted Context */}
                        <div className="bg-white border border-[#3a6a00]/40 rounded-2xl p-5 flex flex-col justify-between shadow-xs">
                            <div>
                                <div className="flex items-center gap-2 text-sm font-bold text-[#3a6a00]">
                                    <CircleCheck size={18} className="text-[#3a6a00] stroke-[2]" />
                                    <span>AI-Assisted Context</span>
                                </div>
                                <p className="text-sm text-[#181d13] mt-3 leading-relaxed font-medium">
                                    &ldquo;Hi Marcus, noticed your team scaled the <br />infrastructure mesh last quarter. We solved a similar <br />latency bottleneck in our proxy layer...&rdquo;
                                </p>
                            </div>
                            <div className="mt-4 pt-3 text-sm text-[#3a6a00] font-bold border-t border-gray-100">
                                Acceptance rate: 68%
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8. SECTION: MISTAKES TO AVOID */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Mistakes to Avoid
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                        Steer clear of these common outreach pitfalls that instantly trigger the &ldquo;Ignore&rdquo; button:
                    </p>

                    <div className="space-y-3 mt-6">
                        {/* Mistake 1 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs">
                            <div className="w-6 h-6 rounded-full bg-[#3a6a00] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                1
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#181d13]">
                                Pitching your entire pricing model in the 300-character connection note.
                            </span>
                        </div>

                        {/* Mistake 2 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs">
                            <div className="w-6 h-6 rounded-full bg-[#3a6a00] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                2
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#181d13]">
                                Using obvious placeholder tags like [Company] without verification.
                            </span>
                        </div>

                        {/* Mistake 3 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs">
                            <div className="w-6 h-6 rounded-full bg-[#3a6a00] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                3
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#181d13]">
                                Sending automated connection notes that sound robotic and overly formal.
                            </span>
                        </div>
                    </div>
                </div>

                {/* 9. SECTION: IMPROVING YOUR OUTREACH STRATEGY */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Improving Your Outreach Strategy
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                        Transitioning your LinkedIn motion into a repeatable system requires clear multi-step workflows:
                    </p>

                    {/* Flow Diagram */}
                    <div className="mt-6 bg-[#f1f6e4] rounded-2xl p-5 sm:p-6 shadow-xs">
                        <div className="flex flex-row items-stretch justify-center">
                            {/* Step 1 */}
                            <div className="bg-white rounded-xl p-2 text-center flex flex-col items-center justify-center w-full max-w-lg">
                                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                    <UserSearch className="w-5 h-5 text-[#3a6a00]" />
                                </div>
                                <div className="text-xs font-bold text-[#181d13]">
                                    1. Signal Detection
                                </div>
                            </div>
                            <div className="text-[#3a6a00] font-bold text-2xl pt-3">→</div>
                            {/* Step 2 */}
                            <div className="bg-white rounded-xl p-2 text-center flex flex-col items-center justify-center w-full max-w-lg">
                                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                    <Sparkles className="w-5 h-5 text-[#3a6a00]" />
                                </div>
                                <div className="text-xs font-bold text-[#181d13]">
                                    2. AI Contextualize
                                </div>
                            </div>
                            <span className="text-[#3a6a00] font-bold text-2xl pt-3">→</span>
                            {/* Step 3 */}
                            <div className="bg-white rounded-xl p-2 text-center flex flex-col items-center justify-center w-full max-w-lg">
                                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                    <Send className="w-5 h-5 text-[#3a6a00]" />
                                </div>
                                <div className="text-xs font-bold text-[#181d13]">
                                    3. Tailored Touch
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 10. SECTION: CAN AI HELP SCALE YOUR OUTREACH */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Can AI Help Scale Your Outreach?
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                        Autonomous tools ingest multi-dimensional intent signals—including tech stack migrations, funding rounds, and social activity—to generate unique hooks at scale.
                    </p>

                    <div className="mt-6 bg-[#f1f6e4]/15 border border-[#3a6a00]/30 rounded-2xl p-5 sm:p-6 shadow-xs">
                        <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-lg font-bold text-[#2b5100]">
                                NetworkUp AI Outbound Engine
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#ffffff] bg-[#3a6a00] px-4 py-1 rounded-full">
                                99.1% Accuracy
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#2b5100] mt-2.5 leading-relaxed">
                            Automatically craft hyper-personalized connection notes and follow-ups without spending hours on manual <br />prospect research.
                        </p>
                    </div>
                </div>

                {/* 11. SECTION: FINAL THOUGHTS & QUOTE */}
                <div className="mt-12 sm:mt-16 pb-12 sm:pb-16">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Final Thoughts
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-[#181d13] leading-relaxed">
                        Mastering LinkedIn outreach isn&apos;t about raw volume; it&apos;s about authenticity at scale and treating prospects like human beings rather than lead scores.
                    </p>

                    {/* Pull Quote Card */}
                    <div className="mt-6 bg-[#f1f6e4] border-l-4 border-[#181d13] rounded-2xl p-6 sm:p-8 shadow-xs">
                        <p className="text-sm sm:text-lg md:text-xl font-medium font-inter text-[#181d13] italic leading-relaxed">
                            &ldquo;The future belongs to revenue teams who treat AI not as a replacement for human connection, but as an amplifier of genuine context and empathy.&rdquo;
                        </p>
                        <div className="mt-4 text-[11px] sm:text-xs font-bold text-[#181d13] tracking-wider uppercase">
                            DR. ELENA MARIS · CHIEF ECONOMIST, B2B TECH
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
