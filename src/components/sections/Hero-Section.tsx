import { FaGithubSquare,FaTelegram } from "react-icons/fa"
import Link from "next/link";
import Image from "next/image";
const HeroSection = () => {
    return (
        <div className="bg-emerald-100 py-24 text-emerald-900">
            <div className='max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-7'>
            <article >
                <h1 className='text-7xl font-bold tracking-wider'>I'm Omid</h1>
                <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                    Front-end developer
                </p>
                <p className='mt-4 mb-4 text-lg text-slate-700 capitalize tracking-wide'>
                    turning ideas into interactive reality
                </p>
                <div className='flex gap-6'>
                <Link
                    href='https://github.com/omidsdgi'
                    target='_blank'
                    className='h-10 w-10 text-slate-500 hover:text-black duration-300'
                >
                    <FaGithubSquare/>
                </Link>
                <Link
                    href='https://t.me/omidsdgi'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-10 w-10 text-slate-500 hover:text-black duration-300'
                >
                    <FaTelegram/>
                </Link>
                </div>
            </article>
                <article className='hidden md:block'>
              <Image  src="/image/Omid.png" alt="Avatar" width={260} height={260}
                      className="object-cover rounded-t-full rounded-br-full"/>
                </article>
            </div>
        </div>
    );
};

export default HeroSection;