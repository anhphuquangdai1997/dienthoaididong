import React, { useState } from 'react';
import ModalMenu from './ModalMenu';

// Dữ liệu cho danh sách  
const items = [
    {
        text: 'Sửa Điện Thoại', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/sua-dien-thoai-1.png',
        services: [
            "Thay pin Điện Thoại",
            "Thay loa Điện Thoại",
            "Sửa nguồn Điện Thoại",
            "Tái nghe Điện Thoại bị rè",
            "Thay hộp Điện Thoại"
        ],
    },
    { text: 'Sửa Chữa Laptop', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/laptop-1.png',
        services: [
        "Thay pin Laptop",
        "Thay loa Laptop",
        "Sửa nguồn Laptop",
        "Tái nghe Laptop bị rè",
        "Thay hộp Laptop đựng"
    ], },
    { text: 'Sửa MacBook', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/mac-1.png',
        services: [
        "Thay pin MacBook",
        "Thay loa MacBook",
        "Sửa nguồn MacBook",
        "Tái nghe MacBook bị rè",
        "Thay hộp đựng MacBook"
    ], },
    { text: 'Điện Thoại Cũ Giá Rẻ', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/may-cu-1.png',
        services: [
        "Thay pin Điện Thoại Cũ Giá Rẻ",
        "Thay loa Điện Thoại Cũ Giá Rẻ",
        "Sửa nguồn Điện Thoại Cũ Giá Rẻ",
        "Tái nghe Điện Thoại Cũ Giá Rẻ bị rè",
        "Thay hộp đựng Điện Thoại Cũ Giá Rẻ"
    ], },
    { text: 'Phụ Kiện', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/phu-kien-1.png',
        services: [
        "Thay pin Phụ Kiện",
        "Thay loa Phụ Kiện",
        "Sửa nguồn Phụ Kiện",
        "Tái nghe Phụ Kiện bị rè",
        "Thay hộp đựng Phụ Kiện"
    ], },
    { text: 'Sửa Máy Tính Bảng', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/may-tinh-bang-1.png',
        services: [
        "Thay pin Tính Bảng",
        "Thay loa Tính Bảng",
        "Sửa nguồn Tính Bảng",
        "Tái nghe bị rè Tính Bảng",
        "Thay hộp đựng Tính Bảng"
    ], },
    { text: 'Linh Kiện Laptop', icon: 'https://cdni.dienthoaivui.com.vn/40x40,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/linh-kien-laptop.png',
        services: [
        "Thay pin AirPods",
        "Thay loa AirPods",
        "Sửa nguồn AirPods",
        "Tái nghe bị rè",
        "Thay hộp đựng"
    ], },
];

const ServiceList = ({isDarkMode}) => {
    const [openModal, setOpenModal] = useState(false);
    const [textt, setTextt] = useState('');
    const [servicess, setSerVicess] = useState([]);

    const handleItemClick=(text,services)=>{
        setTextt(text)
        setSerVicess(services)
        setOpenModal(true);
    }

    return (
        <div className={`${isDarkMode ?('bg-customDark text-white'):('bg-white text-gray-600')} max-w-sm shadow-md rounded-lg overflow-hidden hidden md:block customscreen:block customscreen-max:hidden`}>
            <ul className={` ${isDarkMode?'border border-transparent border-slate-600 divide-gray-200' :'divide-y divide-gray-200'}`}>
                {items.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item.text,item.services)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center">
                            <img src={item.icon} alt={item.text} className="w-6 h-6 mr-3" />
                            <span className="">{item.text}</span>
                        </div>
                        <span className=" ml-2 text-xl">&gt;</span>
                    </li>
                ))}
            </ul>
            <ModalMenu openModal={openModal} setOpenModal={setOpenModal} text={textt} services={servicess}/>
        </div>
    );
};

export default ServiceList;