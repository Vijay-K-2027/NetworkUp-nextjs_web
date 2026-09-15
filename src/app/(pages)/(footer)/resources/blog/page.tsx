"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    id: string;
    category: string;
    categoryTag: string;
    title: string;
    description: string;
    author: {
        name: string;
        avatar: string;
        avatarColor?: string;
        avatarImage?: string;
    };
    readTime: string;
    image: string;
    featured?: boolean;
}

const categories = [
    "All",
    "LinkedIn Outreach",
    "Lead Generation",
    "AI & Automation",
    "Sales Strategy",
    "Campaigns",
    "Product",
];

const featuredPost: BlogPost = {
    id: "linkedin-outreach",
    category: "AI & AUTOMATION",
    categoryTag: "AI & Automation",
    title: "How AI is Changing LinkedIn Outreach in 2027",
    description:
        "Explore how AI is transforming prospecting, personalization and outreach, and what it means for modern sales teams.",
    author: {
        name: "Ananya Sharma",
        avatar: "AS",
        avatarColor: "bg-emerald-600",
        avatarImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    },
    readTime: "8 min read",
    image: "/footer/resources/blog/Article1.png",
    featured: true,
};

const latestPosts: BlogPost[] = [
    {
        id: "linkedin-connection-message",
        category: "LINKEDIN OUTREACH",
        categoryTag: "LinkedIn Outreach",
        title: "15 LinkedIn Connection Message Templates That Actually Work",
        description: "Copy, personalize and start more conversations that convert.",
        author: {
            name: "Rohit Verma",
            avatar: "RV",
            avatarColor: "bg-blue-600",
            avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        },
        readTime: "7 min read",
        image: "/footer/resources/blog/Article2.png",
    },
    {
        id: "ideal-customer-profile",
        category: "LEAD GENERATION",
        categoryTag: "Lead Generation",
        title: "How to Build an Ideal Customer Profile (ICP) That Converts",
        description: "A practical framework to define and target the right prospects.",
        author: {
            name: "Rashi Gupta",
            avatar: "RG",
            avatarColor: "bg-purple-600",
            avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
        },
        readTime: "8 min read",
        image: "/footer/resources/blog/Article3.png",
    },
    {
        id: "ai-personalization",
        category: "AI & AUTOMATION",
        categoryTag: "AI & Automation",
        title: "How AI Personalization Can 3x Your Reply Rates",
        description: "Use AI to write personalized messages that feel human and drive replies.",
        author: {
            name: "Vanshi Singh",
            avatar: "VS",
            avatarColor: "bg-amber-600",
            avatarImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
        },
        readTime: "6 min read",
        image: "/footer/resources/blog/Article4.png",
    },
    {
        id: "outreach-playbook",
        category: "CAMPAIGNS & PLAYBOOKS",
        categoryTag: "Campaigns",
        title: "The SaaS LinkedIn Outreach Playbook",
        description: "A step-by-step playbook to build, launch and scale winning campaigns.",
        author: {
            name: "Aarav Tiwari",
            avatar: "AT",
            avatarColor: "bg-teal-600",
            avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
        },
        readTime: "10 min read",
        image: "/footer/resources/blog/Article5.png",
    },
];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts =
        selectedCategory === "All"
            ? latestPosts
            : latestPosts.filter(
                (post) =>
                    post.categoryTag.toLowerCase() === selectedCategory.toLowerCase() ||
                    post.category.toLowerCase().includes(selectedCategory.toLowerCase())
            );

    return (
        <div className="w-full bg-[#fafdf8]/50 min-h-screen relative overflow-hidden py-8 sm:py-13 px-20">
            <div className="w-full max-w-9xl mx-auto relative z-10 flex flex-col items-center">
                {/* 1. HERO HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto flex flex-col items-center"
                >
                    {/* Top Pill Badge */}
                    <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#b8ff84]/30 text-[#357600] text-[11px] font-bold tracking-widest uppercase mb-4 shadow-2xs">
                        BLOG
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-[#000000] tracking-tight leading-[1.12]">
                        Resources for <br className="hidden sm:inline" />
                        <span className="text-[#316b00]">smarter</span> outreach
                    </h1>

                    {/* Subtitle */}
                    <p className="my-4 sm:my-5 text-xs sm:text-sm md:text-base text-[#181f11] font-normal leading-relaxed max-w-[550px] mx-auto">
                        Strategies, playbooks, and AI-powered insights to help you find better
                        prospects, automate outreach, and turn conversations into opportunities.
                    </p>
                </motion.div>

                {/* MAIN CONTENT WRAPPER: WITH RADIAL GLOW BEHIND */}
                <div className="relative w-full max-w-8xl mx-10 mt-10 sm:mt-12 flex justify-center">
                    {/* Ambient Radial Gradient Glow centered behind top/left/right of box */}
                    <div
                        className="absolute -top-5 sm:-top-10 -left-6 sm:-left-10 -right-6 sm:-right-10 h-[100%] bg-[radial-gradient(ellipse_85%_65%_at_50%_35%,rgba(124,235,42,0.45)_0%,rgba(124,235,42,0.20)_45%,rgba(124,235,42,0.06)_65%,transparent_80%)] blur-2xl sm:blur-3xl pointer-events-none z-0"
                    />

                    {/* Overall White Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-full bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-8 md:p-10 border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] relative z-10"
                    >
                        {/* 2. CATEGORY FILTER TABS */}
                        <div className="w-full bg-[#ffffff] flex flex-wrap items-center justify-start gap-2 sm:gap-2.5">
                            {categories.map((category) => {
                                const isActive = selectedCategory === category;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${isActive
                                            ? "bg-[#191c1e] text-[#f7f9fb] shadow-xs"
                                            : "bg-[#f2f4f6] hover:bg-[#eaecee] text-[#3f4a36]"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>

                        {/* 3. FEATURED ARTICLE SECTION */}
                        <div className="w-full mt-8 sm:mt-10">
                            <h2 className="text-xl sm:text-3xl font-bold text-[#181d13] tracking-tight mb-5">
                                Featured article
                            </h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="w-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#69bc00]/50 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-all group"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#ffffff]">
                                    {/* Left Article Info */}
                                    <div className="lg:col-span-6 flex flex-col justify-between h-full">
                                        <div>
                                            <span className="text-[11px] sm:text-xs font-bold text-[#3a6a00] tracking-wider uppercase">
                                                {featuredPost.category}
                                            </span>
                                            <h3 className="text-2xl sm:text-3xl md:text-[35px] font-bold text-[#181d13] mt-4 tracking-tight leading-[1.15] group-hover:text-[#406900] transition-colors">
                                                {featuredPost.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm md:text-base text-[#414a37] font-normal leading-relaxed mt-5 max-w-xl">
                                                {featuredPost.description}
                                            </p>
                                        </div>

                                        <div className="mt-3 sm:mt-4 pt-5 border-t border-[#c0cab2]/50">
                                            {/* Author & Read Time */}
                                            <div className="flex items-center gap-3">
                                                {featuredPost.author.avatarImage ? (
                                                    <Image
                                                        src={featuredPost.author.avatarImage}
                                                        alt={featuredPost.author.name}
                                                        width={36}
                                                        height={36}
                                                        className="w-9 h-9 rounded-full object-cover shrink-0"
                                                    />
                                                ) : (
                                                    <div
                                                        className={`w-9 h-9 rounded-full ${featuredPost.author.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0`}
                                                    >
                                                        {featuredPost.author.avatar}
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="text-sm sm:text-lg font-bold text-[#181d13]">
                                                        {featuredPost.author.name}
                                                    </div>
                                                    <div className="text-[13px] text-[#414a37] font-medium -mt-1">
                                                        {featuredPost.readTime}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Read Article CTA */}
                                            <Link
                                                href={`/resources/blog/${featuredPost.id}`}
                                                className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#3a6a00] hover:text-[#356221] transition-colors group/cta cursor-pointer"
                                            >
                                                <span>Read article</span>
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Featured Image */}
                                    <div className="lg:col-span-6 w-full flex items-center justify-center">
                                        <Image
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            width={560}
                                            height={380}
                                            className="w-full h-auto object-contain max-h-[340px]"
                                            priority
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 4. LATEST ARTICLES SECTION */}
                        <div className="w-full mt-12 sm:mt-16">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-[#181d13] tracking-tight">
                                    Latest articles
                                </h2>
                                <button
                                    onClick={() => setSelectedCategory("All")}
                                    className="text-xs font-semibold text-[#3a6a00] hover:underline flex items-center gap-1 tracking-wide cursor-pointer"
                                >
                                    <span>View all articles</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            {/* 2x2 Article Cards Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
                                <AnimatePresence mode="popLayout">
                                    {filteredPosts.map((post, idx) => (
                                        <motion.div
                                            key={post.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.35, delay: idx * 0.05 }}
                                            className="p-[1px] bg-gradient-to-br from-[#6dc104] via-[#ffffff] via-22% to-[#69bc00] rounded-2xl sm:rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 group"
                                        >
                                            <div className="bg-white rounded-[inherit] p-5 sm:p-6 md:p-7 h-full">
                                                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center h-full">
                                                    {/* Left Column: Category, Title, Description, Author, Read Link */}
                                                    <div className="sm:col-span-7 flex flex-col justify-between h-full">
                                                        <div className="w-full max-w-[250px]">
                                                            <span className="text-[11px] font-bold text-[#3a6a00] tracking-wider uppercase">
                                                                {post.category}
                                                            </span>
                                                            <h3 className="text-lg sm:text-xl font-bold text-[#181d13] mt-3 leading-snug group-hover:text-[#406900] transition-colors">
                                                                {post.title}
                                                            </h3>
                                                            <p className="text-lg text-[#414a34] font-normal leading-relaxed mt-4">
                                                                {post.description}
                                                            </p>
                                                        </div>

                                                        {/* Author & Read Article */}
                                                        <div className="mt-5 sm:mt-6">
                                                            <div className="flex items-center gap-2.5">
                                                                {post.author.avatarImage ? (
                                                                    <Image
                                                                        src={post.author.avatarImage}
                                                                        alt={post.author.name}
                                                                        width={28}
                                                                        height={28}
                                                                        className="w-7 h-7 rounded-full object-cover shrink-0"
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        className={`w-7 h-7 rounded-full ${post.author.avatarColor} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}
                                                                    >
                                                                        {post.author.avatar}
                                                                    </div>
                                                                )}
                                                                <div>
                                                                    <div className="text-sm font-bold text-[#181d13]">
                                                                        {post.author.name}
                                                                    </div>
                                                                    <div className="text-[13px] text-[#414a37] font-medium">
                                                                        {post.readTime}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <Link
                                                                href={`/resources/blog/${post.id}`}
                                                                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#3a6a00] hover:text-[#2d4900] transition-colors group/link cursor-pointer"
                                                            >
                                                                <span>Read article</span>
                                                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    {/* Right Column: Image */}
                                                    <div className="sm:col-span-5 w-full flex items-center justify-center h-full">
                                                        <Image
                                                            src={post.image}
                                                            alt={post.title}
                                                            width={300}
                                                            height={210}
                                                            className="w-full h-auto object-contain max-h-[220px] sm:max-h-[240px]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}


