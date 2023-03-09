import { createContext, useState } from "react"

export const CartContext = createContext({
  items: [
    {
      id: "prod_NSFapMjEZUC0wx",
      image:
        "https://files.stripe.com/links/MDB8YWNjdF8xTVlHc3BKNkpNeGtlc1JWfGZsX3Rlc3Rfd0VQMkt5V1NOMnViNEI2NUNUT2RKV3c400CLlet9Eg",
      name: "Alice in Nightmareland",
      price: 35,
      priceId: "",
      quantity: 6
    }
  ],
  getProductQuantity: id => {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
      return 0
    }

    return quantity
  },
  addOneToCart: product => {
    const quantity = getProductQuantity(product.id)

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: product.id,
          quantity: 1
        }
      ])
    } else {
      setCartProducts(
        cartProducts.map(prod =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        )
      )
    }
  },
  deleteFromCart: id => {
    setCartProducts(cartProducts =>
      cartProducts.filter(product => product.id != id)
    )
  },
  removeOneFromCart: id => {
    const quantity = getProductQuantity(id)

    if (quantity == 1) {
      deleteFromCart(id)
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      )
    }
  },
  getTotalCost: () => {
    let totalCost = 0
    cartProducts.map(product => (totalCost += product.price + product.quantity))
    return totalCost
  }
})

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const getProductQuantity = id => {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
      return 0
    }

    return quantity
  }

  const addOneToCart = product => {
    const quantity = getProductQuantity(product.id)

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          ...product,
          quantity: 1
        }
      ])
    } else {
      setCartProducts(
        cartProducts.map(prod =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        )
      )
    }
  }

  const deleteFromCart = id => {
    setCartProducts(cartProducts =>
      cartProducts.filter(product => product.id != id)
    )
  }

  const removeOneFromCart = id => {
    const quantity = getProductQuantity(id)

    if (quantity == 1) {
      deleteFromCart(id)
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      )
    }
  }

  const getTotalCost = () => {
    let totalCost = 0
    cartProducts.map(product => (totalCost += product.price + product.quantity))
    return totalCost
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export default CartProvider
