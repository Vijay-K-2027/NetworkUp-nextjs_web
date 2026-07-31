import { CircleCheck } from "lucide-react";
import Image from "next/image";

const section1Data = [
    "Too many tools. Too many tabs.", "Manual work kills productivity.", "Personalization drives results.", "Automation should feel human."
]

export default function Section1() {
    return (
        <section className="bg-[#fafcf7] w-full max-w-8xl mx-auto">
            <div className="flex flex-row items-center justify-center">
                <div className="w-[45%] bg-transparent w-full p-10">
                    <Image src="/server_rack.png" alt="Building Relationship Image" width={600} height={70} className="rounded-4xl pl-20" />
                </div>
                <div className="w=[45%] w-full p-5">
                    <div className="flex flex-col items-start gap-y-4">
                        <h1 className="text-[#71EB34] uppercase text-md font-bold">Why we built NetworkUp.io</h1>
                        <div className="flex flex-col ">
                            <h2 className="text-black text-2xl sm:text-4xl font-extrabold">Outreach should build </h2>
                            <h3 className="text-black text-2xl sm:text-4xl font-extrabold">relationships, not take hours.</h3>
                        </div>
                        <h4 className="text-gray-400/70 w-[650px] text-md md:text-lg mt-3">We built NetworkUp.io to remove the repetitive, time-consuming tasks from LinkedIn outreach —— so you can focus on what actually matters: having real conversations.</h4>
                    </div>
                    <div className="flex flex-col gap-y-3 my-8">
                        {section1Data.map((data, index) => (
                            <div key={index} className="flex flex-row items-center gap-x-2">
                                <CircleCheck size={20} className="stroke-[#71EB34]" />
                                <span className="text-md text-black">{data}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}