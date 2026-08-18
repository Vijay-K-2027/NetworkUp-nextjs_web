'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cardVariants, containerVariants } from '@/app/homepage/assets/icons'
import { Gauge, WandSparkles } from 'lucide-react';

const features = [
    {
        icon: WandSparkles,
        title: "Fuzzy Matching",
        description: "Matching fields based on semantic meaning rather than exact string equality. customer_id and client_identifier are treated as synonyms."
    },
    {
        icon: Gauge,
        title: "Zero-Latency Overhead",
        description: "Transformations are pre-compiled into optimized WebAssembly modules. THe AI simply acts as the compiler, ensuring wire-spread execution."
    }
]

const DEFAULT_CODE = `// NetworkUp.ai AI Payload Map - Generated on ingest
const transformConfig = {
  sourceType: 'stripe.charge.succeeded',
  targetType: 'internal_billing_event',
  mappings: [
    { from: 'data.object.amount', to: 'valueCents', confidence: 0.99 },
    { from: 'data.object.receipt_email', to: 'userEmail', confidence: 0.95 },
    // AI recognized 'metadata.plan_id' despite schema deviation
    { from: 'data.object.metadata.plan_id', to: 'subscriptionTier', confidence: 0.87 }
  ]
};`;

function highlightJS(code: string) {
    let escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Tokenizer regex mapping:
    // 1. Comments: \/\/.*
    // 2. Strings: '.*?'
    // 3. Keywords: const, let, var, return, function, etc.
    // 4. Object keys: word followed by colon
    // 5. Numbers: integers and floats
    const tokenRegex = /(\/\/.*)|('([^']*)')|\b(const|let|var|function|return|import|export|default|class)\b|(\b\w+)(?=\s*:)|(\b\d+(?:\.\d+)?\b)/g;

    return escaped.replace(tokenRegex, (match, comment, string, strContent, keyword, key, num) => {
        if (comment) return `<span class="text-[#71717a] font-normal">${match}</span>`;
        if (string) return `<span class="text-[#34d399] font-medium">${match}</span>`;
        if (keyword) return `<span class="text-[#c084fc] font-semibold">${match}</span>`;
        if (key) return `<span class="text-[#facc15] font-semibold">${match}</span>`;
        if (num) return `<span class="text-[#38bdf8]">${match}</span>`;
        return match;
    });
}

export default function Section3() {
    const [code, setCode] = useState<string>(DEFAULT_CODE);
    const preRef = useRef<HTMLPreElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleReset = () => {
        setCode(DEFAULT_CODE);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const textarea = e.currentTarget;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            // Insert 2 spaces
            const updatedCode = code.substring(0, start) + '  ' + code.substring(end);
            setCode(updatedCode);

            // Restore cursor position after state update
            requestAnimationFrame(() => {
                textarea.selectionStart = textarea.selectionEnd = start + 2;
            });
        }
    };

    return (
        <section className="w-full max-w-4xl mx-auto my-20 px-6 sm:px-8">
            <div className="flex flex-col gap-y-8">
                {/* Heading */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-black tracking-tight leading-tight">
                    Context-Aware Payload Transformation
                </h1>

                {/* Top Paragraph */}
                <h2 className="text-sm md:text-md lg:text-lg text-black/60 font-normal text-left leading-relaxed">
                    Standard webhook translators rely on rigid schemas. If an upstream provider adds a single unexpected field, standard parsers fail, leading to dropped events. Our new Context-Aware Payload Transformation engine leverages Large Language Models (LLMs) to infer schema intent dynamically.
                </h2>

                {/* Code Editor Container */}
                <div className="relative w-full overflow-hidden rounded-3xl border border-[#2e3238] bg-[#181a1f] shadow-2xl p-6 sm:p-8 pt-12 sm:pt-14 my-4">
                    {/* Badge */}
                    <div className="absolute top-0 right-0 bg-[#71eb34] text-[#031d10] font-extrabold text-[10px] sm:text-xs tracking-wider px-4 py-2 rounded-bl-2xl uppercase select-none">
                        Auto-Generated Map
                    </div>

                    {/* Reset Button */}
                    <button
                        onClick={handleReset}
                        className="absolute top-3 left-6 rounded bg-white/5 hover:bg-white/10 px-2.5 py-1 font-mono text-[10px] sm:text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition active:scale-95 cursor-pointer z-10"
                    >
                        Reset Config
                    </button>

                    {/* Interactive Editor Space with Syntax Highlighting Layering */}
                    <div className="relative w-full bg-[#121417] p-6 rounded-2xl border border-neutral-800/80">
                        {/* Highlighted Display Layer (Pre - acts as the height expansion anchor) */}
                        <pre
                            ref={preRef}
                            className="w-full font-mono text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap break-words text-zinc-100 p-0 m-0 border-0 bg-transparent overflow-hidden pointer-events-none select-none"
                            dangerouslySetInnerHTML={{ __html: highlightJS(code) }}
                        />

                        {/* Interactive Text Input Layer (Textarea overlay matching pre dimension bounds) */}
                        <textarea
                            ref={textareaRef}
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            onKeyDown={handleKeyDown}
                            spellCheck={false}
                            className="absolute top-6 left-6 right-6 bottom-6 font-mono text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap break-words text-transparent caret-white outline-none focus:ring-0 border-0 p-0 m-0 bg-transparent resize-none tab-size-2 selection:bg-white/20 overflow-hidden"
                        />
                    </div>
                </div>

                {/* Bottom Paragraph */}
                <h2 className="text-sm md:text-md lg:text-lg text-black/60 font-normal text-left leading-relaxed">
                    By analyzing millions of successful API interactions, the model accurately predicts data mapping even when fields are obfuscated or nested irregularly. This means less brittle integrations and zero late-night pager alerts because a third party updated their API without notice.
                </h2>
                <motion.div
                    className="flex flex-row items-center justify-center gap-x-6"
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
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="flex flex-col bg-white p-8 rounded-[1rem] transition-shadow duration-300 shadow-sm group"
                            >
                                <div className="absolute inset-0 pointer-events-none rounded-[1rem] border-2 border-gray-100 [mask-image:linear-gradient(to_top_left,_black_50%,_transparent_50%)]"></div>

                                <div className="flex items-center justify-start mb-6">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${index == 0 ? "bg-[#356221]/20" : "bg-pink-200"}`}>
                                        <Icon size={25} className="stroke-black/60" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[16px] leading-[1.6] text-gray-500 font-normal">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
