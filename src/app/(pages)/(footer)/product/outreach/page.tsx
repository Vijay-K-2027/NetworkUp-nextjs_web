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
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "@id": "https://networkup.io/product/outreach#software",
                "name": "NetworkUp Outreach Automation",
                "applicationCategory": "BusinessApplication, SalesEngagementSoftware",
                "operatingSystem": "All (Cloud-Based)",
                "url": "https://networkup.io/product/outreach",
                "description": "Smart LinkedIn outreach automation with dynamic AI personalization, trigger-based follow-up cadences, and cloud-safe rate limiting.",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "description": "Free Trial Available"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "285",
                    "bestRating": "5"
                },
                "featureList": [
                    "Automated Connection Requests with Personalized Notes",
                    "Trigger-Based Smart Follow-Up Sequences",
                    "AI Message Copy Generator & Icebreakers",
                    "A/B Testing Copy Optimization",
                    "Withdraw Pending Invites Automatically"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/product/outreach#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://networkup.io"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Product",
                        "item": "https://networkup.io/product/features"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Outreach",
                        "item": "https://networkup.io/product/outreach"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/product/outreach#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does NetworkUp personalize LinkedIn outreach messages?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp uses AI to analyze prospect profiles, recent activity, company news, and ICP fit to generate customized icebreakers and dynamic message variables that feel authentically 1-to-1."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens when a prospect replies to an automated outreach sequence?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp automatically detects incoming responses, halts further automated follow-up messages for that lead, and immediately routes the conversation into your unified Convobox inbox for manual review or instant reply."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many LinkedIn outreach messages can I send safely per day?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp stays strictly within LinkedIn's safety boundaries by enforcing adaptive daily limits, gradual account warmup, and human-randomized sending intervals through cloud proxies."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
