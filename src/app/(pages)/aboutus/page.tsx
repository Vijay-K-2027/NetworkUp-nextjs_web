import { Metadata } from "next";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";


export const metadata: Metadata = {
    title: { absolute: "About NetworkUp | Our Mission & Platform" },
    description: "Learn about NetworkUp, its mission and the team behind its LinkedIn outreach platform. Discover the product's approach to prospecting and professional.", keywords: ["networkup story", "about networkup", "linkedin automation team", "ai outreach mission", "professional networking history"],
    alternates: {
        canonical: "https://networkup.io/aboutus"
    },
    openGraph: {
        title: "About NetworkUp | Our Mission & Platform",
        description: "Learn about NetworkUp, its mission and the team behind its LinkedIn outreach platform. Discover the product's approach to prospecting and professional.",
        url: "https://networkup.io/aboutus",
        siteName: "NetworkUp",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/seo/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "About NetworkUp"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "About NetworkUp | Our Mission & Platform",
        description: "Learn about NetworkUp, its mission and the team behind its LinkedIn outreach platform. Discover the product's approach to prospecting and professional.",
        images: ["https://networkup.io/seo/og-about.jpg"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function OverviewPage() {
    return (
        <>
            <div className="w-full max-w-9xl bg-[#fafcf7] mx-auto">
                <div className="flex flex-col items-center justify-center py-10 gap-y-3 ">
                    <h4 className="uppercase text-[#71EB34] text-xl text-center font-bold">Our Story</h4>
                    <h1 className="text-2xl sm:text-3xl max-w-[500px] w-full text-center font-bold text-[#0A0C10] tracking-tighter -mt-2 px-4">About NetworkUp: How it all started</h1>
                    <h3 className="w-full text-center text-md sm:text-lg text-[#6B7280] px-4">A journey driven by a simple belief — outreach should be human, not manual.</h3>
                </div>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <section className="w-full max-w-9xl bg-[#fafcf7] mx-auto mb-5 text-center">
                <p className="text-lg tracking-wide text-[#183000]">NetworkUp.io is <span className="text-[#7fd000]">our flagship product,</span> built with the experience, technology, and values</p>
                <p className="text-lg tracking-wide text-[#183000]">we've gained while building products that customers love.</p>
            </section>
        </>
    )
}