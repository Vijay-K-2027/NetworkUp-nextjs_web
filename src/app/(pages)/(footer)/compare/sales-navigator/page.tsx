import React from "react";
import Template, { OverlapItems, ComparisonRow } from "../Template";

const salesNavigatorOverlap: OverlapItems = {
    left: [
        "LinkedIn prospect discovery",
        "Lead & account intelligence",
        "AI-powered prospect research",
    ],
    right: [
        "Buyer intent & real-time signals",
        "Personalized LinkedIn outreach",
        "Lead management & CRM integration",
    ],
};

const salesNavigatorComparisonRows: ComparisonRow[] = [
    {
        feature: "LinkedIn Outreach Automation",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "Multi-step Campaign Builder",
        networkUp: "included",
        competitor: "not-available",
    },
    {
        feature: "Conditional / Branching Workflows",
        networkUp: "included",
        competitor: "not-available",
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
        competitor: "not-available",
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
        competitor: "partial",
    },
];

export default function SalesNavigator() {
    return (
        <Template
            competitorName="Sales Navigator"
            overlapItems={salesNavigatorOverlap}
            comparisonRows={salesNavigatorComparisonRows}
        />
    );
}
