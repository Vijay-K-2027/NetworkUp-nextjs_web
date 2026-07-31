import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

export default function OverviewPage() {
    return (
        <>
            <div className="w-full max-w-9xl bg-[#fafcf7] mx-auto">
                <div className="flex flex-col items-center justify-center py-10 mt-5 gap-y-2 ">
                    <h4 className="uppercase text-lime-400 text-xl text-center font-bold">Our Story</h4>
                    <h2 className="text-xl sm:text-2xl w-[200px] sm:w-[400px] text-center font-extrabold tracking-tighter -mt-2">How it all started </h2>
                    <h3 className="w-[500px] sm:w-[700px] text-center text-sm sm:text-md text-gray-400/90">A journey driven by a simple belief —— outreach should be human, not manual.</h3>
                </div>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </>
    )
}