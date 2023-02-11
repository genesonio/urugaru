/* eslint-disable @next/next/no-page-custom-font */
import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import Head from "next/head"

import { Analytics } from "@vercel/analytics/react"

import { trpc } from "../utils/trpc"

import "../styles/globals.css"
import Footer from "../components/Footer"
import Headbar from "../components/Headbar"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>uruGaru</title>

        <meta charSet="UTF-8" />
        <meta name="description" content="Art gallery" />
        <meta
          name="keywords"
          content="Art, gallery, urugaru, art shop, print"
        />
        <meta name="author" content="urugaru" />
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
