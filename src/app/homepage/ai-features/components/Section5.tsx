import { Dot } from "lucide-react";

export default function Section5() {
    return (
        <section className="bg-gray-100/60 w-screen px-5 py-10">
            <div className="max-w-9xl mx-auto">
                <div className="flex flex-row items-center justify-center ">
                    <div className="flex flex-col items-start justify-center w-full max-w-[45%] gap-y-5" >
                        <h1 className="uppercase text-[#356221] leading-tight">Real-Time Data</h1>
                        <h2 className="text-4xl sm:text-5xl font-bold w-[650px] ">Understand your outreach instantly</h2>
                        <h3 className="text-lg sm:text-xl text-black/60 text-left w-[550px]">Stop digging through spreadsheets. Our AI surfaces the exact data points you need to make decisions.</h3>
                        <div className="inline-flex flex-wrap w-[450px] gap-x-2 gap-y-3 py-3">
                            <span className="px-4 py-2 rounded-full border border-gray-200 bg-white">Vertical Benchmarking</span>
                            <span className="px-4 py-2 rounded-full border border-gray-200 bg-white">Reply Sentiment Analysis</span>
                            <span className="px-4 py-2 rounded-full border border-gray-200 bg-white">A/B Testing Reports</span>
                            <span className="px-4 py-2 rounded-full border border-gray-200 bg-white">ROI Tracking</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-y-7 p-10 shadow-xl rounded-4xl border-4 border-gray-200 w-full max-w-[45%]">
                        <div className="flex flex-row items-center justify-between w-full">
                            <h1 className="font-bold text-xl text-black text-left">Campaign Insights</h1>
                            <span className="uppercase rounded-md bg-gray-200 px-2 py-1 rounded-lg text-black/80 text-md">Live Updates</span>
                        </div>
                        <div className="flex flex-row items-center gap-x-4 w-full">
                            <div className="flex flex-col items-start justify-center rounded-xl border border-gray-100/70 gap-y-1 py-4 px-3 w-full max-w-[48%] bg-[#356221]/5">
                                <h1 className="text-3xl sm:text-4xl font-bold text-left">18%</h1>
                                <h2 className="text-md uppercase text-[#356221] text-left">Acceptance Rate ▲</h2>
                            </div>
                            <div className="flex flex-col items-start justify-center rounded-xl border border-gray-100/70 gap-y-1 py-4 px-3 w-full max-w-[48%] bg-gray-100/60">
                                <h1 className="text-3xl sm:text-4xl font-bold text-left">42%</h1>
                                <h2 className="text-md uppercase text-[#356221] text-left">Reply Rate</h2>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-y-3 w-full">
                            <div className="p-2 flex flex-row gap-x-2 bg-gray-200 items-center rounded-lg w-full">
                                <Dot size={40} color="#356221" />
                                <span className="font-medium text-md text-left">Healthcare is your top performing vertical this week.</span>
                            </div>
                            <div className="p-2 flex flex-row gap-x-2 bg-gray-200 items-center rounded-lg w-full">
                                <Dot size={40} color="#c62626ff" />
                                <span className="font-medium text-md text-left">Finance campaign needs a follow-up adjustment.</span>
                            </div>
                            <div className="p-2 flex flex-row gap-x-2 bg-gray-200 items-center rounded-lg w-full">
                                <Dot size={40} color="#356221" />
                                <span className="font-medium text-md text-left">Tuesday leads respond 2.4x faster than Friday.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}