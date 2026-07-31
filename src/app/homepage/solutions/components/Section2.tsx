"use client"
import { motion } from "framer-motion"
import { Mail, User2 } from "lucide-react"
import SplitFeatureSection from "./SplitFeatureSection"

const section2Data = [
    "Find decision-makers and ideal prospects",
    "Automate connection requests and follow-ups",
    "Track replies and set reminders",
    "Measure campaign performance and ROI",
    "Sync leads with your CRM"
]

export default function Section2() {
    const visualContent = (
        <motion.div 
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full rounded-2xl bg-white border border-gray-100 p-6 shadow-xl flex flex-col items-start"
        >
            <div className="flex flex-row items-center justify-between w-full pb-4 border-b border-gray-100 mb-4">
                <h4 className="text-lg font-bold text-black">Sales Outreach Campaign</h4>
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">Day 1</span>
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
                        <div className="h-2.5 w-24 bg-gray-200 rounded-full"></div>
                        <div className="h-1.5 w-16 bg-gray-100 rounded-full"></div>
                    </div>
                </div>
                <div className="text-xs font-semibold text-gray-400">Day 1</div>
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
                        <div className="h-2.5 w-32 bg-gray-200 rounded-full"></div>
                        <div className="h-1.5 w-24 bg-gray-100 rounded-full"></div>
                    </div>
                </div>
                <div className="text-xs font-semibold text-gray-400">Day 2</div>
            </motion.div>
            
            {/* Message Preview */}
            <motion.div 
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="w-full p-4 rounded-xl border border-[#71EB34]/20 bg-lime-50/30 text-sm text-gray-700 leading-relaxed italic"
            >
                "Hi <span className="text-[#71EB34] font-semibold">{"{{first_name}}"}</span>, I noticed your work at <span className="text-[#71EB34] font-semibold">{"{{company}}"}</span>. We help <span className="text-[#71EB34] font-semibold">{"{{industry}}"}</span> teams like yours improve <span className="text-[#71EB34] font-semibold">{"{{outcome}}"}</span>."
            </motion.div>
        </motion.div>
    )

    return (
        <SplitFeatureSection
            badge="Sales Teams"
            title="Close More Deals, Faster"
            description="Automate your outreach and focus on what matters most — building relationships and closing deals. NetworkUp.io helps sales teams fill their pipeline with qualified prospects and book more meetings."
            features={section2Data}
            visualContent={visualContent}
            visualPosition="right"
        />
    )
}