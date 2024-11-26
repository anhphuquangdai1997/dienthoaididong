import React, { useState } from 'react';

const CarouselDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      img :'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/tai-nghe-chup-tai-a1.jpg',
      name: 'Loa Bluetooth Havit SK823BT 2 MIC',
      discount: '54%',
      price: '360.000 đ',
      originalPrice: '790.000 đ',
      description: 'Mic thoại, Jack 3.5, Driver 50mm',
    },
    {
      id: 2,
      img :'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/tai-nghe-chup-tai-a1.jpg',
      name: 'Loa Bluetooth Havit SK823BT 2 MIC',
      discount: '47%',
      price: '690.000 đ',
      originalPrice: '1.290.000 đ',
      description: 'Chơi nhạc 4h, Đàm thoại 3.5h',
    },
    {
      id: 3,
      img :'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/tai-nghe-chup-tai-a1.jpg',
      name: 'Loa Bluetooth Havit SK823BT 2 MIC',
      discount: '64%',
      price: '199.000 đ',
      originalPrice: '550.000 đ',
      description: 'Bluetooth 5.3, Driver 13mm',
    },
    {
      id: 4,
      img :'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/tai-nghe-chup-tai-a1.jpg',
      name: 'Loa Bluetooth Havit SK823BT 2 MIC',
      discount: '64%',
      price: '199.000 đ',
      originalPrice: '550.000 đ',
      description: 'Bluetooth 5.3, Driver 13mm',
    },
    {
      id: 5,
      img :'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/tai-nghe-chup-tai-a1.jpg',
      name: 'Loa Bluetooth Havit SK823BT 2 MIC',
      discount: '64%',
      price: '199.000 đ',
      originalPrice: '550.000 đ',
      description: 'Bluetooth 5.3, Driver 13mm',
    },
    {
      id: 6,
      img :'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/tai-nghe-chup-tai-a1.jpg',
      name: 'Loa Bluetooth Havit SK823BT 2 MIC',
      discount: '64%',
      price: '199.000 đ',
      originalPrice: '550.000 đ',
      description: 'Bluetooth 5.3, Driver 13mm',
    },

  ];

  const itemsPerSlide = 4; // Số sản phẩm hiển thị mỗi lần  
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / totalSlides)}%)` }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-1/4 p-2" // Mỗi sản phẩm chiếm 50% chiều rộng  
            >
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <div className='w-full h-fit p-[5px] flex justify-center items-center overflow-hidden relative'>
                  <img src={product.img} alt="" />
                </div>
                <p className="text-red-600">Giảm {product.discount}</p>
                <p className="text-lg">{product.price} <span className="line-through text-gray-500">{product.originalPrice}</span></p>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselDetail;