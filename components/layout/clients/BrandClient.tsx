"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { BaseUrl } from "@/lib/baseurl";


interface Brands{
    brands:[]
}

interface BrandItem{
    id: number
    title: string
    img_url: string
    url: string
}



const BrandList = ({brands}: Brands) => {
    return(
        <Swiper
        className="brands-carousel container mx-auto flex items-center justify-center gap-10"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        navigation={true}
        pagination={false}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1580: { slidesPerView: 6 },
        }}
        style={{ padding: "0 20px" }}
        >


            {
                brands.map((item: BrandItem, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <BrandItem url={item.url} img={BaseUrl()+item.img_url} />
                    </SwiperSlide>
                ))
            }
       

      </Swiper>
    );
}






function BrandItem({url = "", img = ""}){
    return(
        <Link href={url} target={"_blank"} className="w-[150] h-[150] lg:w-[150] lg:h-[150] p-4 flex justify-center items-center shrink-0 border border-transparent hover:bg-white hover:border hover:border-[#00AE9B] rounded-lg">
            <div className="relative w-full h-full">
                <Image
                src={img}
                alt="brand"
                fill
                className="object-contain mx-auto"
                />
            </div>
        </Link>
    );
}



export default BrandList;