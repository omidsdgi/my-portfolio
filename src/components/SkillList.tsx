import SectionTitle from "@/components/SectionTitle";
import {skills} from "@/data/Data";
import SkillsCard from "@/components/SkillsCard";

const SkillList = () => {
    return (
        <section
            id="skillslist"
            className="py-20 bg-base-200"
        >
            <div className="align-element">
                <SectionTitle text="Tech Stack" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300"
                        >
                            <div className="card-body items-center text-center">
                                <SkillsCard {...skill} />
                            </div>
                        </div>
                    ))}
            </div>
            </div>
        </section>
    );
};

export default SkillList;