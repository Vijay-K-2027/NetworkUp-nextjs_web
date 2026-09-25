"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function TermsAndConditionsPage() {
    return (
        <div className="w-full bg-[#f7f9fb] min-h-screen text-[#181d13]">
            {/* Header Area */}
            <section className="w-full bg-white border-b border-[#e0e3e5] px-6 sm:px-10 lg:px-16 py-8 sm:py-10">
                <div className="max-w-9xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#191c1e]"
                    >
                        Terms &amp; Conditions
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f2f4f6] border border-[#e0e3e5] shadow-xs"
                    >
                        <ShieldCheck className="w-4 h-4 text-[#406900] stroke-[2.2]" />
                        <span className="text-[11px] font-bold text-[#191c1e] tracking-wider uppercase">
                            LEGAL FRAMEWORK
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <main className="w-full max-w-9xl mx-auto p-4 sm:p-6 lg:p-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="bg-white rounded-2xl sm:rounded-3xl border border-[#e0e3e5] p-6 sm:p-10 md:p-12 lg:p-14 shadow-xs relative"
                >
                    {/* Top Right Doc ID */}
                    <div className="sm:absolute sm:top-10 sm:right-10 md:top-12 md:right-14 text-left sm:text-right font-mono text-[11px] text-[#9ca3af]/70 tracking-wider uppercase mb-6 sm:mb-0 select-none">
                        <div>[CONFIDENTIAL]</div>
                        <div className="mt-0.5">DOC ID: NKUP-TC-2025</div>
                    </div>

                    <div className="space-y-10 sm:space-y-12">
                        {/* SEC. 01: Acceptance of Terms */}
                        <section className="space-y-3.5">
                            <div className="flex items-center gap-3">
                                <span className="px-2.5 py-1 rounded text-[13px] font-bold bg-[#b4ff40]/10 text-[#68a509] tracking-wide">
                                    SEC. 01
                                </span>
                                <h2 className="text-base sm:text-lg font-bold text-[#191c1e]">
                                    Acceptance of Terms
                                </h2>
                            </div>

                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                By accessing and using NetworkUp.ai (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                            </p>
                            <p className="text-xs sm:text-[13px] font-semibold text-[#191c1e] tracking-wide leading-relaxed uppercase">
                                ANY PARTICIPATION IN THIS SERVICE WILL CONSTITUTE ACCEPTANCE OF THIS AGREEMENT. IF YOU DO NOT AGREE TO ABIDE BY THE ABOVE, PLEASE DO NOT USE THIS SERVICE.
                            </p>
                        </section>

                        {/* SEC. 02: Use of Service */}
                        <section className="space-y-3.5">
                            <div className="flex items-center gap-3">
                                <span className="px-2.5 py-1 rounded text-[13px] font-bold bg-[#b4ff40]/10 text-[#68a509] tracking-wide">
                                    SEC. 02
                                </span>
                                <h2 className="text-base sm:text-lg font-bold text-[#191c1e]">
                                    Use of Service
                                </h2>
                            </div>

                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                NetworkUp.ai provides AI-driven analytics and automation tools for LinkedIn power users. The Service is provided &quot;as is&quot;. We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) with or without notice at any time.
                            </p>

                            <ul className="space-y-2 pl-4 sm:pl-6 text-sm sm:text-[15px] text-[#191c1e] list-disc list-inside">
                                <li className="leading-relaxed">
                                    You must be at least 18 years old to use this Service.
                                </li>
                                <li className="leading-relaxed">
                                    You must provide current, accurate identification, contact, and other information that may be required as part of the registration process.
                                </li>
                                <li className="leading-relaxed">
                                    You are responsible for maintaining the confidentiality of your Service password and account.
                                </li>
                                <li className="leading-relaxed">
                                    You may not use the Service for any illegal or unauthorized purpose.
                                </li>
                            </ul>

                            {/* Note on Automation Box */}
                            <div className="mt-4 p-4 sm:p-5 rounded-r-xl bg-[#68a509]/5 border-l-4 border-[#8fd91a]">
                                <p className="text-xs sm:text-sm text-[#191c1e] font-bold leading-relaxed">
                                    <strong className="font-bold text-[#191c1e]">Note on Automation:</strong> While NetworkUp.ai provides automation tools, users are solely responsible for ensuring their usage complies with LinkedIn&apos;s current Terms of Service. NetworkUp.ai is not liable for any account restrictions imposed by third-party platforms.
                                </p>
                            </div>
                        </section>

                        {/* SEC. 03: Account Responsibilities */}
                        <section className="space-y-3.5">
                            <div className="flex items-center gap-3">
                                <span className="px-2.5 py-1 rounded text-[13px] font-bold bg-[#b4ff40]/10 text-[#68a509] tracking-wide">
                                    SEC. 03
                                </span>
                                <h2 className="text-base sm:text-lg font-bold text-[#191c1e]">
                                    Account Responsibilities
                                </h2>
                            </div>

                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                You are responsible for all activities that occur under your account. You agree to notify NetworkUp.ai immediately of any unauthorized use of your account or any other breach of security.
                            </p>
                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                We reserve the right to refuse service to anyone for any reason at any time. We may, but have no obligation to, remove content and accounts containing content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable.
                            </p>
                        </section>

                        {/* SEC. 04: Intellectual Property */}
                        <section className="space-y-3.5">
                            <div className="flex items-center gap-3">
                                <span className="px-2.5 py-1 rounded text-[13px] font-bold bg-[#b4ff40]/10 text-[#68a509] tracking-wide">
                                    SEC. 04
                                </span>
                                <h2 className="text-base sm:text-lg font-bold text-[#191c1e]">
                                    Intellectual Property
                                </h2>
                            </div>

                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                The Service and its original content, features, and functionality are and will remain the exclusive property of NetworkUp.ai and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                            </p>
                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NetworkUp.ai.
                            </p>
                        </section>

                        {/* SEC. 05: Limitation of Liability */}
                        <section className="space-y-3.5">
                            <div className="flex items-center gap-3">
                                <span className="px-2.5 py-1 rounded text-[13px] font-bold bg-[#b4ff40]/10 text-[#68a509] tracking-wide">
                                    SEC. 05
                                </span>
                                <h2 className="text-base sm:text-lg font-bold text-[#191c1e]">
                                    Limitation of Liability
                                </h2>
                            </div>

                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                In no event shall NetworkUp.ai, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                            </p>

                            <ul className="space-y-1.5 pl-4 sm:pl-6 text-sm sm:text-[15px] text-[#191c1e] list-disc list-inside">
                                <li className="leading-relaxed">
                                    Your access to or use of or inability to access or use the Service;
                                </li>
                                <li className="leading-relaxed">
                                    Any conduct or content of any third party on the Service;
                                </li>
                                <li className="leading-relaxed">
                                    Any content obtained from the Service; and
                                </li>
                                <li className="leading-relaxed">
                                    Unauthorized access, use or alteration of your transmissions or content.
                                </li>
                            </ul>
                        </section>

                        {/* SEC. 06: Termination */}
                        <section className="space-y-3.5">
                            <div className="flex items-center gap-3">
                                <span className="px-2.5 py-1 rounded text-[13px] font-bold bg-[#b4ff40]/10 text-[#68a509] tracking-wide">
                                    SEC. 06
                                </span>
                                <h2 className="text-base sm:text-lg font-bold text-[#191c1e]">
                                    Termination
                                </h2>
                            </div>

                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                            </p>
                        </section>

                        {/* SEC. 07: Refund Policy */}
                        <section className="space-y-3.5">
                            <div className="flex items-center gap-3">
                                <span className="px-2.5 py-1 rounded text-[13px] font-bold bg-[#b4ff40]/10 text-[#68a509] tracking-wide">
                                    SEC. 07
                                </span>
                                <h2 className="text-base sm:text-lg font-bold text-[#191c1e]">
                                    Refund Policy
                                </h2>
                            </div>

                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                All payments made for our Service are non-refundable. Once a subscription or plan is purchased, we do not provide refunds, credits, or cancellations for the amount paid. Please review the plan and features carefully before completing your purchase.
                            </p>
                            <p className="text-sm sm:text-[15px] text-[#191c1e] leading-relaxed">
                                No charges will be incurred during the free trial period. Billing will begin only after you choose to subscribe to a paid plan.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
