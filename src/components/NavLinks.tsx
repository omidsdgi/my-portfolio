import React, { useEffect } from "react";
import Link from "next/link";
import { links } from "@/data/Data";

type NavLinksProps = {
    setIsScrolled?: (value: boolean) => void;
};

const NavLinks = ({ setIsScrolled }: NavLinksProps) => {
    // تابع اسکرول نرم برای لینک‌های داخلی
    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(targetId);
            if (element) {
                window.scrollTo({
                    top: (element as HTMLElement).offsetTop - 80, // فاصله از navbar
                    behavior: "smooth",
                });
            }
        }
    };

    // تغییر رنگ نوبار هنگام اسکرول
    useEffect(() => {
        const handleScroll = () => {
            if (setIsScrolled) setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setIsScrolled]);

    return (
        <>
            {links.map((item) => (
                <li key={item.id} className="relative list-none">
                    <Link
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="group capitalize text-sm md:text-base tracking-wide relative px-3 py-2 transition-colors duration-300 hover:bg-base-200 rounded-md"
                    >
                        {item.text}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                </li>
            ))}
        </>
    );
};

export default NavLinks;
