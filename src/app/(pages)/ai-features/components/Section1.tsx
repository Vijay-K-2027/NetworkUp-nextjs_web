"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Section1() {
    return (
        <section className="bg-[#fafcf7] w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full mx-auto py-16">
                <div className="w-full flex flex-col items-center justify-center">

                    {/* Badge */}
                    <motion.div
                        className="flex flex-row items-center gap-x-2 rounded-full bg-[#d0eac9] px-5 py-1"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Sparkles size={12} fill="#546a50" stroke="#546a50" />
                        <h3 className="uppercase text-[12px] sm:text-[14px] text-[#546a50] font-bold tracking-wider">
                            NEXT-GEN INTELLIGENCE
                        </h3>
                    </motion.div>

                    {/* Content */}
                    <div className="my-5 w-full flex flex-col items-center">
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl text-[#191c1e] font-bold max-w-[800px] w-full text-center mb-5 tracking-tightpx-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            Supercharge your outreach with <span className="text-[#316b00]">Autonomous Growth</span>
                        </motion.h1>

                        <motion.p
                            className="text-sm sm:text-base md:text-lg text-[#3f4a36] w-full text-center px-4 leading-relaxed"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            GrowthPulse AI transforms raw network data into actionable revenue <br />opportunities through deep-learning prospecting and automated <br />personalization.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}