import type { Metadata } from "next";
import HelpCenterClient from "./HelpCenterClient";

export const metadata: Metadata = {
    title: "Help Center & Support Knowledge Base | NetworkUp",
    description: "Find guides, troubleshooting articles, setup instructions, and FAQs for getting started, running campaigns, managing leads, and integrating APIs with NetworkUp.",
    keywords: ["networkup help center", "networkup customer support", "linkedin outreach tutorials", "campaign setup troubleshooting", "networkup documentation"],
    alternates: {
        canonical: "https://networkup.io/resources/help-center"
    },
    openGraph: {
        title: "Help Center & Support Knowledge Base | NetworkUp",
        description: "Find guides, troubleshooting articles, setup instructions, and FAQs for getting started, running campaigns, managing leads, and integrating APIs with NetworkUp.",
        url: "https://networkup.io/resources/help-center",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Help Center"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Help Center & Knowledge Base | NetworkUp",
        description: "Search our knowledge base, guides, and FAQs for NetworkUp.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function HelpCenterPage() {
    return <HelpCenterClient />;
}
