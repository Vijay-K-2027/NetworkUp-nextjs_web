"use client";

import { Check, X } from "lucide-react"
import React from "react";

const details = [
    {
        topic: "Header",
        feature: "Feature",
        starter: "Starter",
        growth: "Growth",
        enterprise: "Enterprise"
    },
    {
        topic: "Core Engine",
        feature: "AI Personalization Engine",
        starter: "V1 (Basic)",
        growth: "V2 (Pro)",
        enterprise: "V3 (Enterprise)",
    },
    {
        topic: "Core Engine",
        feature: "API Endpoint Access",
        starter: "No",
        growth: "Yes",
        enterprise: "Yes (Priority)",
    },
    {
        topic: "Core Engine",
        feature: "CRM Integrations",
        starter: "Zapier Only",
        growth: "Direct (Hubspot, SFDC)",
        enterprise: "Full Native + Webhooks",
    },
    {
        topic: "Core Engine",
        feature: "White-label Reports",
        starter: "No",
        growth: "Yes",
        enterprise: "Yes",
    },
    {
        topic: "Growth Features",
        feature: "LinkedIn Accounts",
        starter: "1 Account",
        growth: "3 Accounts",
        enterprise: "Unlimited",
    },
    {
        topic: "Growth Features",
        feature: "Monthly Messages",
        starter: "500 / month",
        growth: "Unlimited",
        enterprise: "Priority Queue",
    },
    {
        topic: "Growth Features",
        feature: "Lead Discovery",
        starter: "Standard",
        growth: "AI-Powered",
        enterprise: "Advanced Predictive AI",
    },
    {
        topic: "Administration",
        feature: "Team Collaboration",
        starter: "No",
        growth: "Yes",
        enterprise: "Yes",
    },
    {
        topic: "Administration",
        feature: "Custom Training",
        starter: "No",
        growth: "No",
        enterprise: "Yes",
    }
]

export default function Detailed() {
    const headers = details[0];
    const bodyRows = details.slice(1);

    return (
        <section className="bg-[#fafcf7] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-5xl mx-auto w-full">
                <div className="flex flex-col items-center justify-center gap-3 mb-12">
                    <h2 className="text-3xl font-bold text-black text-center ">Detailed Breakdown</h2>
                    <h5 className="text-lg text-black/60 text-center ">Compare core features across our top plans.</h5>
                </div>

                <div className="w-full max-w-5xl mx-auto overflow-x-auto scrollbar-thin">
                    <div className="min-w-[768px] flex flex-col">
                        {/* Table Header */}
                        <div className="grid grid-cols-14 rounded-t-xl bg-gray-500/5 px-7 py-5 border border-gray-400/60 font-bold text-lg text-black items-center">
                            <span className="col-span-5 text-left">{headers.feature}</span>
                            <span className="col-span-3 text-center">{headers.starter}</span>
                            <span className="col-span-3 text-center">{headers.growth}</span>
                            <span className="col-span-3 text-center">{headers.enterprise}</span>
                        </div>

                        {/* Table Body */}
                        {(() => {
                            let currentTopicGroup: string | null = null;

                            return bodyRows.map((detail, index) => {
                                const isNewTopic = detail.topic !== currentTopicGroup;

                                if (isNewTopic) {
                                    currentTopicGroup = detail.topic;
                                }

                                return (
                                    <React.Fragment key={index}>
                                        {/* Full-Width Topic Header */}
                                        {isNewTopic && (
                                            <div className="col-span-12 px-7 py-4 bg-gray-100/60 font-bold text-base text-[#356221] border-x border-b border-gray-400/40 text-left uppercase tracking-wider">
                                                {detail.topic}
                                            </div>
                                        )}

                                        {/* Feature Grid Row */}
                                        <div
                                            className={`grid grid-cols-14 px-7 py-6 border-b border-x border-gray-400/40 bg-white transition-all duration-200 hover:bg-[#defad0]/10 hover:translate-x-1 border-l-4 border-l-transparent hover:border-l-[#356221] hover:shadow-sm items-center ${index === bodyRows.length - 1 ? "rounded-b-xl" : ""}`}
                                        >
                                            {/* Feature Title */}
                                            <span className="col-span-5 text-base text-black/70 text-left pr-4 font-medium">
                                                {detail.feature}
                                            </span>

                                            {/* Starter Column */}
                                            <span className="col-span-3 text-center flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                                {detail.starter === "No" ? (
                                                    <X size={18} className="text-red-500 font-extrabold" />
                                                ) : detail.starter === "Yes" ? (
                                                    <Check size={18} className="text-green-600 font-extrabold" />
                                                ) : (
                                                    <span className="text-zinc-600 text-sm font-semibold">{detail.starter}</span>
                                                )}
                                            </span>

                                            {/* Growth Column */}
                                            <span className="col-span-3 text-center flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                                {detail.growth === "Yes" ? (
                                                    <Check size={18} className="text-green-600 font-extrabold" />
                                                ) : detail.growth === "No" ? (
                                                    <X size={18} className="text-red-500 font-extrabold" />
                                                ) : (
                                                    <span className="text-zinc-650 text-sm font-semibold">{detail.growth}</span>
                                                )}
                                            </span>

                                            {/* Enterprise Column */}
                                            <span className="col-span-3 text-center flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                                {detail.enterprise === "Yes" ? (
                                                    <Check size={18} className="text-green-600 font-extrabold" />
                                                ) : detail.enterprise === "No" ? (
                                                    <X size={18} className="text-red-500 font-extrabold" />
                                                ) : (
                                                    <span className="text-zinc-700 text-sm font-bold">{detail.enterprise}</span>
                                                )}
                                            </span>
                                        </div>
                                    </React.Fragment>
                                );
                            });
                        })()}
                    </div>
                </div>
            </div>
        </section>
    );
}