import { useState } from "react";
import { Search, SquarePen, Users, Zap, RefreshCw, Lock, ChevronRight, ArrowLeft, ArrowRight, ShieldCheck, Check, X } from "lucide-react";
import Image from "next/image";

const faqs = [
    {
        title: "How do I create a campaign?",
        description: "Learn how to set up and launch campaigns",
        icon: SquarePen,
    },
    {
        title: "How to connect my LinkedIn account to NetworkUp?",
        description: "Step-by-step guide to connect LinkedIn",
        icon: Users,
    },
    {
        title: "How does AI personalization work?",
        description: "Understand how AI writes better messages",
        icon: Zap,
    },
    {
        title: "Can I integrate NetworkUp with my CRM?",
        description: "Explore available integrations",
        icon: RefreshCw,
    },
    {
        title: "Is my LinkedIn account safe?",
        description: "Learn about security and best practices",
        icon: Lock,
    },
];

interface HomeProps {
    onClose?: () => void;
}

export default function Home({ onClose }: HomeProps) {
    const [selectedFaqIndex, setSelectedFaqIndex] = useState<number | null>(null);

    const renderFaqDetail = () => {
        if (selectedFaqIndex === 0) {
            return (
                <div className="flex flex-col gap-y-4 text-left w-full px-2">
                    <div className="bg-[#71EB34] text-black font-bold text-xs py-2 px-3 rounded-lg w-fit">
                        How do I create a campaign?
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Creating a campaign only takes a few minutes. Follow these steps:
                    </p>
                    <div className="flex flex-col gap-y-2.5 mt-2">
                        <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/[0.04] rounded-xl">
                            <span className="bg-white/10 border border-white/20 text-[#71EB34] text-xs font-bold w-6 h-6 flex items-center justify-center rounded">01</span>
                            <span className="text-white text-xs font-medium">Go to Campaign Builder</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/[0.04] rounded-xl">
                            <span className="bg-white/10 border border-white/20 text-[#71EB34] text-xs font-bold w-6 h-6 flex items-center justify-center rounded">02</span>
                            <span className="text-white text-xs font-medium">Click New Campaign</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/[0.04] rounded-xl">
                            <span className="bg-white/10 border border-white/20 text-[#71EB34] text-xs font-bold w-6 h-6 flex items-center justify-center rounded">03</span>
                            <span className="text-white text-xs font-medium">Import or choose your lead list</span>
                        </div>
                    </div>
                    <span className="text-[#71EB34] text-[10px] font-extrabold tracking-wider uppercase mt-3">
                        READY FOR LAUNCH SEQUENCE
                    </span>
                </div>
            )
        }

        if (selectedFaqIndex === 1) {
            return (
                <div className="flex flex-col gap-y-4 text-left w-full px-2">
                    <div className="bg-[#71EB34] text-black font-bold text-xs py-2 px-3 rounded-lg w-fit">
                        How do I connect my LinkedIn account?
                    </div>
                    <span className="text-[#71EB34] text-[10px] font-extrabold tracking-wider uppercase">
                        ⚡ QUICK SETUP
                    </span>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Open <strong className="text-white font-semibold">Settings → LinkedIn Accounts</strong>. Click <strong className="text-[#71EB34] font-semibold">Connect Account</strong> and follow the OAuth authorization flow.
                    </p>
                    <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl mt-2 hover:bg-white/10 transition-colors cursor-pointer">
                        <span className="text-white text-xs font-medium flex items-center gap-2">
                            🔑 Secure Sign-in Required
                        </span>
                        <ChevronRight size={14} className="text-gray-400" />
                    </div>
                </div>
            )
        }

        if (selectedFaqIndex === 2) {
            return (
                <div className="flex flex-col gap-y-4 text-left w-full px-2">
                    <div className="bg-[#71EB34] text-black font-bold text-xs py-2 px-3 rounded-lg w-fit">
                        How does AI personalization work?
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Our neural engine scrapes real-time data to craft hyper-relevant hooks based on:
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 flex flex-col items-start gap-1">
                            <span className="text-zinc-500 text-[8px] font-bold uppercase tracking-wider">TARGET DATA</span>
                            <span className="text-white text-xs font-semibold">Job Title</span>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 flex flex-col items-start gap-1">
                            <span className="text-zinc-500 text-[8px] font-bold uppercase tracking-wider">SIGNAL</span>
                            <span className="text-white text-xs font-semibold">Recent Activity</span>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 flex flex-col items-start gap-1">
                            <span className="text-zinc-500 text-[8px] font-bold uppercase tracking-wider">CONTEXT</span>
                            <span className="text-white text-xs font-semibold">Mutual Conn.</span>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 flex flex-col items-start gap-1">
                            <span className="text-zinc-500 text-[8px] font-bold uppercase tracking-wider">FIRMOGRAPHIC</span>
                            <span className="text-white text-xs font-semibold">Company Info</span>
                        </div>
                    </div>
                </div>
            )
        }

        if (selectedFaqIndex === 3) {
            return (
                <div className="flex flex-col gap-y-4 text-left w-full px-2">
                    <div className="bg-[#71EB34] text-black font-bold text-xs py-2 px-3 rounded-lg w-fit">
                        Can I integrate with CRM?
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Seamlessly sync data to your workflow:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-white/5 text-zinc-300 border border-white/10 text-xs px-2.5 py-1 rounded-full">HubSpot</span>
                        <span className="bg-white/5 text-zinc-300 border border-white/10 text-xs px-2.5 py-1 rounded-full">Salesforce</span>
                        <span className="bg-white/5 text-zinc-300 border border-white/10 text-xs px-2.5 py-1 rounded-full">Pipedrive</span>
                        <span className="bg-[#71EB34] text-black font-semibold text-xs px-2.5 py-1 rounded-full">Zapier</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#71EB34] hover:text-white cursor-pointer mt-4 transition-colors">
                        <span>Go to Integrations</span>
                        <ArrowRight size={14} />
                    </div>
                </div>
            )
        }

        if (selectedFaqIndex === 4) {
            return (
                <div className="flex flex-col gap-y-4 text-left w-full px-2">
                    <div className="bg-[#71EB34] text-black font-bold text-xs py-2 px-3 rounded-lg w-fit">
                        Is my account safe?
                    </div>
                    <span className="text-[#71EB34] text-xs font-extrabold tracking-wide uppercase flex items-center gap-1.5">
                        <ShieldCheck size={16} /> PROTOCOL SECURED
                    </span>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        We maintain account health via:
                    </p>
                    <ul className="flex flex-col gap-y-2 mt-2 pl-1">
                        <li className="flex items-center gap-2 text-xs text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#71EB34]"></span>
                            Human-like activity patterns
                        </li>
                        <li className="flex items-center gap-2 text-xs text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#71EB34]"></span>
                            Randomized message delays
                        </li>
                        <li className="flex items-center gap-2 text-xs text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#71EB34]"></span>
                            Safety limit thresholds
                        </li>
                    </ul>
                </div>
            )
        }

        return null;
    }

    return (
        <>
            <header className="mx-auto h-[50px] w-[300px] rounded-t-2xl px-5 pt-3.5 flex flex-row items-center justify-between bg-[#02140b] shrink-0">
                <div className="flex flex-row items-center gap-x-2">
                    <Image src="/Logo.svg" alt="Logo" width={24} height={24} />
                    <h3 className="text-sm text-[#00d400]/70 font-semibold">NetworkUp.io</h3>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <div className="flex flex-row -space-x-1.5 mr-2">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80"
                            alt="Representative Headshot 1"
                            className="w-5 h-5 object-cover rounded-full border border-white/10"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80"
                            alt="Representative Headshot 2"
                            className="w-5 h-5 object-cover rounded-full border border-white/10"
                        />
                    </div>
                    <button
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                        onClick={onClose}
                    >
                        <X size={16} />
                    </button>
                </div>
            </header>

            <main className="mx-auto flex flex-col items-center gap-y-4 flex-1 w-[300px] bg-[#02140b] overflow-y-auto pb-4 px-4 custom-scrollbar">
                {selectedFaqIndex !== null ? (
                    <div className="w-full flex flex-col items-start pt-5">
                        <button
                            onClick={() => setSelectedFaqIndex(null)}
                            className="flex items-center gap-1.5 text-xs font-bold text-[#71EB34] hover:text-white transition-colors mb-5 cursor-pointer"
                        >
                            <ArrowLeft size={14} /> Back to help
                        </button>
                        {renderFaqDetail()}
                    </div>
                ) : (
                    <>
                        <div className="mt-5 flex flex-row items-center shrink-0 w-full">
                            <div className="flex flex-col items-start ml-2">
                                <h1 className="text-white text-3xl font-bold w-[160px]">Hey there!👋</h1>
                                <h3 className="text-gray-200/80 text-sm w-[150px] text-left">How can we help today?</h3>
                            </div>
                            <div className="ml-auto border-[2px] border-[#02140b] rounded-full overflow-hidden shrink-0">
                                <Image src="/Ai-black.png" alt="AIPage" width={80} height={80} />
                            </div>
                        </div>

                        <div className="w-full shrink-0">
                            <div className="bg-white rounded-xl p-3 flex flex-row items-center justify-between shadow-md">
                                <div className="text-left">
                                    <h2 className="text-black text-[14px] font-bold">Ask a question</h2>
                                    <h4 className="text-gray-400 text-[11px] w-[140px] leading-tight">AI Agent and our team are here to help</h4>
                                </div>
                                <div className="flex flex-row -space-x-1.5">
                                    <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden shrink-0">
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80"
                                            alt="User 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden shrink-0">
                                        <img
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80"
                                            alt="User 2"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden shrink-0">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80"
                                            alt="User 3"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-lime-400 text-[7px] font-extrabold flex items-center justify-center border-2 border-white text-black shrink-0">
                                        +12
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shrink-0 w-full">
                            <div className="flex flex-row items-center bg-white/10 border border-white/5 rounded-2xl px-3 py-1.5">
                                <input
                                    placeholder="Search for help"
                                    className="bg-transparent text-white text-xs placeholder-white/40 py-1 w-full focus:outline-none text-left"
                                />
                                <Search size={16} stroke="#2cff05" className="shrink-0 ml-2" />
                            </div>
                        </div>

                        {/* FAQ List */}
                        <div className="w-full flex flex-col gap-y-3 my-2 shrink-0">
                            {faqs.map((faq, index) => {
                                const IconComponent = faq.icon;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedFaqIndex(index)}
                                        className="flex flex-row items-center justify-between w-full group cursor-pointer hover:bg-white/5 p-1 rounded-xl transition-all duration-150"
                                    >
                                        <div className="flex flex-row items-center gap-x-3">
                                            <div className="w-8.5 h-8.5 bg-[#0c2014] border border-[#1b3b28] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#122e1d] transition-colors duration-150">
                                                <IconComponent size={16} stroke="#2cff05" strokeWidth={2} />
                                            </div>
                                            <div className="flex flex-col items-start leading-tight">
                                                <h4 className="text-white text-[11px] font-semibold text-left tracking-wide leading-snug">
                                                    {faq.title}
                                                </h4>
                                                <p className="text-gray-400/80 text-[9px] text-left mt-0.5 leading-snug">
                                                    {faq.description}
                                                </p>
                                            </div>
                                        </div>
                                        <ChevronRight size={14} stroke="#2cff05" className="shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform duration-150" />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="rounded-full py-1.5 shrink-0 text-center w-full border border-white/5 bg-white/[0.02]">
                            <h3 className="text-lime-400 text-[10px] font-semibold tracking-wide">Still need help? Contact our support team →</h3>
                        </div>
                    </>
                )}
            </main>
        </>
    )
}