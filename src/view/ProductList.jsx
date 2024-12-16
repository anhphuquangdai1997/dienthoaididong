
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../component/Loading';
import PriceSearch from './PriceSearch';
import { Rating } from 'flowbite-react';
import Pagination from '../component/Pagination';
import ServiceList from './ServiceList';
import Slide from './Slide';
import RepairOptions from './RepairOptions';
import Adtiment from './Adtiment';
import Footer from './Footer';
import Search from '../view/Header/Search';
import { SearchContext } from '../contex/SearchContext';
import { DarkModeContext } from '../contex/DarkModeContext';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isFeatured, setIsFeatured] = useState(false);
    const [sellWell, setSellWell] = useState(false);
    const ITEMS_PER_PAGE = 2; // Set your desired items per page  
    const {searchTermt}=useContext(SearchContext)
    const {isDarkMode} =useContext(DarkModeContext)

    useEffect(() => {
        // URL của API của bạn
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/products?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
                setProducts(response.data.products);
                setTotalPages(Math.ceil(response.data.resultPerPage / ITEMS_PER_PAGE));
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
    }, [currentPage]);

    const filteredProducts = products.filter((product) => {
        const searchterm = product.name.toLowerCase().includes(search.toLowerCase());
        const searchtermtt = product.name.toLowerCase().includes(searchTermt.toLowerCase());
        const categoryterm = category === "" || product.category === category;
        const featuredTerm = isFeatured ? product.ratings >= 4.5 : true;
        const sellWellTerm = sellWell ? product.numOfReviews >= 2 : true;
        return searchterm && categoryterm && featuredTerm && sellWellTerm &&searchtermtt;
    })
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            }
            else {
                return b.price - a.price;
            }
        })

    if (loading) return <Loading />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className={`${isDarkMode ?('bg-customDark text-white'):('bg-white text-customDark')}`}>
            <Search isDarkMode={isDarkMode} search={search} setSearch={setSearch} category={category} setCategory={setCategory} categories={categories}/>
            <PriceSearch isDarkMode={isDarkMode} sortOrder={sortOrder} setSortOrder={setSortOrder} setIsFeatured={setIsFeatured} isFeatured={isFeatured} sellWell={sellWell} setSellWell={setSellWell} />
            <div className='flex justify-center gap-4'>
                <ServiceList isDarkMode={isDarkMode} className="col-span-1" />
                <Slide className="col-span-2">2</Slide>
                <Adtiment className="col-span-1" />
            </div>
            <RepairOptions isDarkMode={isDarkMode} />
            <div className="grid sm:grid-cols-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-1 px-4 sm:px-28 max-w-screen-2xl m-auto">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product._id} className={` ${isDarkMode?'border border-transparent border-slate-600' :'border'} rounded-lg shadow-lg p-4 flex flex-col items-center h-wull`}>
                            <Link to={`/product/${product._id}` } className="flex flex-col items-center w-full h-full">
                                <img className="w-28 h-28 object-cover mb-4 sm:w-40 sm:h-40 " alt={product.images[0].url} src={product.images[0].url} />
                                <h2 className="text-sm font-semibold mb-2 max-w-36  sm:max-w-60">{product.name}</h2>
                                <p className="text-lg  mb-2">Price: ${product.price}</p>
                                <Rating>
                                    {[...Array(5)].map((_, index) => (
                                        <Rating.Star key={index} filled={index < Math.round(product.ratings)} />
                                    ))}
                                    <span className=' text-xs'>{product.numOfReviews} đánh giá</span>
                                </Rating>
                                <p className={product.Stock < 1 ? "text-red-500" : "text-green-500"}>
                                    {product.Stock < 1 ? "Liên hệ" : "Còn Hàng"}
                                </p>
                                <div className='flex gap-2 mt-auto'>
                                    <button className={`${isDarkMode? 'bg-red-500 text-white':'bg-black text-white'} hover:bg-red-700  py-2 px-4 rounded transition duration-300`}>view more</button>
                                </div>
                            </Link>
                        </div>
                    ))) :
                    (<p className="text-center text-lg py-10">No matching products found.</p>)
                }
            </div>
            <Pagination isDarkMode={isDarkMode} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            <Footer/>
        </div>
    );
};

export default ProductList;
