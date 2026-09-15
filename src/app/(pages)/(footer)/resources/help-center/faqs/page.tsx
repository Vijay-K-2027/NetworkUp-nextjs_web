"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HelpCenterHeader from "../components/HelpCenterHeader";
import Documentation, { DocItem } from "../Documentation";

const faqsItems: DocItem[] = [
    {
        question: "What is NetworkUp?",
        answer: "NetworkUp is an AI-powered prospecting and outreach platform that helps teams discover leads, automate campaigns, manage conversations, and improve outreach performance.",
    },
    {
        question: "Who is NetworkUp designed for?",
        answer: "NetworkUp is designed for sales teams, agencies, founders, recruiters, business development teams, and organizations that want to scale their prospecting and outreach.",
    },
    {
        question: "What makes NetworkUp different from other outreach platforms?",
        answer: "NetworkUp combines lead discovery, outreach automation, conversation management, and AI-powered campaign intelligence in one connected workspace.",
    },
    {
        question: "Does NetworkUp use AI?",
        answer: "Yes. AI can assist with prospect research, message creation, lead intelligence, conversation analysis, follow-ups, and campaign optimization.",
    },
    {
        question: "Can I use NetworkUp for LinkedIn outreach?",
        answer: "Yes. NetworkUp provides LinkedIn-focused prospecting and outreach capabilities, including campaign automation and personalized messaging.",
    },
    {
        question: "Can I connect NetworkUp to my existing CRM?",
        answer: "Yes. NetworkUp provides integrations and API capabilities for connecting your existing CRM and other business tools.",
    },
    {
        question: "Is NetworkUp suitable for teams?",
        answer: "Yes. NetworkUp supports team workspaces and collaboration, allowing multiple users to work together on prospecting and outreach activities.",
    },
    {
        question: "Where can I get help with NetworkUp?",
        answer: "You can browse the Help Center for guides, FAQs, troubleshooting information, and API documentation. For additional assistance, contact the NetworkUp support team.",
    },
];

export default function FaqsPage() {
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
                heading="FAQs"
                items={faqsItems}
                defaultOpenIndex={0}
            />
        </div>
    );
}
