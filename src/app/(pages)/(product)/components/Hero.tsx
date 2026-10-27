import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="product" className="relative overflow-hidden bg-white">
            <div className="mx-auto bg-[radial-gradient(circle_at_top_right,_rgba(222,250,208,1)_0%,_rgba(222,250,208,0.1)_700px,_rgba(222,250,208,0.2)_100%)] flex flex-col items-center px-6 pt-25 pb-15 text-center">

                {/* Badge */}
                <div className="w-350 mb-8 rounded-full border border-[#71e300]/20 bg-[#71e300]/10 px-6 py-2 text-sm font-medium text-[#041c11]">
                    <span className="mr-2 text-[#71e300]">●</span>
                    #1 LinkedIn Outreach Automation & AI Growth Platform
                </div>

                {/* Heading */}
                <h1 className=" max-w-7xl text-4xl font-bold leading-tight tracking-tight text-[#1d1b20] lg:text-[65px]">
                    Build meaningful{" "}
                    <span className="text-[#78e02b]">
                        connections.
                    </span>{" "}
                    Drive measurable growth.
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-[1250px] text-[21px] text-[#263b00]">
                    Scale your LinkedIn outreach automation with AI precision.
                    Reach verified decision-makers, launch multi-channel drip sequences,
                    and convert conversations into pipeline at scale.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <Link
                        href="https://app.networkup.io/#/login"
                        title="Get Started Free with NetworkUp LinkedIn Outreach Automation"
                        aria-label="Get Started Free with NetworkUp LinkedIn Outreach Automation"
                    >
                        <div className="flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#caff95] to-[#71e300] px-8 py-4 text-sm font-semibold text-[#041c11] shadow-md transition hover:bg-lime-500">
                            Get Started Free
                            <ArrowRight size={18} strokeWidth={3} />
                        </div>
                    </Link>

                    <Link
                        href="https://app.networkup.io/#/login"
                        title="Watch NetworkUp Platform Demo"
                        aria-label="Watch NetworkUp Platform Demo"
                        className="flex items-center gap-2 rounded-xl border border-[#c9d2c4] bg-white px-8 py-4 text-sm font-bold text-[#1d1b20] transition hover:bg-gray-100"
                    >
                        <PlayCircle size={18} strokeWidth={3} />
                        Watch Demo
                    </Link>

                </div>

                {/* Trust Section */}
                <div className="mt-10 flex items-center gap-4">

                    <div className="flex -space-x-3">
                        <img
                            src="https://i.pravatar.cc/40?img=1"
                            className="h-9 w-9 rounded-full border-2 border-white"
                            alt="NetworkUp active customer profile 1"
                        />
                        <img
                            src="https://i.pravatar.cc/40?img=2"
                            className="h-9 w-9 rounded-full border-2 border-white"
                            alt="NetworkUp active customer profile 2"
                        />
                        <img
                            src="https://i.pravatar.cc/40?img=3"
                            className="h-9 w-9 rounded-full border-2 border-white"
                            alt="NetworkUp active customer profile 3"
                        />
                    </div>

                    <p className="text-sm text-[#1d1b20]">
                        Trusted by 25,000+ top revenue teams
                    </p>
                </div>
            </div>
        </section>
    );
}
