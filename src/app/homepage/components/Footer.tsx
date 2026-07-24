"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { CheckIcon, Star } from "lucide-react";
import Aipage from "./contact/Aipage";
import { motion, AnimatePresence } from "framer-motion";

const models = [
    { name: "LinkedIn", icon: "/linkedin.svg" },
    { name: "Instagram", icon: "/instagram.svg" },
    { name: "Facebook", icon: "/facebook.svg" },
];

const productLinks = ["Features", "Outreach", "Inbox", "Lead Finder", "Campaigns", "Roadmap"];
const solutionsLinks = ["For Sales Teams", "For Agencies", "For Recruiters", "For Startups", "For Marketing Teams"];
const resourcesLinks = ["Blog", "Help Center", "Guides", "API Documentation", "Video Tutorials"];
const compareLinks = ["Waalaxy", "Dripify", "Expandi", "Apollo.io", "Sales Navigator"];
const companyLinks = ["About Us", "Privacy Policy", "Terms of Service", "Contact Us"];
const checklistItems = ["Product updates", "Growth strategies"];

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
                    <div className="md:col-span-1 lg:col-span-4 flex flex-col justify-between ">
                        <div>
                            {/* Logo */}
                            <div className="flex items-center gap-2.5 mb-6">
                                <Image
                                    src="/Logo.svg"
                                    alt="NetworkUp Logo"
                                    width={32}
                                    height={32}
                                />
                                <span className="text-xl font-bold text-[#6CB531] font-[family-name:var(--font-comfortaa)]">
                                    NetworkUp<span className="font-normal">.io</span>
                                </span>
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
                                Find the right people, automate outreach, manage conversations, and turn connections into opportunities.
                            </p>

                            {/* Newsletter */}
                            <div className="mb-8">
                                <h4 className="text-[10px] font-extrabold text-[#76e11b] tracking-wide uppercase mb-4">
                                    Stay Updated With Growth Insights
                                </h4>
                                <div className="flex flex-row justify-between w-full max-w-[340px]">
                                    <div className=" max-w-[290px] w-full flex items-center mb-4">
                                        <input type="email" placeholder="Enter your email" className="w-full bg-zinc-100 border border-zinc-200 rounded-lg px-3 py-2 pr-12 text-sm outline-none focus:border-[#76e11b] focus:ring-1 focus:ring-[#76e11b]/20" />
                                    </div>
                                    <button className="bg-[#76e11b] hover:bg-[#68c617] text-[#031d10] h-9.5 w-9.5 rounded-lg flex items-center justify-center shadow-sm transition-transform">
                                        <ArrowRightIcon size={16} />
                                    </button>
                                </div>


                                {/* Checklist */}
                                <div className="flex flex-col gap-2">
                                    {checklistItems.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-xs text-black">
                                            <CheckIcon size={16} stroke="#76e11b" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[10px] text-black font-medium block mt-3">
                                    No spam. Unsubscribe anytime.
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {models.map((model, index) => (
                                <button key={index} className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:opacity-90 hover:-translate-y-1 shadow-sm transition-all">
                                    <Image src={model.icon} alt={`${model.name} Icon`} width={24} height={24} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-8">
                        {/* Column 1: Product */}
                        <div>
                            <h5 className="text-md font-extrabold text-[#356221]/80 tracking-normal mb-5">
                                Product
                            </h5>
                            <ul className="space-y-3.5 text-sm font-medium text-black/80">
                                {productLinks.map((label) => (
                                    <li key={label}>
                                        <a href="#" className="hover:text-green-600 transition-colors">{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Solutions */}
                        <div>
                            <h5 className="text-md font-extrabold text-[#356221]/80 tracking-normal mb-5">
                                Solutions
                            </h5>
                            <ul className="space-y-3.5 text-sm font-medium text-black/80">
                                {solutionsLinks.map((label) => (
                                    <li key={label}>
                                        <a href="#" className="hover:text-green-600 transition-colors">{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Resources */}
                        <div>
                            <h5 className="text-md font-extrabold text-[#356221]/80 tracking-normal mb-5">
                                Resources
                            </h5>
                            <ul className="space-y-3.5 text-sm font-medium text-black/80">
                                {resourcesLinks.map((label) => (
                                    <li key={label}>
                                        <a href="#" className="hover:text-green-600 transition-colors">{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Compare */}
                        <div className="col-span-1 sm:col-span-1 md:col-span-2">
                            <h5 className="text-md font-extrabold text-[#356221]/80 tracking-normal mb-5">
                                Compare
                            </h5>
                            <ul className="space-y-3.5 text-[15px] font-medium text-black/80 break-words">
                                {compareLinks.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-green-600 transition-colors block">
                                            NetworkUp.io vs {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#356221] hover:text-[#76e11b] mt-5 transition-colors">
                                <span>See all comparisions</span>
                                <ArrowRightIcon size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Column 5: Company & AI Widget inside Sitemap Container */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-15 w-full">
                        <div className="flex-1">
                            <h5 className="text-md font-extrabold text-[#356221]/80 tracking-normal mb-5">
                                Company
                            </h5>
                            <ul className="space-y-3.5 text-sm font-medium text-black/80">
                                {companyLinks.map((label) => (
                                    <li key={label}>
                                        <a href="#" className="hover:text-green-600 transition-colors">{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-zinc-200/60 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="text-md font-medium text-gray-400 tracking-wide text-center">
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
                                className="fixed bottom-12 right-6 z-50 flex flex-col items-end shadow-2xl rounded-2xl overflow-hidden bg-[#02140b]"
                            >
                                <Aipage onClose={() => setIsSidebarOpen(false)} />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Floating AI Button (Fixed at the bottom-right, visible on all screens of the homepage when chat is closed) */}
                {!isSidebarOpen && (
                    <div className="fixed bottom-6 right-6 z-40">
                        <button
                            className="hover:scale-105 transition-transform duration-300 cursor-pointer shadow-2xl rounded-full overflow-hidden"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Image src="/AI-panel.png" alt="AI Panel" width={125} height={125} className="w-[100px] sm:w-[125px] h-auto" />
                        </button>
                    </div>
                )}
            </div>
        </footer>
    );
}