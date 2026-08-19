"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, Send } from "lucide-react";

const APP_CONTEXT = `NetworkUp.io is an AI-powered LinkedIn growth and outreach automation platform created by WhiterApps.

Core Features:
1. Smart Prospecting: Real-time intent lead scoring, profile activity analysis, reply sentiment analysis, and vertical benchmarking.
2. Campaign Builder: Creates branching sequence flows (checks connection status 'If Connected', sends invites, dispatches follow-ups, and manages CRM sync with Salesforce/HubSpot).
3. Unified Inbox: Consolidates messages across all connected profiles into a single inbox.
4. AI Health Center: Continuous risk detection, campaign health tracking, and auto-warmup delivery optimizations.

Workflows Supported: Custom outreach tools tailored for Sales Teams, Recruitment Teams, and Lead Gen Agencies.

LinkedIn Security, Regulations & Policies:
NetworkUp.io  strictly complies with LinkedIn's terms of service and security measures to ensure account safety:
- Connection Limits: Every connected LinkedIn account gets a limit of maximum 100 connection requests sent per week. Every single account connected adheres to this limit, and there is no way to override or increase it. Users can set their account limits lower if they'd like.
- Action Limits: Every connected account has a daily limit of 50 actions. An action constitutes any actionable block added to a campaign (e.g., send message, view profile, and send connection request). If any account reaches this daily limit, it is frozen automatically and will reset ready for use the following day.
- Static Proxy & Location Pinning: Since LinkedIn tracks the IP address and approximate location of logins to check for suspicious activity, NetworkUp.io session-hosts each account using a dedicated, stable resident proxy IP matching the user's chosen location. This proxy IP never changes or rotates, preventing unusual activity warnings and maintaining a secure, stable connection.`;

const UNIFIED_PROMPT = "Provide a comprehensive explanation of NetworkUp.io , its core features, who it is built for (target audience), a quick manual on how to use it, and how it ensures complete account safety and policy compliance with LinkedIn regulations (specifically connection limits, daily action freezes, and residential static proxy location pinning).";

const models = [
    {
        name: "ChatGPT",
        icon: "/chatgpt-icon.svg",
        url: "https://chatgpt.com/",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "Claude",
        icon: "/claude-ai-icon.svg",
        url: "https://claude.ai/",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "Grok",
        icon: "/grok-icon.svg",
        url: "https://grok.com/",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "Gemini",
        icon: "/google-gemini-icon.svg",
        url: "https://gemini.google.com/",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "Perplexity",
        icon: "/perplexity-ai-icon.svg",
        url: "https://www.perplexity.ai/",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "NotebookLM",
        icon: "/notebook-lm-dark.svg",
        url: "https://gemini.google.com/notebooks/create",
        prompt: UNIFIED_PROMPT
    }
];

const placeholders: Record<string, string> = {
    "ChatGPT": "What do you want to know??",
    "Claude": "Ask Claude",
    "Grok": "Ask Anything",
    "Gemini": "Ask Gemini",
    "Perplexity": "Ask Anything",
    "NotebookLM": "Ask NotebookLM"
};

const popularPrompts = [
    "How does smart prospecting work?",
    "What makes NetworkUp.io safe?",
    "Integrations supported",
    "Explain campaign analytics"
];

export default function PromptAssistant() {
    const [prompt, setPrompt] = useState<string>(UNIFIED_PROMPT);
    const [selectedModel, setSelectedModel] = useState<string>("ChatGPT");
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [showInstructionModal, setShowInstructionModal] = useState<boolean>(false);
    const [modalModelName, setModalModelName] = useState<string>("");
    const [modalPromptText, setModalPromptText] = useState<string>("");

    const performRedirection = (modelName: string, promptText: string) => {
        const model = models.find(m => m.name === modelName) || models[0];

        // Build the combined prompt with application context prepended
        const fullPrompt = `${APP_CONTEXT}\n\nQuestion: ${promptText}`;

        // Determine the base URL
        let redirectUrl = model.url;
        if (model.name === "ChatGPT") {
            redirectUrl = `${model.url}?q=${encodeURIComponent(fullPrompt)}`;
        } else if (model.name === "Perplexity") {
            redirectUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(fullPrompt)}`;
        }

        // Open the window
        const newWindow = window.open(redirectUrl, "_blank", "noopener,noreferrer");

        // Attempt DOM injection in case of web security disabled or local extension contexts
        if (newWindow) {
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                if (attempts > 30 || !newWindow || newWindow.closed) {
                    clearInterval(interval);
                    return;
                }
                try {
                    const doc = newWindow.document;
                    if (doc) {
                        const inputs = doc.querySelectorAll("textarea, input");
                        let found = false;
                        inputs.forEach((inputEl) => {
                            const placeholder = inputEl.getAttribute("placeholder") || "";
                            const pLower = placeholder.toLowerCase();
                            if (
                                pLower.includes("ask anything") ||
                                pLower.includes("ask gemini") ||
                                pLower.includes("what do you want to know") ||
                                pLower.includes("ask claude") ||
                                pLower.includes("ask notebooklm") ||
                                pLower.includes("type a message")
                            ) {
                                (inputEl as HTMLTextAreaElement | HTMLInputElement).value = promptText;
                                inputEl.dispatchEvent(new Event("input", { bubbles: true }));
                                found = true;
                            }
                        });
                        if (found) {
                            clearInterval(interval);
                        }
                    }
                } catch (e) {
                }
            }, 500);
        }
    };

    const handleModelClick = (model: typeof models[number], index: number) => {
        console.log(`[PromptAssistant] 🎯 Model clicked: ${model.name}`);
        console.log(`[PromptAssistant] 📋 Prompt copy initiated: "${model.prompt}"`);

        setPrompt(model.prompt);
        setSelectedModel(model.name);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);

        setModalModelName(model.name);
        setModalPromptText(model.prompt);
        setShowInstructionModal(true);

        if (model.name === "NotebookLM") {
            setToastMessage("We need you to sign in to Gemini to redirect to NotebookLM.");
        } else if (model.name === "Claude") {
            setToastMessage("We need you to sign in to Claude to redirect to Claude.");
        } else {
            setToastMessage(`Copied prompt for ${model.name}! Paste it (Ctrl + V) in the new tab.`);
        }
        setTimeout(() => setToastMessage(null), 4000);

        const fullPrompt = `${APP_CONTEXT}\n\nQuestion: ${model.prompt}`;

        // Copy prompt text to system clipboard with robust fallback
        const fallbackCopy = (text: string) => {
            try {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.opacity = "0";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                const success = document.execCommand("copy");
                document.body.removeChild(textArea);
                if (success) {
                    console.log("[PromptAssistant] ✅ Successfully copied to clipboard using fallbackCopy method.");
                } else {
                    console.warn("[PromptAssistant] ❌ Fallback copy command returned false.");
                }
            } catch (err) {
                console.error("[PromptAssistant] ❌ Fallback copy failed with exception: ", err);
            }
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(fullPrompt)
                .then(() => {
                    console.log("[PromptAssistant] ✅ Successfully copied to clipboard using navigator.clipboard.");
                })
                .catch((err) => {
                    console.warn("[PromptAssistant] ⚠️ navigator.clipboard failed, attempting fallbackCopy. Error:", err);
                    fallbackCopy(fullPrompt);
                });
        } else {
            console.log("[PromptAssistant] ⚠️ navigator.clipboard API not available, using fallbackCopy.");
            fallbackCopy(fullPrompt);
        }

        // Trigger redirection
        console.log(`[PromptAssistant] 🚀 Redirecting user to ${model.name}...`);
        performRedirection(model.name, model.prompt);
    };

    const handleClick = (promptText: string) => {
        setPrompt(promptText);
    };

    const handleSend = () => {
        const fullPrompt = `${APP_CONTEXT}\n\nQuestion: ${prompt}`;

        // Copy the current prompt text to system clipboard
        const fallbackCopy = (text: string) => {
            try {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.opacity = "0";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
            } catch (err) {
                console.error("[PromptAssistant] ❌ Fallback copy failed with exception: ", err);
            }
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(fullPrompt).catch(() => {
                fallbackCopy(fullPrompt);
            });
        } else {
            fallbackCopy(fullPrompt);
        }

        setModalModelName(selectedModel);
        setModalPromptText(prompt);
        setShowInstructionModal(true);

        setToastMessage(`Copied custom prompt! Paste it (Ctrl + V) in the new tab.`);
        setTimeout(() => setToastMessage(null), 4000);

        performRedirection(selectedModel, prompt);
    };

    return (
        <section className="w-full bg-gradient-to-r from-[#002800] to-[#003000] text-white overflow-hidden border-b border-zinc-800/40">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row items-stretch">

                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:pl-20 lg:pr-10 py-12 flex flex-col justify-center">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-lime-500/10 text-lime-400 text-xs font-bold border border-lime-500/20 tracking-wide mb-6 w-fit">
                            <span><Sparkles size={12} /></span>
                            <span>AI Prompt Assistant</span>
                        </div>

                        <h3 className="text-4xl sm:text-5xl tracking-tight text-white mb-6">
                            Ask anything about<br />
                            <span className="text-[#a3e635]">NetworkUp.io</span>
                        </h3>

                        <p className="text-[#feeae0]/70 text-lg tracking-wider leading-relaxed max-w-xl mb-12">
                            Get instant answers, features, use cases, and best practices using your favorite AI models.
                        </p>

                        {/* Model Logos */}
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-4">
                            {models.map((model, index) => {
                                const Icon = model.icon;
                                const isActive = selectedModel === model.name;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        onClick={() => handleModelClick(model, index)}
                                        className={`flex flex-col w-20 items-center rounded-2xl gap-2 p-2 transition-all cursor-pointer group ${isActive ? "bg-white/[0.08] shadow-md border border-white/[0.08]" : "hover:bg-white/[0.04] border border-transparent"}`}
                                    >
                                        <div className={`flex h-13 w-13 items-center justify-center rounded-xl transition-all ${isActive ? "bg-lime-500/20 border border-lime-500/35" : "bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.1]"}`}>
                                            <div className="h-12 w-12 rounded-xl px-1 flex items-center justify-center">
                                                <Image
                                                    src={Icon}
                                                    alt={model.name}
                                                    height={40}
                                                    width={40}
                                                />
                                            </div>
                                        </div>
                                        <span className={`text-[10px] font-semibold tracking-wide transition-all duration-300 ${copiedIndex === index ? "text-[#a3e635] scale-105" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                                            {copiedIndex === index ? "Copied!" : model.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full bg-[#031d10] border-t lg:border-t-0 lg:border-l border-white/[0.06] p-8 sm:p-12 lg:p-16 shadow-[5px_5px_50px_12px_rgba(26,36,33,0.8)] flex flex-col jitems-center justify-center"
                        >
                            <div>
                                {/* Search Prompt Box */}
                                <div className="relative flex items-center bg-[#356221]/30 border border-white/[0.08] rounded-2xl p-4 gap-3 shadow-inner">
                                    <svg
                                        className="w-5 h-5 text-[#feeae0]/70 shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.3-4.3" />
                                    </svg>
                                    <textarea
                                        rows={2}
                                        className="text-zinc-200 text-sm leading-[1.4] flex-1 min-w-0 pl-1 pr-12 focus:ring-0 focus:outline-none bg-transparent resize-none font-medium"
                                        value={prompt}
                                        placeholder={placeholders[selectedModel] || "Ask Anything"}
                                        onChange={(e) => setPrompt(e.target.value)}
                                    />
                                    <button
                                        onClick={handleSend}
                                        className="absolute right-3 bg-[#a3e635] text-[#031d10] h-10 w-10 flex items-center justify-center rounded-xl shadow-[0_4px_12px_rgba(163,230,53,0.3)] transition-transform duration-200 hover:scale-105 cursor-pointer"
                                    >
                                        <Send size={15} strokeWidth={3} />
                                    </button>
                                </div>
                            </div>

                            {/* Popular Prompts */}
                            <div className="mt-8">
                                <h4 className="text-sm font-bold text-[#feeae0]/70 tracking-wide mb-4">
                                    Popular prompts
                                </h4>
                                <div className="flex flex-wrap gap-2 w-full sm:max-w-[500px]">
                                    {popularPrompts.map((promptText, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ x: 4, scale: 1.01 }}
                                            onClick={() => handleClick(promptText)}
                                            className="text-xs sm:text-sm text-[#feeae0]/70 bg-white/[0.03] border border-white/[0.06] rounded-full px-5 py-2 hover:bg-white/[0.06] hover:border-lime-500/20 transition-all duration-200 cursor-pointer flex items-center justify-between max-w-full text-left font-semibold"
                                        >
                                            <span className="font-medium tracking-wide">{promptText}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Toast Notification */}
                <AnimatePresence>
                    {toastMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#6CB531] border border-[#a3e635]/30 text-[#031d10] font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5"
                        >
                            <span><Sparkles size={16} /></span>
                            <span>{toastMessage}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Modal Dialog */}
                <AnimatePresence>
                    {showInstructionModal && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                                onClick={() => setShowInstructionModal(false)}
                            />
                            {/* Modal Window */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] w-full max-w-md bg-[#0c240f] border border-white/[0.08] p-6 rounded-3xl shadow-2xl text-white select-none text-center"
                            >
                                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/[0.08]">
                                    <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/[0.06] flex items-center justify-center p-1 border border-white/[0.08]">
                                        <Image
                                            src={models.find(m => m.name === modalModelName)?.icon || "/Logo.svg"}
                                            alt={modalModelName}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <h3 className="text-base font-bold">Redirection Helper</h3>
                                </div>

                                {/* Body */}
                                <div className="space-y-4 text-left">
                                    {(modalModelName === "NotebookLM" || modalModelName === "Claude") ? (
                                        <>
                                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-semibold text-[#a3e635]">
                                                {modalModelName === "NotebookLM" ? "Google Gemini Sign-in Required" : "Claude Sign-in Required"}
                                            </p>
                                            <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                                                We have opened {modalModelName === "NotebookLM" ? "Gemini Notebooks" : "Claude"} in a new tab. We need you to sign in to {modalModelName === "NotebookLM" ? "Gemini" : "Claude"} to redirect to {modalModelName}.
                                            </p>
                                            <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                                                Once signed in, you can paste your copied prompt directly into the input area:
                                            </p>
                                            <div className="bg-[#032a0d]/50 border border-lime-500/20 rounded-xl p-3.5 flex flex-col items-center justify-center gap-1">
                                                <span className="text-[10px] uppercase font-bold text-lime-400 tracking-wider">Paste Shortcut</span>
                                                <div className="flex gap-4 mt-1">
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-xs text-zinc-400 font-medium">Windows / Linux</span>
                                                        <kbd className="mt-1 bg-white/10 px-2 py-0.5 rounded text-xs font-bold font-mono border border-white/20">Ctrl + V</kbd>
                                                    </div>
                                                    <div className="w-px h-8 bg-white/[0.08]" />
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-xs text-zinc-400 font-medium">macOS / iOS</span>
                                                        <kbd className="mt-1 bg-white/10 px-2 py-0.5 rounded text-xs font-bold font-mono border border-white/20">Cmd + V</kbd>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (modalModelName === "ChatGPT" || modalModelName === "Perplexity") ? (
                                        <>
                                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-semibold">
                                                We have opened <span className="text-[#a3e635] font-extrabold">{modalModelName}</span> in a new tab.
                                            </p>
                                            <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                                                Since {modalModelName} supports automatic search pre-filling, your prompt has been passed through the URL. It should populate in their chat input field shortly!
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-semibold">
                                                We have copied the outreach prompt to your clipboard and opened <span className="text-[#a3e635] font-extrabold">{modalModelName}</span> in a new tab.
                                            </p>
                                            <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                                                Since {modalModelName} does not support automatic URL pre-filling, you must paste the copied prompt manually:
                                            </p>
                                            <div className="bg-[#032a0d]/50 border border-lime-500/20 rounded-xl p-3.5 flex flex-col items-center justify-center gap-1">
                                                <span className="text-[10px] uppercase font-bold text-lime-400 tracking-wider">Paste Shortcut</span>
                                                <div className="flex gap-4 mt-1">
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-xs text-zinc-400 font-medium">Windows / Linux</span>
                                                        <kbd className="mt-1 bg-white/10 px-2 py-0.5 rounded text-xs font-bold font-mono border border-white/20">Ctrl + V</kbd>
                                                    </div>
                                                    <div className="w-px h-8 bg-white/[0.08]" />
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-xs text-zinc-400 font-medium">macOS / iOS</span>
                                                        <kbd className="mt-1 bg-white/10 px-2 py-0.5 rounded text-xs font-bold font-mono border border-white/20">Cmd + V</kbd>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={() => setShowInstructionModal(false)}
                                        className="bg-[#a3e635] text-[#031d10] font-extrabold text-xs px-5 py-2.5 rounded-xl transition duration-200 hover:scale-105 cursor-pointer shadow-lg"
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
