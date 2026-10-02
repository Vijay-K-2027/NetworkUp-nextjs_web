import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
    title: "Contact Us | Get in Touch with NetworkUp Team",
    description: "Have questions about our LinkedIn automation platform or need technical support? Contact our sales, support, and partnership teams.",
    keywords: ["contact networkup", "networkup support", "sales inquiry", "linkedin automation support", "customer service networkup"],
    alternates: {
        canonical: "https://networkup.io/company/contact-us"
    },
    openGraph: {
        title: "Contact Us | Get in Touch with NetworkUp Team",
        description: "Have questions about our LinkedIn automation platform or need technical support? Contact our sales, support, and partnership teams.",
        url: "https://networkup.io/company/contact-us",
        siteName: "NetworkUp.io",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://networkup.io/og-about.png",
                width: 1200,
                height: 630,
                alt: "Contact NetworkUp Team"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | NetworkUp Team",
        description: "Get in touch with NetworkUp for sales inquiries, technical support, and partnership opportunities.",
        images: ["https://networkup.io/og-about.png"]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function ContactUsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "@id": "https://networkup.io/company/contact-us#contact",
                "name": "Contact NetworkUp Team",
                "description": "Get in touch with NetworkUp for product inquiries, sales questions, partner programs, and customer support.",
                "url": "https://networkup.io/company/contact-us",
                "mainEntity": {
                    "@type": "Organization",
                    "name": "NetworkUp.io",
                    "url": "https://networkup.io",
                    "logo": "https://networkup.io/brand/Logo.svg",
                    "contactPoint": [
                        {
                            "@type": "ContactPoint",
                            "contactType": "customer support",
                            "email": "support@networkup.io",
                            "availableLanguage": ["English"]
                        },
                        {
                            "@type": "ContactPoint",
                            "contactType": "sales",
                            "email": "sales@networkup.io",
                            "availableLanguage": ["English"]
                        }
                    ]
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://networkup.io/company/contact-us#breadcrumb",
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
                        "name": "Contact Us",
                        "item": "https://networkup.io/company/contact-us"
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
            <ContactUsClient />
        </>
    );
}
