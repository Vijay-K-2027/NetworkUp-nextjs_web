import Documentation from "../../Documentation";

const Pricingdocuments: Array<{ question: string; answer: string }> = [
    {
        "question": "Can i change my subscription at any time?",
        "answer": "Yes. You can upgrade or downgrade your plan whenever your business needs change. Any billing adjustments are automatically applied to your next billing cycle."
    },
    {
        "question": "What happens if I choose annual billing?",
        "answer": "Annual billing gives you 20% savings compared to paying monthly while keeping access to the exact same features. It's the most cost-effective option for teams planning long-term growth.",
    },
    {
        "question": "Is there a free trial?",
        "answer": "Yes, Every paid plan starts with a 14-day free trial, allowing you to explore NetworkUp.io's automation, AI features, campaign builder, and analytics before committing to a subscription.",
    },
    {
        "question": "Are there any hidden fees?",
        "answer": "No. NetworkUp.io uses transparent pricing with no hidden setup charges, onboarding fees, or surprise costs. You only pay for the plan you choose.",
    },
    {
        "question": "Can I add more LinkedIn accounts later?",
        "answer": "Absolutely. As your outreach grows, you can upgrade to a higher plan or purchase additional seats and resources without disrupting your existing campaigns.",
    }
];

export default function Documents() {
    return (
        <Documentation document={Pricingdocuments} />
    )
}

