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
    title: { absolute: "LinkedIn Outreach Solutions for Sales & Growth Teams | NetworkUp" },
    // description needs to explain more in detail (120 - 150 words)
    description: "Explore NetworkUp solutions for sales teams, recruiters, agencies and growing businesses. Find the outreach workflow that fits your team's needs.",
    keywords: ["linkedin outreach", "lead generation", "sales prospecting", "agency growth", "recruiter automation", "startup networking", "b2b outreach", "crm integration hubspot", "candidate sourcing pipelines", "safety limits proxies"],
    alternates: {
        canonical: "https://networkup.io/solutions"
    },
    openGraph: {
        title: "LinkedIn Outreach Solutions for Sales & Growth Teams | NetworkUp",
        description: "Explore NetworkUp solutions for sales teams, recruiters, agencies and growing businesses. Find the outreach workflow that fits your team's needs.",
        url: "https://networkup.io/solutions",
        siteName: "NetworkUp",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/seo/og-solutions.jpg",
                width: 1200,
                height: 630,
                alt: "NetworkUp Solutions"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "LinkedIn Outreach Solutions for Sales & Growth Teams | NetworkUp",
        description: "Explore NetworkUp solutions for sales teams, recruiters, agencies and growing businesses. Find the outreach workflow that fits your team's needs.",
        images: ["https://networkup.io/seo/og-solutions.jpg"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function Solutions() {
    return (
        <div className="bg-[#fafcf7]">
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
        </div>
    )
}