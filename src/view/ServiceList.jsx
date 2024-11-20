import React from 'react';  

// Dữ liệu cho danh sách  
const items = [  
  { text: 'Sửa Điện Thoại', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/sua-dien-thoai-1.png' },  
  { text: 'Sửa Chữa Laptop', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/laptop-1.png' },  
  { text: 'Sửa MacBook', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/mac-1.png' },  
  { text: 'Điện Thoại Cũ Giá Rẻ', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/may-cu-1.png' },  
  { text: 'Phụ Kiện', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/phu-kien-1.png' },  
  { text: 'Sửa Máy Tính Bảng', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/may-tinh-bang-1.png' },  
  { text: 'Linh Kiện Laptop', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/linh-kien-laptop.png' }, 
];  

const ServiceList = () => {  
  return (  
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden hidden md:block">  
      <ul className="divide-y divide-gray-200">  
        {items.map((item, index) => (  
          <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">  
            <div className="flex items-center">  
              <img src={item.icon} alt={item.text} className="w-6 h-6 mr-3" />  
              <span className="text-gray-700">{item.text}</span>  
            </div>  
            <span className="text-gray-300 ml-2 text-xl">&gt;</span> 
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default ServiceList;