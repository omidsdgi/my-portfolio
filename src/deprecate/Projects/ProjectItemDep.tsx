
import Link from "next/link";
import {ProjectItemProps} from "@/types/ProjectType";

export default function ProjectItemDep({
                                        title,
                                        description,
                                        demoUrl,
                                        githubUrl,
                                        tags,
                                    }: ProjectItemProps) {
    return (
        <article className="p-6 border rounded shadow-sm bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-gray-700 dark:text-gray-300">{description}</p>

            <div className="flex flex-wrap gap-2 my-2">
                {tags?.map((tag) => (
                    <span
                        key={tag}
                        className="bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 rounded px-2 text-xs"
                    >
            {tag}
          </span>
                ))}
            </div>

            <div className="flex gap-4 text-yellow-600 dark:text-yellow-400">
                {demoUrl && (
                    <Link
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-yellow-500"
                    >
                        Live Demo
                    </Link>
                )}
                {githubUrl && (
                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-yellow-500"
                    >
                        GitHub
                    </Link>
                )}
            </div>
        </article>
    );
}
