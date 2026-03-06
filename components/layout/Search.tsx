"use client";
import { useState, useEffect, useMemo } from "react";


import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { BaseUrl } from "@/lib/baseurl";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  url: string;
  category_url: string;
  cover_img:string;
}

export default function Search(){

    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(BaseUrl()+`/api/data/products/search_list_products.php`);
            const data = await res.json();
            setAllProducts(data);
            setLoading(false);
        };

        fetchData();
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
        setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);


    const filteredProducts = useMemo(() => {
    // if (!debouncedQuery) return allProducts; // Tüm ürünleri göster
    if (!debouncedQuery.trim()) return []; // boşsa hiçbir şey gösterme

        return allProducts.filter((item) =>
        item.title
            ?.toLowerCase()
            .includes(debouncedQuery.toLowerCase())
        );
    }, [debouncedQuery, allProducts]);


    return(
        <div className="w-full max-w-3xl h-12 hidden bg-gray-200 px-5 mt-3 md:flex flex-row items-center gap-3 rounded-lg border border-transparent hover:border-gray-400 hover:border relative">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 w-5" />
            <span className="text-gray-300">|</span>
                <input 
                    type="search" 
                    name="search" 
                    className="w-full h-full outline-none text-sm font-medium text-gray-500" 
                    placeholder="Product Search" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    autoComplete="off"
                />


                {
                    query && (
                         <>

                        <div className="w-auto h-auto max-h-[700] bg-white absolute z-90 left-2 right-2 top-[47] rounded-b-xl  border border-gray-300 border-t-0 flex flex-col">
                            {loading && <p className="m-2">Result are listing...</p>}
                            

                            {filteredProducts.slice(0, 8).map((item) => (
                                <Link 
                                href={`/products/${item.category_url}/${item.url}`} 
                                key={item.id} 
                                className="text-sm font-medium text-gray-500 hover:text-[#C00020] flex items-center mx-2 my-0.5 gap-4
                                bg-gray-50 border border-gray-200 rounded-lg p-1 group hover:bg-white first:mt-2 last:mb-2">
                                    <div className="w-15 h-[70] bg-gray-50 rounded-lg relative p-2 border border-gray-200  group-hover:bg-white">
                                        <div className="w-full h-full relative">
                                            <Image
                                            src={BaseUrl() + item.cover_img}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    {item.title}
                                </Link>
                            ))}

                        </div>
                        </>
                    )
                }


        </div>
    );
}



