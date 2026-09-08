"use client";

import { UserPlus, Clock, Sparkles, MessageSquare, Handshake, SendHorizonal } from "lucide-react";
import { motion } from "framer-motion";

export default function Section4() {
    const steps = [
        {
            id: "step-1",
            label: "CONNECTION",
            subtitle: "Network expanded.",
            icon: UserPlus,
            status: "completed",
        },
        {
            id: "step-2",
            label: "FIRST MSG",
            subtitle: "Initial pitch sent.",
            icon: SendHorizonal,
            status: "completed",
        },
        {
            id: "step-3",
            label: "NO RESPONSE",
            subtitle: "Radio silence.",
            icon: Clock,
            status: "muted",
        },
        {
            id: "step-4",
            label: "SMART FOLLOW-UP",
            subtitle: "AI contextual nudge.",
            icon: Sparkles,
            status: "active",
        },
        {
            id: "step-5",
            label: "CONVERSATION",
            subtitle: "Engagement begins.",
            icon: MessageSquare,
            status: "upcoming",
        },
        {
            id: "step-6",
            label: "OPPORTUNITY",
            subtitle: "Deal created.",
            icon: Handshake,
            status: "upcoming",
        },
    ];

    return (
        <section className="w-full bg-[#f7f9fb] py-16 px-10 sm:px-14 lg:px-20 overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto">

                {/* Header (Left-Aligned) */}
                <div className="max-w-[600px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 tracking-tight"
                    >
                        The path to opportunity.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed"
                    >
                        Starting a conversation is just the beginning. Thoughtful follow-ups bridge the gap between initial contact and real opportunity, turning silence into engagement.
                    </motion.p>
                </div>

                {/* Workflow Timeline Stepper */}
                <div className="mt-16 sm:mt-20 overflow-x-auto pb-6 scrollbar-none">
                    <div className="min-w-[760px] lg:min-w-0 relative flex items-start justify-between">

                        {/* Connecting Line between nodes */}
                        <div className="absolute top-6 sm:top-7 left-8 right-8 h-[2.5px] -translate-y-1/2 z-0 mx-5">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.2, ease: "linear", delay: 0.2 }}
                                style={{ originX: 0 }}
                                className="w-full h-full relative"
                            >
                                {/* Segment 1: Step 1 to Step 4 (Solid Green) */}
                                <div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-r from-[#406900] to-[#A3FF12]" />
                                {/* Segment 2: Step 4 to Step 6 (Muted Grey) */}
                                <div className="absolute top-0 right-0 w-[40%] h-full bg-gray-200" />
                            </motion.div>
                        </div>

                        {/* 6 Workflow Nodes */}
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            const isActive = step.status === "active";
                            const isCompleted = step.status === "completed";

                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.85 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.4, ease: "easeOut" }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="relative z-10 flex flex-col items-center text-center w-[150px]"
                                >
                                    {/* Circle Icon Node */}
                                    {isActive ? (
                                        <div className="relative">
                                            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#406900] shadow-lg border-2 border-[#A3FF12] flex items-center justify-center text-white transition-transform duration-300 hover:scale-105">
                                                <IconComponent className="w-6 h-6 stroke-[2.2]" />
                                            </div>
                                            {/* Top-Right Glowing Accent Dot */}
                                            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#a3ff12] border-2 border-white shadow-xs animate-pulse" />
                                        </div>
                                    ) : (
                                        <div
                                            className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white flex items-center justify-center transition-all duration-200 ${isCompleted
                                                ? "border-2 border-[#406900] text-[#356221] shadow-xs"
                                                : "border-2 border-gray-300 text-gray-500 shadow-2xs"
                                                }`}
                                        >
                                            <IconComponent
                                                className={`w-5 h-5 ${isCompleted ? "stroke-[2.2]" : "stroke-[1.8]"
                                                    }`}
                                            />
                                        </div>
                                    )}

                                    {/* Labels */}
                                    <div className="mt-3.5 sm:mt-4">
                                        <p
                                            className={`text-sm tracking-wider uppercase leading-tight ${isActive
                                                ? "text-[#356221] font-bold"
                                                : step.status === "muted"
                                                    ? "text-gray-500"
                                                    : "text-gray-900"
                                                }`}
                                        >
                                            {step.label}
                                        </p>
                                        <p
                                            className={`text-[11px] sm:text-xs mt-1 leading-tight ${isActive
                                                ? "text-gray-700 font-medium"
                                                : "text-gray-500 font-normal"
                                                }`}
                                        >
                                            {step.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </section>
    );
}
