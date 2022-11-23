import React from 'react';
import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
    return (

        <div className="relative mx-auto text-gray-600">
            <input className="border-0 h-10 px-5 pr-16 rounded-md text-lg focus:outline-none bg-[#282c37]"
                type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <FaSearch />
            </button>
        </div>
    )
}

export default SearchInput;