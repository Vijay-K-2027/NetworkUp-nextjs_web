"use client"
import { motion } from "framer-motion"
import { NotebookPen, Rocket, Search } from "lucide-react"
import SplitFeatureSection from "../SplitFeatureSection"
import Image from "next/image"

const section3Data = [
    "Easy-to-use interface",
    "Personalized outreach with AI suggestions",
    "Automated follow-up sequences",
    "Track candidate engagement",
    "Organize talent pipelines"
]

export default function Part2() {
    const visualContent = (
        <div className="w-full flex flex-row items-center justify-center py-10 bg-gray-50 rounded-2xl">
            <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center gap-y-2"
            >
                <Image
                    src="/solution/Search.png"
                    alt="Find Leads"
                    width={50}
                    height={50}
                    className="rounded-lg object-cover"
                />
                <h1 className="text-xs font-bold text-black">Find Leads</h1>
            </motion.div>

            <motion.hr
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center gap-y-2 w-[30px] border-gray-300/80 mx-4"
            />

            <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center gap-y-2"
            >
                <Image
                    src="/solution/Notes.png"
                    alt="Add to List"
                    width={50}
                    height={50}
                    className="rounded-lg object-cover"
                />
                <h1 className="text-xs font-bold text-black">Add to List</h1>
            </motion.div>

            <motion.hr
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center gap-y-2 w-[30px] border-gray-300/80 mx-4"
            />

            <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center gap-y-2"
            >
                <Image
                    src="/solution/Rocket.png"
                    alt="Send Outreach"
                    width={50}
                    height={50}
                    className="rounded-lg object-cover"
                />
                <h1 className="text-xs font-bold text-black">Send Outreach</h1>
            </motion.div>
        </div>
    )

    return (
        <SplitFeatureSection
            badge="Startups"
            title="Build Relationships from Day One"
            description="Startups need growth, not complexity. NetworkUp.io gives you everything you need to build your network, attract investors, partners, and customers."
            features={section3Data}
            visualContent={visualContent}
            visualPosition="left"
            sectionBg="bg-white py-10"
            containerClass="w-full max-w-7xl bg-white rounded-xl mx-auto py-2 lg:py-4 px-6 sm:px-10"
        />
    )
}