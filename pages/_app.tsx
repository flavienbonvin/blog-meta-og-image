import "../styles/globals.css"
import type { AppProps } from "next/app"

import { IBM_Plex_Sans, Alata, Mulish } from "@next/font/google"

const alata = Alata({ weight: ["400"], variable: "--font-alata" })
const mulish = Mulish({
  weight: ["200", "300", "400", "700", "800"],
  variable: "--font-mulish",
})

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={(alata.className, mulish.className, font.className)}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
