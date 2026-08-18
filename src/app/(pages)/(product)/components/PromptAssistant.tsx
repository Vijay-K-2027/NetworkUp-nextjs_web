"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Send } from "lucide-react";

const models = [
    {
        name: "ChatGPT",
        icon: "/chatgpt-icon.svg",
        url: "https://chatgpt.com/",
        prompt: "How can I integrate ChatGPT to generate hyper-personalized LinkedIn connection notes based on a lead's recent posts?"
    },
    {
        name: "Claude",
        icon: "/claude-ai-icon.svg",
        url: "https://claude.ai/",
        prompt: "How can Claude's deep reasoning analyze complete LinkedIn conversation histories to suggest optimal follow-up timings?"
    },
    {
        name: "Grok",
        icon: "/grok-icon.svg",
        url: "https://grok.com/",
        prompt: "How can Grok utilize real-time social intent signals from X/Twitter to automatically trigger a NetworkUp outreach campaign?"
    },
    {
        name: "Gemini",
        icon: "/google-gemini-icon.svg",
        url: "https://gemini.google.com/",
        prompt: "How can Gemini's multimodal capabilities scan both a prospect's profile and their company website to write highly relevant icebreakers?"
    },
    {
        name: "Perplexity",
        icon: "/perplexity-ai-icon.svg",
        url: "https://www.perplexity.ai/",
        prompt: "How can Perplexity's search engine automatically enrich lead profiles with their company's latest funding or product launch news?"
    },
    {
        name: "NotebookLM",
        icon: "/notebook-lm-dark.svg",
        url: "https://notebooklm.google.com/",
        prompt: "How can I upload my historical campaign reports into NotebookLM to generate custom-tailored campaign sequences?"
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
    const [prompt, setPrompt] = useState<string>(`Try: "Explain how NetworkUp.io automates LinkedIn outreach campaigns"`);
    const [selectedModel, setSelectedModel] = useState<string>("ChatGPT");
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const performRedirection = (modelName: string, promptText: string) => {
        const model = models.find(m => m.name === modelName) || models[0];

        // Determine the base URL
        let redirectUrl = model.url;
        if (model.name === "ChatGPT") {
            redirectUrl = `${model.url}?q=${encodeURIComponent(promptText)}`;
        } else if (model.name === "Perplexity") {
            redirectUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(promptText)}`;
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
        setPrompt(model.prompt);
        setSelectedModel(model.name);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);

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
                document.execCommand("copy");
                document.body.removeChild(textArea);
            } catch (err) {
                console.error("Fallback copy failed: ", err);
            }
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(model.prompt).catch(() => {
                fallbackCopy(model.prompt);
            });
        } else {
            fallbackCopy(model.prompt);
        }

        // Trigger redirection
        performRedirection(model.name, model.prompt);
    };

    const handleClick = (promptText: string) => {
        setPrompt(promptText);
    };

    const handleSend = () => {
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
            </div>
        </section>
    );
}
