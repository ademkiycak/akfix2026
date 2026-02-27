"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { BaseUrl } from "@/lib/baseurl";


interface ProductCategories {
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

const ProductCategoryClient = ({data} : {data:ProductCategories[]}) => {
    return <>
    <div className="w-auto h-auto mx-auto text-center mt-10 md:mt-20 mb-10 md:mb-15 space-x-2 text-3xl">
      <strong className="font-extrabold text-akfix-red text-2xl md:text-3xl">PRODUCTS</strong>
      <span className="text-akfix-gray font-light text-2xl md:text-3xl">CATEGORIES</span>
    </div>

    <div className="hidden lg:flex">
      <Swiper
        className="product-categories-carousel container mx-auto mb-20 flex gap-5 justify-center items-center flex-wrap"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        navigation={true}
        pagination={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1580: { slidesPerView: 6 },
        }}
        style={{ padding: "0 20px" }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} style={{display: "flex !important"}} className="flex justify-center">
              <ProductCategoryItem 
              key={item.ID}
              title={item.title} 
              url={`products/${item.url}`}  
              icon={BaseUrl()+item.img_url}  
              textColor={item.color} 
              bg={BaseUrl()+item.banner_img_url} 
            />
          </SwiperSlide>
        ))}

      </Swiper>

      </div>



      <div className="container mx-auto flex lg:hidden gap-8 justify-center flex-wrap pb-20">
        {data.map((item, index) => (
            <ProductMobileCategoryItem 
              key={index}
              title={item.title} 
              url={item.url}  
              icon={BaseUrl()+item.img_url}  
              textColor={item.color} 
              bg={BaseUrl()+item.banner_img_url} 
            />
        ))}
      </div>

    </>
}







function ProductCategoryItem({title = "", url = "", icon = "", textColor = "#707070", bg = ""}){
    return <>
        <Link href={url} className="w-[192] h-auto flex flex-col items-center gap-5 group">
            <div className="w-[192] h-[192] bg-center bg-no-repeat bg-cover rounded-full relative flex justify-center items-center" style={{ backgroundImage: `url('${bg}')` }}>
                <Image className="w-[86] h-auto animate-[slideDown_0.2s_ease-out_forwards] group-hover:animate-[slideDown2_0.2s_ease-out_forwards]" src={icon} alt="Akfix" width={86} height={120} priority />
            </div>
            <strong className="text-2xl font-extrabold text-center leading-7 group-hover-text-akfix-gray" style={{color: `rgb(${textColor})`}}>{title}</strong>
        </Link>
    </>
}





function ProductMobileCategoryItem({title = "", url = "", icon = "", textColor = "#707070", bg = ""}){
    return <>
        <Link href={url} className="w-[130] h-auto flex flex-col items-center gap-5 group">
            <div className="w-[130] h-[130] bg-center bg-no-repeat bg-cover rounded-full relative flex justify-center items-center" style={{ backgroundImage: `url('${bg}')` }}>
            <Image className="w-[60] h-auto animate-[slideDown_0.2s_ease-out_forwards] group-hover:animate-[slideDown2_0.2s_ease-out_forwards]" src={icon} alt="Akfix" width={86} height={120} priority />
            </div>
            <strong className="text-xl font-extrabold text-center leading-6 group-hover-text-akfix-gray" style={{color: `rgb(${textColor})`}}>{title}</strong>
        </Link>
    </>
}


export default ProductCategoryClient;