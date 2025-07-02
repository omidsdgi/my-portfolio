import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Lato, Quicksand} from "next/font/google";

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
        <div className={`${quicksand.variable} ${lato.variable} `}>
            <Component {...pageProps} />;
        </div>
    )
}
