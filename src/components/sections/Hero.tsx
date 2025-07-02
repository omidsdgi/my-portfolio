import {FC} from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero: FC = () => (
    // <section
    //     className="mx-auto flex max-w-5xl flex-col items-center justify-center
    //            gap-6 mt-8
    //            bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100
    //            transition-colors duration-300"
    // >
    //     <p className="max-w-2xl font-quicksand text-base italic md:text-lg font-bold text-gray-700 dark:text-gray-300">
    //         "All our dreams can come true, if we have the courage to pursue them."
    //     </p>
    //
    //     <Image
    //         src="/image/omid.jpg"
    //         alt="avatar"
    //         width={160}
    //         height={160}
    //         className="rounded-full shadow-lg dark:shadow-gray-800/50"
    //         sizes="(min-width: 768px) 160px, 128px"
    //         priority
    //     />
    //
    //     <h1 className="text-4xl font-quicksand font-bold md:text-7xl">
    //         Hi,&nbsp;I'm&nbsp;
    //         <span className="text-primary dark:text-primary-light">Omid</span>
    //     </h1>
    //
    //     <p className="max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-300">
    //         Front-end developer passionate about building clean, accessible, and user-focused
    //         interfaces with React, TypeScript &amp; Next.js.
    //     </p>
    //
    //     <div className="flex flex-wrap items-center justify-center gap-4">
    //         <Link
    //             href="/projectspage"
    //             className="rounded-xl border border-primary px-6 py-2 font-medium
    //                transition-colors duration-200
    //                hover:bg-primary hover:text-white
    //                dark:border-primary/80 dark:hover:bg-primary/80"
    //         >
    //             Projects
    //         </Link>
    //
    //         <Link
    //             href="/exercises"
    //             className="rounded-xl border border-secondary px-6 py-2 font-medium
    //                transition-colors duration-200
    //                hover:bg-secondary hover:text-white
    //                dark:border-secondary/80 dark:hover:bg-secondary/80"
    //         >
    //             Exercises
    //         </Link>
    //     </div>
    // </section>
    <section
        className="bg-background dark:bg-gray-900 text-gray-800 dark:text-gray-200 max-h-[700px] mt-10 flex flex-col justify-evenly items-center px-6 text-center">
        <div className="text-center mb-10 space-y-3">
            {/* متن انگلیسی */}
            <p className="max-w-3xl mx-auto font-quicksand text-base md:text-lg font-bold italic text-gray-700 dark:text-gray-300">
                "All our dreams can come true, if we have the courage to pursue them."
            </p>

            {/* ترجمه فارسی */}
            <p className="max-w-2xl mx-auto font-tanha text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200"
               dir="rtl">
                همهٔ رؤیاهای ما می‌توانند به حقیقت بپیوندند، اگر شجاعت دنبال‌کردنشان را داشته باشیم.
            </p>
        </div>
        <div
            className="mb-8 rounded-full overflow-hidden border-4 border-yellow-600 dark:border-yellow-400 w-40 h-40 mx-auto shadow-lg">
            <Image
                src="/image/Omid.jpg"
                alt="Avatar"
                width={160}
                height={160}
                priority
                className="object-cover"
            />
        </div>
        <h1 className={"text-5xl md:text-6xl font-quicksand font-bold mb-6"} style={{lineHeight: "1.6"}}>
            Hi, I’m Omid <br/>
            A Front-End Developer
        </h1>
        <p className="max-w-xl text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-400">
            I specialize in building modern and responsive user interfaces. Explore my projects and feel free to get in
            touch.
        </p>
        <div className="flex gap-6">
            <Link
                href="#projects"
                className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400"
            >
                Projects
            </Link>
            <Link
                href="#contact"
                className="border-2 border-yellow-600 hover:border-yellow-500 text-yellow-600 hover:text-yellow-500 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400"
            >
                Contact Me
            </Link>
        </div>
    </section>
);
