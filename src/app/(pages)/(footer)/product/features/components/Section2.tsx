"use client";

import { useState } from "react";
import { AlertTriangle, ArrowUpRight, Bell, Bot, Compass, HelpCircle, HelpCircleIcon, Inbox, LayoutDashboard, Megaphone, Search, Settings, ShieldCheck, Sparkles, UserCheck, Mail, ChevronLeft, ChevronRight, Briefcase, Landmark, ShoppingCart, GraduationCap, UserCircle2, LogOut, Rocket, PlugZap, Database, Microchip, UserSearch, ChartBar, Menu, TerminalSquare, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"
import { FaTools } from "react-icons/fa";
import { TbTemplate } from "react-icons/tb";


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

export default function Section2() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <motion.div
            className="flex flex-col items-start justify-start w-full max-w-9xl px-10 rounded-3xl shrink-0 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <Image
                src="/footer/product/feature/Dashboard.png"
                alt="Discover"
                width={1600}
                height={2000}
                className="w-full h-auto object-contain"
            />
        </motion.div>
    )
}