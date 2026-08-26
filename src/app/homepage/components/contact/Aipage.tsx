"use client";

import Footer from "./Footer";
import Home from "./Home";
import Message from "./Message";
import { useState } from "react";

interface AipageProps {
    onClose?: () => void;
}

export default function Aipage({ onClose }: AipageProps) {
    const [activeTab, setActiveTab] = useState("Home");
    return (
        <>
            {
                activeTab === "Home" ? <Home onClose={onClose} onNavigateToChat={() => setActiveTab("Message")} /> : <Message onClose={onClose} onNavigateToHome={() => setActiveTab("Home")} />
            }
            <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
    )
}
