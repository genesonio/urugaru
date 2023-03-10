import React from "react"
import { loadStripe } from "@stripe/stripe-js"

import { env } from "../../env/client.mjs"

import style from "./checkoutb.module.css"

const publicKey = env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY

const stripePromise = loadStripe(publicKey)

const host = "http://localhost:3000"

interface item {
  price?: string | undefined
  quantity?: number | undefined
}

const CheckoutButton = ({ lineItems }: { lineItems: item[] | undefined }) => {
  const handleClick = async (lineItems: item[] | undefined) => {
    const stripe = await stripePromise
    if (!stripe) return console.error("Stripe error")
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: "payment",
      successUrl: `${host}/success`,
      cancelUrl: `${host}/cancel`
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }
  return (
    <button
      role="link"
      className={style.checkout}
      onClick={() => handleClick(lineItems)}
    >
      Checkout
    </button>
  )
}

export default CheckoutButton
