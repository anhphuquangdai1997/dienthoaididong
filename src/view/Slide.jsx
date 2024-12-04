import React, { useEffect, useState } from 'react';
import oneimages from "../images/4810ab203ec6286f99c11cfd7d9f5917.webp";
import two from "../images/aaa05119320eec8a193a5fc40ca4d69d.webp";
import three from "../images/5db8807174f55f0ae5b898429b9dad31.webp"

const images = [  
  oneimages,two,three  
];  

const Slide = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  

  const nextSlide = () => {  
    setCurrentIndex((prevIndex) =>  
      prevIndex === images.length - 1 ? 0 : prevIndex + 1  
    );  
  };  

  useEffect(() => {
    const intervalId = setInterval(nextSlide,3000);
    return () => clearInterval(intervalId);
  },[]);

  return (  
    <div className="relative w-full max-w-3xl">  
      <img src={images[currentIndex]} alt="Slider" className="w-full rounded-lg" />  
    </div>  
  );  
};  

export default Slide;