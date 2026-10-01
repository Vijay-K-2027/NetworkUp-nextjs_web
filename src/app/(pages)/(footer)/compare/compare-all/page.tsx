import type { Metadata } from "next";
import CompareAllClient from "./CompareAllClient";

export const metadata: Metadata = {
    title: "NetworkUp vs All Competitors | Complete LinkedIn Outreach Comparison",
    description: "Compare NetworkUp against Sendpilot, Waalaxy, Dripify, Expandi, Reachy, Heyreach, Apollo, Lemlist, and Sales Navigator. See full feature-by-feature matrix and advantages.",
    keywords: ["linkedin outreach tools comparison", "networkup vs competitors", "best linkedin automation tool 2026", "waalaxy alternative", "expandi alternative", "dripify alternative", "apollo alternative"],
    alternates: {
        canonical: "https://networkup.io/compare/compare-all"
    },
    openGraph: {
        title: "NetworkUp vs All Competitors | Complete LinkedIn Outreach Comparison",
        description: "Compare NetworkUp against Sendpilot, Waalaxy, Dripify, Expandi, Reachy, Heyreach, Apollo, Lemlist, and Sales Navigator. See full feature-by-feature matrix and advantages.",
        url: "https://networkup.io/compare/compare-all",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Competitor Comparison Matrix"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp vs All Competitors | Complete LinkedIn Outreach Comparison",
        description: "Compare NetworkUp against Sendpilot, Waalaxy, Dripify, Expandi, Reachy, Heyreach, Apollo, Lemlist, and Sales Navigator.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function CompareAllPage() {
    return <CompareAllClient />;
}
