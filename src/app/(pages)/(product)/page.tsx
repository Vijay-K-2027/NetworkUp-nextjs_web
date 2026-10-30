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
    title: {
        absolute: "LinkedIn Outreach Automation Tool & AI Lead Gen | NetworkUp.io"
    },
    description: "Scale LinkedIn outreach with NetworkUp. Automate multi-step sequences, find high-intent leads, and manage conversations in a unified multi-account inbox.",
    keywords: [
        "linkedin outreach automation",
        "linkedin outreach automation tool",
        "linkedin automation",
        "linkedin automation software",
        "automated linkedin outreach",
        "linkedin lead generation tool",
        "linkedin outreach platform",
        "b2b linkedin outreach",
        "cloud linkedin automation",
        "safe linkedin automation",
        "smart prospecting tool",
        "linkedin campaign builder",
        "unified inbox linkedin",
        "residential static proxy safety",
        "human-in-the-loop validation",
        "sales intelligence platform",
        "recruiter sourcing tool",
        "linkedin compliance safety limits",
        "automated linkedin connection requests",
        "linkedin drip campaigns",
        "ai linkedin message writer",
        "waalaxy alternative",
        "expandi alternative",
        "heyreach alternative",
        "dripify alternative",
        "multi account linkedin outreach",
        "networkup",
        "networkup.io"
    ],
    alternates: {
        canonical: "https://networkup.io"
    },
    openGraph: {
        title: "LinkedIn Outreach Automation Tool & AI Lead Gen | NetworkUp.io",
        description: "Scale LinkedIn outreach with NetworkUp. Automate multi-step sequences, find high-intent leads, and manage conversations in a unified multi-account inbox.",
        url: "https://networkup.io",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/seo/og-home.jpg",
                width: 1200,
                height: 630,
                alt: "NetworkUp - #1 LinkedIn Outreach Automation Platform"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "LinkedIn Outreach Automation Tool & AI Lead Gen | NetworkUp.io",
        description: "Scale LinkedIn outreach with NetworkUp. Automate multi-step sequences, find high-intent leads, and manage conversations in a unified multi-account inbox.",
        images: ["https://networkup.io/seo/og-home.jpg"]
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
        "headline": "LinkedIn Outreach Automation & AI Lead Generation Software",
        "operatingSystem": "All (Cloud-Based)",
        "applicationCategory": "BusinessApplication, SalesEngagementSoftware",
        "applicationSubCategory": "LinkedIn Outreach Automation, Lead Generation",
        "description": "NetworkUp is a cloud-based LinkedIn outreach automation and B2B lead generation platform featuring automated drip campaigns, dedicated residential proxies, smart prospecting, and unified multi-account inbox management.",
        "keywords": "LinkedIn outreach automation, LinkedIn automation tool, B2B lead generation, sales engagement software, cloud LinkedIn automation, multi-account LinkedIn inbox, Waalaxy alternative, Expandi alternative",
        "offers": {
            "@type": "Offer",
            "price": "21.00",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "10420"
        },
        "featureList": [
            "AI-Powered Smart Prospecting",
            "Branching LinkedIn Campaign Builder",
            "Convobox Unified Multi-Account Inbox",
            "Dedicated Static Residential Proxies",
            "Human-in-the-Loop Safe Delay Sequences",
            "AI Follow-up Personalization"
        ]
    };

    return (
        <div className="bg-[#fafcf7]">
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
        </div>
    );
}
