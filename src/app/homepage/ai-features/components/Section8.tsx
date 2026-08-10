import { AlertCircle, AlertTriangle, BellRing, Dot, HeartPulse, Lightbulb, Radar, ShieldPlusIcon } from "lucide-react";

export default function Section5() {
    return (
        <section className="bg-gray-100/60 w-full px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">

                    {/* Left Column: Information */}
                    <div className="flex flex-col items-start justify-center w-full lg:max-w-[48%] gap-y-5" >
                        <span className="uppercase text-xs sm:text-sm text-[#356221] font-extrabold tracking-wider leading-tight">
                            AI Health Center
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight w-full max-w-[650px]">
                            Keep every campaign healthy
                        </h2>
                        <p className="text-base sm:text-lg text-black/60 text-left w-full max-w-[550px] leading-relaxed">
                            NetworkUp's AI continuously monitors your LinkedIn campaigns, detecting risks before they impact performance and suggesting instant optimizations.
                        </p>
                        <div className="inline-flex flex-wrap w-full max-w-[450px] gap-x-4 gap-y-3 py-3 text-xs sm:text-sm font-semibold text-gray-700">
                            <span className="inline-flex flex-row items-center gap-x-1">
                                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex flex-col items-center justify-center">
                                    <Radar size={20} />
                                </div>
                                <span className="px-3 py-2 bg-transparent">AI Risk Detection</span>
                            </span>
                            <span className="inline-flex flex-row items-center gap-x-1">
                                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex flex-col items-center justify-center">
                                    <HeartPulse size={20} />
                                </div>
                                <span className="px-3 py-2 bg-transparent">Health Monitoring</span>
                            </span>
                            <span className="inline-flex flex-row items-center gap-x-1">
                                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex flex-col items-center justify-center">
                                    <Lightbulb size={20} />
                                </div>
                                <span className="px-3 py-2 bg-transparent">Recommendations</span>
                            </span>
                            <span className="inline-flex flex-row items-center gap-x-1">
                                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex flex-col items-center justify-center">
                                    <BellRing size={20} />
                                </div>
                                <span className="px-3 py-2 bg-transparent">Performance Alerts</span>
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Interactive Card */}
                    <div className="flex flex-col items-start justify-center rounded-[24px] sm:rounded-[36px] border border-gray-200/60 bg-white w-full lg:max-w-[48%] shadow-[-5px_5px_10px_1px_rgba(113,235,52,0.2)]">
                        <div className="flex flex-row items-center gap-x-2 w-full rounded-t-[24px] sm:rounded-t-[36px] border border-gray-200/60 px-7 py-4">
                            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center m-">
                                <ShieldPlusIcon size={25} className="fill-white stroke-black stroke-[2]" />
                            </div>
                            <span className="uppercase px-2 py-1 text-lg font-bold text-black/80">AI Health Center</span>
                        </div>

                        <div className="flex flex-row items-stretch gap-x-4 w-full pl-6 pr-10 py-5 sm:pl-10 sm:pr-18 sm:py-8 bg-[#fafcf5]/40">
                            {/* Health Score Circular Indicator Card */}
                            <div className="flex flex-col items-center w-[30%] justify-center rounded-2xl border border-gray-100/80 py-5 px-3 bg-gray-100/70 shrink-0 gap-y-3">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                        {/* Grey Track */}
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="38"
                                            stroke="#e2e8f0"
                                            strokeWidth="8"
                                            fill="none"
                                        />
                                        {/* Green Arcs */}
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="38"
                                            stroke="#71EB34"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray="45 15"
                                            strokeDashoffset="22"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl sm:text-3xl font-extrabold text-black font-sans">92</span>
                                    </div>
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-extrabold text-zinc-500 tracking-wider uppercase text-center leading-none">
                                    Health Score
                                </span>
                            </div>

                            {/* Campaign Metrics Details */}
                            <div className="flex flex-col items-start w-[65%] justify-center rounded-2xl gap-y-3 py-4 px-3 shrink-0">
                                <div className="p-2 flex flex-row items-center justify-between gap-x-2 bg-gray-100/60 rounded-xl w-full">
                                    <div className="flex items-center gap-1.5">
                                        <Dot size={24} className="text-emerald-500 shrink-0 stroke-[3]" />
                                        <span className="font-semibold text-[10px] sm:text-xs text-black/60 text-left">Active Campaigns</span>
                                    </div>
                                    <h4 className="text-sm sm:text-base font-extrabold text-gray-800 pr-1">12</h4>
                                </div>
                                <div className="p-2 flex flex-row items-center justify-between gap-x-2 bg-gray-100/60 rounded-xl w-full">
                                    <div className="flex items-center gap-1.5">
                                        <Dot size={24} className="text-amber-500 shrink-0 stroke-[3]" />
                                        <span className="font-semibold text-[10px] sm:text-xs text-black/60 text-left">Risk Warnings</span>
                                    </div>
                                    <h4 className="text-sm sm:text-base font-extrabold text-gray-800 pr-1">3</h4>
                                </div>
                                <div className="p-2 flex flex-row items-center justify-between gap-x-2 bg-gray-100/60 rounded-xl w-full">
                                    <div className="flex items-center gap-1.5">
                                        <Dot size={24} className="text-rose-500 shrink-0 stroke-[3]" />
                                        <span className="font-semibold text-[10px] sm:text-xs text-black/60 text-left">Critical Issues</span>
                                    </div>
                                    <h4 className="text-sm sm:text-base font-extrabold text-gray-800 pr-1">1</h4>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-center gap-y-3 rounded-b-[24px] sm:rounded-b-[36px] w-full bg-[#fafcf5]/40 px-8 pb-6">
                            <h1 className="uppercase text-black/70 w-full text-left">AI Risk Detection</h1>
                            <div className="p-2.5 flex flex-row gap-x-2 bg-yellow-100/80 items-center rounded-xl w-full">
                                <AlertTriangle size={32} className="fill-yellow-600 stroke-white shrink-0" />
                                <span className="font-semibold text-xs sm:text-sm text-yellow-700 text-left">
                                    <h1>Connection limit nearing</h1>
                                    <h2 className="text-yellow-700/70 text-xs">Campaign "Q3 Enterprise" is at 85% of safe limit.</h2>
                                </span>
                            </div>
                            <div className="p-2.5 flex flex-row gap-x-2 bg-red-100/80 items-center rounded-xl w-full">
                                <AlertCircle size={32} className="fill-red-600 stroke-white shrink-0" />
                                <span className="font-semibold text-xs sm:text-sm text-red-700 text-left">
                                    <h1>Low reply rate in Segment A</h1>
                                    <h2 className="text-red-600/70 text-xs">Messaging variant A is underperforming baseline by 40%.</h2>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}