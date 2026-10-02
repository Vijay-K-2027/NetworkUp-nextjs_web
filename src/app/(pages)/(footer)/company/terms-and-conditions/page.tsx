import type { Metadata } from "next";
import TermsAndConditionsClient from "./TermsAndConditionsClient";

export const metadata: Metadata = {
    title: "Terms and Conditions | Legal Framework & Usage Terms",
    description: "Read the Terms and Conditions for using NetworkUp's LinkedIn automation and outreach software, account responsibilities, and subscription policies.",
    keywords: ["networkup terms and conditions", "terms of service", "user agreement", "linkedin automation legal terms", "subscription policies"],
    alternates: {
        canonical: "https://networkup.io/company/terms-and-conditions"
    },
    openGraph: {
        title: "Terms and Conditions | Legal Framework & Usage Terms",
        description: "Read the Terms and Conditions for using NetworkUp's LinkedIn automation and outreach software, account responsibilities, and subscription policies.",
        url: "https://networkup.io/company/terms-and-conditions",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Terms and Conditions"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms and Conditions | NetworkUp",
        description: "Understand your rights and terms when using the NetworkUp LinkedIn growth platform.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function TermsAndConditionsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://networkup.io/company/terms-and-conditions#webpage",
                "name": "NetworkUp Terms and Conditions",
                "description": "Terms of Service, subscriber agreements, usage rules, and SLA terms for using NetworkUp's LinkedIn automation platform.",
                "url": "https://networkup.io/company/terms-and-conditions"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/company/terms-and-conditions#breadcrumb",
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
                        "name": "Company",
                        "item": "https://networkup.io/aboutus"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Terms and Conditions",
                        "item": "https://networkup.io/company/terms-and-conditions"
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
            <TermsAndConditionsClient />
        </>
    );
}
