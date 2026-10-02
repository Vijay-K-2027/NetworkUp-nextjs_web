import React from "react";
import Section1Template from "../templates/section1";
import Section2Template from "../templates/section2";
import Section3Template, { ComparisonCardItem } from "../templates/section3";
import Section124Template, { SourcingFeatureItem, SourcingCampaignCard } from "../templates/section124";
import Section3245Template, { EnterpriseReadinessCard } from "../templates/section3245";
import { Users, Radio, Inbox, SlidersHorizontal, Laptop, Award, Shield, BadgeCheck } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NetworkUp for Startups | Founder-Led LinkedIn Outbound & Pipeline",
    description:
        "Help founders and lean GTM teams discover the right prospects, personalize outreach with AI, automate follow-ups, and build a repeatable B2B pipeline without adding unnecessary manual work.",
    keywords: ["linkedin outreach for startups", "founder led sales outbound", "startup lead generation", "lean gtm prospecting", "b2b pipeline builder", "networkup for startups"],
    alternates: {
        canonical: "https://networkup.io/solutions/startups"
    },
    openGraph: {
        title: "NetworkUp for Startups | Founder-Led LinkedIn Outbound & Pipeline",
        description:
            "Help founders and lean GTM teams discover the right prospects, personalize outreach with AI, automate follow-ups, and build a repeatable B2B pipeline without adding unnecessary manual work.",
        url: "https://networkup.io/solutions/startups",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp for Startups"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp for Startups | Founder-Led LinkedIn Outbound & Pipeline",
        description:
            "Help founders and lean GTM teams discover the right prospects, personalize outreach with AI, automate follow-ups, and build a repeatable B2B pipeline without adding unnecessary manual work.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

const startupComparisonCards: ComparisonCardItem[] = [
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Hiring SDRs Before You Have a Repeatable Motion",
        traditionalDescription:
            "Early-stage teams can spend significant time and budget hiring and managing outbound reps before they've validated their ICP and messaging.",
        advantageBadge: "NetworkUp Advantage",
        advantageDescription:
            "Find relevant prospects, prioritize high-intent leads, and personalize outreach without building a large outbound team.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Slow ICP & Messaging Validation",
        traditionalDescription:
            "Test different audiences, messages and outreach sequences without rebuilding your entire outbound process.",
        advantageBadge: "NetworkUp Advantage",
        advantageDescription:
            "Build targeted campaigns, test messaging variations, and use campaign analytics to identify what resonates.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Scattered Leads & Missed Follow-Ups",
        traditionalDescription:
            "Prospect data, conversations and follow-ups can become fragmented across spreadsheets, inboxes and CRM tools.",
        advantageBadge: "NetworkUp Advantage",
        advantageDescription:
            "Keep prospects organized, automate follow-ups, and connect outreach activity with your existing CRM and workflow stack.",
    },
];

const startupFeatureList: SourcingFeatureItem[] = [
    {
        customIcon: <Users className="w-3.5 h-3.5 text-black stroke-[2.2]" />,
        title: "Multi-Seat Founder & Advisor Pooling:",
        description:
            "Orchestrate outreach across founder, co-founder, and advisor profiles simultaneously with unified territory control.",
    },
    {
        customIcon: <Radio className="w-3.5 h-3.5 text-black stroke-[2.2]" />,
        title: "Automated Buyer Intent Signals:",
        description:
            "Trigger outreach the moment target accounts raise funding, hire executives, or post relevant content.",
    },
    {
        customIcon: <Inbox className="w-3.5 h-3.5 text-black stroke-[2.2]" />,
        title: "Unified Response Cockpit:",
        description:
            "Triage all LinkedIn conversations from a single inbox, tag hot opportunities, and hand off meetings to your calendar in one click.",
    },
];

const startupCampaigns: SourcingCampaignCard[] = [
    {
        title: "Series A SaaS CTOs (DevTools)",
        badge: "Active (Founder Seat)",
        locationAndIndustry: "San Francisco / Remote • Founder Seat",
        prospectsCount: "142",
        repliesCount: "58 (40.8%)",
        demosCount: "18 Booked",
    },
    {
        title: "VP Growth & RevOps (FinTech)",
        badge: "Active (Co-Founder Seat)",
        locationAndIndustry: "New York, NY • Co-Founder Seat",
        prospectsCount: "96",
        repliesCount: "42 (43.7%)",
        demosCount: "15 Booked",
    },
    {
        title: "Enterprise AI Decision Makers",
        badge: "Active (Advisor Seat)",
        locationAndIndustry: "Austin / Boston • Advisor Seat",
        prospectsCount: "118",
        repliesCount: "64 (54.2%)",
        demosCount: "21 Booked",
    },
];

const startupReadinessCards: EnterpriseReadinessCard[] = [
    {
        customIcon: <Laptop className="w-5 h-5 text-[#000400] stroke-[1.8]" />,
        title: "CRM & Workflow Integrations",
        description:
            "Connect outreach activity with your existing CRM and automation stack.",
    },
    {
        customIcon: <Award className="w-5 h-5 text-[#000400] stroke-[1.8]" />,
        title: "Account Safety Controls",
        description:
            "Use smart limits and activity controls to manage automation responsibly.",
    },
    {
        customIcon: <Shield className="w-5 h-5 text-[#000400] stroke-[1.8]" />,
        title: "AI-Powered Optimization",
        description:
            "Use AI insights to improve messaging, targeting and campaign performance.",
    },
    {
        customIcon: <BadgeCheck className="w-5 h-5 text-[#000400] stroke-[1.8]" />,
        title: "Enterprise Access Controls",
        description:
            "Enterprise plans include SSO/SAML authentication and audit logs.",
    },
];

export default function StartupsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://networkup.io/solutions/startups#service",
                "name": "NetworkUp for Startups & Lean GTM Teams",
                "serviceType": "Founder-Led LinkedIn Outbound & B2B Pipeline Growth",
                "provider": {
                    "@type": "Organization",
                    "name": "NetworkUp.io",
                    "url": "https://networkup.io"
                },
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Startup Founders, Co-Founders, Early-Stage GTM Teams, Growth Leads"
                },
                "description": "LinkedIn prospecting platform for startup founders to book early customer discovery demos, test ICP messaging, and build early revenue pipeline without hiring expensive SDR teams.",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "description": "Free Startup Trial Available"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/solutions/startups#breadcrumb",
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
                        "name": "For Startups",
                        "item": "https://networkup.io/solutions/startups"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://networkup.io/solutions/startups#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does NetworkUp help early-stage founders scale outbound sales?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NetworkUp allows startup founders to automate connection requests, personalize messages with AI, and test different market positioning angles on LinkedIn without needing a dedicated sales team or prior outbound experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can we pool LinkedIn seats across founders, co-founders, and advisors?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, NetworkUp supports multi-seat founder and advisor pooling so you can orchestrate synchronized outreach campaigns from multiple high-credibility executive profiles simultaneously."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How fast can a startup validate its Ideal Customer Profile (ICP)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "With NetworkUp's real-time campaign analytics and A/B test variations, founders can test response rates across different industries and job titles within 7 to 14 days."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="w-full flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* HERO SECTION */}
            <Section1Template
                breadcrumbCategory="Solutions"
                breadcrumbCategoryHref="/solutions"
                breadcrumbPageTitle="For Startups"
                badgeText="FOUNDER-LED OUTBOUND & PIPELINE ACCELERATION"
                badgeClassName="bg-[#e5eeff] text-[#416900]"
                title={
                    <>
                        Build Connections that Move <br className="hidden md:inline" />
                        Your Startup Forward
                    </>
                }
                description="Help founders and lean GTM teams discover the right prospects, personalize outreach with AI, automate follow-ups, and build a repeatable B2B pipeline without adding unnecessary manual work."
                primaryCtaText="Start Free Trial"
                primaryCtaHref="/signup"
                secondaryCtaText="Book Demo"
                secondaryCtaHref="/book-demo"
                featureChecks={[
                    "Zero outbound experience needed",
                    "Rapid ICP message testing",
                    "Smart Shield™ account safety",
                ]}
                imageSrc="/footer/solutions/4.png"
                imageAlt="Build Connections that Move Your Startup Forward"
            />

            {/* TRUSTED LOGOS SECTION */}
            <Section2Template
                tagline="TRUSTED BY FAST-GROWING STARTUPS & LEAN GTM TEAMS"
            />

            {/* TRADITIONAL VS NETWORKUP ADVANTAGE SECTION */}
            <Section3Template
                titleLine1="Building an SDR Team Too Early Can Drain"
                titleLine2="Your Runway"
                cards={startupComparisonCards}
                sectionClass="w-full bg-[#eff4ff] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            />

            {/* OUTBOUND WORKSPACE FOR LEAN GTM TEAMS */}
            <Section124Template
                mainHeading="A Complete Outbound Workspace for Lean GTM Teams"
                mainSubtitle="Find prospects, launch personalized campaigns, automate follow-ups, and track what converts — without adding unnecessary complexity."
                eyebrowBadge="FOUNDER TIME MAXIMIZATION"
                headlineLine1="Scale Founder-Led Sales Without Adding"
                headlineLine2="SDR Overhead"
                description="As a founder, your time is limited. NetworkUp helps you find the right prospects, personalize outreach, and automate follow-ups so you can spend more time on high-value conversations."
                featureList={startupFeatureList}
                linkText="Explore Founder Growth Suite"
                linkHref="#"
                mockupHeaderTitle="Active Founder Campaigns"
                mockupHeaderBadge="Live Real-Time"
                mockupHeaderIcon={<SlidersHorizontal className="w-4 h-4 text-[#416900]" />}
                metric1DefaultLabel="Prospects"
                metric2DefaultLabel="Replies"
                metric3DefaultLabel="Demos"
                campaigns={startupCampaigns}
            />

            {/* ENTERPRISE-LEVEL CONTROL SECTION */}
            <Section3245Template
                eyebrowBadge="FOUNDER-FRIENDLY & SCALABLE"
                heading="Built for Lean Teams That Need Enterprise-Level Control"
                subtitle="Maintain complete control over your startup's brand, messaging reputation, and compliance standards."
                cards={startupReadinessCards}
            />
        </div>
    );
}
