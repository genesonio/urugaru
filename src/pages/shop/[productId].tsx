import Image from "next/image"
import { useEffect, useState, useContext } from "react"

import { CartContext } from "../../utils/cartContext.mjs"

import { Product, ProductSample } from "../../types/Product"

import { getProduct } from "../../libs/stripe.mjs"

import style from "./product.module.css"

const Product = () => {
  const [product, setProduct] = useState<Product | null>(null)

  const cart = useContext(CartContext)

  useEffect(() => {
    const prod = ProductSample
    const id = window.location.pathname.slice(6)
    const fetchProduct = async () => {
      const productData = await getProduct(id)
      console.log(productData)
      prod.id = id
      prod.name = productData.name
      if (
        !productData.default_price ||
        typeof productData.default_price == "string" ||
        !productData.default_price.unit_amount
      ) {
        prod.price = 0
      } else {
        prod.price = productData.default_price?.unit_amount
      }
      if (typeof productData.images[0] == "string")
        prod.image = productData.images[0]
      if (typeof productData.description == "string")
        prod.description = productData.description
      setProduct(prod)
    }
    fetchProduct()
  }, [])

  /* const handleInputNum = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    if (isNaN(newValue)) setQuantity(0)
    const isPositiveNum = !isNaN(newValue) && newValue > 0
    if (isPositiveNum) setQuantity(newValue)
  } */

  if (!product) return null

  const productQuantity = cart.getProductQuantity(product.id)

  console.log(cart.items)

  return (
    <>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <Image
            priority
            fill
            className={style.image}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className={style.flex}>
          <h1 className={style.name}>{product.name}</h1>
          <p className={style.price}>$ {(product.price / 100).toFixed(2)}</p>
          <p className={style.description}>{product.description}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <input
              className={style.purchase}
              type="button"
              id="purchase"
              value="Add to cart"
              onClick={() => cart.addOneToCart(product.id)}
            />
            {productQuantity > 0 ? (
              <p className={style.labelQty}>Added to cart: {productQuantity}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
