import { Metadata } from "next";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";


export const metadata: Metadata = {
    title: "About Us | NetworkUp.io",
    description: "Learn the mission behind NetworkUp.io by WhiterApps. Founded in 2019, WhiterApps has built productivity tools focused on workflow efficiency, introducing NetworkUp.io to redefine professional outreach through an uncompromising focus on account safety, privacy, and human-centric prospecting. Engineered with dedicated residential proxy pinning, intelligent rate-limit throttling, and localized browser execution, NetworkUp mirrors natural user behavior to protect profile integrity. Discover how our team prioritizes account security and reliable automation to help recruiters, sales teams, and agencies connect with decision-makers safely and efficiently.", keywords: ["networkup story", "about networkup", "linkedin automation team", "ai outreach mission", "professional networking history"],
    alternates: {
        canonical: "https://www.networkup.io/aboutus"
    },
    openGraph: {
        title: "About Us | NetworkUp.io",
        description: "Learn the mission behind NetworkUp.io by WhiterApps. Founded in 2019, WhiterApps has built productivity tools focused on workflow efficiency, introducing NetworkUp.io to redefine professional outreach through an uncompromising focus on account safety, privacy, and human-centric prospecting. Engineered with dedicated residential proxy pinning, intelligent rate-limit throttling, and localized browser execution, NetworkUp mirrors natural user behavior to protect profile integrity. Discover how our team prioritizes account security and reliable automation to help recruiters, sales teams, and agencies connect with decision-makers safely and efficiently.", url: "https://www.networkup.io/aboutus",
        siteName: "NetworkUp",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.networkup.io/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "About NetworkUp"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | NetworkUp.io",
        description: "Learn the mission and story behind NetworkUp.io . Founded in 2019, WhiterApps has been pioneering digital productivity, launching workflow SaaS tools in 2021 and introducing NetworkUp.io in 2026. Today, we empower over 10,000 users across 120+ countries to scale LinkedIn relationships, with over 1 million connection requests initiated with 99.9% uptime. Guided by our core values—Customer First, Trust & Safety, constant Innovation, and Simplicity—we are building a compliant, secure, and human-centric LinkedIn outreach experience. Discover how our team prioritizes ethical growth and account protection to deliver advanced prospecting features that help professionals, recruiters, and sales agencies connect with decision-makers safely and efficiently.",
        images: ["https://www.networkup.io/og-about.jpg"]
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