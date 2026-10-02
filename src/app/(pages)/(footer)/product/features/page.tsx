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
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "@id": "https://networkup.io/product/features#software",
                "name": "NetworkUp Features Suite",
                "applicationCategory": "BusinessApplication, MarketingApplication, SalesAutomationSoftware",
                "operatingSystem": "All (Cloud-Based)",
                "url": "https://networkup.io/product/features",
                "description": "Comprehensive LinkedIn automation suite featuring AI lead generation, personalized multi-step sequence building, unified multi-account inbox, and predictive campaign optimization.",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "description": "Free Trial with Full Feature Access"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "340",
                    "bestRating": "5"
                },
                "featureList": [
                    "AI-Driven B2B Prospect Discovery & ICP Scoring",
                    "Multi-Step Branching Outreach Sequences",
                    "Convobox: Unified Multi-Account LinkedIn Inbox",
                    "Natural Human Action Delays with Cloud Residential IPs",
                    "Predictive Campaign Simulator & Health Monitoring",
                    "Native CRM & Webhook Integrations"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/product/features#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://networkup.io"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Product",
                        "item": "https://networkup.io/product/features"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Features",
                        "item": "https://networkup.io/product/features"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/product/features#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What features are included in NetworkUp.io?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp includes AI Lead Finder, automated multi-step outreach campaigns with branching logic, Convobox unified inbox for multiple LinkedIn accounts, predictive campaign simulator, AI icebreaker personalization, and real-time campaign health monitoring."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does NetworkUp ensure LinkedIn account safety?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp runs 100% in the cloud on dedicated residential IP proxies with randomized human-like typing delays, automated activity limits, and 24/7 account health monitoring to keep LinkedIn accounts secure without browser extension risks."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I connect multiple LinkedIn accounts and collaborate with my team?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, NetworkUp is built for scaling sales teams and agencies, allowing you to connect multiple LinkedIn profiles, manage all conversations in a centralized unified inbox, and assign roles across workspaces."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
    );
}