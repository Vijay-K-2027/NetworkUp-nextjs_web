"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const popularSearches = ["API keys", "Billing cycle", "Webhook limits"];

export default function HelpCenterHeader({
    searchQuery = "",
    onSearchChange,
}: {
    searchQuery?: string;
    onSearchChange?: (val: string) => void;
}) {
    const [localQuery, setLocalQuery] = useState(searchQuery);
    const router = useRouter();

    const handleQueryChange = (val: string) => {
        setLocalQuery(val);
        if (onSearchChange) {
            onSearchChange(val);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!onSearchChange && localQuery.trim()) {
            router.push(`/resources/help-center?q=${encodeURIComponent(localQuery.trim())}`);
        }
    };

    const handleTagClick = (tag: string) => {
        handleQueryChange(tag);
        if (!onSearchChange) {
            router.push(`/resources/help-center?q=${encodeURIComponent(tag)}`);
        }
    };

    return (
        <div className="w-full relative overflow-hidden pt-10 sm:pt-16 pb-6 px-4 sm:px-6 lg:px-8">
            {/* Top Ambient Glow Gradient */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[420px] bg-gradient-to-b from-[#7ceb2a]/20 to-[#7ceb2a]/0 pointer-events-none -z-0"
            />

            <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col items-center">
                {/* 1. HERO HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto pt-2 sm:pt-6"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191c1e] tracking-tight leading-tight">
                        How can we help you?
                    </h1>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#3f4a36] font-normal leading-relaxed max-w-2xl mx-auto">
                        Search our knowledge base or browse categories below to find answers to your questions.
                    </p>
                </motion.div>

                {/* 2. SEARCH BAR & POPULAR TAGS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full max-w-2xl mt-8 sm:mt-10"
                >
                    {/* Search Input Box */}
                    <form onSubmit={handleSearch} className="relative w-full">
                        <div className="relative flex items-center w-full bg-white rounded-full border border-gray-200/90 shadow-sm hover:shadow-md focus-within:shadow-md focus-within:border-[#71EB34] transition-all p-1.5 sm:p-2">
                            <div className="pl-3 sm:pl-4 flex items-center justify-center shrink-0">
                                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#3f4a36]" />
                            </div>
                            <input
                                type="text"
                                value={localQuery}
                                onChange={(e) => handleQueryChange(e.target.value)}
                                placeholder="Search articles, topics, and guides..."
                                className="w-full bg-transparent pl-3 pr-2 text-xs sm:text-sm md:text-base text-[#3f4a36] placeholder-[#3f4a36]/50 focus:outline-hidden"
                            />
                            <button
                                type="submit"
                                className="shrink-0 bg-gradient-to-b from-[#b4ff7c] to-[#7ceb2a] hover:bg-[#7ceb2a] text-[#173300] font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xs cursor-pointer"
                            >
                                Search
                            </button>
                        </div>
                    </form>

                    {/* Popular Searches */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[11px] sm:text-xs">
                        <span className="font-bold text-[#3f4a36] uppercase tracking-wider text-[10px] sm:text-[11px]">
                            POPULAR SEARCHES:
                        </span>
                        {popularSearches.map((tag) => (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => handleTagClick(tag)}
                                className="bg-[#edffd5] hover:bg-[#e2f3d4] text-[#3f4a36] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium transition-colors cursor-pointer border border-[#d6eed0]/60"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
