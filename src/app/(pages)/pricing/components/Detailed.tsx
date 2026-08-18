"use client";

import { Check, CircleCheck, X } from "lucide-react"
import React from "react";
import { motion } from "framer-motion";

const details = [
    // ACCOUNT MANAGEMENT
    {
        topic: "Account Management",
        feature: "LinkedIn Accounts",
        starter: "1",
        growth: "3",
        enterprise: "Unlimited"
    },
    {
        topic: "Account Management",
        feature: "Team Members",
        starter: "1",
        growth: "10",
        enterprise: "Unlimited"
    },
    {
        topic: "Account Management",
        feature: "ConvoBox",
        starter: "Yes",
        growth: "Yes",
        enterprise: "Yes",
    },
    // OUTREACH
    {
        topic: "Outreach",
        feature: "AI Outreach Writer",
        starter: "Yes",
        growth: "Yes",
        enterprise: "Yes",
    },
    {
        topic: "Outreach",
        feature: "Campaign Builder",
        starter: "Basic",
        growth: "Advanced",
        enterprise: "Advanced + AI",
    },
    {
        topic: "Outreach",
        feature: "Personalized Variables",
        starter: "Basic",
        growth: "Unlimited",
        enterprise: "Unlimited",
    },
    {
        topic: "Outreach",
        feature: "Smart Campaign Follow-ups",
        starter: "No",
        growth: "Yes",
        enterprise: "Yes",
    },
    // AI & AUTOMATION
    {
        topic: "AI & Automation",
        feature: "AI Personalization",
        starter: "Basic",
        growth: "Advanced",
        enterprise: "Enterprise AI",
    },
    {
        topic: "AI & Automation",
        feature: "AI Health Monitoring",
        starter: "No",
        growth: "Yes",
        enterprise: "Yes",
    },
    {
        topic: "AI & Automation",
        feature: "AI Workflow Builder",
        starter: "No",
        growth: "Yes",
        enterprise: "Yes",
    },
    // LEAD DISCOVERY
    {
        topic: "Lead Discovery",
        feature: "Prospect Discovery (on credit basis)",
        starter: "Standard",
        growth: "AI-powered",
        enterprise: "Predictive AI",
    },
    {
        topic: "Lead Discovery",
        feature: "CRM Sync",
        starter: "Zapier",
        growth: "Native",
        enterprise: "Native + Webhooks",
    },
    // ANALYTICS
    {
        topic: "Analytics",
        feature: "Campaign Analytics",
        starter: "Basic",
        growth: "Advanced",
        enterprise: "Enterprise",
    },
    {
        topic: "Analytics",
        feature: "White-label Reports",
        starter: "No",
        growth: "No",
        enterprise: "Yes",
    },
    // SECURITY & SUPPORT
    {
        topic: "Security & Support",
        feature: "AI Support Hub",
        starter: "No",
        growth: "Yes",
        enterprise: "Yes",
    },
    {
        topic: "Security & Support",
        feature: "SSO / SAML",
        starter: "No",
        growth: "No",
        enterprise: "Yes",
    }
]

export default function Detailed() {
    const renderCell = (val: string, topic: string, isGrowth: boolean = false) => {
        if (val === "Yes") {
            return (
                <CircleCheck size={25} className="fill-green-500 stroke-[#f5f5dc] shrink-0" />
            );
        }
        if (val === "No") {
            return <X size={25} className="stroke-red-400 stroke-[2] shrink-0" />;
        }
        return (
            <span className={`text-xs sm:text-sm ${isGrowth ? "text-black font-extrabold" : "text-gray-600 font-medium"}`}>
                {val}
            </span>
        );
    };

    let currentTopicGroup: string | null = null;

    return (
        <section className="bg-[#f5f5dc]/40 py-20 px-4 sm:px-6 lg:px-[100px]">
            <div className="w-full">

                {/* Header Section */}
                <motion.div
                    className="flex flex-col items-center justify-center gap-3 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-black text-center tracking-tight">Detailed Breakdown</h2>
                    <p className="text-base sm:text-lg text-gray-500 text-center max-w-2xl">Compare core features across our top plans.</p>
                </motion.div>

                {/* Table Container */}
                <motion.div
                    className="w-full overflow-x-auto rounded-[24px] scrollbar-thin"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="min-w-[800px] flex flex-col bg-transparent">

                        {/* Table Header Row */}
                        <div className="grid grid-cols-12 items-stretch font-bold text-sm sm:text-base text-black bg-transparent">
                            <div className="col-span-6 flex items-center justify-start py-6 px-8 pl-8 lg:pl-25 text-black font-extrabold">
                                Feature
                            </div>
                            <div className="col-span-2 flex flex-col items-center justify-center py-6 px-4 gap-1 text-center">
                                <span className="font-extrabold text-sm sm:text-base">Starter</span>
                                <span className="text-[11px] sm:text-xs text-black font-semibold">$21/ mo</span>
                            </div>
                            <div className="col-span-2 flex flex-col items-center justify-center py-6 px-4 gap-1 text-center bg-[#71EB34]/10 relative">
                                <span className="font-extrabold text-sm sm:text-base text-black">Growth</span>
                                <span className="text-[11px] sm:text-xs text-[#356221] font-extrabold">$59/ mo</span>
                            </div>
                            <div className="col-span-2 flex flex-col items-center justify-center py-6 px-4 gap-1 text-center">
                                <span className="font-extrabold text-sm sm:text-base">Enterprise</span>
                                <span className="text-[11px] sm:text-xs text-black font-semibold">$129/ mo</span>
                            </div>
                        </div>

                        {/* Table Body Rows */}
                        {details.map((detail, index) => {
                            const isNewTopic = detail.topic !== currentTopicGroup;
                            if (isNewTopic) {
                                currentTopicGroup = detail.topic;
                            }

                            return (
                                <React.Fragment key={index}>
                                    {/* Topic Header Row */}
                                    {isNewTopic && (
                                        <motion.div
                                            className="grid grid-cols-12 bg-[#71EB34]/15"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="col-span-12 py-3 px-8 pl-8 lg:pl-25 text-[11px] font-extrabold text-[#356221] tracking-wider uppercase text-left">
                                                {detail.topic}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Feature Row */}
                                    <motion.div
                                        className="grid grid-cols-12 items-stretch hover:bg-[#71EB34]/5 transition-colors duration-150"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.4) }}
                                    >

                                        {/* Feature Name */}
                                        <div className="col-span-6 flex items-center justify-start py-4 px-8 pl-8 lg:pl-25 text-left text-xs sm:text-sm text-gray-700">
                                            {detail.feature}
                                        </div>

                                        {/* Starter Col */}
                                        <div className="col-span-2 flex items-center justify-center py-4 px-4 text-center">
                                            {renderCell(detail.starter, detail.topic)}
                                        </div>

                                        {/* Growth Col (Highlighted) */}
                                        <div className="col-span-2 flex items-center justify-center py-4 px-4 text-center bg-[#71EB34]/10 text-black">
                                            {renderCell(detail.growth, detail.topic, true)}
                                        </div>

                                        {/* Enterprise Col */}
                                        <div className="col-span-2 flex items-center justify-center py-4 px-4 text-center">
                                            {renderCell(detail.enterprise, detail.topic)}
                                        </div>

                                    </motion.div>
                                </React.Fragment>
                            );
                        })}

                    </div>
                </motion.div>

            </div>
        </section>
    );
}