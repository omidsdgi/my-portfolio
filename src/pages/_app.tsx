import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Inter, Lato, Poppins, Quicksand} from "next/font/google";
import {AppProvider} from "@/contexts/GlobalContext";
import { ThemeProvider } from "next-themes";


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
const quicksand=Quicksand({
    subsets:['latin'],
    variable:'--font-quicksand'
})

const lato=Lato({
    weight:['300','400','100'],
    subsets:["latin"],
    variable:'--font-lato'
})



export default function App({ Component, pageProps }: AppProps) {
    return(
        <ThemeProvider attribute={"class"} defaultTheme="light" enableSystem={false}>
        <div className={`${quicksand.variable} ${lato.variable} ${inter.variable} ${poppins.variable} `}>
            <AppProvider>
            <Component {...pageProps} />;
            </AppProvider>
        </div>
        </ThemeProvider>
    )
}
