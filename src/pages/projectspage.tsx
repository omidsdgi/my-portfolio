//
// import { GetStaticProps } from "next";
// import Head from "next/head";
// import Link from "next/link";
// import { projects, Project } from "@/lib/projects";
//
// interface ProjectsPageProps {
//     items: Project[];
// }
//
// // ✅ 1) Static Generation
// export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
//     return {
//         props: {
//             items: projects,
//         },
//     };
// };
//
// export default function ProjectsPage({ items }: ProjectsPageProps) {
//     return (
//         <>
//             <Head>
//                 <title>پروژه‌ها | Omid</title>
//                 <meta
//                     name="description"
//                     content="لیست پروژه‌های توسعه‌یافته توسط Omid در حوزهٔ فرانت‌اند"
//                 />
//             </Head>
//
//             <main className="max-w-5xl mx-auto px-4 py-12">
//                 <h1 className="text-4xl font-quicksand font-bold mb-8">Projects</h1>
//
//                 <div className="grid md:grid-cols-2 gap-6">
//                     {items.map((p) => (
//                         <article
//                             key={p.title}
//                             className="rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition flex flex-col"
//                         >
//                             <h2 className="text-2xl font-quicksand font-semibold mb-2">{p.title}</h2>
//
//                         <p className="text-white mb-4 flex-grow" dir="rtl">
//                                 {p.description}
//                             </p>
//                             <div className="flex justify-between text-sm mt-auto pt-4 border-t border-gray-700">
//                                 <Link
//                                     href={p.demoUrl}
//                                     target="_blank"
//                                     className="text-yellow-600 font-bold text-xl underline hover:text-gray-800"
//                                     style={{fontFamily: '"Times New Roman", serif'}}
//                                 >
//                                     Live&nbsp;Demo <span>نمایش آنلاین</span>
//                                 </Link>
//                                 <Link
//                                     href={p.githubUrl}
//                                     target="_blank"
//                                     className="text-yellow-600 font-bold text-xl underline hover:text-gray-800"
//                                     style={{fontFamily: '"Times New Roman", serif'}}
//                                 >
//                                     GitHub <span>ساختار پروژه</span>
//                                 </Link>
//                             </div>
//                         </article>
//                     ))}
//                 </div>
//             </main>
//
//         </>
//     );
// }


// import Link from "next/link";
// import {projects} from "@/lib/projects";
//
// export default function ProjectsSection() {
//     return (
//         <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
//             <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
//                 Projects & Exercises
//             </h2>
//             <div className="grid md:grid-cols-2 gap-8">
//                 {projects.map(({ title, description, demoUrl, githubUrl, tags }) => (
//                     <article
//                         key={title}
//                         className="p-6 border rounded-2xl shadow-sm
//               hover:shadow-lg transition-shadow duration-300
//               bg-white dark:bg-gray-800
//               border-gray-300 dark:border-gray-700"
//                     >
//                         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
//                             {title}
//                         </h3>
//                         <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
//                         {tags && (
//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {tags.map((tag) => (
//                                     <span
//                                         key={tag}
//                                         className="text-xs font-medium
//                       bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200
//                       rounded px-2 py-1"
//                                     >
//                     {tag}
//                   </span>
//                                 ))}
//                             </div>
//                         )}
//                         <div className="flex gap-4 text-yellow-600 dark:text-yellow-400 font-bold underline text-sm">
//                             {demoUrl && (
//                                 <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
//                                     Live Demo
//                                 </Link>
//                             )}
//                             {githubUrl && (
//                                 <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
//                                     GitHub
//                                 </Link>
//                             )}
//                         </div>
//                     </article>
//                 ))}
//             </div>
//         </section>
//     );
// }

import Head from "next/head";
import ProjectList from "@/components/Projects/ProjectList";

const projects = [
    {
        title: "Project 1",
        description: "Description of project 1",
        demoUrl: "https://demo1.com",
        githubUrl: "https://github.com/omid/project1",
        tags: ["Next.js", "TypeScript"],
    },
    // ... other projects
];

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>Projects & Exercises | Omid</title>
                <meta
                    name="description"
                    content="A complete list of my projects and coding exercises."
                />
            </Head>

            <main className="max-w-6xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">
                    Projects & Exercises
                </h1>

                <ProjectList projects={projects} />
            </main>
        </>
    );
}