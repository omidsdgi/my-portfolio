import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggles";

const navItems = [
    { href: "#about", label: "درباره من" },
    { href: "#skills", label: "مهارت‌ها" },
    { href: "/projectsPage", label: "پروژه‌ها" },
    { href: "#footer", label: "تماس" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-50 bg-light-background text-light-text shadow-md dark:bg-gray-900 dark:text-gray-100  backdrop-blur transition-shadow duration-300">

            <nav className="mx-auto max-w-5xl px-4">
                <div className="flex items-center justify-between h-16">
            <li className="md:ml-4">
                <ThemeToggle/>
            </li>
                    <Link href="/public" className="text-2xl font-bold tracking-tight  text-yellow-600 dark:text-yellow-400">
                        OMID.developer
                    </Link>

                    <ul className="hidden md:flex items-center gap-8 text-lg font-tahoma font-medium">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="rounded-lg border border-yellow-500 dark:border-yellow-400 px-4 py-2 text-yellow-600 dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-400 hover:text-background dark:hover:text-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        aria-label="Toggle Menu"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 text-foreground dark:text-yellow-400 transition-transform duration-200 active:scale-90"
                    >
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>


                {isOpen && (
                    <ul className="md:hidden  flex flex-col gap-4 pb-6 animate-fade-in">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="block py-1 text-xl font-medium hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}

                    </ul>
                )}
            </nav>
        </header>
    );
}
