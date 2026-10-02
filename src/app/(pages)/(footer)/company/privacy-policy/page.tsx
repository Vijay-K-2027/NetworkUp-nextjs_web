import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
    title: "Privacy Policy | Transparent Data & Security Protection",
    description: "Learn how NetworkUp protects your personal information, encrypted credentials, cookies, and data compliance in accordance with GDPR and CCPA regulations.",
    keywords: ["networkup privacy policy", "data security", "gdpr compliance", "linkedin automation security", "privacy terms"],
    alternates: {
        canonical: "https://networkup.io/company/privacy-policy"
    },
    openGraph: {
        title: "Privacy Policy | Transparent Data & Security Protection",
        description: "Learn how NetworkUp protects your personal information, encrypted credentials, cookies, and data compliance in accordance with GDPR and CCPA regulations.",
        url: "https://networkup.io/company/privacy-policy",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "NetworkUp Privacy Policy"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | NetworkUp",
        description: "Review our transparent data collection, AES-256 encryption, and privacy protections.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function PrivacyPolicyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://networkup.io/company/privacy-policy#webpage",
                "name": "NetworkUp Privacy Policy",
                "description": "NetworkUp data collection policies, GDPR and CCPA compliance, AES-256 encryption standards, and user privacy protections.",
                "url": "https://networkup.io/company/privacy-policy"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/company/privacy-policy#breadcrumb",
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
                        "name": "Privacy Policy",
                        "item": "https://networkup.io/company/privacy-policy"
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
            <PrivacyPolicyClient />
        </>
    );
}
