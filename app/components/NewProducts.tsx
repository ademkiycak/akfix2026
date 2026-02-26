"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

import categories from "../../lib/data/categories.json";

const NewProducts = () => {
  return (
    <>
        <div className="w-auto h-auto mx-auto text-center mt-20 space-x-2 text-3xl">
            <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">NEW</strong>
            <span className="text-akfix-gray font-light text-2xl md:text-3xl">PRODUCTS</span>
        </div>


        <Swiper
            className="new-products-carousel container mx-auto my-5 flex items-center justify-center gap-5"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            pagination={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
        }}
        style={{ padding: "20px 0" }}
        >
        {categories.map((product) => (
            <SwiperSlide key={product.id}>
                <NewProductItem title="Thermcoat Thermal & Acoustic Insulation Pu Spray Foam (Gun Use)" url="#" img="/images/product.png" />
            </SwiperSlide>
        ))}

        </Swiper>

    </>
  );
}

/*
export default function NewProducts() {
    return(
        <>
            <div className="w-auto h-auto mx-auto text-center mt-20 mb-5 space-x-2 text-3xl">
            <strong className="font-extrabold text-akfix-gray">NEW</strong>
            <span className="text-akfix-gray font-light">PRODUCTS</span>
            </div>


            <div className="container mx-auto my-10 flex gap-5">

                <NewProductItem title="Thermcoat Thermal & Acoustic Insulation Pu Spray Foam (Gun Use)" url="#" img="/images/product.png" />
                <NewProductItem title="Thermcoat Thermal & Acoustic Insulation Pu Spray Foam (Gun Use)" url="#" img="/images/product.png" />
                <NewProductItem title="Thermcoat Thermal & Acoustic Insulation Pu Spray Foam (Gun Use)" url="#" img="/images/product.png" />
                <NewProductItem title="Thermcoat Thermal & Acoustic Insulation Pu Spray Foam (Gun Use)" url="#" img="/images/product.png" />
                <NewProductItem title="Thermcoat Thermal & Acoustic Insulation Pu Spray Foam (Gun Use)" url="#" img="/images/product.png" />

            </div>
        </>
    );
};
*/



function NewProductItem({title = "", url = "", img = ""}){
    return(
      <Link href={url} className="md:w-auto lg:w-full lg:m-0 h-auto flex flex-col gap-3 m-2 relative group">
          <div className="flex flex-col absolute m-3 font-extrabold italic text-xs text-white">
            <span className="bg-[#C00020] w-max py-1 px-2 rounded-tl-sm rounded-tr-sm">NEW</span>
            <span className="bg-[#00AE9B] w-max py-1 px-2 rounded-tr-sm rounded-bl-sm rounded-br-sm">PRODUCT</span>
          </div>

          <div className="w-full h-[380] border border-gray-400 rounded-xl p-20 flex items-center justify-center group-hover:border-[#C00020]">
              <div className="w-full h-[300] relative">
                <Image src={img} fill className="object-contain" alt="product" />
              </div>
          </div>
          <strong className="text-gray-500 text-sm group-hover:text-[#C00020]">{title}</strong>
      </Link>
    );
}



export default NewProducts;