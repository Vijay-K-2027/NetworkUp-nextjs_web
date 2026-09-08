import { History, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

export default function Section3() {
    return (
        <section className="w-[96%] mx-auto bg-[#F9FAFB] py-16 px-4 sm:px-6 lg:px-10 border-t border-[#C0CCAE]">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center">

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#191C1E] text-center tracking-tight">
                    Beyond generic check-ins.
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-sm sm:text-base md:text-lg text-[#414A34] text-center max-w-[710px] leading-relaxed">
                    Smart AI Follow-ups intelligently analyze your conversation history and outreach context to craft relevant, personalized replies. Stop sending robotic pings and start continuing real conversations.
                </p>

                {/* Comparison Container */}
                <div className="mt-12 sm:mt-16 w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-5 relative">

                    {/* Left Card: The Old Way */}
                    <div className="w-full md:w-1/2 bg-[#ECEEF0]/20 border border-gray-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between">
                        <div>
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-md text-xs font-bold tracking-wider text-[#BA1A1A] bg-[#BA1A1A]/5 border border-[#BA1A1A]/20 uppercase">
                                    THE OLD WAY
                                </span>
                                <History className="w-5 h-5 text-[#C0CAAE] stroke-[1.8]" />
                            </div>

                            {/* Strikethrough Message Bubble */}
                            <div className="relative my-6 p-4 sm:p-5 rounded-2xl bg-[#ECEEF0] border border-gray-200/80">
                                {/* Left bubble tail */}
                                <div className="absolute left-[-7px] top-6 w-3.5 h-3.5 bg-[#ECEEF0] border-l border-b border-gray-200/80 rotate-45" />
                                <p className="text-sm sm:text-base text-gray-400 line-through leading-relaxed font-normal">
                                    &ldquo;Just following up on my previous message to see if you had any thoughts...&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Footer evaluation */}
                        <div className="pt-4 border-t border-[#C0CAAE]">
                            <p className="text-xs sm:text-sm text-[#414A34] font-medium">
                                Repetitive, ignorable, lacks context.
                            </p>
                        </div>
                    </div>

                    {/* Middle Transition Indicator */}
                    <div className="absolute w-9 h-9 rounded-full bg-[#ECEEF0] border border-[#C0CAAE] flex items-center justify-center text-gray-400 shrink-0 z-10 my-1 md:my-0">
                        <ArrowRight className="w-3 h-3 stroke-[3] stroke-[#414A34] rotate-90 md:rotate-0" />
                    </div>

                    {/* Right Card: Smart Follow-Up */}
                    <div className="w-full md:w-1/2 bg-[#C0CAAE]/20 z-0 border-2 border-[#406900]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-md shadow-lime-900/5 flex flex-col justify-between">
                        <div>
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs tracking-wider text-[#3A5C00] bg-[#406900]/10 border border-[#406900]/20 uppercase">
                                    <Sparkles className="w-3.5 h-3.5 text-[#3A5C00]" />
                                    <span>SMART FOLLOW-UP</span>
                                </span>
                                <MessageSquare className="w-5 h-5 text-[#406900] stroke-[2]" />
                            </div>

                            {/* Crisp White Message Bubble */}
                            <div className="relative my-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#C0CAAE] shadow-sm">
                                {/* Left bubble tail */}
                                <div className="absolute left-[-7px] top-6 w-3.5 h-3.5 bg-white border-l border-b border-[#C0CAAE] rotate-45" />
                                <p className="text-sm sm:text-base text-[#191C1E] font-medium leading-relaxed">
                                    &ldquo;Hi Alex, did you have a chance to look at the outbound workflow setup? Happy to walk through it on a quick 5-min call.&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Footer evaluation */}
                        <div className="pt-4 border-t border-[#C0CAAE] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#A3FF12] shrink-0" />
                            <p className="text-xs sm:text-sm text-[#191C1E] font-semibold">
                                Context-aware, direct, actionable.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
