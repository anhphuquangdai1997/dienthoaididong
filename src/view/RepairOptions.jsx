import React from 'react';
import { useNavigate } from 'react-router-dom';

const RepairOptions = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate('/book', { state: { name } });
  };

  return (
    <div className="flex container mx-auto p-5 flex-col">
      <h1 className="flex items-center text-xl font-bold mb-4">
        <span>Sản Phẩm</span>
      </h1>
      <div className="flex overflow-x-auto whitespace-nowrap">
        {[
          'Thay pin',
          'Thay màn hình',
          'Thay ốp kính',
          'Thay vỏ',
          'Thay camera',
          'Thay loa',
          'Thay cáp sạc',
          'Lỗi nguồn',
        ].map((option, index) => (
          <button
            onClick={() => handleClick(option)}
            key={index}
            className={`${
              isDarkMode
                ? 'bg-slate-700 hover:bg-gray-900'
                : 'bg-[rgba(242,244,247,1)] text-[rgba(102,112,133,1)]'
            } hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RepairOptions;
