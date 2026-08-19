"use client";

import Documentation from "@/app/homepage/Documentation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const documents = [
    {
        "question": "What is NetworkUp.io and how does it help grow my LinkedIn network?",
        "answer": "NetworkUp.io is an AI-powered LinkedIn growth platform that helps sales teams, recruiters, founders, and agencies automate outreach while maintaining personalized conversations. It helps you discover the right prospects, create smart campaigns, manage conversations, and convert connections into meaningful business oppurtunities. "
    },
    {
        "question": "How does AI improve my LinkedIn outreach campaigns?",
        "answer": "NetworkUp.io uses AI to analyze your campaigns, suggest better messaging stratagies, identify the best outreach timings, and recommend optimization oppurtunities. Our AI features help improve connection rates, response rates, and overall campaign performance.",
    },
    {
        "question": "Can I create automated LinkedIn campaigns with NetworkUp.io?",
        "answer": "Yes, NetworkUp.io allows you to build automated outreach sequences with personalized connection requests, follow-ups, and messaging workflows. You can create, monitor, and optimize campaigns while keeping every interaction personalized.",
    },
    {
        "question": "Does NetworkUp.io provide AI-generated messages and personalization?",
        "answer": "Yes. NetworkUp.io's AI assistant can generate personalized connection requests, follow-up messages, and outreach strategies based on your target audience, industry, and campaign goals. It helps you create human-like conversations at scale.",
    },
    {
        "question": "Can NetworkUp.io integrate with my existing sales tools?",
        "answer": "Yes, NetworkUp.io supports integrations with popular CRM and productivity platforms to help synchronize your leads, manage workflows, and connect your outreach activities with your existing sales ecosystem.",
    },
    {
        "question": "Is my LinkedIn account safe while using NetworkUp.io?",
        "answer": "Yes. NetworkUp.io is designed with account safety in mind. It uses smart automation limits, activity controls, and intelligent scheduling to create natural outreach patterns while helping protect your LinkedIn account.",
    },
    {
        "question": "Can I control how many actions my account performs?",
        "answer": "Yes. You can set campaign activity limits and control how frequently actions are performed."
    },
    {
        "question": "Does NetworkUp automatically send unlimited connection requests?",
        "answer": "No. Activity is limited and paced to avoid excessive automated actions."
    },
    {
        "question": "What happens when an account reaches its activity limit?",
        "answer": "Automation can pause for that account, preventing additional campiagn and automation settings. You remain in control of what is enabled."
    },
    {
        "question": "Does NetworkUp perform actions on my LinkedIn account without my control?",
        "answer": "NetworkUp only performs actions configured through your campaigns and automation settings. You remain in control of wht is enabled."
    },
    {
        "question": "Can NetworkUp guarantee that my LinkedIn account will never be restricted?",
        "answer": "No platform should guarantee that. LinkedIn controls its own policies and enforcement. NetworkUp is designed to encourage responsible, controlled automation and reduce unnecessary risk."
    },
    {
        "question": "Does NetworkUp use proxy or location management?",
        "answer": "If proxy management is part of your implementation, NetworkUp can use stable session routing to maintain consistent account access. This should be configured carefully and transparently."
    }
];

export default function Document() {
    return (
        <Documentation document={documents} />
    )
}