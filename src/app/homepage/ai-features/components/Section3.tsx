"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw, ChevronDown, CircleCheck } from "lucide-react";

export default function Section3() {
    const [tone, setTone] = useState("Professional");
    const [length, setLength] = useState("Medium");

    const features = [
        "Personalized messaging", "Multiple tone options", "Short & long formats", "One-click regeneration"
    ]

    const templates: Record<string, Record<string, string>> = {
        Professional: {
            Short: "Hi {{first_name}},\n\nI noticed your work at {{company}}. We help {{industry}} teams like yours improve {{outcome}}. Let's connect.",
            Medium: "Hi {{first_name}},\n\nI noticed your work at {{company}}. We help {{industry}} teams like yours improve {{outcome}}. Would love to connect and explore how we can help.",
            Long: "Hi {{first_name}},\n\nI was reviewing your background and was impressed by your work at {{company}}. Our platform helps {{industry}} organizations scale efficiently and drive key {{outcome}} metrics.\n\nI would welcome the opportunity to schedule a brief introductory call to share some insights with you. Let me know if you are open to connecting."
        },
        Casual: {
            Short: "Hey {{first_name}}, saw your profile and what you're building at {{company}}. We help {{industry}} teams optimize {{outcome}}. Let's connect!",
            Medium: "Hey {{first_name}},\n\nHope you're doing well. I was checking out your profile and noticed your role at {{company}}. We help teams in the {{industry}} space hit their {{outcome}} targets.\n\nWould love to connect and exchange some ideas sometime!",
            Long: "Hey {{first_name}},\n\nI came across your profile today and noticed the awesome work you're doing at {{company}}. It looks like you're dealing with some really interesting challenges in the {{industry}} space.\n\nWe work with teams like yours to streamline their processes and supercharge their {{outcome}}.\n\nLet's connect—would love to hear more about your roadmap!"
        },
        Direct: {
            Short: "Hi {{first_name}}, I help {{industry}} teams at {{company}} improve {{outcome}}. Open to connecting?",
            Medium: "Hi {{first_name}},\n\nI am reaching out because we help {{industry}} companies like {{company}} scale their operations and achieve better {{outcome}}.\n\nWould love to connect and show you how we do it.",
            Long: "Hi {{first_name}},\n\nI help {{industry}} leaders at companies like {{company}} solve efficiency issues and improve their overall {{outcome}}.\n\nWe provide the tooling and support to get you up and running within a week.\n\nIf you have 5 minutes this week, let's connect and discuss."
        }
    };

    return (
        <section className="bg-[#fafcf7] mx-10 py-12 md:py-18 px-3 sm:px-5 lg:px-7">
            <div className="max-w-8xl mx-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                {/* Left Section - AI Message Writer Card Mockup */}
                <motion.div
                    className="w-full lg:max-w-[750px] rounded-[32px] flex flex-col gap-4 shadow-md order-2 lg:order-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 w-full">
                        {/* Header */}
                        <div className="flex flex-row items-center justify-between w-full mb-6">
                            <h3 className="font-bold text-gray-900 text-lg">AI Message Writer</h3>
                            <div className="flex gap-x-1.5">
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                            </div>
                        </div>

                        <hr className="border-gray-100/80 mb-6" />

                        {/* Controls */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-2">
                                    Tone
                                </label>
                                <div className="relative w-full">
                                    <select
                                        value={tone}
                                        onChange={(e) => setTone(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-2xl py-3 px-4 pr-10 text-sm font-semibold text-gray-700 shadow-sm appearance-none focus:outline-none focus:border-green-500 cursor-pointer"
                                    >
                                        <option value="Professional">Professional</option>
                                        <option value="Casual">Casual</option>
                                        <option value="Direct">Direct</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-2">
                                    Length
                                </label>
                                <div className="relative w-full">
                                    <select
                                        value={length}
                                        onChange={(e) => setLength(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-2xl py-3 px-4 pr-10 text-sm font-semibold text-gray-700 shadow-sm appearance-none focus:outline-none focus:border-green-500 cursor-pointer"
                                    >
                                        <option value="Short">Short</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Long">Long</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message Box */}
                        <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-5 mb-6 text-[15px] sm:text-[16px] text-slate-700 leading-relaxed text-left whitespace-pre-line min-h-[140px] w-full">
                            {templates[tone]?.[length] || templates.Professional.Medium}
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex flex-row items-center justify-between w-full">
                            <button
                                type="button"
                                className="flex items-center gap-x-2 border border-gray-200 bg-white hover:bg-slate-50 active:bg-slate-100 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-colors duration-200 cursor-pointer"
                            >
                                <RotateCw size={14} className="text-slate-600" />
                                <span>Regenerate</span>
                            </button>
                            <button
                                type="button"
                                className="bg-[#71EB34] hover:bg-[#64d02e] active:bg-[#57b827] rounded-xl px-6 py-2.5 text-sm font-bold text-black shadow-sm transition-colors duration-200 cursor-pointer"
                            >
                                Use Message
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Section - Text & Features */}
                <motion.div
                    className="flex flex-col lg:max-w-[40%] items-start gap-y-6 w-full order-1 lg:order-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#71EB34] font-bold tracking-widest">
                        AI Message Writer
                    </span>

                    <h2 className="text-4xl sm:text-5xl font-bold text-left text-gray-900 leading-tight tracking-tight">
                        Write personalized outreach in seconds
                    </h2>

                    <p className="text-lg sm:text-xl text-left text-[#555555] leading-relaxed max-w-2xl">
                        Generate LinkedIn connection requests, follow-up messages, and InMails using AI that knows your prospects, context, and tone.
                    </p>

                    <div
                        className="flex flex-col items-start gap-y-1 mt-2"
                    >
                        {features.map((data, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center gap-x-3 py-1"
                            >
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <CircleCheck size={25} fill="#71EB34" className="stroke-black stroke-[1]" />
                                </div>
                                <span className="text-base text-gray-700 font-medium">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}