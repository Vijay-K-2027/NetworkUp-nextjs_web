"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Radar, TrendingUp } from "lucide-react";

export default function Section2() {
    return (
        <section className="bg-[#f2f4f6] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">

                {/* Left Section */}
                <motion.div
                    className="flex flex-col items-start gap-y-6 w-full lg:max-w-[48%]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#316b00] font-extrabold tracking-wider leading-tight">
                        Intelligence Layer
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1e] tracking-tight leading-tight w-full text-left">
                        Find prospects actually worth contacting
                    </h2>

                    <p className="text-base sm:text-lg text-[#3f4a36] text-left w-full leading-relaxed max-w-2xl">
                        Stop spraying and praying. Our AI analyzes profile data, recent activity, and historical engagement to tell you who is ready to buy.
                    </p>

                    <div className="w-full space-y-4 mt-2">
                        <div className="flex flex-row items-center gap-x-4 w-full p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[#d0eac9] flex items-center justify-center shrink-0">
                                <TrendingUp size={22} className="text-[#546a50]" />
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <h3 className="font-extrabold text-[#191c1e] text-sm">Lead Scoring</h3>
                                <p className="text-[#3f4a36] text-xs mt-0.5">Rank prospects by intent and fit</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-x-4 w-full p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[#ffbdef] flex items-center justify-center shrink-0">
                                <Radar size={22} className="text-[#7c4872]" />
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <h3 className="font-extrabold text-[#191c1e] text-sm">Buying Signal Detection</h3>
                                <p className="text-[#3f4a36] text-xs mt-0.5">Alerts for job changes and post interactions</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="w-full lg:max-w-[48%] bg-[#e0e3e5] border border-gray-200/80 p-4 sm:p-6 rounded-[32px] sm:rounded-[40px] flex flex-col gap-4 shadow-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Card 1 - Sarah Chen */}
                    <div className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl border border-[#becbb0] w-full gap-4 hover:scale-[1.01] transition-transform duration-300">
                        <div className="flex items-center gap-x-3.5">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-150">
                                <Image
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
                                    alt="Sarah Chen"
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col items-start text-left leading-tight">
                                <h4 className="font-bold text-[#191c1e] text-sm sm:text-base">Sarah Chen</h4>
                                <span className="text-[11px] sm:text-xs text-[#3f4a36] mt-0.5">VP of Engineering @ TechFlow</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-end shrink-0 gap-y-1">
                            <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-[#2e6600] bg-[#7ceb2a]">
                                98/100 Intent
                            </span>
                            <span className="text-[9px] font-bold text-[#3f4a36] tracking-wider uppercase leading-none mt-1">
                                WARM PROSPECT
                            </span>
                        </div>
                    </div>

                    {/* Card 2 - Marcus Thorne */}
                    <div className="flex flex-row items-center justify-between p-4 bg-white rounded-2xl border border-[#becbb0] w-full gap-4 hover:scale-[1.01] transition-transform duration-300">
                        <div className="flex items-center gap-x-3.5">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-150">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                                    alt="Marcus Thorne"
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col items-start text-left leading-tight">
                                <h4 className="font-bold text-[#191c1e] text-sm sm:text-base">Marcus Thorne</h4>
                                <span className="text-[11px] sm:text-xs text-[#3f4a36] mt-0.5">Founder @ ScaleUp AI</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-end shrink-0 gap-y-1">
                            <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-[#546a50] bg-[#d0eac9]">
                                84/100 Intent
                            </span>
                            <span className="text-[9px] font-bold text-[#3f4a36] tracking-wider uppercase leading-none mt-1">
                                SIGNAL: HIRING
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}