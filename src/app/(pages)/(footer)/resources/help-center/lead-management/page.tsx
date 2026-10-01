import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HelpCenterHeader from "../components/HelpCenterHeader";
import Documentation, { DocItem } from "../Documentation";

export const metadata: Metadata = {
    title: "Lead Management & Discovery Guide | NetworkUp Help Center",
    description: "Learn how to discover verified contacts, import lead lists, organize audience segments, enrich company data, and score ICP fit inside NetworkUp.",
    keywords: ["lead management guide", "prospect discovery tutorial", "enrich contact data", "lead scoring icp", "lead lists management"],
    alternates: {
        canonical: "https://networkup.io/resources/help-center/lead-management"
    },
    openGraph: {
        title: "Lead Management & Discovery Guide | NetworkUp Help Center",
        description: "Learn how to discover verified contacts, import lead lists, organize audience segments, enrich company data, and score ICP fit inside NetworkUp.",
        url: "https://networkup.io/resources/help-center/lead-management",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "article",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "Lead Management Guide"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Lead Management Guide | NetworkUp",
        description: "Organize contacts, segment audiences, and track lead lifecycle events.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const leadManagementItems: DocItem[] = [
    {
        question: "How do I find new leads?",
        answer: "Use NetworkUp's lead discovery tools to search for prospects based on relevant professional and company criteria.",
    },
    {
        question: "Can I import my existing leads?",
        answer: "Yes. You can bring existing leads into NetworkUp using supported import methods and integrations.",
    },
    {
        question: "Can I organize leads into lists?",
        answer: "Yes. Leads can be organized into lists or segments so you can manage different audiences and campaign groups.",
    },
    {
        question: "Does NetworkUp enrich lead information?",
        answer: "Yes. NetworkUp can enrich prospect information to give you additional context for targeting and personalized outreach.",
    },
    {
        question: "Can NetworkUp score my leads?",
        answer: "Yes. AI-powered lead intelligence can help evaluate prospects based on your targeting criteria and identify higher-fit leads.",
    },
    {
        question: "Can I see a lead's activity history?",
        answer: "Yes. Lead profiles can show relevant campaign activity, interactions, and engagement history.",
    },
    {
        question: "How does NetworkUp identify valuable opportunities?",
        answer: "NetworkUp can analyze lead information, engagement, and available signals to help identify prospects that may require additional attention.",
    },
    {
        question: "Can I use leads directly in campaigns?",
        answer: "Yes. Once leads are discovered or imported, you can select relevant leads and add them to your outreach campaigns.",
    },
];

export default function LeadManagementPage() {
    return (
        <div className="w-full bg-[#fafdf8]/50 min-h-screen relative overflow-hidden pb-16">
            <HelpCenterHeader />

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
                <div className="mb-4">
                    <Link
                        href="/resources/help-center"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#406900] hover:text-[#2d4900] transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>Back to all topics</span>
                    </Link>
                </div>
            </div>

            <Documentation
                heading="Lead Management"
                items={leadManagementItems}
                defaultOpenIndex={0}
            />
        </div>
    );
}
