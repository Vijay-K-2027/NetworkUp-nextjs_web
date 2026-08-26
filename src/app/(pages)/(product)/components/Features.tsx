"use client";

import React from "react";
import { motion } from "framer-motion";

import { cardVariants, containerVariants } from '@/app/homepage/assets/icons'
import { UnifiedInboxIcon, CampaignAnalyticsIcon, IntegrationsIcon } from "@/app/homepage/assets/icons";
import { BrainIcon, Database, UserSearch } from "lucide-react";
import { BsShieldLock } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";

const features = [
    {
        icon: UserSearch,
        title: "Smart Prospecting",
        description: "AI filters that identify high-intent leads based on real-time professional signals."
    },
    {
        icon: "/product/feature/Inbox.png",
        title: "Unified Inbox",
        description: "Manage every LinkedIn conversation across multiple accounts in one central view."
    },
    {
        icon: FaMagic,
        title: "Campaign Builder",
        description: "Drag-and-drop workflow sequences with intelligent branching logic and delays."
    },
    {
        icon: "/product/feature/BarChart.png",
        title: "Campaign Analytics",
        description: "Deep-dive metrics on conversion rates, engagement, and team performance."
    },
    {
        icon: "/product/feature/Relationship.png",
        title: "Relationship Intel",
        description: "Contextual insights about your leads before you ever hit send."
    },
    {
        icon: Database,
        title: "Lead Enrichment",
        description: "Automatically verify emails and phone numbers for your ideal targets."
    },
    {
        icon: "/product/feature/Integration.png",
        title: "Integrations",
        description: "Native sync with HubSpot, Salesforce, and 2,000+ apps via Zapier."
    },
    {
        icon: "/product/feature/Security.png",
        title: "Account Protection",
        description: "Proprietary safety systems to keep your LinkedIn account secure and active."
    }
];


export default function Features() {
    return (
        <section id="features" className="w-full bg-[radial-gradient(circle_at_bottom_right,_rgba(222,250,208,1)_0%,_rgba(222,250,208,0.2)_300px,_rgba(222,250,208,0.2)_100%)] py-20 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-15">
                    <h4 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Precision tools for modern sellers
                    </h4>
                    <p className="mt-3 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
                        Everything you need to automate your outbound without sacrificing the human touch.
                    </p>
                </div>

                {/* Grid Section */}
                <motion.div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => {
                        const iconVal = feature.icon;
                        const isStringIcon = typeof iconVal === "string";
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="flex flex-col bg-white p-8 rounded-[1rem] border-2 border-[#defad0]/20 shadow-[inset_2px_0_0_0_rgba(222,250,208,1),_inset_0_-2px_0_0_rgba(222,250,208,1)] transition-shadow duration-300 hover:shadow-[0_12px_30px_-8px_rgba(53,98,33,0.08)] group"
                            >
                                <div className="absolute inset-0 pointer-events-none rounded-[1rem] border-2 border-[#defad0] [mask-image:linear-gradient(to_top_left,_black_50%,_transparent_50%)]"></div>

                                <div className="flex items-center justify-start mb-6">
                                    <div className="transition-transform duration-300 group-hover:scale-110 h-[30px] flex items-center">
                                        {isStringIcon ? (
                                            <img
                                                src={iconVal as string}
                                                alt={feature.title}
                                                className="w-[45px] h-[45px] object-contain"
                                            />
                                        ) : (
                                            (() => {
                                                const IconComponent = iconVal as React.ComponentType<{ size?: number; color?: string }>;
                                                return <IconComponent size={30} color="green" />;
                                            })()
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[16px] leading-[1.6] text-gray-500 font-normal">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
