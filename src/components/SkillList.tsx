import SectionTitle from "@/components/SectionTitle";
import {skills} from "@/data/Data";
import SkillsCard from "@/components/SkillsCard";

const SkillList = () => {
    return (
        <section
            id="skillslist"
            className="py-20 bg-slate-50 dark:bg-slate-800/50"
        >
            <div className="align-element">
                <SectionTitle text="Tech Stack" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {skills.map((skill) => (
                        <SkillsCard key={skill.id} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillList;