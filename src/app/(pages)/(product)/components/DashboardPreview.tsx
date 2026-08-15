"use client";

import { useState } from "react";
import { AlertTriangle, ArrowUpRight, Bell, Bot, Compass, HelpCircle, HelpCircleIcon, Inbox, LayoutDashboard, Megaphone, Search, Settings, ShieldCheck, Sparkles, UserCheck, Mail, UserPlus, Zap, ChevronLeft, ChevronRight, Plus, Upload, Briefcase, Landmark, ShoppingCart, GraduationCap, UserCircle2, LogOut, Rocket, PlugZap, Database, Microchip, UsersIcon, NetworkIcon, UserSearch, RocketIcon, MessagesSquare, Radar, ChartBar, Newspaper, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "@/app/homepage/assets/icons";
import Image from "next/image"
import { FaResearchgate, FaTools } from "react-icons/fa";
import { GrTemplate } from "react-icons/gr";
import { TbTemplate } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { CampaignBuilderIcon } from "@/app/homepage/assets/icons";
import { MdReport } from "react-icons/md";

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

const BarChartIcon = (props: any) => (
  <ChartBar {...props} className={`rotate-[90deg] -scale-x-100 ${props.className || ""}`} />
);

const features = [
  {
    icon: UserSearch,
    title: "Generate Leads",
    description: "Find and verify high-quality leads that match your ideal customer profile."
  },
  {
    icon: RocketIcon,
    title: "Optimize Campaigns",
    description: "AI analyzes your performance and suggests improvements to boost results."
  },
  {
    icon: Newspaper,
    title: "Research Accounts",
    description: "Get deep insights about companies, decision makers, and growth opportunities."
  },
  {
    icon: MessagesSquare,
    title: "Analyze Conversations",
    description: "Understand sentiment, key topics, and response patterns."
  },
  {
    icon: Radar,
    title: "Find Buying Signals",
    description: "Identify leads showing intent and readiness to engage."
  },
  {
    icon: BarChartIcon,
    title: "Weekly Reports",
    description: "Get a summary of your performance and actionable recommendations."
  },
]

export default function DashboardPreview() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="w-full min-h-screen lg:h-screen bg-[#021807] flex items-center justify-center px-4 md:px-6 lg:px-8 py-10 lg:py-5 overflow-y-auto lg:overflow-hidden">
      {/* Browser Frame Wrapper */}
      <div className="w-full max-w-[1550px] h-auto lg:h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-center h-auto lg:h-full w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 lg:col-span-7 bg-white h-[550px] sm:h-[650px] lg:h-full lg:max-h-[82vh] rounded-none border border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden relative"
          >
            {/* Sidebar Backdrop for Mobile */}
            {isSidebarOpen && (
              <div
                className="absolute inset-0 bg-black/60 z-40 md:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            {/* Sidebar */}
            <aside className={`${
              isSidebarOpen ? "flex absolute inset-y-0 left-0 z-50 w-52 shadow-2xl" : "hidden"
            } md:relative md:flex md:w-50 bg-[#0c240f] text-white flex-col justify-between p-2.5 shrink-0 transition-all duration-300`}>
              <div>
                {/* Logo Section */}
                <div className="flex items-center gap-1 mb-3.5 px-1">
                  <div className="bg-transparent p-0.5 rounded-lg text-black font-extrabold flex items-center justify-center">
                    <Image
                      src="/Logo.svg"
                      alt="Logo"
                      width={12}
                      height={12}
                    />
                  </div>
                  <span className="text-sm font-bold font-[family-name:var(--font-comfortaa)] tracking-tight text-[#6CB531] flex items-center">
                    NetworkUp<span className="text-lime-400 font-normal tracking-[0.5px]">.io</span>
                  </span>
                </div>

                {/* Sidebar Links */}
                <nav className="space-y-1">
                  <div className="uppercase text-[9px] text-gray-300/50 pl-2 py-0.5" >Home</div>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-semibold transition-all bg-white/10 text-white shadow-[10px] ring-1 ring-white/10" onClick={() => setIsSidebarOpen(false)}>
                    <LayoutDashboard size={11} className="text-lime-400" />
                    Dashboard
                  </button>
                  <button className="w-full flex items-start justify-between gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <div className="flex items-center gap-2">
                      <Inbox size={13} className="text-gray-400" />
                      <span>Inbox</span>
                    </div>
                    <span className="bg-lime-400/30 text-lime-300 text-[8px] px-1.5 py-0.5 -mt-0.5 rounded-full">24</span>
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <BiUser size={13} className="text-gray-400" />
                    Leads
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <Compass size={13} className="text-gray-400" />
                    Discover
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <NetworkIcon size={13} className="text-gray-400" />
                    Network
                  </button>

                  <div className="h-1.5" />
                  <div className="uppercase text-[9px] text-gray-300/50 pl-2" >Automation</div>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <Rocket size={13} className="text-gray-400" />
                    Campaigns
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <FaTools size={13} className="text-gray-400" />
                    Campaign Builder
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <TbTemplate size={13} className="text-gray-400" />
                    Templates
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <GrTemplate size={13} className="text-gray-400" />
                    Automation Logs
                  </button>

                  <div className="h-1.5" />
                  <div className="w-full flex gap-2 px-2 rounded-lg text-[9px] font-medium transition-all text-gray-300/50">
                    <Sparkles size={13} className="text-gray-400" />
                    <span>AI COPILOT</span>
                  </div>
                  <button className="w-full flex items-start justify-between gap-0.5 px-2 py-1 rounded-lg text-[11px] font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <div className="flex items-center gap-2">
                      <Bot size={13} className="text-gray-400" />
                      <span className="-ml-1 text-xs" >AI Workspace</span>
                    </div>
                    <span className="bg-lime-400 text-black font-bold text-[8px] px-1 py-0.5 rounded-full">New</span>
                  </button>

                  <div className="h-1.5" />
                  <div className="uppercase text-[9px] text-gray-300/50 pl-2" >Administration</div>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <UsersIcon size={13} className="text-gray-400" />
                    Community
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <Microchip size={13} className="text-gray-400" />
                    Integration
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <Database size={13} className="text-gray-400" />
                    Billing
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <PlugZap size={13} className="text-gray-400" />
                    API & Webhooks
                  </button>
                  <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                    <Settings size={13} className="text-gray-400" />
                    Settings
                  </button>
                </nav>
              </div>

              {/* Sidebar Bottom */}
              <div className="pt-2 border-t border-white/10 mt-2 md:mt-0">
                <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-[10px] font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all">
                  <UserCircle2 size={16} className="text-white shrink-0" />
                  <div className="flex flex-col items-start min-w-0">
                    <span className="font-semibold truncate w-full">Marcus Reyes</span>
                    <span className="text-gray-400/90 text-[9px]">Pro Plan</span>
                  </div>
                </button>
                <button className="w-full flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all">
                  <LogOut size={16} className="text-white shrink-0" />
                  <span className="text-white">Logout</span>
                </button>
              </div>
            </aside>

            {/* Main Workspace Area */}
            <main className="flex-1 bg-[#fafbfa] p-2.5 sm:p-3 pb-2 flex flex-col justify-between overflow-hidden min-h-0">

              {/* Top Navigation */}
              <header className="flex items-center justify-between gap-2 pb-1.5 border-b border-gray-200/50 w-full">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Menu 
                    size={16} 
                    className="md:hidden text-gray-600 cursor-pointer shrink-0" 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  />
                  <h2 className="font-extrabold text-xs sm:text-base truncate">Dashboard</h2>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Search Bar */}
                  <div className="relative hidden sm:block w-36 md:w-44">
                    <Search size={10} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-white border border-gray-200 pl-6 pr-2 py-0.5 rounded-lg text-[9px] focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm transition"
                      readOnly
                    />
                  </div>

                  <button className="relative p-1 text-gray-600 hover:text-black bg-white rounded-lg border border-gray-200 shadow-sm transition">
                    <Bell size={11} />
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-lime-500 rounded-full"></span>
                  </button>
                  <button className="p-1 text-gray-600 hover:text-black bg-white rounded-lg border border-gray-200 shadow-sm transition">
                    <Bot size={11} />
                  </button>
                  <button className="p-1 text-gray-600 hover:text-black bg-white rounded-lg border border-gray-200 shadow-sm transition">
                    <HelpCircle size={11} />
                  </button>
                </div>
              </header>

              {/* Main Dash Content */}
              <div className="space-y-2.5 pt-2 flex-1 flex flex-col min-h-0 justify-between overflow-y-auto pr-1">

                {/* Greeting */}
                <div>
                  <h2 className="text-sm sm:text-base font-extrabold text-gray-950 flex flex-wrap items-center gap-1">
                    Welcome back, <span className="text-[#0c240f]">Marcus Reyes</span>!👋
                  </h2>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-none">
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
                  className="grid grid-cols-2 sm:grid-cols-5 gap-2 shrink-0"
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
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      whileHover={{ y: -1.5, scale: 1.01 }}
                      className={`bg-white border border-gray-200/80 p-1.5 sm:p-2 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                    >
                      <p className="text-[8px] font-bold text-gray-400 tracking-tight uppercase leading-none truncate">{stat.title}</p>
                      <div className="flex items-baseline justify-between mt-1 gap-0.5">
                        <span className="text-xs sm:text-sm font-black text-gray-900 leading-none">{stat.val}</span>
                        <span className="text-[8px] font-extrabold text-emerald-500 px-1 py-0.2 rounded-full leading-none">
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
                  className="grid grid-cols-1 lg:grid-cols-5 gap-2.5 shrink-0"
                >
                  {/* Weekly Performance Overview Chart Card */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className="col-span-1 lg:col-span-3 bg-white border border-gray-200/80 p-2.5 rounded-2xl shadow-sm flex flex-col justify-between relative"
                  >
                    <div className="pb-1 border-b border-gray-100 flex justify-between items-center">
                      <h3 className="font-extrabold text-[10px] text-gray-900">Weekly Performance Overview</h3>
                    </div>

                    {/* Tooltip Overlay */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 5 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
                      className="absolute top-7 left-[45%] -translate-x-1/2 bg-white/95 border border-zinc-100 rounded-xl shadow-md p-1.5 z-10 text-[8px] font-semibold text-zinc-700 space-y-0.5 w-32 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-[#22c55e]"></span>Sent</span>
                        <span className="text-gray-500">— 96</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-[#15803d]"></span>Accepted</span>
                        <span className="text-gray-500">— 55</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-[#a3e635]"></span>Messages</span>
                        <span className="text-gray-500">— 42</span>
                      </div>
                    </motion.div>

                    {/* SVG Chart */}
                    <div className="h-24 w-full relative mt-1">
                      <svg className="w-full h-full" viewBox="0 0 500 160" preserveAspectRatio="none">
                        {/* Grid Lines */}
                        {[120, 100, 80, 60, 40, 20, 0].map((val) => {
                          const y = 10 + (120 - val);
                          return (
                            <g key={val}>
                              <line x1="30" y1={y} x2="480" y2={y} stroke="#f3f4f6" strokeWidth="1" strokeDasharray="2 2" />
                              <text x="20" y={y} textAnchor="end" dominantBaseline="middle" className="text-[7px] font-bold text-gray-400">{val}</text>
                            </g>
                          );
                        })}

                        {/* Active Day Vertical Line */}
                        <line x1="323.3" y1="10" x2="323.3" y2="130" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="3 3" />

                        {/* Chart Paths */}
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
                        <motion.circle cx="323.3" cy="34" r="4" fill="#22c55e" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.0 }} />
                        <motion.circle cx="323.3" cy="75" r="4" fill="#15803d" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.05 }} />
                        <motion.circle cx="323.3" cy="88" r="4" fill="#a3e635" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.1 }} />
                        <motion.circle cx="323.3" cy="117" r="4" fill="#8da33c" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.15 }} />
                        <motion.circle cx="323.3" cy="126" r="4" fill="#38bdf8" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 1.2 }} />

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
                              className={`text-[7px] font-bold ${isFri ? "text-gray-900 font-extrabold" : "text-gray-400"}`}
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
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.1 } }
                    }}
                    className="col-span-1 lg:col-span-2 bg-white border border-gray-200/80 p-2.5 rounded-2xl shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-extrabold text-[10px] text-gray-900 pb-1.5 border-b border-gray-100">Recent Activity</h3>

                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: {},
                          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                        }}
                        className="flex flex-col gap-2 mt-2"
                      >
                        {/* Item 1 */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                          }}
                          className="flex items-start gap-2"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80"
                            alt="Sarah Chen"
                            className="h-6.5 w-6.5 rounded-full object-cover border border-zinc-100 shrink-0"
                          />
                          <div>
                            <p className="text-[9px] font-bold text-gray-900 leading-snug">
                              Sarah Chen accepted your connection request.
                            </p>
                            <span className="text-[8px] text-gray-400 block mt-0.2">12m ago</span>
                          </div>
                        </motion.div>

                        {/* Item 2 */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                          }}
                          className="flex items-start gap-2"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80"
                            alt="David Miller"
                            className="h-6.5 w-6.5 rounded-full object-cover border border-zinc-100 shrink-0"
                          />
                          <div>
                            <p className="text-[9px] font-bold text-gray-900 leading-snug">
                              David Miller replied to your campaign message.
                            </p>
                            <span className="text-[8px] text-gray-400 block mt-0.2">2h ago</span>
                          </div>
                        </motion.div>

                        {/* Item 3 */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                          }}
                          className="flex items-start gap-2"
                        >
                          <div className="h-6.5 w-6.5 rounded-full bg-lime-50 text-lime-600 flex items-center justify-center border border-lime-100 shrink-0">
                            <Bot size={12} />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-gray-900 leading-snug">
                              AI optimized 14 lead descriptions for Discover.
                            </p>
                            <span className="text-[8px] text-gray-400 block mt-0.2">5h ago</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Active Campaigns Card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white border border-gray-200/80 p-2.5 rounded-2xl shadow-sm flex flex-col justify-between shrink-0"
                >
                  <div className="pb-1.5 border-b border-gray-100">
                    <h3 className="font-extrabold text-[10px] text-gray-900 uppercase tracking-wider">Active Campaigns</h3>
                  </div>

                  {/* Outer Wrapper handles horizontal scrolling cleanly if screens get too tight */}
                  <div className="overflow-x-auto mt-1.5 w-full custom-scrollbar">
                    {/* Setting a min-width on the table guarantees columns have breathing room */}
                    <table className="w-full text-left border-collapse min-w-[640px]">
                      <thead>
                        <tr className="border-b border-gray-100 text-[8px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                          <th className="pb-1 font-bold text-left w-[35%]">Campaign Name</th>
                          <th className="pb-1 font-bold text-left w-[10%]">Status</th>
                          <th className="pb-1 font-bold text-left w-[15%]">Progress</th>
                          <th className="pb-1 font-bold text-left w-[15%]">Leads Sent</th>
                          <th className="pb-1 font-bold text-left w-[15%]">Replies</th>
                          <th className="pb-1 font-bold text-left w-[10%]">CTR</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50 whitespace-nowrap">
                        {/* Row 1 */}
                        <tr className="text-[10px]">
                          <td className="py-1.5 pr-4 flex items-center gap-2">
                            <div className="bg-sky-50 border border-sky-100 rounded-lg p-1 text-sky-600 shrink-0">
                              <Briefcase size={12} />
                            </div>
                            {/* max-w layout rule keeps long titles from throwing off the column grid */}
                            <div className="max-w-[200px] truncate">
                              <p className="font-bold text-gray-900 leading-snug truncate">Healthcare Decision Makers Q2</p>
                              <span className="text-[8px] text-gray-400 block mt-0.2">Created 2d ago • LinkedIn</span>
                            </div>
                          </td>
                          <td className="py-1.5 pr-4">
                            <span className="bg-green-50 text-green-700 text-[8px] font-bold px-1.5 py-0.2 rounded-full inline-block">
                              Active
                            </span>
                          </td>
                          <td className="py-1.5 pr-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-12 bg-gray-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-lime-500 h-full rounded-full" style={{ width: "68%" }}></div>
                              </div>
                              <span className="text-[8px] font-bold text-gray-600">68%</span>
                            </div>
                          </td>
                          <td className="py-1.5 pr-4 text-[9.5px] font-medium text-gray-500">
                            <span className="text-gray-900 font-bold">2,450</span>/3,500
                          </td>
                          <td className="py-1.5 pr-4 text-[9.5px] font-bold text-gray-900">
                            1,642 <span className="text-emerald-600 text-[8px] font-bold ml-0.5">(67.2%)</span>
                          </td>
                          <td className="py-1.5 text-[9.5px] font-bold text-gray-900">12.4%</td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="text-[10px]">
                          <td className="py-1.5 pr-4 flex items-center gap-2">
                            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-1 text-indigo-600 shrink-0">
                              <Landmark size={12} />
                            </div>
                            <div className="max-w-[200px] truncate">
                              <p className="font-bold text-gray-900 leading-snug truncate">FinTech Series A Founders</p>
                              <span className="text-[8px] text-gray-400 block mt-0.2">Created 5d ago • Email</span>
                            </div>
                          </td>
                          <td className="py-1.5 pr-4">
                            <span className="bg-cyan-50 text-cyan-700 text-[8px] font-bold px-1.5 py-0.2 rounded-full inline-block">
                              Warming
                            </span>
                          </td>
                          <td className="py-1.5 pr-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-12 bg-gray-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-sky-500 h-full rounded-full" style={{ width: "32%" }}></div>
                              </div>
                              <span className="text-[8px] font-bold text-gray-600">32%</span>
                            </div>
                          </td>
                          <td className="py-1.5 pr-4 text-[9.5px] font-medium text-gray-500">
                            <span className="text-gray-900 font-bold">840</span>/2,600
                          </td>
                          <td className="py-1.5 pr-4 text-[9.5px] font-bold text-gray-900">
                            210 <span className="text-emerald-600 text-[8px] font-bold ml-0.5">(25.0%)</span>
                          </td>
                          <td className="py-1.5 text-[9.5px] font-bold text-gray-900">8.1%</td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="text-[10px]">
                          <td className="py-1.5 pr-4 flex items-center gap-2">
                            <div className="bg-amber-50 border border-amber-100 rounded-lg p-1 text-amber-600 shrink-0">
                              <ShoppingCart size={12} />
                            </div>
                            <div className="max-w-[200px] truncate">
                              <p className="font-bold text-gray-900 leading-snug truncate">D2C Brand Acquisition</p>
                              <span className="text-[8px] text-gray-400 block mt-0.2">Created 1w ago • Omni</span>
                            </div>
                          </td>
                          <td className="py-1.5 pr-4">
                            <span className="bg-amber-50 text-amber-700 text-[8px] font-bold px-1.5 py-0.2 rounded-full inline-block">
                              Paused
                            </span>
                          </td>
                          <td className="py-1.5 pr-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-12 bg-gray-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-amber-500 h-full rounded-full" style={{ width: "95%" }}></div>
                              </div>
                              <span className="text-[8px] font-bold text-gray-600">95%</span>
                            </div>
                          </td>
                          <td className="py-1.5 pr-4 text-[9.5px] font-medium text-gray-500">
                            <span className="text-gray-900 font-bold">4,750</span>/5,000
                          </td>
                          <td className="py-1.5 pr-4 text-[9.5px] font-bold text-gray-900">
                            3,240 <span className="text-emerald-600 text-[8px] font-bold ml-0.5">(68.2%)</span>
                          </td>
                          <td className="py-1.5 text-[9.5px] font-bold text-gray-900">15.7%</td>
                        </tr>

                        {/* Row 4 */}
                        <tr className="text-[10px]">
                          <td className="py-1.5 pr-4 flex items-center gap-2">
                            <div className="bg-rose-50 border border-rose-100 rounded-lg p-1 text-rose-600 shrink-0">
                              <GraduationCap size={12} />
                            </div>
                            <div className="max-w-[200px] truncate">
                              <p className="font-bold text-gray-900 leading-snug truncate">K-12 District Superintendents</p>
                              <span className="text-[8px] text-gray-400 block mt-0.2">Created 3d ago • LinkedIn</span>
                            </div>
                          </td>
                          <td className="py-1.5 pr-4">
                            <span className="bg-green-50 text-green-700 text-[8px] font-bold px-1.5 py-0.2 rounded-full inline-block">
                              Active
                            </span>
                          </td>
                          <td className="py-1.5 pr-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-12 bg-gray-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-lime-500 h-full rounded-full" style={{ width: "12%" }}></div>
                              </div>
                              <span className="text-[8px] font-bold text-gray-600">12%</span>
                            </div>
                          </td>
                          <td className="py-1.5 pr-4 text-[9.5px] font-medium text-gray-500">
                            <span className="text-gray-900 font-bold">152</span>/1,200
                          </td>
                          <td className="py-1.5 pr-4 text-[9.5px] font-bold text-gray-900">
                            48 <span className="text-emerald-600 text-[8px] font-bold ml-0.5">(31.5%)</span>
                          </td>
                          <td className="py-1.5 text-[9.5px] font-bold text-gray-900">4.8%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination Footer */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-1.5 mt-1.5 text-[8.5px] text-gray-400">
                    <span>Showing 4 of 12 active campaigns</span>
                    <div className="flex items-center gap-1.5">
                      <button className="p-0.5 rounded border border-gray-200 hover:bg-gray-50 transition text-gray-600">
                        <ChevronLeft size={10} />
                      </button>
                      <span className="font-semibold text-gray-700">Page 1 of 3</span>
                      <button className="p-0.5 rounded border border-gray-200 hover:bg-gray-50 transition text-gray-600">
                        <ChevronRight size={10} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </main>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 lg:col-span-5 h-auto lg:h-full lg:max-h-[82vh] rounded-3xl p-5 shadow-lg bg-gradient-to-br from-[#6CB531]/30 via-[#05230c] to-[#05230c] border border-[#defad0]/15 w-full flex flex-col justify-center min-h-0 overflow-hidden"
          >
            <div className="w-full h-full flex flex-col justify-center py-2 min-h-0 overflow-hidden">
              <div className="flex flex-col items-center justify-center py-1.5 gap-1 shrink-0">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                  className="w-14 h-14 rounded-full bg-[#cefad0] flex items-center justify-center mx-auto mb-2 shadow-md shrink-0"
                >
                  <Image src="/robot.png" alt="robot" width={28} height={28} className="stroke-[black]/50" />
                </motion.div>
                <h2 className="font-bold text-white text-lg text-center mb-0.5 leading-tight">Ask NetworkUp.io Anything</h2>
                <h4 className="text-gray-300/60 text-[10.5px] text-center max-w-[320px] mx-auto mb-3 leading-tight">Generate leads, optimize campaigns, or research any target account in seconds.</h4>
              </div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-1.5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="flex flex-col bg-white/5 p-3.5 rounded-2xl border-0.5 border-[#defad0]/10 shadow-[inset_1.5px_0_0_0_rgba(222,250,208,0.3),_inset_0_-1.5px_0_0_rgba(222,250,208,0.3)] hover:bg-[#05210c] transition-all duration-300 group relative"
                    >
                      <div className="absolute inset-0 pointer-events-none rounded-2xl border border-[#defad0]/20 [mask-image:linear-gradient(to_top_left,_black_50%,_transparent_50%)]"></div>

                      <div className="flex items-center justify-start mb-1.5 shrink-0">
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          <Icon size={18} className="text-lime-400" stroke="lime" />
                        </div>
                      </div>
                      <h3 className="text-[11px] font-bold text-white tracking-tight mb-1 truncate">
                        {feature.title}
                      </h3>
                      <p className="text-[9px] leading-tight text-gray-400 font-normal">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
