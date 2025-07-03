
import {projects} from "@/lib/projects";
import Link from "next/link";


export default function ProjectsPage() {
    return (
        <main className="max-w-7xl bg-[#555555]  mx-auto px-4 py-12">
            <h1 className="text-5xl text-white font-quicksand font-bold mb-8 dark:text-yellow-300" >Projects</h1>

            <div className="grid md:grid-cols-2 gap-12 ">
                {projects.map((p) => (
                    <article
                        key={p.title}
                        className="rounded-2xl bg-[#fdf2e9] border border-gray-200 shadow-sm p-6 hover:shadow-md transition flex flex-col"
                    >
                        <h2 className="text-3xl text-yellow-600 font-quicksand font-bold mb-2">{p.title}</h2>

                        <p className="text-black font-tahoma text-lg mb-4 text-justify flex-grow dark:text-black" dir="rtl">
                            {p.description}
                        </p>
                        <div className="flex justify-between text-sm mt-auto pt-4 border-t border-gray-700">
                            <Link
                                href={p.demoUrl}
                                target="_blank"
                                className="text-yellow-600 font-bold text-xl underline hover:text-gray-800"
                                style={{fontFamily: '"Times New Roman", serif'}}
                            >
                                Live&nbsp;Demo <span>نمایش آنلاین</span>
                            </Link>
                            <Link
                                href={p.githubUrl}
                                target="_blank"
                                className="text-yellow-600 font-bold text-xl underline hover:text-gray-800"
                                style={{fontFamily: '"Times New Roman", serif'}}
                            >
                                GitHub <span>ساختار پروژه</span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </main>

    );
}
