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
        <section className="w-full bg-[#fafcf7] py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "FAQPage",
                                "mainEntity": items.map(doc => ({
                                    "@type": "Question",
                                    "name": doc.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": doc.answer.replace(/<[^>]*>/g, '') // Strip HTML tags for structured text schema
                                    }
                                }))
                            },
                            {
                                "@type": "HowTo",
                                "name": "How to Safely Warm Up a LinkedIn Account with NetworkUp",
                                "description": "Step-by-step guide to safely warming up automated LinkedIn profiles using proxy location pinning and activity throttling.",
                                "step": [
                                    {
                                        "@type": "HowToStep",
                                        "name": "Connect Profile",
                                        "text": "Link your professional LinkedIn account with the NetworkUp platform session manager."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "name": "Pin Proxy Location",
                                        "text": "Configure geographic boundaries to lock your automation session to a static residential proxy."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "name": "Initiate Warm-up Schedule",
                                        "text": "Start the automated activity schedule at low volumes of 5-10 actions per day."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "name": "Graduate to Campaigns",
                                        "text": "Run full automated campaign outreach workflows capped strictly at the 50 actions per day safety limit."
                                    }
                                ]
                            },
                            {
                                "@type": "DefinedTermSet",
                                "@id": "https://networkup.io/terms-glossary",
                                "name": "NetworkUp Core Technical Terminology Glossary",
                                "hasDefinedTerm": [
                                    {
                                        "@type": "DefinedTerm",
                                        "name": "Proxy Pinning",
                                        "description": "Technique that binds an automation session to a stable, unchanging residential proxy matching the account holder's home coordinates."
                                    },
                                    {
                                        "@type": "DefinedTerm",
                                        "name": "Rate-Limit Throttling",
                                        "description": "The practice of limiting connection requests and messages to strict maximum safety ceilings (100 connection requests per week, 50 actions per day)."
                                    },
                                    {
                                        "@type": "DefinedTerm",
                                        "name": "Local Browser Emulation",
                                        "description": "Running automated interactions inside localized sessions with natural delays, coordinate scrolling, and click variations to mimic real human usage."
                                    }
                                ]
                            }
                        ]
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
                        className="text-[#304f00] uppercase tracking-wide text-sm sm:text-base font-medium my-2"
                    >
                        Documentation & Support
                    </motion.h5>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[#191c1e] tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold px-2"
                    >
                        Technical Clarity <span className="text-[#78e02b]">Demystified</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[#263b00] tracking-normal text-base sm:text-lg md:text-xl font-normal my-4 px-4 leading-relaxed"
                    >
                        Everything you need to know about the most advanced AI-powered LinkedIn acceleration <br />platform
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
                                    className={`w-full bg-white flex flex-col items-start justify-start border-1 hover:scale-101 transition-colors duration-300 ${isOpen ? 'border-[#a3e635]/40' : 'border-none'} rounded-3xl p-4 sm:p-5`}
                                >
                                    {/* Made entire row clickable for better mobile UX */}
                                    <div
                                        className="flex flex-row justify-between items-center w-full cursor-pointer group"
                                        onClick={() => toggleOpen(index)}
                                    >
                                        <div className="flex flex-row items-center gap-x-3">
                                            <button
                                                type="button"
                                                className={`text-xl sm:text-2xl ${isOpen ? 'text-[#f7fee7]' : 'text-[#a3e635]'} font-bold rounded-full ${isOpen ? 'bg-[#a3e635]' : 'bg-[#f7fee7]'} transition-colors duration-200 flex items-center justify-center shrink-0 w-8 h-8`}
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
                                            className={`text-sm ${isOpen ? 'text-[#a3e635]' : 'text-[#9ca3af]'} transform transition-colors duration-200 group-hover:text-[#004900]/60 flex items-center justify-center shrink-0 w-8 h-8`}
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
                                            className="pl-10 w-full text-left text-md md:text-lg text-[#363636] leading-relaxed tracking-[0.04rem]"
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
