// import {FC} from "react";
//
// export const About: FC = () => (
//     <section className="mx-auto max-w-4xl space-y-4 px-4 leading-relaxed bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
//         <h2 className="mb-4 underline text-3xl font-semibold text-gray-800 dark:text-white ">
//             About Me
//         </h2>
//
//         <p className={'font-lato'}>
//             I'm a motivated front-end developer with practical experience in React and Next.js. I began my coding journey with multiple courses on Udemy and enhanced my skills through the Navax College bootcamp.
//         </p>
//         <p>
//             During the program, I successfully built 8 mini-projects and a fully functional e-commerce app. I'm experienced with API integration, React Hooks, SSR/CSR techniques, and always strive to write clean, maintainable code based on UI/UX designs.
//         </p>
//         <p>
//             I'm a fast learner, effective communicator, and enjoy team collaboration. I'm constantly experimenting with new technologies and building real-world projects to sharpen my skills.
//         </p>
//     </section>
// );


// components/About.tsx
import Image from "next/image";
import { FC } from "react";

export const About: FC = () => {
    return (
        <section
            id="about"
            className="mx-auto grid max-w-5xl gap-8 px-4 py-16 md:grid-cols-2 lg:gap-12
                 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100
                 transition-colors"
        >
            {/* تصویر در باکس اسکرول‌دار */}
            <div className="relative max-h-[400px] overflow-y-auto rounded-lg shadow-inner ring-1 ring-black/10 dark:ring-white/10">
                <Image
                    src="/image/shopping.png"
                    alt="Screenshot of Shopping Project"
                    width={640}
                    height={1600}
                    priority
                    className="w-full h-auto object-top rounded-lg"
                />
            </div>

            {/* توضیحات درباره من */}
            <div className="space-y-6">
                <h2 className="text-3xl font-semibold underline decoration-yellow-500 underline-offset-4">
                    About&nbsp;Me
                </h2>

                <p className="font-lato leading-relaxed">
                    I'm a motivated front‑end developer with practical experience in React
                    and Next.js. I began my coding journey with multiple courses on Udemy
                    and enhanced my skills through the Navax College bootcamp.
                </p>

                <p className="leading-relaxed">
                    During the program, I successfully built eight mini‑projects and a
                    fully functional e‑commerce application. I'm experienced with API
                    integration, React Hooks, and CSR/SSR/SSG techniques, and I always
                    strive to write clean, maintainable code based on solid UI/UX
                    principles.
                </p>

                <p className="leading-relaxed">
                    I'm a fast learner, an effective communicator, and I enjoy
                    collaborating within cross‑functional teams. Continuously experimenting
                    with new technologies and building real‑world projects helps me
                    sharpen my skills.
                </p>
            </div>
        </section>
    );
};

export default About;
