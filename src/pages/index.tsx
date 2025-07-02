import Head from "next/head";
import {About, Hero} from "@/components";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Skills from "@/components/sections/Skills";


export default function Home() {
    return (
        <>
            <Navbar />
            <Head>
                <title>Omid Sadeghi | Front-End Developer</title>
                <meta
                    name="description"
                    content="Portfolio of Omid Sadeghi – Front-End Developer specializing in React, TypeScript, and Next.js."
                />
            </Head>
            <main
                className=" grid grid-cols-1 lg:grid-cols-4 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 ">
                <section className="lg:col-span-4 space-y-14 px-4">
                    <Hero/>
                    <About/>
                    <Skills/>
                </section>
            </main>
            <Footer />
        </>
    );
}

