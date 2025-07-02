import ProjectItem from "./ProjectItem";
import {ProjectListProps} from "@/types/ProjectType";


export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
                <ProjectItem key={project.title} {...project} />
            ))}
        </div>
    );
}
