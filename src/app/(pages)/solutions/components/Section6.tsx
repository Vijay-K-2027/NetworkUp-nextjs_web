import Documentation from "@/app/homepage/Documentation";

const section6Data = [
    {
        question: "What solutions does NetworkUp.io offer?",
        answer: "We provide LinkedIn outreach automation, lead management, AI messaging, campaign tracking, and analytics in one platform."
    },
    {
        question: "How does NetworkUp.io improve productivity?",
        answer: "It automates repetitive outreach tasks so your team can focus on building valuable relationships."
    },
    {
        question: "Can teams collaborate on campaigns?",
        answer: "Yes. Teams can manage campaigns, leads, and performance together from a shared workspace."
    },
    {
        question: "Does NetworkUp.io support agencies?",
        answer: "Yes, Agencies can manage mulitple clients, campaigns, and workspaces from one dashboard."
    },
    {
        question: "Can I manage multiple LinkedIn accounts?",
        answer: "Yes. Depending on your plan, you can securely manage multiple LinkedIn accounts."
    }
]

export default function Section6() {
    return (
        <Documentation items={section6Data} />
    )
}