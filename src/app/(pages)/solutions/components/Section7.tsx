"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const features = [
    "Extract from Multiple Sources: LinkedIn search, Sales Navigator, company pages, groups, events & more.",
    "Advanced Filters: Filter by job title, seniority, location, industry, company size and more.",
    "Bulk Extract: Extract hundreds or thousands of leads at once.",
    "Instant Export: Add leads directly to campaigns or your database.",
    "Clean & Verified Data: Get only relevant, valid and actionable leads."
];

export default function Section7() {
    return (
        <section className="bg-[#fafcf7] w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">

                {/* Column 1: Left Title & Description */}
                <motion.div
                    className="flex flex-col lg:max-w-[45%] items-start gap-y-6 w-full order-1 lg:order-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#7ceb2a] font-bold tracking-widest bg-[#7ceb2a]/10 p-1.5 rounded w-fit">
                        Lead Extractor
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-left text-[#1f2937] leading-tight tracking-tight">
                        Find High-Quality Leads, Faster <br />Than Ever
                    </h2>

                    <p className="text-md sm:text-[17px] text-left text-[#4b5563]">
                        Extract targeted leads from LinkedIn, Sales Navigator, company pages, <br />groups, events and more. Advanced filters help you find the right prospects <br />in seconds.
                    </p>

                    <div className="flex flex-col items-start gap-y-1 mt-2">
                        {features.map((data, index) => (
                            <div key={index} className="flex flex-row items-center gap-x-3 py-1">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <Check size={25} className="stroke-[#71EB34] stroke-[1]" />
                                </div>
                                <span className="text-md text-gray-700 font-bold text-left">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: Lead Extractor Image */}
                <motion.div
                    className="flex flex-col items-center justify-center w-full lg:max-w-[50%] shrink-0 order-2 lg:order-1"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image
                        src="/product/extractor.png"
                        alt="Lead Extractor"
                        width={1200}
                        height={900}
                        className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}