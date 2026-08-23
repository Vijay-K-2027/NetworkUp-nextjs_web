"use client"
import { motion } from "framer-motion"
import SplitFeatureSection from "./SplitFeatureSection"

const section5Data = [
    "Target by industry, company, or keywords",
    "Automate outreach for partnerships",
    "Engagement tracking",
    "Export leads for events and campaigns",
    "Measure outreach impact"
]

export default function Section5() {
    const visualContent = (
        <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 shadow-xl flex flex-col items-stretch"
        >
            <div className="flex flex-row items-center justify-between w-full pb-4 border-b border-gray-100">
                <h4 className="text-lg font-bold text-black">Campaign Analytics</h4>
                <div className="flex flex-row items-center gap-x-4">
                    <div className="flex items-center gap-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#71EB34]"></span>
                        <span className="text-xs font-semibold text-gray-500">Connections</span>
                    </div>
                    <div className="flex items-center gap-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C4F6C7]"></span>
                        <span className="text-xs font-semibold text-gray-500">Replies</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-end justify-between gap-x-3 sm:gap-x-5 h-48 px-2">
                {/* Col 1 */}
                <div className="flex flex-col items-center gap-y-3 flex-1">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-full max-w-[80px] bg-gray-100/80 hover:bg-gray-200/80 transition-colors rounded-t-lg origin-bottom"
                        style={{ height: '60px' }}
                    />
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-400 text-center">Apr 28</span>
                </div>
                {/* Col 2 */}
                <div className="flex flex-col items-center gap-y-3 flex-1">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full max-w-[80px] bg-gray-100/80 hover:bg-gray-200/80 transition-colors rounded-t-lg origin-bottom"
                        style={{ height: '96px' }}
                    />
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-400 text-center">May 5</span>
                </div>
                {/* Col 3 */}
                <div className="flex flex-col items-center gap-y-3 flex-1">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 80 }}
                        className="w-full max-w-[80px] bg-[#71EB34] rounded-t-lg origin-bottom shadow-lg shadow-[#71EB34]/20"
                        style={{ height: '130px' }}
                    />
                    <span className="text-[10px] sm:text-xs font-bold text-gray-500 text-center">May 12</span>
                </div>
                {/* Col 4 */}
                <div className="flex flex-col items-center gap-y-3 flex-1">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-full max-w-[80px] bg-gray-100/80 hover:bg-gray-200/80 transition-colors rounded-t-lg origin-bottom"
                        style={{ height: '80px' }}
                    />
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-400 text-center">May 19</span>
                </div>
                {/* Col 5 */}
                <div className="flex flex-col items-center gap-y-3 flex-1">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="w-full max-w-[80px] bg-gray-100/80 hover:bg-gray-200/80 transition-colors rounded-t-lg origin-bottom"
                        style={{ height: '108px' }}
                    />
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-400 text-center">May 26</span>
                </div>
            </div>
        </motion.div>
    )

    return (
        <SplitFeatureSection
            badge="Marketing Teams"
            title="Drive Awareness and Partnerships"
            description="Connect with creators, partners, and industry leaders to expand your reach and grow your brand presence on LinkedIn."
            features={section5Data}
            visualContent={visualContent}
            visualPosition="right"
            sectionBg="bg-[#fafcf7] py-10"
            containerClass="w-full max-w-7xl bg-gray-50 rounded-b-xl mx-auto -mt-10 py-10 lg:py-20 px-6 sm:px-10 border border-gray-100 "
        />
    )
}