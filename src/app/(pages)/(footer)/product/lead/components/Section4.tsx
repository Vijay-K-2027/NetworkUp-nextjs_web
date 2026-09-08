"use client";
import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Building, Check, MapPin, Tag, UserPlus, ChevronDown } from "lucide-react";
import Image from "next/image";

const features = [
    "Extract from Multiple Sources: LinkedIn search, Sales Navigator, company pages, groups, events & more.",
    "Advanced Filters: Filter by job title, seniority, location, industry, company size and more.",
    "Bulk Extract: Extract hundreds or thousands of leads at once.",
    "Instant Export: Add leads directly to campaigns or your database.",
    "Clean & Verified Data: Get only relevant, valid and actionable leads."
];


export default function Section4() {
    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full">

                {/* Column 1: Left Title & Description */}
                <motion.div
                    className="flex flex-col lg:max-w-[45%] items-center justify-center gap-y-6 w-full order-1 lg:order-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-left text-[#1f2937] leading-tight tracking-tight">
                        Find High-Quality Leads, Faster Than Ever
                    </h2>

                    <p className="text-md sm:text-lg text-left text-[#4b5563]">
                        Extract targeted leads from LinkedIn, Sales Navigator, company pages, groups, events and more. Advanced filters help you find the right prospects in seconds.
                    </p>

                    <div className="flex flex-col items-start gap-y-1 mt-2">
                        {features.map((data, index) => (
                            <div key={index} className="flex flex-row items-center gap-x-3 py-1">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <Check size={25} className="stroke-[#a3ff12] stroke-[1]" />
                                </div>
                                <span className="text-md text-[#111827] font-bold text-left">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: Lead Extractor Mockup Widget */}
                <motion.div
                    className="flex flex-col items-start justify-start w-full lg:max-w-[50%] rounded-3xl shrink-0 order-2 lg:order-1"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image
                        src="/footer/product/lead/LeadExtractor.png"
                        alt="Discover"
                        width={2000}
                        height={2000}
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}