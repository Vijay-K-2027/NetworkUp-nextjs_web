"use client";

import { motion } from "framer-motion";
import { User, CheckCircle2, MessagesSquareIcon } from "lucide-react";
import Image from "next/image";

const connectionFeatures = [
    "Built-in character limits and warnings",
    "Fallback values for missing data"
];

export default function Section3() {
    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-transparent flex flex-col items-center justify-center">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-20 sm:gap-24 lg:gap-28">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20 w-full">

                    {/* Left Column: Message Editor Widget Card */}
                    <motion.div
                        className="w-full lg:w-[48%] max-w-xl bg-[#f7f9fb] border border-[#e0e3e5] rounded-[28px] sm:rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-y-5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between w-full">
                            <h3 className="text-base sm:text-lg font-bold text-[#191c1e] tracking-tight">
                                Message Editor
                            </h3>
                            <span className="text-xs font-semibold text-[#414a34] font-mono select-none">
                                188/300
                            </span>
                        </div>

                        {/* Message Preview Box */}
                        <div className="w-full bg-[#a3ff12]/20 border border-[#406900]/20 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-[#191c1e] leading-relaxed font-normal shadow-2xs">
                            <span>Hi </span>
                            <span className="text-[#406900] ">{"{{first_name}}"}</span>
                            <span>, I noticed your work in the </span>
                            <span className="text-[#406900] ">{"{{industry}}"}</span>
                            <span> sector and was really impressed by your recent insights. I'd love to connect and keep up with your journey at </span>
                            <span className="text-[#406900] ">{"{{company}}"}</span>
                            <span>!</span>
                        </div>

                        {/* Dynamic Variables */}
                        <div className="flex flex-col items-start w-full pt-1">
                            <span className="text-[10px] font-bold text-[#414a34] uppercase tracking-wider mb-2.5 block">
                                Dynamic Variables
                            </span>

                            {/* Chips Row */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                                <div className="bg-[#eceef0] border border-[#e0e3e5] rounded-xl px-3 py-1.5 text-xs font-bold text-[#191c1e] flex items-center gap-1.5 transition-colors cursor-pointer select-none">
                                    <User size={13} className="stroke-[2.5]" />
                                    <span>FirstName</span>
                                </div>
                                <div className="bg-[#eceef0] border border-[#e0e3e5] rounded-xl px-3 py-1.5 text-xs font-bold text-[#191c1e] transition-colors cursor-pointer select-none">
                                    Company
                                </div>
                                <div className="bg-[#eceef0] border border-[#e0e3e5] rounded-xl px-3 py-1.5 text-xs font-bold text-[#191c1e] transition-colors cursor-pointer select-none">
                                    Industry
                                </div>
                                <div className="border border-dashed border-[#e0e3e5] bg-[#f2f4f6] rounded-xl px-3 py-1.5 text-xs font-bold text-[#414a34] transition-colors cursor-pointer select-none">
                                    + Custom
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Personalized Connection Requests Explainer */}
                    <motion.div
                        className="flex flex-col w-full lg:w-[48%] items-start text-left pl-0 lg:pl-4"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Icon Box */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 sm:mb-6 ">
                            <Image
                                src="/footer/product/outreach/Shakes.png"
                                alt="Personalized Connection"
                                width={64}
                                height={64}
                                className="object-contain rounded-full"
                            />
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-[#191c1e] tracking-tight leading-tight mb-4">
                            Personalized Connection Requests
                        </h2>

                        <p className="text-sm sm:text-base text-[#414a34] leading-relaxed mb-6 max-w-lg">
                            Make your first impression count. Use dynamic variables to inject relevant data into every request, ensuring your outreach feels tailored and researched, even at scale.
                        </p>

                        {/* Checklist */}
                        <div className="flex flex-col items-start gap-y-3 w-full">
                            {connectionFeatures.map((text, index) => (
                                <div key={index} className="flex items-center gap-2.5">
                                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                        <CheckCircle2 size={18} className="stroke-[#406900] stroke-[2.2]" />
                                    </div>
                                    <span className="text-sm font-medium text-[#191c1e]">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20 w-full">

                    {/* Left Column: Contextual Follow-ups Explainer */}
                    <motion.div
                        className="flex flex-col w-full lg:w-[48%] items-start text-left pl-0 lg:pl-2 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Icon Box */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e0e3e5] flex items-center justify-center mb-4 sm:mb-6 shadow-2xs">
                            <MessagesSquareIcon size={24} className="text-[#191c1e] stroke-[2]" />
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-[#191c1e] tracking-tight leading-tight mb-4">
                            Contextual Follow-ups
                        </h2>

                        <p className="text-sm sm:text-base text-[#414a34] leading-relaxed max-w-lg">
                            Keep the conversation flowing naturally. Send personalized messages that reference past interactions, maintaining conversational continuity from the first touch to the final re-engagement.
                        </p>
                    </motion.div>

                    {/* Right Column: Chat Inbox Mockup Card */}
                    <motion.div
                        className="w-full lg:w-[48%] max-w-xl bg-white border border-gray-200/90 rounded-[28px] sm:rounded-3xl shadow-sm overflow-hidden flex flex-col sm:flex-row items-stretch order-1 lg:order-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Left Sidebar inside Mockup (~36% width) */}
                        <div className="w-full sm:w-[38%] bg-[#f2f4f6] border-b sm:border-b-0 sm:border-r border-[#e0e3e5] p-5 flex flex-col justify-between gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#e0e3e5] shadow-2xs">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&fit=crop&q=80"
                                        alt="Sarah Johnson"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <h4 className="font-bold text-xs sm:text-sm text-[#191c1e] leading-tight">
                                        Sarah Johnson
                                    </h4>
                                    <p className="text-[11px] text-[#414a34] mt-0.5 leading-snug font-medium">
                                        HealthTech Inc.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Connection Metadata */}
                            <div className="flex flex-col gap-1 w-full text-left pt-2 border-t border-[#e0e3e5]">
                                <div className="flex items-center justify-between text-[11px] text-[#414a34] font-medium">
                                    <span>Connected:</span>
                                    <span className="text-[#191c1e] font-semibold">Oct 12</span>
                                </div>
                                <div className="flex items-center justify-between text-[11px] text-[#414a34] font-medium">
                                    <span>Last Reply:</span>
                                    <span className="text-[#191c1e] font-semibold">None</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Chat Message Area (~62% width) */}
                        <div className="w-full sm:w-[62%] bg-white p-5 sm:p-6 flex flex-col gap-4 justify-start min-h-[350px]">
                            <div className="bg-[#eceef0] text-[#191c1e] text-xs sm:text-[13px] leading-relaxed p-3.5 rounded-2xl rounded-tl-xs max-w-[94%] text-left">
                                Thanks for connecting! I'm interested in learning more about your solutions.
                            </div>

                            {/* Scheduled Automated Reply Bubble */}
                            <div className="flex flex-col items-end self-end max-w-[94%] w-full ">
                                <div className="bg-[#a3ff12]/20 text-[#191c1e] border border-[#406900]/20 text-xs sm:text-[13px] leading-relaxed p-3.5 rounded-2xl rounded-tr-xs text-left shadow-2xs">
                                    Great! How about a quick 10-min chat next Tuesday to see if we're a good fit for HealthTech Inc?
                                </div>
                                <span className="text-[10px] text-[#414a34] font-medium text-right mt-1 select-none">
                                    Scheduled for Tomorrow
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
