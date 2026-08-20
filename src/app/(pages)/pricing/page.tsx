import { Metadata } from "next";
import Documentations from "./components/documentations"
import Detailed from "./components/Detailed"
import Comparision from "./components/Comparision"
import Price from "./components/Price"

export const metadata: Metadata = {
    title: "Pricing Plans & Packages | NetworkUp.io",
    // Make the description 120-150 words
    description: "Compare NetworkUp.io pricing packages and find the perfect plan to scale your LinkedIn outreach. We offer clear, transparent pricing tiers (Starter, Growth, and Enterprise) designed for individuals, sales teams, agencies, and recruiting companies. Read our detailed feature comparison to see how NetworkUp compares to traditional outreach tools in cost-efficiency, safety proxy routing, daily connection capacities, and overall lead generation ROI. Review our pricing comparison chart to evaluate tool features across all pricing plans, and check our comprehensive documentation FAQ to resolve questions about subscriptions, billing cycles, team add-ons, and refund policies. Start driving pipeline growth safely and compare the value of our compliant automation features today.",
    keywords: ["networkup pricing", "linkedin tool cost", "saas pricing sales", "recruiting software pricing", "b2b outreach subscription", "linkedin outreach pricing compare", "networkup vs outreach tools", "sales engagement cost comparison", "starter vs growth pricing plan"],
    alternates: {
        canonical: "https://www.networkup.io/pricing"
    },
    openGraph: {
        title: "Pricing Plans & Packages | NetworkUp.io",
        description: "Compare NetworkUp.io pricing packages and find the perfect plan to scale your LinkedIn outreach. We offer clear, transparent pricing tiers (Starter, Growth, and Enterprise) designed for individuals, sales teams, agencies, and recruiting companies. Read our detailed feature comparison to see how NetworkUp compares to traditional outreach tools in cost-efficiency, safety proxy routing, daily connection capacities, and overall lead generation ROI. Review our pricing comparison chart to evaluate tool features across all pricing plans, and check our comprehensive documentation FAQ to resolve questions about subscriptions, billing cycles, team add-ons, and refund policies. Start driving pipeline growth safely and compare the value of our compliant automation features today.",
        url: "https://www.networkup.io/pricing",
        siteName: "NetworkUp",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.networkup.io/og-pricing.jpg",
                width: 1200,
                height: 630,
                alt: "NetworkUp Pricing Plans"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing Plans & Packages | NetworkUp.io",
        description: "Compare NetworkUp.io pricing packages and find the perfect plan to scale your LinkedIn outreach. We offer clear, transparent pricing tiers (Starter, Growth, and Enterprise) designed for individuals, sales teams, agencies, and recruiting companies. Read our detailed feature comparison to see how NetworkUp compares to traditional outreach tools in cost-efficiency, safety proxy routing, daily connection capacities, and overall lead generation ROI. Review our pricing comparison chart to evaluate tool features across all pricing plans, and check our comprehensive documentation FAQ to resolve questions about subscriptions, billing cycles, team add-ons, and refund policies. Start driving pipeline growth safely and compare the value of our compliant automation features today.",
        images: ["https://www.networkup.io/og-pricing.jpg"]
    },
    robots: {
        index: true,
        follow: true
    }
};


export default function PricingSection() {
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "NetworkUp Subscription Plans",
        "image": "https://www.networkup.io/og-pricing.jpg",
        "description": "Choose from NetworkUp's flexible LinkedIn outreach automation subscription packages starting at $21/mo. Compare plans including Starter, Growth, and Enterprise.",
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "21.00",
            "highPrice": "129.00",
            "offerCount": "3"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can i change my subscription at any time?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. You can upgrade or downgrade your plan whenever your business needs change. Any billing adjustments are automatically applied to your next billing cycle."
                }
            },
            {
                "@type": "Question",
                "name": "What happens if I choose annual billing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Annual billing gives you 20% savings compared to paying monthly while keeping access to the exact same features. It's the most cost-effective option for teams planning long-term growth."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a free trial?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Every paid plan starts with a 14-day free trial, allowing you to explore NetworkUp.io's automation, AI features, campaign builder, and analytics before committing to a subscription."
                }
            },
            {
                "@type": "Question",
                "name": "Are there any hidden fees?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. NetworkUp.io uses transparent pricing with no hidden setup charges, onboarding fees, or surprise costs. You only pay for the plan you choose."
                }
            },
            {
                "@type": "Question",
                "name": "Can I add more LinkedIn accounts later?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. As your outreach grows, you can upgrade to a higher plan or purchase additional seats and resources without disrupting your existing campaigns."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Comparision />
            <Price />
            <Detailed />
            <Documentations />
        </>
    );
}