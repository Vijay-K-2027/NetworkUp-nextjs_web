import { Metadata } from "next";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

export const metadata: Metadata = {
    title: "AI-Powered LinkedIn Outreach Features | NetworkUp.io",
    // description should be 120 - 150 words
    description: "Explore NetworkUp's smart prospecting, AI campaign builder, automated follow-ups, and real-time optimization features.",
    keywords: ["ai linkedin tool", "automated prospecting", "ai message builder", "smart follow-ups", "linkedin automation features"],
    alternates: {
        canonical: "https://networkup.io/homepage/ai-features"
    },
    openGraph: {
        title: "AI-Powered LinkedIn Outreach Features | NetworkUp.io",
        description: "Explore NetworkUp's smart prospecting, AI campaign builder, automated follow-ups, and real-time optimization features.",
        url: "https://networkup.io/homepage/ai-features",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        // Make sure to paste image in public
        images: [
            {
                url: "https://networkup.io/og-features.png",
                width: 1200,
                height: 630,
                alt: "AI Features NetworkUp"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "AI-Powered LinkedIn Outreach Features | NetworkUp.io",
        description: "Explore NetworkUp's smart prospecting, AI campaign builder, automated follow-ups, and real-time optimization features.",
        images: ["https://networkup.io/og-features.png"]
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
            <Section4 />
            <Section5 />
            <Section6 />
        </>
    )
}