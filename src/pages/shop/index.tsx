import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import type { Key } from "react"
import type Stripe from "stripe"

import { getAllProducts } from "../../libs/stripe.mjs"

import Print from "../../components/Print"

import shopStyle from "./shop.module.css"

const Shop = ({ products }: { products: Stripe.Product[] }) => {
  const [isInactive, setIsInactive] = useState<boolean>(false)

  if (typeof products == "undefined")
    return <h1>Ops! Something wrong happened</h1>

  const allInactive = products.every(product => product.active === false)
  if (allInactive) setIsInactive(true)

  console.log(products)

  return (
    <>
      {isInactive && (
        <div style={{ width: "90vw", textAlign: "center" }}>
          <h1>Thank you for visiting our shop!</h1>
          <h2>
            We&apos;re still setting things up and not currently able to sell
            any prints at the moment, but please check back soon for updates!
          </h2>
        </div>
      )}
      {products.length == 0 && !isInactive && (
        <Image
          priority
          style={{ alignSelf: "center", marginTop: "10rem" }}
          height={300}
          width={300}
          alt="Loading"
          src="/Loading.svg"
        />
      )}
      <div className={shopStyle.shop}>
        {products.map(
          (
            {
              id,
              name,
              default_price,
              images,
              active
            }: {
              id: string
              name: string
              default_price?: string | Stripe.Price | null | undefined
              images: string[]
              active: boolean
            },
            index: Key | null | undefined
          ) => {
            if (
              !default_price ||
              typeof default_price == "string" ||
              !default_price.unit_amount
            )
              return
            if (typeof images[0] == "undefined") return
            if (!active) return
            const price = Number((default_price.unit_amount / 100).toFixed(2))
            return (
              <Link
                className={shopStyle.link}
                key={index}
                href="/shop/[productId]"
                as={`/shop/${id}`}
              >
                <Print
                  price={price}
                  alt={name}
                  name={name}
                  url={images[0]}
                  key={index}
                  showPrice={true}
                />
              </Link>
            )
          }
        )}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const products = await getAllProducts()

  return {
    props: {
      products
    }
  }
}

export default Shop
