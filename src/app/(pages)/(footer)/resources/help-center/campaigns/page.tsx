"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HelpCenterHeader from "../components/HelpCenterHeader";
import Documentation, { DocItem } from "../Documentation";

const campaignsItems: DocItem[] = [
    {
        question: "How do I create an outreach campaign?",
        answer: "Go to Campaigns → Create Campaign, choose your audience, add your outreach steps, configure timing, and launch the campaign.",
    },
    {
        question: "Can I create multi-step campaigns?",
        answer: "Yes. You can build sequences containing multiple outreach actions and follow-ups with customizable timing between each step.",
    },
    {
        question: "Can I add conditional or branching logic?",
        answer: "Yes. Campaign workflows can use conditions to determine what action should happen next based on prospect activity or engagement.",
    },
    {
        question: "Can AI write my outreach messages?",
        answer: "Yes. NetworkUp's AI can generate personalized outreach messages using relevant prospect and company context.",
    },
    {
        question: "Can I schedule campaign activities?",
        answer: "Yes. You can configure when campaigns and individual sequence steps should run.",
    },
    {
        question: "Can I pause or resume a campaign?",
        answer: "Yes. You can pause active campaigns and resume them when you're ready.",
    },
    {
        question: "How can I track campaign performance?",
        answer: "Campaign analytics help you monitor outreach activity, engagement, responses, and other relevant campaign metrics.",
    },
    {
        question: "Can NetworkUp help optimize my campaigns?",
        answer: "Yes. NetworkUp provides AI-powered insights that can help identify performance issues and opportunities to improve your campaign strategy.",
    },
];

export default function CampaignsPage() {
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
                heading="Campaigns"
                items={campaignsItems}
                defaultOpenIndex={0}
            />
        </div>
    );
}
