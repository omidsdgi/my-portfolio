import { AppProps } from "next/app";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { AppProvider } from "@/context/GlobalContext";
import { ThemeProvider } from "next-themes";

// Google Fonts
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
});

// Persian Font - Vazirmatn
const vazir = localFont({
    src: [
        { path: "/fonts/Vazirmatn-Regular.woff2", weight: "400", style: "normal" },
        { path: "/fonts/Vazirmatn-Medium.woff2", weight: "500", style: "normal" },
        { path: "/fonts/Vazirmatn-Bold.woff2", weight: "700", style: "normal" },
        { path: "/fonts/Vazirmatn-Black.woff2", weight: "900", style: "normal" },
    ],
    variable: "--font-vazir",
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange={false}
        >
            <div className={`${inter.variable} ${poppins.variable} ${vazir.variable} font-sans`}>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </div>
        </ThemeProvider>
    );
}
