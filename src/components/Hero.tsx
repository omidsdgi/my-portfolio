import { FaGithubSquare, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-20 bg-base-100 transition-colors duration-500"
        >
            <div className="align-element w-full">
                <div className="grid md:grid-cols-2 items-center gap-12 py-20">
                    {/* ==================== TEXT CONTENT ==================== */}
                    <article className="space-y-6 animate-fadeIn">
                        <header className="space-y-2">
                            <p className="text-primary font-medium tracking-wide uppercase text-lg">
                                Front-End Developer
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-base-content">
                                I&apos;m <span className="text-primary">Omid</span>
                            </h1>
                        </header>

                        <p className="text-xl md:text-2xl text-base-content/70 font-medium">
                            Turning ideas into interactive reality.
                        </p>

                        <p className="text-base md:text-lg text-base-content/60 leading-relaxed max-w-xl">
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
                                className="btn btn-ghost btn-circle shadow-md hover:shadow-xl hover:scale-105 transition-all"
                            >
                                <FaGithubSquare
                                    className="w-7 h-7 text-base-content hover:text-primary transition-colors"/>
                            </Link>

                            {/* Telegram */}
                            <Link
                                href="https://t.me/omidsdgi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact via Telegram"
                                className="btn btn-ghost btn-circle shadow-md hover:shadow-xl hover:scale-105 transition-all"
                            >
                                <FaTelegram className="w-7 h-7 text-base-content hover:text-primary transition-colors"/>
                            </Link>

                            {/* Contact Button */}
                            <Link
                                href="/#contact"
                                className="btn btn-primary ml-4 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </article>

                    {/* ==================== IMAGE ==================== */}
                    <article className="hidden md:flex justify-center items-center animate-fadeIn">
                        <div
                            className="relative group card bg-base-200 shadow-2xl rounded-box p-4 transition-all duration-500 hover:shadow-primary/40 hover:scale-105">
                            {/* Background Gradient Halo */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-primary to-secondary
                                rounded-box blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                            />

                            {/* Image Wrapper */}
                            <figure
                                className="relative z-10 overflow-hidden mask mask-squircle ring ring-base-300 ring-offset-2 ring-offset-base-100">
                                <Image
                                    src="/images/Omid.png"
                                    alt="Omid Sadeghi - Front-End Developer"
                                    width={400}
                                    height={400}
                                    priority
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </figure>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};


export default Hero;
