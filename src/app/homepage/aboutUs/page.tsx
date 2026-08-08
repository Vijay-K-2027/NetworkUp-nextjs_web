import { Metadata } from "next";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";


export const metadata: Metadata = {
    title: "About Us | NetworkUp.io",
    // make a description of 120 - 150 words
    description: "Meet the team and learn about the mission behind NetworkUp.io. We are building the future of AI-powered professional networking and outreach.",
    keywords: ["networkup story", "about networkup", "linkedin automation team", "ai outreach mission", "professional networking history"],
    alternates: {
        canonical: "https://networkup.io/homepage/aboutUs"
    },
    openGraph: {
        title: "About Us | NetworkUp.io",
        description: "Meet the team and learn about the mission behind NetworkUp.io. We are building the future of AI-powered professional networking and outreach.",
        url: "https://networkup.io/homepage/aboutUs",
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
            <div className="w-full max-w-9xl bg-[#fafcf7] mx-auto">
                <div className="flex flex-col items-center justify-center py-10 mt-5 gap-y-3 ">
                    <h4 className="uppercase text-[#71EB34] text-xl text-center font-bold">Our Story</h4>
                    <h2 className="text-2xl sm:text-3xl max-w-[400px] w-full text-center font-extrabold tracking-tighter -mt-2 px-4">How it all started </h2>
                    <h3 className="w-full text-center text-md sm:text-lg text-gray-500 px-4">A journey driven by a simple belief — outreach should be human, not manual.</h3>
                </div>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </>
    )
}