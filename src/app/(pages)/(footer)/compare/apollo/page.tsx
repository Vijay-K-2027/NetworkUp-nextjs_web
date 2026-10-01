import React from "react";
import type { Metadata } from "next";
import Template, { OverlapItems, ComparisonRow } from "../Template";

export const metadata: Metadata = {
    title: "NetworkUp vs Apollo.io | LinkedIn Outreach & Lead Intelligence Comparison",
    description: "Compare NetworkUp vs Apollo.io. Discover why NetworkUp's dedicated LinkedIn automation, AI inbox, and predictive campaign simulation give you higher response rates than Apollo.",
    keywords: ["networkup vs apollo", "apollo.io alternative", "apollo linkedin automation", "apollo alternative for linkedin", "b2b lead generation tools", "linkedin outreach vs apollo"],
    alternates: {
        canonical: "https://networkup.io/compare/apollo"
    },
    openGraph: {
        title: "NetworkUp vs Apollo.io | LinkedIn Outreach & Lead Intelligence Comparison",
        description: "Compare NetworkUp vs Apollo.io. Discover why NetworkUp's dedicated LinkedIn automation, AI inbox, and predictive campaign simulation give you higher response rates than Apollo.",
        url: "https://networkup.io/compare/apollo",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp vs Apollo.io Comparison"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs Apollo.io | LinkedIn Outreach Comparison",
        description: "Compare NetworkUp vs Apollo.io for LinkedIn lead generation and AI outreach automation.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const apolloOverlap: OverlapItems = {
    left: [
        "Multi-channel outreach & engagement",
        "Multi-step outreach sequences",
        "AI-powered message personalization"
    ],
    right: [
        "Lead scoring & buying signals",
        "Lead management & enrichment",
        "CRM, API & workflow integrations",
    ],
};

const apolloComparisonRows: ComparisonRow[] = [
    {
        feature: "LinkedIn Outreach Automation",
        networkUp: "included",
        competitor: "partial",
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
        competitor: "not-available",
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
        competitor: "included",
    },
];

export default function Apollo() {
    return (
        <Template
            competitorName="Apollo.io"
            overlapItems={apolloOverlap}
            comparisonRows={apolloComparisonRows}
        />
    );
}
