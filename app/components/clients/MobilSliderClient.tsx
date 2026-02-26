"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";


interface MobilSlider {
  ID: string
  title: string
  description: string
  img_url: string
  page_url: string
  rank: string
  isActive: string
  createdAt: string
  language: string
}



export default function MobileSliderClient({data}: {data : MobilSlider[]}){
    return (
      <div className="block md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true,   }}
          /*autoplay={{ delay: 5000 }}*/
          loop>
           
           {
              data.map((item, index) => (
              
                <SwiperSlide key={index}>
                  <Image src={`https://www.akfix.com${item.img_url}`} alt="Banner" width={1920} height={600} className="w-full h-auto object-cover" />
                </SwiperSlide>
              ))
           }

           
        </Swiper>
      </div>
    );
}