import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/Data";
import ProjectsCard from "@/components/ProjectsCard";

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 bg-white dark:bg-slate-900"
        >
            <div className="align-element">
                <SectionTitle text="Web Creations" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project) => (
                        <ProjectsCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;