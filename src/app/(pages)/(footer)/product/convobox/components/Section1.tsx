"use client";

import { Search, Navigation, MessageSquare, BarChart3, User, Mail, SendHorizonal } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section1() {
    return (
        <section className="w-full bg-[#f3f4f6] rounded-2xl p-4 sm:p-6 lg:p-10">
            <div className="w-full max-w-[1440px] mx-auto bg-[#F9FAFB] border border-[#edf5e8] rounded-3xl sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 xl:gap-10">
                {/* Left Column (43%) */}
                <div className="w-full lg:w-[43%] lg:pl-10 flex flex-col items-start justify-center z-10">
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-black text-gray-900 tracking-tight leading-[1.08]"
                    >
                        <span className="text-[#8CC522]">10x</span> Your LinkedIn<br />
                        Outbound.<br />
                        Every <span className="text-[#8CC522]">Account.</span><br />
                        One <span className="text-[#8CC522]">Platform.</span>
                    </motion.h1>

                    {/* Subtitle / Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-6 text-base sm:text-lg text-gray-500 font-normal leading-relaxed max-w-[430px]"
                    >
                        Find the right people, run smarter campaigns, automate follow-ups, and manage conversations — all in one connected workspace.
                    </motion.p>

                    {/* 4 Feature Items at bottom of left column */}
                    <div className="mt-10 sm:mt-12 flex items-start gap-6 sm:gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.2 }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            className="flex flex-col items-center text-left gap-2"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#ecfccb]/90 border border-[#d9f99d]/60 flex items-center justify-center text-[#356221] shadow-xs">
                                <Search className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <p className="text-xs font-semibold text-gray-800 leading-tight">
                                Find<br />Leads
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.28 }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            className="flex flex-col items-center text-left gap-2"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#ecfccb]/90 border border-[#d9f99d]/60 flex items-center justify-center text-[#356221] shadow-xs">
                                <SendHorizonal className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <p className="text-xs font-semibold text-gray-800 leading-tight">
                                Run<br />Campa-<br />igns
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.36 }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            className="flex flex-col items-center text-left gap-2"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#ecfccb]/90 border border-[#d9f99d]/60 flex items-center justify-center text-[#356221] shadow-xs">
                                <MessageSquare className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <p className="text-xs font-semibold text-gray-800 leading-tight">
                                Smart<br />Follow-<br />ups
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.44 }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            className="flex flex-col items-center text-left gap-2"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#ecfccb]/90 border border-[#d9f99d]/60 flex items-center justify-center text-[#356221] shadow-xs">
                                <BarChart3 className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <p className="text-xs font-semibold text-gray-800 leading-tight">
                                Track<br />Results
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column (57%) - Interactive Ecosystem Orbit Graphic */}
                <div className="w-full lg:w-[57%] flex items-center justify-center relative py-6 sm:py-8 lg:py-2">
                    <Image
                        src="/footer/product/convobox/Right_Graphic_Area.png"
                        alt="ConvoBox Inbox"
                        width={1000}
                        height={1100}
                        className="w-full max-w-[90%] h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                    />
                </div>
            </div>
        </section>
    );
}