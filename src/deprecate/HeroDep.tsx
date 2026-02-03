import {FC} from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroDep: FC = () => (
    <section
        className="mx-auto bg-[#fdf2e9] dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen max-w-6xl mt-10 flex flex-col justify-evenly items-center p-6 text-center"
    >

        <div className="text-center mb-10 space-y-3">
            <p className="max-w-3xl mx-auto font-quicksand text-base md:text-lg font-bold italic text-gray-700 dark:text-gray-300">
                "All our dreams can come true, if we have the courage to pursue them."
            </p>
            <p
                className="max-w-2xl mx-auto text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200"
                dir="rtl"
            >
                همهٔ رؤیاهای ما می‌توانند به حقیقت بپیوندند، اگر شجاعت دنبال‌کردنشان را داشته باشیم.
            </p>
        </div>


        <div
            className=" relative w-24 aspect-square sm:w-32 sm:aspect-square md:w-40 md:aspect-square lg:w-48 lg:aspect-square
             rounded-full overflow-hidden border-4 border-yellow-600 dark:border-yellow-400 mx-auto shadow-lg mb-6 ">
            <Image
                src="/image/Omid.png" alt="Avatar" fill priority className="object-cover" />
        </div>

        <h1
            className="text-4xl md:text-6xl font-quicksand font-bold mb-6 text-center leading-relaxed"
        >
            Hi, I’m Omid <br/>
            A Front-End Developer
        </h1>

        <p className="max-w-xl text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-400">
            I specialize in building modern and responsive user interfaces. Explore my
            projects and feel free to get in touch.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
            <Link
                href="/src/deprecate/projectsPage"
                className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400"
            >
                Projects
            </Link>
            <Link
                href="/public#footer"
                className="border-2 border-yellow-600 hover:border-yellow-500 text-yellow-600 hover:text-yellow-500 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400"
            >
                Contact Me
            </Link>
        </div>
    </section>

);
