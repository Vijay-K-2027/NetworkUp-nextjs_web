import React from "react";
import { Inbox, MessageSquareMore, RefreshCcw, UserPlus, UserRoundCheck } from "lucide-react";

const flowChart = [
    {
        icon: UserRoundCheck,
        title: "If Connected",
        description: "Checks if the lead is already in your network."
    },
    {
        icon: UserPlus,
        title: "Send Request",
        description: "If not connected, automatically send a connection request."
    },
    {
        icon: MessageSquareMore,
        title: "Send Message",
        description: "Once they accept, automatically send message."
    },
    {
        icon: Inbox,
        title: "Unified Inbox",
        description: "If they reply, it lands in your unified inbox."
    },

]

export default function Section9() {
    return (
        <section className="bg-[#fafcf7] w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 w-full">

                {/* Column 1: Left Title & Description */}
                <div className="flex flex-col items-start gap-y-4 w-full lg:max-w-[22%]">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight w-full text-left">
                        Inbound <span className="text-[#71EB34] block">Automation</span>
                    </h2>
                    <p className="text-sm sm:text-base text-black/60 text-left leading-relaxed">
                        Automate conversations and drive replies — on autopilot.
                    </p>
                </div>

                {/* Column 2: How It Works Flowchart Block */}
                <div className="flex flex-col items-center justify-center w-full lg:max-w-[42%] border border-gray-200/85 bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 gap-y-6 shadow-lg">
                    <span className="text-xs uppercase font-extrabold text-[#356221] rounded-full bg-[#EAFCEB] px-4 py-1.5 w-fit">
                        How it Works
                    </span>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full py-2">
                        {flowChart.map((object, index) => {
                            const IconComponent = object.icon;
                            return (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col items-center gap-y-2 text-center w-full sm:w-[22%]">
                                        <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 shrink-0 shadow-sm">
                                            <IconComponent size={22} className="stroke-[#356221]" />
                                        </div>
                                        <h4 className="font-bold text-xs sm:text-sm text-black leading-tight">{object.title}</h4>
                                        <p className="text-[11px] sm:text-xs text-black/50 leading-snug px-0.5">{object.description}</p>
                                    </div>
                                    {index !== flowChart.length - 1 && (
                                        <div className="text-gray-300 text-2xl font-bold rotate-90 sm:rotate-0 my-1 sm:my-0 shrink-0 select-none">
                                            →
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>

                    <div className="w-full bg-gray-100 rounded-xl border border-gray-200 px-5 py-3.5 flex flex-row items-start gap-x-3.5">
                        <RefreshCcw size={20} className="stroke-[#356221] shrink-0 mt-0.5" />
                        <p className="text-left text-xs text-gray-600 font-medium leading-relaxed">
                            Runs automatically for every lead in your campaign sequence until they reply, you remove them, or sequence ends.
                        </p>
                    </div>
                </div>

                {/* Column 3: Inbound Sequence Timeline Card Mockup */}
                <div className="w-full lg:max-w-[32%] bg-gray-100/60 border border-gray-200 p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] flex flex-col gap-6 shadow-xl shrink-0">
                    <h4 className="font-extrabold text-gray-900 text-lg text-left">Inbound Sequence</h4>

                    {/* Timeline Path */}
                    <div className="relative w-full flex flex-col items-center py-4 min-h-[340px]">
                        {/* Center Vertical Line */}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200" />

                        {/* Box 1 (Right): If Connected */}
                        <div className="relative w-full flex justify-start pl-[50%] mb-7">
                            <div className="relative bg-white border border-gray-150 rounded-2xl p-4 shadow-sm ml-4 w-[130px] text-left hover:scale-[1.02] transition-transform duration-300">
                                <span className="text-[10px] text-gray-405 font-extrabold block uppercase tracking-wider mb-0.5">If</span>
                                <span className="text-sm font-extrabold text-slate-800">Connected</span>
                                {/* Badge on Right */}
                                <div className="absolute left-[118px] top-1/2 -translate-y-1/2 bg-[#eefce6] text-[#356221] text-[9px] font-extrabold px-2 py-0.5 rounded border border-[#defad0] z-20 shadow-sm leading-none">
                                    COMPLETED
                                </div>
                            </div>
                        </div>

                        {/* Box 2 (Left): Send Request */}
                        <div className="relative w-full flex justify-end pr-[50%] mb-7">
                            <div className="relative bg-white border border-gray-150 rounded-2xl p-4 shadow-sm mr-4 w-[130px] text-left hover:scale-[1.02] transition-transform duration-300">
                                <span className="text-[10px] text-gray-405 font-extrabold block uppercase tracking-wider mb-0.5">Send</span>
                                <span className="text-sm font-extrabold text-slate-800">Request</span>
                                {/* Badge: centered on the vertical line (so on the right border of the card, offset right) */}
                                <div className="absolute -right-3 top-1/2 -translate-y-1/2 bg-gray-100 text-gray-500 text-[9px] font-extrabold px-2 py-0.5 rounded border border-gray-200 z-20 shadow-sm leading-none">
                                    SENT
                                </div>
                            </div>
                        </div>

                        {/* Box 3 (Right): Send Message */}
                        <div className="relative w-full flex justify-start pl-[50%] mb-2">
                            <div className="relative bg-white border border-gray-150 rounded-2xl p-4 shadow-sm ml-4 w-[130px] text-left hover:scale-[1.02] transition-transform duration-300 opacity-60">
                                <span className="text-[10px] text-gray-405 font-extrabold block uppercase tracking-wider mb-0.5">Send</span>
                                <span className="text-sm font-extrabold text-slate-800">Message</span>
                                {/* Badge on Right */}
                                <div className="absolute left-[118px] top-1/2 -translate-y-1/2 bg-gray-50 text-gray-400 text-[9px] font-extrabold px-2 py-0.5 rounded border border-gray-150 z-20 shadow-sm leading-none">
                                    PENDING
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}