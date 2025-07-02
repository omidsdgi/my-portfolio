import ProjectItem from "./ProjectItem";

interface Project {
    title: string;
    description: string;
    demoUrl?: string;
    githubUrl?: string;
    tags?: string[];
}

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
                <ProjectItem key={project.title} {...project} />
            ))}
        </div>
    );
}
