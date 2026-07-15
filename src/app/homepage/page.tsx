import Navbar from "@/app/homepage/components/Navbar";
import Hero from "@/app/homepage/components/Hero";
import DashboardPreview from "@/app/homepage/components/DashboardPreview";
import Teams from "@/app/homepage/components/Teams";
import Features from "@/app/homepage/components/Features";
import Workflow from "@/app/homepage/components/Workflow";
import SetsApart from "@/app/homepage/components/SetsApart";
import PromptAssistant from "@/app/homepage/components/PromptAssistant";
import Stats from "@/app/homepage/components/Stats";
import Documentation from "@/app/homepage/components/Documentation";
import Pricing from "@/app/homepage/components/Pricing";
import Contact from "@/app/homepage/components/Contact";
import CTABanner from "@/app/homepage/components/CTABanner";
import Footer from "@/app/homepage/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
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
            <CTABanner />
            <Footer />
        </>
    );
}