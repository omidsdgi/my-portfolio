import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import NavLinks from "./NavLinks";
import {useAppContext} from "@/contexts/GlobalContext";

const Navbar = () => {
    const { theme, toggleTheme } = useAppContext();
    const [isScrolled, setIsScrolled] = useState(false);

    // تغییر استایل نوبار هنگام اسکرول
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // تابع اسکرول نرم برای لینک‌های داخلی موبایل
    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(targetId);
            if (element) {
                window.scrollTo({
                    top: (element as HTMLElement).offsetTop - 80,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-primary backdrop-blur-md shadow-md"
                    : "bg-primary backdrop-blur-sm"
            }`}
        >
            <div className="navbar align-element">
                {/* Logo */}
                <div className="navbar-start">
                    <Link href="/" className="flex items-center gap-2 group">
                        <h2 className="text-2xl md:text-3xl font-bold font-display">
              <span className="text-base-content group-hover:text-primary transition-colors">
                Web
              </span>
                            <span className="text-amber-300">Dev</span>
                        </h2>
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="navbar-center">
                    <ul className=" hidden md:flex flex-wrap items-center xl:gap-8 ">
                        <NavLinks  onSmoothScroll={handleSmoothScroll}/>
                    </ul>
                </div>

                {/* Theme Toggle */}
                <div className="navbar-end">
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

            {/* Mobile Navigation (expanded below navbar) */}
            <div className="md:hidden navbar-center border-t border-base-300  ">
                <div className="align-element py-4 flex flex-wrap gap-4 justify-center ">
                       <NavLinks  onSmoothScroll={handleSmoothScroll}/>
                </div>
            </div>
        </nav>
);
};

export default Navbar;
