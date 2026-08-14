import Documentation from "@/app/homepage/Documentation";

const section5Data = [
    {
        question: "What is NetworkUp.io?",
        answer: "NetworkUp.io is a LinkedIn automation platform that helps professionals build meaningful connections through smart outreach and AI-powered workflows."
    },
    {
        question: "Why was NetworkUp.io created?",
        answer: "We built NetworkUp.io to simplify LinkedIn outreach with tools that save time while keeping conversations personal."
    },
    {
        question: "Who can use NetworkUp.io?",
        answer: "Sales teams, recruiters, agencies, founders, marketers, and consultants can all use NetworkUp.io to grow their network."
    },
    {
        question: "What is our mission?",
        answer: "Our mission is to make professional networking faster, smarter, and more effective through ethical automation."
    },
    {
        question: "What values guide NetworkUp.io?",
        answer: "We focus on simplicity, transparency, innovation, user privacy, and building genuine professional relationships."
    }
]

export default function Section5() {
    return (
        <Documentation document={section5Data} />
    )
}