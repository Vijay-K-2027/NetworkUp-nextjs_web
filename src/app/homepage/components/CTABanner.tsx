"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTABanner() {
    return (
        <section className="relative w-full bg-gradient-to-b from-[#031d10] to-[#011108] py-10 lg:py-15 px-6 lg:px-8 text-center text-white overflow-hidden">
            <div className="mx-auto max-w-4xl flex flex-col items-center justify-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.1]"
                >
                    Start growing your professional network today.
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl mb-12 font-medium"
                >
                    Join the high-performance revenue teams scaling their outreach with NetworkUp.io. No credit card required.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16 lg:mb-0" /* Prevents crashing into the widget when stacked on mobile screens */
                >
                    <a href="#" className="inline-flex items-center justify-center bg-[#76e11b] hover:bg-[#68c617] text-[#031d10] font-extrabold text-sm sm:text-base py-4 px-10 rounded-2xl shadow-[0_10px_25px_rgba(118,225,27,0.3)] hover:scale-[1.03] transition-all duration-200">
                        Start 14-Day Free Trial
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
