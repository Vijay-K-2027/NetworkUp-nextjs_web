"use client"
import { motion } from "framer-motion"
import { CheckCircle2, Sparkles, X } from "lucide-react"
import { TbUserOff } from "react-icons/tb"

const sectionLeft = [
    {
        icon: TbUserOff,
        data: "WITHOUT NETWORKUP AI"
    },
    {
        icon: X,
        data: "Writing every message manually"
    },
    {
        icon: X,
        data: "Guessing which leads to contact"
    },
    {
        icon: X,
        data: "No real-time optimization"
    },
    {
        icon: X,
        data: "Fragmented workflow tools"
    },
    {
        icon: X,
        data: "Static 'hope-for-best' timing"
    }
]

const sectionRight = [
    {
        icon: Sparkles,
        data: "WITH NETWORKUP AI"
    },
    {
        icon: CheckCircle2,
        data: "Instant high-converting AI drafts"
    },
    {
        icon: CheckCircle2,
        data: "AI-driven lead prioritization"
    },
    {
        icon: CheckCircle2,
        data: "Autonomous campaign tuning"
    },
    {
        icon: CheckCircle2,
        data: "All-in-one AI workspace"
    },
    {
        icon: CheckCircle2,
        data: "Predictive active-time sending"
    }
]

const listContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
}

const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" as const }
    }
}

export default function Section4() {
    return (
        <section className="bg-gray-50 py-20 px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-y-12 lg:gap-y-16">

                {/* Title and Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center max-w-3xl"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black font-extrabold tracking-tight leading-tight">
                        Why upgrade to AI-Powered Outreach?
                    </h2>
                    <p className="text-md sm:text-lg lg:text-xl text-gray-500/90 font-medium mt-4">
                        The difference between a crowded inbox and a booked calendar.
                    </p>
                </motion.div>

                {/* Comparison Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full border border-gray-100 rounded-[32px] overflow-hidden shadow-xl bg-white">

                    {/* Left Column (Without NetworkUp AI) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start p-8 sm:p-12 bg-gray-50/50"
                    >
                        <motion.div
                            variants={listContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full flex flex-col"
                        >
                            {sectionLeft.map((left, index) => (
                                <motion.div
                                    variants={listItemVariants}
                                    key={index}
                                    className={`flex flex-row items-center gap-x-4 w-full mb-5 last:mb-0`}
                                >
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${index === 0 ? "transparent" : "bg-red-50"}`}>
                                        <left.icon size={16} className={index === 0 ? "text-gray-500" : "text-red-500"} />
                                    </div>
                                    <span className={`${index === 0 ? "text-gray-500 font-bold uppercase tracking-wider text-xs sm:text-sm" : "text-gray-700 font-medium text-sm sm:text-base"}`}>
                                        {left.data}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column (With NetworkUp AI) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start p-8 sm:p-12 bg-[#356221]/40 relative overflow-hidden"
                    >
                        {/* Subtle background glow */}
                        <div className="absolute -right-24 -bottom-24 w-48 h-48 rounded-full bg-[#71EB34]/10 blur-3xl"></div>

                        <motion.div
                            variants={listContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full flex flex-col"
                        >
                            {sectionRight.map((right, index) => (
                                <motion.div
                                    variants={listItemVariants}
                                    key={index}
                                    className={`flex flex-row items-center gap-x-4 w-full mb-5 last:mb-0`}
                                >
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center `}>
                                        <right.icon size={25} className="text-[#356221]" />
                                    </div>
                                    <span className={`${index === 0 ? "text-[#356221] font-bold uppercase tracking-wider text-xs sm:text-sm" : "text-black font-medium text-sm sm:text-base"}`}>
                                        {right.data}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>

            </div>
        </section>
    )
}