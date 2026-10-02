import type { Metadata } from "next";
import ApiDocumentationClient from "./ApiDocumentationClient";

export const metadata: Metadata = {
    title: "REST API Documentation | Developer Guides & Endpoints",
    description: "Programmatic access to NetworkUp's outreach engine, lead enrichment, sequence automation, and webhooks. Integrate LinkedIn automation into your CRM and apps.",
    keywords: ["networkup api", "linkedin automation api", "rest api documentation", "lead enrichment api", "outreach webhooks", "developer documentation"],
    alternates: {
        canonical: "https://networkup.io/resources/api-documentation"
    },
    openGraph: {
        title: "REST API Documentation | Developer Guides & Endpoints",
        description: "Programmatic access to NetworkUp's outreach engine, lead enrichment, sequence automation, and webhooks. Integrate LinkedIn automation into your CRM and apps.",
        url: "https://networkup.io/resources/api-documentation",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp API Documentation"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "REST API Documentation | NetworkUp",
        description: "Explore the NetworkUp REST API, endpoints, SDKs, and webhook events.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function ApiDocumentationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "@id": "https://networkup.io/resources/api-documentation#techarticle",
                "headline": "NetworkUp REST API Documentation & Webhooks Guide",
                "description": "Comprehensive developer reference for integrating NetworkUp's LinkedIn outreach engine, lead discovery endpoints, campaign triggers, and real-time webhook events into your CRM.",
                "url": "https://networkup.io/resources/api-documentation",
                "dependencies": "REST API, JSON, HTTPS, Bearer Authentication",
                "publisher": {
                    "@type": "Organization",
                    "name": "NetworkUp.io",
                    "url": "https://networkup.io",
                    "logo": "https://networkup.io/brand/Logo.svg"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/resources/api-documentation#breadcrumb",
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
                        "name": "API Documentation",
                        "item": "https://networkup.io/resources/api-documentation"
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
            <ApiDocumentationClient />
        </>
    );
}
