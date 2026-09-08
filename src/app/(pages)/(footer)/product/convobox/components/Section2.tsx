import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Section2() {
    return (
        <section className="w-full bg-[#F9FAFB] p-4 sm:p-6 lg:p-10">
            <div className="w-full max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-12">

                {/* Left Column */}
                <div className="w-full lg:w-[50%] lg:pl-10 flex flex-col items-start justify-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white shadow-xs text-xs font-semibold tracking-wider text-gray-800 uppercase mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-[#356221]" />
                        <span>
                            NEW <span className="text-gray-300 font-light mx-0.5">||</span> SMART AI FOLLOW-UPS
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-950 tracking-tight leading-[1.08]">
                        Follow up smarter.<br />
                        <span className="text-[#414A34]">Keep the <br />conversation<br /> moving.</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-[500px]">
                        Smart AI Follow-ups helps you create timely, context-aware follow-up messages based on the conversation and outreach history — so every follow-up feels more relevant and less repetitive.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                        <Link
                            href="/subscription"
                            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-to-b from-[#C8FFA0] to-[#7CEB2A] hover:bg-[#8edb1e] text-gray-950 font-bold text-base shadow-sm transition-all transform hover:-translate-y-0.5 text-center"
                        >
                            Try Smart Follow-ups
                        </Link>
                        <Link
                            href="/subscription"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base border border-gray-300 shadow-sm transition-all transform hover:-translate-y-0.5 text-center"
                        >
                            <span>See How It Works</span>
                            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                        </Link>
                    </div>
                </div>

                {/* Right Column - Picture container (Ready for user image upload) */}
                <div className="w-full lg:w-[50%] flex items-center justify-center">
                    <Image
                        src="/footer/product/convobox/Inbox-all.png"
                        alt="ConvoBox Inbox"
                        width={1000}
                        height={1100}
                        className="w-full max-w-[90%] h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                    />
                </div>

            </div>
        </section>
    );
}