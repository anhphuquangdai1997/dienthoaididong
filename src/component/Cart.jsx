import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';

import { Toast } from "flowbite-react";
import BackHeader from './BackHeader';
import { DarkModeContext } from '../contex/DarkModeContext';

const Cart = () => {

  const [showToast, setShowToast] = useState(false);
  const { cart,removeFromCart,quantities,updateQuantity } = useContext(CartContext)
  const {isDarkMode} =useContext(DarkModeContext)
  if (cart.length === 0) {
    return <p className={`text-center py-20 ${isDarkMode?'bg-customDark text-white':'text-gray-600'}`}>Giỏ hàng của bạn đang trống.</p>;
  }
  //xoá sản phẩm
  const handleRemove=(itemId)=>{
    removeFromCart(itemId)
    setShowToast(true)
    setTimeout(()=>setShowToast(false),3000)
  }
  //nút giảm
  const handleDes=(itemId)=>{
    updateQuantity(itemId,-1)
  }
  //nút tăng
  const handleIncre=(itemId, stock)=>{
    if(quantities[itemId]<stock){
      updateQuantity(itemId,1)
    }
    
  }
  //tính tổng
  const calculateTotal=()=>{
    return cart.reduce((total,item)=>{
      return total+item.price*(quantities[item._id]||1)
    },0)
  }

  return (
    <div className={`${isDarkMode?'bg-customDark text-white':'text-gray-600'}`}>
      <div className={`${isDarkMode?'bg-customDark text-white':'text-gray-600'}  max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-lg`}>
      <BackHeader/>
      <h1 className="text-2xl font-bold mb-6">Giỏ hàng</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item._id} className="flex items-center justify-between p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={item.images[0].url} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="">Giá: ${item.price}</p>
                <span className='flex gap-1'>
                <button onClick={()=>handleDes(item._id)} className="rounded-md p-1 w-8 text-center border border-gray-300 rounded-l-md hover:bg-gray-200">-</button>
                  <input
                  type="number"
                  value={quantities[item._id] || 1}
                  readOnly
                  className="w-8 text-center border border-gray-300 text-gray-500 rounded-md p-1"
                />
                <button onClick={()=>handleIncre(item._id,item.Stock)} className="rounded-md p-1 w-8 text-center border border-gray-300 rounded-l-md hover:bg-gray-200">+</button>
                </span>
              </div>
            </div>
            <button
              onClick={()=>handleRemove(item._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
              Xóa
            </button>
          </div>
        ))}
      </div>

      {/* Tổng giá trị giỏ hàng */}
      <div className="mt-6 p-4  rounded-lg shadow-md flex justify-between items-center">
        <h2 className="text-xl font-semibold">Tổng cộng:</h2>
        <p className="text-xl font-bold">{calculateTotal()}$</p>
      </div>

      {/* Nút thanh toán */}
      <div className="mt-6 flex justify-end">
        <Link to="/checkout">
          <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
            Thanh toán
          </button>
        </Link>
      </div>
       {/* Hiển thị Toast */}
       {showToast && (
        <Toast className="fixed top-4 right-4 z-50">
          <div className="flex items-center space-x-4">
            <span className="text-green-600">Sản phẩm đã được xóa thành công</span>
          </div>
        </Toast>
      )}
    </div>
    </div>
  );
};

export default Cart;
