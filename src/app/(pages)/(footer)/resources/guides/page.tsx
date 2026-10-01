import type { Metadata } from "next";
import GuidesClient from "./GuidesClient";

export const metadata: Metadata = {
    title: "Product Manual & Guides | Step-by-Step LinkedIn Outreach Guide",
    description: "Master NetworkUp with our 8-step product manual. Learn account connection, prospect discovery, multi-step campaign building, AI message writing, and campaign scaling.",
    keywords: ["networkup user guide", "product manual", "linkedin automation tutorial", "how to scale linkedin outreach", "b2b prospecting guide", "campaign builder walkthrough"],
    alternates: {
        canonical: "https://networkup.io/resources/guides"
    },
    openGraph: {
        title: "Product Manual & Guides | Step-by-Step LinkedIn Outreach Guide",
        description: "Master NetworkUp with our 8-step product manual. Learn account connection, prospect discovery, multi-step campaign building, AI message writing, and campaign scaling.",
        url: "https://networkup.io/resources/guides",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Product Manual & Guides"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Product Manual & Guides | NetworkUp",
        description: "Scale your LinkedIn outreach with our comprehensive 8-step guide.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function GuidesPage() {
    return <GuidesClient />;
}
