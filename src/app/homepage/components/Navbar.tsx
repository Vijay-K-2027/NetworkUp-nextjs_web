"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bot, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";


const navItems = [
    { label: "Product", id: "product", path: "/" },
    { label: "Solutions", id: "solutions", path: "/homepage/solutions" },
    { label: "Overview", id: "overview", path: "/homepage/overview" },
    { label: "AI Features", id: "workflow", path: "/homepage/ai-features" },
    { label: "Pricing", id: "pricing", path: "/homepage/pricing" },
];

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(item.id);
                    }
                },
                {
                    rootMargin: "-20% 0px -40% 0px",
                    threshold: 0.1
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

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
            <div className="mx-auto flex h-20 max-w-full items-center justify-between px-6 lg:px-8">

                {/* Left side: Logo and Desktop Navigation */}
                <div className="flex items-center gap-12">
                    <Link href="/homepage" className="flex items-center gap-3 flex-shrink-0">
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={42}
                            height={42}
                            style={{ height: "auto" }}
                        />
                        <span className="text-2xl font-bold font-[family-name:var(--font-comfortaa)] text-[#6CB531]">
                            NetworkUp<span className="text-zinc-500 font-base font-normal tracking-tight">.io</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-8 text-md font-medium text-gray-600">
                            {navItems.map((item, index) => {
                                const isActive = (pathname === item.path) || (pathname === "/homepage" && activeSection === item.id);
                                return (
                                    <li key={index} className="h-20 flex items-center">
                                        <Link
                                            href={item.path}
                                            className={`text-md font-semibold transition-all duration-200 pb-2 ${isActive
                                                ? "text-[#356221] border-b-2 border-[#76e11b]" : "text-gray-600 hover:text-[#76e11b] border-b-2 border-transparent"
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
                <div className="flex items-center gap-3 sm:gap-5">
                    <Link
                        href="#"
                        className="rounded-xl bg-lime-400 px-4 sm:px-6 py-2.5 sm:py-3 text-xs font-semibold text-black shadow transition hover:bg-lime-500"
                    >
                        Log In
                    </Link>

                    <button className="rounded-xl bg-lime-400 px-4 sm:px-6 py-2.5 sm:py-3 text-xs font-semibold text-black shadow transition hover:bg-lime-500" onClick={() => router.push("homepage/subscription")}>
                        Get Started
                    </button>

                    <button
                        className="flex flex-row gap-2 items-center rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-black shadow transition hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            window.dispatchEvent(new CustomEvent("toggle-ask-ai"));
                        }}
                    >
                        <Bot size={22} strokeWidth={2} />
                        Ask AI
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex md:hidden h-11 w-11 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Drawer */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 shadow-inner">
                    <nav className="mb-4">
                        <ul className="flex flex-col gap-4 text-base font-medium text-gray-600">
                            {navItems.map((item, index) => {
                                const isActive = (pathname === item.path) || (pathname === "/homepage" && activeSection === item.id);
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
                </div>
            )}
        </header>
    );
}
