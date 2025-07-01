import {FC} from "react";

const skills = [
    { name: "Next.js  👍", level: "Intermediate" },
    { name: "React 👍", level: "Advanced" },
    { name: "Context  👍", level: "Advanced" },
    { name: "REST API  👍", level: "Advanced" },
    { name: "API Routers  👍", level: "Advanced" },
    { name: "CSR SSR SSG ISR  👍", level: "Advanced" },
    { name: "Axios  👍", level: "Advanced" },
    { name: "Tan-Stack-query  👍", level: "Advanced" },
    { name: "Toast  👍", level: "Advanced" },
    { name: "React Hook Form  👍", level: "Advanced" },
    { name: "Redux  👶", level: "beginner" },
    { name: "TypeScript  👍", level: "Intermediate" },
    { name: "Postman  👍", level: "Intermediate" },
    { name: "jQuery  👍", level: "Intermediate" },
    { name: "Es6  👍", level: "Intermediate" },
    { name: "TailwindCSS  💪", level: "Advanced" },
    { name: "Bootstrap  💪", level: "Advanced" },
    { name: "Git  👍", level: "Intermediate" },
    { name: "Figma  💪", level: "Advanced" },
    { name: "Strapi  👍", level: "Intermediate" },
   { name: "Sass  💪", level: "Advanced" },
    { name: "Responsive Design  💪", level: "Advanced" },
    { name: "HTML 💪", level: "Advanced" },
    { name: "CSS  💪 ✌", level: "Advanced" },
];


export const Skills: FC = () => (
    <section className="mx-auto max-w-5xl px-4 ">
        <h2 className="mb-8 inline-block border-b-4 text-3xl font-semibold text-gray-800 dark:text-white">
            Skills
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
                <li
                    key={skill.name}
                    className="flex flex-col items-center rounded-2xl border border-gray-300 dark:border-gray-700
                               bg-white dark:bg-gray-800
                               text-gray-800 dark:text-gray-200
                               p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                    <span className="mb-2 text-xl font-medium">{skill.name}</span>
                </li>
            ))}
        </ul>
    </section>
);


