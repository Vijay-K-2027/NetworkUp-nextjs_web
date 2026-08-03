"use client"
import { motion } from "framer-motion";
import { UserCog, Fingerprint, Eye, Puzzle, ChartColumnBig } from "lucide-react";

const section3Data = [
    {
        icon: Eye,
        subData: {
            id1: "Radical Transparency",
            id2: "Clear reasoning for every AI action."
        }
    },
    {
        icon: Puzzle,
        subData: {
            id1: "Simplicity by Design",
            id2: "Complex tech, intuitive experience."
        }
    },
    {
        icon: ChartColumnBig,
        subData: {
            id1: "Measurable Impact",
            id2: "Data that drives business growth."
        }
    }
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
}

export default function Section3() {
    return (
        <section className="bg-[#fafcf7] overflow-hidden">
            <div className="w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-y-2 mb-5"
                >
                    <h1 className="text-sm font-bold text-center text-[#71EB34] uppercase bg-[#EAFCEB]/60 rounded-full px-2 py-1">Our Core Philosophy</h1>
                    <h2 className="text-4xl text-black font-extrabold tracking-tight text-center">Principles that guide us</h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-stretch justify-center my-10 lg:my-15 gap-8 px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:max-w-[55%] p-6 sm:p-8 bg-white border border-gray-100 rounded-2xl flex flex-col items-start gap-y-4 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="w-15 h-15 bg-[#EAFCEB] rounded-xl flex items-center justify-center shrink-0">
                            <UserCog size={25} className="stroke-[#71EB34]" />
                        </div>
                        <h1 className="text-3xl text-black font-bold text-left">Human-First Intelligence</h1>
                        <h2 className="text-base sm:text-lg text-gray-500 max-w-[590px] w-full text-left leading-relaxed">We don't just automate; we amplify. Our tools are designed to spark genuine human connections, ensuring your outreach never feels like a machine. We believe technology should serve the user, not the other way around.</h2>
                    </motion.div>
 
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:max-w-[40%] p-6 sm:p-8 bg-white border border-gray-100 rounded-2xl flex flex-col items-start gap-y-4 hover:shadow-md hover:scale-102 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="w-15 h-15 bg-[#EAFCEB] rounded-xl p-2 flex items-center justify-center shrink-0">
                            <Fingerprint size={25} className="stroke-[#71EB34]" />
                        </div>
                        <h1 className="text-2xl text-black font-bold text-left">Privacy-First Architecture</h1>
                        <h2 className="text-base sm:text-lg text-gray-500 text-left leading-relaxed">Your data and LinkedIn reputation are sacred. We build with enterprise-grade encryption and mimic human behavior patterns to keep your account safe and your trust intact. Security is never an afterthought.</h2>
                    </motion.div>
                </div>
 
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-6 px-4 mb-16"
                >
                    {section3Data.map((data, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            className="w-full md:max-w-[30%] p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-row items-center gap-x-3">
                                <div className="w-12 h-12 bg-[#EAFCEB] rounded-xl p-2 flex items-center justify-center shrink-0">
                                    <data.icon size={20} className="stroke-[#71EB34]" />
                                </div>
                                <span className="flex flex-col items-start text-left">
                                    <h1 className="text-lg text-black font-bold leading-tight">{data.subData.id1}</h1>
                                    <h2 className="text-xs text-gray-500 mt-1 leading-snug">{data.subData.id2}</h2>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}