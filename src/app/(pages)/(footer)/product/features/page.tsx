import { Metadata } from "next";
import Navbar from "@/app/homepage/components/Navbar";
import CTABanner from "@/app/homepage/components/CTABanner";
import Footer from "@/app/homepage/components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";


export const metadata: Metadata = {
    title: "All Features | LinkedIn Lead Generation & Outreach Automation | NetworkUp.io",
    description: "Explore NetworkUp's complete suite of LinkedIn automation features. Discover high-intent leads, build multi-step campaigns, manage conversations in a unified inbox, and track real-time analytics.",
    keywords: ["linkedin automation features", "linkedin outreach tool", "b2b lead generation platform", "multi-step campaign builder", "unified linkedin inbox", "networkup features"],
    alternates: {
        canonical: "https://networkup.io/product/features"
    },
    openGraph: {
        title: "All Features | LinkedIn Lead Generation & Outreach Automation | NetworkUp.io",
        description: "Explore NetworkUp's complete suite of LinkedIn automation features. Discover high-intent leads, build multi-step campaigns, manage conversations in a unified inbox, and track real-time analytics.",
        url: "https://networkup.io/product/features",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Platform Features"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "All Features | LinkedIn Lead Generation & Outreach Automation | NetworkUp.io",
        description: "Explore NetworkUp's complete suite of LinkedIn automation features. Discover high-intent leads, build multi-step campaigns, manage conversations in a unified inbox, and track real-time analytics.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function OverviewPage() {
    return (
        <>
            <Navbar />
            <div className="bg-[#f7f9fb]">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
            </div>
            <CTABanner />
            <Footer />
        </>
    )
}