"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export const timelineData = [
    {
        step: 1,
        title: "Deep Market Discovery",
        description: "We start by immersing ourselves in your challenges, analyzing industry trends to identify high-impact opportunities that others overlook.",
        badgeStyle: "bg-[#0B0D0B] text-[#71EB34] border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
    },
    {
        step: 2,
        title: "User-Centric Architecture",
        description: "Our designers craft intuitive flows and high-fidelity wireframes, ensuring every feature solves a real problem with zero friction.",
        badgeStyle: "bg-white text-black border-[#71EB34] border-3 shadow-[0_8px_30px_rgb(113,235,52,0.1)]"
    },
    {
        step: 3,
        title: "Agile AI Integration",
        description: "We leverage cutting-edge LLMs and proprietary datasets to build custom AI agents that understand your specific industry nuances.",
        badgeStyle: "bg-[#71EB34] text-black border-transparent shadow-[0_8px_30px_rgb(113,235,52,0.15)]"
    },
    {
        step: 4,
        title: "Rigorous Stress Testing",
        description: "Every line of code and AI prompt is put through its paces, simulating real-world scenarios to ensure unmatched reliability.",
        badgeStyle: "bg-white text-black border-black border-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    }
]

export default function Section4() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    return (
        <section className="bg-[#fafcf7] py-20 px-6 lg:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
                {/* Pill tag */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center justify-center px-4 py-1.5 border border-[#71EB34]/20 bg-[#71EB34]/5 rounded-full mb-6"
                >
                    <span className="text-[#71EB34] uppercase text-xs sm:text-sm font-extrabold tracking-wider">
                        OUR METHODOLOGY
                    </span>
                </motion.div>
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-black text-3xl sm:text-5xl font-extrabold tracking-tight text-center mb-16 lg:mb-24"
                >
                    The engineering of growth
                </motion.h2>

                {/* Timeline container */}
                <div className="relative w-full max-w-5xl">
                    {/* Vertical Line */}
                    <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="w-full h-full bg-gradient-to-b from-[#71EB34] via-[#71EB34]/80 to-gray-200/50 origin-top"
                        />
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-12 lg:space-y-16">
                        {timelineData.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={item.step} className="relative flex flex-col lg:flex-row items-start lg:items-center w-full">

                                    {/* Desktop Left Side Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.15 }}
                                        className="hidden lg:block w-[calc(50%-2rem)] text-right lg:pr-12"
                                    >
                                        {isLeft && (
                                            <div className="flex flex-col items-end">
                                                <h3 className="text-xl sm:text-2xl font-bold text-black">{item.title}</h3>
                                                <p className={`text-gray-500 text-sm sm:text-base mt-2 leading-relaxed max-w-md transition-transform duration-200 ${hoveredStep === item.step ? '-translate-y-1' : ''}`}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Number Badge (Center) */}
                                    <motion.div
                                        initial={{ scale: 0.6, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
                                        className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center p-1 bg-white rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                                        onMouseEnter={() => setHoveredStep(item.step)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                    >
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-extrabold text-lg shadow-md border ${item.badgeStyle}`}>
                                            {item.step}
                                        </div>
                                    </motion.div>

                                    {/* Mobile Content & Desktop Right Side Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.15 }}
                                        className="pl-16 lg:pl-24 w-full lg:w-[calc(50%-2rem)] text-left"
                                    >
                                        {/* On desktop, only render if it's NOT isLeft (i.e. right side). On mobile, always render. */}
                                        <div className={`${isLeft ? 'lg:hidden' : 'block'} flex flex-col items-start`}>
                                            <h3 className="text-xl sm:text-2xl font-bold text-black">{item.title}</h3>
                                            <p className={`text-gray-500 text-sm sm:text-base mt-2 leading-relaxed max-w-md transition-transform duration-200 ${hoveredStep === item.step ? '-translate-y-1' : ''}`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
