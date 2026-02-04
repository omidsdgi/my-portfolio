import {useAppContext} from "@/contexts/GlobalContext";
import {Skill} from "@/data/Data";

const SkillsCard = ({ icon, title, text }: Skill) => {
    const { lang } = useAppContext();

    return (
        <article
            className="card group p-6 flex flex-col h-full hover:border-emerald-500/50
                 border border-transparent transition-all duration-300"
        >
            {/* Icon */}
            <div
                className={`mb-4 flex transition-all duration-300
    ${lang === 'fa'
                    ? 'justify-end group-hover:translate-x-2'
                    : 'justify-start group-hover:-translate-x-2'}
  `}
            >
                <div className="transform transition-transform duration-300 group-hover:scale-150 group-hover:rotate-3">
                    {icon}
                </div>
            </div>


            {/* Title */}
            <h4
                className={`text-lg font-bold mb-3 text-slate-900 dark:text-slate-50
                   ${lang === 'fa' ? 'text-right font-vazir' : 'text-left'}`}
            >
                {title}
            </h4>

            {/* Description */}
            <p
                className={`text-slate-600 dark:text-slate-400 leading-relaxed flex-grow 
                   ${lang === 'fa' ? 'rtl-text text-base text-justify' : 'text-sm text-justify'}`}
                dir={lang === 'fa' ? 'rtl' : 'ltr'}
            >
                {text[lang]}
            </p>
        </article>
    );
};
export default SkillsCard