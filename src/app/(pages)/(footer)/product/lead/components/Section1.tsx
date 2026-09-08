import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Section1() {
    return (
        <section className="w-full bg-[#f7f9fb] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-y-5 sm:gap-y-6 text-center">
                <span className="inline-flex items-center text-[#414a34] text-xs sm:text-sm md:text-base font-medium px-4 py-1.5 sm:py-2 rounded-full bg-[#f2f4f6] shadow-2xs">
                    Introducing Lead Finder
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#191c1e] font-bold text-center w-full max-w-3xl">
                    Find the right prospects<span className="text-[#414a34]"> before you start outreach.</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#414a34] text-center w-full max-w-xl leading-relaxed">
                    Build high-converting audiences with AI-powered discovery. Stop guessing and start connecting with precision.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mt-2">
                    <Link
                        href="/subscription"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#b4ff7d] to-[#7ceb2a] rounded-full py-3.5 sm:py-4 px-7 sm:px-8 text-base sm:text-lg md:text-xl text-[#191c1e] font-bold shadow-xs hover:-translate-y-0.5 transition-all text-center"
                    >
                        <span>Start Free Trial</span>
                        <ArrowRightIcon size={20} className="shrink-0" />
                    </Link>
                    <Link
                        href="/subscription"
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-white rounded-full py-3.5 sm:py-4 px-7 sm:px-8 text-base sm:text-lg md:text-xl font-bold text-[#191c1e] shadow-xs border border-gray-200/80 hover:border-black hover:-translate-y-0.5 transition-all text-center"
                    >
                        See How It Works
                    </Link>
                </div>
            </div>
        </section>
    );
}