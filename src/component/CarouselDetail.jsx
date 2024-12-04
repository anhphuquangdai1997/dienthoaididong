import React, { useEffect, useState } from 'react';

const CarouselDetail = ({suggestedProducts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const setimeoutt=2000

  const totalSlides = 4
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % suggestedProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? suggestedProducts.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
        nextSlide()
    },setimeoutt)
    return ()=>clearInterval(intervalId)

  }, [currentIndex])
  

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / totalSlides)}%)` }}
        >
          {suggestedProducts.map((product) => (
            <div
              key={product._id}
              className="flex-shrink-0 sm:w-1/4 w-1/2 p-2" // Mỗi sản phẩm chiếm 50% chiều rộng  
            >
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-sm">{product.name}</h3>
                <p className="text-red-600"> ${product.price}</p>
                <div className=' h-fit p-[5px] flex justify-center items-center overflow-hidden relative'>
                  <img src={product.images[0].url} alt="images" className='w-32 h-32' />
                </div>
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