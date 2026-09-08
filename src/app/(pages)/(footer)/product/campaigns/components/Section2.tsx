"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    UserPlus,
    Clock,
    Rocket,
    ArrowRight,
    Network,
    SquarePen,
    ChartNoAxesCombinedIcon,
    MessagesSquareIcon,
} from "lucide-react";

export default function Section2() {
    const steps = [
        {
            number: "1.",
            title: "Choose Prospects",
            description: "Select highly targeted leads from your Discovery searches.",
            icon: UserPlus,
            hasArrow: true,
        },
        {
            number: "2.",
            title: "Create Sequence",
            description: "Map out connection requests, messages, and follow-up paths.",
            icon: Network,
            hasArrow: true,
        },
        {
            number: "3.",
            title: "Personalize",
            description: "Use dynamic variables and AI to tailor messaging for every lead.",
            icon: SquarePen,
            hasArrow: true,
        },
        {
            number: "4.",
            title: "Set Timing",
            description: "Define delivery windows, business days, and smart delays.",
            icon: Clock,
            hasArrow: true,
        },
        {
            number: "5.",
            title: "Launch",
            description: "Activate the campaign with built-in safety limits to protect your account.",
            icon: Rocket,
            hasArrow: true,
        },
        {
            number: "6.",
            title: "Monitor",
            description: "Track acceptances, replies, and overall performance in real-time.",
            icon: ChartNoAxesCombinedIcon,
            hasArrow: true,
        },
        {
            number: "7.",
            title: "Respond",
            description: "Automation pauses on reply, passing the conversation to your Inbox.",
            icon: MessagesSquareIcon,
            hasArrow: false,
        },
    ];

    return (
        <section className="w-full pt-10 sm:pt-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden flex flex-col items-center justify-center shadow-xs gap-y-5">
            {/* Top-Right Quarter Circle Ambient Shape (Option 1) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 lg:right-15 w-[550px] h-[550px] bg-gradient-to-bl from-[#9FFB06]/10 to-[#9FFB06]/1 rounded-bl-full pointer-events-none -z-0"
            />

            <div className="w-full max-w-[1440px] mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight leading-tight">
                        What is a NetworkUp Campaign?
                    </h2>
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
                        It&apos;s your complete operating system for outbound engagement. A campaign structures every
                        touchpoint, ensuring consistent, personalized outreach while protecting your account reputation.
                    </p>
                </motion.div>

                {/* 7 Steps Cards Grid */}
                <div className="mt-16 sm:mt-20 w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: index * 0.07 }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="relative bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Icon Frame */}
                                        <div className="w-10 h-10 rounded-xl bg-[#ECEEF0] flex items-center justify-center text-gray-800">
                                            <Icon className="w-5 h-5 stroke-[2] stroke-[#191C1E]" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base sm:text-lg font-bold text-gray-950 mt-5 tracking-tight leading-snug">
                                            {step.number} {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mt-2.5 max-w-[220px]">
                                            {step.description}
                                        </p>
                                    </div>

                                    {step.hasArrow && (
                                        <div className="flex absolute z-20 w-8 h-8 rounded-full bg-[#F7F9FB] border border-gray-200 shadow-xs items-center justify-center text-gray-400 -bottom-4 left-1/2 -translate-x-1/2 rotate-90 sm:bottom-auto sm:left-auto sm:-right-4 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 sm:rotate-0">
                                            <ArrowRight className="w-4 h-4 text-[#414A34]" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="my-5 w-full lg:max-w-6xl"
            >
                <Image
                    src="/footer/product/campaigns/Campaigns.png"
                    alt="Campaigns"
                    width={2000}
                    height={2000}
                    className="w-full h-auto object-contain"
                />
            </motion.div>
        </section>
    );
}
