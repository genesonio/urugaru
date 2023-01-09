import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

import { trpc } from "../utils/trpc"

import "../styles/globals.css"
import Footer from "../components/Footer/Footer"
import Headbar from "../components/Headbar"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <Headbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
