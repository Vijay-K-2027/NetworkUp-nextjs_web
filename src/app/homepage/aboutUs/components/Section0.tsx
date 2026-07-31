import React from "react";
import { CircleCheck, TrendingUp, Rocket, User2 } from "lucide-react";

interface Feature {
    title: string;
    description: string;
}

interface InfoColumnProps {
    tagIcon: React.ComponentType<any>;
    tagText: string;
    heading: string;
    description: string;
    features: Feature[];
    steps: string[];
}

// Reusable Column Component
export function InfoColumn({
    tagIcon: TagIcon,
    tagText,
    heading,
    description,
    features,
    steps
}: InfoColumnProps) {
    return (
        <div className="w-full lg:w-[48%] flex flex-col items-start justify-between my-10 min-h-[600px] lg:min-h-[700px] gap-y-8">
            {/* Tag Badge */}
            <div className="flex flex-row items-center gap-x-2 bg-lime-600/20 px-3 py-1 rounded-full">
                <TagIcon size={18} className="text-[#356221]" />
                <span className="uppercase text-[#356221] text-xs font-bold tracking-wide">{tagText}</span>
            </div>

            {/* Main Title & Description */}
            <div className="flex flex-col gap-y-4 w-full">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                    {heading}
                </h2>
                <p className="text-lg lg:text-xl leading-relaxed text-gray-600">
                    {description}
                </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-y-4 items-start w-full">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-row items-start gap-x-3">
                        <CircleCheck size={20} className="text-[#356221] shrink-0 mt-0.5" />
                        <div className="flex flex-col items-start">
                            <h4 className="font-bold text-gray-900 text-lg">{feature.title}</h4>
                            <p className="text-sm text-gray-500">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* How it Works Steps */}
            <div className="w-full border border-[#416630ff]/40 bg-gray-200/70 p-7 rounded-xl">
                <h3 className="text-sm font-bold uppercase text-[#356221] tracking-wide my-3">
                    How it works
                </h3>
                <div className="flex flex-col gap-y-4 px-3">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-row items-start justify-start gap-x-3">
                            <span className="w-6 h-6 bg-[#76e11b] text-[#031d10] font-extrabold rounded-full flex items-center justify-center text-xs shrink-0">
                                {idx + 1}
                            </span>
                            <span className="text-sm sm:text-md text-gray-700 leading-normal">{step}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Content dictionary for Sales Teams
const salesTeamContent: InfoColumnProps = {
    tagIcon: TrendingUp,
    tagText: "For Sales Teams",
    heading: "Scale your pipeline without scaling the noise.",
    description: "Automate high-intent outreach while maintaining the human touch. Our AI identifies 'warm' signals in your network before they even become leads.",
    features: [
        {
            title: "Predictive Intent Scoring",
            description: "Prioritize prospects showing active buying signals."
        },
        {
            title: "Hyper-Personalized Sequences",
            description: "Generate context-aware outreach based on mutual connections."
        }
    ],
    steps: [
        "Connect your CRM and LinkedIn profiles.",
        "AI maps relationships across your entire team.",
        "Launch automated warm introductions."
    ]
};

// Content dictionary for Recruiters
const salesTeamContent2: InfoColumnProps = {
    tagIcon: User2,
    tagText: "For Recruiters",
    heading: "Find the talent your competitors can't see.",
    description: "Stop relying on active applicants. Our AI digs through 2nd and 3rd-degree connections to find passive candidates perfectly suited for your culture.",
    features: [
        {
            title: "Hidden Talent Discovery",
            description: "Surface experts within your existing network's periphery."
        },
        {
            title: "Automated Referral Engine",
            description: "Turn your whole company into a sourcing powerhouse."
        }
    ],
    steps: [
        "Define your 'Ideal Candidate' Profile.",
        "AI scans the broader ecosystem for matches.",
        "Get 'Warm Intro' templates for mutual peers."
    ]
};

// Content dictionary for Founders
const salesTeamContent3: InfoColumnProps = {
    tagIcon: Rocket,
    tagText: "For Founders",
    heading: "Raise capital and build authority on autopilot.",
    description: "The world's best founders are world-class networkers. GrowthPulse AI manages your thought leadership and investor relations so you can focus on building.",
    features: [
        {
            title: "Investor CRM Integration",
            description: "Track touchpoints with LPs and VCs automatically."
        },
        {
            title: "AI Thought Leadership",
            description: "Content drafts that match your voice and industry trends."
        }
    ],
    steps: [
        "Sync your strategic goals and pitch deck.",
        "AI optimizes your public presence for visibility.",
        "Receive weekly 'Key Interaction' alerts."
    ]
};

export default function Section0() {
    return (
        <section className="bg-[#fafcf7] py-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-y-24 lg:gap-y-32">
                {/* Showcase Section 1 */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
                    {/* Render the reusable InfoColumn using props */}
                    <InfoColumn {...salesTeamContent} />

                    {/* Right column placeholder */}
                    <div className="w-full lg:w-[48%] h-[350px] sm:h-[450px] lg:h-[700px] flex items-center justify-center bg-zinc-100/50 border border-dashed border-zinc-300 rounded-2xl shrink-0">
                        <span className="text-gray-400 font-medium">Visual Illustration / Feature Showcase</span>
                    </div>
                </div>

                {/* Showcase Section 2 */}
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-12">
                    {/* Left column placeholder */}
                    <div className="w-full lg:w-[48%] h-[350px] sm:h-[450px] lg:h-[700px] flex items-center justify-center bg-zinc-100/50 border border-dashed border-zinc-300 rounded-2xl shrink-0">
                        <span className="text-gray-400 font-medium">Visual Illustration / Feature Showcase</span>
                    </div>

                    {/* Render the reusable InfoColumn using props */}
                    <InfoColumn {...salesTeamContent2} />
                </div>

                {/* Showcase Section 3 */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
                    {/* Render the reusable InfoColumn using props */}
                    <InfoColumn {...salesTeamContent3} />

                    {/* Right column placeholder */}
                    <div className="w-full lg:w-[48%] h-[350px] sm:h-[450px] lg:h-[700px] flex items-center justify-center bg-zinc-100/50 border border-dashed border-zinc-300 rounded-2xl shrink-0">
                        <span className="text-gray-400 font-medium">Visual Illustration / Feature Showcase</span>
                    </div>
                </div>
            </div>
        </section>
    );
}