import React from "react";
import type { Metadata } from "next";
import Template, { OverlapItems, ComparisonRow } from "../Template";

export const metadata: Metadata = {
    title: "NetworkUp vs Waalaxy | Top LinkedIn Automation Alternative Comparison",
    description: "Compare NetworkUp vs Waalaxy. See why modern growth teams switch to NetworkUp for advanced AI ICP scoring, predictive campaign simulation, and intelligent multi-account scaling.",
    keywords: ["networkup vs waalaxy", "waalaxy alternative", "waalaxy competitors", "best waalaxy alternative 2026", "waalaxy vs networkup", "cloud linkedin automation tool"],
    alternates: {
        canonical: "https://networkup.io/compare/waalaxy"
    },
    openGraph: {
        title: "NetworkUp vs Waalaxy | Top LinkedIn Automation Alternative Comparison",
        description: "Compare NetworkUp vs Waalaxy. See why modern growth teams switch to NetworkUp for advanced AI ICP scoring, predictive campaign simulation, and intelligent multi-account scaling.",
        url: "https://networkup.io/compare/waalaxy",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp vs Waalaxy Comparison"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs Waalaxy | Top LinkedIn Automation Alternative",
        description: "Compare NetworkUp vs Waalaxy for automated LinkedIn prospecting and lead outreach.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const waalaxyOverlap: OverlapItems = {
    left: [
        "LinkedIn prospecting & data extraction",
        "Multi-step campaign sequencing & scheduling",
        "Campaign performance analytics",
    ],
    right: [
        "Automated connection requests & messaging",
        "Lead list management & segmentation",
        "LinkedIn activity & safety controls",
    ],
};

const waalaxyComparisonRows: ComparisonRow[] = [
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
        competitor: "partial",
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
        competitor: "partial",
    },
    {
        feature: "AI Conversation Analysis",
        networkUp: "included",
        competitor: "partial",
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
        competitor: "partial",
    },
    {
        feature: "Campaign A/B Testing & Analytics",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "Multi-account Management",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Team / Workspace Collaboration",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "CRM / Zapier / API Integrations",
        networkUp: "included",
        competitor: "included",
    },
];

export default function Waalaxy() {
    return (
        <Template
            competitorName="Waalaxy"
            overlapItems={waalaxyOverlap}
            comparisonRows={waalaxyComparisonRows}
        />
    );
}
