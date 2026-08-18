import { Clock } from "lucide-react";

export default function Section() {
    return (
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(222,250,208,1)_0%,_rgba(222,250,208,0.1)_600px,_rgba(222,250,208,0.2)_100%)]">
            <div className="w-full max-w-4xl mx-auto pt-30 pb-15">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left ">Orchestrating the Future:<br />Deep Dive into Advanced AI<br />Workflows</h1>
                <div className="w-full bg-[#71EB34]/30 h-[10px] rounded-full"></div>
            </div>
            <hr className="border border-gray-100 w-full max-w-4xl mx-auto" />
            <div className="w-full max-w-4xl mx-auto flex flex-row items-center justify-between my-5">
                <div className="flex flex-row items-center justify-center gap-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&fit=crop&q=80"
                            alt="Sarah Johnson"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-start ">
                        <h1 className="text-2xl text-black font-bold text-left">Sarah Jenkins</h1>
                        <h2 className="text-md text-black/60 text-left">Lead ML Engineer, NetworkUp.ai</h2>
                    </div>
                </div>
                <h1 className="p-1 bg-white flex flex-row items-center justify-center gap-x-2"><Clock size={20} /><span className="font-bold text-black/60">8 min read</span></h1>
            </div>
            <hr className="border border-gray-100 w-full max-w-4xl mx-auto" />
        </section>
    )
}