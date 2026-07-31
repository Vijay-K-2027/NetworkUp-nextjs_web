import { Clock, Heart, Users2, Zap } from "lucide-react"

const section4Data = [
    {
        icon: Zap,
        description: "Focused on solving one problem really well."
    },
    {
        icon: Clock,
        description: "Fast decision-making and execution."
    },
    {
        icon: Users2,
        description: "Direct access to the people building the product."
    },
    {
        icon: Heart,
        description: "We win when our users win."
    },
]

export default function Section5() {
    return (
        <section className="bg-[#fafcf7] py-16 px-6 lg:px-8">
            <div className="max-w-9xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex flex-1 flex-col gap-y-4">
                        <p className="text-[#71EB34] uppercase text-sm font-bold tracking-wider">Our Team Philosophy</p>
                        <h2 className="text-black text-3xl sm:text-4xl font-extrabold tracking-tight">Small team. Big mission.</h2>
                        <p className="text-black/60 text-lg sm:text-xl leading-relaxed max-w-xl">
                            We're a small team of builders, marketers, and problem-solvers who believe great products come from focus, discipline, and user obsession.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
                        {section4Data.map((data, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-md transition-all duration-300">
                                <div className="w-12 h-12 bg-[#EAFCEB] rounded-xl flex items-center justify-center mb-4">
                                    <data.icon className="w-6 h-6 text-[#71EB34]" />
                                </div>
                                <p className="text-black/90 text-sm font-bold leading-snug">{data.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}