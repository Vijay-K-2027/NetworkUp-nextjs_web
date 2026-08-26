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
    description: "Explore tailored LinkedIn outreach solutions at NetworkUp.io. Scale prospecting workflows designed specifically for Sales Teams to automate lead generation and sync key contacts with CRMs like Salesforce and HubSpot. Empower Recruitment Teams to build custom candidate sequences and track engagement to fill empty roles faster. Assist Lead Gen Agencies to manage multiple profiles, target specific industries, and export Event-Ready leads. Protect your LinkedIn account with our Safety and Compliance stack, enforcing strict connection limits (max 100 per week), action limits (max 50 per day), location-pinned static proxies, and human-like delay thresholds to safely grow your pipeline without bot detection flags.",
    keywords: ["linkedin outreach", "lead generation", "sales prospecting", "agency growth", "recruiter automation", "startup networking", "b2b outreach", "crm integration hubspot", "candidate sourcing pipelines", "safety limits proxies"],
    alternates: {
        canonical: "https://www.networkup.io/solutions"
    },
    openGraph: {
        title: "Outreach Solutions for Sales, Recruiters & Agencies | NetworkUp.io",
        description: "Explore tailored LinkedIn outreach solutions at NetworkUp.io. Scale prospecting workflows designed specifically for Sales Teams to automate lead generation and sync key contacts with CRMs like Salesforce and HubSpot. Empower Recruitment Teams to build custom candidate sequences and track engagement to fill empty roles faster. Assist Lead Gen Agencies to manage multiple profiles, target specific industries, and export Event-Ready leads. Protect your LinkedIn account with our Safety and Compliance stack, enforcing strict connection limits (max 100 per week), action limits (max 50 per day), location-pinned static proxies, and human-like delay thresholds to safely grow your pipeline without bot detection flags.",
        url: "https://www.networkup.io/solutions",
        siteName: "NetworkUp",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.networkup.io/seo/og-solutions.jpg",
                width: 1200,
                height: 630,
                alt: "NetworkUp Solutions"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Outreach Solutions for Sales, Recruiters & Agencies | NetworkUp.io",
        description: "Explore tailored LinkedIn outreach solutions at NetworkUp.io. Scale prospecting workflows designed specifically for Sales Teams to automate lead generation and sync key contacts with CRMs like Salesforce and HubSpot. Empower Recruitment Teams to build custom candidate sequences and track engagement to fill empty roles faster. Assist Lead Gen Agencies to manage multiple profiles, target specific industries, and export Event-Ready leads. Protect your LinkedIn account with our Safety and Compliance stack, enforcing strict connection limits (max 100 per week), action limits (max 50 per day), location-pinned static proxies, and human-like delay thresholds to safely grow your pipeline without bot detection flags.",
        images: ["https://www.networkup.io/seo/og-solutions.jpg"]
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