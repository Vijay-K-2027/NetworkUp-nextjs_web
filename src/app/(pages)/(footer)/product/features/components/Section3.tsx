"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Section3() {
    return (
        <section className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-10">
            <div className="w-full max-w-screen-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-x-10 py-5">

                    {/* Left Column: Discover Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full md:w-[45%] md:max-w-[45%] h-auto rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-gray-200/80 bg-white flex items-center justify-center shadow-sm"
                    >
                        <Image
                            src="/footer/product/feature/DiscoverPreview.png"
                            alt="Discover"
                            width={1000}
                            height={1000}
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>

                    {/* Right Column: Smart Prospecting Explainer */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full md:w-[45%] md:max-w-[45%] flex flex-col justify-center items-start pl-2 md:pl-4 lg:pl-6 xl:pl-8"
                    >
                        {/* Icon Box */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                            <Image
                                src="/footer/product/feature/Search.png"
                                alt="Smart Prospecting"
                                width={60}
                                height={60}
                                className="w-full h-full object-contain rounded-2xl"
                            />
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#191c1e] tracking-tight leading-tight mb-3 sm:mb-4">
                            Smart Prospecting
                        </h2>

                        {/* Description */}
                        <p className="text-[#414a34] text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 max-w-[570px]">
                            Stop guessing who to contact. Use our advanced search engine to pinpoint relevant professional prospects using granular filters—industry, company size, current role, and seniority level. Build targeted lists in minutes, not hours.
                        </p>

                        {/* Action Link */}
                        <Link
                            href="#"
                            className="inline-flex items-center gap-1.5 text-[#406900] text-sm sm:text-base font-semibold transition-colors group"
                        >
                            <span>Explore Lead Finder</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
