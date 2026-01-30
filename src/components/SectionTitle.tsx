import {useLangContext} from "@/GlobalContext";
type SectionTitleProps = {
    text: string;
    showLangButton?: boolean; // ✅ prop جدید، اختیاری
};

const SectionTitle = ({text,showLangButton=false}:SectionTitleProps) => {
    const {lang, toggleLang}=useLangContext()
    return (
        <div className='border-b border-gray-200 py-5 flex items-center justify-between'>
            <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
            {lang && showLangButton && (
            <button className='bg-emerald-500 px-4 py-2 rounded animate-pulse-scale' onClick={toggleLang}>{lang === 'fa'? 'Coder & Creative': ' کدنویس و خلاق'}</button>
            )}
        </div>
    );
};

export default SectionTitle;