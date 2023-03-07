import Image from "next/image"
import { useEffect, useState } from "react"

import type { ChangeEvent } from "react"
import type Stripe from "stripe"

import { getProduct } from "../../libs/stripe.mjs"

import product from "./product.module.css"

const Product = () => {
  const [quantity, setQuantity] = useState<number>(0)
  const [data, setData] = useState<Stripe.Product | null>(null)

  useEffect(() => {
    const id = window.location.pathname.slice(6)
    const fetchProduct = async () => {
      const productData = await getProduct(id)
      setData(productData)
    }
    fetchProduct()
  }, []) // Alteração aqui

  console.log(data)
  const handleInputNum = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    if (isNaN(newValue)) setQuantity(0)
    const isPositiveNum = !isNaN(newValue) && newValue > 0
    if (isPositiveNum) setQuantity(newValue)
  }

  if (!data) return null
  if (
    !data.default_price ||
    typeof data.default_price == "string" ||
    !data.default_price.unit_amount
  )
    return
  if (typeof data.images[0] == "undefined") return
  const price = Number((data.default_price.unit_amount / 100).toFixed(2))

  return (
    <>
      <div className={product.container}>
        <div className={product.imageWrapper}>
          <Image
            priority
            fill
            className={product.image}
            src={data.images[0]}
            alt={data.name}
          />
        </div>
        <div className={product.flex}>
          <h1 className={product.name}>{data.name}</h1>
          <p className={product.price}>$ {price}</p>
          <p className={product.description}>{data.description}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <label className={product.labelQty} htmlFor="quantity">
              Quantity:
            </label>
            <input
              className={product.quantity}
              onChange={e => handleInputNum(e)}
              type="text"
              inputMode="numeric"
              name="quantity"
              id="quantity"
            />
            <input
              className={product.purchase}
              type="button"
              id="purchase"
              value="PURCHASE"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
