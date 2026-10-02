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
    title: "Convobox | Unified LinkedIn Inbox & Conversation Management | NetworkUp.io",
    description: "Streamline your sales conversations with Convobox. A unified multi-account LinkedIn inbox with AI intent classification, message tagging, and team collaboration.",
    keywords: ["unified linkedin inbox", "convobox", "linkedin message management", "ai intent classification", "multi-account linkedin inbox", "sales conversation manager", "networkup convobox"],
    alternates: {
        canonical: "https://networkup.io/product/convobox"
    },
    openGraph: {
        title: "Convobox | Unified LinkedIn Inbox & Conversation Management | NetworkUp.io",
        description: "Streamline your sales conversations with Convobox. A unified multi-account LinkedIn inbox with AI intent classification, message tagging, and team collaboration.",
        url: "https://networkup.io/product/convobox",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Convobox Unified Inbox"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Convobox | Unified LinkedIn Inbox & Conversation Management | NetworkUp.io",
        description: "Streamline your sales conversations with Convobox. A unified multi-account LinkedIn inbox with AI intent classification, message tagging, and team collaboration.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function ConvoboxPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "@id": "https://networkup.io/product/convobox#software",
                "name": "NetworkUp Convobox Unified Inbox",
                "applicationCategory": "BusinessApplication, CommunicationApplication, CRMSoftware",
                "operatingSystem": "All (Cloud-Based)",
                "url": "https://networkup.io/product/convobox",
                "description": "Unified multi-account LinkedIn inbox with AI sentiment analysis, lead tagging, team collaboration, and automated conversation routing.",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "description": "Free Trial Available"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "260",
                    "bestRating": "5"
                },
                "featureList": [
                    "Multi-Account LinkedIn Inbox Consolidation",
                    "AI Intent & Sentiment Classification (Interested, Not Now, Objection)",
                    "Custom Conversation Tags & Lead Status Filters",
                    "One-Click CRM Sync & Lead Export",
                    "Team Collision Detection & Message Assignment"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/product/convobox#breadcrumb",
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
                        "name": "Convobox",
                        "item": "https://networkup.io/product/convobox"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/product/convobox#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is Convobox?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Convobox is NetworkUp's unified LinkedIn inbox that consolidates messages across all your connected sender accounts into a single dashboard, with AI intent categorization and team collaboration features."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can multiple team members manage the same LinkedIn inbox without logging in directly?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Convobox enables team members to reply, tag, and assign LinkedIn conversations without needing direct login access to individual LinkedIn accounts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Convobox support AI reply recommendations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Convobox analyzes prospect responses and offers one-click contextual AI reply suggestions to speed up qualification and meeting booking."
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
