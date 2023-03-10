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

  console.log(cart.items)

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
                  <div>
                    <p className={style.name}>{item.name}</p>
                    <div className={style.addIcon}>
                      <Image
                        onClick={() => cart.addOneToCart(item)}
                        fill
                        className={style.icon}
                        alt="add icon"
                        src="/add.svg"
                      />
                    </div>
                    <div className={style.info}>
                      <p className={style.text}>Qty: {item.quantity}</p>
                      <p className={style.text}>$ {item.price?.toFixed(2)}</p>
                    </div>
                    <div
                      onClick={() => cart.removeOneFromCart(item.id)}
                      className={style.minIcon}
                    >
                      <Image
                        fill
                        className={style.icon}
                        alt="minus icon"
                        src="/minus.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className={style.itemTotal}>
                  <p className={style.text}>Total:</p>
                  <p className={style.text}>
                    $ {(item.quantity * item.price).toFixed(2)}
                  </p>
                  <div
                    onClick={() => cart.deleteFromCart(item.id)}
                    className={style.trashIcon}
                  >
                    <Image
                      fill
                      className={style.icon}
                      alt="trash icon"
                      src="/trash.svg"
                    />
                  </div>
                </div>
              </div>
            )
          })}
          <div className={style.total}>
            <p>Total items: $ {total}</p>
            <CheckoutButton lineItems={lineItems} />
          </div>
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
