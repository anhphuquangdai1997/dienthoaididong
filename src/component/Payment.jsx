import React from 'react'
import BackHeader from './BackHeader'
import { Badge } from "flowbite-react";
import { useContext } from 'react';
import { CartContext } from '../contex/CartContext';

const Payment = () => {
    const {orderData,quantities}=useContext(CartContext)
    console.log(orderData)
    return (
        <div className="mx-auto min-h-screen max-w-[650px] rounded-lg mt-14 pr-8 ">
            <BackHeader />
            <h2 className="text-sm font-bold mb-5 text-center uppercase p-1 ">Thanh toán</h2>
            <div className="mb-4 mt-[10px] p-[10px] w-full border border-[#dadada] rounded-xl">
                <div className='mt-[10px] flex items-center justify-between text-[15px] text-[#212B36]'>
                    <span>Số lượng sản phẩm</span>
                    <span>1</span>
                </div>
                <div className='mt-[10px] flex items-center justify-between text-[15px] text-[#212B36]'>
                    <span>Tiền hàng (tạm tính)</span>
                    <span>{orderData.totalPrice}$</span>
                </div>
                <div className='my-2.5 w-full h-[1px] bg-[#dadada]'></div>
                <div className='flex items-center justify-between text-sm'>
                    <div className='flex items-center'>
                        <p className='text-[#212B36]'>Tổng tiền</p>
                        <span className='ml-1 text-[#637381]'>(đã gồm VAT)</span>
                    </div>
                    <span className='text-sm text-[#212B36] font-semibold'>{orderData.totalPrice} ₫</span>
                </div>
            </div>
            <div className='w-full mt-[10px] py-[10px] rounded-xl'>
                <h3 className='my-[5px] text-sm w600:text-[15px] font-semibold text-[#181b35]'> CHỌN PHƯƠNG THỨC THANH TOÁN </h3>
                <div className='w-full mt-[10px]'>
                    <div className='w-full'>
                        <div className='border-[#dadada] w-full mb-[10px] hover:border-red-500 focus:border-red-500 focus:outline-none hover:shadow-md p-[10px] relative overflow-hidden bg-[#fff] border-[1px] rounded-lg h-[60px] flex justify-start items-center cursor-pointer select-none'>
                            <div className='w-[40px] h-[40px]'>
                                <img src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-shop-line-icon-png-image_9137770.png" alt="payment online" className="object-contain h-full" />
                            </div>
                            <span className='ml-[10px] text-xs font-semibold'>Thanh toán tại cửa hàng</span>
                        </div>

                        <div className='border-[#dadada] w-full mb-[10px] hover:border-red-500 focus:border-red-500 focus:outline-none hover:shadow-md p-[10px] relative overflow-hidden bg-[#fff] border-[1px] rounded-lg h-[60px] flex justify-start items-center cursor-pointer select-none'>
                            <div className='w-[40px] h-[40px]'>
                                <img src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg" alt="payment online" className="object-contain h-full" />
                            </div>
                            <span className='ml-[10px] text-xs font-semibold'>Thanh toán bằng VNPAY</span>
                        </div>

                        <div className='border-[#dadada] w-full mb-[10px] hover:border-red-500 focus:border-red-500 focus:outline-none hover:shadow-md p-[10px] relative overflow-hidden bg-[#d0c7c7] border-[1px] rounded-lg h-[60px] flex justify-between items-center cursor-pointer select-none'>
                            <div className='flex items-center'>
                                <div className='w-[40px] h-[40px]'>
                                    <img src="https://dongbu.com.vn/upload/fck/image/chinh-sach-thanh-toan-giao-nhan_s3072.png" alt="payment online" className="object-contain h-full" />
                                </div>
                                <span className='ml-[10px] text-xs font-semibold'>Thanh toán chuyển khoản</span>
                            </div>
                            <Badge color="failure">Bảo trì</Badge>
                        </div>

                        <div className='border-[#dadada] w-full mb-[10px] hover:border-red-500 focus:border-red-500 focus:outline-none hover:shadow-md p-[10px] relative overflow-hidden bg-[#d0c7c7] border-[1px] rounded-lg h-[60px] flex justify-between items-center cursor-pointer select-none'>
                            <div className='flex items-center'>
                                <div className='w-[40px] h-[40px]'>
                                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="payment online" className="object-contain h-full" />
                                </div>
                                <span className='ml-[10px] text-xs font-semibold'>Thanh toán bằng momo</span>
                            </div>
                            <Badge color="failure">Bảo trì</Badge>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4 mt-[10px] p-[10px] w-full border border-[#dadada] rounded-xl">
                <div className='my-[5px] text-sm font-semibold uppercase'> thông tin đặt hàng </div>
                <div className='w-full mt-[10px]'>
                    <div className="w-full mb-[10px]">
                        <span className="text-sm w600:text-[15px] mr-[5px]">Người đặt:</span>
                        <span className="text-sm w600:text-[15px] font-semibold">{orderData.customerName}</span>
                    </div>
                    <div className="w-full mb-[10px]">
                        <span className="text-sm w600:text-[15px] mr-[5px]">Số điện thoại</span>
                        <span className="text-sm w600:text-[15px] font-semibold">{orderData.phoneNumber}</span>
                    </div>
                    <div className="w-full mb-[10px]">
                        <span className="text-sm w600:text-[15px] mr-[5px]">Email:</span>
                        <span className="text-sm w600:text-[15px] font-semibold">{orderData.email}</span>
                    </div>
                    <div className="w-full mb-[10px]">
                        <span className="text-sm w600:text-[15px] mr-[5px]">Nhận hàng tại:</span>
                        <span className="text-sm w600:text-[15px] font-semibold">{orderData.store}</span>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 left-[48%] translate-x-[-50%] z-[10] w-full max-w-[650px] m-auto shadow-lg'>
                <div className='w-full p-[10px] bg-[#fff] rounded-t-xl overflow-hidden '>
                    <div className='w-full flex justify-between flex-wrap pb-[10px]'>
                        <span className='font-semibold shrink-0 text-sm'>Tổng tiền tạm tính</span>
                        <span className='font-semibold shrink-0 text-sm'>{orderData.totalPrice}$</span>
                    </div>
                    <button type='submit' className="bg-red-600 text-white rounded-lg px-6 py-3 text-lg w-full">
                        thanh toán
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payment
