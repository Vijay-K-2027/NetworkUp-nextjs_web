import { Search, SquarePen, Users, Zap, RefreshCw, Lock, ChevronRight } from "lucide-react";
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
    return (
        <>
            <header className="mx-auto my-2 h-[50px] w-[300px] rounded-t-2xl space-x-10 px-10 pt-2 flex flex-row items-center justify-between bg-[#02140b]">
                <div className="flex flex-row items-start gap-x-2 -ml-5">
                    <Image src="/Logo.svg" alt="Logo" width={30} height={30} />
                    <h3 className="text-md text-[#00d400]/70 font-semibold mt-1">NetworkUp.io  </h3>
                </div>
                <div className="flex flex-row items-end justify-center gap-x-2 -mt-3">
                    <div className="flex flex-row -space-x-2 ml-6 -mr-2">
                        <div className="w-[25px] h-[25px] rounded-full">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80"
                                alt="Representative Headshot 2"
                                className="w-full h-full object-cover rounded-full "
                            />
                        </div>
                        <div className="w-[25px] h-[25px] rounded-full">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80"
                                alt="Representative Headshot 2"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="w-[25px] h-[25px] rounded-full">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80"
                                alt="Representative Headshot 2"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                    <div
                        className="w-6 h-10 ml-2 pt-3 text-lg text-gray-400 p-1.5 cursor-pointer hover:text-white transition-colors"
                        onClick={onClose}
                    >
                        X
                    </div>
                </div>
            </header>
            <main className="mx-auto -mt-2 flex flex-col items-center gap-y-4 h-[550px] w-[300px] bg-[#02140b] overflow-y-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="mx-3 mt-5 flex flex-row items-center shrink-0">
                    <div className="flex flex-col items-start ml-3">
                        <h1 className="text-white text-3xl font-bold w-[200px]">Hey there!👋</h1>
                        <h3 className="text-gray-200/80 text-md w-[180px]">How can we help you today?</h3>
                    </div>
                    <div className="-ml-5 border-[2px] border-[#02140b] rounded-full">
                        <Image src="/Ai-black.png" alt="AIPage" width={100} height={100} className="rounded-l-full" />
                    </div>
                </div>
                <div className="mx-3 shrink-0">
                    <div className="bg-white rounded-xl p-3 flex flex-row items-center">
                        <div>
                            <h2 className="text-black text-[16px] font-bold">Ask a question</h2>
                            <h4 className="text-gray-400 text-[12px] w-[180px]">AI Agent and our team are here to help</h4>
                        </div>
                        <div className="flex flex-row -space-x-2 -mr-2">
                            <div className="w-[25px] h-[25px] rounded-full border-[2px] border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80"
                                    alt="Representative Headshot 2"
                                    className="w-full h-full object-cover rounded-full "
                                />
                            </div>
                            <div className="w-[25px] h-[25px] rounded-full border-[2px] border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80"
                                    alt="Representative Headshot 2"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className="w-[25px] h-[25px] rounded-full border-[2px] border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80"
                                    alt="Representative Headshot 2"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className="w-[20px] h-[25px] rounded-full bg-lime-400 text-[8px] font-bold pt-1.5 text-center tracking-tighter border-[2px] border-white">
                                +12
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 w-[270px]">
                    <div className="flex flex-row items-center bg-white/10 border border-white/5 rounded-2xl px-3 py-1.5">
                        <input
                            placeholder="Search for help"
                            className="bg-transparent text-white text-sm placeholder-white/40 py-1 w-full focus:outline-none"
                        />
                        <Search size={20} stroke="#2cff05" className="shrink-0 ml-2" />
                    </div>
                </div>

                {/* FAQ List */}
                <div className="w-[270px] flex flex-col gap-y-3.5 my-3 shrink-0">
                    {faqs.map((faq, index) => {
                        const IconComponent = faq.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-row items-center justify-between w-full group cursor-pointer hover:opacity-80 transition-all duration-150"
                            >
                                <div className="flex flex-row items-center gap-x-3">
                                    <div className="w-9 h-9 bg-[#0c2014] border border-[#1b3b28] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#122e1d] transition-colors duration-150">
                                        <IconComponent size={18} stroke="#2cff05" strokeWidth={2} />
                                    </div>
                                    <div className="flex flex-col items-start leading-tight">
                                        <h4 className="text-white text-[12px] font-semibold text-left tracking-wide leading-snug">
                                            {faq.title}
                                        </h4>
                                        <p className="text-gray-400/80 text-[10px] text-left mt-0.5 leading-snug">
                                            {faq.description}
                                        </p>
                                    </div>
                                </div>
                                <ChevronRight size={16} stroke="#2cff05" className="shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform duration-150" />
                            </div>
                        );
                    })}
                </div>

                <div className="rounded-full p-2 shrink-0">
                    <h3 className="text-lime-400 text-sm">Still need help? Contact our support team &gt; </h3>
                </div>
            </main>
        </>
    )
}