import React from "react";
import type { Metadata } from "next";
import Template, { OverlapItems, ComparisonRow } from "../Template";

export const metadata: Metadata = {
    title: "NetworkUp vs Sendpilot | Next-Gen LinkedIn Automation Comparison",
    description: "Compare NetworkUp vs Sendpilot. Discover why teams choose NetworkUp for deeper AI ICP scoring, predictive campaign simulation, and intelligent unified inbox management.",
    keywords: ["networkup vs sendpilot", "sendpilot alternative", "sendpilot competitors", "best sendpilot alternative", "linkedin automation tools comparison", "sendpilot vs networkup"],
    alternates: {
        canonical: "https://networkup.io/compare/sendpilot"
    },
    openGraph: {
        title: "NetworkUp vs Sendpilot | Next-Gen LinkedIn Automation Comparison",
        description: "Compare NetworkUp vs Sendpilot. Discover why teams choose NetworkUp for deeper AI ICP scoring, predictive campaign simulation, and intelligent unified inbox management.",
        url: "https://networkup.io/compare/sendpilot",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp vs Sendpilot Comparison"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs Sendpilot | LinkedIn Automation Comparison",
        description: "Compare NetworkUp vs Sendpilot for automated LinkedIn outreach sequences.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const sendpilotOverlap: OverlapItems = {
    left: [
        "Multi-channel outreach",
        "Automated multi-step sequences",
        "LinkedIn campaign automation",
    ],
    right: [
        "Lead enrichment & ICP scoring",
        "Unified inbox & conversation management",
        "CRM & workflow integrations",
    ],
};

const sendpilotComparisonRows: ComparisonRow[] = [
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
        competitor: "included",
    },
    {
        feature: "CRM / Zapier / API Integrations",
        networkUp: "included",
        competitor: "included",
    },
];

export default function Sendpilot() {
    return (
        <Template
            competitorName="SendPilot"
            overlapItems={sendpilotOverlap}
            comparisonRows={sendpilotComparisonRows}
        />
    );
}
