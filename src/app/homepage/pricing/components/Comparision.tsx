"use client";

import { motion } from "framer-motion";
import { Check, CircleCheck, X } from "lucide-react";

const headings = [
    "FEATURE", "NetworkUp", "HEYREACH", "DRIPIFY", "EXPANDI", "WAALAXY", "REACHY", "WE-CONNECT", "LINKED HELPER"
]

const comparisons = [
    ["Pricing", "Free → $21/mo", "$$$", "$$$", "$$", "$$", "$$", "$$", "$$"],
    ["Runs locally (your IP)", "Yes", "No", "No", "No", "Yes", "No", "No", "No"],
    ["Signal-based lead sourcing", "Yes", "No", "No", "No", "No", "No", "No", "Partial"],
    ["AI-powered messaging (your key, 0% markup)", "Yes", "No", "No", "No", "No", "No", "No", "No"],
    ["Lead scoring / ICP fit", "Yes", "No", "No", "No", "No", "No", "No", "No"],
    ["Multi-account auto-rotation", "Yes", "Yes", "Partial", "No", "No", "No", "Yes", "No"],
    ["Per-client isolation & exportable proof", "Yes", "Partial", "Partial", "No", "No", "No", "Partial", "No"],
    ["Team collaboration", "Yes", "Yes", "Yes", "Yes", "No", "Yes", "Yes", "Yes"],
    ["CRM & Zapier integration", "Yes", "Yes", "Yes", "Yes", "Partial", "Yes", "Partial", "Yes"],
    ["Free to start - no card", "Yes", "No", "No", "No", "No", "No", "No", "Yes"]
]



export default function Comparision() {
    return (
        <section className="w-full bg-[#defad0]/20 py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="mx-auto max-w-9xl px-6 lg:px-8">
                <motion.div
                    className="flex flex-col items-center justify-center gap-5 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="uppercase text-lime-700/70 tracking-wide text-center font-bold leading-[1px] text-md ">alternatives</h4>
                    <h2 className="text-black w-[800px] text-center tracking-tight leading-[1.1] text-3xl sm:text-4xl md:text-5xl font-bold px-2">How NetworkUp compares to other LinkedIn automation tools</h2>
                    <h5 className="text-[#356221] w-[800px] text-lg text-center leading-relaxed">Most tools send messages from the cloud. NetworkUp is a local agent that finds, scores and reaches your buyers from your own machine.</h5>
                </motion.div>
                <div className="my-5 shadow-2xl shadow-black/20">
                    {/* Table */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-t-xl overflow-hidden bg-black"
                    >
                        <div className="grid grid-cols-9 bg-gray-400/25 w-fit">
                            {headings.map((heading, index) => (
                                <span
                                    key={index}
                                    className={`text-sm w-[140px] font-bold tracking-wider px-5 py-5 flex items-center justify-center text-center h-full min-h-[70px]
                                        ${index === 1
                                            ? "text-lime-400 bg-lime-400/10 border-x border-t border-gray-400/20"
                                            : "text-[#defad0] mx-2 border-b border-gray-400/40"
                                        }`}
                                >
                                    {heading}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div>
                        {comparisons.map((compare, index) => (
                            <div key={index} className={`bg-black ${index === comparisons.length - 1 ? "rounded-b-xl" : ""}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                                    key={index} className="grid grid-cols-9 w-fit"
                                >
                                    {compare.map((c, i) => (
                                        <span
                                            key={i}
                                            className={`w-[140px] font-medium text-center py-3 border-b last:border-r-0 border-gray-400/10 flex items-center justify-center min-h-[50px]
            ${i === 1 ? "bg-gradient-to-t from-black/50 via-lime-400/10 to-lime-400/20 text-lime-400 px-5" : "mx-2 border-b border-gray-400/30"} 
            ${i === 0 ? "font-bold text-left text-white justify-start px-5" : ""}`}
                                        >
                                            {(() => {
                                                if (c === "Yes") {
                                                    return i === 1 ? <CircleCheck size={20} stroke="black" fill="#a3e635" /> : <Check size={20} color="white" />;
                                                }
                                                if (c === "No") {
                                                    return <span className="text-gray-400/50">-</span>;
                                                }
                                                if (c === "Partial") {
                                                    return <span className="text-white">~</span>;
                                                }
                                                return <span className={`${i === 1 ? "text-lime-400" : "text-white/80"}`}>{c}</span>;
                                            })()}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-row items-center justify-between w-full max-w-7xl mx-auto my-5"
                >
                    <h3 className="text-base px-20">✓ included</h3>
                    <h3 className="text-base px-20">- not available</h3>
                    <h3 className="text-base px-20">~ partial or paid add-on</h3>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-row items-center justify-center"
                >
                    <h3 className="text-base px-20 text-lime-700/50">Based on public pricing pages, July 2024. Click a competitor's name for the full comparision.</h3>
                </motion.div>
            </div>
        </section>
    )
}