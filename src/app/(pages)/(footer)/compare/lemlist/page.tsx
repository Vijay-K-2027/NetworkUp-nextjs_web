import React from "react";
import Template, { OverlapItems, ComparisonRow } from "../Template";

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
