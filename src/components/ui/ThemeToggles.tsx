import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // این مرحله برای جلوگیری از mismatch در SSR ضروری است
    useEffect(() => setMounted(true), []);

    if (!mounted) return null; // صبر می‌کنیم تا کلاینت آماده شود

    const isDark = theme === 'dark';
    const Icon = isDark ? Sun : Moon;

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-full transition hover:scale-110
                 bg-foreground text-background dark:bg-background dark:text-foreground"
        >
            <Icon className="w-5 h-5" />
        </button>
    );
}

