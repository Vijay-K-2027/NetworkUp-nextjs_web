import React from "react";
import Template, { OverlapItems, ComparisonRow } from "../Template";

const reachyOverlap: OverlapItems = {
    left: [
        "AI-assisted lead discovery",
        "Automated outreach sequences",
        "AI-personalized messaging",
    ],
    right: [
        "LinkedIn prospect discovery",
        "ICP-based lead scoring",
        "Campaign benchmarking & analytics",
    ],
};

const reachyComparisonRows: ComparisonRow[] = [
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

export default function Reachy() {
    return (
        <Template
            competitorName="Reachy"
            overlapItems={reachyOverlap}
            comparisonRows={reachyComparisonRows}
        />
    );
}
