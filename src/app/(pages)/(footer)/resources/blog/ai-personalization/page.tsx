"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    TrendingUp,
    Clock,
    Target,
    Users,
    Copy,
    ShieldCheck,
} from "lucide-react";

export default function AIPersonalizationArticlePage() {
    return (
        <div className="w-full bg-[#f7f9fb] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white w-full max-w-9xl mx-auto rounded-2xl p-5">
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
                        How AI Personalization Can 3x Your Reply Rates
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
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#181d13] mt-3 sm:mt-4 tracking-tight leading-[1.15]">
                                    How AI Personalization Can <br className="hidden sm:inline" />
                                    3x Your Reply Rates
                                </h1>
                                <p className="text-md sm:text-lg text-[#414a37] font-normal leading-[2rem] mt-8 max-w-4xl">
                                    Use AI to write personalized messages that feel human and drive replies.
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-6 sm:mt-8 pt-5 border-t border-[#b8f47c]/50">
                                <Image
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
                                    alt="Vanshi Singh"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover shrink-0"
                                />
                                <div>
                                    <div className="text-xs sm:text-sm font-bold text-[#181d13]">
                                        Vanshi Singh
                                    </div>
                                    <div className="text-[11px] sm:text-xs text-[#414a37]">
                                        Aug 5, 2026 · 6 min read
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Graphic */}
                        <div className="md:col-span-5 flex items-center justify-center">
                            <Image
                                src="/footer/resources/blog/Article4.png"
                                alt="How AI Personalization Can 3x Your Reply Rates"
                                width={500}
                                height={380}
                                className="w-full h-auto object-contain max-h-[380px]"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* 3. PROSE INTRO */}
                <div className="mt-8 sm:mt-10">
                    <p className="text-sm sm:text-lg text-[#181d13] tracking-[0.3px] leading-relaxed">
                        Most outreach messages fail for one simple reason: they don&apos;t feel relevant.
                        <br />
                        A prospect opens their inbox and sees another message that starts with &ldquo;Hi [First Name]&rdquo;, mentions their job title, and immediately moves into a generic sales pitch. Personalization has become one of the biggest factors in modern sales outreach - but manually researching every prospect and writing a unique message for each person isn&apos;t practical when you&apos;re reaching hundreds or thousands of prospects.
                    </p>
                    <p className="text-sm sm:text-lg text-[#181d13] tracking-[0.3px] leading-relaxed">
                        This is where AI personalization for sales outreach can make a difference. Modern AI can analyze information about a prospect, understand the context behind it, and help generate messages that are more specific to the person you&apos;re contacting.
                    </p>
                </div>

                {/* 4. THE GOLDEN RULE / CALLOUT QUOTE */}
                <div className="mt-8 pl-4 border-l-3 border-[#e5e7eb] py-4">
                    <p className="text-sm sm:text-base md:text-lg text-[#414a37] italic font-medium leading-relaxed">
                        &ldquo;  Instead of trying to sell to everyone, AI helps your team focus on the prospects that <br />matter most.&rdquo;
                    </p>
                </div>

                {/* 5. SECTION: WHAT IS AI PERSONALIZATION */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        What Is AI Personalization?
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#181d13] leading-relaxed">
                        AI personalization is the use of artificial intelligence to tailor sales and outreach messages based <br />on information about an individual prospect or company.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Traditional Outreach */}
                        <div className="bg-[#f1f6e4] border border-[#8f8f8f]/15 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div className="flex items-center gap-2">
                                <Image src="/footer/resources/blog/AI_Personalization/Red.png" width={24} height={24} alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                                <span className="text-xs sm:text-sm font-bold text-[#dc2626]">
                                    Traditional Outreach
                                </span>
                            </div>
                            <div className="my-4 text-xs sm:text-sm text-[#4b5563] font-medium leading-relaxed">
                                One message → Hundreds of prospects
                            </div>
                        </div>

                        {/* AI-Personalized Outreach */}
                        <div className="bg-[#f1f6e4] border border-[#8f8f8f]/15 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div className="flex items-center gap-2">
                                <Image src="/footer/resources/blog/AI_Personalization/Tick.png" width={24} height={24} alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                                <span className="text-xs sm:text-sm font-bold text-[#181d13]">
                                    AI-Personalized Outreach
                                </span>
                            </div>
                            <div className="my-4 text-xs sm:text-sm text-[#181d13] font-medium leading-relaxed">
                                Prospect data + Context → Personalized message
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. SECTION: WHY GENERIC OUTREACH DOESN'T WORK */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Why Generic Outreach Doesn&apos;t Work
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#181d13] leading-relaxed">
                        A generic message could be sent to almost anyone. Here&apos;s a quick comparison:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Generic Message */}
                        <div className="bg-[#f1f6e4] border border-[#8f8f8f]/15 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#dc2626] mb-3">
                                    <Image src="/footer/resources/blog/AI_Personalization/Red.png" width={24} height={24} alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                                    <span>Generic Message</span>
                                </div>
                                <div className="bg-[#f9fafb] rounded-xl p-4 border border-[#f3f4f6] shadow-2xs">
                                    <p className="text-xs sm:text-sm text-[#4b5563] italic leading-relaxed">
                                        &ldquo;Hi Sarah, I hope you&apos;re doing well. We help companies improve their sales outreach using our platform. Would you be available for a quick demo?&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Personalized Message */}
                        <div className="bg-[#f1f6e4] border border-[#8f8f8f]/15 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#181d13] mb-3">
                                    <Image src="/footer/resources/blog/AI_Personalization/Tick.png" width={24} height={24} alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                                    <span>Personalized Message</span>
                                </div>
                                <div className="bg-[#f9fafb] rounded-xl p-4 border border-[#e5e7eb] shadow-2xs">
                                    <p className="text-xs sm:text-sm text-[#181d13] italic leading-relaxed font-medium">
                                        &ldquo;Hi Sarah, I noticed TechCorp has been expanding its sales team across Europe. Scaling outbound while keeping messaging personalized can get difficult as the team grows. Curious how you&apos;re approaching this this year.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 7. SECTION: KEY BENEFITS OF AI PERSONALIZATION */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Key Benefits of AI Personalization
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#181d13] leading-relaxed">
                        AI helps you create more relevant outreach, more efficiently. Here are the key benefits:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Higher Reply Rates */}
                        <div className="bg-[#f1f6e4] rounded-xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                <TrendingUp className="w-5 h-5 text-[#181d13]" />
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-[#181d13]">
                                Higher Reply Rates
                            </h3>
                            <p className="text-xs sm:text-sm text-[#4b5563] mt-3 leading-relaxed">
                                More relevant messages lead to more conversations.
                            </p>
                        </div>

                        {/* Saves Time */}
                        <div className="bg-[#f1f6e4] rounded-xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                <Clock className="w-5 h-5 text-[#181d13]" />
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-[#181d13]">
                                Saves Time
                            </h3>
                            <p className="text-xs sm:text-sm text-[#4b5563] mt-3 leading-relaxed">
                                Automate research and message creation.
                            </p>
                        </div>

                        {/* Better Targeting */}
                        <div className="bg-[#f1f6e4] rounded-xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                <ShieldCheck className="w-5 h-5 text-[#181d13]" />
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-[#181d13]">
                                Better Targeting
                            </h3>
                            <p className="text-xs sm:text-sm text-[#4b5563] mt-3 leading-relaxed">
                                Use real prospect data and intent signals.
                            </p>
                        </div>

                        {/* Scales Personalization */}
                        <div className="bg-[#f1f6e4] rounded-xl p-5 sm:p-6 shadow-xs">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a6a00] mb-2">
                                <Users className="w-5 h-5 text-[#181d13]" />
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-[#181d13]">
                                Scales Personalization
                            </h3>
                            <p className="text-xs sm:text-sm text-[#4b5563] mt-3 leading-relaxed">
                                Maintain relevance even at high outreach volumes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 8. SECTION: HOW AI PERSONALIZATION WORKS */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        How AI Personalization Works
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#181d13] leading-relaxed">
                        AI uses multiple data points to create relevant and human-like messages.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 w-full max-w-3xl">
                        {/* Step 1 */}
                        <div className="bg-white border border-[#c0caae]/40 rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-start shadow-xs">
                            <span className="text-[11px] font-bold text-[#717a65] mb-2 uppercase tracking-wider">
                                01
                            </span>
                            <div className="text-xs font-bold text-[#181d13]">
                                Collect Prospect Data
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white border border-[#c0caae]/40 rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-start shadow-xs">
                            <span className="text-[11px] font-bold text-[#717a65] mb-2 uppercase tracking-wider">
                                02
                            </span>
                            <div className="text-xs  font-bold text-[#181d13]">
                                Analyze Context
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white border border-[#c0caae]/40 rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-start shadow-xs">
                            <span className="text-[11px] font-bold text-[#717a65] mb-2 uppercase tracking-wider">
                                03
                            </span>
                            <div className="text-xs  font-bold text-[#181d13]">
                                Generate <br className="hidden sm:inline" /> Personalized <br className="hidden sm:inline" /> Message
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white border border-[#c0caae]/40 rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-start shadow-xs">
                            <span className="text-[11px] font-bold text-[#717a65] mb-2 uppercase tracking-wider">
                                04
                            </span>
                            <div className="text-xs font-bold text-[#181d13]">
                                Send & Track Results
                            </div>
                        </div>
                    </div>
                </div>

                {/* 9. SECTION: REAL EXAMPLE: AI-GENERATED MESSAGE */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Real Example: AI-Generated Message
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#181d13] leading-relaxed">
                        Here&apos;s an example of what an AI-personalized message looks like:
                    </p>

                    {/* Interactive UI Card */}
                    <div className="mt-6 bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-xs">
                        {/* Profile Header */}
                        <div className="flex items-center justify-between border-b border-[#f3f4f6] pb-5">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                                    alt="Sarah Jenkins"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover shrink-0"
                                />
                                <div>
                                    <div className="text-sm sm:text-base font-bold text-[#181d13]">
                                        Sarah Jenkins
                                    </div>
                                    <div className="text-xs text-[#6b7280]">
                                        VP of Sales, TechCorp
                                    </div>
                                </div>
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-[#181d13]">
                                AI-Generated Message
                            </span>
                        </div>

                        {/* Data Attributes & Message Split */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-stretch">
                            {/* Left Data Attributes */}
                            <div className="bg-[#fdfdfd] rounded-xl p-5 space-y-3.5 flex flex-col justify-center">
                                <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
                                    <span className="text-xs text-[#6b7280]">Industry</span>
                                    <span className="text-xs font-bold text-[#181d13]">B2B SaaS</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
                                    <span className="text-xs text-[#6b7280]">Company Size</span>
                                    <span className="text-xs font-bold text-[#181d13]">250 employees</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
                                    <span className="text-xs text-[#6b7280]">Recent Signal</span>
                                    <span className="text-xs font-bold text-[#181d13]">Expanding European sales team</span>
                                </div>
                                <div className="flex items-center justify-between pt-0.5">
                                    <span className="text-xs text-[#6b7280]">ICP Match</span>
                                    <span className="text-xs font-bold text-[#181d13]">94%</span>
                                </div>
                            </div>

                            {/* Right Message Box */}
                            <div className="bg-[#fdfdfd] rounded-xl p-5 flex flex-col justify-start">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-bold text-[#181d13]">
                                        AI-Generated Message
                                    </span>
                                    <Copy className="w-3.5 h-3.5 text-[#181d13]" />
                                </div>
                                <p className="text-sm font-sembold text-[#181d13] mb-2">
                                    Hi Sarah,
                                </p>
                                <p className="text-sm text-[#374151] leading-relaxed font-normal">
                                    I noticed TechCorp is expanding its sales operations in <br />Europe. I also saw your recent thoughts on scaling <br />outbound while keeping personalization intact. Curious <br />how your team is approaching that balance as you grow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 10. SECTION: COMMON MISTAKES */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Common Mistakes
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#181d13] leading-relaxed">
                        Avoid these pitfalls when implementing AI personalization:
                    </p>

                    <div className="space-y-3 mt-6">
                        {/* Mistake 1 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs">
                            <div className="w-6 h-6 rounded-full bg-[#3a6a00] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                1
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#181d13]">
                                Over-personalizing creepy details: Mentioning personal hobbies outside of work can feel unnatural in a B2B context. Stick to professional triggers.
                            </span>
                        </div>

                        {/* Mistake 2 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs">
                            <div className="w-6 h-6 rounded-full bg-[#3a6a00] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                2
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#181d13]">
                                Relying 100% on automation: Skipping the review step can result in embarrassing factual errors or awkward phrasing.
                            </span>
                        </div>

                        {/* Mistake 3 */}
                        <div className="bg-[#f1f6e4] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs">
                            <div className="w-6 h-6 rounded-full bg-[#3a6a00] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                3
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#181d13]">
                                Forgetting a clear CTA: A personalized opening won&apos;t save a confusing call to action. Keep your ask simple and direct.
                            </span>
                        </div>
                    </div>
                </div>

                {/* 11. SECTION: MEASURING RESULTS */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        Measuring Results
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#181d13] leading-relaxed">
                        Track key metrics like open rates, reply rates, and positive response rates to gauge the success of your AI personalization campaigns over time.
                    </p>
                </div>

                {/* 12. SECTION: THE FUTURE OF AI PERSONALIZATION & QUOTE */}
                <div className="mt-6 sm:mt-8 pb-12 sm:pb-16 flex flex-col gap-y-2 pt-4 border-t border-[#f3f4f6]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#181d13] tracking-tight">
                        The Future of AI Personalization
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-[#181d13] leading-relaxed">
                        As AI models become more context-aware, outbound sales will shift from volume-driven spam to relationship-driven relevance.
                    </p>

                    {/* Pull Quote Card */}
                    <div className="mt-6 bg-[#f1f6e4] border-l-4 border-[#181d13] rounded-2xl p-6 sm:p-8 shadow-xs">
                        <p className="text-sm sm:text-lg md:text-xl font-medium font-inter text-[#181d13] italic leading-relaxed">
                            &ldquo;AI won&apos;t replace salespeople, but salespeople who use AI will outperform those who don&apos;t.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
