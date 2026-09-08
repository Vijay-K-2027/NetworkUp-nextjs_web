"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Section5() {
    const steps = [
        {
            number: "01",
            img: "/footer/product/convobox/PieCharty.png",
            title: "Understand",
            description:
                "The AI reviews your available conversation history, prior outreach, and prospect metadata to build context.",
        },
        {
            number: "02",
            img: "/footer/product/convobox/Intelluct.png",
            title: "Generate",
            description:
                "A relevant, natural-sounding follow-up message is drafted instantly, avoiding generic template language.",
        },
        {
            number: "03",
            img: "/footer/product/convobox/Notes.png",
            title: "Review",
            description:
                "You remain in the driver's seat. Review the drafted text, make edits, or use one-click tools to adjust tone and length.",
        },
        {
            number: "04",
            img: "/footer/product/convobox/PuzzleGo.png",
            title: "Send or Schedule",
            description:
                "Dispatch the message immediately or schedule it for the optimal time using the pacing interface.",
        },
    ];

    return (
        <section className="w-[96%] mx-auto bg-[#fffff] py-8 sm:py-10 px-4 sm:px-6 lg:px-10 border-t border-[#C0CAAE]">
            <div className="w-full max-w-9xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 tracking-tight"
                    >
                        A simple, powerful workflow.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed"
                    >
                        Generate highly targeted follow-ups in seconds, without losing your personal touch.
                    </motion.p>
                </div>

                {/* 4-Step Workflow Grid */}
                <div className="mt-16 sm:mt-20 relative">

                    {/* Background Connecting Line on Desktop */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ originX: 0 }}
                        className="hidden lg:block absolute top-[28px] left-[4%] right-[4%] h-[1.5px] bg-gray-200/90 z-0"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 xl:gap-10 relative z-10 pl-5">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.09 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="flex flex-col items-start text-left group"
                            >
                                {/* Number Watermark Header */}
                                <div className="inline-block bg-[#fafbf8] pr-4">
                                    <span className="text-5xl sm:text-6xl font-light text-gray-300 tracking-tight select-none">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Icon Image - Full contain, no padding */}
                                <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                                    <Image
                                        src={step.img}
                                        alt={step.title}
                                        width={70}
                                        height={70}
                                        className="w-full h-full object-contain rounded-2xl"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 ">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-md sm:text-lg text-black/70 font-normal leading-relaxed mt-2.5 w-full max-w-[300px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
