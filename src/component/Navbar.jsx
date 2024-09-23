import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';
import { useAuth } from '../contex/AuthContext';

const Navbar = () => {
    const { getCartItemCount } = useContext(CartContext);
    const { isAuthenticated, logout, userAvatar } = useAuth()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg" alt="Logo" className="h-10 mr-3" />
                    <Link to="/"><span className="text-xl font-bold">MyStore</span></Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/product" className="text-gray-700 hover:text-blue-500">Products</Link>
                    <Link to="/cart" className="flex text-gray-700 hover:text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                        <span className=" text-red-500 font-bold">
                            {getCartItemCount()}
                        </span>
                    </Link>
                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <div className="relative inline-block">
                                <button
                                    id="dropdownUserAvatarButton"
                                    onClick={toggleDropdown}
                                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    type="button"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src={userAvatar} alt="user photo" />
                                </button>

                                {/* Dropdown menu */}
                                {isDropdownOpen && (
                                    <div
                                        className="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                        onMouseLeave={closeDropdown} // Đóng dropdown khi rời chuột
                                    >
                                        <div className="py-1">
                                            <p className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</p>
                                            <p onClick={logout} className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                        ) : (
                            <Link to="/login"><button>Login</button></Link>
                        )}
                    </div>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-700 focus:outline-none" aria-label="Toggle Menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar