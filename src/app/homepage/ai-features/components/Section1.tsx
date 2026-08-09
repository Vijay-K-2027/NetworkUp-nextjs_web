"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Section1() {
    return (
        <section className="bg-[#fafcf7] w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full mx-auto py-16">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center gap-x-2 rounded-full bg-[#356221]/20 px-5 py-1">
                        <Sparkles size={12} fill="#356221" stroke="#356221" />
                        <h3 className="uppercase text-[12px] sm:text-[14px] text-[#356221] font-bold tracking-wider">
                            NEXT-GEN INTELLIGENCE
                        </h3>
                    </div>
                    <div className="my-5 w-full flex flex-col items-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black/80 font-bold max-w-[700px] w-full text-center mb-5 tracking-tight leading-tight px-2">
                            Supercharge your outreach with <span className="text-[#356221]">Autonomous Growth</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-650 max-w-[500px] w-full text-center px-4 leading-relaxed">
                            GrowthPulse AI transforms raw network data into actionable revenue opportunities through deep-learning prospecting and automated personalization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}