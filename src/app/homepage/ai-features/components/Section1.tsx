"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Section1() {
    return (
        <section className="bg-[#fafcf7]">
            <div className="max-w-9xl w-full mx-auto py-10">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center gap-x-2 rounded-full bg-[#356221]/20 px-5 py-1">
                        <Sparkles size={12} fill="#356221" stroke="#356221" />
                        <h3 className="uppercase text-[14px] text-[#356221] font-bold tracking-wider">NEXT-GEN INTELLIGENCE</h3>
                    </div>
                    <div className="my-5">
                        <h1 className="text-5xl text-black/80 font-bold w-[700px] mx-auto text-center mb-5">
                            Supercharge your outreach with <span className="text-[#356221]">Autonomous Growth</span>
                        </h1>
                        <h4 className="text-smd text-gray-800/80 w-[500px] mx-auto text-center ">
                            GrowthPulse AI transforms raw network data into actionable revenue oppurtunities through deep-learning prospecting and automated personalization.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}