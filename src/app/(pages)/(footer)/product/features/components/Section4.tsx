"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section4() {
    return (
        <section className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:p-15 py-6 sm:py-8 lg:py-15">
            <div className="w-full max-w-[1550px] bg-[#f2f4f6] mx-auto bg-gray-100 rounded-3xl p-5 sm:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-x-10">

                    {/* Left Column: Organized Lead Management Explainer */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full md:w-[45%] md:max-w-[45%] flex flex-col justify-center items-start order-2 lg:order-1"
                    >
                        {/* Icon Box */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                            <Image
                                src="/footer/product/feature/Teams.png"
                                alt="Smart Prospecting"
                                width={70}
                                height={70}
                                className="w-full h-full object-contain rounded-2xl"
                            />
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-[42px] w-full max-w-[400px] font-bold text-[#191c1e] tracking-tight leading-tight mb-3 sm:mb-4">
                            Organized Lead Management
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 max-w-[430px]">
                            Maintain a centralized, living database of your connections. Enrich profiles automatically, organize with customs tags, attach internal notes, and seamlessly associate leads with active outreach campaigns to track their journey.
                        </p>
                    </motion.div>

                    {/* Right Column: Leads Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full md:w-[49%] md:max-w-[49%] h-auto flex items-center justify-center order-1 lg:order-2"
                    >
                        <Image
                            src="/footer/product/feature/Leads.png"
                            alt="Discover"
                            width={1100}
                            height={1100}
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
