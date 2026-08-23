"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Users, Zap, MapPin, ShieldCheck } from "lucide-react";

const features = [
    "Connection Limit: Max 100 connection requests per account, per week.",
    "Action Limit: Max 50 actions per account, per day.",
    "Static Proxy & Location: Every account gets a dedicated, stable IP from your chosen location.",
    "LinkedIn Rule Compliance: We never perform actions that violate LinkedIn policies.",
    "Account Protection: If daily limit is reached, the account pauses automatically and resets the next day."
];

export default function Section10() {
    return (
        <section className="bg-[#fafcf7] w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 w-full">

                {/* Column 1: Left Title & Description */}
                <motion.div
                    className="flex flex-col lg:max-w-[50%] items-start gap-y-6 w-full text-left"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#71EB34] font-bold bg-[#EAFCEB] p-1.5 rounded-md w-fit">
                        Safety & Compliance
                    </span>

                    {/* Title */}
                    <div className="flex flex-col gap-1.5">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                            Your Account Safety Is Our Priority
                        </h2>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-md sm:text-lg text-black/60 leading-relaxed">
                            NetworkUp.io is built to follow LinkedIn rules strictly. We use smart limits, secure proxies, and real human-like behavior to keep your account safe, warm, and compliant — always.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col items-start gap-y-1 mt-2">
                        {features.map((data, index) => (
                            <div key={index} className="flex flex-row items-center gap-x-3 py-1">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <Check size={25} className="stroke-[#71EB34] stroke-[1]" />
                                </div>
                                <span className="text-md text-gray-700 font-bold text-left">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: Safety & Compliance Stack Mockup */}
                <motion.div
                    className="flex flex-col items-start justify-start w-full lg:max-w-[50%] border border-gray-200 bg-gray-50 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 gap-y-6 shadow-sm shrink-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-xl font-bold text-slate-800 text-left">
                        Account Safety Overview
                    </span>

                    {/* Safety Stack List */}
                    <div className="flex flex-col gap-4.5 w-full text-left">
                        {/* Card 1: Connection Requests */}
                        <motion.div
                            className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:scale-[1.01] transition-transform duration-300 w-full gap-4"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="w-11 h-11 rounded-full bg-[#eefce6] text-[#356221] flex items-center justify-center shrink-0">
                                    <Users size={20} className="stroke-[2.2]" />
                                </div>
                                <div className="flex flex-col min-w-0 leading-tight">
                                    <span className="font-bold text-xs sm:text-base text-slate-800">Connection Requests</span>
                                    <span className="text-xs text-slate-400 mt-0.5">Weekly Limit</span>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-12 sm:gap-32 shrink-0">
                                <div className="w-8 h-8 rounded-full bg-[#71EB34] text-white flex items-center justify-center text-[10px] font-black shadow-sm shrink-0">
                                    ✓
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Actions Per Day */}
                        <motion.div
                            className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:scale-[1.01] transition-transform duration-300 w-full gap-4"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="w-11 h-11 rounded-full bg-[#eefce6] text-[#356221] flex items-center justify-center shrink-0">
                                    <Zap size={20} className="stroke-[2.2] fill-[#356221]" />
                                </div>
                                <div className="flex flex-col min-w-0 leading-tight">
                                    <span className="font-bold text-xs sm:text-base text-slate-800">Actions Per Day</span>
                                    <span className="text-xs text-slate-400 mt-0.5">Daily Limit</span>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-12 sm:gap-32 shrink-0">
                                <div className="w-8 h-8 rounded-full bg-[#71EB34] text-white flex items-center justify-center text-[10px] font-black shadow-sm shrink-0">
                                    ✓
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Proxy Location */}
                        <motion.div
                            className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:scale-[1.01] transition-transform duration-300 w-full gap-4"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="w-11 h-11 rounded-full bg-[#eefce6] text-[#356221] flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="stroke-[2.2]" />
                                </div>
                                <div className="flex flex-col min-w-0 leading-tight">
                                    <span className="font-bold text-xs sm:text-base text-slate-800">Proxy Location</span>
                                    <span className="text-xs text-slate-400 mt-0.5">United States (New York)</span>
                                </div>
                            </div>

                            <div className="px-3 py-1 bg-[#eefce6]/60 text-[#356221] border border-[#defad0] rounded-lg text-xs font-bold shrink-0">
                                Static IP
                            </div>
                        </motion.div>

                        {/* Card 4: Status */}
                        <motion.div
                            className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:scale-[1.01] transition-transform duration-300 w-full gap-4"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="w-11 h-11 rounded-full bg-[#eefce6] text-[#356221] flex items-center justify-center shrink-0">
                                    <ShieldCheck size={20} className="stroke-[2.2]" />
                                </div>
                                <div className="flex flex-col min-w-0 leading-tight">
                                    <span className="font-bold text-xs sm:text-base text-slate-800">Status</span>
                                    <span className="text-xs text-slate-400 mt-0.5">All Systems Safe</span>
                                </div>
                            </div>

                            <div className="px-3 py-1 bg-[#eefce6]/60 text-[#356221] border border-[#defad0] rounded-lg text-xs font-bold shrink-0">
                                Protected
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}