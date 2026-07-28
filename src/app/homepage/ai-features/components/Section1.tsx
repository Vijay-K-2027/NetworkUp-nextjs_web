import { BrainCircuit, Dot, Radar, Sparkles, SquareKanban, WandSparkles } from "lucide-react";
import { FaBrain } from "react-icons/fa";

export default function Section1() {
    return (
        <section className="bg-[#fafcf7]">
            <div className="max-w-9xl w-full mx-auto py-10">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center gap-x-2 rounded-full bg-[#356221]/20 px-5 py-1">
                        <Sparkles size={12} fill="#356221" stroke="#356221" />
                        <h3 className="uppercase text-[14px] text-[#356221] font-bold tracking-wider">NEXT-GEN INTELLIGENCE</h3>
                    </div>
                    <div className="my-5">
                        <h1 className="text-5xl text-black/80 font-bold w-[700px] mx-auto text-center mb-5">
                            Supercharge your outreach with <span className="text-[#356221]">Autonomous Growth</span>
                        </h1>
                        <h4 className="text-smd text-gray-800/80 w-[500px] mx-auto text-center ">
                            GrowthPulse AI transforms raw network data into actionable revenue oppurtunities through deep-learning prospecting and automated personalization.
                        </h4>
                    </div>
                </div>
                <div className="w-full max-w-9xl mx-auto flex flex-row items-center gap-5 justify-center my-10 mt-20 ">
                    <div className="w-[55%] bg-white p-10 rounded-xl border-2 border-[#416630ff]/40 hover:-translate-y-3 transition-transform duration-300">
                        <div className="bg-lime-400 rounded-xl w-15 h-15 flex items-center justify-center hover:scale-105">
                            <BrainCircuit size={25} fill="#356221" />
                        </div>
                        <div className="flex flex-col gap-y-4 items-start my-5 ">
                            <h2 className="text-3xl text-left font-bold text-black">AI Growth Coach</h2>
                            <h5 className="text-md text-left w-[400px] text-[#356221] leading-relaxed">Get real-time feedback on your campaign performance. Our coach analyzes response rates and sentiment to suggest tactical pivots in your messaging strategy.</h5>
                            <div className="flex flex-row items-start gap-x-3 mt-5">
                                <div className="uppercase text-black/80 px-3 py-1 rounded-md border border-gray-200/70 bg-gray-200/70 text-sm font-semibold hover:-translate-y-1 transition-transform duration-200">Sentiment Analysis</div>
                                <div className="uppercase text-black/80 px-3 py-1 rounded-md border border-gray-200/70 bg-gray-200/70 text-sm font-semibold hover:-translate-y-1 transition-transform duration-200">Campaign Drift</div>
                            </div>
                        </div>
                        <div className="bg-gray-200/50 border-2 border-[#416630ff]/40 rounded-lg p-5 mt-10">
                            <div className="flex flex-row gap-2 items-start my-1">
                                <Dot size={50} fill='#356221' className="-mx-4 -my-3.5" />
                                <h2 className="uppercase px-1 text-md font-mono text-[#356221] tracking-tight">Coach_Insight_Live</h2>
                            </div>
                            <h2 className="font-mono text-gray-400 text-md w-[700px] text-left tracking-tighter">"Your recent sequence to 'SaaS Founders' is seeing high open rates but low CTR. Recommend adding a specific social proof point in Step 2"</h2>
                        </div>
                    </div>
                    <div className="w-[35%] rounded-xl bg-white border-2 border-[#416630ff]/40 p-10 hover:translate-x-3 transition-transform duration-300">
                        <div className="bg-[#356221]/30 rounded-xl w-14 h-14 flex items-center justify-center hover:scale-105">
                            <SquareKanban size={30} stroke="white" className="rotate-180 fill-[#356221]" />
                        </div>
                        <div className="flex flex-col gap-y-4 items-start my-5 ">
                            <h2 className="text-3xl text-left font-bold text-black">Automated Lead Scoring</h2>
                            <h5 className="text-md text-left w-[400px] text-[#356221] leading-relaxed">Priortize your day with precision. Our AI ranks leads based on 50+ signals including company growth, tech stack changes, and job postings.</h5>
                        </div>
                        <div className="flex flex-col items-start gap-y-2 mt-42">
                            <hr className="w-full border border-gray-400/40 mb-4" />
                            <div className="flex flex-row items-center justify-between w-full">
                                <h2 className="font-bold text-black">Lead: Acme Corp</h2>
                                <h3 className="font-bold text-[#356221]">98/100</h3>
                            </div>
                            <div className="rounded-full w-full h-2 bg-gray-400/70">
                                <div className="rounded-l-full w-[98%] h-full bg-[#356221]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-9xl mx-auto flex flex-row items-center gap-5 justify-center">
                    <div className="w-[45%] rounded-xl bg-white border-2 border-[#416630ff]/40 p-10 hover:-translate-x-3 transition-transform duration-300">
                        <div className="bg-pink-400/40 rounded-xl w-14 h-14 flex items-center justify-center hover:scale-105">
                            <WandSparkles size={30} stroke="black" />
                        </div>
                        <div className="flex flex-col gap-y-4 items-start my-5 ">
                            <h2 className="text-3xl font-bold text-left text-blaxk">Smart Message Personalization</h2>
                            <h5 className="text-lg text-[#356221] w-[525px] tracking-tight text-left ">Write 1:1 emails at scale. We ingest LinkedIn profiles and latest news to craft opening lines that feel human, because they are based on human data.</h5>
                        </div>
                        <div className="w-full bg-pink-400/40 h-40"></div>
                    </div>
                    <div className="w-[45%] rounded-xl bg-[#356221] border-2 border-[#416630ff]/40 p-10 hover:translate-y-3 transition-transform duration-300">
                        <div className="bg-lime-400 rounded-xl w-14 h-14 flex items-center justify-center hover:scale-105">
                            <Radar stroke="#356221" size={30} />
                        </div>
                        <div className="flex flex-col gap-y-4 items-start my-5 ">
                            <h2 className="text-3xl font-bold text-left text-white">Intent-Based Prospecting</h2>
                            <h5 className="text-lg text-white w-[400px] text-left ">Stop guessing. Reach out when they are actually looking. We monitor dark funnel intent to find prospects actively researching your category.</h5>
                        </div>
                        <h6 className="w-full text-white font-bold text-xl my-10 mb-28">Explore intent signals →</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}