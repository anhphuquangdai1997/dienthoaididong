import { Drawer } from 'flowbite-react'
import React from 'react';

const items = [
    {
        text: 'Sửa Điện Thoại', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/sua-dien-thoai-1.png',
    },
    {
        text: 'Sửa Chữa Laptop', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/laptop-1.png',
    },
    {
        text: 'Sửa MacBook', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/mac-1.png',
    },
    {
        text: 'Điện Thoại Cũ Giá Rẻ', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/may-cu-1.png',
    },
    {
        text: 'Phụ Kiện', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/phu-kien-1.png',
    },
    {
        text: 'Sửa Máy Tính Bảng', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/may-tinh-bang-1.png',
    },
    {
        text: 'Linh Kiện Laptop', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/linh-kien-laptop.png',
    },
];

const DrawerMobile = ({ isOpen, onClose }) => {
    return (
        <Drawer open={isOpen} onClose={onClose} position="left" className="h-full w-[90%]  ">
            <Drawer.Header title="Danh Mục" />
            <Drawer.Items>
                    <ul className="divide-y divide-gray-200 ">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-center justify-between p-2 py-2 hover:bg-gray-100 cursor-pointer">
                                <div className="flex items-center">
                                    <img src={item.icon} alt={item.text} className="w-12 h-16 mr-3" />
                                    <span className="text-gray-700 font-bold text-xl">{item.text}</span>
                                </div>
                                <span className="text-gray-300 ml-2 text-xl">&gt;</span>
                            </li>
                        ))}
                    </ul>
            </Drawer.Items>
        </Drawer>
    )
}

export default DrawerMobile
