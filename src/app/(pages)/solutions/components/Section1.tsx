"use client"
import { motion } from "framer-motion"
import { ChartColumnBigIcon, Inbox, UserSearch, Wand2 } from "lucide-react"

const section1Data = [
    {
        icon: UserSearch,
        title: "Smart Prospecting",
        description: "AI filters that identify high-intent leads based on real-time professional signals."
    },
    {
        icon: Inbox,
        title: "Unified Inbox",
        description: "Manage every LinkedIn conversation across multiple accounts in one central view."
    },
    {
        icon: Wand2,
        title: "Campaign Builder",
        description: "Drag-and-drop workflow sequences with intelligent branching logic and delays."
    },
    {
        icon: ChartColumnBigIcon,
        title: "Campaign Analytics",
        description: "Deep-dive metrics on conversion rates, engagement, and team performance."
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

export default function Section1() {
    return (
        <section className="bg-[#fafcf7] overflow-hidden">
            <div className="w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-y-10 lg:gap-y-15 bg-white border border-gray-100/80 rounded-b-3xl max-w-7xl mx-auto py-12 lg:py-16 px-6 sm:px-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl w-full"
                    >
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black leading-tight tracking-tight">Why NetworkUp.io?</h1>
                        <p className="text-gray-500/90 text-md sm:text-xl font-medium leading-relaxed mt-4 max-w-3xl mx-auto">Everything you need to discover, engage, and convert — in one simple platform</p>
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
                                <div className="p-2.5 rounded-xl flex items-center justify-center">
                                    <data.icon size={20} className="stroke-[#356221]" />
                                </div>
                                <h3 className="text-lg text-black font-bold text-left">{data.title}</h3>
                                <p className="text-sm text-gray-500/80 text-left leading-relaxed w-[200px]">{data.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}