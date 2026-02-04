import Image from "next/image";
import Link from "next/link";
import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { Project } from "@/data/Data";
import {useAppContext} from "@/contexts/GlobalContext";

const ProjectCard = ({ img, demoUrl, githubUrl, title, description }: Project) => {
    const { lang } = useAppContext();

    return (
        <article
            className="card group overflow-hidden flex flex-col h-full"
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={img}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h2
                    className={`text-xl font-bold mb-3 text-slate-900 dark:text-slate-50
                     ${lang === 'fa' ? 'text-right font-vazir' : 'text-left'}`}
                >
                    {title}
                </h2>

                {/* Description */}
                <p
                    className={`text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow line-clamp-4
                     ${lang === 'fa' ? 'rtl-text text-base text-justify' : 'text-sm text-justify'}`}
                    dir={lang === 'fa' ? 'rtl' : 'ltr'}
                >
                    {description[lang]}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Link
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-slate-600 dark:text-slate-400
                     hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        aria-label={`View ${title} demo`}
                    >
                        <TbWorldWww className="w-6 h-6" />
                        <span className="text-sm font-medium">Live Demo</span>
                    </Link>

                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-slate-600 dark:text-slate-400
                     hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        aria-label={`View ${title} source code`}
                    >
                        <FaGithubSquare className="w-6 h-6" />
                        <span className="text-sm font-medium">Source</span>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
