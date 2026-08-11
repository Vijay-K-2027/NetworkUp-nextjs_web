"use client";


import { motion } from "framer-motion";
import { Rocket, Send, ChevronDown, CircleCheck, Paperclip } from "lucide-react";

export default function Section3() {

    const features = [
        "Campaign Guidance", "Troubleshooting", "Integrations Help", "Billing Support", "Workflow Assistance"
    ]

    return (
        <section className="bg-[#fafcf7] mx-10 py-12 md:py-18 px-3 sm:px-5 lg:px-7">
            <div className="max-w-8xl mx-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                {/* Left Section - Text & Features */}
                <motion.div
                    className="flex flex-col lg:max-w-[40%] items-start gap-y-6 w-full order-1 lg:order-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#356221] font-bold tracking-widest">
                        AI Help Desk
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-left text-gray-900 leading-tight tracking-tight">
                        Your AI assistant is <span className="text-[#356221] ">always available</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-left text-[#555555] leading-relaxed max-w-2xl">
                        Get instant answers and expert guidance on every aspect of your outreach strategy. Our AI Help Desk is deeply integrated with your data to provide context-aware support 24/7.
                    </p>

                    <div
                        className="flex flex-col items-start gap-y-1 mt-2"
                    >
                        {features.map((data, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center gap-x-3 py-1"
                            >
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <CircleCheck size={25} className="stroke-[#356221]/60 fill-[#356221]/30 stroke-[1]" />
                                </div>
                                <span className="text-base text-gray-700 font-medium">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
                {/* Right Section - AI Message Writer Card Mockup */}
                <motion.div
                    className="w-full lg:max-w-[580px] rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] order-2 lg:order-1 bg-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Chat Widget Header */}
                    <div className="flex flex-row items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                        <div className="flex items-center gap-3">
                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full bg-[#1b5e20] text-white flex items-center justify-center shrink-0 shadow-inner">
                                <Rocket size={20} className="stroke-[2]" />
                            </div>
                            {/* Info */}
                            <div className="flex flex-col items-start leading-tight">
                                <h4 className="font-extrabold text-gray-800 text-sm">NetworkUp AI</h4>
                                <span className="flex items-center gap-1 text-[11px] text-gray-400 font-semibold mt-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Online
                                </span>
                            </div>
                        </div>
                        {/* Action dots */}
                        <button className="text-gray-400 hover:text-gray-700 transition-colors p-1 cursor-pointer">
                            <ChevronDown size={18} />
                        </button>
                    </div>

                    {/* Chat Feed Body */}
                    <div className="bg-slate-50/50 p-6 flex flex-col gap-4 min-h-[360px] justify-between">
                        <div className="flex flex-col gap-4">
                            {/* Message 1: System Welcome */}
                            <div className="flex items-start gap-2.5 max-w-[85%] self-start">
                                <div className="w-8 h-8 rounded-full bg-[#1b5e20] text-white flex items-center justify-center shrink-0">
                                    <Rocket size={14} />
                                </div>
                                <div className="bg-white border border-gray-100 text-slate-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tl-none text-left leading-relaxed shadow-sm">
                                    Hi there! I'm your AI assistant. How can I help optimize your outreach today?
                                </div>
                            </div>

                            {/* Suggestion Chips */}
                            <div className="flex flex-row flex-wrap gap-2.5 pl-10.5">
                                <button className="bg-[#eefce6] text-[#356221] text-xs font-semibold px-4 py-2 rounded-full border border-[#defad0] hover:bg-[#defad0] transition-colors cursor-pointer flex items-center gap-1.5">
                                    <span className="text-[#356221]">📈</span> Optimize Campaign
                                </button>
                                <button className="bg-[#eefce6] text-[#356221] text-xs font-semibold px-4 py-2 rounded-full border border-[#defad0] hover:bg-[#defad0] transition-colors cursor-pointer flex items-center gap-1.5">
                                    <span className="text-[#356221]">🔌</span> Fix Integration
                                </button>
                            </div>

                            {/* Message 2: User Message */}
                            <div className="flex items-start gap-2.5 max-w-[85%] self-end flex-row-reverse mt-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-gray-150">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80"
                                        alt="User"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="bg-[#2e7d32] text-white text-xs sm:text-sm p-3.5 rounded-2xl rounded-tr-none text-left leading-relaxed shadow-sm">
                                    My open rates dropped on the 'Q3 Enterprise' sequence.
                                </div>
                            </div>

                            {/* Message 3: Typing Indicator */}
                            <div className="flex items-start gap-2.5 max-w-[85%] self-start mt-2">
                                <div className="w-8 h-8 rounded-full bg-[#1b5e20] text-white flex items-center justify-center shrink-0">
                                    <Rocket size={14} />
                                </div>
                                <div className="bg-white border border-gray-100 text-gray-400 text-xs sm:text-sm py-3 px-4 rounded-2xl rounded-tl-none flex items-center gap-1 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Input Footer */}
                    <div className="p-4 border-t border-gray-100 bg-white">
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2 gap-3">
                            <button className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer shrink-0">
                                <Paperclip size={18} />
                            </button>
                            <input
                                placeholder="Ask anything about your account..."
                                disabled
                                className="bg-transparent text-gray-700 text-xs sm:text-sm placeholder-gray-400 py-1 w-full focus:outline-none text-left cursor-not-allowed select-none"
                            />
                            <button className="bg-[#1b5e20] text-white h-8 w-8 flex items-center justify-center rounded-xl transition-transform hover:scale-105 shrink-0 cursor-not-allowed">
                                <Send size={12} className="fill-white" />
                            </button>
                        </div>
                    </div>
                </motion.div>




            </div>
        </section>
    );
}