"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bot, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";


const navItems = [
    { label: "Product", id: "product", path: "/" },
    { label: "Solutions", id: "solutions", path: "/solutions" },
    { label: "AI Features", id: "workflow", path: "/ai-features" },
    { label: "Pricing", id: "pricing", path: "/pricing" },
    { label: "About Us", id: "aboutUs", path: "/aboutus" },
];

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="w-full bg-[#031c10] border-b border-emerald-950/40 px-4 py-2.5 text-right sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-white">
                    {/* Rocket Emoji Asset */}
                    <span role="img" aria-label="rocket" className="inline-block animate-pulse text-sm">
                        🚀
                    </span>

                    {/* Main Text Structure */}
                    <span className="text-zinc-200">
                        NEW — Smart AI Follow-ups are now available.
                    </span>

                    {/* Action Link Button */}
                    <a
                        href="#"
                        className="text-white underline underline-offset-4 font-semibold hover:text-emerald-400 transition-colors ml-1"
                    >
                        Check it out
                    </a>
                </div>
            </div>
            <div className="max-w-8xl mx-auto w-full flex h-20 items-center justify-between px-6 lg:px-8">

                {/* Left side: Logo and Desktop Navigation */}
                <div className="flex items-center gap-6 lg:gap-12">
                    <Link href="/" className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
                        <Image
                            src="/brand/Logo.svg"
                            alt="Logo"
                            width={38}
                            height={38}
                            style={{ height: "auto" }}
                        />
                        <span className="text-xl lg:text-2xl font-bold font-[family-name:var(--font-comfortaa)] scale-105 text-[#6CB531]">
                            NetworkUp<span className="text-[#6CB531] font-base font-normal tracking-tight">.io</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-4 lg:gap-8 text-sm lg:text-md font-medium text-gray-600">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.path;
                                return (
                                    <li key={index} className="h-20 flex items-center">
                                        <Link
                                            href={item.path}
                                            className={`text-[10px] lg:text-[15px] font-bold transition-all duration-200 pb-0.5 ${isActive
                                                ? "text-[#76e11b] border-b-2 border-black/60" : "text-gray-600 hover:text-[#356221] border-b-2 border-transparent"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                {/* Right side: Action Buttons & Mobile Menu Trigger */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link
                        href="/login"
                        className="hidden sm:inline-flex rounded-xl bg-white text-center px-4 lg:px-6 py-2.5 lg:py-3 text-xs font-bold text-black border border-black shadow transition hover:bg-lime-500 hover:border-none"
                    >
                        Login
                    </Link>

                    <Link
                        className="hidden sm:inline-flex rounded-xl bg-gradient-to-b from-[#71EB34] to-[#68c617] text-center px-4 lg:px-6 py-2.5 lg:py-3 text-xs font-semibold text-black shadow transition hover:bg-lime-500"
                        href="/subscription"
                    >
                        Start Free Trial
                    </Link>

                    <button
                        className="flex flex-row gap-1.5 sm:gap-2 items-center rounded-xl px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black shadow transition hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            window.dispatchEvent(new CustomEvent("toggle-ask-ai"));
                        }}
                    >
                        <Bot size={18} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2} />
                        <span className="hidden xs:hidden sm:inline">Ask AI</span>
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex md:hidden h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Drawer */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white px-6 py-5 shadow-inner">
                    <nav className="mb-5">
                        <ul className="flex flex-col gap-4 text-base font-medium text-gray-600">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.path;
                                return (
                                    <li key={index}>
                                        <Link
                                            href={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block py-1 transition-colors duration-200 ${isActive ? "text-[#356221] font-bold" : "hover:text-green-600"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Compact Login/Signup inside Drawer for Mobile Screen Adjustments */}
                    <div className="border-t border-gray-100 pt-4 flex flex-col gap-2.5 sm:hidden">
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center rounded-xl bg-lime-400 py-3 text-xs font-bold text-black shadow transition hover:bg-lime-500"
                        >
                            Log In
                        </Link>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                router.push("/subscription");
                            }}
                            className="w-full text-center rounded-xl bg-lime-400 py-3 text-xs font-bold text-black shadow transition hover:bg-lime-500"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
