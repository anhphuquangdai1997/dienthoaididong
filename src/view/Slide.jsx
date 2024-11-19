import React, { useState } from 'react';  

const images = [  
  'https://cdni.dienthoaivui.com.vn/690x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/92a36a7be921324b4552c2b81f6c0b46.png',  
  'https://cdni.dienthoaivui.com.vn/690x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/4810ab203ec6286f99c11cfd7d9f5917.png',  
  'https://cdni.dienthoaivui.com.vn/690x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/aaa05119320eec8a193a5fc40ca4d69d.png',  
];  

const Slide = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  

  const nextSlide = () => {  
    setCurrentIndex((prevIndex) =>  
      prevIndex === images.length - 1 ? 0 : prevIndex + 1  
    );  
  };  

  const prevSlide = () => {  
    setCurrentIndex((prevIndex) =>  
      prevIndex === 0 ? images.length - 1 : prevIndex - 1  
    );  
  };  

  return (  
    <div className="relative w-full max-w-2xl mx-auto">  
      <img src={images[currentIndex]} alt="Slider" className="w-full rounded-lg" />  
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">  
        &#10094;  
      </button>  
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">  
        &#10095;  
      </button>  
    </div>  
  );  
};  

export default Slide;