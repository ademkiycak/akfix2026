"use client"

import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faChevronLeft, faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";



export default function Products(){

    const productLists = [];

    for (let i = 1; i < 25; i++) {
      productLists.push(
        <ProductItem 
          key={i} 
          title="Thermcoat Thermal & Acoustic Insulation Pu Spray Foam (Gun Use)" 
          url="#" 
          img="/images/product.png" 
          color="#0064B3" 
          productFrameColor="#E1ECF6" 
          borderColor="#C3D7EA" 
          newProduct 
        />
    );
    }

  return (
    <>
      <Header />


 

      <Breadcrumb
        title="Thermcoat Thermal & Acoustic Insulation Pu Spray Foam"
        color="#0064B3"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
          { label: "Sealants", href: "/products", active: true }
        ]}
      />

      <section className="w-full h-auto bg-[#EDF4FA]">
        <div className="w-full lg:container mx-auto py-15 px-5 flex flex-col lg:flex-row gap-5">

              <PhotoProvider>
              <div className="w-full lg:w-[530] h-auto flex flex-col">

              <div className="w-full lg:w-[530] h-[480] md:h-[680] bg-white rounded-lg flex justify-center items-center relative p-10">
                  <PhotoView src="/images/product.png">
                      <Image src={"/images/product.png"} fill className="w-auto  h-fit object-contain p-10 cursor-pointer hover:opacity-90" alt="Product" />
                  </PhotoView>
              </div>

              <div className="w-full h-auto grid grid-cols-2  md:grid-cols-4 lg:grid-cols-3  gap-3 mt-5">

                {/* Product images */}
                  <PhotoView src="/images/product.png">
                    <div className="w-full h-[110] bg-amber-50 rounded-xl relative border border-white hover:border hover:border-[#00AE9B] cursor-pointer hover:opacity-90">
                      <Image src={"/images/product.png"} fill className="w-auto  h-fit object-contain p-2" alt="Product" />
                    </div>
                  </PhotoView>


                {/* Product gallery */}
                <PhotoView src="/images/gallery.jpg">
                  <div className="w-full h-[110] bg-amber-50 rounded-xl relative overflow-hidden border border-white hover:border hover:border-[#00AE9B]">
                    <Image src={"/images/gallery.jpg"} fill className="w-auto h-fit object-cover" alt="Product" />
                  </div>
                </PhotoView>



                {/* Product videos 1 */}
                <Link href={""}>
                  <div className="w-full h-[110] bg-amber-50 rounded-xl relative overflow-hidden border border-white hover:border hover:border-[#00AE9B] cursor-pointer hover:opacity-90">
                    <div className="w-auto h-auto p-0.5 rounded-lg bg-akfix-green absolute z-50 top-2 right-2 flex justify-center items-center">
                      <FontAwesomeIcon icon={faYoutube} fontSize={22} className="text-white" />
                    </div>
                    <Image src={"/images/videos/1.svg"} fill className="w-auto h-fit object-left object-cover" alt="Product" />
                  </div>
                </Link>




                {/* Product brochures 1 */}
                <Link href={""}>
                  <div className="w-full h-[110] bg-amber-50 rounded-xl relative overflow-hidden border border-white hover:border hover:border-[#00AE9B]">
                    <Image src={"/images/brochures.jpg"} fill className="w-auto  h-fit object-cover" alt="Product" />
                  </div>
                </Link>
        

              
              </div>
              
              </div>
            </PhotoProvider>

            <div className="flex-1 h-auto flex flex-col gap-5">
              
              <div className="w-full h-auto bg-white p-7 text-lg leading-8 space-y-5 text-gray-600 rounded-lg">
                <div className="block space-y-1">
                  <h2 className="text-3xl font-extrabold text-[#0064B3]">Thermcoat</h2>
                  <h3 className="text-2xl font-semibold text-gray-600">Thermal & Acoustic Insulation Pu Spray Foam</h3>
                </div>

                <p>
                  Multi-Seal is a universal grade, general purpose all-weather adhesive sealant based on AST polymer. Combines the properties of both silicone and the polyurethane that makes it an optimum choice for a variety of substrates including: Aluminum, Granite, Ceramics, Marble, Porcelain, Metals, PVC, Glass, Wood, Porous Surfaces (Concrete, Brick, Limestone, etc.).
                </p>
              </div>



              <div className="w-full h-auto bg-white p-7 text-lg leading-8 space-y-5 text-gray-600 rounded-lg">
                <strong className="text-2xl font-semibold text-akfix-red block">Properties</strong>

                <div className="[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-red-700">
                  <ul>
                    <li>Does not contain solvent, silicone or isocyanate,</li>
                    <li>Very Low VOC content,</li>
                    <li>No bubble formation, even in wet and humid conditions, </li>
                    <li>Very good UV resistance,</li>
                    <li>Over-paintable with water based paints,</li>
                    <li>No shrinkage,</li>
                    <li>Does not cause oil stains in panels and porous material,</li>
                    <li>Non-sag, very easy to apply,</li>
                    <li>No surface tackiness</li>
                </ul>
                </div>

              </div>



              <div className="w-full h-auto bg-white p-7 text-lg leading-8 space-y-5 text-gray-600 rounded-lg">
                <strong className="text-2xl font-semibold text-akfix-red block">Application Areas</strong>

                <div className="[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-red-700">
                  <ul>
                    <li>Window and Door Perimeter,</li>
                    <li>General sealing and waterproofing,</li>
                    <li>Roofing and gutter,</li>
                    <li>Very good UV resistance,</li>
                    <li>Concrete joints,</li>
                    <li>Metal building construction,</li>
                    <li>HVAC</li>
                </ul>
                </div>

              </div>


            </div>

        </div>




      {/* Galleries */}
      <section className="w-full lg:container mx-auto p-5">
        <div className="w-auto h-auto mt-5 space-x-2 text-3xl">
            <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">Galleries</strong>
        </div>


        <PhotoProvider>
          <div className="w-full lg:container mx-auto m-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 lg:gap-y-6">
              <GaleryItem cover="/images/gallery.jpg" />
              <GaleryItem cover="/images/gallery.jpg" />
              <GaleryItem cover="/images/gallery.jpg" />
              <GaleryItem cover="/images/gallery.jpg" />
              <GaleryItem cover="/images/gallery.jpg" />
              <GaleryItem cover="/images/gallery.jpg" />
              <GaleryItem cover="/images/gallery.jpg" />
              <GaleryItem cover="/images/gallery.jpg" />
          </div>
        </PhotoProvider>
      </section>



      {/* Application Videos */}
      <section className="w-full lg:container mx-auto p-5">
          <div className="w-auto h-auto mt-3 space-x-2 text-3xl">
              <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">Application</strong>
              <span className="text-akfix-gray font-light text-2xl md:text-3xl">Videos</span>
          </div>


        <div className="w-full lg:container mx-auto m-6 gap-y-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 lg:gap-y-10">
            <VideoItem title="Amazing Super Glue" url="#" cover="/images/videos/1.svg" coverHover="/images/videos/hover/1.webp" />
            <VideoItem title="Amazing Super Glue" url="#" cover="/images/videos/2.svg" coverHover="/images/videos/hover/2.webp" />
            <VideoItem title="Amazing Super Glue" url="#" cover="/images/videos/3.svg" coverHover="/images/videos/hover/3.webp" />
            <VideoItem title="Amazing Super Glue" url="#" cover="/images/videos/4.svg" coverHover="/images/videos/hover/4.webp" />
            <VideoItem title="Amazing Super Glue" url="#" cover="/images/videos/5.svg" coverHover="/images/videos/hover/1.webp" />
            <VideoItem title="Amazing Super Glue" url="#" cover="/images/videos/6.svg" coverHover="/images/videos/hover/2.webp" />
            <VideoItem title="Amazing Super Glue" url="#" cover="/images/videos/7.svg" coverHover="/images/videos/hover/3.webp" />
            <VideoItem title="Amazing Super Glue" url="#" cover="/images/videos/8.svg" coverHover="/images/videos/hover/4.webp" />
        </div>
      </section>



      {/* Brochures */}
      <section className="w-full lg:container mx-auto p-5">
        <div className="w-auto h-auto mt-3 space-x-2 text-3xl">
          <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">Brochures</strong>
        </div>


          <div className="w-full lg:container mx-auto m-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-6 lg:gap-5 lg:gap-y-10">
            <BrochureItem title="895 Mouse & Pest Barrier Pu Foam" url="#" cover="/images/brochure-1.svg" />
            <BrochureItem title="601 Butyl Sealant" url="#" cover="/images/brochure-2.svg" />
            <BrochureItem title="760 Multi Purpose Spray Adhesive" url="#" cover="/images/brochure-3.svg" />
            <BrochureItem title="806 Door & Window Pu Foam" url="#" cover="/images/brochure-4.svg" />
            <BrochureItem title="647FC Metal Automotive & Construction PU Sealant" url="#" cover="/images/brochure-1.svg" />
            <BrochureItem title="E360 Plast Weld" url="#" cover="/images/brochure-2.svg" />
            <BrochureItem title="360FC Fast Cure Pur Wood Glue" url="#" cover="/images/brochure-3.svg" />
            <BrochureItem title="510 No Nail Pu Montage Adhesive" url="#" cover="/images/brochure-4.svg" />
        </div>

      </section>




        <section className="w-full h-auto flex justify-between items-center-safe py-10 px-3 lg:px-20 border-t border-[#C3D7EA] mt-20">
          
          <Link href={""}>
            <div className="w-auto h-auto px-3 md:px-4 py-2 bg-akfix-red hover:bg-gray-600 relative flex items-center text-white gap-2 md:gap-5 rounded-lg">
              <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
              <div className="text-right hidden md:block">
                <span className="text-xs font-normal block">Previos Product</span>
                <strong className="text-xs md:text-sm font-bol block leading-5">MS Universal AST Polymer</strong>
              </div>
            </div>
          </Link>


          <Link href={""}>
            <div className="w-auto h-auto px-3 md:px-4 py-2 bg-[#0064B3] hover:bg-gray-600 relative flex items-center text-white gap-2 md:gap-5 rounded-lg">
              <Image src={"/images/categories/sealants.png"} width={37} height={50} alt="categories" className="hidden lg:block" />
              <div className="text-left">
                <span className="text-xs font-normal hidden md:block">Category</span>
                <strong className="text-xs md:text-lg font-bol block leading-6">Sealants</strong>
              </div>
              <FontAwesomeIcon icon={faChevronRight} fontSize={12} />

            </div>
          </Link>


          <Link href={""}>
            <div className="w-auto h-auto px-3 md:px-4 py-2 bg-akfix-green hover:bg-gray-600 relative flex items-center text-white gap-2 md:gap-5 rounded-lg">
              <div className="text-left hidden md:block">
                <span className="text-xs font-normal block">Next Product</span>
                <strong className="text-xs md:text-sm font-bol block leading-5">601 Butyl Sealant</strong>
              </div>
              <FontAwesomeIcon icon={faChevronRight} fontSize={12} />

            </div>
          </Link>

        </section>





      </section>



      
      <Brands />
      <Footer />
    </>
  );
}






function ProductItem({productCode="Thermcoat", title = "", url = "", img = "", color = "#222", productFrameColor="#fff", borderColor = "#222", newProduct = false}){
    return(
      <Link href={url} className="w-auto lg:w-[300] lg:m-0 h-auto flex flex-col gap-3 m-2 relative group">
            {newProduct == true && (
                <div className="flex flex-col absolute m-2 font-extrabold italic text-[10px] lgtext-xs text-white">
                  <span className="bg-[#C00020] w-max py-1 px-1.5 rounded-tl-sm rounded-tr-sm">NEW</span>
                  <span className="bg-[#00AE9B] w-max py-1 px-1.5 rounded-tr-sm rounded-bl-sm rounded-br-sm">PRODUCT</span>
                </div>
              )}


              <div className={`w-full h-[320] lg:h-[420] border rounded-xl lg:p-10 p-5 flex items-center justify-center border-[${borderColor}] bg-[${productFrameColor}] group-hover:border-[#0064B3]`}>
  
              <div className="w-full h-[250] lg:h-[350] relative">
                <Image src={img} fill className="object-contain" alt="product" />
              </div>
          </div>
         <div className="flex flex-col gap-1 mt-2 mb-7">
           <strong className="text-sm lg:text-xl group-hover:text-[#C00020]" style={{color: color}}>{productCode}</strong>
            <strong className="text-gray-500 text-sm group-hover:text-[#C00020]">{title}</strong>
         </div>
      </Link>
    );
}




function GaleryItem({cover = ""}){
    return (
      <PhotoView src={cover}>
        <div className="w-full h-auto flex flex-col gap-4 overflow-hidden cursor-pointer">
            <Image src={cover} alt="videos" width={335} height={188} className="w-full h-auto max-h-[250] object-cover rounded-lg border hover:border-[#00AE9B]" />
        </div>
      </PhotoView>
    );
}


function VideoItem({title = "", url = "", cover = "", coverHover = ""}){
    return (
      <Link href={url} className="w-full h-auto flex flex-col gap-3 relative group">
          <div className="w-auto h-auto p-0.5 rounded-lg bg-akfix-green absolute z-50 top-2 right-2 flex justify-center items-center">
            <FontAwesomeIcon icon={faYoutube} fontSize={22} className="text-white" />
          </div>
          <Image src={cover} alt="videos" width={335} height={188} className="w-full h-auto rounded-lg group-hover:hidden border border-transparent" />
          <Image src={coverHover} alt="videos" width={335} height={188} className="w-full h-auto rounded-lg hidden group-hover:block" unoptimized />
          <strong className="text-akfix-gray text-sm md:text-[16px] group-hover-text-akfix-red">{title}</strong>
      </Link>
    );
}


function BrochureItem({title = "", url = "", cover = ""}){
    return (
      <Link href={url} className="w-full h-auto flex flex-col gap-3 overflow-hidden">
          <Image src={cover} alt="videos" width={335} height={188} className="w-full h-auto max-h-[250] object-cover rounded-lg border border-gray-200 hover:border-[#00AE9B]" />
          <strong className="text-akfix-gray text-sm md:text-[16px] group-hover-text-akfix-red">{title}</strong>
      </Link>
    );
}
