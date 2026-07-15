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
                activeTab === "Home" ? <Home onClose={onClose} /> : <Message onClose={onClose} />
            }
            <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
    )
}
