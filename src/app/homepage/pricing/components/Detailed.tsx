import { Check, X } from "lucide-react"

const details = [
    {
        coreEngine: "AI Personalization Engine",
        starter: "V1 (Basic)",
        growth: "V2 (Pro)"
    },
    {
        coreEngine: "API Endpoint Access",
        starter: "No",
        growth: "Yes"
    },
    {
        coreEngine: "CRM Integrations",
        starter: "Zapier Only",
        growth: "Direct (Hubspot, SFDC)"
    },
    {
        coreEngine: "White-label Reports",
        starter: "No",
        growth: "Yes"
    }
]

export default function Detailed() {
    return (
        <section className="bg-gray-500/10 p-20 ">
            <div className="container max-w-5xl mx-auto w-full">
                <div className="flex flex-col items-center justify-center gap-3 mb-15">
                    <h2 className="text-3xl font-bold text-black text-center ">Detailed Breakdown</h2>
                    <h5 className="text-lg text-black text-center ">Compare core features across out top plans.</h5>
                </div>

                <div className="w-full max-w-4xl mx-auto">
                    {/* Table Header */}
                    <div className="grid grid-cols-6 sm:grid-cols-3 rounded-t-lg bg-gray-500/5 px-7 py-7 border border-gray-400/60">
                        <span className="text-xl col-span-2 sm:col-span-1 font-bold text-black text-left pr-10">Core Engine</span>
                        <span className="text-xl col-span-2 sm:col-span-1 font-bold text-black text-center">Starter</span>
                        <span className="text-xl col-span-2 sm:col-span-1 font-bold text-black text-center">Growth</span>
                    </div>

                    {/* Table Body */}
                    {details.map((detail, index) => (
                        <div 
                            key={index} 
                            className={`grid grid-cols-6 sm:grid-cols-3 px-7 py-7 border-b border-x border-gray-400/40 bg-white transition-all duration-200 hover:bg-[#defad0]/10 hover:translate-x-1 border-l-4 border-l-transparent hover:border-l-[#356221] hover:shadow-sm ${index === details.length - 1 ? "rounded-b-lg" : ""}`}
                        >
                            <span className="text-lg col-span-2 sm:col-span-1 text-black/70 text-left pr-10">{detail.coreEngine}</span>
                            <span className={`text-lg col-span-2 sm:col-span-1 text-black/70 text-center flex items-center justify-center transition-transform duration-300 hover:scale-110 ${detail.starter === "No" ? "px-8 py-1" : ""}`}>
                                {detail.starter === "No" ? <X size={20} className="text-red-500 font-bold" /> : detail.starter}
                            </span>
                            <span className={`text-lg col-span-2 sm:col-span-1 text-black/70 text-center flex items-center justify-center transition-transform duration-300 hover:scale-110 ${detail.growth === "Yes" ? "px-8 py-1" : ""}`}>
                                {detail.growth === "Yes" ? <Check size={20} className="text-green-600 font-bold" /> : detail.growth}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}