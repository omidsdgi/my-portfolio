import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Lato, Quicksand} from "next/font/google";
import {ThemeProvider} from "next-themes";
import {AppProvider} from "@/GlobalContext";

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
        <div className={`${quicksand.variable} ${lato.variable} `}>
            <AppProvider>
            <Component {...pageProps} />;
            </AppProvider>
        </div>
        </ThemeProvider>
    )
}
