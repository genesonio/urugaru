import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import Head from "next/head"

import { trpc } from "../utils/trpc"
import CartProvider from "../utils/cartContext.mjs"

import "../styles/globals.css"
import Footer from "../components/Footer"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <CartProvider>
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
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
