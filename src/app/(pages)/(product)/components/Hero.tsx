import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="product" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(222,250,208,1)_0%,_rgba(222,250,208,0.1)_700px,_rgba(222,250,208,0.2)_100%)]">
            <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-25 pb-15 text-center">

                {/* Badge */}
                <div className="w-350 mb-8 rounded-full border border-lime-200 bg-lime-100/30 px-6 py-2 text-sm font-medium text-black">
                    <span className="mr-2 text-lime-500">●</span>
                    AI-Powered LinkedIn Growth Platform
                </div>

                {/* Heading */}
                <h1 className=" max-w-8xl text-4xl font-bold leading-tight tracking-tight text-gray-900 lg:text-[65px]">
                    Build meaningful{" "}
                    <span className="text-lime-500">
                        connections.
                    </span>{" "}
                    Drive measurable growth.
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-9xl text-[21px] text-[#356221]">
                    Automate your LinkedIn networking with precision.
                    Reach the right decision-makers and convert
                    conversations into opportunities at scale.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <Link href="/subscription">
                        <div className="flex items-center gap-2 rounded-xl bg-lime-400 px-8 py-4 text-sm font-semibold text-black shadow-md transition hover:bg-lime-500">
                            Get Started Free
                            <ArrowRight size={18} strokeWidth={3} />
                        </div>
                    </Link>

                    <Link href="/sunscription"
                        className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-sm font-bold text-gray-700 transition hover:bg-gray-100"
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
                            alt=""
                        />
                        <img
                            src="https://i.pravatar.cc/40?img=2"
                            className="h-9 w-9 rounded-full border-2 border-white"
                            alt=""
                        />
                        <img
                            src="https://i.pravatar.cc/40?img=3"
                            className="h-9 w-9 rounded-full border-2 border-white"
                            alt=""
                        />
                    </div>

                    <p className="text-sm text-black/60">
                        Trusted by 25,000+ top revenue teams
                    </p>
                </div>
            </div>
        </section>
    );
}
