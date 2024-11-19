import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';

const Cart = () => {

  const { cart,removeFromCart,} = useContext(CartContext)

  if (cart.length === 0) {
    return <p className="text-center text-gray-500 py-20">Giỏ hàng của bạn đang trống.</p>;
  }
  // const totalPrice = cart.reduce((acc, item) => {  
  //   return acc + item.price * item.quanlity;
  // }, 0);
  // console.log(typeof totalPrice)  

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Giỏ hàng</h1>

      <div className="space-y-4">
        {cart.map(item => (
          <div key={item._id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={item.images[0].url} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Giá: ${item.price}</p>
                <span className='flex'>
                <p className="text-gray-600">Số lượng:{item.quanlity}</p>
                  <input
                  type="number"
                  min="1"
                  max={item.Stock}
                  defaultValue="1"
                  className="w-16 border border-gray-300 py-0.5 px-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                /></span>
              </div>
            </div>
            <button
              onClick={()=>removeFromCart(item._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
              Xóa
            </button>
          </div>
        ))}
      </div>

      {/* Tổng giá trị giỏ hàng */}
      <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md flex justify-between items-center">
        <h2 className="text-xl font-semibold">Tổng cộng:</h2>
        <p className="text-xl font-bold text-gray-800">$</p>
      </div>

      {/* Nút thanh toán */}
      <div className="mt-6 flex justify-end">
        <Link to="/checkout">
          <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
            Thanh toán
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
