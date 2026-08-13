import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Choose Your Subscription Plan | NetworkUp.io",
    description: "Start your free trial or subscribe to a Growth or Enterprise plan to unlock advanced AI-powered LinkedIn outreach tools.",
    keywords: ["networkup trial", "growth plan setup", "enterprise subscription networkup", "linkedin tool checkout"],
    alternates: {
        canonical: "https://networkup.io/homepage/subscription"
    },
    openGraph: {
        title: "Choose Your Subscription Plan | NetworkUp.io",
        description: "Start your free trial or subscribe to a Growth or Enterprise plan to unlock advanced AI-powered LinkedIn outreach tools.",
        url: "https://networkup.io/homepage/subscription",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-subscription.png",
                width: 1200,
                height: 630,
                alt: "Checkout NetworkUp Plans"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Choose Your Subscription Plan | NetworkUp.io",
        description: "Start your free trial or subscribe to a Growth or Enterprise plan to unlock advanced AI-powered LinkedIn outreach tools.",
        images: ["https://networkup.io/og-subscription.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

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
                        className="flex items-center gap-1.5 sm:gap-2 text-[#d8f9a8] hover:text-white font-semibold text-sm transition-all duration-200 cursor-pointer bg-white/[0.03] hover:bg-white/[0.08] px-3 sm:px-4 py-2 rounded-xl border border-white/[0.06]"
                    >
                        <ArrowLeft size={16} strokeWidth={2.5} />
                        <span className="hidden sm:inline">Back to Home</span>
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