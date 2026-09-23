"use client"
import { motion } from "framer-motion"
import { Mail, Search, User2 } from "lucide-react"
import SplitFeatureSection from "./SplitFeatureSection"

const section3Data = [
    "Advanced candidate search and filters",
    "Personalized outreach with AI suggestions",
    "Automated follow-up sequences",
    "Track candidate engagement",
    "Organize talent pipelines"
]

export default function Section3() {
    const visualContent = (
        <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full rounded-xl bg-white border border-[#e5e7eb] p-6 shadow-xl flex flex-col items-start"
        >
            <div className="flex flex-row items-center justify-between w-full pb-4 border-b border-[#e5e7eb] mb-4">
                <h4 className="text-lg font-bold text-[#111827]">Candidate Search</h4>
                <span className="text-xs font-bold text-[#111827] bg-[#f3f4f6] px-2 py-1 flex items-center gap-x-1 rounded">
                    Product Designer <Search size={14} className="text-[#000000]" />
                </span>
            </div>

            {/* Step 1 */}
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-row items-center justify-between w-full p-4 rounded-xl border border-gray-100 bg-gray-50/50 mb-3"
            >
                <div className="flex items-center gap-x-3 flex-1">
                    <div className="flex items-center justify-center bg-[#EAFCEB] rounded-full w-10 h-10 shrink-0">
                        <User2 size={20} className="text-[#71EB34]" />
                    </div>
                    <div className="flex flex-col gap-y-1.5 flex-1">
                        <div className="text-[#111827] font-bold text-sm">Sophia Carter</div>
                        <div className="text-[#6b7280] text-xs">Product Designer at Figma</div>
                    </div>
                </div>
                <button className="text-xs px-3 py-1.5 font-bold text-[#111827] rounded-md bg-gradient-to-b from-[#c8ffa0] to-[#7ceb2a] transition-colors">Add</button>
            </motion.div>

            {/* Step 2 */}
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-row items-center justify-between w-full p-4 rounded-xl border border-gray-100 bg-gray-50/50 mb-3"
            >
                <div className="flex items-center gap-x-3 flex-1">
                    <div className="flex items-center justify-center bg-blue-50 rounded-full w-10 h-10 shrink-0">
                        <Mail size={20} className="text-blue-500" />
                    </div>
                    <div className="flex flex-col gap-y-1.5 flex-1">
                        <div className="text-black font-bold text-sm">Liam Johnson</div>
                        <div className="text-gray-400 text-xs">Senior Product Designer at Linear</div>
                    </div>
                </div>
                <button className="text-xs px-3 py-1.5 font-bold text-[#111827] rounded-md bg-gradient-to-b from-[#c8ffa0] to-[#7ceb2a] transition-colors">Add</button>
            </motion.div>
        </motion.div>
    )

    return (
        <SplitFeatureSection
            badge="Recruiters"
            title="Source Better. Hire Faster."
            description="Find, engage, and nurture top talent on LinkedIn with automated outreach that feels personal. Spend less time searching and more time hiring."
            features={section3Data}
            visualContent={visualContent}
            visualPosition="left"
            sectionBg="bg-[#fafcf7] py-10"
            containerClass="w-full max-w-7xl bg-[#f9fafb] rounded-xl mx-auto py-10 lg:py-20 px-6 sm:px-10 border border-gray-100 shadow-sm"
        />
    )
}