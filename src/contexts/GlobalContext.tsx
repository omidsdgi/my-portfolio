import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Language = "en" | "fa";
export type ThemeName = "winter" | "dracula";

export interface AppContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLang: () => void;

    theme: ThemeName;
    isDark: boolean;
    toggleTheme: () => void;
}

interface Props {
    children: ReactNode;
}

const themes = {
    winter: "winter",
    dracula: "dracula",
} as const;

/**  تعیین تم از localStorage یا سیستم کاربر */
const getInitialTheme = (): ThemeName => {
    if (typeof window === "undefined") return themes.winter;

    const storedTheme = localStorage.getItem("theme") as ThemeName | null;
    if (storedTheme && Object.values(themes).includes(storedTheme)) return storedTheme;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? themes.dracula : themes.winter;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: Props) => {
    const [lang, setLang] = useState<Language>("en");
    const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

    const isDark = theme === themes.dracula;

    const toggleTheme = () => {
        setTheme((prev) => (prev === themes.winter ? themes.dracula : themes.winter));
    };

    const toggleLang = () => {
        setLang((prev) => (prev === "en" ? "fa" : "en"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <AppContext.Provider value={{ lang, setLang, toggleLang, theme, isDark, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within an AppProvider");
    return context;
};
