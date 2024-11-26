import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';
import { IoMdArrowRoundBack } from "react-icons/io";

const Cart = () => {

  const { cart,removeFromCart} = useContext(CartContext)
  const navigation =useNavigate()
  const handleClick =()=>{
    navigation('/')
  }
  if (cart.length === 0) {
    return <p className="text-center text-gray-500 py-20">Giỏ hàng của bạn đang trống.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className='relative w-full flex items-center justify-center border-b py-2'>
        <span onClick={handleClick} className='absolute left-0 top-1/2 cursor-pointer'><IoMdArrowRoundBack/></span>
        <h2 className='my-0 py-1 text-base font-semibold'>Trang Chủ</h2>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Giỏ hàng</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item._id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={item.images[0].url} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Giá: ${item.price}</p>
                <span className='flex gap-1'>
                <button className="rounded-md p-1 w-8 text-center border border-gray-300 rounded-l-md hover:bg-gray-200">-</button>
                  <input
                  type="number"
                  max={item.Stock}
                  defaultValue="1"
                  className="w-8 text-center border border-gray-300 rounded-md p-1"
                />
                <button className="rounded-md p-1 w-8 text-center border border-gray-300 rounded-l-md hover:bg-gray-200">+</button>
                </span>
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
