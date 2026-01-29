import {Skill} from "@/Data";
import {useLangContext} from "@/GlobalContext";

const SkillsCard = ({icon, title, text}:Skill) => {
    const {lang}=useLangContext()
    return (
        <article  className="flex flex-col h-full  p-4  shadow-sm hover:shadow-md transition-all">
            <span>{icon}</span>
            <h4 className='mt-4 mb-6 font-bold'>{title}</h4>
            <p>{text[lang]}</p>
        </article>
    );
};

export default SkillsCard;