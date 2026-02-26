"use client"

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface ProductGalleryItem{
    product_galleries:[]
}

export default function ProductGallery({product_galleries}: ProductGalleryItem){
    return(
        <PhotoProvider>
            <div className="w-full lg:container mx-auto m-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 lg:gap-y-6">

                {
                    product_galleries.map((item, index) => (
                        <GaleryItem key={index} cover={`https://www.akfix.com${item}`} />
                    ))
                }
              
            </div>
        </PhotoProvider>
    )
}




function GaleryItem({cover = ""}){
    return (
      <PhotoView src={cover}>
        <div className="w-full auto flex flex-col gap-4 overflow-hidden cursor-pointer">
            <Image src={cover} alt="videos" width={335} height={188} className="w-full h-[150] md:h-[250] object-cover rounded-lg border hover:border-[#00AE9B]" />
        </div>
      </PhotoView>
    );
}