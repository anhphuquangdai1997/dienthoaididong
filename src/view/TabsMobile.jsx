import React from 'react';
import { LuMenuSquare } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const TabsMobile = () => {
    return (
        <div className='md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-white'>
            <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-between">
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex gap-0.5 items-center justify-center py-2 px-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                        <FiShoppingCart />
                        Sản Phẩm
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex gap-0.5 items-center justify-center py-2 px-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                        aria-current="page"
                    >
                        <LuMenuSquare />
                        Danh Mục
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex gap-0.5 items-center justify-center py-2 px-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                        <FaCalendarAlt />
                        Đặt Lịch
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex gap-0.5 items-center justify-center py-2 px-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                        <IoSearch />
                        Tìm Kiếm
                    </a>
                </li>
            </ul>
        </div>
        </div>

    )
}

export default TabsMobile
