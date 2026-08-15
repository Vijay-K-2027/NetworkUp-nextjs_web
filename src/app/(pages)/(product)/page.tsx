import type { Metadata } from "next";
import Hero from "./components/Hero";
import DashboardPreview from "./components/DashboardPreview";
import Teams from "./components/Teams";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import SetsApart from "./components/SetsApart";
import PromptAssistant from "./components/PromptAssistant";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Document from "./components/Documentation";

export const metadata: Metadata = {
    title: "NetworkUp.io | AI-Powered LinkedIn Growth & Outreach Automation Platform",
    description: "Automate your LinkedIn networking with precision. Reach the right decision-makers, find high-quality leads, and convert conversations into opportunities at scale using advanced AI.",
    openGraph: {
        title: "NetworkUp.io | AI-Powered LinkedIn Growth & Outreach Automation Platform",
        description: "Automate your LinkedIn networking with precision. Reach the right decision-makers, find high-quality leads, and convert conversations into opportunities at scale using advanced AI.",
        url: "https://networkup.io/",
    }
};

export default function ProductPage() {
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
            <Document />
        </>
    );
}
