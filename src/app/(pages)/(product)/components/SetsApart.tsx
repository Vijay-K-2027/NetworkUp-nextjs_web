"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, ChartNoAxesCombined } from "lucide-react";
import { IntegrationsIcon } from "@/app/homepage/assets/icons";

const items = [
    {
        icon: "/product/feature/Sparkles.png",
        title: "AI Campaign Optimizer",
        description: "Analyzes campaigns before launch and recommends improvements to maximize acceptance and reply rates using deep semantic modeling."
    },
    {
        icon: "/product/feature/Relation.png",
        title: "Relationship Intelligence",
        description: "Understands prospect engagement, predicts buying intent and recommends the best next action based on historical patterns."
    },
    {
        icon: "/product/feature/Integrate.png",
        title: "Opportunity Center",
        description: "Automatically surfaces the highest-value prospects, ideal outreach windows and hidden sales opportunities across your entire funnel."
    },
    {
        icon: "/product/feature/IncreaseTrend.png",
        title: "Campaign Simulator",
        description: "Predict campaign performance before launch using AI insights and historical outreach data to ensure ROI on every single send."
    }
];

export default function SetsApart() {
    return (
        <section className="w-full bg-[#fafcf7] pt-28 pb-10 px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_bottom_left,_rgba(222,250,208,1)_0%,_rgba(222,250,208,0.2)_500px,_rgba(222,250,208,0%)_70%)]">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="flex flex-col items-center text-center -mt-10 mb-20">
                    {/* Tiny Pill Badge */}
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#00ab41]/20 text-[#356221] text-xs font-bold border border-[#dce6d5] uppercase tracking-wider mb-6">
                        <span>Why Network.Up.io</span>
                    </div>

                    <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-normal mb-6">
                        What Sets NetworkUp.io Apart
                    </h2>

                    <p className="text-black/80 text-lg md:text-xl tracking-wide leading-normal max-w-3xl">
                        Our proprietary AI engine doesn't just manage outreach—it builds relationships. {" "} By analyzing millions of data points across your network, we identify high-intent {" "}opportunities that traditional CRM tools simply miss.
                    </p>
                </div>

                {/* Cards Grid Container */}
                <div className="relative">

                    {/* Intersecting Crosshairs Dividers (visible on desktop) */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-gradient-to-r from transparent via-lime-200/50 to-transparent -translate-y-1/2 hidden md:block" />
                    <div className="absolute left-1/2 top-1/2 bottom-0 w-[1.5px] bg-gradient-to-r from transparent via-lime-200/50 to-transparent -translate-y-1/2 hidden md:block" />

                    {/* The 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-16 lg:gap-y-16">
                        {items.map((item, index) => {
                            const iconVal = item.icon;
                            const isStringIcon = typeof iconVal === "string";
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="flex flex-col sm:flex-row min-h-[270px] gap-5 items-start p-8 md:p-10 bg-white rounded-[2.25rem] border border-zinc-200/40 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_15px_35px_-8px_rgba(53,98,33,0.07)] group">

                                    {/* Lime green background Icon Block */}
                                    <div className={`flex my-10 h-15 w-15 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 overflow-hidden ${isStringIcon ? "" : "bg-[#76e11b] text-white shadow-[0_4px_12px_rgba(118,225,27,0.25)]"}`}>
                                        {isStringIcon ? (
                                            <img
                                                src={iconVal as string}
                                                alt={item.title}
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        ) : (
                                            (() => {
                                                const IconComponent = iconVal as React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
                                                return <IconComponent size={22} strokeWidth={2.5} className="stroke-[#356221]" />;
                                            })()
                                        )}
                                    </div>

                                    {/* Text content block */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2.5 tracking-tight group-hover:text-[#356221] transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg leading-relaxed text-gray-700 font-normal">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}