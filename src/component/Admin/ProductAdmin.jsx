import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../contex/ProductContext';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdModeEditOutline } from 'react-icons/md';
import ModalProductAdmin from './ModalProductAdmin';
import { Pagination } from "flowbite-react";
import { useAuth } from '../../contex/AuthContext';

const ProductAdmin = () => {
    const {isAuthenticated}=useAuth()
    const { products, deleteProduct } = useContext(ProductContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => setCurrentPage(page);
    const productsPerPage = 8
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleEditClick = (product) => {
        setIsModalOpen(true)
        setCurrentProduct(product)
    }
    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentProduct("")
    }

    return (
        <div className="relative overflow-x-auto">
            {
                loading ? (<div className="text-center py-8 text-lg font-semibold">Loading...</div>)

                    : (
                        <>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Stock
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">

                                        </th>
                                    </tr >
                                </thead >
                                <tbody>
                                    {currentProducts.map((product, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {product.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {product.Stock}
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.category}
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.price}
                                            </td>
                                            <td className="px-4 py-2 flex justify-end gap-2">
                                                <button onClick={() => handleEditClick(product)}><MdModeEditOutline size={20} className='text-blue-500' /></button>
                                                <button onClick={() => deleteProduct(product._id)}><RiDeleteBinLine size={20} className='text-red-500' /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table >
                            {products.length >productsPerPage && (
                                <div className="flex justify-center my-4">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={Math.ceil(products.length / productsPerPage)}
                                    onPageChange={onPageChange}
                                    showIcons
                                />
                            </div>
                            )}
                            {/* Modal */}
                            <ModalProductAdmin isOpen={isModalOpen} closeModal={closeModal} product={currentProduct} />
                        </>
                    )
            }
        </div >

    )
}

export default ProductAdmin
