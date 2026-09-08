"use client";

import Image from "next/image";
import {
    Split,
    Scale,
    PlayCircle,
    SlidersVertical
} from "lucide-react";

export default function Section4() {
    const features = [
        {
            title: "Monitor Campaign Health",
            description: "Track campaign activity, responses, and performance so you can quickly identify campaigns that need attention.",
            icon: Split,
        },
        {
            title: "Balanced Outreach",
            description: "Maintain a steady outreach pace instead of overwhelming your prospects with excessive activity.",
            icon: Scale,
        },
        {
            title: "Stay in Control",
            description: "Set campaign limits, review activity, pause campaigns, and adjust your workflow whenever needed.",
            icon: SlidersVertical,
        },
        {
            title: "Smart Follow-ups",
            description: "Give prospects enough time to respond and use thoughtful follow-ups instead of repetitive messages.",
            icon: PlayCircle,
        }
    ];

    return (
        <section className="w-full bg-white px-4 sm:px-8 lg:px-16 overflow-hidden lg:-mt-40">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[6%]">

                    {/* Left Column: Heading, Subtitle & Feature Highlights */}
                    <div className="w-full lg:w-[35%] flex flex-col items-start text-left">
                        {/* Heading */}
                        <h2 className="text-4xl sm:text-3xl lg:text-4xl font-bold text-[#1B2D00] tracking-tight leading-[1.15]">
                            Healthy Campaigns
                        </h2>

                        {/* Description */}
                        <p className="mt-10 text-sm sm:text-base md:text-lg text-[#414A34] font-normal leading-relaxed max-w-[400px]">
                            Keep your campaigns healthy. Keep you outreach effective.
                        </p>

                        {/* 4 Feature Items */}
                        <div className="mt-8 sm:mt-10 px-5 py-3 space-y-7 sm:space-y-8 w-full max-w-[480px]">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={feature.title} className="flex items-start gap-4">
                                        <div
                                            className={`mt-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 shadow-2xs bg-[#A3FF12] text-[#467300]`}>
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                                        </div>
                                        <div>
                                            <h3 className="text-md sm:text-xl font-bold text-[#414A34] leading-snug">
                                                {feature.title}
                                            </h3>
                                            <p className="text-md sm:text-lg text-[#414A34] font-normal leading-relaxed mt-1">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Campaign Builder */}
                    <div className="w-full lg:w-[59%] pt-20 lg:pt-[200px] flex items-center justify-center lg:justify-center">
                        <Image
                            src="/footer/product/campaigns/Campaign_builder.png"
                            alt="Campaign Builder"
                            width={1800}
                            height={1800}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
