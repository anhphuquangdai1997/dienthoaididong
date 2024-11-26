import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))

  }, [cart])

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }
  const getCartItemCount = () => {
    return cart.length>0 ? cart.length : null
  }
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item._id !== id))
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, getCartItemCount, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}
