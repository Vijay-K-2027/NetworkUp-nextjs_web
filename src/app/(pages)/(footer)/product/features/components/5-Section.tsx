import { RadioTower, TrendingUp } from "lucide-react";

export default function Section5() {
    return (
        <section className="w-full max-w-4xl mx-auto my-20 px-6 sm:px-8" >
            <div className="flex flex-col items-start justify-center gap-y-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left">Implementing Predictive Scaling</h1>
                <p className="text-xs md:text-sm lg:text-md text-black/70 font-normal text-left">Reactive auto-scaling is often too slow for burst traffic. NetworkUp.ai now analyzes historical request patterns and utilizes time series forecasting models to anticipate load.</p>

                <div className="flex flex-col items-start justify-center gap-y-5 ">
                    <div className="flex items-center gap-x-3 flex-1">
                        <div className="flex items-center justify-center bg-[#71EB34] rounded-md w-8 h-8 shrink-0">
                            <TrendingUp size={20} className="text-black" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="text-black font-bold text-lg">Time-Series Forecasting</div>
                            <div className="text-black/60 text-sm">Identifies cyclical patterns (e.g., end-of-month batch processing) and pre-warms infrastructure before the spike hits.</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 flex-1">
                        <div className="flex items-center justify-center bg-[#71EB34] rounded-md w-8 h-8 shrink-0">
                            <RadioTower size={20} className="text-black" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="text-black font-bold text-lg">Anomaly Detection</div>
                            <div className="text-black/60 text-sm">Differentiates between legitimate traffic surges and potential DDoS vectors, adjusting routing strategies on the fly.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}