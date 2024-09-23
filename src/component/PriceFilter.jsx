import React from 'react';  

const PriceFilter = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) => {  
    return (  
        <div className="mb-5 flex justify-between">  
            <label className="flex flex-col items-center">  
                <span className="text-lg">Min Price: ${minPrice}</span>  
                <input  
                    type="range"  
                    min="0"  
                    max="1500"  
                    value={minPrice}  
                    onChange={onMinPriceChange}  
                    className="w-full mt-2"  
                    aria-label="Minimum Price"  
                />  
            </label>  
            <label className="flex flex-col items-center">  
                <span className="text-lg">Max Price: ${maxPrice}</span>  
                <input  
                    type="range"  
                    min="0"  
                    max="1500"  
                    value={maxPrice}  
                    onChange={onMaxPriceChange}  
                    className="w-full mt-2"  
                    aria-label="Maximum Price"  
                />  
            </label>  
        </div>  
    );  
};  

export default PriceFilter;