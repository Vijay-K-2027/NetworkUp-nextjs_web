"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const features = [
    "Centralized Database: All your leads in one secure place.",
    "Smart Segmentation: Filter and segment leads with advanced options.",
    "Tags & Notes: Add custom tags, notes and important details.",
    "Pipeline Stages: Track leads across different stages.",
    "Bulk Actions: Edit, export, move or delete leads in bulk."
];

export default function Section5() {
    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full">

                {/* Column 1: Left Title & Description */}
                <motion.div
                    className="flex flex-col lg:max-w-[50%] items-start gap-y-6 w-full text-left order-1 lg:order-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Title */}
                    <div className="flex flex-col text-3xl sm:text-4xl font-bold text-[#1f2937] leading-tight tracking-tight">
                        <h2>
                            Organize, Manage & Segment All
                        </h2>
                        <h2>
                            Your Leads in One Place
                        </h2>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-md sm:text-lg text-[#4b5563] leading-relaxed">
                            Store, organize and manage all your leads with powerful filters, tags, notes.
                        </p>
                        <p className="text-md sm:text-lg text-[#4b5563] leading-relaxed">
                            and stages. Keep your pipeline clean, updated and actionable.
                        </p>
                    </div>

                    {/* Features */}
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

                {/* Column 2: CRM Lead List Dashboard Mockup */}
                <motion.div
                    className="flex flex-col items-start justify-start w-full lg:max-w-[50%] rounded-3xl shrink-0 order-2 lg:order-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image
                        src="/footer/product/lead/Lead_Database.png"
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