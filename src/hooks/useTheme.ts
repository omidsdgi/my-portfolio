import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function useTheme() {
    const [theme, setTheme] = useState<Theme>(() =>
        (typeof window !== 'undefined' && (localStorage.getItem('theme') as Theme)) || 'light',);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    return { theme, toggle };
}
