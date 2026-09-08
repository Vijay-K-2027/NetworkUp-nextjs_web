"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Pen, Search, MessageSquare, User } from "lucide-react";
import Image from "next/image";

const features = [
    {
        title: "Basic Info:",
        content: "Name your automation and set the foundation."
    },
    {
        title: "Target Words:",
        content: "Define keywords to watch for in incoming messages."
    },
    {
        title: "Reply Flow:",
        content: "Personalize how you want to respond."
    },
    {
        title: "Sender Profile:",
        content: "Choose the LinkedIn account to send from."
    },
    {
        title: "Final Review:",
        content: "Double check everything before you launch."
    }
];

const flowSteps = [
    {
        step: 1,
        title: "Basic Info",
        description: "Name your automation and set the foundation.",
        icon: Pen,
        active: true,
    },
    {
        step: 2,
        title: "Target Words",
        description: "Add keywords to monitor conversations.",
        icon: Search,
        active: false,
    },
    {
        step: 3,
        title: "Reply Flow",
        description: "Personalize your replies and define your flow.",
        icon: MessageSquare,
        active: false,
    },
    {
        step: 4,
        title: "Sender Profile",
        description: "Choose your LinkedIn account to send from.",
        icon: User,
        active: false,
    },
    {
        step: 5,
        title: "Final Review",
        description: "Review, test, and launch your automation.",
        icon: CheckCircle2,
        active: false,
    },
];

export default function Section6() {
    return (
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12">
            <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16 w-full">

                {/* Column 1: Left Title & Description */}
                <motion.div
                    className="flex flex-col w-full lg:w-[45%] items-start gap-y-4 pl-2 md:pl-4 lg:pl-6 xl:pl-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Icon Box */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 rounded-2xl flex items-center justify-center mb-2 sm:mb-4">
                        <Image
                            src="/footer/product/feature/Replies.png"
                            alt="Automate Replies"
                            width={60}
                            height={60}
                            className="w-full h-full object-contain rounded-2xl"
                        />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-[1f2937] leading-tight tracking-tight">
                        Automate Replies & Close Conversations on Autopilot
                    </h2>

                    <p className="text-sm sm:text-md md:text-lg text-left text-[#4b5563] leading-relaxed">
                        Turn every connection into a conversation automatically. Inbound automations engage your leads, respond instantly, and move warm leads to your inbox.
                    </p>

                    <div className="flex flex-col items-start gap-y-2 mt-2 w-full max-w-[500px]">
                        {features.map((data, index) => (
                            <div key={index} className="flex flex-row items-start gap-x-2.5 py-0.5">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                                    <CheckCircle2 size={19} className="stroke-[#63c522] stroke-[2.2]" />
                                </div>
                                <div className="text-base sm:text-md text-left leading-snug">
                                    <span className="text-[#0f172a] font-bold mr-1.5">{data.title}</span>
                                    <span className="text-[#334155] font-medium">{data.content}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: Right Engagement Automation Flow Mockup Widget */}
                <motion.div
                    className="flex flex-col items-start justify-start w-full lg:w-[48%] border border-[#f3f4f6] bg-[#f9fafb] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 gap-y-6 shadow-sm shrink-0"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#1f2937] text-left tracking-tight">
                        Engagement Automation Flow
                    </h3>

                    <div className="w-full flex flex-col gap-y-3">
                        <div className="relative w-full hidden sm:flex items-center justify-between px-6 sm:px-8 mb-1">
                            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 border-t border-dashed border-gray-300 z-0" />

                            {flowSteps.map((s) => (
                                <div
                                    key={s.step}
                                    className={`relative z-10 w-10 h-8 rounded-full flex items-center justify-center text-xs font-extrabold transition-all shadow-sm ${s.active
                                        ? "bg-[#63c522] text-white "
                                        : "bg-[#f0fdf4] text-[#7ba316]"
                                        }`}
                                >
                                    {s.step}
                                </div>
                            ))}
                        </div>

                        {/* 5 Flow Step Cards Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 w-full">
                            {flowSteps.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={item.step}
                                        className={`rounded-2xl p-3 sm:p-3.5 flex flex-col items-center text-center justify-start min-h-[160px] sm:min-h-[175px] transition-all ${item.active
                                            ? "border-2 border-[#d7f7bb] bg-white shadow-sm ring-1 ring-lime-400/20"
                                            : "border border-gray-200/90 bg-white hover:border-gray-300"
                                            }`}
                                    >
                                        {/* Mobile step number badge */}
                                        <div className="sm:hidden mb-1.5">
                                            <span className={`w-7 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#7ba316] text-white px-5`}>
                                                {item.step}
                                            </span>
                                        </div>

                                        <div className="w-8 h-8 flex items-center justify-center mb-1.5">
                                            <IconComponent
                                                size={20}
                                                className={"text-[#7ba316] stroke-[3]"}
                                            />
                                        </div>
                                        <h4 className="font-bold text-sm sm:text-[15px] text-[#1e293b] leading-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-[10px] sm:text-[11px] text-[#64748b] leading-snug mt-1.5">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Info Card: Safe & Smart Automation */}
                    <div className="w-full bg-[#f0fdf4]/30 border border-[#dcfce7] rounded-2xl p-4 sm:p-5 text-left">
                        <h4 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1">
                            Safe & Smart Automation
                        </h4>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                            Automations run safely with smart limits and stop when a lead replies, is removed, marked as wrong person, or the sequence ends.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}