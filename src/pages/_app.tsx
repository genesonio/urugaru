/* eslint-disable @next/next/no-page-custom-font */
import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

import { trpc } from "../utils/trpc"

import "../styles/globals.css"
import Footer from "../components/Footer/Footer"
import Headbar from "../components/Headbar"
import Head from "next/head"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>uruGaru</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Headbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
