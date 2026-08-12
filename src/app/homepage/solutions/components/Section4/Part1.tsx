"use client"
import { motion } from "framer-motion"
import SplitFeatureSection from "../SplitFeatureSection"

const Part1Data = [
    "Multi-client workspace",
    "Pre-built templates and campaign cloning",
    "Team roles and permissions",
    "Track-label reports (coming soon)",
    "Export leads and performance data"
]

const part1Column = [
    {
        title: "Clients",
        no: "18"
    },
    {
        title: "Active",
        no: "42"
    },
    {
        title: "Replies",
        no: "1,256"
    },
    {
        title: "Meetings",
        no: "312"
    }
]

export default function Part1() {
    const visualContent = (
        <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full rounded-2xl bg-white border border-gray-100 p-6 shadow-xl flex flex-col items-start"
        >
            <div className="flex flex-row items-center justify-between w-full pb-4 border-b border-gray-100 mb-4">
                <h4 className="text-lg font-bold text-black">Agency Dashboard</h4>
            </div>

            <div className="flex flex-row flex-wrap items-center gap-1 py-2 px-2">
                {part1Column.map((data, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 + index * 0.25 }}
                        className="flex-none"
                    >
                        <div className="flex flex-col items-center w-[100px] sm:w-[120px] bg-gray-100/80 rounded-md px-4 py-2 hover:-translate-y-1 transition-all duration-300 hover:bg-gray-200">
                            <h1 className="text-gray-500 text-xs sm:text-sm text-center">{data.title}</h1>
                            <h2 className="font-bold text-black text-lg sm:text-xl text-center">{data.no}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-row items-center justify-between w-full px-4 mt-4 rounded-xl bg-gray-50/50 py-2"
            >
                <h1 className="font-bold text-black text-sm text-left">Client Name</h1>
                <div className="flex flex-row items-center gap-x-5">
                    <h2 className="font-bold text-black text-sm text-right">Acceptance</h2>
                    <h3 className="font-bold text-black text-sm text-right">Replies</h3>
                </div>
            </motion.div>

            <motion.hr
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="border border-gray-100 w-full my-3"
            />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + part1Column.length * 0.25 }}
                className="flex flex-row items-center justify-between w-full px-4 rounded-xl bg-gray-50/50 py-2"
            >
                <h1 className="text-black/70 text-sm text-left">Client A</h1>
                <div className="flex flex-row items-center gap-x-12">
                    <h2 className="text-[#71EB34] text-sm text-right font-semibold">32.8%</h2>
                    <h3 className="text-black/70 text-sm text-right font-semibold">120</h3>
                </div>
            </motion.div>
        </motion.div>
    )

    return (
        <SplitFeatureSection
            badge="Agencies"
            title="Manage More Clients, Effortlessly"
            description="Run multiple outreach campaigns for your clients from a single workspace. Deliver better results with clear reporting and seamless collaboration."
            features={Part1Data}
            visualContent={visualContent}
            visualPosition="left"
            sectionBg="bg-white py-10 rounded-t-xl"
            containerClass="max-w-7xl mx-auto w-full"
        />
    )
}