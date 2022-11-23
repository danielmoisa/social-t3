import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (

        <div className="relative mx-auto text-gray-600">
            <input className="border-0 h-12 px-5 pr-16 rounded-sm text-lg focus:outline-none bg-[#282c37] w-[285px]"
                type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-3 mr-4">
                <FaSearch size={20} />
            </button>
        </div>
    )
}

export default SearchInput;