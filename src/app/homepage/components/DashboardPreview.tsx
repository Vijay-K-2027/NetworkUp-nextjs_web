"use client"

import { AlertTriangle, ArrowUpRight, Bell, Bot, Compass, HelpCircle, HelpCircleIcon, Inbox, LayoutDashboard, Megaphone, Search, Settings, ShieldCheck, Sparkles, User, UserCheck, Users } from "lucide-react";
import React from "react";
import Image from "next/image"

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
    <div className="w-full max-w-7xl bg-gradient-to-b from-white via-white-300 via-white-600 to-lime-50 mx-auto px-6 pb-24">
      {/* Browser Frame Wrapper */}
      <div className="bg-slate-900/5 rounded-2xl p-3 sm:p-4 backdrop-blur-xl border border-gray-200/50 shadow-2xl ring-1 ring-gray-900/10">

        {/* Browser Header Bar */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-200/60">
          {/* Windows/Mac Dots */}
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400 block"></span>
          </div>
          {/* Browser Address Tab Mock */}
          <div className="hidden sm:block text-xs text-gray-400 bg-white/85 border border-gray-200/80 px-12 py-1.5 rounded-lg select-none shadow-sm font-mono">
            app.networkup.io/dashboard
          </div>
          <div className="w-16"></div>
        </div>

        {/* Dashboard Shell */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-inner mt-3 sm:mt-4 min-h-[680px] border border-gray-100">

          {/* Sidebar */}
          <aside className="w-full md:w-60 bg-[#0c240f] text-white flex flex-col justify-between p-5">
            <div>
              {/* Logo Section */}
              <div className="flex items-center gap-1 mb-8 px-2">
                <div className="bg-transparent p-1.5 rounded-lg text-black font-extrabold flex items-center justify-center">
                  <Image
                    src="/Logo.svg"
                    alt="Logo"
                    width={18}
                    height={18}
                  />
                </div>
                <span className="text-lg font-extrabold tracking-tight text-white flex items-center">
                  NetworkUp<span className="text-lime-400">.io</span>
                </span>
              </div>

              {/* Sidebar Links */}
              <nav className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all bg-white/10 text-white shadow-sm ring-1 ring-white/10">
                  <LayoutDashboard size={18} className="text-lime-400" />
                  Dashboard
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                  <Inbox size={18} className="text-gray-400" />
                  Inbox
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                  <Users size={18} className="text-gray-400" />
                  Network
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                  <Megaphone size={18} className="text-gray-400" />
                  Campaigns
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                  <Compass size={18} className="text-gray-400" />
                  Discover
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-300 hover:bg-white/5 hover:text-white">
                  <UserCheck size={18} className="text-gray-400" />
                  Leads
                </button>
              </nav>
            </div>

            {/* Sidebar Bottom */}
            <div className="pt-4 border-t border-white/10 mt-6 md:mt-0">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all">
                <Settings size={18} className="text-gray-400" />
                Settings
              </button>
            </div>
          </aside>

          {/* Main Workspace Area */}
          <main className="flex-1 bg-[#fafbfa] p-4 sm:p-8 flex flex-col justify-between overflow-x-hidden">

            {/* Top Navigation */}
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 pb-6 border-b border-gray-200/50">

              <h2 className="font-extrabold text-2xl">Dashboard</h2>

              {/* Search Bar */}
              <div className="relative flex-1 max-w-lg">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search leads, campaigns, accounts..."
                  className="w-full bg-white border border-gray-200 pl-10 pr-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm transition"
                  readOnly
                />
              </div>

              {/* Utility Actions */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button className="relative p-2 text-gray-600 hover:text-black bg-white rounded-xl border border-gray-200 shadow-sm transition">
                  <Bell size={20} />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-lime-500 rounded-full"></span>
                </button>
                <button className="p-2 text-gray-600 hover:text-black bg-white rounded-xl border border-gray-200 shadow-sm transition">
                  <Bot size={20} />
                </button>
                <button className="p-2 text-gray-600 hover:text-black bg-white rounded-xl border border-gray-200 shadow-sm transition">
                  <HelpCircle size={20} />
                </button>
              </div>
            </header>

            {/* Main Dash Content */}
            <div className="space-y-6 pt-6">

              {/* Greeting */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 flex flex-wrap items-center gap-2">
                  Welcome back, <span className="text-[#0c240f]">Marcus Reyes</span>!👋
                </h2>
                <p className="text-sm sm:text-base text-gray-500 mt-1">
                  Your LinkedIn network grew by <span className="font-semibold text-lime-400">12%</span> this week. You have <span className="font-semibold text-lime-400">3 pending</span> campaign approvals.
                </p>
              </div>

              {/* Stats Grid */}
              <section className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
                {[
                  { title: "New Connections", val: "1,248", pct: "+18%" },
                  { title: "Messages Sent", val: "5,432", pct: "+12%" },
                  { title: "Reply Rate", val: "67%", pct: "+9%" },
                  { title: "Active Campaigns", val: "12", pct: "+3" },
                  { title: "Qualified Leads", val: "842", pct: "+22%" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white border border-gray-200/80 p-4 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md">
                    <p className="text-xs font-bold text-gray-400 tracking-tight uppercase">{stat.title}</p>
                    <div className="flex items-baseline justify-between mt-2.5 gap-1">
                      <span className="text-lg sm:text-xl font-black text-gray-900">{stat.val}</span>
                      <span className="text-[10px] font-extrabold text-emerald-500 px-2 py-0.5 rounded-full">
                        {stat.pct}
                      </span>
                    </div>
                  </div>
                ))}
              </section>

              {/* Priorities & Tips Grid */}
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Growth Coach Card */}
                <div className="lg:col-span-2 bg-white border border-gray-200/80 p-6 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden">

                  {/* Floating abstract decorative vector brain/gear icon */}
                  <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none translate-x-12 translate-y-12">
                    <Sparkles size={250} />
                  </div>

                  <div>
                    {/* Head */}
                    <div className="flex items-center gap-2 text-lime-700 font-extrabold text-xs bg-lime-50 border border-lime-100 rounded-full w-fit px-3.5 py-1 uppercase tracking-wider">
                      <Sparkles size={14} className="fill-lime-500 text-lime-600 animate-pulse" />
                      Growth Coach Recommendation
                    </div>

                    {/* Content Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">

                      {/* Priorities list */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Today's Priorities</h4>
                        <ul className="mt-3.5 space-y-3">
                          <li className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-lime-500 mt-1.5 shrink-0"></span>
                            <span>5 follow-ups due for SaaS Founders</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-gray-300 mt-1.5 shrink-0"></span>
                            <span>Review new connection requests (12)</span>
                          </li>
                        </ul>
                      </div>

                      {/* Outreach info */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Best Outreach Time</h4>
                        <div className="mt-3.5">
                          <p className="text-lg font-black text-lime-700">10:00 AM - 12:00 PM</p>
                          <p className="text-xs font-medium text-gray-400 mt-1">Based on recipient activity history</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-8 z-10">
                    <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 px-6 py-3.5 text-sm font-bold text-black shadow-md hover:shadow-lg transition-all duration-200">
                      Launch Follow-up Sequence
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                </div>

                {/* Content Tip Card */}
                <div className="bg-gradient-to-br from-lime-10 via-lime-25 to-lime-50 border border-lime-200/70 p-6 rounded-3xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-lime-700 font-extrabold text-xs bg-lime-50 rounded-full w-fit px-3.5 py-1 uppercase tracking-wider">
                      <Sparkles size={14} className="fill-lime-500 text-lime-600" />
                      Content Tip
                    </div>

                    <blockquote className="mt-6 text-base italic font-bold text-gray-700 leading-relaxed">
                      "Shorten your first message by <span className="text-lime-600 font-black">20%</span> for better results. SaaS Founders respond best to brevity."
                    </blockquote>
                  </div>

                  {/* Profile strength progress bar */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      <span>Profile Strength</span>
                      <span className="text-lime-600 font-extrabold">92%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-lime-600 h-full rounded-full transition-all duration-500" style={{ width: "92%" }}></div>
                    </div>
                  </div>

                </div>

              </section>

              {/* Chart & Health Grid */}
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Performance Chart Card */}
                <div className="lg:col-span-2 bg-white border border-gray-200/80 p-6 rounded-3xl shadow-sm">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <h3 className="font-extrabold text-gray-900">LinkedIn Growth Performance</h3>
                    <div className="flex gap-4 text-xs font-bold">
                      <span className="flex items-center gap-1.5 text-gray-500">
                        <span className="w-2.5 h-2.5 rounded-full bg-lime-500"></span> Leads
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-500">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> Replies
                      </span>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="mt-6 h-48 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 600 180" preserveAspectRatio="none">
                      {/* Grid Lines */}
                      <line x1="0" y1="30" x2="600" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="80" x2="600" y2="80" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="130" x2="600" y2="130" stroke="#f1f5f9" strokeWidth="1" />

                      {/* Area Fill for Leads (Lime) */}
                      <path
                        d="M 0 160 C 50 140, 100 110, 150 110 C 200 110, 250 80, 300 90 C 350 100, 400 60, 450 50 C 500 40, 550 70, 600 60 L 600 170 L 0 170 Z"
                        fill="url(#limeGradient)"
                        opacity="0.1"
                      />

                      {/* Line Path for Leads (Lime) */}
                      <path
                        d="M 0 160 C 50 140, 100 110, 150 110 C 200 110, 250 80, 300 90 C 350 100, 400 60, 450 50 C 500 40, 550 70, 600 60"
                        fill="none"
                        stroke="#84cc16"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Line Path for Replies (Indigo) */}
                      <path
                        d="M 0 170 C 55 160, 105 130, 155 140 C 205 150, 255 110, 305 120 C 355 130, 405 90, 455 80 C 505 70, 555 100, 600 90"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        opacity="0.8"
                      />

                      {/* Data Nodes */}
                      <circle cx="150" cy="110" r="5" fill="#84cc16" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="300" cy="90" r="5" fill="#84cc16" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="450" cy="50" r="5" fill="#84cc16" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="600" cy="60" r="5" fill="#84cc16" stroke="#ffffff" strokeWidth="1.5" />

                      {/* Gradients definitions */}
                      <defs>
                        <linearGradient id="limeGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#a3e635" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Chart X Axis Labels */}
                    <div className="flex justify-between text-[11px] font-bold text-gray-400 mt-2 px-1">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>

                {/* Account Health Card */}
                <div className="bg-white border border-gray-200/80 p-6 rounded-3xl shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-gray-900 pb-4 border-b border-gray-100">Account Health</h3>

                    <div className="space-y-4 mt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-500">Active Accounts</span>
                        <span className="flex items-center gap-1.5 text-[10px] font-extrabold text-lime-700 bg-lime-50 border border-lime-100 px-2.5 py-0.5 rounded-full">
                          HEALTHY
                        </span>
                      </div>
                      <hr></hr>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-500">Warnings</span>
                        <span className="flex items-center gap-1.5 text-[10px] font-extrabold text-rose-700 bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-full animate-pulse">
                          ALERT
                        </span>
                      </div>
                      <hr></hr>
                    </div>
                  </div>

                  {/* Usage limit bar */}
                  <div className="pt-6 border-t border-gray-100 mt-6">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      <span>Usage Limit</span>
                      <span className="text-lime-600 font-extrabold">78%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-lime-400 to-lime-500 h-full rounded-full transition-all duration-500" style={{ width: "78%" }}></div>
                    </div>
                  </div>

                </div>

              </section>

            </div>

          </main>

        </div>

      </div>
    </div>
  );
}
