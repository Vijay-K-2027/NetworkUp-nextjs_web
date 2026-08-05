import { useState, useRef, useEffect } from "react";
import { Send, Paperclip, ChevronRight, X } from "lucide-react";

// Mock WebSocket implementation that behaves exactly like standard browser WebSockets
class MockWebSocket {
    url: string;
    onopen: (() => void) | null = null;
    onmessage: ((event: { data: string }) => void) | null = null;
    onclose: (() => void) | null = null;
    readyState: number = 0; // CONNECTING
    private timer: NodeJS.Timeout | null = null;

    constructor(url: string) {
        this.url = url;
        // Simulate networking delay for connection
        this.timer = setTimeout(() => {
            this.readyState = 1; // OPEN
            if (this.onopen) this.onopen();
        }, 1000);
    }

    send(data: string) {
        if (this.readyState !== 1) return;
        const parsed = JSON.parse(data);
        if (parsed.type === "message") {
            const userMsg = parsed.content;
            
            // Mock server reply delay
            setTimeout(() => {
                let replyText = "Thanks for reaching out! A support representative will get back to you shortly.";
                const lower = userMsg.toLowerCase();
                
                if (lower.includes("campaign")) {
                    replyText = "Creating a campaign takes a few steps:\n\n1. Go to Campaign Builder\n2. Click New Campaign\n3. Import your lead list.";
                } else if (lower.includes("account") || lower.includes("linkedin")) {
                    replyText = "Navigate to Settings → LinkedIn Accounts and select Connect Account.\n\n🔒 Secure Sign-in Required.";
                } else if (lower.includes("billing") || lower.includes("subscription") || lower.includes("pricing")) {
                    replyText = "We offer flexible monthly and annual plans. You can upgrade, downgrade, or manage invoices in your billing portal.";
                }

                if (this.onmessage) {
                    this.onmessage({
                        data: JSON.stringify({
                            type: "reply",
                            content: replyText,
                            timestamp: new Date().toISOString()
                        })
                    });
                }
            }, 1200);
        }
    }

    close() {
        if (this.timer) clearTimeout(this.timer);
        this.readyState = 3; // CLOSED
        if (this.onclose) this.onclose();
    }
}

interface ChatMessage {
    id: number;
    sender: "system" | "user";
    text: string;
    time?: string;
}

interface MessageProps {
    onClose?: () => void;
}

export default function Message({ onClose }: MessageProps) {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: 1, sender: "system", text: "Hi there! 👋" },
        { id: 2, sender: "system", text: "Ask us anything or share your feedback." },
        { id: 3, sender: "system", text: "How can we help?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [socketStatus, setSocketStatus] = useState<"connecting" | "connected" | "disconnected">("connecting");
    
    const socketRef = useRef<MockWebSocket | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // WebSocket initialization
    useEffect(() => {
        const ws = new MockWebSocket("wss://api.networkup.io/ws/chat");
        socketRef.current = ws;

        ws.onopen = () => {
            setSocketStatus("connected");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "reply") {
                setIsTyping(false);
                const systemMsg: ChatMessage = {
                    id: Date.now(),
                    sender: "system",
                    text: data.content
                };
                setMessages(prev => [...prev, systemMsg]);
            }
        };

        ws.onclose = () => {
            setSocketStatus("disconnected");
        };

        return () => {
            ws.close();
        };
    }, []);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const userMsg: ChatMessage = {
            id: Date.now(),
            sender: "user",
            text: text,
            time: currentTime
        };

        // Render user message instantly
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        
        // Show typing indicator
        setIsTyping(true);

        // Send via WebSocket connection
        if (socketRef.current && socketRef.current.readyState === 1) {
            socketRef.current.send(JSON.stringify({
                type: "message",
                content: text
            }));
        } else {
            // Fallback if socket is not ready yet
            setTimeout(() => {
                setIsTyping(false);
                const systemMsg: ChatMessage = {
                    id: Date.now() + 1,
                    sender: "system",
                    text: "Connection is currently offline. Please try again in a few seconds."
                };
                setMessages(prev => [...prev, systemMsg]);
            }, 1000);
        }
    }

    const suggestions = [
        "How do I connect a new LinkedIn account?",
        "How do I create a new campaign?",
        "How does billing and subscription work?"
    ];

    return (
        <>
            <header className="mx-auto h-[50px] w-[300px] rounded-t-2xl px-4 pt-4 flex flex-row items-center justify-between bg-[#02140b]">
                <div className="flex flex-row items-center justify-between w-full pb-2 border-b border-white/5">
                    <h2 className="font-bold text-white text-sm text-left pl-2 flex items-center gap-2">
                        Messages
                        <span 
                            className={`w-1.5 h-1.5 rounded-full ${
                                socketStatus === "connected" ? "bg-[#71EB34] animate-pulse" :
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

            <main className="bg-[#02140b] h-[550px] w-[300px] mx-auto flex flex-col justify-between overflow-hidden">
                {/* Chat Feed */}
                <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex gap-2 max-w-[85%] ${msg.sender === "user" ? "self-end flex-row-reverse" : "self-start flex-row"}`}
                        >
                            {msg.sender === "system" && (
                                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 select-none">
                                    A
                                </div>
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
                            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 select-none">
                                A
                            </div>
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
                        <button type="button" className="text-gray-400 hover:text-white cursor-pointer transition-colors">
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