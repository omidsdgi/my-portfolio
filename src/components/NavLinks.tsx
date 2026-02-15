import Link from "next/link";
import { links } from "@/data/Data";

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
                        className="group capitalize text-sm md:text-base tracking-wide relative px-3 py-2 transition-colors duration-300 hover:bg-slate-400 rounded-md"
                    >
                        {item.text}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default NavLinks;
