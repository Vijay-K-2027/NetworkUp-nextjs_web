import Image from "next/image";
import Link from "next/link";
import { Bot } from "lucide-react";

const navItems = [
    "Product",
    "Features",
    "Use Cases",
    "Pricing",
    "Resources",
];

export default function Navbar() {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={42}
                            height={42}
                        />

                        <span className="text-xl font-bold text-gray-900">
                            NetworkUp
                        </span>
                    </Link>

                    <nav>
                        <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-600">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="transition-colors duration-200 hover:text-green-600"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-5">
                    <Link
                        href="#"
                        className="text-sm font-medium text-gray-700 transition hover:text-black"
                    >
                        Log In
                    </Link>

                    <button className="rounded-xl bg-lime-400 px-6 py-3 text-sm font-semibold text-black shadow transition hover:bg-lime-500">
                        Get Started
                    </button>

                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50">
                        <Bot size={22} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </header>
    );
}
