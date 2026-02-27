
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faChevronLeft, faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fetchData } from "@/lib/api";
import ProductContentAll from "../../components/ProductContentAll";
import ProductGallery from "../../components/ProductGallery";
import parse from "html-react-parser";
import ProductVideos from "../../components/ProductVideo";
import ProductBrochure from "../../components/ProductBrochure";




export default async function Products({ params }: { params: { list: string, detail: string } }){


    interface Category {
      id: number
      categoriesID: number
      title: string
      url: string
      img_url: string
      color: string
    }


    interface Product {
      id: number
      categoriesID: number
      title: string
      url: string
      more_information: string
      properties: string
      application_areas: string
      cover_img: string
      images: []
      product_images: []
      galleries: []
      brochures: []
      videos: []
      packages: string
      tds: string
      sds: string
      isActive: boolean,
    }




    const { list, detail } = await params

    const productCategory = await fetchData<Category[]>(`http://akfix.akfix.com.tr/public/api/data/categories/one_categories/?url=${list}`);
    const productDetail = await fetchData<Product[]>(`http://akfix.akfix.com.tr/api/data/products/detail/?url=${detail}`);


  return (
    <>
      <Header />


      <Breadcrumb
        title={productDetail[0].title}
        color={productCategory[0].color}
        items={[
          { href: "/", icon: faHome },
          { label: "AKFİX", href: "/about" },
          { label: productCategory[0].title.toUpperCase() , href: `/products/${productCategory[0].url}`},
          { label: productDetail[0].title.toUpperCase(), href: `/products/${productCategory[0].url}/${productDetail[0].url}`, active: true }
        ]}
      />

      <section className="w-full h-auto bg-[#EDF4FA]">
        <div className="w-full lg:container mx-auto py-15 px-5 flex flex-col lg:flex-row gap-5">

            <ProductContentAll 
                cover_img={`http://akfix.akfix.com.tr${productDetail[0].cover_img.replace("/small", "")}`}
                product_images={productDetail[0].images}
                product_galleries={productDetail[0].galleries}
                product_videos={productDetail[0].videos}
                product_brochures={productDetail[0].brochures}
                color={productCategory[0].color}
            />

            <div className="flex-1 h-auto flex flex-col gap-5">
              
              <div className="w-full h-auto bg-white p-7 text-lg leading-8 space-y-5 text-gray-600 rounded-lg">
                <div className="block space-y-1">
                  <h2 className="text-3xl font-extrabold text-[#0064B3]">Akfix</h2>
                  <h3 className="text-2xl font-semibold text-gray-600">{productDetail[0].title}</h3>
                </div>

                { parse(productDetail[0].more_information) }
              </div>



              {
                productDetail[0].properties?.length > 0 && (
                  <div className="w-full h-auto bg-white p-7 text-lg leading-8 space-y-5 text-gray-600 rounded-lg">
                    <strong className="text-2xl font-semibold text-akfix-red block">Properties</strong>

                    <div className="[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-red-700">
                      { parse(productDetail[0].properties) }
                    </div>
                  </div>
                )
              }




             {
              productDetail[0].application_areas?.length > 0 && (
                <div className="w-full h-auto bg-white p-7 text-lg leading-8 space-y-5 text-gray-600 rounded-lg">
                  <strong className="text-2xl font-semibold text-akfix-red block">Application Areas</strong>

                  <div className="[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-red-700">
                    { parse(productDetail[0].application_areas) }
                  </div>
                </div>
              )
             }



            </div>

        </div>




        {
          /* Galleries */
          productDetail[0].galleries?.length > 0 && (
          <section className="w-full lg:container mx-auto p-5">
            <div className="w-auto h-auto mt-5 space-x-2 text-3xl">
                <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">Galleries</strong>
            </div>

            <ProductGallery product_galleries={productDetail[0].galleries} />
      
          </section>
          )
        }
      



      {
      /* Application Videos */
        productDetail[0].videos?.length > 0 && (
          <section className="w-full lg:container mx-auto p-5">
              <div className="w-auto h-auto mt-3 space-x-2 text-3xl">
                  <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">Application</strong>
                  <span className="text-akfix-gray font-light text-2xl md:text-3xl">Videos</span>
              </div>

                <ProductVideos product_videos={productDetail[0].videos} />
            
          </section>
        )
      }




      {/* Brochures */}
      {
        productDetail[0].brochures?.length > 0 && (
          <section className="w-full lg:container mx-auto p-5">
            <div className="w-auto h-auto mt-3 space-x-2 text-3xl">
              <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">Brochures</strong>
            </div>

            <ProductBrochure product_brochures={productDetail[0].brochures} />

          </section>
        )
      }



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









