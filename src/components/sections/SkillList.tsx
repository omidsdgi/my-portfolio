import SectionTitle from "@/components/sections/SectionTitle";
import {skills} from "@/Data";
import SkillsCard from "@/components/sections/SkillsCard";

const SkillList = () => {
    return (
        <section className= 'align-element py20 ' id='skillslist'>
            <SectionTitle text='tech stack'/>
            <div className='py-16 grid gap-8 md:grid-cols-1 md:gap-8 grid-cols-2 lg:grid-cols-3'>
                {skills.map(skill => {
                    return <SkillsCard key={skill.id } {...skill} />
                })}
            </div>
            
        </section>
    );
};

export default SkillList;