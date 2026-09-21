"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        subtitle: "Perfect for individuals.",
        price: ["21", "15"],
        features: [
            {
                name: "Account Management",
                subFeatures: [
                    { text: "1 LinkedIn Account" },
                    { text: "1 Workspace" },
                    { text: "1 Active Campaign" }
                ]
            },

            {
                name: "Outreach",
                subFeatures: [
                    { text: "AI Outreach Writer" },
                    { text: "Multi-step Campaign Builder" },
                    { text: "Prospect Discovery" },
                ]
            },

            {
                name: "Platform",
                subFeatures: [
                    { text: "Basic Analytics" }
                ]
            }
        ],
        buttonText: "Get Started",
        popular: false
    },
    {
        name: "Growth",
        subtitle: "For professional sales teams.",
        price: ["59", "49"],
        features: [

            {
                name: "Account Management",
                subFeatures: [
                    { text: "3 LinkedIn Accounts" },
                    { text: "Multi-workspace" },
                    { text: "Unlimited Campaigns" },
                ]
            },

            {
                name: "AI & Automation",
                subFeatures: [
                    { text: "AI Workspace" },
                    { text: "Advanced AI Personalization" },
                    { text: "Sequence Branching" }
                ]
            },

            {
                name: "Platform",
                subFeatures: [
                    { text: "Unified Inbox" },
                    { text: "Campaign Analytics" },
                    { text: "Integrations & API Access" }
                ]
            }
        ],
        buttonText: "Start Free Trial",
        popular: true
    },
    {
        name: "Enterprise",
        subtitle: "For organizations at scale.",
        price: ["129", "99"],
        features: [

            {
                name: "Organization",
                subFeatures: [
                    { text: "Unlimited LinkedIn Accounts" },
                    { text: "Unlimited Workspaces" },
                ]
            },

            {
                name: "Enterprise AI",
                subFeatures: [
                    { text: "Custom AI Workflows" },
                    { text: "AI Health Monitoring" },
                    { text: "Custom Automation Logic" }
                ]
            },

            {
                name: "Security & Support",
                subFeatures: [
                    { text: "SSO / SAML Authentication" },
                    { text: "Audit Logs & Compliance" },
                    { text: "Dedicated Success Manager" }
                ]
            }
        ],
        buttonText: "Get Started",
        popular: false
    }
];

export default function Pricing() {
    const [billingType, setBillingType] = useState('monthly');

    const switchBilling = () => {
        setBillingType(billingType === 'monthly' ? 'yearly' : 'monthly');
    }

    return (
        <section className="w-full bg-[#fafcf7] py-20 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl -mt-25">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
                        Architected for high-growth teams
                    </h2>
                    <p className="text-[#253a00] text-sm sm:text-base leading-relaxed">
                        Choose the tier that matches your scale. Precision-engineered for high-<br />performance LinkedIn networking.
                    </p>

                    <div className="flex flex-row items-center mt-5 gap-3">
                        <span className="text-black font-medium text-sm sm:text-base leading-relaxed">Monthly</span>
                        <span>
                            <label className="relative inline-block w-[50px] h-[26px] cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="myToggle"
                                    role="switch"
                                    className="sr-only peer"
                                    onClick={switchBilling}
                                />
                                <span className="absolute inset-0 bg-[#e5ffc4] rounded-[34px] transition-all duration-300 border border-[#678c32]
                                    peer-checked:bg-[#e5ffc4]
                                    peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[#0056b3] peer-focus-visible:outline-offset-2
                                    before:absolute before:content-[''] before:h-5 before:w-5 before:left-[3px] before:bottom-[3px] before:bg-[#678c32] before:rounded-full before:transition-all before:duration-300
                                    peer-checked:before:translate-x-[24px]"
                                />
                            </label>
                        </span>
                        <span className="text-[#253a00] text-sm sm:text-base font-bold leading-relaxed">Yearly</span>
                        <span className="text-[#689e24] text-sm md:text-md font-bold leading-relaxed">(20% OFF)</span>
                    </div>

                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className={`relative h-fit flex flex-col justify-between p-8 sm:p-10 rounded-[2.25rem] bg-[#fafff6] transition-all duration-300 hover:border-[#71EB34] ${plan.popular ? "border-2 border-[#6ba00f] shadow-[0_0_50px_10px_rgba(118,225,27,0.2)] hover:border-[#71EB34]" : "border-2 border-zinc-[#b4b4b4] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:border-[#71EB34]"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#bef264] text-[#365314] font-bold text-[10px] sm:text-[11px] tracking-wider uppercase py-1.5 px-4 rounded-full shadow-[0_4px_10px_rgba(118,225,27,0.3)]">
                                    Most Popular
                                </span>
                            )}

                            <div>
                                {/* Header Info */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-1.5 tracking-tight">
                                        {plan.name}
                                    </h3>
                                    <p className="text-[#1a1a1a] text-sm leading-relaxed">
                                        {plan.subtitle}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="flex flex-col mb-10 gap-1">
                                    <div className="flex items-baseline text-[#1a1a1a]">
                                        <span className="text-4xl sm:text-5xl font-bold tracking-tight">
                                            ${`${billingType === "monthly" ? plan.price[0] : plan.price[1]}`}
                                        </span>
                                        <span className="text-[#1a1a1a] text-sm ml-2">
                                            /mo
                                        </span>
                                    </div>
                                </div>


                                {/* Features List */}
                                <ul className="space-y-4 mb-5">
                                    {plan.features.map((feature, fIndex) => (
                                        <li
                                            key={fIndex}
                                            className={`flex flex-col items-start gap-3 text-sm ${plan.popular ? "font-[550]" : "font-medium"} tracking-wide
                                                }`}
                                        >
                                            <h3 className="text-md font-bold text-black uppercase tracking-tight">{feature.name}</h3>
                                            <hr className={`${plan.popular ? "border-[#9fff00]/20" : "border-[#1c2f00]/30"} w-[80%] text-center`} />

                                            <ul className="space-y-2 ml-4">
                                                {feature.subFeatures.map((subFeature, sfIndex) => (
                                                    <li
                                                        key={sfIndex}
                                                        className={`flex items-center gap-2 text-sm ${plan.popular ? "font-[450]" : "font-medium"} tracking-wide`}
                                                    >
                                                        <span><Check stroke="black" size={12} /></span>
                                                        <span className="text-md text-[#161d1f] tracking-wide">{subFeature.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button */}
                            <Link
                                href="/subscription"
                                className={`w-full text-center py-4 px-6 rounded-2xl font-bold text-sm tracking-wide transition-all duration-200 ${plan.popular ? "bg-gradient-to-b from-[#e2f7c1] to-[#8bdd0a] hover:bg-[#68c617] text-[#031d10] shadow-[0_4px_12px_rgba(118,225,27,0.25)] hover:scale-[1.01]" : "bg-white border border-[#7d7d7d] text-[#1f1f1f] hover:bg-zinc-50 hover:border-zinc-300"
                                    }`}
                            >
                                {plan.buttonText}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    )
}