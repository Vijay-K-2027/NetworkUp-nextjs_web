"use client";

import { AlertTriangle, ArrowUpRight, Bell, Bot, Compass, HelpCircle, HelpCircleIcon, Inbox, LayoutDashboard, Megaphone, Search, Settings, ShieldCheck, Sparkles, UserCheck, Mail, UserPlus, Zap, ChevronLeft, ChevronRight, Plus, Upload, Briefcase, Landmark, ShoppingCart, GraduationCap, UserCircle2, LogOut, Rocket, PlugZap, Database, Microchip, UsersIcon, NetworkIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"
import { FaTools } from "react-icons/fa";
import { GrTemplate } from "react-icons/gr";
import { TbTemplate } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

const icons = {
  LayoutDashboard,
  Inbox,
  Megaphone,
  Compass,
  UserCheck,
  Settings,
  Search,
  Bell,
  Bot,
  HelpCircleIcon,
  ArrowUpRight,
  ShieldCheck,
  AlertTriangle,
  Sparkles
}

export default function DashboardPreview() {
  return (
    <div className="w-full mt-9 max-w-full py-20 h-auto bg-gradient-to-r from-[#006100] to-[#002800]">
      {/* Browser Frame Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-7 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-4 bg-slate-900/5 rounded-2xl p-2 sm:p-3 backdrop-blur-xl border border-gray-200/50 shadow-2xl ring-1 ring-gray-900/10 m-5 w-full max-w-5xl lg:max-w-[1020px]"
        >

          {/* Browser Header Bar */}
          <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-gray-200/60">
            {/* Windows/Mac Dots */}
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block"></span>
            </div>
            {/* Browser Address Tab Mock */}
            <div className="hidden sm:block text-[10px] text-gray-400 bg-white/85 border border-gray-200/80 px-10 py-1 rounded-lg select-none shadow-sm font-mono">
              app.networkup.io/dashboard
            </div>
            <div className="w-12"></div>
          </div>

          {/* Dashboard Shell */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-inner mt-2 sm:mt-3 min-h-[580px] border border-gray-100">

            {/* Sidebar */}
            <aside className="w-full md:w-50 bg-[#0c240f] text-white flex flex-col justify-between p-3.5">
              <div>
                {/* Logo Section */}
                <div className="flex items-center gap-1 mb-5 px-1">
                  <div className="bg-transparent p-1 rounded-lg text-black font-extrabold flex items-center justify-center">
                    <Image
                      src="/Logo.svg"
                      alt="Logo"
                      width={15}
                      height={15}
                    />
                  </div>
                  <span className="text-base font-bold font-[family-name:var(--font-comfortaa)] tracking-tight text-[#6CB531] flex items-center">
                    NetworkUp<span className="text-lime-400 font-normal tracking-[0.5px]">.io</span>
                  </span>
                </div>

                {/* Sidebar Links */}
                <nav className="space-y-1.5">
                  <div className="uppercase text-[10px] text-gray-300/50 pl-2.5 py-2" >Home</div>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-semibold transition-all bg-white/10 text-white shadow-[10px] ring-1 ring-white/10">
                    <LayoutDashboard size={12} className="text-lime-400" />
                    Dashboard
                  </button>
                  <button className="w-full flex items-start justify-between gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <div className="flex items-center gap-2">
                      <Inbox size={15} className="text-gray-400" />
                      <span>Inbox</span>
                    </div>
                    <span className="bg-lime-400/30 text-lime-300 text-[9px] px-2 py-1 -mt-0.5 rounded-full">24</span>
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 pt-1 pb-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <BiUser size={15} className="text-gray-400" />
                    Leads
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <Compass size={15} className="text-gray-400" />
                    Discover
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <NetworkIcon size={15} className="text-gray-400" />
                    Network
                  </button>

                  <br />
                  <div className="uppercase text-[10px] text-gray-300/50 pl-2.5" >Automation</div>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <Rocket size={15} className="text-gray-400" />
                    Campaigns
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <FaTools size={15} className="text-gray-400" />
                    Campaign Builder
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <TbTemplate size={15} className="text-gray-400" />
                    Templates
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <GrTemplate size={15} className="text-gray-400" />
                    Automation Logs
                  </button>

                  <br />
                  <div className="w-full flex gap-2.5 px-2.5 rounded-lg text-[10px] font-medium transition-all text-gray-300/50">
                    <Sparkles size={15} className="text-gray-400" />
                    <span>AI COPILOT</span>
                  </div>
                  <button className="w-full flex items-start justify-between gap-0.5 px-2.5 py-2 rounded-lg text-[12px] font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <div className="flex items-center gap-2">
                      <Bot size={15} className="text-gray-400" />
                      <span className="-ml-1 text-sm" >AI Workspace</span>
                    </div>
                    <span className="bg-lime-400 text-black font-bold text-[10px] px-1.5 py-0.5 rounded-full">New</span>
                  </button>

                  <br />
                  <div className="uppercase text-[10px] text-gray-300/50 pl-2.5" >Administration</div>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <UsersIcon size={15} className="text-gray-400" />
                    Community
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <Microchip size={15} className="text-gray-400" />
                    Integration
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <Database size={15} className="text-gray-400" />
                    Billing
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <PlugZap size={15} className="text-gray-400" />
                    API & Webhooks
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                    <Settings size={15} className="text-gray-400" />
                    Settings
                  </button>
                </nav>
              </div>

              {/* Sidebar Bottom */}
              <div className="pt-3 border-t border-white/10 mt-4 md:mt-0">
                <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all">
                  <UserCircle2 size={20} className="text-white" />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">Marcus Reyes</span>
                    <span className="text-gray-400/90">Pro Plan</span>
                  </div>
                </button>
                <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all">
                  <LogOut size={20} className="text-white" />
                  <span className="text-white ">Logout</span>
                </button>
              </div>
            </aside>

            {/* Main Workspace Area */}
            <main className="flex-1 bg-[#fafbfa] p-3 sm:p-5 flex flex-col justify-between overflow-x-hidden">

              {/* Top Navigation */}
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-3.5 border-b border-gray-200/50">

                <h2 className="font-extrabold text-lg">Dashboard</h2>

                {/* Search Bar */}
                <div className="relative flex-1 max-w-xs">
                  <Search size={15} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search leads, campaigns..."
                    className="w-full bg-white border border-gray-200 pl-8 pr-3 py-1.5 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm transition"
                    readOnly
                  />
                </div>

                {/* Utility Actions */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button className="relative p-1.5 text-gray-600 hover:text-black bg-white rounded-lg border border-gray-200 shadow-sm transition">
                    <Bell size={16} />
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-lime-500 rounded-full"></span>
                  </button>
                  <button className="p-1.5 text-gray-600 hover:text-black bg-white rounded-lg border border-gray-200 shadow-sm transition">
                    <Bot size={16} />
                  </button>
                  <button className="p-1.5 text-gray-600 hover:text-black bg-white rounded-lg border border-gray-200 shadow-sm transition">
                    <HelpCircle size={16} />
                  </button>
                </div>
              </header>

              {/* Main Dash Content */}
              <div className="space-y-4 pt-4">

                {/* Greeting */}
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-gray-950 flex flex-wrap items-center gap-1.5">
                    Welcome back, <span className="text-[#0c240f]">Marcus Reyes</span>!👋
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Your LinkedIn network grew by <span className="font-semibold text-lime-400">12%</span> this week. You have <span className="font-semibold text-lime-400">3 pending</span> campaign approvals.
                  </p>
                </div>

                {/* Stats Grid */}
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.06 } }
                  }}
                  className="grid grid-cols-2 lg:grid-cols-5 gap-2"
                >
                  {[
                    { title: "New Connections", val: "1,248", pct: "+18%" },
                    { title: "Messages Sent", val: "5,432", pct: "+12%" },
                    { title: "Reply Rate", val: "67%", pct: "+9%" },
                    { title: "Active Campaigns", val: "12", pct: "+3" },
                    { title: "Qualified Leads", val: "842", pct: "+22%" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="bg-white border border-gray-200/80 p-2.5 sm:p-3 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
                    >
                      <p className="text-[10px] font-bold text-gray-400 tracking-tight uppercase">{stat.title}</p>
                      <div className="flex items-baseline justify-between mt-1.5 gap-0.5">
                        <span className="text-sm sm:text-base font-black text-gray-900">{stat.val}</span>
                        <span className="text-[9px] font-extrabold text-emerald-500 px-1.5 py-0.5 rounded-full">
                          {stat.pct}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.section>

                {/* Row 1: Chart and Recent Activity */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-4"
                >
                  {/* Weekly Performance Overview Chart Card */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className="lg:col-span-3 bg-white border border-gray-200/80 p-4 rounded-2xl shadow-sm flex flex-col justify-between relative"
                  >
                    <div className="pb-1 border-b border-gray-100 flex justify-between items-center">
                      <h3 className="font-extrabold text-xs text-gray-900">Weekly Performance Overview</h3>
                    </div>

                    {/* Tooltip Overlay */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
                      className="absolute top-8 left-[45%] -translate-x-1/2 bg-white/95 border border-zinc-100 rounded-xl shadow-md p-2.5 z-10 text-[9px] font-semibold text-zinc-700 space-y-1 w-40 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>Connections Sent</span>
                        <span className="text-gray-500">— 96</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#15803d]"></span>Connections Accepted</span>
                        <span className="text-gray-500">— 55</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]"></span>Messages Sent</span>
                        <span className="text-gray-500">— 42</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8da33c]"></span>Replies Received</span>
                        <span className="text-gray-500">— 13</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>Meetings Booked</span>
                        <span className="text-gray-500">— 4</span>
                      </div>
                    </motion.div>

                    {/* SVG Chart */}
                    <div className="h-32 w-full relative mt-1.5">
                      <svg className="w-full h-full" viewBox="0 0 500 160" preserveAspectRatio="none">
                        {/* Grid Lines */}
                        {[120, 100, 80, 60, 40, 20, 0].map((val) => {
                          const y = 10 + (120 - val);
                          return (
                            <g key={val}>
                              <line x1="30" y1={y} x2="480" y2={y} stroke="#f3f4f6" strokeWidth="1" strokeDasharray="2 2" />
                              <text x="20" y={y} textAnchor="end" dominantBaseline="middle" className="text-[8px] font-bold text-gray-400">{val}</text>
                            </g>
                          );
                        })}

                        {/* Active Day Vertical Line */}
                        <line x1="323.3" y1="10" x2="323.3" y2="130" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="3 3" />

                        {/* Chart Paths */}
                        {/* 1. Connections Sent */}
                        <motion.path
                          d="M 30 108 L 66.7 95 L 103.3 90 L 140 85 L 176.7 82 L 213.3 65 L 250 47 L 286.7 57 L 323.3 34 L 360 30 L 396.7 10 L 433.3 12 L 470 12"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                        />
                        {/* 2. Connections Accepted */}
                        <motion.path
                          d="M 30 125 L 66.7 118 L 103.3 110 L 140 108 L 176.7 105 L 213.3 92 L 250 86 L 286.7 94 L 323.3 75 L 360 70 L 396.7 72 L 433.3 68 L 470 69"
                          fill="none"
                          stroke="#15803d"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        />
                        {/* 3. Messages Sent */}
                        <motion.path
                          d="M 30 122 L 66.7 120 L 103.3 116 L 140 118 L 176.7 120 L 213.3 105 L 250 109 L 286.7 102 L 323.3 88 L 360 98 L 396.7 100 L 433.3 80 L 470 80"
                          fill="none"
                          stroke="#a3e635"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                        />
                        {/* 4. Replies Received */}
                        <motion.path
                          d="M 30 123 L 66.7 115 L 103.3 112 L 140 113 L 176.7 114 L 213.3 118 L 250 107 L 286.7 98 L 323.3 117 L 360 111 L 396.7 112 L 433.3 95 L 470 95"
                          fill="none"
                          stroke="#8da33c"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        />
                        {/* 5. Meetings Booked */}
                        <motion.path
                          d="M 30 126 L 66.7 124 L 103.3 125 L 140 127 L 176.7 125 L 213.3 124 L 250 122 L 286.7 119 L 323.3 126 L 360 124 L 396.7 125 L 433.3 121 L 470 122"
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        />

                        {/* Circles on active day */}
                        <motion.circle cx="323.3" cy="34" r="5" fill="#22c55e" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.0 }} />
                        <motion.circle cx="323.3" cy="75" r="5" fill="#15803d" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.05 }} />
                        <motion.circle cx="323.3" cy="88" r="5" fill="#a3e635" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.1 }} />
                        <motion.circle cx="323.3" cy="117" r="5" fill="#8da33c" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.15 }} />
                        <motion.circle cx="323.3" cy="126" r="5" fill="#38bdf8" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.2 }} />

                        {/* X-Axis labels */}
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
                          const x = 30 + idx * 2 * 36.67;
                          const isFri = day === "Fri";
                          return (
                            <text
                              key={day}
                              x={x}
                              y="148"
                              textAnchor="middle"
                              className={`text-[8px] font-bold ${isFri ? "text-gray-900 font-extrabold" : "text-gray-400"}`}
                            >
                              {day}
                            </text>
                          );
                        })}
                      </svg>
                    </div>
                  </motion.div>

                  {/* Recent Activity Card */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.1 } }
                    }}
                    className="col-span-2 bg-white border border-gray-200/80 p-4 rounded-2xl shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-extrabold text-xs text-gray-900 pb-2 border-b border-gray-100">Recent Activity</h3>

                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: {},
                          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                        }}
                        className="flex flex-col gap-3.5 mt-3.5"
                      >
                        {/* Item 1 */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                          }}
                          className="flex items-start gap-3"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80"
                            alt="Sarah Chen"
                            className="h-8 w-8 rounded-full object-cover border border-zinc-100"
                          />
                          <div>
                            <p className="text-[11px] font-bold text-gray-900 leading-snug">
                              Sarah Chen accepted your connection request.
                            </p>
                            <span className="text-[9px] text-gray-400 mt-0.5 block">12 minutes ago</span>
                          </div>
                        </motion.div>

                        {/* Item 2 */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                          }}
                          className="flex items-start gap-3"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80"
                            alt="David Miller"
                            className="h-8 w-8 rounded-full object-cover border border-zinc-100"
                          />
                          <div>
                            <p className="text-[11px] font-bold text-gray-900 leading-snug">
                              David Miller replied to your campaign message.
                            </p>
                            <span className="text-[9px] text-gray-400 mt-0.5 block">2 hours ago</span>
                          </div>
                        </motion.div>

                        {/* Item 3 */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="h-8 w-8 rounded-full bg-lime-50 text-lime-600 flex items-center justify-center border border-lime-100 shrink-0">
                            <Bot size={15} />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-gray-900 leading-snug">
                              AI optimized 14 lead descriptions for Discover.
                            </p>
                            <span className="text-[9px] text-gray-400 mt-0.5 block">5 hours ago</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Active Campaigns Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white border border-gray-200/80 p-4 rounded-2xl shadow-sm flex flex-col justify-between"
                >
                  <div className="pb-3 border-b border-gray-100">
                    <h3 className="font-extrabold text-xs text-gray-900 uppercase tracking-wider">Active Campaigns</h3>
                  </div>

                  {/* Outer Wrapper handles horizontal scrolling cleanly if screens get too tight */}
                  <div className="overflow-x-auto mt-3 w-full custom-scrollbar">
                    {/* Setting a min-width on the table guarantees columns have breathing room */}
                    <table className="w-full text-left border-collapse min-w-[640px]">
                      <thead>
                        <tr className="border-b border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                          <th className="pb-2 font-bold text-left w-[35%]">Campaign Name</th>
                          <th className="pb-2 font-bold text-left w-[10%]">Status</th>
                          <th className="pb-2 font-bold text-left w-[15%]">Progress</th>
                          <th className="pb-2 font-bold text-left w-[15%]">Leads Sent</th>
                          <th className="pb-2 font-bold text-left w-[15%]">Replies</th>
                          <th className="pb-2 font-bold text-left w-[10%]">CTR</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50 whitespace-nowrap">
                        {/* Row 1 */}
                        <tr className="text-xs">
                          <td className="py-2.5 pr-4 flex items-center gap-2.5">
                            <div className="bg-sky-50 border border-sky-100 rounded-lg p-1.5 text-sky-600 shrink-0">
                              <Briefcase size={14} />
                            </div>
                            {/* max-w layout rule keeps long titles from throwing off the column grid */}
                            <div className="max-w-[200px] truncate">
                              <p className="font-bold text-gray-900 leading-snug truncate">Healthcare Decision Makers Q2</p>
                              <span className="text-[9px] text-gray-400 block mt-0.5">Created 2 days ago • LinkedIn</span>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4">
                            <span className="bg-green-50 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded-full inline-block">
                              Active
                            </span>
                          </td>
                          <td className="py-2.5 pr-4">
                            <div className="flex items-center gap-2">
                              <div className="w-14 bg-gray-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-lime-500 h-full rounded-full" style={{ width: "68%" }}></div>
                              </div>
                              <span className="text-[9px] font-bold text-gray-600">68%</span>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4 text-[11px] font-medium text-gray-500">
                            <span className="text-gray-900 font-bold">2,450</span>/3,500
                          </td>
                          <td className="py-2.5 pr-4 text-[11px] font-bold text-gray-900">
                            1,642 <span className="text-emerald-600 text-[9px] font-bold ml-0.5">(67.2%)</span>
                          </td>
                          <td className="py-2.5 text-[11px] font-bold text-gray-900">12.4%</td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="text-xs">
                          <td className="py-2.5 pr-4 flex items-center gap-2.5">
                            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-1.5 text-indigo-600 shrink-0">
                              <Landmark size={14} />
                            </div>
                            <div className="max-w-[200px] truncate">
                              <p className="font-bold text-gray-900 leading-snug truncate">FinTech Series A Founders</p>
                              <span className="text-[9px] text-gray-400 block mt-0.5">Created 5 days ago • Email</span>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4">
                            <span className="bg-cyan-50 text-cyan-700 text-[9px] font-bold px-2 py-0.5 rounded-full inline-block">
                              Warming
                            </span>
                          </td>
                          <td className="py-2.5 pr-4">
                            <div className="flex items-center gap-2">
                              <div className="w-14 bg-gray-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-sky-500 h-full rounded-full" style={{ width: "32%" }}></div>
                              </div>
                              <span className="text-[9px] font-bold text-gray-600">32%</span>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4 text-[11px] font-medium text-gray-500">
                            <span className="text-gray-900 font-bold">840</span>/2,600
                          </td>
                          <td className="py-2.5 pr-4 text-[11px] font-bold text-gray-900">
                            210 <span className="text-emerald-600 text-[9px] font-bold ml-0.5">(25.0%)</span>
                          </td>
                          <td className="py-2.5 text-[11px] font-bold text-gray-900">8.1%</td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="text-xs">
                          <td className="py-2.5 pr-4 flex items-center gap-2.5">
                            <div className="bg-amber-50 border border-amber-100 rounded-lg p-1.5 text-amber-600 shrink-0">
                              <ShoppingCart size={14} />
                            </div>
                            <div className="max-w-[200px] truncate">
                              <p className="font-bold text-gray-900 leading-snug truncate">D2C Brand Acquisition</p>
                              <span className="text-[9px] text-gray-400 block mt-0.5">Created 1 week ago • Omni</span>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4">
                            <span className="bg-amber-50 text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded-full inline-block">
                              Paused
                            </span>
                          </td>
                          <td className="py-2.5 pr-4">
                            <div className="flex items-center gap-2">
                              <div className="w-14 bg-gray-100 h-1 rounded-full overflow-hidden">
                                {/* Fixed the background layout mapping utility typo from bg-amber-650 to bg-amber-500 */}
                                <div className="bg-amber-500 h-full rounded-full" style={{ width: "95%" }}></div>
                              </div>
                              <span className="text-[9px] font-bold text-gray-600">95%</span>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4 text-[11px] font-medium text-gray-500">
                            <span className="text-gray-900 font-bold">4,750</span>/5,000
                          </td>
                          <td className="py-2.5 pr-4 text-[11px] font-bold text-gray-900">
                            3,240 <span className="text-emerald-600 text-[9px] font-bold ml-0.5">(68.2%)</span>
                          </td>
                          <td className="py-2.5 text-[11px] font-bold text-gray-900">15.7%</td>
                        </tr>

                        {/* Row 4 */}
                        <tr className="text-xs">
                          <td className="py-2.5 pr-4 flex items-center gap-2.5">
                            <div className="bg-rose-50 border border-rose-100 rounded-lg p-1.5 text-rose-600 shrink-0">
                              <GraduationCap size={14} />
                            </div>
                            <div className="max-w-[200px] truncate">
                              <p className="font-bold text-gray-900 leading-snug truncate">K-12 District Superintendents</p>
                              <span className="text-[9px] text-gray-400 block mt-0.5">Created 3 days ago • LinkedIn</span>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4">
                            <span className="bg-green-50 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded-full inline-block">
                              Active
                            </span>
                          </td>
                          <td className="py-2.5 pr-4">
                            <div className="flex items-center gap-2">
                              <div className="w-14 bg-gray-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-lime-500 h-full rounded-full" style={{ width: "12%" }}></div>
                              </div>
                              <span className="text-[9px] font-bold text-gray-600">12%</span>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4 text-[11px] font-medium text-gray-500">
                            <span className="text-gray-900 font-bold">152</span>/1,200
                          </td>
                          <td className="py-2.5 pr-4 text-[11px] font-bold text-gray-900">
                            48 <span className="text-emerald-600 text-[9px] font-bold ml-0.5">(31.5%)</span>
                          </td>
                          <td className="py-2.5 text-[11px] font-bold text-gray-900">4.8%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination Footer */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-3 text-[10px] text-gray-400">
                    <span>Showing 4 of 12 active campaigns</span>
                    <div className="flex items-center gap-1.5">
                      <button className="p-1 rounded border border-gray-200 hover:bg-gray-50 transition text-gray-600">
                        <ChevronLeft size={12} />
                      </button>
                      <span className="font-semibold text-gray-700">Page 1 of 3</span>
                      <button className="p-1 rounded border border-gray-200 hover:bg-gray-50 transition text-gray-600">
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Buttons Row */}
                <div className="flex flex-wrap items-center gap-2 mt-4 pb-2">
                  <button className="flex items-center gap-1.5 bg-gradient-to-r from-lime-400 to-lime-500 text-black px-4 py-2.5 rounded-xl text-xs font-bold hover:scale-[1.01] shadow transition">
                    <Plus size={14} />
                    New Campaign
                  </button>
                  <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-50 transition">
                    <Upload size={14} />
                    Import CSV
                  </button>
                  <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-50 transition">
                    <Search size={14} />
                    Find New Leads
                  </button>
                </div>
              </div>
            </main>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-3 w-50% h-fit rounded-3xl pt-5 pb-15 px-10 mx-10 shadow-lg bg-gradient-to-br from-white/30 via-[#002800] to-white/15"
        >
          <div className="w-full h-full my-10">
            <div className="flex flex-col items-center justify-center py-10 gap-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="flex items-center gap-2 w-fit rounded-full p-5 bg-[#cefad0]/90"
              >
                <Image src="/robot.png" alt="robot" width={50} height={50} className="stroke-[black]/50" />
              </motion.div>
              <h2 className="font-bold text-white text-2xl">Ask NetworkUp.io Anything</h2>
              <h4 className="text-gray-200/30 text-sm sm:text-md md:text-lg text-center w-[400px]">Generate leads, optimize campaigns, or research any target account in seconds.</h4>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="inline-flex gap-3 flex-wrap justify-center text-[13px] text-white/90 "
            >
              {[
                "Research Company",
                "Prepare Meeting",
                "Summarize Inbox",
                "Analyze Conversation",
                "Generate Campaign",
                "Find Buying Signals",
                "Weekly Report"
              ].map((chipText, chipIdx) => (
                <motion.span
                  key={chipIdx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(3, 40, 0, 1)",
                    borderColor: "rgba(163, 230, 53, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-4 py-3 bg-white/10 rounded-full border border-white/20 transition-all duration-200 cursor-pointer"
                >
                  {chipText}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
