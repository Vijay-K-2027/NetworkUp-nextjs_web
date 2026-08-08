import { ChartNoAxesColumn, Clock, Globe, Heart, Rocket, Users2, Zap } from "lucide-react"

const section4Data = [
    {
        icon: Users2,
        quantity: "10K+",
        description: "Happy Users"
    },
    {
        icon: Globe,
        quantity: "120+",
        description: "Countries"
    },
    {
        icon: Rocket,
        quantity: "1M+",
        description: "Connections Initiated"
    },
    {
        icon: ChartNoAxesColumn,
        quantity: "99.9%",
        description: "Uptime"
    },
]

export default function Section4() {
    return (
        <section className="bg-[#fafcf7] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-9xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
                    <div className="flex flex-1 flex-col gap-y-2 text-left mx-2 sm:mx-10 w-full">
                        <p className="text-[#356221]/80 uppercase text-xs sm:text-sm font-bold tracking-wider">Our Mission ——</p>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-x-6 w-full">
                            {/* Left Side: Staggered Headings */}
                            <div className="flex flex-col items-start gap-1 w-full lg:w-[700px]">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">Empower more people to</h1>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">build</h2>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl text-[#356221] font-bold w-full">meaningful connections</h3>
                                <h4 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">and</h4>
                                <h5 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">unlock new</h5>
                                <h6 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold w-full">oppurtunities.</h6>
                            </div>

                            {/* Right Side: Description */}
                            <div className="w-full lg:w-[550px] text-left gap-2 h-auto pt-4 lg:pt-40 pb-1.5 shrink-0">
                                <h1 className="text-xl sm:text-2xl text-[#356221]/80 text-left leading-relaxed">
                                    LinkedIn is full of opportunities. Our mission is to help you reach the right people, start the right conversations, and grow your business — the smart way.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1 w-full mt-12">
                    {section4Data.map((data, index) => (
                        <div key={index} className="flex flex-row items-center gap-x-4 p-4 sm:p-6 rounded-2xl transition-all duration-300 bg-transparent">
                            <div className="w-12 h-12 sm:w-15 sm:h-15 bg-[#f5f5dc] rounded-full flex items-center justify-center shrink-0">
                                <data.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#356221]" />
                            </div>
                            <div className="flex flex-col gap-0.5 items-start">
                                <h1 className="text-[#356221]/90 text-2xl sm:text-3xl font-bold leading-snug">{data.quantity}</h1>
                                <p className="text-black/90 text-xs sm:text-sm leading-snug">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}