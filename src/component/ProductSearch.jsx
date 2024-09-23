import React from 'react';  

const ProductSearch = ({searchTerm,onSearchChange}) => {  

    return (  
        <div className="p-4">  
            <input  
                type="text"  
                placeholder="Tìm kiếm sản phẩm..."  
                value={searchTerm}  
                onChange={onSearchChange}  
                className="border p-2 rounded w-full"  
            />  
            
        </div> 
    );  
};  

export default ProductSearch;