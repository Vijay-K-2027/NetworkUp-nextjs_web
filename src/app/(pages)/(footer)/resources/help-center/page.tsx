import type { Metadata } from "next";
import HelpCenterClient from "./HelpCenterClient";

export const metadata: Metadata = {
    title: "Help Center & Support Knowledge Base | NetworkUp",
    description: "Find guides, troubleshooting articles, setup instructions, and FAQs for getting started, running campaigns, managing leads, and integrating APIs with NetworkUp.",
    keywords: ["networkup help center", "networkup customer support", "linkedin outreach tutorials", "campaign setup troubleshooting", "networkup documentation"],
    alternates: {
        canonical: "https://networkup.io/resources/help-center"
    },
    openGraph: {
        title: "Help Center & Support Knowledge Base | NetworkUp",
        description: "Find guides, troubleshooting articles, setup instructions, and FAQs for getting started, running campaigns, managing leads, and integrating APIs with NetworkUp.",
        url: "https://networkup.io/resources/help-center",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Help Center"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Help Center & Knowledge Base | NetworkUp",
        description: "Search our knowledge base, guides, and FAQs for NetworkUp.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function HelpCenterPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://networkup.io/resources/help-center#webpage",
                "name": "NetworkUp Help Center & Knowledge Base",
                "description": "Step-by-step documentation, account setup instructions, safety guidelines, and troubleshooting articles for NetworkUp.",
                "url": "https://networkup.io/resources/help-center"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/resources/help-center#breadcrumb",
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
                        "name": "Help Center",
                        "item": "https://networkup.io/resources/help-center"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/resources/help-center#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How do I get started with NetworkUp?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Getting started is simple: sign up for a free trial, connect your LinkedIn account through our secure cloud proxy setup, import or search for target leads, and launch your first AI-personalized outreach campaign in minutes."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does NetworkUp protect my LinkedIn account from restrictions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp uses dedicated residential proxies matching your geographic location, gradual warmup schedules, randomized delays, and daily limits to keep all outreach completely natural and compliant."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I export leads and sync replies with my CRM?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, NetworkUp supports automated CRM synchronization with HubSpot, Salesforce, Pipedrive, and Zapier webhooks to log conversations and lead updates in real time."
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
            <HelpCenterClient />
        </>
    );
}
