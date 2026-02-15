import type { Config } from 'tailwindcss'
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                lato: ['var(--font-lato)'],
                quicksand: ['var(--font-quicksand)'],
                vazir: ['Vazirmatn', 'sans-serif'],
            },
            keyframes: {
                pulseScale: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                },
            },
            animation: {
                'pulse-scale': 'pulseScale 2s ease-in-out infinite',
            },
        },
    },
    plugins: [typography, daisyui],
    daisyui: {
        themes: ['winter', 'dracula'],
    },
} satisfies Config;

export default config;
