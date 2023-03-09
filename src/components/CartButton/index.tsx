import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"

import { CartContext } from "../../utils/cartContext.mjs"

import style from "./style.module.css"

const CartButton = (): JSX.Element => {
  const cart = useContext(CartContext)
  const total = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  return (
    <>
      <div className={style.wrapper}>
        <p className={style.total}>{total}</p>
        <Link href="/shop/cart">
          <Image
            fill
            className={style.icon}
            alt="Cart button"
            src="/shop.svg"
          />
        </Link>
      </div>
    </>
  )
}

export default CartButton
