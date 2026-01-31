import type { Config } from 'tailwindcss'

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
                quicksand: ['var(--font-quicksand)', 'sans-serif'],
                tahoma: ['Tahoma', 'sans-serif'],
                vazir: ['var(--font-vazir)'],
                sans: ['var(--font-inter)'],
                display: ['var(--font-poppins)'],
                mono: ['var(--font-fira-code)'],
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
    plugins: [],
} satisfies Config;

export default config;
