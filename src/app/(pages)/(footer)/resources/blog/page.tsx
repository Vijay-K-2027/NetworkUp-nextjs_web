import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "NetworkUp Blog | LinkedIn Outreach Strategies & Growth Insights",
    description: "Explore the latest insights, strategies, AI personalization guides, and lead generation playbooks to scale your B2B sales pipeline on LinkedIn.",
    keywords: ["linkedin outreach blog", "b2b lead generation blog", "ai personalization guides", "sales automation strategies", "linkedin cold messaging tips"],
    alternates: {
        canonical: "https://networkup.io/resources/blog"
    },
    openGraph: {
        title: "NetworkUp Blog | LinkedIn Outreach Strategies & Growth Insights",
        description: "Explore the latest insights, strategies, AI personalization guides, and lead generation playbooks to scale your B2B sales pipeline on LinkedIn.",
        url: "https://networkup.io/resources/blog",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Blog"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NetworkUp Blog | Smart LinkedIn Outreach Resources",
        description: "Actionable playbooks, AI personalization tactics, and outbound strategies.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function BlogPage() {
    return <BlogClient />;
}
