import React, { useState } from 'react'
import ProductAdmin from './ProductAdmin';
import OrderAdmin from './OrderAdmin';
import UserAdmin from './UserAdmin';
import { FaChartPie } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdEditNote } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
    return (
        <div className='mt-16'>
            
            <aside
                id="default-sidebar"
                className="mt-16 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">

                        <li>
                            <a
                                href="#"
                                className="flex items-center bg-red-300 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
                            >
                                <FaChartPie />
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setSelectedMenu('product')}
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <AiFillProduct />
                                <span className="flex-1 ms-3 whitespace-nowrap">Product</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setSelectedMenu('order')}
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <MdEditNote />
                                <span className="flex-1 ms-3 whitespace-nowrap">Order</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setSelectedMenu('rating')}
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <FaStar />
                                <span className="flex-1 ms-3 whitespace-nowrap">Rating & Review</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setSelectedMenu('user')}
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <FaUser />
                                <span className="flex-1 ms-3 whitespace-nowrap">User</span>
                            </a>
                        </li>
                        {/* Add more menu items here */}
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    {/* Hiển thị nội dung tương ứng với menu đã chọn */}
                    {selectedMenu === 'order' && <OrderAdmin/>}
                    {selectedMenu === 'product' && <ProductAdmin/>}
                    {selectedMenu === 'user' && <UserAdmin/>}
                    {selectedMenu === 'rating' && <p>rating content</p>}
                </div>
            </div>
        </div>
    );
}

export default Dashboard
