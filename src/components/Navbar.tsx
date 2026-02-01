import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/Data";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import {useAppContext} from "@/GlobalContext";

// تابع اسکرول نرم برای لینک‌های داخلی
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            window.scrollTo({
                top: (element as HTMLElement).offsetTop - 80, // فاصله از نوبار
                behavior: "smooth",
            });
        }
    }
};

const Navbar = () => {
    const { theme, toggleTheme } = useAppContext(); // فقط theme استفاده می‌شود
    const [isScrolled, setIsScrolled] = useState(false);

    // کنترل تغییر رنگ نوبار هنگام اسکرول
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
                isScrolled
                    ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
                    : "bg-emerald-50/80 dark:bg-slate-800/80 backdrop-blur-sm"
            }`}
        >
            <div className="align-element">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <h2 className="text-2xl md:text-3xl font-bold font-display">
              <span className="text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Web
              </span>
                            <span className="text-emerald-600 dark:text-emerald-400">Dev</span>
                        </h2>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                onClick={(e) => handleSmoothScroll(e, item.href)}
                                className="nav-link capitalize text-base tracking-wide relative group"
                            >
                                {item.text}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-x-2 px-3 py-2 rounded-lg bg-emerald-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:scale-105 transition-all duration-200"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
                        <span className="hidden sm:inline text-sm font-medium">
              {theme === "light" ? "Dark" : "Light"}
            </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden border-t border-slate-200 dark:border-slate-700">
                <div className="align-element py-4 flex flex-wrap gap-4 justify-center">
                    {links.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                            className="nav-link capitalize text-sm"
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
