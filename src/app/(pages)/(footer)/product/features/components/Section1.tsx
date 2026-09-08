import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Section1() {
    return (
        <section>
            <div className="w-full max-w-9xl mx-auto my-10 flex flex-col items-center justify-center gap-y-2">
                <h1 className="uppercase tracking-wide text-[#406900] text-md mb-2">
                    Features
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-5 leading-wide font-bold text-center w-full text-[#191c1e] lg:max-w-[1200px]">
                    Everything you need to turn LinkedIn networking into <span className="text-[#316b00]">growth.</span>
                </h2>
                <h3 className="text-sm sm:text-md md:text-lg lg:text-xl text-[#414a34] text-center w-full max-w-[800px] px-5">
                    Discover ideal prospects, organize you leads, automate connection workflows, and measure every outreach campaign-all from one unified workspace designed for high-growth teams.
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#191c1e] my-5">
                    <Link href="/subscription" className="bg-gradient-to-b from-[#b9ff85] to-[#7ceb2a] rounded-full py-5 px-10 hover:-translate-[2px] text-xl font-bold ">Start Free Trial</Link>
                    <Link href="/subscription" className="flex flex-row items-center justify-center bg-white rounded-full py-5 px-10 text-xl font-bold border border-[#c0caae] hover:-translate-[2px]" >Explore the Platform <span><ArrowRightIcon size={20} /></span></Link>
                </div>
            </div>
        </section>
    )
}