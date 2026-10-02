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
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Blog",
                "@id": "https://networkup.io/resources/blog#blog",
                "name": "NetworkUp B2B Growth & LinkedIn Outreach Blog",
                "description": "Actionable frameworks, AI personalization strategies, and B2B sales playbooks to scale LinkedIn pipeline.",
                "url": "https://networkup.io/resources/blog",
                "publisher": {
                    "@type": "Organization",
                    "name": "NetworkUp.io",
                    "url": "https://networkup.io",
                    "logo": "https://networkup.io/brand/Logo.svg"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/resources/blog#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://networkup.io"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Resources",
                        "item": "https://networkup.io/resources/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Blog",
                        "item": "https://networkup.io/resources/blog"
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogClient />
        </>
    );
}
