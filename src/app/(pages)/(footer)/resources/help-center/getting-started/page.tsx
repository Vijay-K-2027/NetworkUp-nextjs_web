"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HelpCenterHeader from "../components/HelpCenterHeader";
import Documentation, { DocItem } from "../Documentation";

const gettingStartedItems: DocItem[] = [
    {
        question: "What is NetworkUp.io and how does it help grow my LinkedIn network?",
        answer: "NetworkUp.io is an AI-powered LinkedIn growth platform that helps sales teams, recruiters, founders, and agencies automate outreach while maintaining personalized conversations. It helps you discover the right prospects, create smart campaigns, manage conversations, and convert connections into meaningful business oppurtunities."
    },
    {
        question: "How do I create a NetworkUp account?",
        answer: "Sign up with your email address and follow the onboarding steps. Once your account is created, you can connect your LinkedIn account and start setting up your workspace.",
    },
    {
        question: "How do I connect my LinkedIn account?",
        answer: "Go to Settings → Accounts, select Connect LinkedIn, and follow the authentication steps to link your account.",
    },
    {
        question: "How do I create my first campaign?",
        answer: "Go to Campaigns →< Create Campaign, select your target leads, configure your outreach sequence, personalize your message, and launch the campaign.",
    },
    {
        question: "Do I need technical knowledge to use NetworkUp?",
        answer: "No. NetworkUp is designed for both technical and non-technical users. Most campaign and lead-management tasks can be completed directly from the platform.",
    },
    {
        question: "How do I add leads to my workspace?",
        answer: "You can discover leads using NetworkUp's prospecting tools, import lead lists, or bring leads in through supported integrations.",
    },
    {
        question: "Can I connect multiple LinkedIn accounts?",
        answer: "Yes. NetworkUp supports multiple LinkedIn accounts depending on your subscription plan.",
    },
    {
        question: "How quickly can I start my first campaign?",
        answer: "Once your account and LinkedIn profile are connected, you can discover or import leads, create a sequence, and launch your first campaign within minutes.",
    },
    {
        question: "Where can I learn how NetworkUp works?",
        answer: "You can explore the Help Center, Getting Started guides, API documentation, and product documentation to learn about NetworkUp's feaatures and workflows.",
    },
];

export default function GettingStartedPage() {
    return (
        <div className="w-full bg-[#fafdf8]/50 min-h-screen relative overflow-hidden pb-16">
            <HelpCenterHeader />

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
                {/* Back to Topics Navigation */}
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

            {/* Q&A Documentation Accordion */}
            <Documentation
                heading="Getting Started"
                items={gettingStartedItems}
                defaultOpenIndex={0}
            />
        </div>
    );
}
