"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Send } from "lucide-react";

const models = [
    { name: "ChatGPT", icon: "/chatgpt-icon.svg" },
    { name: "Claude", icon: "/claude-ai-icon.svg" },
    { name: "Grok", icon: "/grok-icon.svg" },
    { name: "Gemini", icon: "/google-gemini-icon.svg" },
    { name: "Perplexity", icon: "/perplexity-ai-icon.svg" },
    { name: "NotebookLM", icon: "/notebook-lm-dark.svg" }
];

const popularPrompts = [
    "How does smart prospecting work?",
    "What makes NetworkUp.io safe?",
    "Integrations supported",
    "Explain campaign analytics"
];

export default function PromptAssistant() {
    const [prompt, setPrompt] = useState<string>(`Try: "Explain how NetworkUp.io automates LinkedIn outreach campaigns"`);
    const handleClick = (prompt: string) => {
        setPrompt(prompt);
    }

    return (
        <section className="w-full bg-gradient-to-r from-[#002800] to-[#003000] text-white overflow-hidden border-b border-zinc-800/40">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row items-stretch">

                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:pl-20 lg:pr-10 py-12 flex flex-col justify-center">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-lime-500/10 text-lime-400 text-xs font-bold border border-lime-500/20 tracking-wide mb-6 w-fit">
                            <span><Sparkles size={12} /></span>
                            <span>AI Prompt Assistant</span>
                        </div>

                        <h3 className="text-4xl sm:text-5xl  tracking-tight text-white mb-6">
                            Ask anything about<br />
                            <span className="text-[#a3e635]">NetworkUp.io</span>
                        </h3>

                        <p className="text-[#feeae0]/70 text-lg tracking-wider leading-relaxed max-w-xl mb-12">
                            Get instant answers, features, use cases, and best practices using your favorite AI models.
                        </p>

                        {/* Model Logos */}
                        <div className="grid grid-cols-3 sm:grid-cols-6">
                            {models.map((model, index) => {
                                const Icon = model.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        className="flex flex-col w-20 items-center rounded-2xl gap-2 p-2 hover:bg-white/[0.06] transition-colors cursor-pointer group"
                                    >

                                        <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.1] transition-all">
                                            <button className="h-12 w-12 rounded-xl px-1">
                                                <Image
                                                    src={Icon}
                                                    alt={model.name}
                                                    height={40}
                                                    width={40}
                                                />
                                            </button>
                                        </div>
                                        <span className="text-[10px] font-semibold text-zinc-500 tracking-wide">
                                            {model.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full bg-black border-t lg:border-t-0 lg:border-l border-white/[0.06] p-8 sm:p-12 lg:p-16 shadow-[5px_5px_50px_12px_rgba(26,36,33,0.8)]"
                        >
                            {/* Search Prompt Box */}
                            <div className="relative flex items-center bg-[#6CB531]/30 border border-white/[0.08] rounded-2xl p-4 gap-3 shadow-inner">
                                <svg
                                    className="w-5 h-5 text-[#feeae0]/70 shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                                <textarea rows={2} className="text-zinc-500 text-lg leading-[1.4] select-none flex-1 min-w-0 pl-4 pr-12 focus:ring-0 focus:outline-none bg-transparent" value={prompt} placeholder={`Try: "Explain how NetworkUp.io automates LinkedIn outreach campaigns"`} onChange={(e) => setPrompt(e.target.value)} />
                                <button className="absolute right-3 bg-[#a3e635] text-[#031d10] h-10 w-10 flex items-center justify-center rounded-xl shadow-[0_4px_12px_rgba(163,230,53,0.3)] transition-transform duration-200 hover:scale-105">
                                    <Send size={15} strokeWidth={3} />
                                </button>
                            </div>

                            {/* Popular Prompts */}
                            <div className="mt-8">
                                <h4 className="text-sm font-bold text-[#feeae0]/70 tracking-wide mb-4">
                                    Popular prompts
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {popularPrompts.map((prompt, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ x: 4, scale: 1.01 }}
                                            onClick={() => handleClick(prompt)}
                                            className="text-xs sm:text-sm text-zinc-300 bg-white/[0.03] border border-white/[0.06] rounded-full px-5 py-2 hover:bg-white/[0.06] hover:border-lime-500/20 transition-all duration-200 cursor-pointer flex items-center justify-between max-w-full text-left"
                                        >
                                            <span className="font-medium tracking-wide">{prompt}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
