import React from "react";
import type { Metadata } from "next";
import Template, { OverlapItems, ComparisonRow } from "../Template";

export const metadata: Metadata = {
    title: "NetworkUp vs Heyreach | LinkedIn Agency & Multi-Account Outreach Comparison",
    description: "Compare NetworkUp vs Heyreach. Compare AI personalization, real-time buying signals, predictive campaign simulation, and multi-account scaling for agencies and sales teams.",
    keywords: ["networkup vs heyreach", "heyreach alternative", "heyreach competitors", "best heyreach alternative", "multi account linkedin automation", "agency linkedin outreach tool"],
    alternates: {
        canonical: "https://networkup.io/compare/heyreach"
    },
    openGraph: {
        title: "NetworkUp vs Heyreach | LinkedIn Agency & Multi-Account Outreach Comparison",
        description: "Compare NetworkUp vs Heyreach. Compare AI personalization, real-time buying signals, predictive campaign simulation, and multi-account scaling for agencies and sales teams.",
        url: "https://networkup.io/compare/heyreach",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp vs Heyreach Comparison"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs Heyreach | LinkedIn Multi-Account Outreach Comparison",
        description: "Compare NetworkUp vs Heyreach for agency scale LinkedIn outreach.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const heyreachOverlap: OverlapItems = {
    left: [
        "LinkedIn campaign automation",
        "Multi-step outreach sequences",
        "Multi-account management",
    ],
    right: [
        "Unified inbox & conversation management",
        "Lead management & routing",
        "CRM, API & workflow integrations",
    ],
};

const heyreachComparisonRows: ComparisonRow[] = [
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
        competitor: "partial",
    },
    {
        feature: "AI Lead Scoring / ICP Fit",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Real-time Buying Signal Detection",
        networkUp: "included",
        competitor: "partial",
    },
    {
        feature: "AI Prospect / Company Research",
        networkUp: "included",
        competitor: "partial",
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
        competitor: "partial",
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

export default function HeyReach() {
    return (
        <Template
            competitorName="HeyReach"
            overlapItems={heyreachOverlap}
            comparisonRows={heyreachComparisonRows}
        />
    );
}
