import ProjectItemDep from "./ProjectItemDep";
import {ProjectListProps} from "@/types/ProjectType";


export default function ProjectListDep({ projects }: ProjectListProps) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
                <ProjectItemDep key={project.title} {...project} />
            ))}
        </div>
    );
}
