import React from "react";
import Section1Template from "../templates/section1";
import Section2Template from "../templates/section2";
import Section3Template, { ComparisonCardItem } from "../templates/section3";
import Section4Template, { RepProfileItem } from "../templates/section4";
import Section213Template, { ExecutionFeatureCard } from "../templates/section213";
import Section313Template, { GovernanceCardItem, GovernanceStatItem } from "../templates/section313";

export const metadata = {
    title: "NetworkUp for Agencies | Multi-Client LinkedIn Lead Generation",
    description:
        "Help your agency manage client campaigns, coordinate outreach, personalize messages with AI, and track performance from one connected workspace.",
};

const agencyComparisonCards: ComparisonCardItem[] = [
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Fragmented Client Workspaces",
        traditionalDescription:
            "Managing multiple client accounts, campaigns, and prospect lists across separate tools creates unnecessary operational overhead.",
        advantageBadge: "NetworkUp Advantage",
        advantageTitle: "Centralized Client Workspaces:",
        advantageDescription:
            "Organize campaigns, prospects, accounts, and performance data for each client from one workspace.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Uncontrolled Automation & Account Risk",
        traditionalDescription:
            "Aggressive or poorly managed automation can create account-safety concerns and damage client relationships.",
        advantageBadge: "NetworkUp Advantage",
        advantageTitle: "Smart Activity Controls:",
        advantageDescription:
            "Manage campaign pacing and activity limits to support more responsible outreach workflows.",
    },
    {
        traditionalBadge: "TRADITIONAL",
        traditionalTitle: "Manual Reporting & Client Visibility",
        traditionalDescription:
            "Wasting 20+ agency hours every Friday compiling spreadsheets and screenshotting campaign stats for clients.",
        advantageBadge: "NetworkUp Advantage",
        advantageTitle: "Automated Client Reporting:",
        advantageDescription:
            "Give agencies clearer visibility into campaign activity, engagement, and performance without rebuilding reports manually.",
    },
];

const agencyProfiles: RepProfileItem[] = [
    {
        initials: "AC",
        avatarBg: "bg-black",
        nameAndRole: "Acme Cloud Inc.",
        teamSubtitle: "12 campaigns active • 4 team members",
        statText: "94% Quota",
    },
    {
        initials: "FT",
        avatarBg: "bg-[#416900]",
        nameAndRole: "FinTech Scale",
        teamSubtitle: "8 senders active • UK & EU Proxies",
        statText: "100% Quota",
    },
    {
        initials: "DS",
        avatarBg: "bg-[#0b1c09]",
        nameAndRole: "DevStudio AI",
        teamSubtitle: "16 senders active • East Coast Proxies",
        statText: "88% Quota",
    },
];

const agencyExecutionCards: ExecutionFeatureCard[] = [
    {
        title: "More Client Capacity",
        description:
            "Run and manage more outreach workflows without adding unnecessary manual work.",
    },
    {
        title: "Less Reporting Work",
        description:
            "Centralize campaign activity and performance visibility for easier client reporting.",
    },
    {
        title: "Better Account Control",
        description:
            "Manage activity, pacing, and campaigns across multiple LinkedIn accounts.",
    },
    {
        title: "Stronger Client Visibility",
        description:
            "Give your team clearer insight into campaign performance and engagement.",
    },
];

const agencyGovernanceCards: GovernanceCardItem[] = [
    {
        title: "Client Workspace Organization",
        description:
            "Control which team members can manage campaigns, prospects, and client workspaces.",
    },
    {
        title: "Role-Based Access",
        description:
            "Keep campaigns and prospect data separated and easy to manage across clients.",
    },
    {
        title: "CRM & Workflow Integrations",
        description:
            "Connect NetworkUp with your existing CRM and workflow stack.",
    },
    {
        title: "Controlled Automation",
        description:
            "Use activity controls and smart limits to manage outreach responsibly.",
    },
];

const agencyGovernanceStats: GovernanceStatItem[] = [
    {
        value: "100% Isolated",
        label: "Per-client workspaces",
    },
    {
        value: "SOC 2 & GDPR",
        label: "Agency-grade compliance",
    },
];

export default function AgenciesPage() {
    return (
        <div className="w-full flex flex-col">
            {/* HERO SECTION */}
            <Section1Template
                breadcrumbCategory="Solutions"
                breadcrumbCategoryHref="/solutions"
                breadcrumbPageTitle="For Agencies"
                badgeText="MULTI-CLIENT REVENUE INFRASTRUCTURE"
                badgeClassName="bg-[#e5eeff] text-[#416900]"
                title={
                    <>
                        A Smarter Way to Grow Your <br className="hidden md:inline" />
                        Agency on LinkedIn
                    </>
                }
                description="Help your agency manage client campaigns, coordinate outreach, personalize messages with AI, and track performance from one connected workspace."
                primaryCtaText="Start Free Trial"
                primaryCtaHref="/signup"
                secondaryCtaText="Book Demo"
                secondaryCtaHref="/book-demo"
                featureChecks={[
                    "Multi-Account Management",
                    "Client Workspace Organization",
                    "AI-Powered Personalization",
                ]}
                imageSrc="/footer/solutions/3.png"
                imageAlt="A Smarter Way to Grow Your Agency on LinkedIn"
            />

            {/* TRUSTED LOGOS SECTION */}
            <Section2Template
                tagline="TRUSTED BY LEADING SEARCH FIRMS & HIGH-GROWTH TALENT TEAMS"
            />

            {/* TRADITIONAL VS NETWORKUP ADVANTAGE SECTION */}
            <Section3Template
                titleLine1="Manual Agency Prospecting Doesn't Scale."
                titleLine2="Here's How Modern Agencies Win."
                cards={agencyComparisonCards}
                sectionClass="w-full bg-[#eff4ff] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            />

            {/* MULTI-CLIENT WORKSPACE MANAGEMENT SECTION */}
            <Section4Template
                mainHeading="Built for Agencies That Run Outreach at Scale"
                mainSubtitle="Manage client campaigns, coordinate multiple accounts, and deliver consistent outreach workflows from one connected workspace."
                badgeText="WORKSPACE FLEET MANAGEMENT"
                title={
                    <>
                        Manage Multiple Client Workspaces From <br className="hidden md:inline" />
                        One Agency Dashboard
                    </>
                }
                description="Keep client campaigns, prospects, accounts, and performance data organized while giving your team the visibility they need."
                checklist={[
                    "Instant client workspace switching with complete lead & sequence isolation",
                    "Dedicated residential proxy pool matched to each client's geographic footprint",
                    "Staff permission controls: Account Managers vs Copywriters vs Media Buyers",
                ]}
                linkText="Explore Agency Fleet Management"
                linkHref="#"
                cardTitle="Active Client Workspaces"
                cardBadgeText="24 RETAINERS LIVE"
                profiles={agencyProfiles}
            />

            {/* SCALE OUTREACH OPERATIONS SECTION */}
            <Section213Template
                heading="Built to Help Agencies Scale Their Outreach Operations"
                cards={agencyExecutionCards}
            />

            {/* WHITE-LABEL AGENCY ARCHITECTURE / GOVERNANCE SECTION */}
            <Section313Template
                badgeText="WHITE-LABEL AGENCY ARCHITECTURE"
                titleLine1="Built for Organized,"
                titleLine2="Secure Agency Operations"
                description="Keep client data, campaigns, team access, and outreach workflows organized as your agency grows."
                stats={agencyGovernanceStats}
                cards={agencyGovernanceCards}
            />
        </div>
    );
}
