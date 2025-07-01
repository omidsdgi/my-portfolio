import Head from "next/head";
import {About, Hero, Skills} from "@/components";
import Image from "next/image";


export default function Home() {
    return (
        <>
            <Head>
                <title>Omid Sadeghi | Front-End Developer</title>
                <meta
                    name="description"
                    content="Portfolio of Omid Sadeghi – Front-End Developer specializing in React, TypeScript, and Next.js."
                />
            </Head>

            <main
                className=" grid grid-cols-1 lg:grid-cols-4 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 ">

                <div className="hidden lg:block col-span-1 relative top-96  left-4 h-[500px] overflow-auto">
                    <Image src="/image/shopping.png" alt="Shopping Project" width={640} height={1600} priority
                        className="w-full h-auto object-top opacity-80 rounded-lg shadow-lg"
                    />
                </div>

                <section className="lg:col-span-2 space-y-14 px-4">
                    <Hero/>
                    <About/>
                    <Skills/>
                </section>


                <div className="hidden lg:block col-span-1 relative top-96 right-4  h-[500px] overflow-auto">
                    <Image
                        src="/image/omnio-food.webp"
                        alt="Omnio Food Project"
                        width={640}
                        height={1600}
                        priority
                        className="w-full h-auto object-top opacity-80 rounded-lg shadow-lg"
                    />
                </div>
            </main>

        </>
    );
}

