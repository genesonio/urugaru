import { createContext, useState } from "react"

export const CartContext = createContext({
  items: [],
  getProductQuantity: id => {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
      return 0
    }

    return quantity
  },
  addOneToCart: id => {
    const quantity = getProductQuantity(id)

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1
        }
      ])
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
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

  const addOneToCart = id => {
    const quantity = getProductQuantity(id)

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1
        }
      ])
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
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
