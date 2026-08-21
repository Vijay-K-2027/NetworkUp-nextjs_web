import { useState, useRef, useEffect } from "react";
import { Send, Paperclip, ChevronRight, X } from "lucide-react";

interface ChatMessage {
    id: string;
    sender: "system" | "user";
    text: string;
    time?: string;
}

interface MessageProps {
    onClose?: () => void;
}

const DEFAULT_MESSAGES: ChatMessage[] = [
    { id: "1", sender: "system", text: "Hi there! 👋" },
    { id: "2", sender: "system", text: "Ask us anything or share your feedback." },
    { id: "3", sender: "system", text: "How can we help?" }
];

let messageCounter = 0;
const generateUniqueId = (): string => `${Date.now()}-${++messageCounter}-${Math.random().toString(36).substring(2, 9)}`;

export default function Message({ onClose }: MessageProps) {
    const [messages, setMessages] = useState<ChatMessage[]>(DEFAULT_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [socketStatus, setSocketStatus] = useState<"connecting" | "connected" | "disconnected">("connecting");
    const [isLoaded, setIsLoaded] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.name.endsWith(".txt")) {
            const systemMsg: ChatMessage = {
                id: generateUniqueId(),
                sender: "system",
                text: "Only .txt files are supported for upload."
            };
            setMessages(prev => [...prev, systemMsg]);
            return;
        }

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const userMsg: ChatMessage = {
            id: generateUniqueId(),
            sender: "user",
            text: `[Uploaded File: ${file.name}]`,
            time: currentTime
        };

        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch("https://chat.networkup.io/upload", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const data = await response.json();
            setIsTyping(false);

            if (data.success) {
                const systemMsg: ChatMessage = {
                    id: generateUniqueId(),
                    sender: "system",
                    text: `Successfully uploaded and indexed "${file.name}". Auto-analyzing document now...`
                };
                setMessages(prev => [...prev, systemMsg]);

                // Auto-submit first message to query / ask about the uploaded document
                handleSend(`Summarize the document: ${file.name}`);
            } else {
                throw new Error(data.error || "Upload failed");
            }
        } catch (error) {
            setIsTyping(false);
            const systemMsg: ChatMessage = {
                id: generateUniqueId(),
                sender: "system",
                text: "Failed to upload document. Please ensure the backend is running and try again."
            };
            setMessages(prev => [...prev, systemMsg]);
        }
    };

    const suggestions = [
        "How do I connect a new LinkedIn account?",
        "How do I create a new campaign?",
        "How does billing and subscription work?"
    ];

    return (
        <>
            <header className="mx-auto h-[50px] w-[300px] rounded-t-2xl px-5 pt-3.5 flex flex-row items-center justify-between bg-[#02140b] shrink-0">
                <div className="flex flex-row items-center justify-between w-full pb-2 border-b border-white/5">
                    <h2 className="font-bold text-white text-sm text-left pl-2 flex items-center gap-2">
                        Messages
                        <span
                            className={`w-1.5 h-1.5 rounded-full ${socketStatus === "connected" ? "bg-[#71EB34] animate-pulse" :
                                socketStatus === "connecting" ? "bg-yellow-400 animate-pulse" :
                                    "bg-red-500"
                                }`}
                            title={`Status: ${socketStatus}`}
                        />
                    </h2>
                    <button className="text-gray-400 hover:text-white transition-colors cursor-pointer mr-2" onClick={onClose}>
                        <X size={16} />
                    </button>
                </div>
            </header>

            <main className="bg-[#02140b] flex-1 w-[300px] mx-auto flex flex-col justify-between overflow-hidden">
                {/* Chat Feed */}
                <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 custom-scrollbar">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex gap-2 max-w-[85%] ${msg.sender === "user" ? "self-end flex-row-reverse" : "self-start flex-row"}`}
                        >
                            {msg.sender === "system" && (
                                <img
                                    src="/AI-black.png"
                                    alt="AI Assistant"
                                    className="w-6 h-6 rounded-l-full object-cover shrink-0 select-none"
                                />
                            )}
                            <div className="flex flex-col gap-1">
                                <div className={`p-3 rounded-2xl text-[11px] leading-relaxed text-left whitespace-pre-line ${msg.sender === "user"
                                    ? "bg-[#71EB34] text-black font-semibold rounded-tr-none"
                                    : "bg-white/10 text-white rounded-tl-none border border-white/5"
                                    }`}>
                                    {msg.text}
                                </div>
                                {msg.time && (
                                    <span className="text-[8px] text-gray-500 self-end mt-0.5">{msg.time}</span>
                                )}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-2 max-w-[85%] self-start flex-row">
                            <img
                                src="/AI-black.png"
                                alt="AI Assistant"
                                className="w-6 h-6 rounded-l-full object-cover shrink-0 select-none"
                            />
                            <div className="p-3 bg-white/10 border border-white/5 text-white rounded-2xl rounded-tl-none text-[11px] leading-relaxed">
                                <span className="animate-pulse">Typing...</span>
                            </div>
                        </div>
                    )}

                    {/* Suggestions Section */}
                    {messages.filter(m => m.sender === "user").length === 0 && !isTyping && (
                        <div className="flex flex-col gap-2 mt-4">
                            <span className="text-gray-400 text-[10px] text-left font-bold uppercase tracking-wider pl-1 mb-1">
                                + You can also ask
                            </span>
                            {suggestions.map((text, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSend(text)}
                                    className="w-full text-left bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-[10px] font-semibold text-white hover:bg-white/10 hover:border-[#71EB34]/20 transition-all flex items-center justify-between cursor-pointer"
                                >
                                    <span>{text}</span>
                                    <ChevronRight size={12} className="text-[#71EB34] shrink-0 ml-1.5" />
                                </button>
                            ))}
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
                        className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-3 py-1.5 gap-2"
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            accept=".txt"
                            style={{ display: "none" }}
                        />
                        <button
                            type="button"
                            disabled={socketStatus !== "connected"}
                            onClick={() => fileInputRef.current?.click()}
                            className="text-gray-400 hover:text-white cursor-pointer transition-colors disabled:opacity-50"
                        >
                            <Paperclip size={16} />
                        </button>
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
                            <Send size={12} />
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}