import { FaGithubSquare, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-20 bg-gradient-to-br
                 from-emerald-50 via-slate-50 to-emerald-100
                 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
                 transition-colors duration-300"
        >
            <div className="align-element w-full">
                <div className="grid md:grid-cols-2 items-center gap-12 py-20">
                    {/* ==================== TEXT CONTENT ==================== */}
                    <article className="space-y-6 animate-fadeIn">
                        <header className="space-y-2">
                            <p className="text-emerald-600 dark:text-emerald-400 font-medium tracking-wide uppercase text-lg">
                                Front-End Developer
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight">
                                <span className="text-slate-900 dark:text-slate-50">I&apos;m </span>
                                <span className="gradient-text">Omid</span>
                            </h1>
                        </header>

                        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium">
                            Turning ideas into interactive reality.
                        </p>

                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                            Crafting modern, responsive web applications with React, Next.js, and TypeScript.
                            Passionate about clean code and exceptional user experiences.
                        </p>

                        {/* ==================== SOCIAL LINKS ==================== */}
                        <div className="flex items-center gap-4 pt-4">
                            {/* GitHub */}
                            <Link
                                href="https://github.com/omidsdgi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit GitHub profile"
                                className="group relative p-3 rounded-lg bg-card dark:bg-slate-800
                           shadow-md hover:shadow-xl transition-all duration-300
                           hover:-translate-y-1"
                            >
                                <FaGithubSquare
                                    className="w-8 h-8 text-slate-700 dark:text-slate-300
                             group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                             transition-colors"
                                />
                            </Link>

                            {/* Telegram */}
                            <Link
                                href="https://t.me/omidsdgi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact via Telegram"
                                className="group relative p-3 rounded-lg bg-card dark:bg-slate-800
                           shadow-md hover:shadow-xl transition-all duration-300
                           hover:-translate-y-1"
                            >
                                <FaTelegram
                                    className="w-8 h-8 text-slate-700 dark:text-slate-300
                             group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                             transition-colors"
                                />
                            </Link>

                            {/* Contact Button */}
                            <Link
                                href="/#contact"
                                className="ml-4 px-6 py-3 rounded-lg font-medium btn-primary
                           shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </article>

                    {/* ==================== IMAGE ==================== */}
                    <article className="hidden md:flex justify-center items-center animate-fadeIn">
                        <div className="relative group">
                            {/* Background Gradient Halo */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600
                           rounded-t-full rounded-br-full blur-2xl opacity-20
                           group-hover:opacity-30 transition-opacity duration-500"
                            />

                            {/* Main Image Wrapper */}
                            <div
                                className="relative overflow-hidden rounded-t-full rounded-br-full
                           ring-4 ring-white dark:ring-slate-500 shadow-2xl"
                            >
                                <Image
                                    src="/images/Omid.png"
                                    alt="Omid Sadeghi - Front-End Developer"
                                    width={400}
                                    height={400}
                                    priority
                                    className="object-cover w-full h-full transform group-hover:scale-110
                             transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Hero;
