import { ArrowRightIcon, SmartphoneNfc } from "lucide-react";
import Link from "next/link";

export default function Section1() {
    return (
        <section>
            <div className="w-full bg-white max-w-9xl mx-auto p-10 flex flex-col items-center justify-center gap-y-6">
                <h1 className="uppercase text-[#191C1E] text-sm px-4 py-2 rounded-full bg-[#E0E3E5] flex flex-row items-center justify-center gap-x-2">
                    <SmartphoneNfc size={20} className="stroke-[#406900]" />
                    Saas Outreach
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-wide font-bold text-center w-full lg:max-w-[850px]">
                    Reach the right people with outreach that feels<span className="text-[#316B00]"> personal.</span>
                </h2>
                <h3 className="text-xs sm:text-md md:text-lg  text-black/60 text-center w-full max-w-[750px]">
                    NetworkUp helps you create personalized connection requests, dynamic follow-ups, and automate repetitive tasks. Manage every interaction from one unified workspace while keeping your pipeline full.
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-3">
                    <Link href="/subscription" className="flex flex-row items-center justify-center bg-gradient-to-b from-[#BBFF89] to-[#7CEB2A] rounded-lg py-5 px-10 hover:bg-[#71EB34] hover:-translate-[2px] text-xl font-bold ">Start Free Trial <span><ArrowRightIcon size={20} /></span></Link>
                    <Link href="/subscription" className="bg-white rounded-lg py-5 px-10 text-xl font-bold border border-black hover:-translate-[2px]" >See How Outreach Works</Link>
                </div>
            </div>
        </section>
    )
}