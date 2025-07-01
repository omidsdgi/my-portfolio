import {FC} from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero: FC = () => (
    <section
        className="mx-auto flex max-w-5xl flex-col items-center justify-center
               gap-6 mt-8
               bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100
               transition-colors duration-300"
    >
        <p className="max-w-2xl text-base italic md:text-lg text-gray-700 dark:text-gray-300">
            "All our dreams can come true, if we have the courage to pursue them."
        </p>

        <Image
            src="/image/omid.jpg"
            alt="Omid Sadeghi – Front-End Developer"
            width={160}
            height={160}
            className="rounded-full shadow-lg dark:shadow-gray-800/50"
            sizes="(min-width: 768px) 160px, 128px"
            priority
        />

        <h1 className="text-4xl font-bold md:text-6xl">
            Hi,&nbsp;I'm&nbsp;
            <span className="text-primary dark:text-primary-light">Omid</span>
        </h1>

        <p className="max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-300">
            Front-end developer passionate about building clean, accessible, and user-focused
            interfaces with React, TypeScript &amp; Next.js.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
                href="/projectspage"
                className="rounded-xl border border-primary px-6 py-2 font-medium
                   transition-colors duration-200
                   hover:bg-primary hover:text-white
                   dark:border-primary/80 dark:hover:bg-primary/80"
            >
                Projects
            </Link>

            <Link
                href="/exercises"
                className="rounded-xl border border-secondary px-6 py-2 font-medium
                   transition-colors duration-200
                   hover:bg-secondary hover:text-white
                   dark:border-secondary/80 dark:hover:bg-secondary/80"
            >
                Exercises
            </Link>
        </div>
    </section>
);
