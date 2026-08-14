import { Metadata } from "next";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Part2 from "./components/Section4/Part2";
import Part1 from "./components/Section4/Part1";

export const metadata: Metadata = {
    title: "Outreach Solutions for Sales, Recruiters & Agencies | NetworkUp.io",
    // description needs to explain more in detail (120 - 150 words)
    description: "Scale your LinkedIn prospecting and relationship building. Specialized workflows for sales teams, recruiters, agencies, and startups to drive growth.",
    keywords: ["linkedin outreach", "lead generation", "sales prospecting", "agency growth", "recruiter automation", "startup networking", "b2b outreach"],
    alternates: {
        canonical: "https://networkup.io/solutions"
    },
    openGraph: {
        title: "Outreach Solutions for Sales, Recruiters & Agencies | NetworkUp.io",
        description: "Scale your LinkedIn prospecting and relationship building. Specialized workflows for sales teams, recruiters, agencies, and startups to drive growth.",
        url: "https://networkup.io/solutions",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        // Need to make a proper image and then store it in public
        images: [
            {
                url: "https://networkup.io/og-solutions.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Solutions"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Outreach Solutions for Sales, Recruiters & Agencies | NetworkUp.io",
        description: "Scale your LinkedIn prospecting and relationship building. Specialized workflows for sales teams, recruiters, agencies, and startups to drive growth.",
        images: ["https://networkup.io/og-solutions.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function Solutions() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section5 />
            <Section7 />
            <Section8 />
            <Part2 />
            <Section9 />
            <Part1 />
            <Section10 />
            <Section6 />
        </>
    )
}