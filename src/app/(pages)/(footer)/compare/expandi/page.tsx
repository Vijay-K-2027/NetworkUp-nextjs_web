import React from "react";
import type { Metadata } from "next";
import Template, { OverlapItems, ComparisonRow } from "../Template";

export const metadata: Metadata = {
    title: "NetworkUp vs Expandi.io | Advanced LinkedIn Automation Comparison",
    description: "Compare NetworkUp vs Expandi.io. Explore how NetworkUp delivers AI message personalization, predictive ICP scoring, and unified messaging at a fraction of the complexity.",
    keywords: ["networkup vs expandi", "expandi alternative", "expandi.io competitors", "best expandi alternative", "linkedin outreach expandi vs networkup", "cloud linkedin automation"],
    alternates: {
        canonical: "https://networkup.io/compare/expandi"
    },
    openGraph: {
        title: "NetworkUp vs Expandi.io | Advanced LinkedIn Automation Comparison",
        description: "Compare NetworkUp vs Expandi.io. Explore how NetworkUp delivers AI message personalization, predictive ICP scoring, and unified messaging at a fraction of the complexity.",
        url: "https://networkup.io/compare/expandi",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp vs Expandi Comparison"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs Expandi.io | LinkedIn Outreach Automation Comparison",
        description: "Compare NetworkUp vs Expandi for multi-account LinkedIn campaign automation.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const expandiOverlap: OverlapItems = {
    left: [
        "LinkedIn outreach automation",
        "Conditional campaign logic",
        "Campaign analytics & reporting",
    ],
    right: [
        "Multi-step campaign sequences",
        "LinkedIn + email sequences",
        "Multi-account & team management",
    ],
};

const expandiComparisonRows: ComparisonRow[] = [
    {
        feature: "LinkedIn Outreach Automation",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Multi-step Campaign Builder",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Conditional / Branching Workflows",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "AI Outreach Message Writer",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "AI Lead Scoring / ICP Fit",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "Real-time Buying Signal Detection",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "AI Prospect / Company Research",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "Lead Discovery & Enrichment",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Lead Database / CRM",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "Unified LinkedIn Inbox",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "AI Conversation Analysis",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "AI Follow-up Recommendations",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "AI Campaign Optimization",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "AI Campaign Health Monitoring",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "Predictive Campaign Simulation",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "AI Help / Outreach Assistant",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "Campaign A/B Testing & Analytics",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Multi-account Management",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Team / Workspace Collaboration",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "CRM / Zapier / API Integrations",
        networkUp: "included",
        competitor: "included",
    },
];

export default function Expandi() {
    return (
        <Template
            competitorName="Expandi"
            overlapItems={expandiOverlap}
            comparisonRows={expandiComparisonRows}
        />
    );
}
