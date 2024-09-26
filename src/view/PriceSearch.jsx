import React, { useState } from 'react'

const PriceSearch = ({sortOrder, setSortOrder}) => {
    const [showPriceOptions, setShowPriceOptions] = useState(false)

    const togglePriceOptions = () => {
        setShowPriceOptions(!showPriceOptions)
    }
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
            <div className='relative'>
                <button
                    onClick={togglePriceOptions}
                    type="button"
                    className="text-[rgba(102,112,133,1)] bg-[rgba(242,244,247,1)] hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    Lọc theo giá
                    <span className={`ml-2 transition-transform ${showPriceOptions ? 'rotate-180' : ''}`}>
                        ▼ {/* Mũi tên chỉ xuống */}
                    </span>
                </button>

                {showPriceOptions && (
                    <div className='absolute left-0 z-10 bg-white shadow-lg rounded-lg mt-2 w-full'>
                    <button
                        onClick={() => setSortOrder('asc')}
                        type="button"
                        className="block w-full text-[rgba(102,112,133,1)] px-2 py-1 hover:bg-gray-100"
                    >
                        Giá tăng dần
                    </button>
                    <button
                        onClick={() => setSortOrder('desc')}
                        type="button"
                        className="block w-full text-[rgba(102,112,133,1)] px-2 py-1 hover:bg-gray-100"
                    >
                        Giá giảm dần
                    </button>
                </div>
                )}
            </div>
        </div>
    )
}

export default PriceSearch
