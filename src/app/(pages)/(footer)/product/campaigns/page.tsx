import { Metadata } from "next";
import Navbar from "@/app/homepage/components/Navbar";
import CTABanner from "@/app/homepage/components/CTABanner";
import Footer from "@/app/homepage/components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export const metadata: Metadata = {
    title: "Campaigns | Multi-Step LinkedIn Outreach Builder | NetworkUp.io",
    description: "Build high-converting LinkedIn outreach campaigns that work while you sleep. Design branching sequences, set smart delays, A/B test copy, and scale outbound safely.",
    keywords: ["networkup campaigns", "linkedin campaigns", "automated outreach engine", "drip campaigns linkedin", "connection request sequences", "b2b campaign builder"],
    alternates: {
        canonical: "https://networkup.io/product/campaigns"
    },
    openGraph: {
        title: "Campaigns | Multi-Step LinkedIn Outreach Builder | NetworkUp.io",
        description: "Build high-converting LinkedIn outreach campaigns that work while you sleep. Design branching sequences, set smart delays, A/B test copy, and scale outbound safely.",
        url: "https://networkup.io/product/campaigns",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Multi-Step Campaign Builder"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Campaigns | Multi-Step LinkedIn Outreach Builder | NetworkUp.io",
        description: "Build high-converting LinkedIn outreach campaigns that work while you sleep. Design branching sequences, set smart delays, A/B test copy, and scale outbound safely.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function CampaignsPage() {
    return (
        <>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <CTABanner />
            <Footer />
        </>
    );
}
