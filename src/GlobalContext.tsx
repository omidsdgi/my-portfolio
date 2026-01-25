import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
    children: ReactNode;
}

export type Language = "en" | "fa";

export interface ChangeLanguageType {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLang: () => void;
}

const AppContext = createContext<ChangeLanguageType | undefined>(undefined);

export const AppProvider = ({ children }: Props) => {
    const [lang, setLang] = useState<Language>("en");

    const toggleLang = () => {
        setLang((prev) => (prev === "en" ? "fa" : "en"));
    };

    return (
        <AppContext.Provider value={{ lang, setLang, toggleLang }}>
            {children}
        </AppContext.Provider>
    );
};

export const useLangContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useLangContext must be used within an AppProvider");
    }
    return context;
};
