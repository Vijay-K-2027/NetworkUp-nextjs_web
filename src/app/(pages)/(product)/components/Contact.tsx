import React from "react";
import { ListChecks, Network, Zap, Sparkles, Clock, ShieldCheck, LucideUsers2, ArrowRight } from "lucide-react";
import { CheckIcon } from "@/app/homepage/assets/icons";
import Image from "next/image";

const steps = [
    {
        title: "Understand your outreach goals",
        desc: "Deep dive into your current ICP and campaign objectives.",
        icon: ListChecks,
        active: true
    },
    {
        title: "Review your current workflow",
        desc: "Audit your existing tech stack and identify friction points.",
        icon: Network,
        active: false
    },
    {
        title: "Recommend the ideal automation strategy",
        desc: "Tailored setup designed for scale and high conversion.",
        icon: Zap,
        active: false
    },
    {
        title: "Build a custom onboarding plan",
        desc: "A step-by-step roadmap for your team's success.",
        icon: Sparkles,
        active: false
    }
];

export default function Contact() {
    return (
        <section className="w-full bg-[#fafcf7] py-10 px-6 lg:px-8 border-b border-zinc-200/30 bg-[radial-gradient(circle_at_left,_rgba(222,250,208,1)_0%,_rgba(222,250,208,0.1)_300px,_rgba(222,250,208,0)_100%)]">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black text-[#76e11b] text-[10px] sm:text-[11px] font-bold border border-black uppercase tracking-wider mb-6">
                        <span>Contact Our Team</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Ready to <span className="text-[#76e11b]">grow</span> your LinkedIn<br /> pipeline faster?
                    </h2>

                    <p className="text-black/80 text-xl md:text-2xl tracking-tight leading-normal max-w-2xl">
                        Our enterprise experts help high-growth teams automate their outreach while maintaining human-centric relationship building.
                    </p>
                </div>

                {/* 2 Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mx-auto w-full">
                    {/* Left Card: Strategy Session */}
                    <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[2.25rem] border border-zinc-200/60 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-8 tracking-tight text-center sm:text-left">
                                Book a strategy session
                            </h3>

                            {/* Timeline List */}
                            <div className="relative pl-8 space-y-8">
                                {/* Vertical Connecting Line */}
                                <div className="absolute top-3 left-0.5 bottom-3 w-0.5 bg-zinc-100 -translate-x-1/2" />
                                {steps.map((step, index) => {
                                    const Icon = step.icon;
                                    return (
                                        <div key={index} className="relative flex items-start gap-4">
                                            {/* Badge Icon */}
                                            <div className={`absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full -translate-x-1/2 z-10 border transition-all duration-300 ${step.active ? "bg-[#76e11b] border-[#76e11b] text-white shadow-sm" : "bg-white border-zinc-200 text-zinc-500"
                                                }`}
                                            >
                                                <Icon size={16} />
                                            </div>

                                            <div className="flex flex-col text-left">
                                                <h4 className="text-lg sm:text-[20px] font-bold text-gray-900 tracking-tight mb-1">
                                                    {step.title}
                                                </h4>
                                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-zinc-100 my-8 pt-8">
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="flex flex-col items-center">
                                    <Clock size={18} stroke="#305239" className="my-2.5 shrink-0" />
                                    <span className="text-base sm:text-xl font-extrabold text-gray-900 tracking-tight">
                                        &lt; 2 Hours
                                    </span>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-black/80 uppercase tracking-wide mt-1">
                                        Response Time
                                    </span>
                                </div>
                                <div className="flex flex-col items-center border-x border-zinc-100">
                                    <ShieldCheck size={18} stroke="#305239" className="my-2.5 shrink-0" />
                                    <span className="text-base sm:text-xl font-extrabold text-gray-900 tracking-tight">
                                        98%
                                    </span>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-black/80 uppercase tracking-wide mt-1">
                                        Client Success
                                    </span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <LucideUsers2 size={18} stroke="#305239" className="my-2.5 shrink-0" />
                                    <span className="text-base sm:text-xl font-extrabold text-gray-900 tracking-tight">
                                        1,500+
                                    </span>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-black/80 uppercase tracking-wide mt-1">
                                        Active Teams
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:col-span-5 bg-[#162d1e] rounded-[2.25rem] shadow-xl flex flex-col overflow-hidden text-white w-full">
                        <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 flex flex-row items-center justify-start gap-3 w-full">
                            {/* Avatar Group */}
                            <div className="flex items-center">
                                <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/20 overflow-hidden shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80"
                                        alt="Representative Headshot 1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/20 overflow-hidden shrink-0 -ml-2.5">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80"
                                        alt="Representative Headshot 2"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/20 overflow-hidden shrink-0 -ml-2.5">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80"
                                        alt="Representative Headshot 3"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Count Badge */}
                                <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-[#162d1e] bg-[#76e11b] text-[9px] sm:text-[11px] font-extrabold text-[#031d10] flex items-center justify-center shrink-0 -ml-2.5 shadow-sm select-none">
                                    +12
                                </div>
                            </div>

                            {/* Text Block */}
                            <div className="flex flex-col items-start leading-tight">
                                <span className="font-bold text-[11px] sm:text-[13px] tracking-tight text-white">
                                    Our experts are online.
                                </span>
                                <span className="text-zinc-400 text-[9px] sm:text-[10px] font-medium tracking-wide mt-0.5">
                                    Join 200+ companies who switched this month.
                                </span>
                            </div>
                        </div>
                        <Image
                            src="/Contact-Img.png"
                            alt="Contact"
                            width={600}
                            height={600}
                            className="w-full h-auto rounded-t-[2.25rem] block"
                        />

                        <div className="p-6 sm:p-10 flex flex-col flex-grow justify-between -mt-12">

                            <div className="space-y-4">
                                <a href="#" className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#a8f460] to-[#68c617] hover:bg-[#68c617] text-[#031d10] font-extrabold text-sm py-4 px-6 rounded-2xl hover:scale-[1.01] transition-all">
                                    <span>Set up a demo online</span>
                                    <ArrowRight size={16} />
                                </a>

                                <a href="#" className="flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 font-extrabold text-sm py-4 px-6 rounded-2xl transition-colors">
                                    Talk to Sales
                                </a>
                            </div>

                            <ul className="space-y-3.5 border-t border-white/10 pt-6 mt-8">
                                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-normal tracking-wide text-emerald-50 text-left">
                                    <CheckIcon />
                                    <span>GDPR & SOC2 Type II Complaint</span>
                                </li>
                                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-normal tracking-wide text-emerald-50 text-left">
                                    <CheckIcon />
                                    <span>Dedicated Account Manager</span>
                                </li>
                                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-normal tracking-wide text-emerald-50 text-left">
                                    <CheckIcon />
                                    <span>Custom CRM Integrations</span>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}