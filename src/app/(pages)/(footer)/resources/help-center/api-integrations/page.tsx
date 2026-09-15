"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HelpCenterHeader from "../components/HelpCenterHeader";
import Documentation, { DocItem } from "../Documentation";

const apiIntegrationsItems: DocItem[] = [
    {
        question: "Does NetworkUp provide an API?",
        answer: "Yes. NetworkUp provides API capabilities that allow developers to connect NetworkUp with external applications and workflows.",
    },
    {
        question: "Where can I find my API key?",
        answer: "You can generate and manage API keys from the API / Developer Settings section of your NetworkUp account.",
    },
    {
        question: "How do I authenticate API requests?",
        answer: "API requests require your NetworkUp authentication credentials. Follow the API documentation for the required authentication format.",
    },
    {
        question: "What can I do with the NetworkUp API?",
        answer: "The API can be used to connect NetworkUp with your applications, internal systems, CRM tools, and custom workflows.",
    },
    {
        question: "Does NetworkUp support webhooks?",
        answer: "Yes. Webhooks can be used to receive event-based updates and connect NetworkUp activity to external systems.",
    },
    {
        question: "Can I integrate NetworkUp with my CRM?",
        answer: "Yes. NetworkUp supports CRM and workflow integrations that allow data to move between NetworkUp and your existing sales stack.",
    },
    {
        question: "Are there API rate limits?",
        answer: "Yes. API requests may be subject to rate limits depending on your account or API plan. Check the API documentation for the applicable limits.",
    },
    {
        question: "What happens when an API request fails?",
        answer: "NetworkUp returns an appropriate HTTP response with information about the error. Check the status code and error details to identify and resolve the issue.",
    },
];

export default function ApiIntegrationsPage() {
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
                heading="API & Integrations"
                items={apiIntegrationsItems}
                defaultOpenIndex={0}
            />
        </div>
    );
}
