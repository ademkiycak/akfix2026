"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search(){
    return(
        <div className="w-full max-w-3xl h-12 hidden bg-gray-200 px-5 mt-3 md:flex flex-row items-center gap-3 rounded-lg border border-transparent hover:border-gray-400 hover:border">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 w-5" />
            <span className="text-gray-300">|</span>
            <input type="search" name="search" className="w-full h-full outline-none text-sm font-medium text-gray-500" placeholder="Product Search" />
        </div>
    );
}