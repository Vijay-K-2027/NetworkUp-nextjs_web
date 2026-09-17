"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheck, ChevronRight } from "lucide-react";

export interface FeatureCheckItem {
    label: string;
    icon?: React.ReactNode;
}

export interface Section1TemplateProps {
    breadcrumbCategory?: string;
    breadcrumbCategoryHref?: string;
    breadcrumbPageTitle?: string;

    topRightNotice?: React.ReactNode | string;

    badgeText?: string;
    badgeIcon?: React.ReactNode;
    badgeClassName?: string;

    title?: string | React.ReactNode;
    description?: string | React.ReactNode;

    primaryCtaText?: string;
    primaryCtaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;

    featureChecks?: (string | FeatureCheckItem)[];

    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageClassName?: string;
    imagePriority?: boolean;

    rightContent?: React.ReactNode;

    containerClass?: string;
    sectionClass?: string;
}

export const defaultSection1Props: Section1TemplateProps = {
    breadcrumbCategory: "Solutions",
    breadcrumbCategoryHref: "/solutions",
    breadcrumbPageTitle: "For Sales Team",

    badgeText: "ENTERPRISE PIPELINE ACCELERATION",
    title: "Turn LinkedIn Into Your Sales Team’s Growth Engine",
    description:
        "Give SDRs, AEs, and sales leaders one workspace to discover qualified prospects, personalize outreach with AI, automate follow-ups, and turn LinkedIn conversations into opportunities.",

    primaryCtaText: "Start Free Trial",
    primaryCtaHref: "/signup",
    secondaryCtaText: "Book Demo",
    secondaryCtaHref: "/book-demo",

    featureChecks: [
        "Smart Activity Controls",
        "AI-Powered Personalization",
        "Multi-Account Management",
    ],

    imageSrc: "/footer/solutions/1.png",
    imageAlt: "Turn LinkedIn Into Your Sales Team’s Growth Engine",
};

export default function Section1Template(props: Section1TemplateProps) {
    const {
        breadcrumbCategory = defaultSection1Props.breadcrumbCategory,
        breadcrumbCategoryHref = defaultSection1Props.breadcrumbCategoryHref,
        breadcrumbPageTitle = defaultSection1Props.breadcrumbPageTitle,

        topRightNotice,

        badgeText = defaultSection1Props.badgeText,
        badgeIcon,
        badgeClassName,

        title = defaultSection1Props.title,
        description = defaultSection1Props.description,

        primaryCtaText = defaultSection1Props.primaryCtaText,
        primaryCtaHref = defaultSection1Props.primaryCtaHref,
        secondaryCtaText = defaultSection1Props.secondaryCtaText,
        secondaryCtaHref = defaultSection1Props.secondaryCtaHref,

        featureChecks = defaultSection1Props.featureChecks,

        imageSrc = defaultSection1Props.imageSrc,
        imageAlt = defaultSection1Props.imageAlt,
        imageWidth = 1000,
        imageHeight = 850,
        imageClassName,
        imagePriority = true,

        rightContent,

        containerClass = "max-w-9xl mx-auto px-10 space-y-8 sm:space-y-10",
        sectionClass,
    } = props;

    const isRecruiter =
        breadcrumbPageTitle?.toLowerCase().includes("recruiter") ||
        breadcrumbCategoryHref?.toLowerCase().includes("recruiter");

    const resolvedSectionClass =
        sectionClass ||
        `w-full pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden`;

    return (
        <section className={resolvedSectionClass}>
            <div className={containerClass}>

                {/* TOP ROW: BREADCRUMB + NOTICE */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-[#43483e]">
                        <Link
                            href={breadcrumbCategoryHref || "/solutions"}
                            className="hover:text-[#3a6a00] transition-colors font-medium"
                        >
                            {breadcrumbCategory}
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        <span className="font-bold text-[#000400]">
                            {breadcrumbPageTitle}
                        </span>
                    </nav>

                    {topRightNotice && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/80 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#30382b] shadow-2xs self-start sm:self-auto">
                            <span className="w-2 h-2 bg-[#416900] rounded-full"></span>
                            <span>{topRightNotice}</span>
                        </div>
                    )}
                </div>

                {/* 2-COLUMN HERO GRID */}
                <div className={`${isRecruiter ? "bg-[#eff4ff]" : "bg-[#fbfdfa]"
                    } grid grid-cols-1 lg:grid-cols-12 gap-x-5 items-center px-5 rounded-2xl`}>

                    {/* LEFT COLUMN: HERO COPY & CTAS */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="lg:col-span-7 w-full flex flex-col justify-start items-start text-left"
                    >
                        {/* Category Badge */}
                        {badgeText && (
                            <div
                                className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg mb-4 sm:mb-5 ${badgeClassName || "bg-[#e5eeff] text-[#416900]"
                                    }`}
                            >
                                {badgeIcon ? (
                                    badgeIcon
                                ) : (
                                    <span className="w-2 h-2 rounded-full bg-current" />
                                )}
                                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                                    {badgeText}
                                </span>
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-[47px] font-bold text-[#000400] tracking-tight">
                            {title}
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg text-[#43483e] leading-relaxed mt-4 sm:mt-5 max-w-xl font-normal">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
                            {primaryCtaText && (
                                <Link
                                    href={primaryCtaHref || "/signup"}
                                    className="px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-b from-[#caff95] to-[#71e300] hover:brightness-105 active:scale-[0.98] text-[#041c11] font-bold text-sm sm:text-base shadow-sm transition-all duration-200 text-center w-full sm:w-auto"
                                >
                                    {primaryCtaText}
                                </Link>
                            )}
                            {secondaryCtaText && (
                                <Link
                                    href={secondaryCtaHref || "/book-demo"}
                                    className="px-6 sm:px-8 py-3.5 rounded-xl bg-white border border-[#041c11] hover:bg-[#fbfdf9] hover:border-[#181d13] active:scale-[0.98] text-[#181d13] font-bold text-sm sm:text-base transition-all duration-200 shadow-2xs text-center w-full sm:w-auto"
                                >
                                    {secondaryCtaText}
                                </Link>
                            )}
                        </div>

                        {/* Trust Check Badges */}
                        {featureChecks && featureChecks.length > 0 && (
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-6 sm:mt-8 text-xs sm:text-sm text-[#43483e]">
                                {featureChecks.map((item, idx) => {
                                    if (typeof item === "string") {
                                        return (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CircleCheck className="w-4 h-4 text-[#416900] shrink-0 stroke-[2]" />
                                                <span>{item}</span>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className="w-5 h-5 bg-[#416900]/15 rounded-full flex items-center justify-center">
                                                {item.icon || (
                                                    <CircleCheck className="w-4 h-4 text-[#416900] shrink-0 stroke-[2]" />
                                                )}
                                            </div>
                                            <span>{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>

                    {/* RIGHT COLUMN: DYNAMIC IMAGE FILE */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                        className="lg:col-span-5 w-full flex items-center justify-center"
                    >
                        {rightContent ? (
                            rightContent
                        ) : imageSrc ? (
                            <div className="w-full flex items-center justify-center">
                                <Image
                                    src={imageSrc}
                                    alt={
                                        imageAlt ||
                                        (typeof title === "string" ? title : "Solution Overview")
                                    }
                                    width={imageWidth}
                                    height={imageHeight}
                                    priority={imagePriority}
                                    className={`w-full h-auto max-w-[620px] object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.01] ${imageClassName || ""
                                        }`}
                                />
                            </div>
                        ) : null}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
