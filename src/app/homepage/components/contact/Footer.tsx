import { Home, MessageSquareMore } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type FooterProps = {
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
};

export default function Footer({
    activeTab,
    setActiveTab,
}: FooterProps) {
    return (
        <footer className="mx-auto flex flex-row items-center justify-between h-[70px] w-[300px] rounded-b-2xl border-t border-gray-800 py-3 bg-[#02140b] shrink-0">
            <button className={`group ml-10 flex flex-col items-center justify-center gap-x-2 gap-y-1  w-[32px] ${activeTab === "Home" ? "border-[#6be002] border-b-3" : "border-white"}`} onClick={() => setActiveTab("Home")}>
                <Home size={25} strokeWidth={2} stroke={activeTab === "Home" ? "#6be002" : "white"} />
                <h3 className={`text-[10px] ${activeTab === "Home" ? "text-[#6be002]" : "text-white"}`}>Home</h3>
            </button>
            <button className={`group mr-10 flex flex-col items-center justify-center gap-x-2 gap-y-1 w-[32px] ${activeTab === "Message" ? "border-[#6be002] border-b-3" : "border-white"}`} onClick={() => setActiveTab("Message")}>
                <MessageSquareMore size={25} fill={activeTab === "Message" ? "#6be002" : "black"} strokeWidth={2} stroke={activeTab === "Message" ? "black" : "white"} />
                <h3 className={`text-[10px] ${activeTab === "Message" ? "text-[#6be002]" : "text-white"}`}>Messages</h3>
            </button>
        </footer>
    )
}