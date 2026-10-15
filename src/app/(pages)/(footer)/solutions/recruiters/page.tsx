import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Shield, ArrowLeftRight, ChevronRight } from "lucide-react";
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
            <section className="w-full pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-9xl mx-auto lg:px-10 space-y-4 sm:space-y-6">

                    {/* TOP ROW: BREADCRUMB + NOTICE */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 px-2 sm:gap-4">
                        <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-[#43483e]">
                            <Link
                                href="/solutions"
                                className="hover:text-[#3a6a00] transition-colors font-medium"
                            >
                                Solutions
                            </Link>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                            <span className="font-bold text-[#000400]">
                                For Recruiters
                            </span>
                        </nav>

                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/80 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#30382b] shadow-2xs self-start sm:self-auto">
                            <span className="w-2 h-2 bg-[#416900] rounded-full"></span>
                            <span>⚡3.8X CANDIDATE INMAIL ACCEPTANCE RATE WITHOUT BURNING INVENTORIES</span>
                        </div>
                    </div>

                    {/* 2-COLUMN HERO GRID */}
                    <div className="bg-[#eff4ff] grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10 items-center px-6 sm:px-10 py-8 sm:py-10 rounded-2xl">

                        {/* LEFT COLUMN: HERO COPY & CTAS */}
                        <div className="lg:col-span-7 w-full flex flex-col justify-start items-start text-left">
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg mb-4 sm:mb-5 bg-[#112a06] text-[#7deb2c] border border-[#234b10]">
                                <Shield className="w-3.5 h-3.5 text-[#7deb2c] shrink-0" />
                                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                                    TALENT PIPELINE ACCELERATION & SOURCING
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-[#000400] tracking-tight leading-[1.15]">
                                Empower Your Recruiters to Build <br className="hidden md:inline" />
                                a Stronger Talent Pipeline on <br className="hidden md:inline" />
                                LinkedIn
                            </h1>

                            {/* Description */}
                            <p className="text-sm sm:text-base md:text-lg text-[#43483e] leading-relaxed mt-4 sm:mt-5 max-w-xl font-normal">
                                Empower recruiting teams and executive search firms to discover qualified candidates, personalize outreach, automate follow-ups, and manage talent pipelines from one connected workspace.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
                                <Link
                                    href="https://app.networkup.io/#/login"
                                    className="px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-b from-[#caff95] to-[#71e300] hover:brightness-105 active:scale-[0.98] text-[#041c11] font-bold text-sm sm:text-base shadow-sm transition-all duration-200 text-center w-full sm:w-auto"
                                >
                                    Start Free Trial
                                </Link>
                                <Link
                                    href="https://calendly.com/networkup-io/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 sm:px-8 py-3.5 rounded-xl bg-white border border-[#041c11] hover:bg-[#fbfdf9] hover:border-[#181d13] active:scale-[0.98] text-[#181d13] font-bold text-sm sm:text-base transition-all duration-200 shadow-2xs text-center w-full sm:w-auto"
                                >
                                    Book Demo
                                </Link>
                            </div>

                            {/* Trust Check Badges */}
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-6 sm:mt-8 text-xs sm:text-sm text-[#43483e]">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-[#416900]/15 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-[#416900] stroke-[2.5]" />
                                    </div>
                                    <span>Zero InMail credit waste</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-[#416900]/15 rounded-full flex items-center justify-center">
                                        <ArrowLeftRight className="w-3 h-3 text-[#416900] stroke-[2]" />
                                    </div>
                                    <span>2-way ATS sync</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-[#416900]/15 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="w-3 h-3 text-[#416900] stroke-[2]" />
                                    </div>
                                    <span>Smart Shield™ safety</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: DYNAMIC IMAGE FILE */}
                        <div className="lg:col-span-5 w-full flex items-center justify-center py-2">
                            <div className="w-full flex items-center justify-center">
                                <Image
                                    src="/footer/solutions/2.png"
                                    alt="Empower Your Recruiters to Build a Stronger Talent Pipeline on LinkedIn"
                                    width={2326}
                                    height={2776}
                                    priority
                                    className="w-full h-auto max-w-[460px] lg:max-w-[620px] max-h-[560px] object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section>

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
