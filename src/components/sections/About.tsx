
import Image from "next/image";
import { FC } from "react";

export const About: FC = () => {
    return (
        <section
            id="about"
            className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 lg:gap-12
                 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100
                 transition-colors"
        >
            <div className="relative max-h-[800px] overflow-y-auto rounded-lg shadow-inner ring-1 ring-black/10 dark:ring-white/10">
                <Image
                    src="/image/shopping.png"
                    alt="Screenshot of Shopping Project"
                    width={640}
                    height={1600}
                    priority
                    className="w-full h-auto object-top rounded-lg"
                />
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-semibold underline decoration-yellow-500 underline-offset-4">
                    About&nbsp;Me
                </h2>

                <p className="font-lato text-lg text-justify leading-relaxed">
                    I'm a motivated front-end developer with hands-on experience in building scalable web applications
                    using <strong>React</strong> and <strong>Next.js</strong>. My journey began with self-study through
                    several front-end development courses on Udemy, followed by an intensive 8-month bootcamp at Navax
                    College, where I developed 8 mini-projects and a full-fledged e-commerce application.
                </p>

                <p className="font-lato text-lg text-justify leading-relaxed">
                    I specialize in working with REST APIs, React Hooks, and understand the nuances of both <strong>Client-Side
                    Rendering (CSR)</strong> and <strong>Server-Side Rendering (SSR)</strong>. My focus is on writing
                    clean, reusable, and maintainable code that aligns closely with provided UI/UX designs. I also enjoy
                    exploring new technologies and actively incorporate them into real-world projects.
                </p>
                    <p className="font-lato text-lg text-justify leading-relaxed">
                    In addition to development, I’ve completed workshops and advanced courses such as the <em>AI
                    Workshop for Developers</em> (15 hours), focusing on practical use of AI tools in development, and
                    the <em>Advanced CSS & Sass</em> course, enhancing my layout and design system capabilities.
                </p>

                <p className="font-lato text-lg text-justify leading-relaxed">
                    I'm also fluent in English, having completed four years of advanced conversation and technical
                    communication training at the Iran Language Institute.
                </p>

                <p className="font-lato text-lg text-justify leading-relaxed">
                    Overall, I bring a solid combination of technical proficiency, real-world project experience, strong
                    communication skills, and a passion for learning to every team and project I join.
                </p>
            </div>
        </section>
    );
};

export default About;
