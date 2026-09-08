"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const featureCards = [
    {
        no: 1,
        label: "Define Audience",
        description: "Set broad parameters for industry and role."
    },
    {
        no: 2,
        label: "Refine Criteria",
        description: "Filter by intent signals and tech stack."
    },
    {
        no: 3,
        label: "Execute Outreach",
        description: "Push verified contacts directly to campaigns."
    }
]

export default function Section4() {
    return (
        <section className="w-full bg-[#f2f4f6] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:p-15 py-6 sm:py-8 lg:py-15">
            <div className="w-full max-w-[1550px] mx-auto bg-gray-100 p-5 sm:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-x-10">

                    {/* Left Column: Organized Lead Management Explainer */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full md:w-[45%] md:max-w-[45%] flex flex-col justify-center items-start order-2 lg:order-1"
                    >
                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-[42px] w-full max-w-[400px] font-bold text-[#191c1e] tracking-tight leading-tight mb-3 sm:mb-4">
                            The Discovery Layer
                        </h2>

                        {/* Description */}
                        <p className="text-[#414a34] text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 max-w-[400px]">
                            Lead Finder isn't just a database; it's a structured workflow for identifying your total addressable market. We organize millions of data points into a clear, actionable discovery process.
                        </p>

                        <ul className="space-y-2 mt-4">
                            {featureCards.map((feature, index) => (
                                <li key={index} className="flex flex-row items-start space-x-5">
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full font-bold flex items-center justify-center ${index === 0 ? "bg-[#406900]/20 text-[#406900]" : "bg-[#e0e3e5] text-[#414a34]"}`}>
                                        {feature.no}
                                    </div>
                                    <div className="flex flex-col items-start justify-center gap-y-1">
                                        <h3 className="text-lg text-[#191c1e] tracking-tight leading-tight">{feature.label}</h3>
                                        <p className="text-md text-[#414a34]">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: Leads Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full md:w-[49%] md:max-w-[49%] h-auto flex items-center justify-center order-1 lg:order-2"
                    >
                        <Image
                            src="/footer/product/feature/Leads.png"
                            alt="Discover"
                            width={1100}
                            height={1100}
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
