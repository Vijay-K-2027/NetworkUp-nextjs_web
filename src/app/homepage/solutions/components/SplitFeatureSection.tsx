"use client"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import React from "react"

interface SplitFeatureSectionProps {
    badge: string
    title: string
    description: string
    features: string[]
    visualContent: React.ReactNode
    visualPosition?: "left" | "right"
    sectionBg?: string      // e.g. "bg-[#fafcf7] py-20 px-6 lg:px-8 overflow-hidden"
    containerClass?: string // e.g. "max-w-7xl mx-auto w-full"
}

const listContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.25
        }
    }
}

const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
}

export default function SplitFeatureSection({
    badge,
    title,
    description,
    features,
    visualContent,
    visualPosition = "right",
    sectionBg = "bg-[#fafcf7] py-20 px-6 lg:px-8 overflow-hidden",
    containerClass = "max-w-7xl mx-auto w-full"
}: SplitFeatureSectionProps) {
    const textColumn = (
        <div className="flex flex-1 flex-col items-start gap-y-4 ml-5">
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xs font-extrabold tracking-wider px-3 py-1 bg-[#EAFCEB] text-[#71EB34] uppercase rounded-full"
            >
                {badge}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-black font-extrabold tracking-tight leading-tight mt-1"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-500/70 leading-relaxed max-w-[600px] text-left"
            >
                {description}
            </motion.p>

            <motion.div
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-start gap-y-1 mt-2"
            >
                {features.map((data, index) => (
                    <motion.div
                        variants={listItemVariants}
                        key={index}
                        className="flex flex-row items-center gap-x-3 py-1"
                    >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EAFCEB] flex items-center justify-center">
                            <Check size={12} className="stroke-[#71EB34] stroke-[3]" />
                        </div>
                        <span className="text-base text-gray-700 font-medium">{data}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )

    const visualColumn = (
        <motion.div
            initial={{ opacity: 0, x: visualPosition === "right" ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-2xl bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-100 flex items-center justify-center shadow-inner"
        >
            {visualContent}
        </motion.div>
    )

    return (
        <section className={sectionBg}>
            <div className={containerClass}>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {visualPosition === "left" ? (
                        <>
                            {visualColumn}
                            {textColumn}
                        </>
                    ) : (
                        <>
                            {textColumn}
                            {visualColumn}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
