"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface DocItem {
    question: string;
    answer: string;
}

export default function Documentation({
    heading,
    items,
    defaultOpenIndex = 0,
}: {
    heading?: string;
    items: DocItem[];
    defaultOpenIndex?: number | null;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
            {/* Structured Data for SEO / GEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": items.map((doc) => ({
                            "@type": "Question",
                            "name": doc.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": doc.answer.replace(/<[^>]*>/g, ""),
                            },
                        })),
                    }),
                }}
            />

            {/* Topic Section Heading */}
            {heading && (
                <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] tracking-tight">
                        {heading}
                    </h2>
                </div>
            )}

            {/* Accordion List */}
            <div className="space-y-4">
                {items.map((doc, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`w-full bg-white rounded-2xl sm:rounded-3xl transition-all duration-200 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${
                                isOpen
                                    ? "border border-[#8bfa00] shadow-[0_4px_20px_rgba(139,250,0,0.08)]"
                                    : "border border-gray-200/80 hover:border-gray-300 hover:shadow-sm"
                            }`}
                            onClick={() => toggleOpen(index)}
                        >
                            {/* Card Header / Question Row */}
                            <div className="flex items-center justify-between p-5 sm:p-6 select-none">
                                <div className="flex items-center gap-3.5 sm:gap-4 pr-3">
                                    {/* Circle Icon Badge */}
                                    <div
                                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shrink-0 transition-colors duration-200 ${
                                            isOpen
                                                ? "bg-[#84cc16] text-white"
                                                : "bg-[#edffd5] text-[#84cc16]"
                                        }`}
                                    >
                                        <span className="leading-none select-none">
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </div>

                                    {/* Question Title */}
                                    <h3 className="text-base sm:text-lg font-bold text-[#191c1e] text-left leading-snug">
                                        {doc.question}
                                    </h3>
                                </div>

                                {/* Right Chevron Icon */}
                                <div className="shrink-0 pl-2">
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-200 ${
                                            isOpen
                                                ? "text-[#84cc16] rotate-180"
                                                : "text-gray-400"
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Collapsible Answer Body */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 sm:px-6 pb-6 pt-0">
                                            <p
                                                className="text-xs sm:text-sm md:text-base text-[#4b5563] font-normal leading-relaxed pl-10 sm:pl-12"
                                                dangerouslySetInnerHTML={{ __html: doc.answer }}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
