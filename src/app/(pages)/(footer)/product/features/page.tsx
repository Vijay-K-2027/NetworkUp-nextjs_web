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
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";


export const metadata: Metadata = {
    title: "About Us | NetworkUp.io",
    // make a description of 120 - 150 words
    description: "Meet the team and learn about the mission behind NetworkUp.io. We are building the future of AI-powered professional networking and outreach.",
    keywords: ["networkup story", "about networkup", "linkedin automation team", "ai outreach mission", "professional networking history"],
    alternates: {
        canonical: "https://networkup.io/aboutus"
    },
    openGraph: {
        title: "About Us | NetworkUp.io",
        description: "Meet the team and learn about the mission behind NetworkUp.io. We are building the future of AI-powered professional networking and outreach.",
        url: "https://networkup.io/aboutus",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        // Make sure to put images in public
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "About NetworkUp"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | NetworkUp.io",
        description: "Meet the team and learn about the mission behind NetworkUp.io. We are building the future of AI-powered professional networking and outreach.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function OverviewPage() {
    return (
        <>
            <Navbar />
            <div className="bg-[#f7f9fb]">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
            </div>
            <CTABanner />
            <Footer />
        </>
    )
}