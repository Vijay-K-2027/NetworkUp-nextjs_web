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


export const metadata: Metadata = {
    title: "Lead Finder | AI-Powered B2B Prospect Discovery | NetworkUp.io",
    description: "Discover high-intent decision-makers and build verified prospect lists with NetworkUp's AI Lead Finder. Filter by seniority, industry, tech stack, and intent signals before launching outreach.",
    keywords: ["linkedin lead finder", "b2b prospect discovery", "lead enrichment", "icp lead scoring", "sales prospecting tool", "networkup lead finder"],
    alternates: {
        canonical: "https://networkup.io/product/lead"
    },
    openGraph: {
        title: "Lead Finder | AI-Powered B2B Prospect Discovery | NetworkUp.io",
        description: "Discover high-intent decision-makers and build verified prospect lists with NetworkUp's AI Lead Finder. Filter by seniority, industry, tech stack, and intent signals before launching outreach.",
        url: "https://networkup.io/product/lead",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp AI Lead Finder"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Lead Finder | AI-Powered B2B Prospect Discovery | NetworkUp.io",
        description: "Discover high-intent decision-makers and build verified prospect lists with NetworkUp's AI Lead Finder. Filter by seniority, industry, tech stack, and intent signals before launching outreach.",
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
            <div className="bg-[#f7f9fb] lg:p-10">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
            </div>
            <CTABanner />
            <Footer />
        </>
    );
}