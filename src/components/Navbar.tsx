import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsFillMoonFill, BsSunFill} from "react-icons/bs";
import NavLinks from "./NavLinks";
import {useAppContext} from "@/contexts/GlobalContext";


 const Navbar = () => {
    const { toggleTheme, isDark } = useAppContext();
    const [isScrolled, setIsScrolled] = useState(false);

    // کنترل استایل نوار هنگام اسکرول
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // اسکرول نرم برای لینک‌های داخلی (موبایل)
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
                    ? "bg-base-300/80 backdrop-blur-md shadow-md"
                    : "bg-base-300/60 backdrop-blur-sm"
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
                    <ul className="hidden md:flex flex-wrap items-center xl:gap-8">
                        <NavLinks onSmoothScroll={handleSmoothScroll} />
                    </ul>
                </div>

                {/* Theme Toggle */}
                <div className="navbar-end">
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            onChange={toggleTheme}
                            checked={isDark}
                            readOnly
                        />
                        {/* آیکون روشن */}
                        <BsSunFill className="h-5 w-5 swap-on text-yellow-400" />
                        {/* آیکون تاریک */}
                        <BsFillMoonFill className="h-5 w-5 swap-off text-blue-400" />
                    </label>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden navbar-center border-t border-base-300">
                <div className="align-element py-4 flex flex-wrap gap-4 justify-center">
                    <NavLinks onSmoothScroll={handleSmoothScroll} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
