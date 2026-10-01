import { Metadata } from "next";
import Navbar from "@/app/homepage/components/Navbar";
import CTABanner from "@/app/homepage/components/CTABanner";
import Footer from "@/app/homepage/components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

export const metadata: Metadata = {
    title: "Outreach Automation | Personalized LinkedIn Sequences | NetworkUp.io",
    description: "Scale LinkedIn outbound without sacrificing personalization. Automate smart connection requests, trigger-based follow-ups, and multi-channel engagement safely with NetworkUp.",
    keywords: ["linkedin outreach automation", "personalized linkedin messages", "automated followups", "sales outreach software", "b2b outreach sequences", "networkup outreach"],
    alternates: {
        canonical: "https://networkup.io/product/outreach"
    },
    openGraph: {
        title: "Outreach Automation | Personalized LinkedIn Sequences | NetworkUp.io",
        description: "Scale LinkedIn outbound without sacrificing personalization. Automate smart connection requests, trigger-based follow-ups, and multi-channel engagement safely with NetworkUp.",
        url: "https://networkup.io/product/outreach",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "Outreach Automation - NetworkUp"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Outreach Automation | Personalized LinkedIn Sequences | NetworkUp.io",
        description: "Scale LinkedIn outbound without sacrificing personalization. Automate smart connection requests, trigger-based follow-ups, and multi-channel engagement safely with NetworkUp.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function OutreachPage() {
    return (
        <>
            <Navbar />
            <div className="bg-[#f7f9fb] lg:p-10">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
            </div>
            <CTABanner />
            <Footer />
        </>
    );
}
