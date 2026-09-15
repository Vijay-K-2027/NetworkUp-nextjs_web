"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HelpCenterHeader from "../components/HelpCenterHeader";
import Documentation, { DocItem } from "../Documentation";

const accountBillingItems: DocItem[] = [
    {
        question: "How do I update my billing information?",
        answer: "Go to Account → Billing to manage your available billing and payment information.",
    },
    {
        question: "How do I change my NetworkUp plan?",
        answer: "Open your Billing settings and select the plan you want to switch to. Review the changes before confirming.",
    },
    {
        question: "Can I upgrade my plan?",
        answer: "Yes. You can upgrade your subscription whenever you need additional features, capacity, or usage.",
    },
    {
        question: "Can I downgrade my plan?",
        answer: "Yes. You can change to a lower-tier plan based on the available subscription options.",
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes. You can manage or cancel your subscription from your billing settings. Any applicable billing or access changes will depend on your plan terms.",
    },
    {
        question: "How can I check my current usage?",
        answer: "Your account or billing dashboard provides information about your current usage and applicable limits.",
    },
    {
        question: "Can I add team members to my account?",
        answer: "Yes. NetworkUp supports team and workspace collaboration, allowing you to invite team members and manage workspace access.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes. You can change your subscription as your team's needs evolve.",
    },
];

export default function AccountBillingPage() {
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
                heading="Account & Billing"
                items={accountBillingItems}
                defaultOpenIndex={0}
            />
        </div>
    );
}
