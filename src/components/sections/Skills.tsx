
// components/Skills.tsx
import { CheckCircle } from "lucide-react";

export const skills = {
    frontendFrameworks: [
        "Next.js 👍",
        "React 👍",
        "Context API 👍",
        "API Routes 🛣️",
        "CSR / SSR / SSG / ISR 💡",
        "Redux 👶",
    ],
    stateAndDataManagement: [
        "React Hook Form 👍",
        "TanStack Query 👍",
        "Axios 👍",
    ],
    stylingAndUI: [
        "TailwindCSS 💪",
        "Bootstrap 💪",
        "Sass / SCSS 💪",
        "Responsive Design 📱",
    ],
    languagesAndCoreWeb: [
        "HTML5 💪",
        "CSS3 💪",
        "JavaScript (ES6+) 👍",
        "TypeScript 👍",
        "jQuery 🔁",
    ],
    toolsAndTesting: [
        "Postman 👍",
        "Git / GitHub 👍",
        "Vscode 👍",
        "WebStorm 👍"
    ],
    designAndPrototyping: [
        "Figma 🎨",
    ],
    deploymentAndBackend: [
        "Vercel 🚀",
        "Strapi (Headless CMS) 👍",
    ],
};


export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-white dark:bg-zinc-900 transition-colors">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-10">
                    💼 My Skills
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-gray-50 dark:bg-zinc-800 rounded-2xl shadow p-6">
                            <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">
                                {category}
                            </h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                {items.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <CheckCircle className="text-yellow-500 dark:text-yellow-400 w-4 h-4" />
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
