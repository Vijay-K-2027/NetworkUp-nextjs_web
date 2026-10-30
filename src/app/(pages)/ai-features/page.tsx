import { Metadata } from "next";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";

export const metadata: Metadata = {
    title: "AI-Powered LinkedIn Outreach Features",
    description: "Explore NetworkUp's AI features for LinkedIn outreach: automated message writing, ICP intent scoring, buying signal detection, and campaign analytics.",
    keywords: ["ai linkedin tool", "automated prospecting", "ai message builder", "smart follow-ups", "linkedin automation features", "linkedin lead scoring", "reply sentiment analysis", "inbound automation", "ab testing linkedin", "outreach risk detection"],
    alternates: {
        canonical: "https://networkup.io/ai-features"
    },
    openGraph: {
        title: "AI-Powered LinkedIn Outreach Features | NetworkUp.io",
        description: "Explore NetworkUp's AI features for LinkedIn outreach: automated message writing, ICP intent scoring, buying signal detection, and campaign analytics.",
        url: "https://networkup.io/ai-features",
        siteName: "NetworkUp",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/seo/og-features.jpg",
                width: 1200,
                height: 630,
                alt: "AI Features NetworkUp"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "AI-Powered LinkedIn Outreach Features | NetworkUp.io",
        description: "Explore NetworkUp's AI features for LinkedIn outreach: automated message writing, ICP intent scoring, buying signal detection, and campaign analytics.",
        images: ["https://networkup.io/seo/og-features.jpg"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function AIFeatures() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://networkup.io/ai-features#webpage",
                "name": "AI-Powered LinkedIn Outreach Features",
                "description": "Explore NetworkUp's AI features for LinkedIn outreach: automated message writing, ICP intent scoring, buying signal detection, and campaign analytics.",
                "url": "https://networkup.io/ai-features"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/ai-features#breadcrumb",
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
                        "name": "AI Features",
                        "item": "https://networkup.io/ai-features"
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-[#fafcf7]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section5 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section4 />
            <Section6 />
        </div>
    )
}