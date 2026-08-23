"use client"
import React from "react"
import { motion } from "framer-motion"
import { Check, Mail, CornerUpLeft, UserCheck, UsersIcon } from "lucide-react"
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
            className="w-full rounded-[24px] sm:rounded-[32px] bg-white border border-gray-100 p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col items-start gap-y-5"
        >
            {/* Header */}
            <div className="flex flex-row items-center justify-between w-full pb-2">
                <h4 className="text-base sm:text-lg font-extrabold text-slate-800">Sales Outreach Campaign</h4>
                <span className="text-xs font-bold text-slate-300">Day 1</span>
            </div>

            {/* Step 1: Sarah Johnson */}
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-4 sm:p-5 rounded-[20px] border border-gray-100 bg-white shadow-sm hover:scale-[1.01] transition-transform duration-300 gap-4 text-left"
            >
                {/* Left Profile Info */}
                <div className="flex items-center gap-3.5 flex-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&fit=crop&q=80"
                            alt="Sarah Johnson"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col min-w-0 leading-tight">
                        <span className="font-extrabold text-xs sm:text-sm text-slate-800">Sarah Johnson</span>
                        <span className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Sales Director at HealthTech Inc.</span>
                        <div className="flex items-center gap-1.5 mt-2">
                            <Check size={14} className="text-[#71EB34] stroke-[3.5]" />
                            <span className="text-[11px] sm:text-xs font-bold text-[#71EB34]">Connection Request Sent</span>
                        </div>
                    </div>
                </div>

                {/* Right Status Badge */}
                <div className="flex flex-row sm:flex-col items-end justify-between sm:justify-start gap-2 w-full sm:w-auto shrink-0 border-t border-gray-50 pt-2.5 sm:pt-0 sm:border-0">
                    <div className="flex flex-col items-left sm:items-end leading-tight">
                        <span className="text-[11px] font-bold text-slate-400">Day 1</span>
                        <span className="text-[9px] text-slate-400 font-semibold mt-0.5">May 7, 2025</span>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold border bg-[#EAFCEB] text-[#356221] border-[#defad0] select-none gap-1.5">
                        <UsersIcon size={14} className="fill-[#356221] stroke-[2.5]" />
                        Accepted
                    </span>
                </div>
            </motion.div>

            {/* Step 2: Michael Chen */}
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-4 sm:p-5 rounded-[20px] border border-gray-100 bg-white shadow-sm hover:scale-[1.01] transition-transform duration-300 gap-4 text-left"
            >
                {/* Left Profile Info */}
                <div className="flex items-center gap-3.5 flex-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&fit=crop&q=80"
                            alt="Michael Chen"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col min-w-0 leading-tight">
                        <span className="font-extrabold text-xs sm:text-sm text-slate-800">Michael Chen</span>
                        <span className="text-[11px] sm:text-xs text-slate-400 mt-0.5">VP of Sales at FinTech Labs</span>
                        <div className="flex items-center gap-1.5 mt-2">
                            <Mail size={14} className="text-[#3b82f6] stroke-[2.5]" />
                            <span className="text-[11px] sm:text-xs font-black tracking-tight text-[#3b82f6]">Follow-up Message Scheduled</span>
                        </div>
                    </div>
                </div>

                {/* Right Status Badge */}
                <div className="flex flex-row sm:flex-col items-end justify-between sm:justify-start gap-2 w-full sm:w-auto shrink-0 border-t border-gray-50 pt-2.5 sm:pt-0 sm:border-0">
                    <div className="flex flex-col items-left sm:items-end leading-tight">
                        <span className="text-[11px] font-bold text-slate-400">Day 2</span>
                        <span className="text-[9px] text-slate-400 font-semibold mt-0.5">May 8, 2025</span>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-extrabold border bg-[#eaf4fe] text-[#2b6cb0] border-[#d2e4f6] select-none gap-1.5">
                        <CornerUpLeft size={14} className="stroke-[2.5]" />
                        Replied
                    </span>
                </div>
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