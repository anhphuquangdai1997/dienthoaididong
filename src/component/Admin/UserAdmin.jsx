import React, { useEffect, useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Button, Pagination } from "flowbite-react";
import { useAuth } from '../../contex/AuthContext';

const UserAdmin = () => {
    const { users, loading, error } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    // Tính toán danh sách người dùng hiện tại
    const currentLastPage = currentPage * productsPerPage;
    const currentFirstPage = currentLastPage - productsPerPage;
    const currentProducts = users.slice(currentFirstPage, currentLastPage);

    const onPageChange = (page) => setCurrentPage(page);

    return (
        <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Avatar</th>
                        <th scope="col" className="px-6 py-3">User Name</th>
                        <th scope="col" className="px-6 py-3">Role</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="5" className="text-center py-4">Loading...</td>
                        </tr>
                    ) : error ? (
                        <tr>
                            <td colSpan="5" className="text-center py-4 text-red-500">{error}</td>
                        </tr>
                    ) : currentProducts.length > 0 ? (
                        currentProducts.map((user, index) => (
                            
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-4 py-2">
                                    <img
                                        className="rounded-xl"
                                        src={user.avatar?.url || '/default-avatar.png'}
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                    />
                                </td>
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">
                                    <Button
                                        className={`pill`}
                                        color={`${user.role === 'admin' ? 'blue' : 'failure'}`}
                                    >
                                        {user.role}
                                    </Button>
                                </td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2 flex justify-end gap-2">
                                    <button>
                                        <MdModeEditOutline size={20} className="text-blue-500" />
                                    </button>
                                    <button>
                                        <RiDeleteBinLine size={20} className="text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4">No Users Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {users.length > productsPerPage && (
                <div className="flex justify-center my-4">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(users.length / productsPerPage)}
                        onPageChange={onPageChange}
                        showIcons
                    />
                </div>
            )}
        </div>
    );
};

export default UserAdmin;
