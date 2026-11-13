import type { Metadata } from "next";
import GuidesClient from "./GuidesClient";

export const metadata: Metadata = {
    title: { absolute: "LinkedIn Outreach Guides | NetworkUp Product Guides" },
    description: "Explore NetworkUp guides for account setup, prospect discovery, LinkedIn outreach campaigns, message personalisation and campaign management.",
    keywords: ["networkup user guide", "product manual", "linkedin automation tutorial", "how to scale linkedin outreach", "b2b prospecting guide", "campaign builder walkthrough"],
    alternates: {
        canonical: "https://networkup.io/resources/guides"
    },
    openGraph: {
        title: "LinkedIn Outreach Guides | NetworkUp Product Guides",
        description: "Explore NetworkUp guides for account setup, prospect discovery, LinkedIn outreach campaigns, message personalisation and campaign management.",
        url: "https://networkup.io/resources/guides",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/seo/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "NetworkUp Product Manual & Guides"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "LinkedIn Outreach Guides | NetworkUp Product Guides",
        description: "Explore NetworkUp guides for account setup, prospect discovery, LinkedIn outreach campaigns, message personalisation and campaign management.",
        images: ["https://networkup.io/seo/og-about.jpg"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function GuidesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "HowTo",
                "@id": "https://networkup.io/resources/guides#howto",
                "name": "How to Scale LinkedIn Outreach & Lead Generation with NetworkUp",
                "description": "Complete 8-step guide to connect LinkedIn accounts, discover high-intent decision-makers, launch multi-step campaigns, and manage conversations in Convobox.",
                "totalTime": "PT15M",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Connect LinkedIn Accounts",
                        "text": "Connect your LinkedIn profile securely via cloud residential proxies."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Define Target ICP",
                        "text": "Filter prospects by job title, company size, tech stack, and intent signals."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Build Multi-Step Sequence",
                        "text": "Create conditional workflows with automated connection requests, profile views, and follow-ups."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Personalize with AI",
                        "text": "Use AI icebreakers and prospect research to craft authentic 1-to-1 messages."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 5,
                        "name": "Manage Replies in Convobox",
                        "text": "Triage all responses in the unified multi-account inbox and tag hot opportunities."
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/resources/guides#breadcrumb",
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
                        "name": "Resources",
                        "item": "https://networkup.io/resources/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Guides",
                        "item": "https://networkup.io/resources/guides"
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
            <GuidesClient />
        </>
    );
}
