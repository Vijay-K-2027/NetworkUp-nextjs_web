import type { Metadata } from "next";
import Hero from "@/app/homepage/components/Hero";
import DashboardPreview from "@/app/homepage/components/DashboardPreview";
import Teams from "@/app/homepage/components/Teams";
import Features from "@/app/homepage/components/Features";
import Workflow from "@/app/homepage/components/Workflow";
import SetsApart from "@/app/homepage/components/SetsApart";
import PromptAssistant from "@/app/homepage/components/PromptAssistant";
import Stats from "@/app/homepage/components/Stats";
import Pricing from "@/app/homepage/components/Pricing";
import Contact from "@/app/homepage/components/Contact";
import Documentation from "@/app/homepage/components/Documentation";

export const metadata: Metadata = {
    title: "NetworkUp.io | AI-Powered LinkedIn Growth & Outreach Automation Platform",
    description: "Automate your LinkedIn networking with precision. Reach the right decision-makers, find high-quality leads, and convert conversations into opportunities at scale using advanced AI.",
    openGraph: {
        title: "NetworkUp.io | AI-Powered LinkedIn Growth & Outreach Automation Platform",
        description: "Automate your LinkedIn networking with precision. Reach the right decision-makers, find high-quality leads, and convert conversations into opportunities at scale using advanced AI.",
        url: "https://networkup.io/",
    }
};

export default function Home() {
    return (
        <>
            <Hero />
            <DashboardPreview />
            <Teams />
            <Features />
            <Workflow />
            <SetsApart />
            <PromptAssistant />
            <Stats />
            <Pricing />
            <Contact />
            <Documentation />
        </>
    );
}
