import {useAppContext} from "@/contexts/GlobalContext";

type SectionTitleProps = {
    text: string;
    showLangButton?: boolean;
    id?: string;
};

// const SectionTitle = ({ text, showLangButton = false, id }: SectionTitleProps) => {
//     const { lang, toggleLang } = useAppContext();
//
//     return (
//         <div
//             id={id}
//             className={`flex items-center justify-between py-8 border-b-2 border-emerald-600/40
//                  `}
//         >
//             <h2 className={`section-title ${lang === 'fa' ? 'font-vazir' : 'font-display'}`}>
//                 {text}
//             </h2>
//
//             {showLangButton && (
//                 <button
//                     onClick={toggleLang}
//                     className="px-5 py-2.5 rounded-lg font-medium text-lg  transition-all duration-200
//                    bg-emerald-500 hover:bg-emerald-600 text-white
//                    shadow-md hover:shadow-lg hover:scale-105 active:scale-95
//                    focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 animate-pulse-scale
//                    dark:focus:ring-offset-slate-900 rtl-text"
//                     aria-label={lang === 'fa' ? 'Switch to Persian' : 'Switch to English'}
//                 >
//                     {lang === 'fa' ? 'Coder & Creative' : 'کـد نـویس و خـلاق'}
//                 </button>
//             )}
//         </div>
//     );
// };


export const SectionTitle = ({ text, showLangButton = false, id }: SectionTitleProps) => {
    const { lang, toggleLang } = useAppContext();

    return (
        <div
            id={id}
            className="flex items-center justify-between py-8 border-b-2 border-primary/40  bg-base-100 text-base-content
        transition-colors duration-500"
        >
            <h2
                className={`section-title text-2xl ml-2 md:text-3xl font-bold text-base-content ${
                    lang === "fa" ? "font-vazir" : "font-display"
                }`}
            >
                {text}
            </h2>

            {showLangButton && (
                <button
                    onClick={toggleLang}
                    className="
                    mr-4
            btn btn-primary btn-md
            normal-case font-medium text-lg
            shadow-md hover:shadow-lg
            transition-transform duration-200
            hover:scale-105 active:scale-95
            animate-pulse-scale
          "
                    aria-label={lang === "fa" ? "Switch to Persian" : "Switch to English"}
                >
                    {lang === "fa" ? "Coder & Creative" : "کـد نـویس و خـلاق"}
                </button>
            )}
        </div>
    );
};


export default SectionTitle;
