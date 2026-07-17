"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Workflow() {
    const steps = [
        {
            number: 1,
            title: "Define Your Ideal Customer Profile",
            description: "Input your criteria and let our AI scout for the most relevant leads."
        },
        {
            number: 2,
            title: "Launch Multi-Step Sequences",
            description: "Connect, follow-up, and nurture with hyper-personalized messaging."
        },
        {
            number: 3,
            title: "Convert Replies to Revenue",
            description: "Sync every interaction back to your CRM and book more meetings."
        }
    ];

    return (
        <section className="w-full bg-gradient-to-r from-[#001800] to-[#002000] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Kept standard grid-cols-12 system but divided sections evenly */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Steps (Changed from lg:col-span-5 to lg:col-span-6) */}
                    <div className="lg:col-span-6 flex flex-col justify-center w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                            Master the workflow.<br />
                            <span className="text-[#a3e635]">Win the market.</span>
                        </h2>

                        <p className="text-zinc-300 text-base sm:text-lg tracking-wider mt-4 max-w-xl">
                            Our unified platform orchestrates every stage of the funnel, from first contact to closed-won deals.
                        </p>

                        <div className="flex flex-col gap-5 mt-8 w-full">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start gap-4 p-5 sm:p-6 bg-white/[0.08] border border-white/[0.06] rounded-2xl transition-all duration-300 hover:bg-white/[0.15] hover:border-[#a3e635]/20 group w-full">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#a3e635] text-sm font-extrabold text-[#031d10] shadow-[0_0_15px_rgba(163,230,53,0.3)] transition-transform duration-300 group-hover:scale-110">
                                        {step.number}
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-base sm:text-lg font-bold text-white mb-1 tracking-wide">
                                            {step.title}
                                        </h3>
                                        <p className="text-zinc-300 text-sm sm:text-base tracking-wide">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Dashboard Preview (Changed from lg:col-span-7 to lg:col-span-6) */}
                    <div className="lg:col-span-6 relative flex justify-center w-full mt-10 lg:mt-0">
                        {/* Background subtle-green glow */}
                        <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-3xl" />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative w-full max-w-[650px] bg-white/[0.08] rounded-[1.5rem] border border-emerald-950/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">

                            {/* Browser Header Bar */}
                            <div className="flex items-center justify-between px-4 sm:px-10 py-4 border-b border-emerald-950/60">
                                {/* Control Dots */}
                                <div className="flex gap-2 shrink-0">
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>

                                {/* URL Box */}
                                <div className="text-[11px] text-zinc-500 border border-emerald-950/40 px-4 sm:px-10 py-1 rounded-full font-mono select-none shadow-inner w-44 sm:w-56 text-center truncate mx-2">
                                    networkup.ai/dashboard
                                </div>
                                <div className="w-10 sm:w-14 shrink-0" /> {/* Spacer */}
                            </div>

                            {/* Dashboard Mockup Image */}
                            <div className="w-full px-4 pb-4">
                                <Image
                                    src="/Workspace.png"
                                    alt="Dashboard metrics showing load times, bounce rates, page views and sessions"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto rounded-xl object-top object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Floating Neon Badge */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            whileInView={{ scale: 1, opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.05 }}
                            className="absolute bottom-4 left-4 sm:-bottom-6 sm:left-6 z-10 bg-[#a3e635] py-4 px-5 sm:py-5 sm:px-6 lg:-ml-12 sm:-ml-8 rounded-2xl shadow-[0_15px_30px_rgba(163,230,53,0.35)] flex flex-col justify-center min-w-[130px] sm:min-w-[150px] cursor-pointer">
                            <span className="text-[9px] sm:text-[11px] font-extrabold text-[#031d10]/70 uppercase tracking-widest">
                                AVG. RESPONSE TIME
                            </span>
                            <span className="text-xl sm:text-3xl font-extrabold text-[#031d10] mt-1 sm:mt-1.5 tracking-tight">
                                14 Mins
                            </span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
