"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRightIcon, ChartNoAxesCombined, MessageCircleMoreIcon, Search, SendIcon } from "lucide-react";
import { CheckIcon } from "lucide-react";
import Aipage from "./contact/Aipage";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


const productLinks = [
    { name: "Features", href: "/product/features" },
    { name: "Outreach", href: "/product/outreach" },
    { name: "Convobox", href: "/product/convobox" },
    { name: "Lead Finder", href: "/product/lead" },
    { name: "Campaigns", href: "/product/campaigns" },
];

const solutionsLinks = [
    { name: "For Sales Teams", href: "/solutions/sales-team" },
    { name: "For Agencies", href: "/solutions/agencies" },
    { name: "For Recruiters", href: "/solutions/recruiters" },
    { name: "For Startups", href: "/solutions/startups" },
    { name: "For Marketing Teams", href: "/solutions/marketing-team" },
];

const resourcesLinks = [
    { name: "Blog", href: "/resources/blog" },
    { name: "Help Center", href: "/resources/help-center" },
    { name: "Guides", href: "/resources/product-manual" },
    { name: "API Documentation", href: "/resources/api-documentation" },
];

const compareLinks = [
    { name: "Sendpilot", href: "/compare/sendpilot" },
    { name: "Waalaxy", href: "/compare/waalaxy" },
    { name: "Heyreach", href: "/compare/heyreach" },
    { name: "Dripify", href: "/compare/dripify" },
    { name: "Expandi", href: "/compare/expandi" },
    { name: "Reachy", href: "/compare/reachy" },
    { name: "Apollo.io", href: "/compare/apollo" },
    { name: "Lemlist", href: "/compare/lemlist" },
    { name: "Sales Navigator", href: "/compare/sales-navigator" },
];

const companyLinks = [
    { name: "About Us", href: "/aboutus" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact Us", href: "/company/contact-us" },
];

const checklistItems = ["Product updates", "Growth strategies"];

const models = [
    { name: "LinkedIn", icon: "/footer/linkedin.svg", href: "https://www.linkedin.com/company/networkup-io/about/?viewAsMember=true" },
    { name: "Instagram", icon: "/footer/instagram.svg", href: "https://www.instagram.com/networkup.io/" },
    { name: "Facebook", icon: "/footer/facebook.svg", href: "https://www.facebook.com/profile.php?id=61593428116471" },
];

const flowChart = [
    {
        icon: "/footer/Search.png",
        title: "Find Leads",
    },
    {
        icon: "/footer/Send.png",
        title: "Create Campaigns",
    },
    {
        icon: "/footer/Message.png",
        title: "Start Conversations",
    },
    {
        icon: "/footer/BarGraph.png",
        title: "Drive Growth",
    }
];

export default function Footer() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleToggle = () => {
            setIsSidebarOpen(prev => !prev);
        };
        window.addEventListener("toggle-ask-ai", handleToggle);
        return () => window.removeEventListener("toggle-ask-ai", handleToggle);
    }, []);

    return (
        <footer className="w-full bg-[#fafcf7] pt-24 pb-6 px-6 lg:px-8 border-t border-zinc-200/50 relative z-50">
            <div className="mx-auto max-w-7xl">

                {/* Upper Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 mb-10">

                    {/* Left Column: Brand Info & Newsletter */}
                    <div className="md:col-span-1 lg:col-span-4 flex flex-col justify-between">
                        <div>
                            {/* Logo */}
                            <div className="flex items-center gap-4 mb-6">
                                <Image
                                    src="/brand/Logo.svg"
                                    alt="NetworkUp Logo"
                                    width={32}
                                    height={32}
                                    style={{ height: "auto" }}
                                />
                                <span className="text-xl font-bold text-[#689e24] font-[family-name:var(--font-comfortaa)] scale-120">
                                    NetworkUp<span className="font-normal">.io</span>
                                </span>
                            </div>

                            <p className="text-[#21262d] text-xs leading-relaxed mb-8">
                                Find the right people, automate outreach, manage <br />conversations, and turn connections into opportunities.
                            </p>

                            {/* Newsletter */}
                            <div className="mb-8">
                                <h4 className="text-[10px] font-bold text-[#71d400] tracking-wider uppercase mb-4">
                                    Stay Updated With Growth Insights
                                </h4>
                                <div className="flex flex-row items-center justify-between gap-1 sm:gap-2.5 w-full py-2">
                                    {flowChart.map((object, index) => {
                                        const IconComponent = object.icon;
                                        return (
                                            <React.Fragment key={index}>
                                                <motion.div
                                                    className="flex flex-col items-center gap-y-1.5 sm:gap-y-2 text-center w-[22%] pl-0"
                                                    initial={{ opacity: 0, scale: 0.92, y: 10 }}
                                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: 0.25 + index * 0.2 }}
                                                >
                                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center shrink-0 bg-transparent border-0 p-0 shadow-none">
                                                        <Image
                                                            src={IconComponent}
                                                            alt="Icon"
                                                            width={32}
                                                            height={32}
                                                            className="object-contain w-full h-full"
                                                        />
                                                    </div>
                                                    <h4 className="text-[9px] sm:text-xs text-[#6b7280] font-semibold lg:font-normal leading-tight">{object.title}</h4>
                                                </motion.div>
                                                {index !== flowChart.length - 1 && (
                                                    <motion.div
                                                        className="text-[#71EB34] text-sm sm:text-lg lg:text-xl font-bold my-0 shrink-0 select-none"
                                                        initial={{ opacity: 0, scale: 0.6 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.3, delay: 0.25 + index * 0.2 + 0.1 }}
                                                    >
                                                        →
                                                    </motion.div>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                                <Link href="/subscription" className="w-full my-3 inline-flex items-center justify-center bg-gradient-to-b from-[#b6ff80] to-[#7ceb2a] text-[#000000] font-bold text-sm sm:text-base py-3 px-10 rounded-2xl hover:scale-[1.03] transition-all duration-200">
                                    Start Free Trial ➜
                                </Link>

                                {/* Checklist */}
                                <div className="flex flex-col gap-2">
                                    {checklistItems.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-xs text-[#21262d]">
                                            <CheckIcon size={16} stroke="#71d400" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[10px] text-[#4c5246] font-medium block mt-3">
                                    No spam. Unsubscribe anytime.
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {models.map((model, index) => (
                                <a
                                    key={index}
                                    href={model.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-black bg-white hover:opacity-90 hover:-translate-y-1 shadow-sm transition-all"
                                >
                                    <Image src={model.icon} alt={`${model.name} Icon`} width={24} height={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-8">
                        {/* Column 1: Product */}
                        <div>
                            <h5 className="text-md font-extrabold text-[#3e7300] tracking-normal mb-5">
                                Product
                            </h5>
                            <ul className="space-y-3.5 text-sm font-medium text-[#060c00]">
                                {productLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-green-600 transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Solutions */}
                        <div>
                            <h5 className="text-md font-extrabold text-[#3e7300] tracking-normal mb-5">
                                Solutions
                            </h5>
                            <ul className="space-y-3.5 text-sm font-medium text-[#060c00]">
                                {solutionsLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-green-600 transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Resources */}
                        <div>
                            <h5 className="text-md font-extrabold text-[#3e7300] tracking-normal mb-5">
                                Resources
                            </h5>
                            <ul className="space-y-3.5 text-sm font-medium text-[#060c00]">
                                {resourcesLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-green-600 transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Compare */}
                        <div className="col-span-1 sm:col-span-1 md:col-span-2">
                            <h5 className="text-md font-extrabold text-[#3e7300] tracking-normal mb-5">
                                Compare
                            </h5>
                            <ul className="space-y-3.5 text-[15px] font-medium text-[#060c00] break-words">
                                {compareLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-green-600 transition-colors block">
                                            NetworkUp.io vs {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/compare/compare-all" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4C5246] hover:text-[#356221] mt-5 transition-colors">
                                <span>NetworkUp vs All</span>
                                <ArrowRightIcon size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* Column 5: Company & AI Widget inside Sitemap Container */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-15 w-full">
                        <div className="flex-1">
                            <h5 className="text-md font-extrabold text-[#3e7300] tracking-normal mb-5">
                                Company
                            </h5>
                            <ul className="space-y-3.5 text-sm font-medium text-[#060c00]">
                                {companyLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-green-600 transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-200/60 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="text-md font-medium text-[#4c5246] tracking-wide text-center">
                        &copy; 2026 NetworkUp.io. All rights reserved.
                    </div>
                </div>

                <AnimatePresence>
                    {isSidebarOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-40 bg-black/15 backdrop-blur-[1px]"
                                onClick={() => setIsSidebarOpen(false)}
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="fixed bottom-12 right-6 z-50 flex flex-col items-end shadow-2xl rounded-2xl overflow-hidden bg-[#02140b] h-[75vh]"
                            >
                                <Aipage onClose={() => setIsSidebarOpen(false)} />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Floating AI Button (Fixed at the bottom-right, visible on all screens of the homepage when chat is closed) */}
                {!isSidebarOpen && (
                    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
                        <button
                            className="hover:scale-105 transition-transform duration-300 cursor-pointer shadow-2xl rounded-full overflow-hidden"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Image
                                src="/footer/AI-panel.png"
                                alt="AI Panel"
                                width={125}
                                height={125}
                                className="w-[65px] sm:w-[90px] md:w-[110px] lg:w-[125px]"
                                style={{ height: "auto" }}
                            />
                        </button>
                    </div>
                )}
            </div>
        </footer>
    );
}