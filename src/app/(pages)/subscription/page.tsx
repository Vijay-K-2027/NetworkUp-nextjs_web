"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    const router = useRouter();
    const [billingType, setBillingType] = useState('monthly');

    const switchBilling = () => {
        setBillingType(billingType === 'monthly' ? 'yearly' : 'monthly');
    }

    return (
        <section id="pricing" className="w-full bg-[radial-gradient(circle_500px_at_center,_#002000_0%,_#002200_200px,_black_100%)] pb-20 pt-5 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl mb-20">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <Image
                        src="/Logo.svg"
                        alt="Logo"
                        width={70}
                        height={70}
                        style={{ height: "auto" }}
                    />
                    <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Choose the plan that <span className="text-[#76e11b]">scales</span> with you
                    </h2>
                    <p className="text-white text-sm sm:text-base w-full max-w-[650px] px-4 leading-relaxed">
                        Start with a plan that fits your needs. You can upgrade, downgrade or cancel anytime.
                    </p>

                    <div className="flex flex-row items-center mt-10 gap-3 mb-10">
                        <span className="text-[#68c617] font-bold text-sm sm:text-base leading-relaxed">Monthly</span>
                        <span>
                            <label className="relative inline-block w-[50px] h-[26px] cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="myToggle"
                                    role="switch"
                                    className="sr-only peer"
                                    onClick={switchBilling}
                                />
                                <span className="absolute inset-0 bg-[#c7f701]/60 rounded-[34px] transition-all duration-300 
                                    peer-checked:bg-[#76e11b]
                                    peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[#0056b3] peer-focus-visible:outline-offset-2
                                    before:absolute before:content-[''] before:h-5 before:w-5 before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-all before:duration-300
                                    peer-checked:before:translate-x-[24px]"
                                />
                            </label>
                        </span>
                        <span className="text-[#68c617]/50 text-sm sm:text-base font-bold leading-relaxed">Yearly</span>
                        <span className="text-[#68c617]/80 text-sm md:text-md font-bold leading-relaxed">(20% OFF)</span>
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
                            className={`relative h-fit flex flex-col justify-between p-8 sm:p-10 rounded-[1.75rem] bg-white/5 transition-all duration-300 ${plan.popular ? "scale-y-105 border-1 border-[#c7f701] shadow-[0_0_3px_2px_rgba(229,225,0,0.7)]" : "border border-zinc-200/30 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)]"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c7f701] text-black font-extrabold text-[10px] sm:text-[12px] tracking-wide uppercase py-2 px-6 rounded-full shadow-[0_4px_10px_rgba(118,225,27,0.3)]">
                                    Most Popular
                                </span>
                            )}

                            <div>
                                {/* Header Info */}
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-white mb-1.5 tracking-tight">
                                        {plan.name}
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        {plan.subtitle}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="flex flex-col mb-10 gap-1">
                                    <div className="flex items-baseline text-white">
                                        <span className="text-3xl sm:text-4xl tracking-tight">
                                            ${`${billingType === "monthly" ? plan.price[0] : plan.price[1]}`}
                                        </span>
                                        <span className="text-white text-sm ml-2">
                                            /mo
                                        </span>
                                    </div>
                                </div>


                                {/* Features List */}
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, fIndex) => (
                                        <li
                                            key={fIndex}
                                            className={`flex flex-col items-start gap-3 text-sm tracking-wide
                                                }`}
                                        >
                                            <h3 className="text-md text-white/80 uppercase tracking-tight">{feature.name}</h3>
                                            <hr className="border-white/30 -mt-2 w-[80%] text-center" />

                                            <ul className="space-y-2 ml-4">
                                                {feature.subFeatures.map((subFeature, sfIndex) => (
                                                    <li
                                                        key={sfIndex}
                                                        className={`flex items-center gap-2 text-sm ${plan.popular ? "font-[450]" : "font-medium"} tracking-wide`}
                                                    >
                                                        <span><Check stroke="#D8F9A8" size={12} /></span>
                                                        <span className="text-md text-[#D8F9A8]/70">{subFeature.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button */}
                            <button
                                className={`w-full py-4 px-6 rounded-2xl font-bold text-sm tracking-wide transition-all duration-200 ${plan.popular ? "bg-gradient-to-b from-white/80 to-[#76e11b] hover:bg-[#c7f701] text-[#031d10] hover:scale-[1.01]" : "bg-black border-1 border-zinc-200/50 text-white hover:bg-black-50 hover:-translate-y-1 hover:border-zinc-300"
                                    }`}
                                onClick={() => router.push("/login")}
                            >
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}