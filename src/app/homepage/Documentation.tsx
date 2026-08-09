"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Documentation({
    document,
}: {
    document: Array<{ question: string; answer: string }>
}) {
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
                        className="mt-10 w-full w-2xl md:w-3xl lg:w-4xl xl:w-5xl 2xl:w-7xl space-y-4 flex flex-col items-center justify-center "
                    >
                        {document.map((doc, index) => {
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
                                            <div className="text-base sm:text-xl font-bold text-black text-left pr-4 ">
                                                {doc.question}
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className={`text-sm ${isOpen ? 'text-[#a3e635]' : 'text-gray-700/50'} transform scale-x-200 transition-colors duration-200 group-hover:text-[#004900]/60 flex items-center justify-center shrink-0 w-8 h-8`}
                                            aria-expanded={isOpen}
                                        >
                                            V
                                        </button>
                                    </div>

                                    {/* Content Area */}
                                    {isOpen && (
                                        <div
                                            className="pl-10 w-full text-left text-md md:text-lg text-black/70 pt-3 border-t border-gray-300/50 mt-3 leading-relaxed tracking-[0.04rem]"
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
