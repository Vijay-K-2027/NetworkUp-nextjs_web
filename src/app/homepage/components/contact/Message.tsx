import { useState, useRef, useEffect } from "react";
import {
    Send, ChevronRight, X, ArrowRight, ShieldCheck, Zap, ChevronLeft,
    Wrench, HelpCircle, CreditCard, MoreHorizontal, FileText, Settings, Mail, Headphones, Check, RefreshCw
} from "lucide-react";
import Link from "next/link";

interface ChatMessage {
    id: string;
    sender: "system" | "user";
    text: string;
    time?: string;
    customType?: "campaign" | "linkedin" | "ai" | "crm" | "safety" | "trouble" | "product_guide" | "billing_guide" | "other_help";
}

interface MessageProps {
    onClose?: () => void;
    onNavigateToHome?: () => void;
}

const DEFAULT_MESSAGES: ChatMessage[] = [
    { id: "3", sender: "system", text: "How can we help?" }
];

let messageCounter = 0;
const generateUniqueId = (): string => `${Date.now()}-${++messageCounter}-${Math.random().toString(36).substring(2, 9)}`;

export default function Message({ onClose, onNavigateToHome }: MessageProps) {
    const [messages, setMessages] = useState<ChatMessage[]>(DEFAULT_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [socketStatus, setSocketStatus] = useState<"connecting" | "connected" | "disconnected">("connecting");
    const [isLoaded, setIsLoaded] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Load messages from localStorage on mount & check expiry
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMessages = localStorage.getItem("networkup_chat_messages");
            const lastActive = localStorage.getItem("networkup_chat_last_active");

            if (savedMessages && lastActive) {
                const timeElapsed = Date.now() - parseInt(lastActive, 10);
                const fiveMinutes = 5 * 60 * 1000;

                if (timeElapsed < fiveMinutes) {
                    try {
                        const parsed = JSON.parse(savedMessages);
                        setMessages(parsed);
                    } catch (e) {
                        console.error("Failed to parse saved support messages", e);
                    }
                } else {
                    localStorage.removeItem("networkup_chat_messages");
                    localStorage.removeItem("networkup_chat_last_active");
                }
            }
            setIsLoaded(true);
        }
    }, []);

    // Sync messages to localStorage & update last active timestamp on updates (blocked until mount load concludes)
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (isLoaded) {
                localStorage.setItem("networkup_chat_messages", JSON.stringify(messages));
                localStorage.setItem("networkup_chat_last_active", Date.now().toString());
            }
        }
    }, [messages, isLoaded]);

    // Live Inactivity Check Interval (clears session if open and inactive for 5 minutes)
    useEffect(() => {
        const checkExpiry = () => {
            if (typeof window !== "undefined") {
                const lastActive = localStorage.getItem("networkup_chat_last_active");
                if (lastActive) {
                    const timeElapsed = Date.now() - parseInt(lastActive, 10);
                    const fiveMinutes = 5 * 60 * 1000;
                    if (timeElapsed >= fiveMinutes) {
                        setMessages(DEFAULT_MESSAGES);
                        localStorage.removeItem("networkup_chat_messages");
                        localStorage.removeItem("networkup_chat_last_active");
                    }
                }
            }
        };

        const intervalId = setInterval(checkExpiry, 10000); // Check every 10s
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // Live API Health Check on mount & interval polling
    useEffect(() => {
        const checkHealth = async () => {
            try {
                const response = await fetch("https://chat.networkup.io/");
                if (!response.ok) {
                    throw new Error("Offline");
                }
                const data = await response.json();
                if (data.success) {
                    setSocketStatus("connected");
                } else {
                    setSocketStatus("disconnected");
                }
            } catch (error) {
                setSocketStatus("disconnected");
            }
        };

        checkHealth();
        const intervalId = setInterval(checkHealth, 15000); // Poll every 15s

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const userMsg: ChatMessage = {
            id: generateUniqueId(),
            sender: "user",
            text: text,
            time: currentTime
        };

        // Render user message instantly
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Show typing indicator
        setIsTyping(true);

        // Detect if the sent text is one of our standard FAQ questions
        let customType: ChatMessage["customType"] = undefined;
        const normalized = text.trim().toLowerCase();

        if (normalized.includes("create a campaign") || normalized.includes("create campaign")) {
            customType = "campaign";
        } else if (normalized.includes("connect my linkedin") || normalized.includes("connect linkedin")) {
            customType = "linkedin";
        } else if (normalized.includes("personalization work") || normalized.includes("ai personalization")) {
            customType = "ai";
        } else if (normalized.includes("integrate") || normalized.includes("crm")) {
            customType = "crm";
        } else if (normalized.includes("safe") || normalized.includes("safety")) {
            customType = "safety";
        } else if (normalized.includes("something isn't working") || normalized.includes("troubleshoot")) {
            customType = "trouble";
        } else if (normalized.includes("how do the product works") || normalized.includes("product work")) {
            customType = "product_guide";
        } else if (normalized.includes("billing and subscription") || normalized.includes("billing or account")) {
            customType = "billing_guide";
        } else if (normalized === "other") {
            customType = "other_help";
        }

        if (customType) {
            // Local reply simulation for rich templates
            setTimeout(() => {
                const systemMsg: ChatMessage = {
                    id: generateUniqueId(),
                    sender: "system",
                    text: "",
                    customType,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, systemMsg]);
                setIsTyping(false);
            }, 600);
            return;
        }

        try {
            const response = await fetch("https://chat.networkup.io/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ query: text })
            });

            if (!response.ok) {
                throw new Error("Failed to reach server");
            }

            const data = await response.json();
            setIsTyping(false);

            if (data.success) {
                const systemMsg: ChatMessage = {
                    id: generateUniqueId(),
                    sender: "system",
                    text: data.response || "No response generated."
                };
                setMessages(prev => [...prev, systemMsg]);
            } else {
                throw new Error(data.error || "Failed to process query");
            }
        } catch (error) {
            setIsTyping(false);
            const systemMsg: ChatMessage = {
                id: generateUniqueId(),
                sender: "system",
                text: "Sorry, I am having trouble connecting to the network right now. Please check your connection and try again."
            };
            setMessages(prev => [...prev, systemMsg]);
        }
    };

    const renderCustomMessage = (type: ChatMessage["customType"]) => {
        if (type === "campaign") {
            return (
                <div className="flex flex-col gap-y-3.5 text-left w-full">
                    <p className="text-gray-300 text-[10px] leading-relaxed">
                        Creating a campaign only takes a few minutes. Follow these steps:
                    </p>
                    <div className="flex flex-col gap-y-2 mt-1">
                        <div className="flex items-center gap-2.5 p-2 bg-[#1f1f1f] rounded-xl">
                            <span className="bg-[#71EB34]/15 text-[#71EB34] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded">01</span>
                            <span className="text-white text-[10px] font-medium">Go to Campaign Builder</span>
                        </div>
                        <div className="flex items-center gap-2.5 p-2 bg-[#1f1f1f] rounded-xl">
                            <span className="bg-[#71EB34]/15 text-[#71EB34] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded">02</span>
                            <span className="text-white text-[10px] font-medium">Click New Campaign</span>
                        </div>
                        <div className="flex items-center gap-2.5 p-2 bg-[#1f1f1f] rounded-xl">
                            <span className="bg-[#71EB34]/15 text-[#71EB34] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded">03</span>
                            <span className="text-white text-[10px] font-medium">Import or choose your lead list</span>
                        </div>
                    </div>
                    <span className="text-[#71EB34] text-[9px] font-bold tracking-wide uppercase mt-1">
                        READY FOR LAUNCH SEQUENCE
                    </span>
                </div>
            );
        }

        if (type === "linkedin") {
            return (
                <div className="flex flex-col gap-y-3 text-left w-full">
                    <span className="text-[#71EB34] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                        🔗 QUICK SETUP
                    </span>
                    <p className="text-gray-300 text-[10px] leading-relaxed">
                        Open <span className="text-[#71EB34] font-semibold">Settings → LinkedIn Accounts</span>. Click <span className="text-[#71EB34] font-semibold underline">Connect Account</span> and follow the OAuth authorization flow.
                    </p>
                </div>
            );
        }

        if (type === "ai") {
            return (
                <div className="flex flex-col gap-y-3.5 text-left w-full">
                    <p className="text-gray-300 text-[10px] leading-relaxed">
                        Our neural engine scrapes real-time data to craft hyper-relevant hooks based on:
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                        <div className="bg-[#1f1f1f] rounded-xl p-2.5 flex flex-col items-start gap-0.5">
                            <span className="text-zinc-500 text-[7px] font-bold uppercase tracking-wider">TARGET DATA</span>
                            <span className="text-white text-[10px] font-semibold">Job Title</span>
                        </div>
                        <div className="bg-[#1f1f1f] rounded-xl p-2.5 flex flex-col items-start gap-0.5">
                            <span className="text-zinc-500 text-[7px] font-bold uppercase tracking-wider">SIGNAL</span>
                            <span className="text-white text-[10px] font-semibold">Recent Activity</span>
                        </div>
                        <div className="bg-[#1f1f1f] rounded-xl p-2.5 flex flex-col items-start gap-0.5">
                            <span className="text-zinc-500 text-[7px] font-bold uppercase tracking-wider">CONTEXT</span>
                            <span className="text-white text-[10px] font-semibold">Mutual Conn.</span>
                        </div>
                        <div className="bg-[#1f1f1f] rounded-xl p-2.5 flex flex-col items-start gap-0.5">
                            <span className="text-zinc-500 text-[7px] font-bold uppercase tracking-wider">FIRMOGRAPHIC</span>
                            <span className="text-white text-[10px] font-semibold">Company Info</span>
                        </div>
                    </div>
                </div>
            );
        }

        if (type === "crm") {
            return (
                <div className="flex flex-col gap-y-3 text-left w-full">
                    <p className="text-gray-300 text-[10px] leading-relaxed">
                        Seamlessly sync data to your workflow:
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                        <span className="bg-[#383838] text-white font-medium text-[9px] px-2 py-0.5 rounded-full">HubSpot</span>
                        <span className="bg-[#383838] text-white font-medium text-[9px] px-2 py-0.5 rounded-full">Salesforce</span>
                        <span className="bg-[#383838] text-white font-medium text-[9px] px-2 py-0.5 rounded-full">Pipedrive</span>
                        <span className="bg-[#243e12]/80 text-[#71EB34] font-semibold text-[9px] px-2 py-0.5 rounded-full">Zapier</span>
                    </div>
                    <Link href="/solutions" className="flex items-center gap-1 text-[10px] font-bold text-[#71EB34] hover:text-white cursor-pointer mt-3 transition-colors">
                        <span>Go to Integrations</span>
                        <ArrowRight size={12} className="text-[#71EB34] shrink-0 ml-1.5" />
                    </Link>
                </div>
            );
        }

        if (type === "safety") {
            return (
                <div className="flex flex-col gap-y-3.5 text-left w-full">
                    <span className="text-[#71EB34] text-[10px] font-bold tracking-wide uppercase flex items-center gap-1">
                        <ShieldCheck size={14} className="text-[#71EB34]" /> PROTOCOL SECURED
                    </span>
                    <p className="text-gray-300 text-[10px] leading-relaxed">
                        We maintain account health via:
                    </p>
                    <ul className="flex flex-col gap-y-2.5 mt-1.5 pl-0.5">
                        <li className="flex items-center gap-2 text-[10px] text-white text-left">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#71EB34] shrink-0"></span>
                            Human-like activity patterns
                        </li>
                        <li className="flex items-center gap-2 text-[10px] text-white text-left">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#71EB34] shrink-0"></span>
                            Randomized message delays
                        </li>
                        <li className="flex items-center gap-2 text-[10px] text-white text-left">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#71EB34] shrink-0"></span>
                            Safety limit thresholds
                        </li>
                    </ul>
                </div>
            );
        }

        if (type === "trouble") {
            return (
                <div className="flex flex-col gap-y-3.5 text-left w-full">
                    <span className="text-[#71EB34] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 border-b border-white/5 pb-2">
                        <Wrench size={12} /> Something isn't working
                    </span>
                    <p className="text-gray-300 text-[10px] leading-relaxed">
                        Sorry about that! Let's get it fixed. Here are a few things you can try:
                    </p>
                    <div className="flex flex-col gap-y-2 mt-1 pl-0.5">
                        {[
                            "Refresh the page and try again.",
                            "Clear your browser cache and cookies.",
                            "Make sure you're using the latest version of your browser.",
                            "Check our status page for any ongoing issues."
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-left">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#71EB34]/15 border border-[#71EB34]/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check size={9} className="text-[#71EB34]" />
                                </div>
                                <span className="text-gray-300 text-[10px] leading-snug">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl mt-3 text-left">
                        <Headphones size={14} className="text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex flex-col items-start leading-tight">
                            <span className="text-gray-400 text-[9px]">Still stuck? Our support team is here to help.</span>
                            <button
                                onClick={() => handleSend("I need to speak to support")}
                                className="text-[#71EB34] hover:text-white text-[10px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer mt-1"
                            >
                                Contact Support <ArrowRight size={10} />
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        if (type === "product_guide") {
            return (
                <div className="flex flex-col gap-y-3 text-left w-full">
                    <span className="text-[#71EB34] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 border-b border-white/5 pb-2">
                        <HelpCircle size={12} /> How do the product works?
                    </span>
                    <p className="text-gray-300 text-[10px] leading-relaxed">
                        We're here to help! Browse our documentation to learn how NetworkUp works and how to get the most out of it.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <Link
                            href="/product/features"
                            className="bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold py-2 px-3 rounded-xl border border-white/5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                            <FileText size={12} className="text-[#71EB34]" />
                            Product Overview
                        </Link>
                        <Link
                            href="/solutions"
                            className="bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold py-2 px-3 rounded-xl border border-white/5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                            <Zap size={12} className="text-[#71EB34]" />
                            How It Works
                        </Link>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl mt-3 text-left">
                        <HelpCircle size={14} className="text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex flex-col items-start leading-tight">
                            <span className="text-gray-400 text-[9px]">Can't find what you're looking for?</span>
                            <button
                                onClick={() => handleSend("I want to ask a question")}
                                className="text-[#71EB34] hover:text-white text-[10px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer mt-1"
                            >
                                Ask a Question <ArrowRight size={10} />
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        if (type === "billing_guide") {
            return (
                <div className="flex flex-col gap-y-3.5 text-left w-full">
                    <span className="text-[#71EB34] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 border-b border-white/5 pb-2">
                        <CreditCard size={12} /> Billing or account
                    </span>
                    <p className="text-gray-300 text-[10px] leading-relaxed">
                        Manage your subscription, invoices, payment methods, and account settings.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <Link
                            href="/subscription"
                            className="bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold py-2 px-3 rounded-xl border border-white/5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                            <FileText size={12} className="text-[#71EB34]" />
                            View Invoices
                        </Link>
                        <Link
                            href="/subscription"
                            className="bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold py-2 px-3 rounded-xl border border-white/5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                            <CreditCard size={12} className="text-[#71EB34]" />
                            Payment Methods
                        </Link>
                        <Link
                            href="/subscription"
                            className="bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold py-2 px-3 rounded-xl border border-white/5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                            <RefreshCw size={12} className="text-[#71EB34]" />
                            Manage Sub.
                        </Link>
                        <Link
                            href="/login"
                            className="bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold py-2 px-3 rounded-xl border border-white/5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                            <Settings size={12} className="text-[#71EB34]" />
                            Account Settings
                        </Link>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl mt-3 text-left">
                        <Mail size={14} className="text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex flex-col items-start leading-tight">
                            <span className="text-gray-400 text-[9px]">Still need help? Our billing team is ready.</span>
                            <button
                                onClick={() => handleSend("I need billing support")}
                                className="text-[#71EB34] hover:text-white text-[10px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer mt-1"
                            >
                                Contact Billing Support <ArrowRight size={10} />
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        if (type === "other_help") {
            return (
                <span className="text-white text-[11px] leading-relaxed">
                    What do you need help with?
                </span>
            );
        }

        return null;
    };

    const suggestions = [
        { text: "Something isn't working (error, crash, feature broken)", icon: Wrench },
        { text: "How do the product works?", icon: HelpCircle },
        { text: "How does billing and subscription work?", icon: CreditCard },
        { text: "Other", icon: MoreHorizontal }
    ];

    return (
        <>
            <header className="mx-auto h-[50px] w-[300px] rounded-t-2xl px-5 pt-3.5 flex flex-row items-center justify-center bg-[#02140b] shrink-0 relative">
                <h2 className="font-bold text-white text-sm text-center">
                    Messages
                </h2>
                <button className="text-gray-400 hover:text-white transition-colors cursor-pointer absolute right-5 top-3.5" onClick={onClose}>
                    <X size={16} />
                </button>
            </header>

            <main className="bg-[#02140b] flex-1 w-[300px] mx-auto flex flex-col justify-between overflow-hidden">
                {/* Chat Feed */}
                <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 custom-scrollbar">
                    {/* Greeting Banner */}
                    <div className="flex flex-col items-center justify-center text-center mt-3 mb-6 shrink-0 relative px-4 w-full select-none">
                        <button
                            onClick={onNavigateToHome}
                            className="absolute left-2 top-0.5 text-white/70 hover:text-white transition-colors cursor-pointer"
                        >
                            <ChevronLeft size={16} strokeWidth={2.5} />
                        </button>
                        <h1 className="text-white text-md sm:text-lg font-bold">Hi there! 👋</h1>
                        <p className="text-white/60 text-[10px] sm:text-xs mt-1">Ask us anything or share your feedback.</p>
                    </div>
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex gap-2 ${msg.customType ? "max-w-full w-full" : "max-w-[85%]"} ${msg.sender === "user" ? "self-end flex-row-reverse" : "self-start flex-row"}`}
                        >
                            {msg.sender === "system" && !msg.customType && (
                                <img
                                    src="/chatbot/AI-black.png"
                                    alt="AI Assistant"
                                    className="w-8 h-8 m-2 rounded-l-full object-cover shrink-0 select-none"
                                />
                            )}
                            <div className={`flex flex-col gap-1 ${msg.customType ? "w-full" : ""}`}>
                                <div className={`p-4 rounded-2xl text-[11px] leading-relaxed text-left whitespace-pre-line ${msg.sender === "user"
                                    ? "bg-[#8ee51d] text-black font-bold rounded-tr-none w-fit self-end px-4 py-2.5 text-xs shadow-sm"
                                    : msg.customType
                                        ? "bg-[#282828] text-white rounded-2xl border border-white/5 w-full shadow-md"
                                        : "bg-white/10 text-white rounded-tl-none border border-white/5 w-full"
                                    }`}>
                                    {msg.customType ? (
                                        renderCustomMessage(msg.customType)
                                    ) : (
                                        msg.text
                                    )}
                                </div>
                                {msg.time && (
                                    <span className="text-[8px] text-gray-500 self-end mt-0.5 flex items-center gap-1">
                                        {msg.time}
                                        {msg.sender === "user" && (
                                            <span className="text-[#8ee51d] font-bold">✓</span>
                                        )}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-2 max-w-[85%] self-start flex-row">
                            <img
                                src="/chatbot/AI-black.png"
                                alt="AI Assistant"
                                className="w-8 h-8 m-2 rounded-l-full object-cover shrink-0 select-none"
                            />
                            <div className="p-3 bg-white/10 border border-white/5 text-white rounded-2xl rounded-tl-none text-[11px] leading-relaxed">
                                <span className="animate-pulse">Typing...</span>
                            </div>
                        </div>
                    )}

                    {/* Suggestions Section */}
                    {messages.filter(m => m.sender === "user").length === 0 && !isTyping && (
                        <div className="flex flex-col gap-2.5 mt-4">
                            <span className="text-[#71EB34] text-[10px] text-left font-bold uppercase tracking-wider pl-1 mb-1">
                                + You can also ask
                            </span>
                            {suggestions.map((item, idx) => {
                                const SuggestionIcon = item.icon;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSend(item.text)}
                                        className="w-full text-left bg-[#71EB34]/5 border border-[#71EB34]/30 rounded-2xl px-4 py-3.5 text-[11px] font-bold text-white hover:bg-white/10 hover:border-[#71EB34]/60 transition-all flex items-center justify-between cursor-pointer leading-snug shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <SuggestionIcon size={16} className="text-[#71EB34] shrink-0" />
                                            <span>{item.text}</span>
                                        </div>
                                        <ChevronRight size={14} className="text-[#71EB34] shrink-0 ml-2" />
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Bar */}
                <div className="p-3 border-t border-white/5 bg-[#02140b] shrink-0">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSend(inputValue);
                        }}
                        className="flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5 gap-2"
                    >
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={socketStatus === "connected" ? "Type your message..." : "Connecting to chat..."}
                            disabled={socketStatus !== "connected"}
                            className="bg-transparent text-white text-xs placeholder-white/40 py-1 w-full focus:outline-none text-left disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={socketStatus !== "connected"}
                            className="bg-[#71EB34] text-black h-7 w-7 flex items-center justify-center rounded-xl transition-transform hover:scale-105 shrink-0 cursor-pointer disabled:opacity-50 disabled:hover:scale-100"
                        >
                            <Send size={12} fill="black" />
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}