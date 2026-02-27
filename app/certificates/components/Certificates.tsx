"use client"
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
interface CertificateItem{
    certificate:[]
}

interface Certificate{
    id: number
    title: string
    cover_url: string
    img_url: string
}


export default function CertificateList({certificate}: CertificateItem){

    return(


        <section className="w-full lg:container mx-auto p-5 mb-20">
            <PhotoProvider>
                <div className="w-full lg:container mx-auto m-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-8 lg:gap-5 lg:gap-y-10">
                    
                    {
                        certificate.map((item: Certificate, index) => (
                            <CertificateItem 
                                key={index} 
                                title={item.title} 
                                cover={`http://akfix.akfix.com.tr${item.cover_url}`}
                                img_url={`http://akfix.akfix.com.tr${item.img_url}`}
                            />
                        ))
                    }
                
                </div>
            </PhotoProvider>
        </section>

    );
}




function CertificateItem({title = "", cover = "", img_url = ""}){
    return (

      <PhotoView src={img_url}>
        <div className="w-full h-auto flex flex-col gap-4 overflow-hidden cursor-pointer">
            <Image src={cover} alt="videos" width={335} height={188} className="w-full h-auto max-h-[450] object-cover rounded-lg border border-gray-200 hover:border-[#00AE9B]" />
          <strong className="text-akfix-gray text-sm md:text-[16px] group-hover-text-akfix-red">{title}</strong>
        </div>
      </PhotoView>

    );
}