import React from 'react';
import { useNavigate } from 'react-router-dom';  

const RepairOptions = () => {  
  const navigate = useNavigate();
  const handleClick= (name)=>{
    navigate('/book',{state:{name}})
  }
  return (  
    <div className="flex container mx-auto p-5 justify-between ">  
      <h1 className="flex items-center text-xl font-bold">  
        <span className="">Sản Phẩm</span>  
      </h1>  
      <div className="flex flex-wrap mt-5 ">  
        {[  
          "Thay pin",  
          "Thay màn hình",  
          "Thay ốp kính",  
          "Thay vỏ",  
          "Thay camera",  
          "Thay loa",  
          "Thay cáp sạc",  
          "Lỗi nguồn"
        ].map((option, index) => (  
          <button
            onClick={()=>handleClick(option)}   
            key={index}   
            className="m-1 px-2 py-1 border rounded-lg border-gray-300 bg-gray-100 hover:bg-orange-500 transition hidden md:block"  
          >  
            {option}  
          </button>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default RepairOptions;