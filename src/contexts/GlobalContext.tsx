import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface Props {
    children: ReactNode;
}

export type Language = "en" | "fa";
export type theme= "light" | "dark";

export interface AppContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLang: () => void;

    theme: theme;
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: Props) => {
    const [lang, setLang] = useState<Language>("en");
    const [theme, setTheme] = useState<theme>("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme") as theme | null;
        const initial=stored ?? 'light'
        setTheme(initial)
        document.documentElement.classList.add(initial);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove (theme === 'light' ? 'dark' : 'light');
        root.classList.add (theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev)=>prev === 'light' ? 'dark' : 'light');
    }
    const toggleLang = () => {
        setLang((prev) => (prev === "en" ? "fa" : "en"));
    };
    return (
        <AppContext.Provider value={{ lang, setLang, toggleLang, theme, toggleTheme  }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
