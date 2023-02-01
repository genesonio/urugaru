import { trpc } from "../../utils/trpc"
import product from "./product.module.css"
import Image from "next/image"
import type { ChangeEvent } from "react"
import { useEffect } from "react"
import { useState } from "react"

const Product = () => {
  const [quantity, setQuantity] = useState<number>(0)
  const [id, setId] = useState<string>("")

  useEffect(() => setId(window.location.pathname.slice(6)), [])

  const { data } = trpc.print.getOne.useQuery({ id })

  const handleInputNum = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    if (isNaN(newValue)) setQuantity(0)
    const isPositiveNum = !isNaN(newValue) && newValue > 0
    if (isPositiveNum) setQuantity(newValue)
  }

  if (!data) return null
  return (
    <>
      <div className={product.container}>
        <Image
          className={product.image}
          width={324}
          height={458}
          src={data.url}
          alt={data.name}
        />
        <div className={product.flex}>
          <h1 className={product.name}>{data.name}</h1>
          <p className={product.price}>$ {data.price?.toFixed(2)}</p>
          <p className={product.description}>{data.description}</p>
          <label className={product.labelQty} htmlFor="quantity">
            Quantity: {quantity}
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
    </>
  )
}

export default Product
