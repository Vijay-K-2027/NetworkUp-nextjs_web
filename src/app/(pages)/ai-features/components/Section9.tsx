"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Inbox, MessageSquareMore, RefreshCcw, UserPlus, UserRoundCheck } from "lucide-react";

const features = [
    "If Connected: Checks if the lead is already in your network.",
    "Send Connection Request: Automatically sends request if not connected.",
    "Send Message: Sends a personalized message after they accept.",
    "Reply Detection: If they reply, the conversation moves to Unified Inbox.",
    "Smart Stop: Automation stops if lead replies, is removed, marked as Wrong person, or sequence ends."
]

const flowChart = [
    {
        icon: UserRoundCheck,
        title: "If Connected",
        description: "Checks if the lead is already in your network."
    },
    {
        icon: UserPlus,
        title: "Send Request",
        description: "If not connected, automatically send a connection request."
    },
    {
        icon: MessageSquareMore,
        title: "Send Message",
        description: "Once they accept, automatically send message."
    },
    {
        icon: Inbox,
        title: "Unified Inbox",
        description: "If they reply, it lands in your unified inbox."
    },

]

export default function Section9() {
    return (
        <section className="bg-[#fafcf7] w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 w-full">

                <motion.div
                    className="flex flex-col lg:max-w-[45%] items-start gap-y-6 w-full"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#356221] font-bold tracking-widest bg-[#EAFCF7] p-1">
                        Inbound Automation
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-left text-gray-900 leading-tight tracking-tight">
                        Automate Replies & Close Conversations on Autopilot
                    </h2>

                    <p className="text-lg sm:text-xl text-left text-black/60 leading-relaxed max-w-2xl">
                        Turn every connection into a conversation automatically. Inbound automations engage your leads, respond instantly, and move warm leads to your inbox.
                    </p>

                    <div
                        className="flex flex-col items-start gap-y-1 mt-2"
                    >
                        {features.map((data, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center gap-x-3 py-1"
                            >
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <Check size={25} className="stroke-[#71EB34] stroke-[1]" />
                                </div>
                                <span className="text-sm text-gray-700 font-bold">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: How It Works Flowchart Block */}
                <motion.div 
                    className="flex flex-col items-center justify-center w-full lg:max-w-[45%] border border-gray-200/85 bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 gap-y-6 shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="text-xs uppercase font-extrabold text-[#356221] rounded-full bg-[#EAFCEB] px-4 py-1.5 w-fit">
                        How it Works
                    </span>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full py-2">
                        {flowChart.map((object, index) => {
                            const IconComponent = object.icon;
                            return (
                                <React.Fragment key={index}>
                                    <motion.div 
                                        className="flex flex-col items-center gap-y-2 text-center w-full sm:w-[22%]"
                                        initial={{ opacity: 0, scale: 0.92, y: 10 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.25 + index * 0.2 }}
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 shrink-0 shadow-sm">
                                            <IconComponent size={22} className="stroke-[#356221]" />
                                        </div>
                                        <h4 className="font-bold text-xs sm:text-sm text-black leading-tight">{object.title}</h4>
                                        <p className="text-[11px] sm:text-xs text-black/50 leading-snug px-0.5">{object.description}</p>
                                    </motion.div>
                                    {index !== flowChart.length - 1 && (
                                        <motion.div 
                                            className="text-gray-300 text-2xl font-bold rotate-90 sm:rotate-0 my-1 sm:my-0 shrink-0 select-none"
                                            initial={{ opacity: 0, scale: 0.6 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.25 + index * 0.2 + 0.1 }}
                                        >
                                            →
                                        </motion.div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>

                    <div className="w-full bg-gray-100 rounded-xl border border-gray-200 px-5 py-3.5 flex flex-row items-start gap-x-3.5">
                        <RefreshCcw size={20} className="stroke-[#356221] shrink-0 mt-0.5" />
                        <p className="text-left text-xs text-gray-600 font-medium leading-relaxed">
                            Runs automatically for every lead in your campaign sequence until they reply, you remove them, or sequence ends.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}