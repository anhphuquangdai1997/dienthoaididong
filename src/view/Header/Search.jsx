import React from 'react'

const Search = ({ search, setSearch, category, setCategory, categories }) => {
    return (
        <form className="max-w-lg mx-auto p-2 mt-16 sm:mt-20 sm:block hidden">
            <div className="flex">
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="flex-shrink-0 z-10 py-1 px-1 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                >
                    <option value="">All</option>
                    {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
                </select>
                <div className="relative w-full">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Tìm kiếm sản phẩm..."
                        required=""
                    />
                </div>
            </div>
        </form>

    )
}

export default Search
