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
    title: "Convobox | 10x Your LinkedIn Outbound | NetworkUp.io",
    description: "Find the right people, run smarter campaigns, automate follow-ups, and manage conversations — all in one connected workspace.",
    keywords: ["networkup convobox", "linkedin outbound", "lead finder", "campaigns", "smart followups", "unified inbox", "analytics"],
    alternates: {
        canonical: "https://networkup.io/product/convobox"
    },
    openGraph: {
        title: "Convobox | 10x Your LinkedIn Outbound | NetworkUp.io",
        description: "Find the right people, run smarter campaigns, automate follow-ups, and manage conversations — all in one connected workspace.",
        url: "https://networkup.io/product/convobox",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "Convobox - NetworkUp"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Convobox | 10x Your LinkedIn Outbound | NetworkUp.io",
        description: "Find the right people, run smarter campaigns, automate follow-ups, and manage conversations — all in one connected workspace.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function ConvoboxPage() {
    return (
        <>
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
