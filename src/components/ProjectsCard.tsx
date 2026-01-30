import Image from "next/image";
import Link from "next/link";
import {TbWorldWww} from "react-icons/tb";
import {FaGithubSquare} from "react-icons/fa";
import {Project} from "@/Data";

const ProjectsCard = ({img, demoUrl, githubUrl, title, description}:Project) => {
    return (
        <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300 '>
            <Image src={img} alt={title} width={400} height={400} />
            <div className='capitalize px-8'>
                <h2 className=' text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 text-slate-700 leading-loose'>{description}</p>
                <div className='mt-4 flex gap-x-4'>
                    <Link href={demoUrl} target='blank'><TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300'/> </Link>
                    <Link href={githubUrl} target='blank'><FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/> </Link>
                </div>
            </div>

        </article>
    );
};

export default ProjectsCard;