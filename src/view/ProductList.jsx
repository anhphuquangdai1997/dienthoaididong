
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../component/Loading';
import Search from './Header/Search';
import PriceSearch from './PriceSearch';
import Footer from './Footer';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // URL của API của bạn
        const fetchData = async () => {
            try {
                const response = await axios.get('https://ecommerce-q3sc.onrender.com/api/v1/products');
                setProducts(response.data.products);
                const allCategories = response.data.products.map(product => product.category);
                const uniqueCategories = allCategories.filter((category, index) => allCategories.indexOf(category) === index);
                setCategories(uniqueCategories);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = products.filter((product) =>{
        const searchterm = product.name.toLowerCase().includes(search.toLowerCase());
        const categoryterm=category === "" || product.category === category;
        return searchterm,categoryterm    
    });

    if (loading) return <Loading/>;
    if (error) return <p>Error: {error.message}</p>;

    const redColor = {
        color: 'red',
        fontWeight: 'bold'
    };

    const greenColor = {
        color: 'green',
        fontWeight: 'bold'
    };

    return (
        <div>
            <Search search={search} setSearch={setSearch} category={category} setCategory={setCategory} categories={categories} />
            <PriceSearch/>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-1 px-4 sm:px-8">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product._id} className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
                        <Link to={`/product/${product._id}`}>
                        <img className="w-32 h-32 object-cover mb-4 sm:w-64 sm:h-64 " alt={product.images[0].url} src={product.images[0].url} />
                        <h2 className="text-sm font-semibold mb-2 max-w-36 sm:text-xl sm:max-w-60">{product.name}</h2>
                        <p className="text-lg text-gray-700 mb-2">Price: ${product.price}</p>
                        <p className={product.Stock < 1 ? redColor : greenColor}>
                            {product.Stock < 1 ? "Liên hệ" : "Còn Hàng"}
                        </p>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'>view more</button>
                        </Link>
                    </div>
                ))) :
                (<p className="text-center text-lg py-10">No matching products found.</p>)
            }
        </div>
        <Footer/>
        </div>
    );
};

export default ProductList;
