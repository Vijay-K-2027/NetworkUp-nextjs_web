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
    title: "Convobox | Unified LinkedIn Inbox & Conversation Management | NetworkUp.io",
    description: "Streamline your sales conversations with Convobox. A unified multi-account LinkedIn inbox with AI intent classification, message tagging, and team collaboration.",
    keywords: ["unified linkedin inbox", "convobox", "linkedin message management", "ai intent classification", "multi-account linkedin inbox", "sales conversation manager", "networkup convobox"],
    alternates: {
        canonical: "https://networkup.io/product/convobox"
    },
    openGraph: {
        title: "Convobox | Unified LinkedIn Inbox & Conversation Management | NetworkUp.io",
        description: "Streamline your sales conversations with Convobox. A unified multi-account LinkedIn inbox with AI intent classification, message tagging, and team collaboration.",
        url: "https://networkup.io/product/convobox",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Convobox Unified Inbox"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Convobox | Unified LinkedIn Inbox & Conversation Management | NetworkUp.io",
        description: "Streamline your sales conversations with Convobox. A unified multi-account LinkedIn inbox with AI intent classification, message tagging, and team collaboration.",
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
