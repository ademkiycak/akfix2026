"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { BaseUrl } from "@/lib/baseurl";


interface SolutionCategories {
  ID: number
  parentID: number
  url: string
  title: string
  img_url: string
  mobil_img_url: string
  catalog_img_url: string
  banner_img_url: string
  color: string
  tag_title: string
  keywords: string
  description: string
  rank: number
  show_in_categories: number
  show_in_solutions: number
  isActive: boolean
  language: number
  matchID: number
  match_categories_id: number
  match_product_id: number
  categoriesID: number
}

const SolutionCategoryClient = ({data} : {data:SolutionCategories[]}) => {
    return <div className="bg-[#F1F1F1] pt-1">
      <div className="w-auto h-auto mx-auto text-center mt-20 mb-5 md:mb-15 space-x-2 text-3xl">
        <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">SOLUTIONS</strong>
        <span className="text-akfix-gray font-light text-2xl md:text-3xl">CATEGORIES</span>
      </div>

    <div className="lg:flex">
      <Swiper
        className="product-categories-carousel container mx-auto mb-20 flex gap-5 justify-center items-center flex-wrap"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        navigation={true}
        pagination={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          380: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1580: { slidesPerView: 6 },
        }}
        style={{ padding: "0 20px" }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} style={{display: "flex !important"}} className="flex justify-center">
              <SolutionCategoryItem   
              key={item.ID}
              title={item.title} 
              url={`products/${item.url}`}  
              img={BaseUrl()+item.img_url}  
            />
          </SwiperSlide>
        ))}

      </Swiper>

      </div>



      <div className="container mx-auto hidden gap-3 justify-center flex-wrap">
        {data.map((item, index) => (
            <SolutionMobileCategoryItem 
              key={index}
              title={item.title} 
              url={item.url}  
              img={BaseUrl()+item.img_url}  
            />
        ))}
      </div>

   </div>
}








function SolutionCategoryItem({title = "", url = "", img = ""}){
    return (
        <Link href={url} className="w-auto flex flex-col items-center text-center gap-4 p-3 border border-transparent hover:border-[#00AE9B] hover:rounded-lg hover:bg-white group mb-10">
            <Image src={img} alt="solution" width={100} height={150} className="w-fit h-[150] max-h-[85] object-contain mix-blend-darken" />
            <strong className="text-sm md:text-lg font-medium text-akfix-gray">{title}</strong>
        </Link>
    );
}




function SolutionMobileCategoryItem({title = "", url = "", img = ""}){
    return (
        <Link href={url} className="flex flex-col items-center gap-4 p-3 border border-transparent hover:border-[#00AE9B] hover:rounded-lg hover:bg-white group">
            <Image src={img} alt="solution" width={100} height={150} className="w-[100] h-[40] object-contain mix-blend-darken" />
            <strong className="text-sm font-medium text-akfix-gray">{title}</strong>
        </Link>
    );
}

export default SolutionCategoryClient;