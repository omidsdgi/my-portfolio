import {links} from "@/Data";
import Link from "next/link";

const NavbarLinks = () => {
    return (
        <nav   className="bg-emerald-100 text-gray-900" >
            <div className=" align-element py-4 flex flex-col sm:flex-row sm:flex-wrap gap-x-16 sm:items-center sm:py8"
            >
                <h2 className='text-3xl font-bold'>Web<span className='text-emerald-600 '>Dev</span></h2>
                <div className='flex gap-x-3'>
                  {links.map((item ) => {
                        const{id, href, text} = item;
                        return (
                            <Link href={href} key={id}
                                  className='capitalize text-lg tracking-wide hover:text-emerald-500 duration-300 '>
                                {text}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
};

export default NavbarLinks;