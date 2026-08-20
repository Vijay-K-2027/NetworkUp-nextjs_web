import type { Metadata } from "next";
import Hero from "./components/Hero";
import DashboardPreview from "./components/DashboardPreview";
import Teams from "./components/Teams";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import SetsApart from "./components/SetsApart";
import PromptAssistant from "./components/PromptAssistant";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Document from "./components/Documentation";

export const metadata: Metadata = {
    title: "NetworkUp.io | AI-Powered LinkedIn Growth & Outreach Automation Platform",
    description: "Scale your LinkedIn outreach with NetworkUp.io. Featuring Smart Prospecting, branching Campaign Builder sequences, a Unified Inbox, and CRM sync. Protect your account with static residential proxies, human-like delay limits, and human-in-the-loop validation, while leveraging AI Campaign Optimization and Relationship Intelligence to maximize response rates.",
    keywords: ["linkedin outreach automation", "smart prospecting tool", "linkedin campaign builder", "unified inbox linkedin", "residential static proxy safety", "human-in-the-loop validation", "sales intelligence platform", "recruiter sourcing tool", "linkedin compliance safety limits"],
    alternates: {
        canonical: "https://www.networkup.io"
    },
    openGraph: {
        title: "NetworkUp.io | AI-Powered LinkedIn Growth & Outreach Automation Platform",
        description: "Scale your LinkedIn outreach with NetworkUp.io. Featuring Smart Prospecting, branching Campaign Builder sequences, a Unified Inbox, and CRM sync. Protect your account with static residential proxies, human-like delay limits, and human-in-the-loop validation, while leveraging AI Campaign Optimization and Relationship Intelligence to maximize response rates.",
        url: "https://www.networkup.io",
        siteName: "NetworkUp",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.networkup.io/og-home.jpg",
                width: 1200,
                height: 630,
                alt: "NetworkUp AI Platform"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp.io | AI-Powered LinkedIn Growth & Outreach Automation Platform",
        description: "Scale your LinkedIn outreach with NetworkUp.io. Featuring Smart Prospecting, branching Campaign Builder sequences, a Unified Inbox, and CRM sync. Protect your account with static residential proxies, human-like delay limits, and human-in-the-loop validation, while leveraging AI Campaign Optimization and Relationship Intelligence to maximize response rates.",
        images: ["https://www.networkup.io/og-home.jpg"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function ProductPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "NetworkUp",
        "operatingSystem": "Windows, macOS, Linux",
        "applicationCategory": "BusinessApplication",
        "offers": {
            "@type": "Offer",
            "price": "21.00",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "10420"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <DashboardPreview />
            <Teams />
            <Features />
            <Workflow />
            <SetsApart />
            <PromptAssistant />
            <Stats />
            <Pricing />
            <Contact />
            <Document />
        </>
    );
}
