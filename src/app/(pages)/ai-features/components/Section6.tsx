import Documentation from "@/app/homepage/Documentation";

const section6Data = [
    {
        question: "How does AI help with outreach?",
        answer: "AI suggests personalized messages, follow-ups, and campaign improvements to increase engagement."
    },
    {
        question: "Can I create automated campaigns?",
        answer: "Yes. Build custom outreach sequences with conditions, delays, and personalized messaging."
    },
    {
        question: "Does NetworkUp.io provide campaign analytics?",
        answer: "Yes. Track replies, acceptance rates, conversions, and overall campaign performance in real time."
    },
    {
        question: "Can I integrate with other tools?",
        answer: "Yes. API access and webhooks make it easy to connect with your existing workflows."
    },
    {
        question: "Is my LinkedIn account protected?",
        answer: "Yes. We include smart limits and safety features desgined to support responsible automation."
    }
]

export default function Section6() {
    return (
        <Documentation items={section6Data} />
    )
}