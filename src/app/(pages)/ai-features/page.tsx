import { Metadata } from "next";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";

export const metadata: Metadata = {
    title: "AI-Powered LinkedIn Outreach Features | NetworkUp.io",
    description: "Discover the AI outreach engine driving NetworkUp.io. Our AI Features page guides you through our Smart Prospecting tool with intent lead scoring to isolate high-value prospects. Leverage the AI Message Writer to draft personalized connection invites and InMails in seconds. Monitor campaign performance via our Analytics telemetry suite, featuring A/B testing reports, reply sentiment analysis, and vertical benchmarking. Maximize safety with the AI Health Center's real-time risk detection and safety limits compliance alerts. Experience our 24/7 Context-aware AI Help Desk for custom outreach optimizations, alongside Inbound Automation triggers that automatically sequence replies and manage DMs on autopilot to securely scale relationships without triggering robotic spam warning filters.",
    keywords: ["ai linkedin tool", "automated prospecting", "ai message builder", "smart follow-ups", "linkedin automation features", "linkedin lead scoring", "reply sentiment analysis", "inbound automation", "ab testing linkedin", "outreach risk detection"],
    alternates: {
        canonical: "https://www.networkup.io/ai-features"
    },
    openGraph: {
        title: "AI-Powered LinkedIn Outreach Features | NetworkUp.io",
        description: "Discover the AI outreach engine driving NetworkUp.io. Our AI Features page guides you through our Smart Prospecting tool with intent lead scoring to isolate high-value prospects. Leverage the AI Message Writer to draft personalized connection invites and InMails in seconds. Monitor campaign performance via our Analytics telemetry suite, featuring A/B testing reports, reply sentiment analysis, and vertical benchmarking. Maximize safety with the AI Health Center's real-time risk detection and safety limits compliance alerts. Experience our 24/7 Context-aware AI Help Desk for custom outreach optimizations, alongside Inbound Automation triggers that automatically sequence replies and manage DMs on autopilot to securely scale relationships without triggering robotic spam warning filters.",
        url: "https://www.networkup.io/ai-features",
        siteName: "NetworkUp",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.networkup.io/og-features.jpg",
                width: 1200,
                height: 630,
                alt: "AI Features NetworkUp"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "AI-Powered LinkedIn Outreach Features | NetworkUp.io",
        description: "Discover the AI outreach engine driving NetworkUp.io. Our AI Features page guides you through our Smart Prospecting tool with intent lead scoring to isolate high-value prospects. Leverage the AI Message Writer to draft personalized connection invites and InMails in seconds. Monitor campaign performance via our Analytics telemetry suite, featuring A/B testing reports, reply sentiment analysis, and vertical benchmarking. Maximize safety with the AI Health Center's real-time risk detection and safety limits compliance alerts. Experience our 24/7 Context-aware AI Help Desk for custom outreach optimizations, alongside Inbound Automation triggers that automatically sequence replies and manage DMs on autopilot to securely scale relationships without triggering robotic spam warning filters.",
        images: ["https://www.networkup.io/og-features.jpg"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function AIFeatures() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section5 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section4 />
            <Section6 />
        </>
    )
}