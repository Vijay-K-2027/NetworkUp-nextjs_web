import React from "react";
import Template, { OverlapItems, ComparisonRow } from "../Template";

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
