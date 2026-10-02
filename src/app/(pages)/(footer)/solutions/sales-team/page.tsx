import React from "react";
import Section1Template from "../templates/section1";
import Section2Template from "../templates/section2";
import Section3Template from "../templates/section3";
import Section4Template from "../templates/section4";
import Section213Template from "../templates/section213";
import Section313Template from "../templates/section313";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NetworkUp for Sales Teams | LinkedIn Outreach & Pipeline Platform",
    description:
        "Empower SDRs, AEs, and sales leaders to discover qualified prospects, personalize outreach with AI, manage multi-rep accounts, and accelerate sales pipeline.",
    keywords: ["linkedin outreach for sales teams", "b2b sales engagement", "sdr outbound automation", "ae prospecting tool", "sales pipeline acceleration", "networkup for sales"],
    alternates: {
        canonical: "https://networkup.io/solutions/sales-team"
    },
    openGraph: {
        title: "NetworkUp for Sales Teams | LinkedIn Outreach & Pipeline Platform",
        description:
            "Empower SDRs, AEs, and sales leaders to discover qualified prospects, personalize outreach with AI, manage multi-rep accounts, and accelerate sales pipeline.",
        url: "https://networkup.io/solutions/sales-team",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp for Sales Teams"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp for Sales Teams | LinkedIn Outreach & Pipeline Platform",
        description:
            "Empower SDRs, AEs, and sales leaders to discover qualified prospects, personalize outreach with AI, manage multi-rep accounts, and accelerate sales pipeline.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function SalesTeamPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://networkup.io/solutions/sales-team#service",
                "name": "NetworkUp for Sales Teams",
                "serviceType": "B2B Sales Outreach & Pipeline Acceleration",
                "provider": {
                    "@type": "Organization",
                    "name": "NetworkUp.io",
                    "url": "https://networkup.io"
                },
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Sales Development Representatives (SDRs), Account Executives (AEs), Sales Directors, VP of Sales"
                },
                "description": "Enterprise-grade LinkedIn outreach automation platform designed for high-velocity sales teams. Supercharge SDR pipeline generation, automate multi-touch prospecting sequences, and manage conversations in a unified multi-rep inbox.",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "description": "Free Trial Available"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/solutions/sales-team#breadcrumb",
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
                        "name": "Solutions",
                        "item": "https://networkup.io/solutions/sales-team"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "For Sales Teams",
                        "item": "https://networkup.io/solutions/sales-team"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/solutions/sales-team#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does NetworkUp help sales teams hit their outbound quota?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp automates repetitive top-of-funnel LinkedIn prospecting tasks—from finding verified decision-makers to sending AI-personalized multi-step connection and follow-up sequences—allowing sales reps to spend more time having qualified discovery calls."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can sales leaders monitor individual SDR and AE performance?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, sales leaders get centralized visibility across all team sender accounts, including response rates, connection acceptance percentages, conversion funnels, and pipeline generated per rep."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does NetworkUp prevent sales reps from stepping on each other's leads?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp includes global deduplication and account-level collision protection, ensuring that multiple sales reps never reach out to the same contact or company concurrently."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="w-full flex flex-col bg-[#f7f9fb]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Section1Template />
            <Section2Template />
            <Section3Template />
            <Section4Template />
            <Section213Template />
            <Section313Template />
        </div>
    );
}
