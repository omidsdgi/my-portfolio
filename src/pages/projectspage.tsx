
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { projects, Project } from "@/lib/projects";

interface ProjectsPageProps {
    items: Project[];
}

// ✅ 1) Static Generation
export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
    return {
        props: {
            items: projects,
        },
    };
};

export default function ProjectsPage({ items }: ProjectsPageProps) {
    return (
        <>
            <Head>
                <title>پروژه‌ها | Omid</title>
                <meta
                    name="description"
                    content="لیست پروژه‌های توسعه‌یافته توسط Omid در حوزهٔ فرانت‌اند"
                />
            </Head>

            <main className="max-w-5xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-8">پروژه‌ها</h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {items.map((p) => (
                        <article
                            key={p.title}
                            className="rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
                            <p className="text-gray-600 mb-4">{p.description}</p>

                            <div className="flex gap-4 text-sm">
                                <Link
                                    href={p.demoUrl}
                                    target="_blank"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    Live&nbsp;Demo
                                </Link>
                                <Link
                                    href={p.githubUrl}
                                    target="_blank"
                                    className="text-gray-600 underline hover:text-gray-800"
                                >
                                    GitHub
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}
