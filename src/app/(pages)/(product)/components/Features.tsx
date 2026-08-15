"use client";

import React from "react";
import { motion } from "framer-motion";

import { cardVariants, containerVariants } from '@/app/homepage/assets/icons'
import { SmartProspectingIcon, RelationshipIntelIcon, UnifiedInboxIcon, CampaignBuilderIcon, CampaignAnalyticsIcon, LeadEnrichmentIcon, IntegrationsIcon, AccountProtectionIcon } from "@/app/homepage/assets/icons";
import { BrainIcon, Database, UserSearch } from "lucide-react";
import { BsInboxFill, BsMagic, BsShieldLock } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";
import { FaInbox, FaMagic } from "react-icons/fa";
import { GrIntegration } from "react-icons/gr";
import { GiRelationshipBounds } from "react-icons/gi";

const features = [
    {
        icon: UserSearch,
        title: "Smart Prospecting",
        description: "AI filters that identify high-intent leads based on real-time professional signals."
    },
    {
        icon: UnifiedInboxIcon,
        title: "Unified Inbox",
        description: "Manage every LinkedIn conversation across multiple accounts in one central view."
    },
    {
        icon: FaMagic,
        title: "Campaign Builder",
        description: "Drag-and-drop workflow sequences with intelligent branching logic and delays."
    },
    {
        icon: CampaignAnalyticsIcon,
        title: "Campaign Analytics",
        description: "Deep-dive metrics on conversion rates, engagement, and team performance."
    },
    {
        icon: BrainIcon,
        title: "Relationship Intel",
        description: "Contextual insights about your leads before you ever hit send."
    },
    {
        icon: Database,
        title: "Lead Enrichment",
        description: "Automatically verify emails and phone numbers for your ideal targets."
    },
    {
        icon: IntegrationsIcon,
        title: "Integrations",
        description: "Native sync with HubSpot, Salesforce, and 2,000+ apps via Zapier."
    },
    {
        icon: BsShieldLock,
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
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="flex flex-col bg-white p-8 rounded-[1rem] border-2 border-[#defad0]/20 shadow-[inset_2px_0_0_0_rgba(222,250,208,1),_inset_0_-2px_0_0_rgba(222,250,208,1)] transition-shadow duration-300 hover:shadow-[0_12px_30px_-8px_rgba(53,98,33,0.08)] group"
                            >
                                <div className="absolute inset-0 pointer-events-none rounded-[1rem] border-2 border-[#defad0] [mask-image:linear-gradient(to_top_left,_black_50%,_transparent_50%)]"></div>

                                <div className="flex items-center justify-start mb-6">
                                    <div className="transition-transform duration-300 group-hover:scale-110">
                                        <Icon size={30} color="green" />
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
