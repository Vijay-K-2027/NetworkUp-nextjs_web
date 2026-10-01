import React from "react";
import Section1Template from "../templates/section1";
import Section2Template from "../templates/section2";
import Section3Template from "../templates/section3";
import Section4Template from "../templates/section4";
import Section213Template from "../templates/section213";
import Section313Template from "../templates/section313";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NetworkUp for Sales Teams | LinkedIn Outreach & Pipeline Platform",
    description:
        "Empower SDRs, AEs, and sales leaders to discover qualified prospects, personalize outreach with AI, manage multi-rep accounts, and accelerate sales pipeline.",
    keywords: ["linkedin outreach for sales teams", "b2b sales engagement", "sdr outbound automation", "ae prospecting tool", "sales pipeline acceleration", "networkup for sales"],
    alternates: {
        canonical: "https://networkup.io/solutions/sales-team"
    },
    openGraph: {
        title: "NetworkUp for Sales Teams | LinkedIn Outreach & Pipeline Platform",
        description:
            "Empower SDRs, AEs, and sales leaders to discover qualified prospects, personalize outreach with AI, manage multi-rep accounts, and accelerate sales pipeline.",
        url: "https://networkup.io/solutions/sales-team",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp for Sales Teams"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp for Sales Teams | LinkedIn Outreach & Pipeline Platform",
        description:
            "Empower SDRs, AEs, and sales leaders to discover qualified prospects, personalize outreach with AI, manage multi-rep accounts, and accelerate sales pipeline.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function SalesTeamPage() {
    return (
        <div className="w-full flex flex-col bg-[#f7f9fb]">
            <Section1Template />
            <Section2Template />
            <Section3Template />
            <Section4Template />
            <Section213Template />
            <Section313Template />
        </div>
    );
}
