import Link from "next/link";
import { links } from "@/data/Data";
import React from "react";

type NavLinksProps = {
    onSmoothScroll?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

const NavLinks = ({onSmoothScroll}:NavLinksProps) => {

    return (
        <>
            {links.map((item) => (
                <li key={item.id} className="relative list-none">
                    <Link
                        href={item.href}
                        onClick={(e) => onSmoothScroll?.(e as React.MouseEvent<HTMLAnchorElement>, item.href)}
                        className=" text-base-content font-medium px-5 py-3 rounded-md transition-colors duration-300 hover:bg-primary hover:bg-opacity-20     hover:text-primary"
                    >
                        {item.text}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default NavLinks;
