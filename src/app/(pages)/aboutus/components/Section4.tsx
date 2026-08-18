"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChartNoAxesColumn, Globe, Rocket, Users2 } from "lucide-react";

const section4Data = [
    {
        icon: Users2,
        quantity: "10K+",
        description: "Happy Users"
    },
    {
        icon: Globe,
        quantity: "120+",
        description: "Countries"
    },
    {
        icon: Rocket,
        quantity: "1M+",
        description: "Connections Initiated"
    },
    {
        icon: ChartNoAxesColumn,
        quantity: "99.9%",
        description: "Uptime"
    },
];

export default function Section4() {
    return (
        <section className="bg-[#fafcf7] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-9xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
                    <div className="flex flex-1 flex-col gap-y-2 text-left mx-2 sm:mx-10 w-full">

                        {/* Subheading Badge */}
                        <motion.p
                            className="text-[#356221]/80 uppercase text-xs sm:text-sm font-bold tracking-wider"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Mission ——
                        </motion.p>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-x-6 w-full">
                            {/* Left Side: Staggered Headings */}
                            <motion.div
                                className="flex flex-col items-start gap-1 w-full lg:w-[700px]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                            >
                                <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">Empower more people to</h1>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">build</h2>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl text-lime-700 font-bold w-full">meaningful connections</h3>
                                <h4 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">and</h4>
                                <h5 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">unlock new</h5>
                                <h6 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">opportunities.</h6>
                            </motion.div>

                            {/* Right Side: Description */}
                            <motion.div
                                className="w-full lg:w-[550px] text-left gap-2 h-auto pt-4 lg:pt-40 pb-1.5 shrink-0"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h1 className="text-xl sm:text-2xl text-[#356221]/80 text-left leading-relaxed">
                                    LinkedIn is full of opportunities. Our mission is to help you reach the right people, start the right conversations, and grow your business — the smart way.
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1 w-full mt-12">
                    {section4Data.map((data, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-row items-center gap-x-4 p-4 sm:p-6 rounded-2xl transition-all duration-300 bg-transparent"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
                        >
                            <div className="w-12 h-12 sm:w-15 sm:h-15 bg-[#f5f5dc] rounded-full flex items-center justify-center shrink-0">
                                <data.icon className="w-5 h-5 sm:w-6 sm:h-6 text-lime-700" />
                            </div>
                            <div className="flex flex-col gap-0.5 items-start">
                                <h1 className="text-lime-700/90 text-2xl sm:text-3xl font-bold leading-snug">{data.quantity}</h1>
                                <p className="text-black/90 text-xs sm:text-sm leading-snug">{data.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}