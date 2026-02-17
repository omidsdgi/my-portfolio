import {useAppContext} from "@/contexts/GlobalContext";
import React from "react";

interface Skill {
    icon: React.ReactNode;
    title: string;
    text: { en: string; fa: string };
}

export const SkillsCard = ({ icon, title, text }: Skill) => {
    const { lang } = useAppContext();

    return (
        <article
            className="
        card bg-base-100 text-base-content shadow-md
        hover:shadow-xl border border-transparent hover:border-primary/40
        p-6 flex flex-col h-full
        transition-all duration-300 group
      "
        >
            {/* Icon */}
            <div
                className={`mb-4 flex transition-all duration-300 ${
                    lang === "fa"
                        ? "justify-end group-hover:translate-x-2"
                        : "justify-start group-hover:-translate-x-2"
                }`}
            >
                <div className="transition-transform duration-300 group-hover:scale-150 group-hover:rotate-3 text-primary">
                    {icon}
                </div>
            </div>

            {/* Title */}
            <h4
                className={`text-lg font-bold mb-3 text-base-content ${
                    lang === "fa"
                        ? "text-right font-vazir"
                        : "text-left font-display"
                }`}
            >
                {title}
            </h4>

            {/* Description */}
            <p
                className={`leading-relaxed flex-grow text-base-content ${
                    lang === "fa"
                        ? "rtl-text text-base text-justify font-vazir"
                        : "text-sm text-justify font-display"
                }`}
                dir={lang === "fa" ? "rtl" : "ltr"}
            >
                {text[lang]}
            </p>
        </article>
    );
};

export default SkillsCard