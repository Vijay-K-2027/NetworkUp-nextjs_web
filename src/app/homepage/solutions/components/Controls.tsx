import React from "react";
import { Plus, Users2, ShieldCheck, Zap, HardDrive } from "lucide-react";
import Image from "next/image";

export default function Controls() {
    return (
        <section id="developer-controls" className="w-full bg-[#fafcf7] py-20 px-6 lg:px-8 border-b border-zinc-200/30">
            <div className="mx-auto max-w-9xl">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center pb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Developer-Grade Controls
                    </h2>
                    <p className="mt-4 text-lg font-medium text-gray-600 max-w-3xl">
                        Built for teams that demand precision, high deliverability, and absolute data transparency.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full my-10">
                    <div className="lg:col-span-8 bg-white border border-[#747A6E]/20 border-l-4 border-l-[#356221] rounded-[1.75rem] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(222,250,208,0.2)] flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col justify-between h-full w-[500px]">
                            <div>
                                <span className="text-[10px] sm:text-xs font-bold text-[#356221] bg-[#defad0]/70 px-3 py-1 tracking-wider uppercase w-fit inline-block mb-4">
                                    REAL-TIME SYNC
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                                    Webhooks & API Integrations
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4 w-full">
                                    Connect your CRM, Slack, or internal tools with our robust REST API. Stream event data as it happens with ultra-low latency.
                                </p>
                            </div>

                            {/* Code block */}
                            <div className="bg-[#24272d] text-zinc-300 font-mono text-xs sm:text-sm p-5 rounded-2xl mt-6 flex flex-col gap-2 w-full select-all shadow-inner border border-white/[0.04]">
                                <div className="flex gap-2">
                                    <span className="text-[#a3e635] font-bold">POST</span>
                                    <span className="text-zinc-200">/v1/network/sync</span>
                                </div>
                                <div className="text-zinc-400 select-all">{`{ "event": "connection_accepted", "id": "92k8-m1" }`}</div>
                            </div>
                        </div>

                        {/* Image Panel */}
                        <div className="relative w-full md:w-[280px] lg:w-[320px] h-[190px] sm:h-[220px] md:h-[190px] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                            <Image
                                src="/Server_rack.png"
                                alt="Server room Webhooks"
                                fill
                                sizes="(max-width: 768px) 100vw, 320px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Card: SOC2 Certified */}
                    <div className="lg:col-span-4 bg-[#76e11b] rounded-[1.75rem] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(118,225,27,0.25)] flex flex-col justify-center h-fit lg:min-h-0">
                        <div className="flex flex-col items-start">
                            <ShieldCheck size={38} className="text-[#031d10] mb-1 stroke-[2]" />
                            <h3 className="text-2xl font-bold text-[#031d10] mb-3 tracking-tight">
                                SOC2 Certified
                            </h3>
                            <p className="text-[#031d10]/80 text-sm sm:text-base leading-relaxed font-medium">
                                Enterprise-level data encryption and privacy controls are baked into every layer of our stack.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Card 1: Dynamic A/B Testing */}
                    <div className="rounded-[1.75rem] border border-[#747A6E]/20 p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(222,250,208,0.2)] flex flex-col justify-between min-h-[220px]">
                        <div>
                            <div className="flex flex-row items-center justify-between gap-3 mb-5">
                                <div className="flex flex-row gap-0.5 p-1 px-2 rounded bg-[#356221]/10">
                                    <div className="flex flex-col gap-0.5">
                                        <HardDrive className="w-3 h-3 stroke-[2.5] text-[#356221]" />
                                        <HardDrive className="w-5 h-5 stroke-[2.5] text-[#356221]" />
                                    </div>
                                    <Zap fill="#356221" className="w-5 h-7 stroke-[2.5] text-[#356221] -ml-3 -mt-1 -rotate-10" />
                                </div>
                                <span className="text-xs font-bold text-[#356221] tracking-wider px-2.5 py-1 rounded-md">
                                    v2.4 UPDATE
                                </span>
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 tracking-tight">
                                Dynamic A/B Testing
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                Automatically pivot your outreach strategy based on response sentiment and industry-specific triggers to maximize reply rates.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Team Orchestration */}
                    <div className="rounded-[1.75rem] border border-[#747A6E]/20 p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(222,250,208,0.2)] flex flex-col justify-between min-h-[220px]">
                        <div>
                            <div className="flex flex-row items-center justify-between gap-3 mb-5">
                                <div className="flex flex-row items-center gap-0.5 p-1 py-2 rounded bg-[#356221]/10">
                                    <Users2 className="w-6 h-6 stroke-[2.5] text-[#356221]" />
                                    <Plus className="w-4 h-4 stroke-[3] text-[#356221] -ml-1" />
                                </div>
                                <span className="text-xs font-bold text-[#356221] tracking-wider uppercase px-2.5 py-1 rounded-md">
                                    COLLABORATION
                                </span>
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 tracking-tight">
                                Team Orchestration
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                Shared lead pools and collaborative workflows ensure no professional prospect is double-contacted, maintaining brand integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}