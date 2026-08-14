import { Metadata } from "next";
import Documentations from "./components/documentations"
import Detailed from "./components/Detailed"
import Comparision from "./components/Comparision"
import Price from "./components/Price"

export const metadata: Metadata = {
    title: "Pricing Plans & Packages | NetworkUp.io",
    // Make the description 120-150 words
    description: "Choose the perfect plan that scales with you. Clear and transparent pricing options for startups, professional teams, and enterprises.",
    keywords: ["networkup pricing", "linkedin tool cost", "saas pricing sales", "recruiting software pricing", "b2b outreach subscription"],
    alternates: {
        canonical: "https://networkup.io/pricing"
    },
    openGraph: {
        title: "Pricing Plans & Packages | NetworkUp.io",
        description: "Choose the perfect plan that scales with you. Clear and transparent pricing options for startups, professional teams, and enterprises.",
        url: "https://networkup.io/pricing",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        // Make sure to upload the image in public
        images: [
            {
                url: "https://networkup.io/og-pricing.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Pricing Plans"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing Plans & Packages | NetworkUp.io",
        description: "Choose the perfect plan that scales with you. Clear and transparent pricing options for startups, professional teams, and enterprises.",
        images: ["https://networkup.io/og-pricing.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};


export default function PricingSection() {
    return (
        <>
            <Comparision />
            <Price />
            <Detailed />
            <Documentations />
        </>
    )
}