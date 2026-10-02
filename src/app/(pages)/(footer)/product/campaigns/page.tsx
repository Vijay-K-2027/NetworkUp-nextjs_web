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
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "@id": "https://networkup.io/product/campaigns#software",
                "name": "NetworkUp Campaign Builder",
                "applicationCategory": "BusinessApplication, MarketingAutomationSoftware, SalesSequencing",
                "operatingSystem": "All (Cloud-Based)",
                "url": "https://networkup.io/product/campaigns",
                "description": "Visual multi-step LinkedIn sequence builder with conditional branching, smart delays, automated profile visits, and AI copy variation testing.",
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
                    "ratingCount": "270",
                    "bestRating": "5"
                },
                "featureList": [
                    "Drag-and-Drop Visual Sequence Builder",
                    "Conditional Branching (If Accepted / If Replied)",
                    "Smart Dynamic Delays & Profile Warmup",
                    "Automated Profile Views & Post Likes",
                    "Live Campaign Analytics & Conversion Tracking"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/product/campaigns#breadcrumb",
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
                        "name": "Campaigns",
                        "item": "https://networkup.io/product/campaigns"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/product/campaigns#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does branching logic work in NetworkUp campaigns?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp allows you to build conditional workflows that adapt based on prospect actions (e.g. if connection request is accepted within 3 days, send Message A; if not, view profile and follow up via InMail or email)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I run multiple campaigns simultaneously across different team accounts?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can deploy distinct or synchronized campaigns across multiple LinkedIn sender accounts while preventing duplicate outreach to the same leads."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What metrics are tracked for each outreach campaign?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp tracks invitation acceptance rates, message reply rates, positive sentiment percentages, meeting booking rates, and overall pipeline generated."
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
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <CTABanner />
            <Footer />
        </>
    );
}
