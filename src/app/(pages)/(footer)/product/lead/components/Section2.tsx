"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1 = ["Technology Intent", "Hiring Activity", "Profile Views", "Product Interest"];
const row2 = ["Recent Funding", "Content Engagement", "Active Prospects", "Company"];

export default function Section2() {
    return (
        <section className="w-full bg-[#f7f9fb] max-w-9xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Preview Card */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-5xl h-auto rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border-2 border-[#c3c8bb] bg-white flex items-center justify-center shadow-sm"
            >
                <Image
                    src="/footer/product/feature/DiscoverPreview.png"
                    alt="Discover"
                    width={2000}
                    height={2000}
                    className="w-full h-auto object-contain"
                />
            </motion.div>

            {/* Tag Pills Container */}
            <div className="w-full max-w-7xl flex flex-col gap-6 sm:gap-10 items-center justify-center my-10 sm:my-16 overflow-hidden">
                {/* Row 1 */}
                <div className="flex flex-wrap justify-center sm:justify-between gap-3 sm:gap-4 w-full">
                    {row1.map((team, index) => (
                        <motion.span
                            key={team}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            whileHover={{ y: -3, scale: 1.04, transition: { duration: 0.2 } }}
                            className="text-base sm:text-lg md:text-xl text-black/80 px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-[#71ce22]/20 via-[#f5feee]/20 via-[#e4fdcf]/20 to-[#8ef636]/20 rounded-lg shadow-[2px_2px_2px_0.5px_rgba(222,250,208,1)] cursor-pointer select-none transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(222,250,208,0.4)]"
                        >
                            {team}
                        </motion.span>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap justify-center sm:justify-between gap-3 sm:gap-4 w-full">
                    {row2.map((team, index) => (
                        <motion.span
                            key={team}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                            whileHover={{ y: -3, scale: 1.04, transition: { duration: 0.2 } }}
                            className="text-base sm:text-lg md:text-xl text-black/80 px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-[#71ce22]/20 via-[#f5feee]/20 via-[#e4fdcf]/20 to-[#8ef636]/20 border border-[#defad0]/40 rounded-lg shadow-[2px_2px_2px_0.5px_rgba(222,250,208,1)] cursor-pointer select-none transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(222,250,208,0.4)]"
                        >
                            {team}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}