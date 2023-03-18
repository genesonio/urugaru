import Stripe from "stripe"

import { env } from "../env/client.mjs"

const secretKey = env.NEXT_PUBLIC_STRIPE_SECRET_KEY

const stripe = new Stripe(secretKey, {
  apiVersion: "2022-11-15"
})

export const getAllProducts = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"]
  })
  const { data } = products
  return data
}

export const getProduct = async id => {
  const productRes = await stripe.products.retrieve(id, {
    expand: ["default_price"]
  })
  const product = productRes
  return product
}
