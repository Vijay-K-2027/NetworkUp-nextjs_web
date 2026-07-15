
import React from "react";
import { motion } from "framer-motion";

export default function CalloutBar() {
    return (
        <section className="w-full bg-[#fafcf7] py-8 px-6 lg:px-8 border-b border-zinc-200/30">
            <div className="mx-auto max-w-7xl rounded-[2rem] shadow-[1px_2px_4px_2px_rgba(0,0,0,0.5)]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#181818] border-white/[0.06] rounded-[2rem] p-6 sm:p-8 px-8 sm:px-10 shadow-[0_15px_35px_-8px_rgba(0,0,0,0.3)] text-white"
                >
                    {/* Left: Avators + Online Status Text */}


                    {/* Right: Button */}
                    <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                        <a href="#" className="flex-1 md:flex-none text-center bg-[#76e11b] hover:bg-[#68c617] text-[#031d10] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-[0_4px_10px_rgba(118,225,27,0.2)] hover:scale-[1.05] transition-all">
                            Book Demo
                        </a>
                        <a href="#" className="flex-1 md:flex-none text-center border border-white/10 hover:border-white/20 hover:bg-white/5 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors text-zinc-200 hover:scale-[1.03]">
                            Contact Sales
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}