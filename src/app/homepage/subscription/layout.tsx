import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SubscriptionLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen bg-black">
            {/* Persistent Top Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#001000]/70 backdrop-blur-md border-b border-white/[0.06] py-3 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/homepage" className="flex items-center gap-2 select-none">
                        <Image src="/Logo.svg" alt="NetworkUp Logo" width={32} height={32} />
                        <span className="text-white font-bold text-lg font-comfortaa">NetworkUp</span>
                    </Link>

                    {/* Back Button */}
                    <Link
                        href="/homepage"
                        className="flex items-center gap-2 text-[#d8f9a8] hover:text-white font-semibold text-sm transition-all duration-200 cursor-pointer bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2 rounded-xl border border-white/[0.06]"
                    >
                        <ArrowLeft size={16} strokeWidth={2.5} />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </header>

            {/* Main Content (with top padding to account for fixed header) */}
            <main className="pt-16">
                {children}
            </main>
        </div>
    );
}