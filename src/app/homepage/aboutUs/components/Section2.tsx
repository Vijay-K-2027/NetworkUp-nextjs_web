import { CircleCheck, CircleX } from "lucide-react";

const section2Data = [
    {
        struggle: "Complicated & expensive tools",
        tools: "Hard to learn & setup",
        Networkup: "Simple, fast & intuitive"
    },
    {
        struggle: "Manual follow-ups",
        tools: "Time-consuming",
        Networkup: "Automated smart follow-ups"
    },
    {
        struggle: "Disconnected inboxes",
        tools: "Scattered conversations",
        Networkup: "Unified inbox in one place"
    },
    {
        struggle: "Low reply rates",
        tools: "Generic templates",
        Networkup: "AI-personalized messages"
    },
    {
        struggle: "No clear analytics",
        tools: "Basic or limited reports",
        Networkup: "Powerful real-time analytics"
    },
];

export default function Section2() {
    return (
        <section className="bg-[#fafcf7] py-16 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto w-full">

                {/* Section Title */}
                <div className="flex flex-col items-center justify-center gap-2 mb-12 text-center">
                    <h1 className="uppercase text-lg sm:text-xl font-bold text-[#71EB34] tracking-tight">
                        What makes us different
                    </h1>
                </div>

                {/* 3 Section Flex Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch rounded-xl bg-white justify-between w-full p-2">

                    {/* Column 1: Struggles */}
                    <div className="flex-1 flex flex-col bg-white p-8 rounded-2xl">
                        <h2 className="text-gray-500 font-extrabold text-sm tracking-tight mb-6 pb-3">
                            You struggle with
                        </h2>
                        <div className="flex flex-col gap-y-6 flex-grow justify-around">
                            {section2Data.map((data, index) => (
                                <div key={index} className="flex items-center gap-x-3 py-1">
                                    <span className="text-gray-400/90 text-base font-medium leading-tight">
                                        {data.struggle}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Other Tools */}
                    <div className="flex-1 flex flex-col bg-white p-8 rounded-2xl">
                        <h2 className="text-gray-500 font-extrabold text-sm tracking-tight mb-6 pb-3">
                            Other tools
                        </h2>
                        <div className="flex flex-col gap-y-6 flex-grow justify-around">
                            {section2Data.map((data, index) => (
                                <div key={index} className="flex items-center gap-x-3 py-1">
                                    <CircleX size={20} className="text-red-500 shrink-0" fill="red" stroke="white" />
                                    <span className="text-gray-400/90 text-base font-medium leading-tight">
                                        {data.tools}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: NetworkUp.io */}
                    <div className="flex-1 flex flex-col bg-[#f0fcf1]/80 p-8 rounded-2xl border-2 border-[#71EB34]/40 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                        <h2 className="text-[#71EB34] font-extrabold text-sm tracking-tight mb-6 pb-3 border-b border-lime-200">
                            NetworkUp.io
                        </h2>
                        <div className="flex flex-col gap-y-6 flex-grow justify-around">
                            {section2Data.map((data, index) => (
                                <div key={index} className="flex items-center gap-x-3 py-1">
                                    <CircleCheck size={20} className="text-[#356221] shrink-0" fill="#76e11b" stroke="white" />
                                    <span className="text-black/80 text-base font-extrabold leading-tight">
                                        {data.Networkup}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}