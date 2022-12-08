import "../styles/globals.css"
import type { AppProps } from "next/app"

import { IBM_Plex_Sans } from "@next/font/google"
const font = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
