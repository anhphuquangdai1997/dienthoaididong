import React from 'react';  

const Pagination = ({ currentPage, setCurrentPage, totalPages,isDarkMode }) => {
  const handleClickPre =()=>{
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleClickNext =()=>{
    if(currentPage<totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  const getPages = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 1); // Bắt đầu từ trang trước đó
    const endPage = Math.min(totalPages, currentPage + 1); // Kết thúc ở trang sau đó

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPages();

  return (  
    <nav aria-label="Page navigation" className="flex justify-center mt-4 pb-12">  
      <ul className="inline-flex -space-x-px">  
        <li>  
          <a  
            onClick={handleClickPre}  
            className={`flex cursor-pointer items-center justify-center px-4 h-10 text-gray-700 bg-white border border-gray-300 rounded-l-lg transition duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-900 ${  
              currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''  
            }`}  
          >  
            ◄  
          </a>  
        </li>  
        {pages.map((page) => (
          <li key={page}>
            <a
              onClick={() => setCurrentPage(page)}
              className={`flex cursor-pointer items-center justify-center px-4 h-10 text-gray-700 bg-white border border-gray-300 transition duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-900 ${
                currentPage === page ? 'bg-gray-200 font-bold' : ''
              }`}
            >
              {page}
            </a>
          </li>
        ))}
        <li>  
          <a  
            onClick={handleClickNext}  
            className={`flex cursor-pointer items-center justify-center px-4 h-10 text-gray-700 bg-white border border-gray-300 rounded-r-lg transition duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-900 ${  
              currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''  
            }`}  
          >  
            ►  
          </a>  
        </li>  
      </ul>  
    </nav>  
  );  
};  

export default Pagination;