"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Removed the static 'isOpen' property since state should manage visibility dynamically
const documents = [
    {
        "question": "What is NetworkUp.io and how does it help grow my LinkedIn network?",
        "answer": "NetworkUp.io is an AI-powered LinkedIn growth platform that helps sales teams, recruiters, founders, and agencies automate outreach while maintaining personalized conversations. It helps you discover the right prospects, create smart campaigns, manage conversations, and convert connections into meaningful business oppurtunities. "
    },
    {
        "question": "How does AI improve my LinkedIn outreach campaigns?",
        "answer": "NetworkUp.io uses AI to analyze your campaigns, suggest better messaging stratagies, identify the best outreach timings, and recommend optimization oppurtunities. Our AI features help improve connection rates, response rates, and overall campaign performance.",
    },
    {
        "question": "Can I create automated LinkedIn campaigns with NetworkUp.io?",
        "answer": "Yes, NetworkUp.io allows you to build automated outreach sequences with personalized connection requests, follow-ups, and messaging workflows. You can create, monitor, and optimize campaigns while keeping every interaction personalized.",
    },
    {
        "question": "Does NetworkUp.io provide AI-generated messages and personalization?",
        "answer": "Yes. NetworkUp.io's AI assistant can generate personalized connection requests, follow-up messages, and outreach strategies based on your target audience, industry, and campaign goals. It helps you create human-like conversations at scale.",
    },
    {
        "question": "Can NetworkUp.io integrate with my existing sales tools?",
        "answer": "Yes, NetworkUp.io supports integrations with popular CRM and productivity platforms to help synchronize your leads, manage workflows, and connect your outreach activities with your existing sales ecosystem.",
    },
    {
        "question": "Is my LinkedIn account safe while using NetworkUp.io?",
        "answer": "Yes. NetworkUp.io is designed with account safety in mind. It uses smart automation limits, activity controls, and intelligent scheduling to create natural outreach patterns while helping protect your LinkedIn account.",
    }
];

export default function Documentation() {
    // Single state tracker holding the active index number
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#defad0]/20 py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="mx-auto max-w-4xl"> {/* Switched to max-w-4xl for comfortable reading lengths */}

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
                        // Fixed hardcoded w-[800px] to max-w-2xl and converted text-md to valid text-base/text-lg
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
                        className="mt-10 w-full w-2xl md:w-4xl lg:w-7xl space-y-4 flex flex-col items-center justify-center"
                    >
                        {documents.map((doc, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`w-full bg-gray-200/70 flex flex-col items-start justify-start border-2 transition-colors duration-300 ${isOpen ? 'border-[#004900]/50' : 'border-[#00cc00]/60'} rounded-md p-4 sm:p-5`}
                                >
                                    {/* Made entire row clickable for better mobile UX */}
                                    <div
                                        className="flex flex-row justify-between items-center w-full cursor-pointer group"
                                        onClick={() => toggleOpen(index)}
                                    >
                                        <div className="text-base sm:text-lg font-medium text-black text-left pr-4 tracking-tight">
                                            {doc.question}
                                        </div>
                                        <button
                                            type="button"
                                            className="text-xl sm:text-2xl text-[#a3e635] font-bold transition-colors duration-200 group-hover:text-[#004900]/60 flex items-center justify-center shrink-0 w-8 h-8"
                                            aria-expanded={isOpen}
                                        >
                                            {isOpen ? '×' : '+'}
                                        </button>
                                    </div>

                                    {/* Content Area */}
                                    {isOpen && (
                                        <div
                                            className="w-full text-left text-md md:text-lg text-black/70 pt-3 border-t border-gray-300/50 mt-3 leading-relaxed tracking-normal"
                                            dangerouslySetInnerHTML={{ __html: doc.answer }}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
