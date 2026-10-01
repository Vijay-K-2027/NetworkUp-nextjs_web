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
    return <ContactUsClient />;
}
