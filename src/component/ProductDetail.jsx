import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { CartContext } from '../contex/CartContext';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Rating } from 'flowbite-react';
import ProductModal from './ProductModal';
import CarouselDetail from './CarouselDetail';
import { Toast } from "flowbite-react";
import { HiCheck } from 'react-icons/hi';

function ProductDetail() {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);


    useEffect(() => {
        // URL của API của bạn
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://ecommerce-q3sc.onrender.com/api/v1/product/${productId}`);
                setProducts(response.data.product)
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [productId])

    if (loading) return <Loading />;

    const handleToCart = () => {
        addToCart(products)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto p-4 mt-16">
            {showToast && (
                <div className="fixed top-5 right-5 z-50">
                    <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">Đã thêm vào giỏ hàng.</div>
                        <Toast.Toggle />
                    </Toast>
                </div>
            )}
            {/* Phần hình ảnh sản phẩm */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center">
                    <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showStatus={false}
                    >
                        {products.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image.url}
                                    alt={`Product ${index + 1}`}
                                    className="rounded-lg shadow-lg w-full max-w-sm"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Phần thông tin sản phẩm */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-gray-800">{products.name}</h1>
                    <p className="text-gray-600">{products.description}</p>

                    <div className="text-2xl font-semibold text-green-500">$ {products.price}</div>
                    <Rating>
                        {[...Array(5)].map((_, index) => (
                            <Rating.Star key={index} filled={index < Math.round(products.ratings)} />
                        ))}
                    </Rating>
                    <div className="space-y-2">
                        <label className="block text-gray-700">{products.Stock >= 1 ? (
                            <input
                                type="number"
                                min="1"
                                max={products.Stock}
                                defaultValue="1"
                                className="w-16 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />) :
                            (<p className="text-red-500">Liên Hệ</p>)}
                        </label>
                    </div>
                    <div className='flex gap-2'>
                        <button
                            onClick={handleToCart}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-300">
                            Mua Ngay
                        </button>
                        <ProductModal isOpen={isModalOpen} onClose={handleCloseModal} {...products} />
                    </div>
                </div>
            </div>

            {/* Phần mô tả chi tiết */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-800">Chi Tiết Sản Phẩm</h2>
                <p className="mt-4 text-gray-600">
                    {products.description}
                </p>
            </div>
            {/* sản phẩm tương tự */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-800">Gợi ý sản phẩm</h2>
                <p className="mt-4 text-gray-600">
                    <CarouselDetail />
                </p>
            </div>
            {/* Đánh giá của khách hàng */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-800">Đánh giá của khách hàng</h2>
                <div className="mt-4 text-gray-600">
                    {products.reviews.length > 0 ? (
                        products.reviews.map((rev, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                                <div className='flex justify-between'>
                                    <p className="text-lg font-semibold">{rev.name}</p>
                                    <Rating>
                                        {[...Array(5)].map((_, index) => (
                                            <Rating.Star key={index} filled={index < Math.round(rev.rating)} />
                                        ))}
                                    </Rating>
                                </div>
                                <span className="text-gray-700">{rev.comment}</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-700">Chưa có đánh giá nào</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail
