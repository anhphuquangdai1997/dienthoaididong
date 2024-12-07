import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import BackHeader from '../component/BackHeader';

const Book = () => {
    const [startDate, setStartDate] = useState(null);
    const location =useLocation();
    const name =location.state?.name ||'đặt lịch hẹn bảo hành và sửa chữa';
    
    return (
        <div className="container mx-auto py-14 max-w-3xl">
            <BackHeader/>
            <h1 className="text-xl text-center text-red-600 font-bold mb-4 uppercase">{name}</h1>
            <form className='w800:px-[40px] w800:py-[24px] p-6  bg-white rounded-md shadow-md border border-gray-300'>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="name">
                        Họ và tên *
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Nguyen Van A"
                        className="w-full p-2 border border-gray-300 rounded-md bg-slate-100"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="phone">
                        Số điện thoại *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="0903.xxx.xxx"
                        className="w-full p-2 border border-gray-300 rounded-md bg-slate-100"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="region">
                        <FaCalendarAlt />
                    </label>

                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full p-2 border border-gray-300 rounded-md bg-slate-100"
                        placeholderText="Chọn ngày"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="device">
                        Dòng máy cần sửa chữa *
                    </label>
                    <input
                        type="text"
                        id="device"
                        placeholder="Dòng máy (VD: iPhone 11 Pro Max, ...)"
                        className="w-full p-2 border border-gray-300 rounded-md bg-slate-100"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="description">
                        Mô tả lỗi *
                    </label>
                    <textarea
                        id="description"
                        placeholder="Mô tả lỗi (Bắt buộc)"
                        className="w-full p-2 border border-gray-300 rounded-md bg-slate-100"
                        required
                    />
                </div>

                <div className="mb-4">
                    <input type="checkbox" id="recaptcha" className="mr-2" required />
                    <label htmlFor="recaptcha" className="text-sm">
                        Tôi không phải là người máy
                    </label>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <button className="uppercase w-[120px] h-[40px] text-[#ffffff] text-sm w600:text-base font-semibold bg-black rounded-md">
                        TIẾP TỤC
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Book;

