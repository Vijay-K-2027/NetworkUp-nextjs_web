import type { Metadata } from "next";
import CompareAllClient from "./CompareAllClient";

export const metadata: Metadata = {
    title: "NetworkUp vs All Competitors | Complete LinkedIn Outreach Comparison",
    description: "Compare NetworkUp against Sendpilot, Waalaxy, Dripify, Expandi, Reachy, Heyreach, Apollo, Lemlist, and Sales Navigator. See full feature-by-feature matrix and advantages.",
    keywords: ["linkedin outreach tools comparison", "networkup vs competitors", "best linkedin automation tool 2026", "waalaxy alternative", "expandi alternative", "dripify alternative", "apollo alternative"],
    alternates: {
        canonical: "https://networkup.io/compare/compare-all"
    },
    openGraph: {
        title: "NetworkUp vs All Competitors | Complete LinkedIn Outreach Comparison",
        description: "Compare NetworkUp against Sendpilot, Waalaxy, Dripify, Expandi, Reachy, Heyreach, Apollo, Lemlist, and Sales Navigator. See full feature-by-feature matrix and advantages.",
        url: "https://networkup.io/compare/compare-all",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Competitor Comparison Matrix"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs All Competitors | Complete LinkedIn Outreach Comparison",
        description: "Compare NetworkUp against Sendpilot, Waalaxy, Dripify, Expandi, Reachy, Heyreach, Apollo, Lemlist, and Sales Navigator.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function CompareAllPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://networkup.io/compare/compare-all#webpage",
                "name": "NetworkUp vs All Competitors Comparison Matrix",
                "description": "Full side-by-side feature matrix comparing NetworkUp.io with Sendpilot, Waalaxy, Dripify, Expandi, Reachy, Heyreach, Apollo, Lemlist, and Sales Navigator.",
                "url": "https://networkup.io/compare/compare-all"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/compare/compare-all#breadcrumb",
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
                        "name": "Compare",
                        "item": "https://networkup.io/compare/compare-all"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Compare All",
                        "item": "https://networkup.io/compare/compare-all"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/compare/compare-all#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the best overall LinkedIn automation tool in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp is rated as the top cloud-native LinkedIn automation and sales prospecting platform due to its predictive campaign simulator, unified multi-account inbox (Convobox), and AI ICP fit scoring."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does NetworkUp compare against Chrome extensions like Waalaxy or Dripify?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Unlike browser extensions that consume local computer resources and risk IP flags, NetworkUp runs 100% in the cloud on dedicated residential IP addresses with zero browser downtime and enterprise safety guardrails."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I replace multiple sales prospecting tools with NetworkUp?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, NetworkUp combines lead discovery, ICP scoring, multi-step sequence building, unified messaging inbox, and campaign analytics into one connected platform, replacing the need for separate prospecting, messaging, and inbox tools."
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
            <CompareAllClient />
        </>
    );
}
