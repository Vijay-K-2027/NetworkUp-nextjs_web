"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, Filter, Tag, Search } from "lucide-react";

const dataMap = [
    {
        title: "Total Leads",
        no: "12,842"
    },
    {
        title: "New This Week",
        no: "1,253"
    },
    {
        title: "In Campaigns",
        no: "3,456"
    },
    {
        title: "Replied",
        no: "1,987"
    }
];

const leads = [
    {
        name: "Lucas Martin",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&fit=crop&q=80",
        title: "CTO",
        company: "Innotech",
        stage: "In Campaign",
        tags: "SaaS",
        added: "May 24, 2025"
    },
    {
        name: "Emma Davis",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&fit=crop&q=80",
        title: "Head of Marketing",
        company: "BrightData",
        stage: "Replied",
        tags: "Hot",
        added: "May 24, 2025"
    },
    {
        name: "Ava Thompson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&fit=crop&q=80",
        title: "Growth Manager",
        company: "ClickFlow",
        stage: "Not Contacted",
        tags: "Cold",
        added: "May 23, 2025"
    }
];

const features = [
    "Centralized Database: All your leads in one secure place.",
    "Smart Segmentation: Filter and segment leads with advanced options.",
    "Tags & Notes: Add custom tags, notes and important details.",
    "Pipeline Stages: Track leads across different stages.",
    "Bulk Actions: Edit, export, move or delete leads in bulk."
];

export default function Section9() {
    return (
        <section className="bg-[#fafcf7] w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 w-full">

                {/* Column 1: Left Title & Description */}
                <motion.div
                    className="flex flex-col lg:max-w-[50%] items-start gap-y-6 w-full text-left"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="uppercase text-xs text-[#71EB34] font-bold bg-[#EAFCEB] p-1.5 rounded w-fit">
                        Lead Database
                    </span>

                    {/* Title */}
                    <div className="flex flex-col text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                        <h2>
                            Organize, Manage & Segment All
                        </h2>
                        <h2>
                            Your Leads in One Place
                        </h2>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-md sm:text-lg text-black/60 leading-relaxed">
                            Store, organize and manage all your leads with powerful filters, tags, notes.
                        </p>
                        <p className="text-md sm:text-lg text-black/60 leading-relaxed">
                            and stages. Keep your pipeline clean, updated and actionable.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col items-start gap-y-1 mt-2">
                        {features.map((data, index) => (
                            <div key={index} className="flex flex-row items-center gap-x-3 py-1">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <Check size={25} className="stroke-[#71EB34] stroke-[1]" />
                                </div>
                                <span className="text-md text-gray-600 font-bold text-left">{data}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Column 2: CRM Lead List Dashboard Mockup */}
                <motion.div
                    className="flex flex-col items-start justify-start w-full lg:max-w-[50%] border border-gray-200 bg-[#f8fafc]/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 gap-y-6 shadow-sm shrink-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-xl font-extrabold text-slate-800 text-left">
                        Lead Database
                    </span>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                        {dataMap.map((data, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-gray-100/50 rounded-2xl p-4.5 shadow-sm hover:-translate-y-0.5 transition-all duration-300 hover:shadow-md w-full"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                            >
                                <span className="text-slate-400 font-bold text-[10px] mb-1 tracking-wide text-left">{data.title}</span>
                                <h3 className="font-black text-slate-800 text-lg sm:text-xl leading-none text-center">{data.no}</h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 w-full mt-2">
                        <div className="flex flex-wrap items-center gap-2.5">
                            {/* All Leads Dropdown */}
                            <div className="px-3.5 py-2 bg-white border border-gray-200 rounded-xl text-slate-700 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm hover:bg-slate-100 transition-colors select-none">
                                <span>All Leads</span>
                                <ChevronDown size={14} className="text-slate-400" />
                            </div>

                            {/* Filter */}
                            <div className="px-3.5 py-2 bg-white border border-gray-200 rounded-xl text-slate-700 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm hover:bg-slate-100 transition-colors select-none">
                                <Filter size={14} className="text-black" />
                                <span>Filter</span>
                            </div>

                            {/* Tag */}
                            <div className="px-3.5 py-2 bg-white border border-gray-200 rounded-xl text-slate-700 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm hover:bg-slate-100 transition-colors select-none">
                                <Tag size={14} className="text-black" />
                                <span>Tag</span>
                            </div>

                            {/* Options button */}
                            <div className="w-9 h-9 bg-white border border-gray-200 rounded-xl text-slate-500 font-bold flex items-center justify-center shadow-sm hover:bg-slate-100 transition-colors select-none text-sm">
                                ...
                            </div>
                        </div>

                        {/* Search input */}
                        <div className="relative w-full sm:max-w-[220px]">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search leads..."
                                className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:border-[#71EB34] transition-colors"
                            />
                        </div>
                    </div>

                    {/* CRM Table */}
                    <motion.div
                        className="w-full overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-sm"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <table className="min-w-[650px] w-full border-collapse">
                            {/* Table Header */}
                            <thead className="bg-slate-50/80 border-b border-gray-250/70">
                                <tr>
                                    <th className="px-5 py-3 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase select-none hover:text-slate-600 transition-colors">
                                        <span className="flex items-center gap-1">
                                            Name
                                            <ChevronDown size={12} className="text-slate-400" />
                                        </span>
                                    </th>
                                    <th className="px-5 py-3 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                                        Title
                                    </th>
                                    <th className="px-5 py-3 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                                        Company
                                    </th>
                                    <th className="px-5 py-3 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase select-none hover:text-slate-600 transition-colors">
                                        <span className="flex items-center gap-1">
                                            Stage
                                            <ChevronDown size={12} className="text-slate-400" />
                                        </span>
                                    </th>
                                    <th className="px-5 py-3 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                                        Tags
                                    </th>
                                    <th className="px-5 py-3 text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase cursor-pointer select-none hover:text-slate-600 transition-colors">
                                        <span className="flex items-center gap-1">
                                            Added On
                                            <ChevronDown size={12} className="text-slate-400" />
                                        </span>
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-gray-100">
                                {leads.map((lead, index) => {
                                    // Custom colors for stages
                                    const isNotContacted = lead.stage === "Not Contacted";
                                    const stageBadgeClass = isNotContacted
                                        ? "bg-slate-100 text-slate-600 border-slate-200/50"
                                        : "bg-[#eefce6] text-[#356221] border-[#defad0]";

                                    // Custom colors for tags
                                    let tagBadgeClass = "";
                                    if (lead.tags === "SaaS") {
                                        tagBadgeClass = "bg-[#eaf4fe] text-[#2b6cb0] border-[#d2e4f6]";
                                    } else if (lead.tags === "Hot") {
                                        tagBadgeClass = "bg-[#fff8e6] text-[#b7791f] border-[#fef0d5]";
                                    } else if (lead.tags === "Cold") {
                                        tagBadgeClass = "bg-[#fff5f5] text-[#c53030] border-[#fed7d7]";
                                    }

                                    return (
                                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                            {/* Name & Avatar */}
                                            <td className="px-5 py-4 whitespace-nowrap text-left">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-slate-150 shadow-sm">
                                                        <img
                                                            src={lead.avatar}
                                                            alt={lead.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="font-extrabold text-xs sm:text-sm text-slate-800 leading-tight block">
                                                        {lead.name}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Title */}
                                            <td className="px-5 py-4 text-left">
                                                <span className="text-xs sm:text-[13px] font-semibold text-slate-500 leading-relaxed block max-w-[130px] whitespace-normal">
                                                    {lead.title}
                                                </span>
                                            </td>

                                            {/* Company */}
                                            <td className="px-5 py-4 text-left">
                                                <span className="text-xs sm:text-[13px] font-semibold text-slate-600 leading-relaxed block">
                                                    {lead.company}
                                                </span>
                                            </td>

                                            {/* Stage Badge */}
                                            <td className="px-5 py-4 whitespace-nowrap text-left">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs border ${stageBadgeClass}`}>
                                                    {lead.stage}
                                                </span>
                                            </td>

                                            {/* Tags Badge */}
                                            <td className="px-5 py-4 whitespace-nowrap text-left">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] border ${tagBadgeClass}`}>
                                                    {lead.tags}
                                                </span>
                                            </td>

                                            {/* Added On */}
                                            <td className="px-5 py-4 whitespace-nowrap text-left">
                                                <span className="text-xs text-slate-400">
                                                    {lead.added}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}