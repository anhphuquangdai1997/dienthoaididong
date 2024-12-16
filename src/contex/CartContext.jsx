import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  const [orderData, setOrderData] = useState(()=>{
    const savedOrderData = localStorage.getItem('orderData')
    return savedOrderData ?JSON.parse(savedOrderData):{};
  })

  const [quantities, setQuantities] = useState(()=>{
    const savedQuantities =localStorage.getItem('quantities')
    return savedQuantities ? JSON.parse(savedQuantities) : {}
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('quantities', JSON.stringify(quantities))
    localStorage.setItem('orderData', JSON.stringify(orderData))

  }, [cart,quantities,orderData])

  const addToCart = (product) => {
    setCart((prevCart)=>{
      const existingProduct =prevCart.find((item)=>item._id===product._id);
      if(existingProduct){
        setQuantities((prevQuantities)=>({
          ...prevQuantities,
          [product._id]: (prevQuantities[product._id] || 0) + 1,
        }))
        return prevCart;
      }
      else {
        setQuantities((prevQuantities)=>({
          ...prevQuantities,
          [product._id]:1,
        }));
        return [...prevCart, product]
      }
    })
  }
  const getCartItemCount = () => {
    return cart.length>0 ? cart.length : null
  }
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item._id !== id))
    setQuantities((prevQuantities) => {
      const newQuantities = {...prevQuantities}
      delete newQuantities[id]
      return newQuantities

    })
  };

  const updateQuantity =(id,amount)=>{
    setQuantities((prevQuantities) =>({
      ...prevQuantities,
      [id]:Math.max((prevQuantities[id]||0)+amount,0),// Ngăn số lượng âm  
    }))}
  return (
    <CartContext.Provider value={{ cart, addToCart, getCartItemCount, removeFromCart,quantities,updateQuantity,orderData, setOrderData}}>
      {children}
    </CartContext.Provider>
  )
}
