"use client"
import { motion } from "framer-motion"
import { Heart, ShieldCheck, User, Zap } from "lucide-react"

const section3Data = [
    {
        icon: User,
        title: "Customer First",
        description: "We build with empathy and focus on solving real problems for real people."
    },
    {
        icon: ShieldCheck,
        title: "Trust & Safety",
        description: "We priortize account safety, data security, and ethical automation."
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "We constantly explore, learn, and build to stay ahead of the curve."
    },
    {
        icon: Heart,
        title: "Simplicity",
        description: "Powerful doesn' have to be complicated. We keep things simple and intuitive."
    }
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
}

export default function Section3() {
    return (
        <section className="bg-[#fafcf7] overflow-hidden">
            <div className="w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-y-10 lg:gap-y-15 py-12 lg:py-16 px-6 sm:px-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-left w-full gap-y-3 flex flex-col"
                    >
                        <h1 className="uppercase text-md text-[#356221]/70 font-bold leading-wider tracking-wide">What Drives Us ———</h1>
                        <p className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold max-w-lg">Our values shape everything we do</p>
                    </motion.div>

                    {/* Grid of features */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
                    >
                        {section3Data.map((data, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="p-6 bg-gradient-to-b from-lime-700 to-black flex flex-col items-start gap-y-4 border border-transparent hover:border-lime-200/50 hover:bg-white rounded-2xl hover:shadow-md hover:scale-102 transition-all duration-300"
                            >
                                <div className="p-2 w-15 h-15 rounded-full bg-transparent flex items-center justify-center shadow-[0_0_10px_3px_#A3E635]">
                                    <data.icon size={30} className="stroke-lime-400" />
                                </div>
                                <h3 className="text-xl text-white font-bold text-left">{data.title}</h3>
                                <p className="text-lg text-white/60 text-left leading-relaxed tracking-tight">{data.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}