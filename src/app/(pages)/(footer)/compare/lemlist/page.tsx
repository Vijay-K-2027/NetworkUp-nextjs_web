import React from "react";
import type { Metadata } from "next";
import Template, { OverlapItems, ComparisonRow } from "../Template";

export const metadata: Metadata = {
    title: "NetworkUp vs Lemlist | LinkedIn & Multichannel Outreach Comparison",
    description: "Compare NetworkUp vs Lemlist. See how NetworkUp specializes in LinkedIn engagement with native AI conversation analysis, predictive ICP scoring, and unified messaging.",
    keywords: ["networkup vs lemlist", "lemlist alternative", "lemlist linkedin automation", "best lemlist alternative", "cold email vs linkedin automation", "lemlist competitors"],
    alternates: {
        canonical: "https://networkup.io/compare/lemlist"
    },
    openGraph: {
        title: "NetworkUp vs Lemlist | LinkedIn & Multichannel Outreach Comparison",
        description: "Compare NetworkUp vs Lemlist. See how NetworkUp specializes in LinkedIn engagement with native AI conversation analysis, predictive ICP scoring, and unified messaging.",
        url: "https://networkup.io/compare/lemlist",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp vs Lemlist Comparison"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs Lemlist | LinkedIn Outreach Platform Comparison",
        description: "Compare NetworkUp vs Lemlist for intelligent LinkedIn prospecting and campaign workflows.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const lemlistOverlap: OverlapItems = {
    left: [
        "LinkedIn outreach automation",
        "Multi-step outreach sequences",
        "AI-powered message personalization"
    ],
    right: [
        "Lead discovery & enrichment",
        "Unified inbox & conversation management",
        "CRM, API & workflow integrations",
    ],
};

const lemlistComparisonRows: ComparisonRow[] = [
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
        competitor: "included",
    },
    {
        feature: "Real-time Buying Signal Detection",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "AI Prospect / Company Research",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Lead Discovery & Enrichment",
        networkUp: "included",
        competitor: "included",
    },
    {
        feature: "Lead Database / CRM",
        networkUp: "included",
        competitor: "included",
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
        competitor: "included",
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
        competitor: "partial",
    },
    {
        feature: "AI Help / Outreach Assistant",
        networkUp: "included",
        competitor: "included",
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

export default function Lemlist() {
    return (
        <Template
            competitorName="Lemlist"
            overlapItems={lemlistOverlap}
            comparisonRows={lemlistComparisonRows}
        />
    );
}
