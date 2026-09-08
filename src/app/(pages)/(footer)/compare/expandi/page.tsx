import React from "react";
import Template, { OverlapItems, ComparisonRow } from "../Template";

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
