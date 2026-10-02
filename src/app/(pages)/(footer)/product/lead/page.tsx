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
    title: "Lead Finder | AI-Powered B2B Prospect Discovery | NetworkUp.io",
    description: "Discover high-intent decision-makers and build verified prospect lists with NetworkUp's AI Lead Finder. Filter by seniority, industry, tech stack, and intent signals before launching outreach.",
    keywords: ["linkedin lead finder", "b2b prospect discovery", "lead enrichment", "icp lead scoring", "sales prospecting tool", "networkup lead finder"],
    alternates: {
        canonical: "https://networkup.io/product/lead"
    },
    openGraph: {
        title: "Lead Finder | AI-Powered B2B Prospect Discovery | NetworkUp.io",
        description: "Discover high-intent decision-makers and build verified prospect lists with NetworkUp's AI Lead Finder. Filter by seniority, industry, tech stack, and intent signals before launching outreach.",
        url: "https://networkup.io/product/lead",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp AI Lead Finder"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Lead Finder | AI-Powered B2B Prospect Discovery | NetworkUp.io",
        description: "Discover high-intent decision-makers and build verified prospect lists with NetworkUp's AI Lead Finder. Filter by seniority, industry, tech stack, and intent signals before launching outreach.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function OverviewPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "@id": "https://networkup.io/product/lead#software",
                "name": "NetworkUp AI Lead Finder",
                "applicationCategory": "BusinessApplication, LeadGenerationSoftware, ProspectingTool",
                "operatingSystem": "All (Cloud-Based)",
                "url": "https://networkup.io/product/lead",
                "description": "AI-powered B2B lead discovery tool to find verified decision-makers, score ICP fit, detect buying signals, and export enriched prospect lists.",
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
                    "ratingCount": "295",
                    "bestRating": "5"
                },
                "featureList": [
                    "B2B Decision-Maker Search & Seniority Filters",
                    "AI Ideal Customer Profile (ICP) Scoring",
                    "Real-Time Buying Signals & Job Change Triggers",
                    "Technographic & Firmographic Filters",
                    "Automated Lead List Export & Direct Campaign Enrollment"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/product/lead#breadcrumb",
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
                        "name": "Lead Finder",
                        "item": "https://networkup.io/product/lead"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/product/lead#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does NetworkUp's Lead Finder discover prospects?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp filters millions of B2B profiles by job title, department, company headcount, tech stack, funding rounds, and recent hiring activity to uncover active decision-makers matching your exact target ICP."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I automatically push discovered leads into an outreach campaign?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, with one click you can enroll qualified prospect lists directly into automated multi-step LinkedIn sequences with AI-personalized icebreakers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What data points does NetworkUp provide for each lead?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp provides verified professional details including full name, LinkedIn URL, job title, company name, industry, company size, tech stack, and AI fit score."
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