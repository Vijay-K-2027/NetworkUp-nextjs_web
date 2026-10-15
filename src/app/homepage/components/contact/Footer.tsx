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
        <footer className="mx-auto flex flex-row items-center justify-between h-[70px] w-[300px] rounded-b-2xl border border-[#1f2937] py-3 bg-[#03160e] shrink-0">
            <button className={`group ml-10 flex flex-col items-center justify-center gap-x-2 gap-y-1 w-[32px] cursor-pointer ${activeTab === "Home" ? "border-[#a3ff12] border-b-3" : "border-[#6b7280]"}`} onClick={() => setActiveTab("Home")}>
                <Home size={25} strokeWidth={2} stroke={activeTab === "Home" ? "#a3ff12" : "#6b7280"} />
                <h3 className={`text-[10px] ${activeTab === "Home" ? "text-[#a3ff12]" : "text-[#6b7280]"}`}>Home</h3>
            </button>
            <button className={`group mr-10 flex flex-col items-center justify-center gap-x-2 gap-y-1 w-[32px] cursor-pointer ${activeTab === "Message" ? "border-[#a3ff12] border-b-3" : "border-[#6b7280]"}`} onClick={() => setActiveTab("Message")}>
                <MessageSquareMore size={25} fill={activeTab === "Message" ? "#a3ff12" : "#6b7280"} strokeWidth={2} stroke={activeTab === "Message" ? "black" : "black"} />
                <h3 className={`text-[10px] ${activeTab === "Message" ? "text-[#a3ff12]" : "text-[#6b7280]"}`}>Messages</h3>
            </button>
        </footer>
    )
}