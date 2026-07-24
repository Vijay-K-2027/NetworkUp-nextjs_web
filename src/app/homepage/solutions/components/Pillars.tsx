import { ChartNoAxesCombined, CircleCheck, Compass, Sparkles } from "lucide-react"

const pillars = [
    {
        pillarIcon: Compass,
        name: "Lead Discovery",
        description: "Leverage AI-driven semantic search to identify high-intent professionals. Our engine maps relationships and industry influence in real-time.",
        points: [
            {
                icon: CircleCheck,
                point: "Intent-based filtering"
            },
            {
                icon: CircleCheck,
                point: "Semantic profile matching"
            }
        ]
    },

    {
        pillarIcon: Sparkles,
        name: "Automated Outreach",
        description: "Deploy personalized, high-context communication sequences. Maintain human-like interaction levels while scaling your network 10x.",
        points: [
            {
                icon: CircleCheck,
                point: "Context-aware sequencing"
            },
            {
                icon: CircleCheck,
                point: "Dynamic follow-ups"
            }
        ]
    },

    {
        pillarIcon: ChartNoAxesCombined,
        name: "Performance Analytics",
        description: "Real-time attribution and conversion tracking. Understand which strategies are driving growth with deep-dive technical logs.",
        points: [
            {
                icon: CircleCheck,
                point: "Conversion attribution"
            },
            {
                icon: CircleCheck,
                point: "Growth rate tracking"
            }
        ]
    }
]

export default function Pillars() {
    return (
        <section id="solution" className="w-full bg-[#fafcf7] py-10 px-6 lg:px-8">
            <div className="mx-auto">
                <div className="flex flex-col gap-y-2 items-center justify-between pb-5">
                    <h1 className="text-4xl font-bold">The Unified Networking Engine</h1>
                    <h4 className="mt-3 text-md font-normal text-center tracking-wide text-gray-800/70 w-[750px]">GrowthPulse AI orchestrates your entire professional growth cycle, from initial contact discovery to closed partnerships, powered by technical precision.</h4>
                </div>
                <div className="flex flex-row py-5 mx-10">
                    <span><h1 className="text-3xl font-bold">Core Platform Pillars</h1></span>
                    <span><hr className="mx-5 w-200 my-5 border-gray-400/50" /></span>
                    <span><h5 className="my-2 text-[15px] font-bold uppercase text-[#747A6E]/80 tracking-tight">Technological Foundation</h5></span>
                </div>
                <div className="grid grid-col-1 lg:grid-cols-3 max-w-6xl gap-15 w-full mx-35 my-5">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="flex flex-col bg-[radial-gradient(circle_at_top_left),_rgba(222,250,108,1)_0%,_rgba(222,250,108,0.4)_100px,_white_100%] rounded-xl h-[320px] w-[380px] border border-[#747A6E]/60 p-8" >
                            <div className="w-12 h-12 bg-lime-400 rounded-xl px-3.25 py-3.25">
                                {<pillar.pillarIcon size={22} stroke="black" />}
                            </div>
                            <div className="py-4">
                                <h2 className="text-xl font-bold py-1" >{pillar.name}</h2>
                                <h5 className="text-[14px] font-normal py-2 text-black/80 w-[320px]" >{pillar.description}</h5>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                {pillar.points.map((pointer, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <pointer.icon size={14} stroke="#07634dff" />
                                        <span className="text-[15px] text-black/80 tracking-wide ">{pointer.point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}