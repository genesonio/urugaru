/* eslint-disable @next/next/no-page-custom-font */
import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { Analytics } from "@vercel/analytics/react"

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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        />
      </Head>
      <Headbar />
      <Component {...pageProps} />
      <Analytics
        beforeSend={event => {
          if (event.url.includes("/admin")) return null
          if (event.url.includes("/admin/login")) return null
          return event
        }}
      />
      <Footer />
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
