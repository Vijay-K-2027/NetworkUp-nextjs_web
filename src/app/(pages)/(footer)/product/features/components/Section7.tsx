"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Section7() {
    return (
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 bg-transparent">
            <div className="max-w-[1500px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch w-full">

                    {/* Card 1: Personalized Outreach */}
                    <motion.div
                        className="bg-white rounded-3xl sm:rounded-[32px] border border-[#c0caae]/30 shadow-sm sm:shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col justify-between w-full h-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Top Content */}
                        <div className="flex flex-col items-start w-full">
                            {/* Icon Box */}
                            <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center mb-6 sm:mb-8 shadow-xs">
                                <Image
                                    src="/footer/product/feature/Writer.png"
                                    alt="Personalized Outreach"
                                    width={44}
                                    height={44}
                                    className="w-full h-full object-contain rounded-2xl"
                                />
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-left text-[#191c1e] tracking-tight leading-tight mb-2.5 sm:mb-3">
                                Personalized Outreach
                            </h3>

                            <p className="text-sm sm:text-base text-left text-[#414a34] leading-relaxed mb-6">
                                Automation that feels profoundly personal. Inject dynamic variables and let our AI assist you in adjusting tone, grammar, and engagement hooks to ensure every message resonates.
                            </p>
                        </div>

                        {/* Image Preview Container */}
                        <Image
                            src="/footer/product/feature/AI_Content_Studio.png"
                            alt="AI Content Studio"
                            width={1100}
                            height={800}
                            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                        />

                        {/* Bottom Action Link */}
                        <div className="mt-6 pt-4 border-t border-gray-100 w-full flex items-center justify-start">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-[#191c1e] font-bold text-sm sm:text-base transition-colors group"
                            >
                                <span>Explore Outreach</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Card 2: ConvoBox */}
                    <motion.div
                        className="bg-white rounded-3xl sm:rounded-[32px] border border-[#c0caae]/30 shadow-sm sm:shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col justify-between w-full h-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    >
                        {/* Top Content */}
                        <div className="flex flex-col items-start w-full">
                            {/* Icon Box */}
                            <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center mb-6 sm:mb-8 shadow-xs">
                                <Image
                                    src="/footer/product/feature/Inbox.png"
                                    alt="ConvoBox"
                                    width={44}
                                    height={44}
                                    className="w-full h-full object-contain rounded-2xl"
                                />
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-left text-[#191c1e] tracking-tight leading-tight mb-2.5 sm:mb-3">
                                ConvoBox
                            </h3>

                            <p className="text-sm sm:text-base text-left text-[#414a34] leading-relaxed mb-6">
                                Stop switching tabs. Manage all your active conversations in a central hub. View complete lead context, previous campaign steps, and draft AI-assisted replies instantly.
                            </p>
                        </div>

                        {/* Image Preview Container */}
                        <Image
                            src="/footer/product/feature/Inbox-all.png"
                            alt="ConvoBox Inbox"
                            width={1100}
                            height={800}
                            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                        />

                        {/* Bottom Action Link */}
                        <div className="mt-6 pt-4 border-t border-gray-100 w-full flex items-center justify-start">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-[#191c1e] font-bold text-sm sm:text-base transition-colors group"
                            >
                                <span>Explore Inbox</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}