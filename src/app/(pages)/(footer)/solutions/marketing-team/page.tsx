import React from "react";
import Section1Template from "../templates/section1";
import Section2Template from "../templates/section2";
import Section3Template, { ComparisonCardItem } from "../templates/section3";
import Section35Template from "../templates/section35";
import Section45Template from "../templates/section45";
import Section3245Template, { EnterpriseReadinessCard } from "../templates/section3245";
import { RefreshCw, Lock, Target, Users } from "lucide-react";

export const metadata = {
    title: "NetworkUp for Marketing Teams | LinkedIn ABM & Demand Generation",
    description:
        "Help marketing teams discover in-market prospects, personalize LinkedIn outreach, coordinate account-based campaigns, and turn engagement into measurable pipeline.",
};

const marketingComparisonCards: ComparisonCardItem[] = [
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Rising Paid Acquisition Costs",
        traditionalDescription:
            "Paid acquisition can become expensive when every campaign depends on increasing ad spend to reach a narrow B2B audience.",
        advantageBadge: "NetworkUp Advantage",
        advantageDescription:
            "Reach relevant decision-makers directly with personalized, context-aware messaging.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Limited Visibility Into Buyer Intent",
        traditionalDescription:
            "Marketing teams often struggle to identify which prospects are showing meaningful interest before they actively reach out.",
        advantageBadge: "NetworkUp Advantage",
        advantageDescription:
            "Surface relevant prospect and company signals so your team can prioritize outreach when there's stronger context to act on.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Disconnected Marketing & Sales Workflows",
        traditionalDescription:
            "Marketing identifies target accounts while sales manages outreach in separate tools, making it harder to maintain context and measure engagement.",
        advantageBadge: "NetworkUp Advantage",
        advantageDescription:
            "Keep prospect data, outreach activity and engagement connected across NetworkUp and your existing CRM or workflow stack.",
    },
];

const marketingReadinessCards: EnterpriseReadinessCard[] = [
    {
        customIcon: <RefreshCw className="w-5 h-5 text-[#000400] stroke-[1.8]" />,
        title: "CRM & Workflow Integrations",
        description:
            "Connect NetworkUp with CRM and automation tools.",
    },
    {
        customIcon: <Lock className="w-5 h-5 text-[#000400] stroke-[1.8]" />,
        title: "Responsible Automation",
        description:
            "Use smart limits and activity controls to manage outreach responsibly.",
    },
    {
        customIcon: <Target className="w-5 h-5 text-[#000400] stroke-[1.8]" />,
        title: "Multi-Account Management",
        description:
            "Coordinate multiple LinkedIn accounts and campaigns from one workspace.",
    },
    {
        customIcon: <Users className="w-5 h-5 text-[#000400] stroke-[1.8]" />,
        title: "Enterprise Controls",
        description:
            "Enterprise plans include SSO/SAML and audit logs.",
    },
];

export default function MarketingTeamPage() {
    return (
        <div className="w-full flex flex-col">
            {/* HERO SECTION */}
            <Section1Template
                breadcrumbCategory="Solutions"
                breadcrumbCategoryHref="/solutions"
                breadcrumbPageTitle="For Marketing Team"
                badgeText="DEMAND GEN & ACCOUNT-BASED MARKETING (ABM)"
                badgeClassName="bg-[#e5eeff] text-[#416900]"
                title={
                    <>
                        Target the Right Accounts. <br className="hidden sm:inline" />
                        Engage the Right Buyers. <br className="hidden sm:inline" />
                        Turn Marketing Into Pipeline.
                    </>
                }
                description="Help marketing teams discover in-market prospects, personalize LinkedIn outreach, coordinate account-based campaigns, and turn engagement into measurable pipeline."
                primaryCtaText="Start Free Trial"
                primaryCtaHref="/signup"
                secondaryCtaText="Book Demo"
                secondaryCtaHref="/book-demo"
                featureChecks={[
                    "Smart Activity Controls",
                    "2-way CRM & MAP attribution sync",
                    "Built-In Account Safety Controls",
                ]}
                imageSrc="/footer/solutions/5.png"
                imageAlt="Target the Right Accounts. Engage the Right Buyers. Turn Marketing Into Pipeline."
            />

            {/* TRUSTED LOGOS SECTION */}
            <Section2Template
                tagline="TRUSTED BY DEMAND GEN LEADERS & GROWTH MARKETING TEAMS"
            />

            {/* TRADITIONAL VS NETWORKUP ADVANTAGE SECTION */}
            <Section3Template
                titleLine1="Traditional B2B Demand Generation Is"
                titleLine2="Fragmented"
                subtitle="Marketing teams use separate tools for account research, prospecting, outreach, engagement, and reporting. NetworkUp brings the LinkedIn growth workflow together."
                cards={marketingComparisonCards}
                sectionClass="w-full bg-[#eff4ff] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            />

            <Section35Template />
            <Section45Template />

            {/* ENTERPRISE-GRADE ABM GOVERNANCE SECTION */}
            <Section3245Template
                eyebrowBadge="ENTERPRISE-GRADE ABM GOVERNANCE"
                eyebrowBadgeClassName="text-[#416900] text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-3 sm:mb-4 inline-block"
                heading={
                    <>
                        Built for Modern Marketing Workflows &amp; <br className="hidden sm:inline" />
                        Responsible Automation
                    </>
                }
                subtitle="Connect your prospecting and outreach workflows with your existing sales and marketing stack while maintaining control over team activity."
                cards={marketingReadinessCards}
            />
        </div>
    );
}
