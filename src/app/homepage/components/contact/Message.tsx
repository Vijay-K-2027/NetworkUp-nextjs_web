import { MessageCircleMore } from "lucide-react";

interface MessageProps {
    onClose?: () => void;
}

export default function Message({ onClose }: MessageProps) {
    return (
        <>
            <header className="mx-auto h-[50px] w-[300px] rounded-t-2xl px-10 pt-10 pb-5 flex flex-row items-center justify-between bg-[#02140b]">
                <div className="flex flex-row items-center justify-between mx-auto ">
                    <h2 className="font-bold text-white text-center text-lg w-[220px]">Messages</h2>
                    <h5 className="text-gray-400 text-lg ml-3 cursor-pointer hover:text-white transition-colors" onClick={onClose}>X</h5>
                </div>
            </header>
            <main className="bg-black h-fit w-[300px] mx-auto">
                <div className="mx-4 bg-black h-fit flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center gap-x-2 gap-y-15 mt-25">
                        <MessageCircleMore size={70} stroke="#6be002" strokeWidth={1} />
                        <div className="flex flex-col items-center gap-y-4 mb-5">
                            <h3 className="text-white text-[20px] font-bold text-center">No messages yet</h3>
                            <h5 className="text-gray-400 text-sm w-[200px] text-center">Messages from our team will appear here</h5>
                        </div>
                        <button className="relative bg-gradient-to-b from-[#b4f552] to-[#6be002] text-black font-[540] rounded-xl py-3 px-10 pr-20 mb-10">Ask a question <span className="absolute top-3 rounded-full bg-lime border-5 border-black mx-3 mb-2 px-[4px] -py-[2px] text-[10px] font-bold ">?</span></button>
                    </div>
                </div>
            </main>
        </>
    );
}