"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, Send } from "lucide-react";

const APP_CONTEXT = `NetworkUp.io is an enterprise-grade, 100% cloud-native LinkedIn outreach automation and B2B lead generation platform created by WhiterApps. It operates entirely in the cloud without browser extensions, ensuring zero local downtime, 24/7 headless execution, and dedicated residential proxy pinning.

Core Product Modules:
1. AI Lead Finder (/product/lead): B2B prospect discovery with ICP fit scoring, buying signal detection (funding, executive hiring), and 1-click campaign enrollment.
2. Outreach Automation (/product/outreach): Personalized connection requests, trigger-based follow-up cadences that auto-pause on reply, and smart warmup pacing.
3. Visual Campaign Builder (/product/campaigns): Drag-and-drop workflow canvas with conditional branching (If Connected, If Replied, If Viewed), multi-sender account pooling, and A/B copy testing.
4. Convobox Unified Inbox (/product/convobox): Consolidates messages across all connected LinkedIn accounts into one shared cockpit with AI sentiment tagging (Interested, Not Now, Wrong Contact, Objection), collision prevention, and 1-click CRM sync (HubSpot, Salesforce, Pipedrive).
5. AI Features & Intelligence (/ai-features): Context-aware message writer, predictive campaign simulator, and 24/7 campaign health risk monitoring.

Solutions by Persona (/solutions/*):
- Sales Teams: Multi-touch automated sequences, global lead deduplication, and pipeline tracking.
- Lead Gen Agencies: Multi-client isolated workspaces, client sender pooling, and white-label reporting.
- Recruiters: Candidate sourcing without InMail costs and 2-way ATS sync.
- Startups & Founders: Founder-led outbound sales, multi-seat founder pooling, and rapid ICP validation.
- Marketing Teams: ABM account targeting on LinkedIn aligned with CRM attribution.

LinkedIn Safety, Compliance & Proxy Architecture:
NetworkUp strictly adheres to LinkedIn terms of service and safety policies:
- Weekly Connection Cap: Maximum 100 connection requests per week per account. Hard system limit with no overrides (users can adjust lower).
- Daily Action Limits: Maximum 50 actions per day per account (invites, messages, profile views). Reaching this limit automatically freezes the account until the next day.
- Static Residential Proxy Pinning: Dedicated residential IP matched to the user's geographic location; never rotates, preventing unusual activity flags.
- Human Behavior Emulation: Randomized delays, natural activity curves, and automated profile warmup.

Competitive Positioning (/compare/*):
- vs. Waalaxy & Dripify: Cloud-native execution with static residential proxies (no fragile Chrome extension), multi-sender pooling, and predictive simulation.
- vs. Expandi & Heyreach: Integrated AI Lead Finder, buying signals, and unified multi-account Convobox.
- vs. Apollo.io & Sales Navigator: Automates the multi-step outreach execution and conversation triage that database tools leave manual.

Pricing & Plans (/pricing):
- Starter: $21/mo ($15/mo billed annually) - 1 account, 1 workspace, 1 active campaign, Convobox, basic analytics, Zapier CRM sync.
- Growth: $59/mo ($49/mo billed annually) - 3 accounts, multi-workspace, unlimited campaigns, advanced AI, native CRM sync.
- Enterprise: $129/mo ($99/mo billed annually) - Unlimited accounts & workspaces, custom AI workflows, API/webhooks, dedicated manager.
- All plans include a 14-day free trial with full feature access.

Integrations & API (/resources/api-documentation):
Native 2-way sync with HubSpot, Salesforce, Pipedrive, Zapier, Make, real-time webhooks, and REST API.`;

const UNIFIED_PROMPT = "Provide a comprehensive overview of NetworkUp.io, explaining its cloud-native architecture, core product modules (Lead Finder, Campaign Builder, Convobox, AI Features), persona solutions (Sales, Agencies, Recruiters, Startups), pricing plans, and its strict LinkedIn safety model (100 weekly invite limit, 50 daily action freeze, and static residential proxy pinning).";

const NOTEBOOK_LM_NOTEBOOK_ID = process.env.NEXT_PUBLIC_NOTEBOOKLM_ID || "NOTEBOOK_ID";
const NOTEBOOK_LM_URL = `https://notebooklm.google.com/notebook/${NOTEBOOK_LM_NOTEBOOK_ID}`;

const models = [
    {
        name: "ChatGPT",
        icon: "/product/ai-tools/chatgpt-icon.svg",
        url: "https://chatgpt.com/",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "Claude",
        icon: "/product/ai-tools/claude-ai-icon.svg",
        url: "https://claude.ai/new",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "Grok",
        icon: "/product/ai-tools/grok-icon.svg",
        url: "https://grok.com/",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "Gemini",
        icon: "/product/ai-tools/google-gemini-icon.svg",
        url: "https://gemini.google.com/",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "Perplexity",
        icon: "/product/ai-tools/perplexity-ai-icon.svg",
        url: "https://www.perplexity.ai/",
        prompt: UNIFIED_PROMPT
    },
    {
        name: "NotebookLM",
        icon: "/product/ai-tools/notebook-lm-dark.svg",
        url: NOTEBOOK_LM_URL,
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
    "How does the AI Lead Finder and ICP scoring work?",
    "What makes NetworkUp's cloud proxy architecture safe?",
    "How does Convobox manage multi-account inboxes?",
    "How does NetworkUp compare to Waalaxy, Expandi & Apollo?",
    "Explain pricing plans and the 14-day free trial",
    "How do agency workspaces and sender pooling work?"
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
        } else if (model.name === "Claude") {
            redirectUrl = `https://claude.ai/new?q=${encodeURIComponent(fullPrompt)}`;
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
            setToastMessage("Opening NotebookLM! Copied prompt — paste it (Ctrl + V) in the notebook.");
        } else if (model.name === "Claude" || model.name === "ChatGPT" || model.name === "Perplexity") {
            setToastMessage(`Opening ${model.name} with pre-filled prompt!`);
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

        if (selectedModel === "ChatGPT" || selectedModel === "Claude" || selectedModel === "Perplexity") {
            setToastMessage(`Opening ${selectedModel} with pre-filled prompt!`);
        } else {
            setToastMessage(`Copied custom prompt! Paste it (Ctrl + V) in the new tab.`);
        }
        setTimeout(() => setToastMessage(null), 4000);

        performRedirection(selectedModel, prompt);
    };

    return (
        <section className="w-full bg-gradient-to-r from-[#000000] via-[#012201] via-[#003813] to-[#153c13] text-white overflow-hidden border-b border-zinc-800/40">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row items-stretch">

                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:pl-20 lg:pr-10 py-12 flex flex-col justify-center">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#9ffb06]/10 text-[#7ceb2a] text-xs font-bold border border-[#9ffb06]/20 tracking-wide mb-6 w-fit">
                            <span><Sparkles size={12} /></span>
                            <span>AI Prompt Assistant</span>
                        </div>

                        <h3 className="text-4xl sm:text-5xl tracking-tight text-[#e3e2e2] mb-6">
                            Ask anything about<br />
                            <span className="text-[#7ceb2a]">NetworkUp.io</span>
                        </h3>

                        <p className="text-[#c0caae] text-lg tracking-wider leading-relaxed max-w-xl mb-12">
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
                                                    style={{ height: "auto" }}
                                                />
                                            </div>
                                        </div>
                                        <span className={`text-[10px] font-semibold tracking-wide transition-all duration-300 ${copiedIndex === index ? "text-[#a3e635] scale-105" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                                            {copiedIndex === index ? (model.name === "ChatGPT" || model.name === "Claude" || model.name === "Perplexity" ? "Pre-filled!" : "Copied!") : model.name}
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
                            className="w-full h-full bg-[#0e2300] border-t lg:border-t-0 lg:border-l border-[#2a2a2a] p-8 sm:p-12 lg:p-16 shadow-[5px_5px_50px_12px_rgba(26,36,33,0.8)] flex flex-col jitems-center justify-center"
                        >
                            <div>
                                {/* Search Prompt Box */}
                                <div className="relative flex items-center bg-[#354124]/30 border border-[#414a34]/30 rounded-2xl p-4 gap-3 shadow-inner">
                                    <svg
                                        className="w-5 h-5 text-[#c0caae]/70 shrink-0"
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
                                        className="text-[#8f9686] text-sm leading-[1.4] flex-1 min-w-0 pl-1 pr-12 focus:ring-0 focus:outline-none bg-transparent resize-none font-medium"
                                        value={prompt}
                                        placeholder={placeholders[selectedModel] || "Ask Anything"}
                                        onChange={(e) => setPrompt(e.target.value)}
                                    />
                                    <button
                                        onClick={handleSend}
                                        className="absolute right-3 bg-[#7ceb2a] text-[#447000] h-10 w-10 flex items-center justify-center rounded-xl shadow-[0_4px_12px_rgba(163,230,53,0.3)] transition-transform duration-200 hover:scale-105 cursor-pointer"
                                    >
                                        <Send size={15} strokeWidth={3} />
                                    </button>
                                </div>
                            </div>

                            {/* Popular Prompts */}
                            <div className="mt-8">
                                <h4 className="text-sm font-bold text-[#c0caae] tracking-wide mb-4">
                                    Popular prompts
                                </h4>
                                <div className="flex flex-wrap gap-2 w-full sm:max-w-[500px]">
                                    {popularPrompts.map((promptText, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ x: 4, scale: 1.01 }}
                                            onClick={() => handleClick(promptText)}
                                            className="text-xs sm:text-sm text-[#e3e2e2] bg-white/5 border border-[#414a34]/20 rounded-full px-5 py-2 hover:bg-white/[0.06] hover:border-lime-500/20 transition-all duration-200 cursor-pointer flex items-center justify-between max-w-full text-left font-semibold"
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
                                            src={models.find(m => m.name === modalModelName)?.icon || "/brand/Logo.svg"}
                                            alt={modalModelName}
                                            width={24}
                                            height={24}
                                            style={{ height: "auto" }}
                                        />
                                    </div>
                                    <h3 className="text-base font-bold">Redirection Helper</h3>
                                </div>

                                {/* Body */}
                                <div className="space-y-4 text-left">
                                    {modalModelName === "NotebookLM" ? (
                                        <>
                                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-semibold text-[#a3e635]">
                                                NotebookLM Workspace
                                            </p>
                                            <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                                                We have opened the NetworkUp NotebookLM workspace in a new tab. If prompted, please sign in with your Google account.
                                            </p>
                                            <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                                                Your prompt is already copied to your clipboard. Paste it directly into the chat input:
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
                                    ) : (modalModelName === "ChatGPT" || modalModelName === "Claude" || modalModelName === "Perplexity") ? (
                                        <>
                                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-semibold">
                                                We have opened <span className="text-[#a3e635] font-extrabold">{modalModelName}</span> in a new tab.
                                            </p>
                                            <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                                                Since {modalModelName} supports automatic prompt pre-filling, your prompt has been passed through the URL. It should populate in their chat input field shortly!
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
