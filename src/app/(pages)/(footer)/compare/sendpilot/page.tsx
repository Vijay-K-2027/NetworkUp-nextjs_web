import React from "react";
import type { Metadata } from "next";
import Template, { OverlapItems, ComparisonRow } from "../Template";

export const metadata: Metadata = {
    title: { absolute: "NetworkUp vs Sendler | LinkedIn Automation Comparison" },
    description: "Compare NetworkUp and Sendler for LinkedIn automation, campaign workflows, messaging and prospect management using verified product information.",
    keywords: ["networkup vs sendler", "sendler alternative", "sendler competitors", "best sendler alternative", "linkedin automation tools comparison", "sendler vs networkup"],
    alternates: {
        canonical: "https://networkup.io/compare/sendpilot"
    },
    openGraph: {
        title: "NetworkUp vs Sendler | LinkedIn Automation Comparison",
        description: "Compare NetworkUp and Sendler for LinkedIn automation, campaign workflows, messaging and prospect management using verified product information.",
        url: "https://networkup.io/compare/sendpilot",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/seo/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "NetworkUp vs Sendler Comparison"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs Sendler | LinkedIn Automation Comparison",
        description: "Compare NetworkUp and Sendler for LinkedIn automation, campaign workflows, messaging and prospect management using verified product information.",
        images: ["https://networkup.io/seo/og-about.jpg"]
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
            competitorName="Sendler"
            overlapItems={sendpilotOverlap}
            comparisonRows={sendpilotComparisonRows}
        />
    );
}
