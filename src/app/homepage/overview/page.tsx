import Section1 from "./components/Section1";

export default function OverviewPage() {
    return (
        <>
            <div className="w-full max-w-9xl bg-[#fafcf7] mx-auto">
                <div className="flex flex-col items-center justify-center py-10 mt-5 gap-y-4 ">
                    <h4 className="uppercase text-[#356221]/90 tracking-wide text-md text-center font-bold">Tailored Networking</h4>
                    <h2 className="text-3xl sm:text-5xl w-[400px] sm:w-[600px] text-center font-bold">Built for those who <span className="text-[#356221]">move the needle.</span></h2>
                    <h3 className="w-[500px] sm:w-[750px] text-center text-sm sm:text-lg text-gray-400/90">GrowthPulse AI adapts to your professional DNA, Whether you're hunting for leads, talent, or market share, we orchestrate the connections that matter.</h3>
                </div>
            </div>
            <Section1 />
        </>
    )
}