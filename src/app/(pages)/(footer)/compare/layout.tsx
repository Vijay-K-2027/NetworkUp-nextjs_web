import React from "react";
import NavBar from "@/app/homepage/components/Navbar";
import CTABanner from "@/app/homepage/components/CTABanner";
import Footer from "@/app/homepage/components/Footer";

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main className="flex-grow">{children}</main>
            <CTABanner />
            <Footer />
        </>
    );
}
