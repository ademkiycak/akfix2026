"use client"
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
interface GalleryItem{
    gallery:[]
}

interface Gallery{
    id: number
    img_url: string
}


export default function GalleryList({gallery}: GalleryItem){

    return(


        <section className="w-full lg:container mx-auto p-5 mb-20">
            <PhotoProvider>
                <div className="w-full lg:container mx-auto m-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 lg:gap-y-6">
                    
           {
                gallery.map((item: Gallery, index) => (
                    <GaleryItem key={index} cover={`http://akfix.akfix.com.tr${item.img_url}`} />
                ))
           }
                
                </div>
            </PhotoProvider>
        </section>

    );
}





function GaleryItem({cover = ""}){
    return (
      <PhotoView src={cover}>
        <div className="w-full h-auto flex flex-col gap-4 overflow-hidden cursor-pointer">
            <Image src={cover} alt="gallery" width={335} height={188} className="w-full h-[150] md:h-[250] max-h-[250] object-cover rounded-lg border hover:border-[#00AE9B]" />
        </div>
      </PhotoView>
    );
}
