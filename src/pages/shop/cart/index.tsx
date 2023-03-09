import { useContext } from "react"
import Image from "next/image"

import { CartContext } from "../../../utils/cartContext.mjs"

import style from "./cart.module.css"
import CheckoutButton from "../../../components/CheckoutButton"

interface item {
  price?: string | undefined
  quantity?: number | undefined
}

const ShoppingCart = (): JSX.Element => {
  const cart = useContext(CartContext)
  console.log(cart.items)
  let total = 0

  const lineItems: item[] = []

  cart.items.forEach(item => {
    lineItems.push({
      price: item.priceId,
      quantity: item.quantity
    })
  })

  return (
    <section>
      {cart.items.length > 0 ? (
        <>
          {cart.items.map(item => {
            total += item.price * item.quantity
            return (
              <div key={item.id} className={style.container}>
                <div className={style.prod}>
                  <div className={style.wrapper}>
                    <Image
                      fill
                      className={style.image}
                      alt={`Image of art ${item.name}`}
                      src={item.image}
                    />
                  </div>
                  <div className="">
                    <p className={style.name}>{item.name}</p>
                    <div className={style.info}>
                      <p className={style.text}>Qty: {item.quantity}</p>
                      <p className={style.text}>$ {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <p className={style.text}>Total:</p>
                  <p className={style.text}>
                    $ {(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            )
          })}
          <div className={style.total}>
            <p>Total items:</p>
            <p>$ {total}</p>
          </div>
          <CheckoutButton lineItems={lineItems} />
        </>
      ) : (
        <h1 className={style.empty}>
          Your shopping cart is currently empty.
          <br /> Start adding items to your cart by browsing our store and
          selecting the products you want.
          <br />
          <br /> Happy shopping!
        </h1>
      )}
    </section>
  )
}

export default ShoppingCart
