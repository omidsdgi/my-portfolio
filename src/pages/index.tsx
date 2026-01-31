import Head from "next/head";
import Navbar from "@/deprecate/Navbar";
import HeroSection from "@/components/Hero-Section";
import SkillList from "@/components/SkillList";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import AboutLinks from "@/components/AboutLinks";


export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Omid Sadeghi | Front-End Developer Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio of Omid Sadeghi — Front-End Developer specializing in React, TypeScript, Next.js, and modern web technologies."
                />
                <meta name="author" content="Omid Sadeghi" />

                {/* Open Graph */}
                <meta property="og:title" content="Omid Sadeghi | Front-End Developer" />
                <meta property="og:description" content="Front-End Developer specializing in React, Next.js, and TypeScript" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://omid-sadeghi.dev" />
                <meta property="og:image" content="/og-image.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Omid Sadeghi | Front-End Developer" />
                <meta name="twitter:description" content="Front-End Developer specializing in React, Next.js, and TypeScript" />
                <meta name="twitter:image" content="/og-image.png" />
            </Head>

            <main className="min-h-screen">
                <Navbar />
                <HeroSection />
                <SkillList />
                <AboutLinks />
                <Projects />
                <Footer />
            </main>
        </>
    );
}
