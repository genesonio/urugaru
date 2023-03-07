import Stripe from "stripe"

const stripe = new Stripe(
  "sk_test_51MYGspJ6JMxkesRVEX8gwop3SCou3S0xe0sbNiesIT75UeN5FxLNA8MIgfxsamKsX6hUYQajHbhx9O8a2iL7rDHo00xkpHIX97",
  {
    apiVersion: "2022-11-15"
  }
)

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
