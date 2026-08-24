"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Documentation({
    items,
}: {
    items: Array<{ question: string; answer: string }>
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#defad0]/20 py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": items.map(doc => ({
                            "@type": "Question",
                            "name": doc.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": doc.answer.replace(/<[^>]*>/g, '') // Strip HTML tags for structured text schema
                            }
                        }))
                    })
                }}
            />
            <div className="mx-auto max-w-4xl">

                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.h5
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[#06402B]/80 uppercase tracking-wide text-sm sm:text-base font-medium my-2"
                    >
                        Documentation & Support
                    </motion.h5>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-black tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold px-2"
                    >
                        Technical Clarity <span className="text-[#a3e635]">Demystified</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[#06402B]/80 tracking-normal text-base sm:text-lg md:text-xl font-normal my-4 max-w-5xl px-4 leading-relaxed"
                    >
                        Everything you need to know about the most advanced AI-powered LinkedIn acceleration platform
                    </motion.p>

                    {/* Accordion Wrapper Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delayChildren: 0.3 }}
                        className="mt-10 w-full w-2xl md:w-3xl lg:w-4xl xl:w-5xl 2xl:w-7xl space-y-4 flex flex-col items-center justify-center "
                    >
                        {items.map((doc, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`w-full bg-white flex flex-col items-start justify-start border-1 hover:scale-101 transition-colors duration-300 ${isOpen ? 'border-[#faf5dc]' : 'border-none'} rounded-3xl p-4 sm:p-5`}
                                >
                                    {/* Made entire row clickable for better mobile UX */}
                                    <div
                                        className="flex flex-row justify-between items-center w-full cursor-pointer group"
                                        onClick={() => toggleOpen(index)}
                                    >
                                        <div className="flex flex-row items-center gap-x-3">
                                            <button
                                                type="button"
                                                className={`text-xl sm:text-2xl ${isOpen ? 'text-[#f5f5dc]' : 'text-[#71EB34]'} font-bold rounded-full ${isOpen ? 'bg-[#71EB34]' : 'bg-[#f5f5dc]/80'} transition-colors duration-200 group-hover:text-[#004900]/60 flex items-center justify-center shrink-0 w-8 h-8`}
                                                aria-expanded={isOpen}
                                            >
                                                {isOpen ? '−' : '＋'}
                                            </button>
                                            <h3 className="text-base sm:text-xl font-bold text-black text-left pr-4 ">
                                                {doc.question}
                                            </h3>
                                        </div>
                                        <button
                                            type="button"
                                            className={`text-sm ${isOpen ? 'text-[#a3e635]' : 'text-gray-700/50'} transform transition-colors duration-200 group-hover:text-[#004900]/60 flex items-center justify-center shrink-0 w-8 h-8`}
                                            aria-expanded={isOpen}
                                        >
                                            <ChevronDown size={25} className={`${isOpen ? 'text-[#a3e635]' : 'text-gray-700/50'}`} />
                                        </button>
                                    </div>

                                    {/* Content Area - Kept in the DOM for Generative Engine search crawlers (GEO), hidden via CSS height transitions */}
                                    <div
                                        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen
                                            ? "max-h-[1000px] opacity-100 mt-3 pt-3"
                                            : "max-h-0 opacity-0 pointer-events-none"
                                            }`}
                                    >
                                        <p
                                            className="pl-10 w-full text-left text-md md:text-lg text-black leading-relaxed tracking-[0.04rem]"
                                            dangerouslySetInnerHTML={{ __html: doc.answer }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
