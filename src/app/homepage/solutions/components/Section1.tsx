"use client"
import { motion } from "framer-motion"
import { ChartColumnBigIcon, Inbox, Puzzle, Search } from "lucide-react"

const section1Data = [
    {
        icon: Search,
        title: "Smart Prospecting",
        description: "Find high-intent leads using advanced filters, keywords, company insights, and more."
    },
    {
        icon: Puzzle,
        title: "Campaign Builder",
        description: "Create personalized multi-step sequences with delays, conditions, and dynamic variables."
    },
    {
        icon: Inbox,
        title: "Unified Inbox",
        description: "Manage all LinkedIn conversations in one place with notes, labels, and team collaboration."
    },
    {
        icon: ChartColumnBigIcon,
        title: "Analytics & Reports",
        description: "Track performance, reply rates, acceptance rates, and meetings with powerful dashboards."
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
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

export default function Section1() {
    return (
        <section className="bg-[#fafcf7] overflow-hidden mb-10">
            <div className="w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-y-10 lg:gap-y-15 bg-white border border-gray-100/80 rounded-b-3xl max-w-7xl mx-auto py-12 lg:py-16 px-6 sm:px-10 shadow-sm">
                    {/* Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl w-full"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">Why NetworkUp.io?</h1>
                        <p className="text-gray-500/90 text-base sm:text-lg font-medium leading-relaxed mt-4 max-w-2xl mx-auto">Everything you need to discover, engage, and convert — in one simple platform</p>
                    </motion.div>
                    
                    {/* Grid of features */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
                    >
                        {section1Data.map((data, index) => (
                            <motion.div 
                                key={index}
                                variants={cardVariants}
                                className="p-6 bg-gray-50/50 flex flex-col items-start gap-y-4 border border-transparent hover:border-lime-200/50 hover:bg-white rounded-2xl hover:shadow-md hover:scale-102 transition-all duration-300"
                            >
                                <div className="p-2.5 rounded-xl bg-[#EAFCEB] flex items-center justify-center">
                                    <data.icon size={20} className="stroke-[#71EB34]" />
                                </div>
                                <h3 className="text-lg text-black font-bold text-left">{data.title}</h3>
                                <p className="text-sm text-gray-500/80 text-left leading-relaxed">{data.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}