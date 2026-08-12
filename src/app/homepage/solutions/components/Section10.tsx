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

                <motion.div
                    className="flex flex-col lg:max-w-[45%] items-start gap-y-6 w-full text-left"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#71EB34] font-bold tracking-widest bg-[#EAFCF7] p-1.5 rounded w-fit">
                        Safety & Compliance
                    </span>

                    {/* Title */}
                    <div className="flex flex-col gap-1.5">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                            Your Account Safety Is Our Priority
                        </h2>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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
                                <span className="text-sm text-gray-600 font-bold">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: Safety & Compliance Stack Mockup */}
                <div className="flex flex-col items-start justify-start w-full lg:max-w-[54%] border border-gray-200 bg-[#f8fafc]/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 gap-y-6 shadow-sm shrink-0">

                    <span className="text-xl font-extrabold text-slate-800 text-left">
                        Account Safety Overview
                    </span>

                    {/* Safety Stack List */}
                    <div className="flex flex-col gap-4.5 w-full text-left">
                        {/* Card 1: Connection Requests */}
                        <div className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:scale-[1.01] transition-transform duration-300 w-full gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="w-11 h-11 rounded-full bg-[#eefce6] text-[#356221] flex items-center justify-center shrink-0">
                                    <Users size={20} className="stroke-[2.2]" />
                                </div>
                                <div className="flex flex-col min-w-0 leading-tight">
                                    <span className="font-extrabold text-sm sm:text-base text-slate-800 truncate">Connection Requests</span>
                                    <span className="text-xs text-slate-400 font-bold mt-0.5">Weekly Limit</span>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-20 sm:gap-32 shrink-0">
                                <div className="flex flex-col items-end leading-tight">
                                    <span className="font-black text-slate-800 text-sm sm:text-base">100</span>
                                    <span className="text-[10px] sm:text-xs text-slate-400 font-bold mt-0.5">Per Week</span>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-[#71EB34] text-white flex items-center justify-center text-[10px] font-black shadow-sm shrink-0">
                                    ✓
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Actions Per Day */}
                        <div className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:scale-[1.01] transition-transform duration-300 w-full gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="w-11 h-11 rounded-full bg-[#eefce6] text-[#356221] flex items-center justify-center shrink-0">
                                    <Zap size={20} className="stroke-[2.2] fill-[#356221]" />
                                </div>
                                <div className="flex flex-col min-w-0 leading-tight">
                                    <span className="font-extrabold text-sm sm:text-base text-slate-800 truncate">Actions Per Day</span>
                                    <span className="text-xs text-slate-400 font-bold mt-0.5">Daily Limit</span>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-20 sm:gap-32 shrink-0">
                                <div className="flex flex-col items-end leading-tight">
                                    <span className="font-black text-slate-800 text-sm sm:text-base">50</span>
                                    <span className="text-[10px] sm:text-xs text-slate-400 font-bold mt-0.5">Per Day</span>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-[#71EB34] text-white flex items-center justify-center text-[10px] font-black shadow-sm shrink-0">
                                    ✓
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Proxy Location */}
                        <div className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:scale-[1.01] transition-transform duration-300 w-full gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="w-11 h-11 rounded-full bg-[#eefce6] text-[#356221] flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="stroke-[2.2]" />
                                </div>
                                <div className="flex flex-col min-w-0 leading-tight">
                                    <span className="font-extrabold text-sm sm:text-base text-slate-800 truncate">Proxy Location</span>
                                    <span className="text-xs text-slate-400 font-bold mt-0.5">United States (New York)</span>
                                </div>
                            </div>

                            <div className="px-3 py-1 bg-[#eefce6] text-[#356221] border border-[#defad0] rounded-lg text-xs font-bold shrink-0">
                                Static IP
                            </div>
                        </div>

                        {/* Card 4: Status */}
                        <div className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:scale-[1.01] transition-transform duration-300 w-full gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="w-11 h-11 rounded-full bg-[#eefce6] text-[#356221] flex items-center justify-center shrink-0">
                                    <ShieldCheck size={20} className="stroke-[2.2]" />
                                </div>
                                <div className="flex flex-col min-w-0 leading-tight">
                                    <span className="font-extrabold text-sm sm:text-base text-slate-800 truncate">Status</span>
                                    <span className="text-xs text-slate-400 font-bold mt-0.5">All Systems Safe</span>
                                </div>
                            </div>

                            <div className="px-3 py-1 bg-[#eefce6] text-[#356221] border border-[#defad0] rounded-lg text-xs font-bold shrink-0">
                                Protected
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}