import { trpc } from "../../utils/trpc"
import product from "./product.module.css"
import Image from "next/image"
import type { ChangeEvent } from "react"
import { useState } from "react"

const Product = () => {
  const [quantity, setQuantity] = useState<number>(0)

  const id = localStorage.getItem("productId") ?? ""
  const { data } = trpc.print.getOne.useQuery({ id })
  if (!data) return <h1>Art not found</h1>
  const handleInputNum = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    if (isNaN(newValue)) setQuantity(0)
    const isPositiveNum = !isNaN(newValue) && newValue > 0
    if (isPositiveNum) setQuantity(newValue)
  }
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
          <p className={product.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            neque, aliquid autem odio ipsum consectetur. Consequatur dolores
            suscipit illum repudiandae fugiat! Magnam maxime quaerat veritatis
            tempora beatae reiciendis, alias vel?
          </p>
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
    </>
  )
}

export default Product
