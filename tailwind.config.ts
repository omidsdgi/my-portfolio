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
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
