"use client";

import React, { useState } from "react";
import {
    Rocket,
    Megaphone,
    Users,
    CreditCard,
    Workflow,
    HelpCircle,
    ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import HelpCenterHeader from "./components/HelpCenterHeader";

interface TopicCard {
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    href: string;
}

const topicCards: TopicCard[] = [
    {
        id: "getting-started",
        icon: Rocket,
        title: "Getting Started",
        description: "Learn the basics, set up your account, and make your first API call in minutes.",
        href: "/resources/help-center/getting-started",
    },
    {
        id: "campaigns",
        icon: Megaphone,
        title: "Campaigns",
        description: "Create, manage, and optimize your automated outreach campaigns.",
        href: "/resources/help-center/campaigns",
    },
    {
        id: "lead-management",
        icon: Users,
        title: "Lead Management",
        description: "Organize contacts, segment audiences, and track lead lifecycle events.",
        href: "/resources/help-center/lead-management",
    },
    {
        id: "account-billing",
        icon: CreditCard,
        title: "Account & Billing",
        description: "Manage team roles, update payment methods and view usage statistics.",
        href: "/resources/help-center/account-billing",
    },
    {
        id: "api-integrations",
        icon: Workflow,
        title: "API & Integrations",
        description: "Connect NetworkUp to your tech stack using webhooks and REST endpoints.",
        href: "/resources/help-center/api-integrations",
    },
    {
        id: "faqs",
        icon: HelpCircle,
        title: "FAQs",
        description: "Find answers to common questions about NetworkUp, campaigns, and getting started.",
        href: "/resources/help-center/faqs",
    },
];

export default function HelpCenterPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCards = topicCards.filter((card) =>
        searchQuery.trim() === ""
            ? true
            : card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              card.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full bg-[#fafdf8]/50 min-h-screen relative overflow-hidden pb-16">
            {/* Shared Search Header */}
            <HelpCenterHeader
                searchQuery={searchQuery}
                onSearchChange={(q) => setSearchQuery(q)}
            />

            {/* BROWSE BY TOPIC SECTION */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] tracking-tight">
                        Browse by Topic
                    </h2>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="text-xs sm:text-sm font-semibold text-[#406900] hover:underline cursor-pointer"
                        >
                            Clear search
                        </button>
                    )}
                </div>

                {/* 3x2 Topic Cards Grid */}
                {filteredCards.length === 0 ? (
                    <div className="w-full bg-white rounded-3xl p-10 border border-gray-200/80 text-center">
                        <p className="text-base text-gray-600 font-medium">
                            No topics found matching &quot;{searchQuery}&quot;.
                        </p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#406900] hover:underline cursor-pointer"
                        >
                            View all topics
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCards.map((card, idx) => {
                            const IconComponent = card.icon;
                            return (
                                <Link key={card.id} href={card.href} className="block group">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: idx * 0.06 }}
                                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                        className="h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 border border-gray-200/80 hover:border-[#71EB34] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                                    >
                                        <div>
                                            {/* Icon Box */}
                                            <div className="w-12 h-12 rounded-xl bg-[#7ceb2a]/20 flex items-center justify-center text-[#316b00] group-hover:bg-[#8bfa00]/25 transition-colors">
                                                <IconComponent className="w-6 h-6 stroke-[2.2] text-[#316b00]" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg sm:text-xl font-bold text-[#191c1e] mt-5 tracking-tight group-hover:text-[#406900] transition-colors flex items-center justify-between">
                                                <span>{card.title}</span>
                                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#406900]" />
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-[#3f4a36] font-normal leading-relaxed mt-2.5">
                                                {card.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
