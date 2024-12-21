import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';
import { useAuth } from '../contex/AuthContext';
import { FaCalendarAlt } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineSun } from "react-icons/ai";
import { DarkModeContext } from '../contex/DarkModeContext';

const Navbar = () => {
    const { getCartItemCount, cart } = useContext(CartContext);
    const { isAuthenticated, logout, currentUser } = useAuth();
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownnote, setIsDropdownnote] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const toggleDropdownnote = () => {
        setIsDropdownnote((prev) => !prev)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
        setIsDropdownnote(false)
    };

    return (
        <nav className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 right-0 z-50`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 xxs:p-1 ">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={`${isDarkMode ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC6CAMAAABoQ1NAAAAAhFBMVEUAAAD////m5ub4+PicnJz19fXOzs5kZGSpqamPj4/7+/vR0dHX19eYmJhNTU1aWlppaWlfX1/v7+/AwMA+Pj5GRkaSkpKioqJ5eXnq6uo2Njbg4OCFhYVtbW2np6fIyMgZGRm3t7cYGBgmJiaxsbEwMDAODg6AgIBKSkoqKipUVFQyMjKJwgLZAAAEL0lEQVR4nO3d63aiMBQFYIJY0WJRsdV6KVrtdd7//cZq7YBBcSKnx637+9nVtSZnTwiQC/U8IiIiIiIiIiIiIiIiIiIiIiJnL/GLdhPORT+4NcZ0tJtxHpq+WWtoN+QMzEKzxTi8B2MYx9b72DCOH02T80e7PbqSfBot7fbous2nYSLtBqnaTcMMtFukabCbhulrN0nR0ErjUbtJikZWGuZBu02KxlYade0mKZrYnSPQbpOiOjtHRtvuHFPtNimyO0eq3SRFHfsm+6rdJkWpFceddpM0WWnE2i3SZF0r13yP9bynnTTa2g3SFeXT6Gq3R1kvG0bvqkfRLy0+b2RlHje40PQvDn+o3ZKzUFtF0fLb1zZojOJOszm0F6Lv+/1R7gezTjtMoigNB9P7X2vdr+rOx7XtRVFPm/urfH1LcneaWjS4tDtvN6mZHY/Lwmujac+KfeU3v6AL6e2xqMTVyBnsTJUP7Ve5H+MLGWbjwv/vb9Fksf29RmJPeuQDuYRhJDlc4yqR4HM2GqbW1VRgqV3MqeJjqjyej91BCqZAT4Scx7zyNJC3i1lL0JVAXbgtHUQdYT6CVD9ufINcyY6l0sAcPqq9w2akiCswN1JpTLQrc9EQCqOHuQBT8vrhnMazdmFOHsoru6I0hDpHC3EQ9ay9w1VB3ZLdKy/NAeou00+RNHztslwtReL41C7Llci1cqNdlat3iTRA32M9oVfZsXZVzkReV5raVTkTeZddlP+752khkQbklM+ayMtsol2VM5EndMhZjrVAIg7cDeoiE+jv2lU5E7nPfmhX5UwkDtB5H08ojpl2Vc6i8uL+H3tHDu7CvUgcuDdaxpEjEsdcuypnIlODuN9qEJn9wf2Sh8wiC+zgIbOxA/YN/0MkDtyrRSQO3MlSXyQO2C8UyCzCwS7RSm0ZBJ3zuBOKA3XlqVVempMn7cLciO0afNOuzInYfmPM/T8y211w85DZDLWG+PEGoSePNcCZj65gHMbH2/giGQfgCcGwvKaTBFjbPaQeTH+AjSCC95Y1sFP5Qnv0t+Amg2TjgHvZlzomuQH3wfB7yTQAV11kzhRvAJ4AEzw4CrmrUq57QH7YRKx7QHYOue4B2Tk8ry+TBuBtZYOnnvIkzi7Arl0XfdH5ZC3cPYQSSwy4e/VXnqtegYIdRzem1abRwpoFs1V7dwF95MjY871BJ2BTgkUqPBoHe+w8q7qzcbgb07OqOg2GP3BsVHOkA3F1tlgVedxqF1Gh05ddLikN7/XUjwFdVBreweslmgdfkgP7UWE/3rFX8dtcNMnePRuD4khCtVbLsU8y+JOZ9Vv90Hrrq4MtyB5plvvsdz3ct22lm2YTqV3uX/Lpz79vMePg8BTfdDleD769FHPv5NEW8bRx3ArraDQC/YocEREREREREREREREREREREcn4CyYEOaf/UFMIAAAAAElFTkSuQmCC' : 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg'}`} className="h-8" alt="Logo" />
                    <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-black'}`}>MyStore</span>
                </Link>
                <button
                    onClick={toggleMobileMenu}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMobileMenuOpen ? (<IoCloseSharp />) : (<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>)}
                </button>
                <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`} id="navbar-dropdown">
                    <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li className='p-2.5 text-xs'>
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-green-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : "block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}><span className='flex gap-1 items-center'><IoHomeOutline />Trang Chủ</span></NavLink>
                        </li>
                        <li className='p-2.5 text-xs'>
                            <NavLink to="/book" className={({ isActive }) => isActive ? "text-green-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : "block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}><span className='flex gap-1 items-center'><FaCalendarAlt />Đặt Lịch</span></NavLink>
                        </li>
                        <li className='p-2.5 text-xs relative'>
                            <button onClick={toggleDropdownnote} className="flex items-center justify-between py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent">
                                <BsBell />
                                <span className=" bg-red-500 px-1 text-[7px]  rounded-full font-bold mb-1.5">{getCartItemCount()}</span>
                                thông báo
                            </button>
                            {isDropdownnote && (
                                <div onMouseLeave={closeDropdown} className='z-10  bg-white divide-y divide-gray-100 top-full absolute right-0 rounded-lg shadow md:w-72 dark:bg-gray-700 dark:divide-gray-600'>
                                    <div className="max-w-md  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                                        <div className="bg-gray-300 p-2">
                                            <h2 className="text-white text-center text-lg font-semibold">Thông báo</h2>
                                            {/* <div className="flex justify-between">
                                                <button className="text-white">Tất cả</button>
                                                <button className="text-white">Chưa đọc</button>
                                            </div> */}
                                        </div>
                                        <div className="p-2">
                                            <h3 className="font-semibold text-center text-gray-700">{cart.length > 0 ? '' : 'không có thông báo'}</h3>
                                            {cart.map((car) => (
                                                <div key={car._id}>
                                                    <a href="#" className="p-2 my-2 bg-blue-100 rounded-md flex">
                                                        <div className="flex items-start">
                                                            <img src={car.images[0].url} alt="Avatar" className="rounded-full mr-2" width={50} height={50} />
                                                            <div>
                                                                <p className="text-gray-800">{car.name}<span className='text-red-500'> đã được thêm vào giỏ hàng</span></p>
                                                                <span className="text-gray-500 text-sm">2 phút</span>
                                                            </div>
                                                        </div>
                                                        <span className="text-blue-500 text-3xl">•</span>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className='p-2.5 text-xs'>
                            <button onClick={toggleDarkMode} className="block py-2 px-3 rounded  md:border-0 md:hover:text-blue-700 md:p-0">{isDarkMode ? (<span className='flex gap-1 items-center'><MdDarkMode />Dark</span>) : (<span className='flex gap-1 items-center'><AiOutlineSun />Light</span>)}</button>
                        </li>
                        <li className='p-2.5 text-xs'>
                            <Link to="/cart" className="flex items-center justify-between py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent">
                                <BsCart2 />
                                <span className=" bg-red-500 px-1 text-[7px]  rounded-full font-bold mb-1.5">{getCartItemCount()}</span>Giỏ hàng
                            </Link>
                        </li>
                        <li className="relative inline-block p-1.5'">
                            {isAuthenticated ? (
                                <>
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        <img className="w-8 h-8 rounded-full" src={currentUser?.avatar?.url} alt="user photo" />
                                    </button>
                                    {isDropdownOpen && (
                                        <div
                                            className="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                            onMouseLeave={closeDropdown} // Đóng dropdown khi rời chuột
                                        >
                                            <div className="py-1">
                                                {currentUser.role === 'admin' && (<Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>)}
                                                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">profile</Link>
                                                <p onClick={logout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</p>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link to="/login"><button className="block text-xs py-2 px-3 rounded hover:bg-gray-100 dark:text-white"><span className='flex gap-1 items-center'><FaRegUser />Đăng nhập</span></button></Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
