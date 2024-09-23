import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()
export const CartProvider = ({children})=>{
    const [cart, setCart] = useState(()=>{
        const savedCart=localStorage.getItem('cart')
        return savedCart ?JSON.parse(savedCart) :[]
    })

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])
    

    const addToCart=(product)=>{
        setCart((prevCart)=>[...prevCart,product])
    }
    const removeFromCart = (productId) => {  
        setCart((prevCart) => prevCart.filter(product => product.id !== productId))  
    }
    const getCartItemCount=()=>{
        return cart.length
    }  

  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,getCartItemCount}}>
        {children}
    </CartContext.Provider>
  )
}
