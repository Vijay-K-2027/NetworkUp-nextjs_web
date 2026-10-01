"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    HelpCircle,
    Globe,
    MapPin,
    Phone,
    Mail,
    ChevronDown,
    ArrowUpRight,
    BookOpen,
    ArrowRight,
    Check,
    Loader2,
    AlertCircle,
} from "lucide-react";

const inquiryOptions = [
    "Sales Inquiry",
    "Request a Demo",
    "Getting Started",
    "Technical Support",
    "Account & Billing",
    "API & Integrations",
    "Partnership Inquiry",
    "Report a Bug",
    "Feature Request",
    "Feedback",
    "Other",
];

export default function ContactUsClient() {
    const [selectedInquiry, setSelectedInquiry] = useState("Sales Inquiry");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Form inputs state
    const [fullName, setFullName] = useState("");
    const [workEmail, setWorkEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    // Submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    workEmail,
                    company,
                    inquiryType: selectedInquiry,
                    message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to send message. Please try again."
                );
            }

            setFormSubmitted(true);
            // Reset form fields
            setFullName("");
            setWorkEmail("");
            setCompany("");
            setMessage("");
            setSelectedInquiry("Sales Inquiry");
        } catch (err: any) {
            console.error("Submission error:", err);
            setErrorMessage(
                err?.message || "Failed to send your message. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="w-full min-h-screen bg-[#f7f9fb] py-5 sm:py-7 lg:py-9 px-4 sm:px-6 lg:px-8">
            <div className="max-w-9xl px-10 mx-auto">
                {/* 1. TOP HEADER */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-[#191c1e] tracking-tight leading-[1.15]">
                        Get in touch with our team.
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-[#414a34]/80 mt-3 sm:mt-4 leading-relaxed font-normal">
                        Have questions about our LinkedIn automation platform or need
                        technical support? We&apos;re <br /> here to help you scale your
                        networking.
                    </p>
                </div>

                {/* 2. MAIN 2-COLUMN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* LEFT COLUMN: CONTACT FORM */}
                    <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs border border-slate-100">
                        {formSubmitted ? (
                            <div className="py-16 text-center flex flex-col items-center justify-center">
                                <div className="w-14 h-14 rounded-full bg-[#dff0d4] flex items-center justify-center mb-4">
                                    <Check className="w-7 h-7 text-[#416303] stroke-[2.5]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#000400] mb-2">
                                    Thank you for reaching out!
                                </h3>
                                <p className="text-sm text-[#555e4e] max-w-md">
                                    We&apos;ve received your message and sent a notification to our
                                    team at <strong>support@networkup.io</strong>. We will get back to
                                    you within 24 hours.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setFormSubmitted(false)}
                                    className="mt-6 px-6 py-2.5 rounded-full bg-[#f2f4f6] hover:bg-[#e2e5e8] text-[#191c1e] text-xs font-bold transition-all cursor-pointer"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                {/* Error Message Banner */}
                                {errorMessage && (
                                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs sm:text-sm">
                                        <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                                        <div className="flex-1">
                                            <strong className="font-bold block">Submission Error</strong>
                                            <span>{errorMessage}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Row 1: Full Name & Work Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <div>
                                        <label
                                            htmlFor="fullName"
                                            className="block text-xs sm:text-[13px] font-bold text-[#000400] mb-2"
                                        >
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="fullName"
                                            type="text"
                                            required
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Jane Doe"
                                            disabled={isSubmitting}
                                            className="w-full rounded-xl bg-[#f8f9fc] border border-transparent px-4 py-3 text-sm text-[#000400] placeholder:text-slate-400 focus:bg-white focus:border-slate-300 focus:outline-none transition-all disabled:opacity-50"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="workEmail"
                                            className="block text-xs sm:text-[13px] font-bold text-[#000400] mb-2"
                                        >
                                            Work Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="workEmail"
                                            type="email"
                                            required
                                            value={workEmail}
                                            onChange={(e) => setWorkEmail(e.target.value)}
                                            placeholder="jane@company.com"
                                            disabled={isSubmitting}
                                            className="w-full rounded-xl bg-[#f8f9fc] border border-transparent px-4 py-3 text-sm text-[#000400] placeholder:text-slate-400 focus:bg-white focus:border-slate-300 focus:outline-none transition-all disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Company */}
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-xs sm:text-[13px] font-bold text-[#000400] mb-2"
                                    >
                                        Company
                                    </label>
                                    <input
                                        id="company"
                                        type="text"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        placeholder="Acme Corp"
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl bg-[#f8f9fc] border border-transparent px-4 py-3 text-sm text-[#000400] placeholder:text-slate-400 focus:bg-white focus:border-slate-300 focus:outline-none transition-all disabled:opacity-50"
                                    />
                                </div>

                                {/* Row 3: How can we help? (Dropdown) */}
                                <div className="relative" ref={dropdownRef}>
                                    <label
                                        htmlFor="inquiryType"
                                        className="block text-xs sm:text-[13px] font-bold text-[#000400] mb-2"
                                    >
                                        How can we help?
                                    </label>
                                    <button
                                        id="inquiryType"
                                        type="button"
                                        disabled={isSubmitting}
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full rounded-xl bg-[#f8f9fc] border border-transparent px-4 py-3 text-sm text-[#000400] flex items-center justify-between cursor-pointer focus:bg-white focus:border-slate-300 focus:outline-none transition-all text-left disabled:opacity-50"
                                    >
                                        <span>{selectedInquiry}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isDropdownOpen && (
                                        <div className="absolute z-20 top-[calc(100%+6px)] left-0 right-0 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 max-h-60 overflow-y-auto">
                                            {inquiryOptions.map((option, idx) => {
                                                const isSelected = selectedInquiry === option;
                                                return (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedInquiry(option);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${isSelected
                                                                ? "bg-[#d9d2da] text-[#000400] font-bold rounded-lg mx-1 w-[calc(100%-8px)]"
                                                                : "text-[#334155] hover:bg-slate-50"
                                                            }`}
                                                    >
                                                        {option}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* Row 4: Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs sm:text-[13px] font-bold text-[#000400] mb-2"
                                    >
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell us about your needs..."
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl bg-[#f8f9fc] border border-transparent p-4 text-sm text-[#000400] placeholder:text-slate-400 focus:bg-white focus:border-slate-300 focus:outline-none transition-all resize-y min-h-[120px] disabled:opacity-50"
                                    />
                                </div>

                                {/* Form Footer: Terms and Submit Button */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                                    <p className="text-[11px] sm:text-xs text-[#414a34]/60 max-w-xs leading-relaxed">
                                        By submitting this form, you agree to our{" "}
                                        <Link
                                            href="/company/privacy-policy"
                                            className="hover:text-[#000400]"
                                        >
                                            privacy policy
                                        </Link>{" "}
                                        and{" "}
                                        <Link
                                            href="/company/terms-and-conditions"
                                            className="hover:text-[#000400]"
                                        >
                                            terms of service
                                        </Link>
                                        .
                                    </p>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-b from-[#c5ff8b] to-[#71e300] hover:brightness-105 active:scale-[0.98] text-[#041c11] font-bold text-sm shadow-sm transition-all cursor-pointer w-full sm:w-auto shrink-0 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* RIGHT COLUMN: SUPPORT & GLOBAL HQ CARDS */}
                    <div className="lg:col-span-4 flex flex-col gap-2 sm:gap-3 w-full">
                        {/* 1. SUPPORT CARD */}
                        <div className="rounded-2xl sm:rounded-3xl p-3 flex items-start gap-4">
                            <div className="w-11 h-11 rounded-xl bg-[#deffb5] flex items-center justify-center shrink-0">
                                <HelpCircle className="w-5 h-5 text-[#316b00] stroke-[2]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base text-[#191c1e] leading-tight">
                                    Support
                                </h3>
                                <p className="text-xs text-[#414a34]/80 mt-1 leading-snug">
                                    Technical assistance &amp; troubleshooting.
                                </p>
                                <a
                                    href="mailto:support@networkup.io"
                                    className="text-xs font-bold text-[#191a34] underline underline-offset-2 hover:text-[#416303] mt-2.5 inline-flex items-center gap-1 transition-colors"
                                >
                                    <span>support@networkup.io</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                        {/* 2. GLOBAL HQ CARD WITH MAP OVERLAY */}
                        <div className="rounded-2xl sm:rounded-3xl p-3 relative overflow-hidden">
                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-center gap-2 mb-2">
                                    <Globe className="w-4 h-4 text-[#406900]" />
                                    <h3 className="font-bold text-base text-[#191c1e]">
                                        Global HQ
                                    </h3>
                                </div>

                                <p className="text-xs text-[#414a34] leading-relaxed mb-5">
                                    We are a virtual-first company, with our primary <br />hub located in
                                    the heart of tech.
                                </p>

                                {/* Contact Details */}
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2.5 text-sm text-[#414a34] font-bold">
                                        <MapPin className="w-4 h-4 text-[#414a34] shrink-0 mt-0.5" />
                                        <span>Noida sector 46, Delhi NCR, India</span>
                                    </div>

                                    <div className="flex items-center gap-2.5 text-sm text-[#414a34] font-bold">
                                        <Phone className="w-4 h-4 text-[#000000] shrink-0" />
                                        <a
                                            href="tel:+919034449577"
                                            className="hover:text-[#416303] transition-colors"
                                        >
                                            +91-9034449577
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-2.5 text-sm text-[#414a34] font-bold">
                                        <Mail className="w-4 h-4 text-[#000000] shrink-0" />
                                        <a
                                            href="mailto:info@whiterapps.com"
                                            className="hover:text-[#416303] transition-colors"
                                        >
                                            info@whiterapps.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. BOTTOM BANNER: LOOKING FOR QUICK ANSWERS? */}
                <div className="bg-[#f2f4f6] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-slate-100/80 mt-10 sm:mt-14">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] tracking-tight">
                            Looking for quick answers?
                        </h2>
                        <p className="text-xs sm:text-sm text-[#414a34] mt-1.5 font-normal max-w-2xl leading-relaxed">
                            Check out our comprehensive Help Center and API documentation before
                            reaching out. Most common questions are answered there.
                        </p>
                    </div>

                    <Link
                        href="/resources/help-center"
                        className="bg-[#e0e3e5] hover:bg-[#cbd5e1] text-[#191c1e] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors shrink-0"
                    >
                        <span>Visit Help Center</span>
                        <BookOpen className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
