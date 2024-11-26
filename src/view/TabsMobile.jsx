import React, { useState } from 'react';
import { LuMenuSquare } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import DrawerMobile from './DrawerMobile';
import {Link } from 'react-router-dom';
import Search from '../component/Search';

const TabsMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const handleClose = () => setIsOpen(false);
    const handleCloseSearch=()=>setOpenSearch(false)

    return (
        <div className='md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-white'>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-between">

                    <li onClick={() => setIsOpen(true)} className="me-2">
                        <a
                            href="#"
                            className="inline-flex gap-0.5 items-center justify-center py-2 px-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            aria-current="page"
                        >
                            <LuMenuSquare />
                            Danh Mục
                        </a>
                    </li>
                    <li className="me-2">
                        <a
                            href='/book'
                            className="inline-flex gap-0.5 items-center justify-center py-2 px-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                        >
                            <FaCalendarAlt />
                            Đặt Lịch
                        </a>
                    </li>
                    <li onClick={() => setOpenSearch(true)} className="me-2">
                        <a
                            href="#"
                            className="inline-flex gap-0.5 items-center justify-center py-2 px-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                        >
                            <IoSearch />
                            Tìm Kiếm
                        </a>
                    </li>
                </ul>
                <DrawerMobile isOpen={isOpen} onClose={handleClose}/>
                <Search openSearch={openSearch} onClose={handleCloseSearch}/>
            </div>
        </div>

    )
}

export default TabsMobile
