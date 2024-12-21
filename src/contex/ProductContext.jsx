import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
    const {isAuthenticated,currentUser}=useAuth()
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        const config = {
            withCredentials: true, // Nếu cần thiết để gửi cookie  
        };
        try {
            const response = await axios.get("https://ecommerce-q3sc.onrender.com/api/v1/admin/products", config);
            setProducts(response.data.products);
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false);
        }
    };
    //xoá sản phẩm
    const deleteProduct = async (id) => {
        const config = {
            withCredentials: true, // Nếu cần thiết để gửi cookie  
        };
        try {
            await axios.delete(`https://ecommerce-q3sc.onrender.com/api/v1/admin/product/${id}`, config)
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
            console.log('sản phẩm xoá thành công')
            setRefresh(prev => !prev);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(isAuthenticated && currentUser.role==='admin'){
            fetchProducts()
        }
    }, [refresh]);

    return (
        <ProductContext.Provider value={{ products, deleteProduct,error,loading }}>
            {children}
        </ProductContext.Provider>
    )
}
