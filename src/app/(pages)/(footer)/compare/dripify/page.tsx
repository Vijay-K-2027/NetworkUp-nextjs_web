import React from "react";
import type { Metadata } from "next";
import Template, { OverlapItems, ComparisonRow } from "../Template";

export const metadata: Metadata = {
    title: { absolute: "NetworkUp vs Dripify: LinkedIn Automation Comparison" },
    description: "Compare NetworkUp vs Dripify. Explore side-by-side capabilities for LinkedIn outreach sequences, unified multi-account inboxes, AI messaging, and lead discovery.",
    keywords: ["networkup vs dripify", "dripify alternative", "dripify competitors", "best dripify alternative", "linkedin drip automation", "dripify vs networkup"],
    alternates: {
        canonical: "https://networkup.io/compare/dripify"
    },
    openGraph: {
        title: "NetworkUp vs Dripify: LinkedIn Automation Comparison",
        description: "Compare NetworkUp vs Dripify. Explore side-by-side capabilities for LinkedIn outreach sequences, unified multi-account inboxes, AI messaging, and lead discovery.",
        url: "https://networkup.io/compare/dripify",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/seo/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "NetworkUp vs Dripify Comparison"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs Dripify: LinkedIn Automation Comparison",
        description: "Compare NetworkUp vs Dripify. Explore side-by-side capabilities for LinkedIn outreach sequences, unified multi-account inboxes, AI messaging, and lead discovery.",
        images: ["https://networkup.io/seo/og-about.jpg"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const dripifyOverlap: OverlapItems = {
    left: [
        "LinkedIn prospect discovery & lead data",
        "Automated connection requests & messaging",
        "Multi-step campaign sequencing",
    ],
    right: [
        "Lead segmentation & list management",
        "Campaign performance analytics",
        "LinkedIn account safety controls",
    ],
};

const dripifyComparisonRows: ComparisonRow[] = [
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
        competitor: "not-available",
    },
    {
        feature: "Real-time Buying Signal Detection",
        networkUp: "included",
        competitor: "not-available",
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
        competitor: "partial",
    },
    {
        feature: "Team / Workspace Collaboration",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "CRM / Zapier / API Integrations",
        networkUp: "included",
        competitor: "partial",
    },
];

export default function Dripify() {
    return (
        <Template
            competitorName="Dripify"
            overlapItems={dripifyOverlap}
            comparisonRows={dripifyComparisonRows}
        />
    );
}
