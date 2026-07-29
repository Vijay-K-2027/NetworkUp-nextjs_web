"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "./Navbar";
import CTABanner from "./CTABanner";
import Footer from "./Footer";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    // Pages that should NOT render the main header/footer layout
    const isSubscription = pathname?.includes("/subscription");
    const isLogin = pathname?.includes("/login");

    if (isSubscription || isLogin) {
        return <>{children}</>;
    }

    return (
        <>
            <NavBar />
            <main className="flex-grow">
                {children}
            </main>
            <CTABanner />
            <Footer />
        </>
    );
}
