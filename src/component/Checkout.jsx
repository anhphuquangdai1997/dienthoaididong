// OrderInfo.jsx  
import React, { useContext, useState } from 'react';
import BackHeader from './BackHeader';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { CartContext } from '../contex/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const { cart, quantities } = useContext(CartContext)
    const [isExpanded, setIsExpanded] = useState(false)
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [store, setStore] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');
    const {setOrderData}=useContext(CartContext)
    const navigate=useNavigate()
    const handleTogger = () => {
        setIsExpanded(!isExpanded)
    }
    const totalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * (quantities[item._id] || 1)), 0)
    };
    const handleSubmit = (e,itemId) => {
        e.preventDefault();
        setErrors('')

        setOrderData({
            customerName,
            phoneNumber,
            email,
            province,
            district,
            store,
            totalPrice: totalPrice(),


        })

        if (!phoneNumber) {
            setErrors('Vui lòng nhập số điện thoại');
            return;
        }
        if (!customerName) {
            setErrors('Vui lòng nhập tên');
            return;
        }
        if (!province) {
            setErrors('Vui lòng chọn Tỉnh/TP');
            return;
        }
        if (!district) {
            setErrors('Vui lòng chọn Quận/Huyện');
            return;
        }
        if (!store) {
            setErrors('Vui lòng chọn Cửa hàng');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors('Email không hợp lệ.');
            return;
        }
        navigate('/payment')
    }

    return (
        <div className="mx-auto min-h-screen max-w-[650px] rounded-lg mt-14 pr-8 ">
            {errors && (
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xs p-4 mt-4 text-gray-500 bg-red-100 border border-red-400 rounded-lg shadow-lg z-50"
                    role="alert"
                    aria-live="assertive"
                >
                    <div className="flex items-center">
                        <span className="text-sm font-normal">{errors}</span>
                        <button
                            type="button"
                            className="ml-auto text-gray-400 hover:text-gray-900"
                            onClick={() => setErrors('')}
                            aria-label="Close"
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M1 1l6 6m0 0l6 6m-6-6l6-6m-6 6L1 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            <BackHeader />
            <h1 className="text-sm font-bold mb-5 text-center uppercase p-1 ">Thông tin đơn hàng</h1>
            <div className='w-full m-auto p-6'>
                <div className="mb-4 mt-[10px] p-[10px] w-full border border-[#dadada] rounded-xl">
                    {
                        isExpanded ? (
                            cart.map((item) => (
                                <div key={item._id} className='mb-[10px] mt-[10px] w-full overflow-hidden flex items-start'>
                                    <img src={item.images[0].url} alt="banner" width='60' height='60' className='w-[60px] h-[60px] mr-[10px] shrink-0' />
                                    <div className="flex-1">
                                        <div className='flex items-center justify-between gap-4'>

                                            <div>
                                                <a href={`/product/${item._id}`} className='flex-1 text-[10px] font-semibold hover:underline'>{item.name}</a>
                                                <p className='font-bold text-red-500 text-[15px] mr-[10px]'>${item.price}</p>
                                            </div>
                                            <p className='text-xs'>số lượng <span className='text-red-500 text-[10px]'>{quantities[item._id] || 1}</span></p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                            :
                            (
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <img src={cart[0].images[0].url} alt="banner" width='60' height='60' className='w-[60px] h-[60px] mr-[10px] shrink-0' />
                                        <div className='flex-1'>
                                            <div className='flex items-center justify-between gap-8'>
                                                <div>
                                                    <a href={`/product/${cart[0]._id}`} className='flex-1 text-xs text-[10px] font-semibold hover:underline'>{cart[0].name}</a>
                                                    <p className='font-bold text-red-500 text-[15px] mr-[10px]'>${cart[0].price}</p>
                                                </div>
                                                <p className='text-xs'>số lượng <span className='text-red-500 text-[10px'>{quantities[cart[0]._id] || 1}</span></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                    }
                    {cart.length > 1 ? (<div className='flex justify-center text-xs'>
                        <button onClick={handleTogger} className='mt-2'>{isExpanded ? (<div className='flex items-end'><span>Thu gọn</span><RiArrowDropUpLine /></div>) : (<div className='flex items-end'><span>xem thêm {cart.length - 1} sản phẩm</span><RiArrowDropDownLine /></div>)}</button>
                    </div>) : null}
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Thông tin khách hàng */}
                    <div className="mb-4">
                        <h2 className="text-sm font-semibold mb-2">THÔNG TIN KHÁCH HÀNG</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
                            <input
                                type="text"
                                placeholder="Họ và tên (bắt buộc)"
                                className="border rounded-lg p-3 w-full text-xs "
                                onChange={(e) => setCustomerName(e.target.value)}
                                value={customerName}

                            />
                            <input
                                type="text"
                                placeholder="Số điện thoại (bắt buộc)"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                value={phoneNumber}
                                className="border rounded-lg p-3 w-full text-xs"

                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email nhận hóa đơn"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="border rounded-lg p-3 w-full text-xs"

                        />
                    </div>

                    {/* Thông tin nhận hàng */}
                    <div className="mb-4">
                        <h2 className="text-sm font-semibold mb-2">THÔNG TIN NHẬN HÀNG</h2>
                        {/* <div className='w-full flex pb-[10px]'>
                        <div className='flex items-center cursor-pointer mr-[20px]'>
                            <input type="radio" className='accent-dtv w-[15px] h-[15px] mr-[5px]' />
                            <label className='text-sm select-none cursor-pointer' for='delivery-shop'>Nhận tai cửa hàng</label>
                        </div>
                    </div> */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <select className="border rounded-lg p-3 w-full mb-4 text-xs" value={province} onChange={(e) => setProvince(e.target.value)}>
                                <option value="">Tỉnh / thành phố</option>
                                <option value="HCM">Hồ Chí Minh</option>
                                <option value="HCM">Hà Nội</option>
                                {/* Thêm các tùy chọn khác nếu cần */}
                            </select>
                            <select className="border rounded-lg p-3 w-full mb-4 text-xs" value={district} onChange={(e) => setDistrict(e.target.value)}>
                                <option value="">Quận / huyện</option>
                                <option value="quan1">Quận 1</option>
                                {/* Thêm các tùy chọn khác nếu cần */}
                            </select>
                        </div>
                        <select className="border rounded-lg p-3 w-full mb-4 text-xs" value={store} onChange={(e) => setStore(e.target.value)}>
                            <option value="">Cửa Hàng</option>
                            <option value="450 Lê văn Việt Quận 9">450 Lê văn Việt Quận 9</option>
                            <option value="61 lê văn tách phường An Bình Dĩ An">61 lê văn tách phường An Bình Dĩ An</option>
                            {/* Thêm các tùy chọn khác nếu cần */}
                        </select>
                    </div>
                    <div className="mb-4 ">
                        <h2 className='text-sm font-semibold mb-2'>thông tin bổ sung</h2>
                        <textarea type="text"
                            placeholder="ghi chú đơn hàng"
                            className="border rounded-lg p-3 w-full mb-4 text-xs" />
                    </div>

                    {/* Nút tiếp tục */}
                    <div className='fixed bottom-0 left-[49%] translate-x-[-50%] z-[10] w-full max-w-[600px] m-auto shadow-lg'>
                        <div className='w-full p-[10px] bg-[#fff] rounded-xl m-auto overflow-hidden '>
                            <div className='w-full flex justify-between flex-wrap pb-[10px]'>
                                <span className='font-semibold shrink-0 text-sm'>Tổng tiền tạm tính</span>
                                <span className='font-semibold shrink-0 text-sm'>${totalPrice()}&nbsp;₫</span>
                            </div>
                                <button type='submit' className="bg-red-600 text-white rounded-lg px-6 py-3 text-lg w-full">
                                    thanh toán
                                </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;