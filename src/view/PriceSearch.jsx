import React from 'react'

const PriceSearch = () => {
    return (
        <div className='flex items-baseline'>
            <p className='justify-center px-2 text-[rgba(102,112,133,1)]'>Sắp xếp theo</p>
            <button
                type="button"
                className="text-[rgba(102,112,133,1)] bg-[rgba(242,244,247,1)] hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                Nổi bật
            </button>
            <button
                type="button"
                className="text-[rgba(102,112,133,1)] bg-[rgba(242,244,247,1)] hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                Bán Chạy
            </button>
            <button
                type="button"
                className="text-[rgba(102,112,133,1)] bg-[rgba(242,244,247,1)] hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                Lọc theo giá 
            </button>
        </div>
    )
}

export default PriceSearch
