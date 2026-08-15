"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "25K+", label: "Active Users" },
    { value: "3M", label: "Connections Made" },
    { value: "89%", label: "Avg. Accept Rate" },
    { value: "12M+", label: "Replies Generated" }
];

export default function Stats() {
    return (
        <section className="w-full bg-[#fafcf7] py-20 px-6 lg:px-8 bg-[radial-gradient(circle_at_top_right,_rgba(222,250,208,1)_0%,_rgba(222,250,208,0.1)300px,_rgba(222,250,208,0%)_100%)] ">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-50 gap-y-12 sm:gap-y-16 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center"
                        >
                            <span className="text-3xl sm:text-5xl lg:text-6xl font-normal text-gray-900 tracking-tight mb-5">
                                {stat.value}
                            </span>
                            <span className="text-gray-500 text-sm sm:text-base font-medium tracking-wide">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}