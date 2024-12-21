import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductModal = ({ images, name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");

    const [loadingProvinces, setLoadingProvinces] = useState(true);
    const [loadingDistricts, setLoadingDistricts] = useState(false);
    const [loadingWards, setLoadingWards] = useState(false);

    useEffect(() => {
        axios.get(`https://provinces.open-api.vn/api/p/`)
            .then((response) => {
                setProvinces(response.data);
                setLoadingProvinces(false);
            })
            .catch(() => {
                setLoadingProvinces(false);
            });
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            setLoadingDistricts(true);
            axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
                .then((response) => {
                    setDistricts(response.data.districts);
                    setWards([]);
                    setLoadingDistricts(false);
                })
                .catch(() => {
                    setLoadingDistricts(false);
                });
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict) {
            setLoadingWards(true);
            axios
                .get(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`)
                .then((response) => {
                    setWards(response.data.wards);
                    setLoadingWards(false);
                })
                .catch(() => {
                    setLoadingWards(false);
                });
        }
    }, [selectedDistrict]);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý dữ liệu ở đây
    };

    return (
        <>
            {/* Modal toggle */}
            <button
                onClick={toggleModal}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                type="button"
            >
                Đặt trước
            </button>

            {/* Main modal */}
            {isOpen && (
                <div
                    tabIndex="-1"
                    aria-hidden={!isOpen}
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Thông tin khách hàng
                                </h3>
                                <button
                                    onClick={toggleModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}

                            <form onSubmit={handleSubmit} className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <div>
                                            <div className="col-span-2 text-red-600 text-xs">
                                                <p>{name}</p>
                                            </div>
                                            <div className="col-span-2 w-14 flex">
                                                {images.map((imag,index) => (
                                                    <img
                                                    key={index}
                                                        src={imag.url}
                                                        alt={`Product`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Tên
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Vui lòng nhập tên"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="category"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Tỉnh/thành phố
                                        </label>
                                        <select
                                            value={selectedProvince}
                                            onChange={(e) => setSelectedProvince(e.target.value)}
                                            id="category"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option value="" disabled>
                                                {loadingProvinces ? "Loading provinces..." : "Chọn Tỉnh"}
                                            </option>
                                            {provinces.map((province) => (
                                                <option key={province.code} value={province.code}>
                                                    {province.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="category"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Huyện/Quận
                                        </label>
                                        <select
                                            value={selectedDistrict}
                                            onChange={(e) => setSelectedDistrict(e.target.value)}
                                            disabled={!selectedProvince}
                                            id="category"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option value="" disabled>
                                                {loadingDistricts ? "Loading districts..." : "chọn huyện"}
                                            </option>
                                            {districts.map((district) => (
                                                <option key={district.code} value={district.code}>
                                                    {district.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="category"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Xã/Phường
                                        </label>
                                        <select
                                            value={selectedWard}
                                            onChange={(e) => setSelectedWard(e.target.value)}
                                            disabled={!selectedDistrict}
                                            id="category"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option value="" disabled>
                                                {loadingWards ? "Loading wards..." : "chọn xã"}
                                            </option>
                                            {wards.map((ward) => (
                                                <option key={ward.code} value={ward.code}>
                                                    {ward.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                                {/* <textarea
                                    id="description"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write product description here"
                                /> */}
                                <div>
                                    <label htmlFor="">thanh toán</label>
                                    <div className='flex'>
                                        <div><input type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online</label>
                                        </div>
                                        <div><input type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offlile</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-2'><button className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    xác nhận
                                </button></div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductModal;
