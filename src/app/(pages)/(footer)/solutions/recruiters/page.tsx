import React from "react";
import { Check, RefreshCw, ShieldCheck, Shield, ArrowLeftRight } from "lucide-react";
import Section1Template from "../templates/section1";
import Section2Template from "../templates/section2";
import Section3Template, { ComparisonCardItem } from "../templates/section3";
import Section22Template from "../templates/section22";
import Section3245Template from "../templates/section3245";
import Section124Template from "../templates/section124";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NetworkUp for Recruiters | Automated LinkedIn Sourcing & Talent Pipeline",
    description:
        "Empower recruiting teams and executive search firms to discover qualified candidates, personalize outreach, automate follow-ups, and manage talent pipelines from one connected workspace.",
    keywords: ["linkedin talent sourcing", "automated candidate outreach", "recruiter linkedin automation", "talent pipeline platform", "executive search automation", "networkup for recruiters"],
    alternates: {
        canonical: "https://networkup.io/solutions/recruiters"
    },
    openGraph: {
        title: "NetworkUp for Recruiters | Automated LinkedIn Sourcing & Talent Pipeline",
        description:
            "Empower recruiting teams and executive search firms to discover qualified candidates, personalize outreach, automate follow-ups, and manage talent pipelines from one connected workspace.",
        url: "https://networkup.io/solutions/recruiters",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp for Recruiters"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp for Recruiters | Automated LinkedIn Sourcing & Talent Pipeline",
        description:
            "Empower recruiting teams and executive search firms to discover qualified candidates, personalize outreach, automate follow-ups, and manage talent pipelines from one connected workspace.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const recruiterComparisonCards: ComparisonCardItem[] = [
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Low Context Outreach",
        traditionalDescription:
            "Generic messages and limited candidate context make it difficult to build meaningful conversations.",
        advantageBadge: "NetworkUp Advantage",
        advantageTitle: "Centralized Client Workspaces:",
        advantageDescription:
            "Organize campaigns, prospects, accounts, and performance data for each client from one workspace.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Manual & Risky Sourcing",
        traditionalDescription:
            "Repetitive browsing and manual outreach make sourcing slow and difficult to scale safely.",
        advantageBadge: "NetworkUp Advantage",
        advantageTitle: "Smart Activity Controls:",
        advantageDescription:
            "Manage campaign pacing and activity limits to support more responsible outreach workflows.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Fragmented Candidate Workflows",
        traditionalDescription:
            "Recruiters often switch between sourcing tools, spreadsheets, inboxes, and ATS platforms to manage one candidate journey.",
        advantageBadge: "NetworkUp Advantage",
        advantageTitle: "Automated Client Reporting:",
        advantageDescription:
            "Give agencies clearer visibility into campaign activity, engagement, and performance without rebuilding reports manually.",
    },
];

export default function RecruitersPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://networkup.io/solutions/recruiters#service",
                "name": "NetworkUp for Recruiters & Search Firms",
                "serviceType": "Automated LinkedIn Talent Sourcing & Candidate Engagement",
                "provider": {
                    "@type": "Organization",
                    "name": "NetworkUp.io",
                    "url": "https://networkup.io"
                },
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Tech Recruiters, Executive Search Consultants, Headhunters, Talent Acquisition Leaders"
                },
                "description": "Recruiter LinkedIn automation platform to source passive top-tier candidates, automate personalized connection outreach without burning InMail credits, and sync responses to your ATS.",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "description": "Free Recruiter Trial Available"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/solutions/recruiters#breadcrumb",
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
                        "name": "Solutions",
                        "item": "https://networkup.io/solutions/sales-team"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "For Recruiters",
                        "item": "https://networkup.io/solutions/recruiters"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/solutions/recruiters#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does NetworkUp help recruiters reach passive candidates without LinkedIn InMail credits?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp automates hyper-personalized direct connection requests and follow-up sequences using candidate profile data, achieving up to 3.8x higher response rates than generic cold InMails without consuming monthly InMail credits."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can recruiting teams integrate NetworkUp with their Applicant Tracking System (ATS)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, NetworkUp supports integrations and webhooks with popular ATS platforms like Greenhouse, Lever, Ashby, and Bullhorn to sync interested candidate profiles automatically."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is automated candidate sourcing on LinkedIn safe for my recruiter profile?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp operates 100% in the cloud with Smart Shield™ safety algorithms, randomized human behavior delays, and strict pacing to ensure recruiter accounts stay 100% safe."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="w-full flex flex-col bg-[#f7f9fb]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* HERO SECTION */}
            <Section1Template
                breadcrumbCategory="Solutions"
                breadcrumbCategoryHref="/solutions"
                breadcrumbPageTitle="For Recruiters"
                topRightNotice="⚡3.8X CANDIDATE INMAIL ACCEPTANCE RATE WITHOUT BURNING INVENTORIES"
                badgeText="TALENT PIPELINE ACCELERATION & SOURCING"
                badgeIcon={<Shield className="w-3.5 h-3.5 text-[#7deb2c] shrink-0" />}
                badgeClassName="bg-[#112a06] text-[#7deb2c] border border-[#234b10]"
                title={
                    <>
                        Empower Your Recruiters to Build <br className="hidden md:inline" />
                        a Stronger Talent Pipeline on <br className="hidden md:inline" />
                        LinkedIn
                    </>
                }
                description="Empower recruiting teams and executive search firms to discover qualified candidates, personalize outreach, automate follow-ups, and manage talent pipelines from one connected workspace."
                primaryCtaText="Start Free Trial"
                primaryCtaHref="https://app.networkup.io/#/login"
                secondaryCtaText="Book Demo"
                secondaryCtaHref="https://calendly.com/networkup-io/30min"
                featureChecks={[
                    {
                        label: "Zero InMail credit waste",
                        icon: <Check className="w-3 h-3 text-[#416900] stroke-[2.5]" />,
                    },
                    {
                        label: "2-way ATS sync",
                        icon: <ArrowLeftRight className="w-3 h-3 text-[#416900] stroke-[2]" />,
                    },
                    {
                        label: "Smart Shield™ safety",
                        icon: <ShieldCheck className="w-3 h-3 text-[#416900] stroke-[2]" />,
                    },
                ]}
                imageSrc="/footer/solutions/2.png"
                imageAlt="Empower Your Recruiters to Build a Stronger Talent Pipeline on LinkedIn"
            />

            {/* TRUSTED LOGOS SECTION */}
            <Section2Template
                tagline="TRUSTED BY LEADING SEARCH FIRMS & HIGH-GROWTH TALENT TEAMS"
            />

            {/* TRADITIONAL VS NETWORKUP ADVANTAGE SECTION */}
            <Section3Template
                titleLine1="Traditional LinkedIn Sourcing Is Fragmented."
                titleLine2="Here's How Modern Recruiting Teams Win."
                cards={recruiterComparisonCards}
                sectionClass="w-full bg-[#eff4ff] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            />
            <Section124Template />
            <Section22Template />
            <Section3245Template />
        </div>
    );
}
