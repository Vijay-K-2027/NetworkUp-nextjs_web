"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Radar, TrendingUp } from "lucide-react";

export default function Section2() {
    return (
        <section className="bg-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                {/* Left Section */}
                <motion.div
                    className="flex flex-col items-start gap-y-6 w-full"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#356221] font-bold tracking-widest">
                        Intelligence Layer
                    </span>

                    <h2 className="text-4xl sm:text-5xl font-bold text-left text-gray-900 leading-tight tracking-tight">
                        Find prospects actually worth contacting
                    </h2>

                    <p className="text-xl sm:text-2xl text-left text-[#555555] leading-relaxed max-w-2xl">
                        Stop spraying and praying. Our AI analyzes profile data, recent activity, and historical engagement to tell you who is ready to buy.
                    </p>

                    <div className="w-full space-y-4 mt-2">
                        <div className="flex flex-row items-center gap-x-4 w-full p-4 bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                            <div className="w-12 h-12 rounded-xl bg-[#ecf6ec] flex items-center justify-center shrink-0">
                                <TrendingUp size={22} className="text-[#356221]" />
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <h3 className="font-bold text-gray-950 text-[16px]">Lead Scoring</h3>
                                <p className="text-gray-500 text-[13px] mt-0.5">Rank prospects by intent and fit</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-x-4 w-full p-4 bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                            <div className="w-12 h-12 rounded-xl bg-[#fdf0f5] flex items-center justify-center shrink-0">
                                <Radar size={22} className="text-pink-600" />
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <h3 className="font-bold text-gray-950 text-[16px]">Buying Signal Detection</h3>
                                <p className="text-gray-500 text-[13px] mt-0.5">Alerts for job changes and post interactions</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="w-full lg:max-w-[650px] bg-[#e5e7eb]/80 p-8 rounded-[32px] flex flex-col gap-4 shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)]"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >

                    {/* Card 1 - Sarah Chen */}
                    <div className="flex flex-row items-center justify-between p-4 bg-white rounded-[20px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-gray-100 w-full gap-4">
                        <div className="flex items-center gap-x-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
                                    alt="Sarah Chen"
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <h4 className="font-bold text-gray-900 text-[15px] sm:text-[16px]">Sarah Chen</h4>
                                <p className="text-[12px] sm:text-[13px] text-gray-500 mt-0.5">VP of Engineering @ TechFlow</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end shrink-0 gap-y-1">
                            <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#06402B] bg-[#71EB34]">
                                98/100 Intent
                            </span>
                            <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">
                                WARM PROSPECT
                            </span>
                        </div>
                    </div>

                    {/* Card 2 - Marcus Thorne */}
                    <div className="flex flex-row items-center justify-between p-4 bg-white rounded-[20px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-gray-100 w-full gap-4">
                        <div className="flex items-center gap-x-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                                    alt="Marcus Thorne"
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col items-start text-left">
                                <h4 className="font-bold text-gray-900 text-[15px] sm:text-[16px]">Marcus Thorne</h4>
                                <p className="text-[12px] sm:text-[13px] text-gray-500 mt-0.5">Founder @ ScaleUp AI</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end shrink-0 gap-y-1">
                            <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#356221] bg-[#e2ecc8]">
                                84/100 Intent
                            </span>
                            <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">
                                SIGNAL: HIRING
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}