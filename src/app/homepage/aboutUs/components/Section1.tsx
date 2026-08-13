import { CircleCheck } from "lucide-react";
import Image from "next/image";

export default function Section1() {
    return (
        <section className="bg-[#fafcf7] w-full max-w-8xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                <div className="w-full lg:w-[45%] bg-transparent p-4 lg:p-10 flex justify-center">
                    <Image src="/AboutUs.png" alt="Building Relationship Image" width={600} height={400} className="w-full h-auto max-w-[600px]" />
                </div>
                <div className="w-full lg:w-[45%] p-5">
                    <div className="flex flex-col items-start gap-y-4">
                        <h1 className="text-[#71EB34] uppercase text-md font-bold">About Us ——</h1>
                        <div className="flex flex-col text-left">
                            <h1 className="text-black text-4xl sm:text-6xl font-bold ">We build tools that</h1>
                            <h2 className="text-black text-4xl sm:text-6xl font-bold ">help people <span className="text-[#71EB34]">connect</span>, </h2>
                            <h3 className="text-black text-4xl sm:text-6xl font-bold ">conversations that</h3>
                            <h4 className="text-[#71EB34] text-4xl sm:text-6xl font-bold ">create opportunities.</h4>
                        </div>
                        <hr className="border-2 border-[#71E111]/20 w-full" />
                        <h4 className="text-[#356221] w-full text-left text-lg md:text-xl leading-wide">At NetworkUp.io, we're on a mission to make LinkedIn outreach smarter, safer, and more effective. Built by the team behind WhiterApps, we combine deep product expertise with a passion for helping businesses grow through meaningful connections.</h4>
                    </div>
                    <div className="flex flex-row gap-x-5 my-8">
                        <button className="bg-[#71EB34] text-black font-bold px-6 py-3 rounded-xl">Start Free Trail </button>
                        <button className="bg-transparent text-black font-bold hover:border-2 hover:text-[#71EB34] border-[#71EB34] px-6 py-3 rounded-xl transition-all duration-200">Book a Demo</button>
                    </div>
                </div>
            </div>
        </section>
    )
}