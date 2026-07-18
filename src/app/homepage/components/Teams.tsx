import React from "react";

const row1 = ["Sales Teams", "Recruiters", "Agencies", "Founders", "Consultants", "B2B Marketing Teams"];
const row2 = ["SaaS Companies", "Enterprise Teams", "Revenue Teams", "Fractional CMOs", "SDRs & BDRs"];

export default function Teams() {
    return (
        <>
            <br />
            <br />
            <hr className="border-black/10 border-1" />
            <div className="bg-[#ffffff] flex flex-col gap-10 items-center justify-center mx-7 my-15 overflow-hidden">
                <div
                    className="bg-[#ffffff] text-md text-black/80 uppercase tracking-wider font-semibold"
                >
                    Built for modern growth teams
                </div>

                <div
                    className="bg-[#ffffff] flex flex-wrap gap-6 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-25 justify-center w-full"
                >
                    {row1.map((team) => (
                        <span
                            key={team}
                            className="text-lg text-black/80 px-5 py-2 bg-gradient-to-r from-[#defad0]/70 via-white to-[#defad0]/70 border border-[#defad0]/40 rounded-lg shadow-[2px_2px_2px_0.5px_rgba(222,250,208,1)] cursor-pointer select-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_10px_20px_-5px_rgba(222,250,208,0.4)]"
                        >
                            {team}
                        </span>
                    ))}
                </div>

                <div
                    className="bg-[#ffffff] flex flex-wrap gap-6 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-25 justify-center w-full"
                >
                    {row2.map((team) => (
                        <span
                            key={team}
                            className="text-lg text-black/80 px-5 py-2 bg-gradient-to-r from-[#defad0]/70 via-white to-[#defad0]/70 border border-[#defad0]/40 rounded-lg shadow-[2px_2px_2px_0.5px_rgba(222,250,208,1)] cursor-pointer select-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_10px_20px_-5px_rgba(222,250,208,0.4)]"
                        >
                            {team}
                        </span>
                    ))}
                </div>
            </div>
            <hr className="border-black/10 border-1" />
        </>
    );
}