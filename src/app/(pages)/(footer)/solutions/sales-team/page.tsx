import React from "react";
import Section1Template from "../templates/section1";
import Section2Template from "../templates/section2";
import Section3Template from "../templates/section3";
import Section4Template from "../templates/section4";
import Section213Template from "../templates/section213";
import Section313Template from "../templates/section313";

export const metadata = {
    title: "NetworkUp for Sales Teams | LinkedIn Outreach & Pipeline Platform",
    description:
        "Empower SDRs, AEs, and sales leaders to discover qualified prospects, personalize outreach with AI, manage multi-rep accounts, and accelerate sales pipeline.",
};

export default function SalesTeamPage() {
    return (
        <div className="w-full flex flex-col bg-[#f7f9fb]">
            <Section1Template />
            <Section2Template />
            <Section3Template />
            <Section4Template />
            <Section213Template />
            <Section313Template />
        </div>
    );
}
