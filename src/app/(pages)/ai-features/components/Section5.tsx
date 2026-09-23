"use client";

import { Dot } from "lucide-react";
import { motion } from "framer-motion";

export default function Section5() {
    return (
        <section className="bg-[#f7f9fb] w-full px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16 w-full">

                    {/* Left Column: Information */}
                    <motion.div
                        className="flex flex-col items-start justify-center w-full lg:max-w-[48%] gap-y-5"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="uppercase text-xs sm:text-sm text-[#316b00] font-extrabold tracking-wider leading-tight">
                            Real-Time Data
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1e] tracking-tight leading-tight w-full max-w-[650px] text-left">
                            Understand your outreach instantly
                        </h2>
                        <p className="text-base sm:text-lg text-[#3f4a36] text-left w-full max-w-[550px] leading-relaxed">
                            Stop digging through spreadsheets. Our AI surfaces the exact data points you need to make decisions.
                        </p>
                        <div className="inline-flex flex-wrap w-full max-w-[450px] gap-x-2 gap-y-3 py-3 text-xs sm:text-sm font-semibold text-[#191c1e]">
                            <span className="px-4 py-2 rounded-full border border-[#becbb0] bg-white shadow-sm hover:translate-y-[-1px] transition-all ease-in-out duration-200 cursor-pointer">Vertical Benchmarking</span>
                            <span className="px-4 py-2 rounded-full border border-[#becbb0] bg-white shadow-sm hover:translate-y-[-1px] transition-all ease-in-out duration-200 cursor-pointer">Reply Sentiment Analysis</span>
                            <span className="px-4 py-2 rounded-full border border-[#becbb0] bg-white shadow-sm hover:translate-y-[-1px] transition-all ease-in-out duration-200 cursor-pointer">A/B Testing Reports</span>
                            <span className="px-4 py-2 rounded-full border border-[#becbb0] bg-white shadow-sm hover:translate-y-[-1px] transition-all ease-in-out duration-200 cursor-pointer">ROI Tracking</span>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Card */}
                    <motion.div
                        className="flex flex-col items-start justify-center gap-y-7 p-6 sm:p-10 shadow-xl rounded-[28px] sm:rounded-[36px] border-4 border-gray-200/60 bg-white w-full lg:max-w-[48%]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex flex-row items-center justify-between w-full">
                            <h3 className="font-bold text-xl text-[#191c1e] text-left">Campaign Insights</h3>
                            <span className="uppercase rounded-md bg-[#f2f4f6] px-2 py-1 text-xs font-bold text-[#316b00]/80">Live Updates</span>
                        </div>

                        <div className="flex flex-row items-center gap-x-4 w-full">
                            <div className="flex flex-col items-start justify-center rounded-xl border border-[#316b00]/10 gap-y-1 py-4 px-3 w-full max-w-[48%] bg-[#316b00]/5 shrink-0">
                                <h1 className="text-3xl sm:text-4xl font-bold text-left">18%</h1>
                                <h2 className="text-[10px] sm:text-xs font-bold uppercase text-[#316b00] text-left">Acceptance Rate ▲</h2>
                            </div>
                            <div className="flex flex-col items-start justify-center rounded-xl border border-[#4e644a]/10 gap-y-1 py-4 px-3 w-full max-w-[48%] bg-[#4e644a]/5 shrink-0">
                                <h1 className="text-3xl sm:text-4xl font-bold text-left">42%</h1>
                                <h2 className="text-[10px] sm:text-xs font-bold uppercase text-[#4e644a] text-left">Reply Rate</h2>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-center gap-y-3 w-full">
                            <div className="p-2.5 flex flex-row gap-x-2 bg-[#f2f4f6] items-center rounded-xl w-full">
                                <Dot size={32} className="text-[#316b00] shrink-0" />
                                <span className="font-semibold text-xs sm:text-sm text-[#3f4a36] text-left">Healthcare is your top performing vertical this week.</span>
                            </div>
                            <div className="p-2.5 flex flex-row gap-x-2 bg-[#f2f4f6] items-center rounded-xl w-full">
                                <Dot size={32} className="text-[#ba1a1a] shrink-0" />
                                <span className="font-semibold text-xs sm:text-sm text-[#3f4a36] text-left">Finance campaign needs a follow-up adjustment.</span>
                            </div>
                            <div className="p-2.5 flex flex-row gap-x-2 bg-[#f2f4f6] items-center rounded-xl w-full">
                                <Dot size={32} className="text-[#4e644a] shrink-0" />
                                <span className="font-medium text-xs sm:text-sm text-[#3f4a36] text-left">Tuesday leads respond 2.4x faster than Friday.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}