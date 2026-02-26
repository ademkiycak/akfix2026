"use client"

import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function About(){

  const galleries = [
    {
      id: 1,
      img : "/images/galleries/1.jpg"
    },
    {
      id: 2,
      img : "/images/galleries/2.jpg"
    },
    {
      id: 3,
      img : "/images/galleries/3.jpg"
    },
    {
      id: 4,
      img : "/images/galleries/4.jpg"
    },
    {
      id: 5,
      img : "/images/galleries/5.jpg"
    },
    {
      id: 6,
      img : "/images/galleries/6.jpg"
    }
  ];



  return (
    <>
      <Header />

      <Breadcrumb
        title="Akfix Master Of Solutions"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
          { label: "About", href: "/about", active: true }
        ]}
      />

        <section className="w-full lg:container mx-auto my-5 flex justify-between gap-20 p-4 mt-10">
            <Image src={"/images/about.jpg"} width={544} height={696} alt="about" className="w-[50%] max-w-[544] h-auto self-start hidden lg:block rounded-lg" />

            <div className="w-full h-auto space-y-6 font-medium text-[16px] text-[#929292] leading-7">
              <p>
                Starting its operations in chemical constructions field in 2001, Akfix focused on developing eco-friendly, life-esteem chemical products and technologies to create permanent solutions for customer needs. Developing different products on different customer needs, Akfix serves to his customers a wide product range of:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>Adhesives & Glues</li>
                <li>Sealants & Silicones</li>
                <li>PU Foams</li>
                <li>Technical Aerosols</li>
                <li>Waterproofing and Heat Insulation products</li>
                <li>Automotive After Care Products</li>
                <li>Industrial Products</li>
                <li>Disenfectants</li>
              </ul>

              <p>
                With its proliferative know-how and knowledge, Akfix comes up to be an ideal MASTER OF SOLUTIONS, who is a real professional and international player in polyurethane foam and sealants market, development and suply. It CREATES PERMANENT SOLUTIONS to support and complete professional building and construction companies in all their operations.
              </p>

              <p>
                Today, Akfix is in a close relationship with its customers, distributing its products to more than 108 countries all over the world, being able to meet their demands in a very short period of time. Akfix is also presenting important advantages and benefits to its partners in the market. It is providing effective marketing and sales support to its partners, securing their strong position in today’s competitive market.
              </p>

              <p>
                Moreover, Akfix products, developed on the needs of the market, are presented into market with intense promotional and communicational operations.
              </p>

              <p>
                Professionals and amateurs all over the world are preffering Akfix products for more permanent and fruitful outcomes.
              </p>

              <p>
                Akfix is a registered trademark of Akkim Yapı Kimyasalları A.Ş. , Turkey’s biggest PU Aerosol Foam and Silicone Sealant producer.
              </p>

              
            </div>

            
        </section>


        <section className="container mx-auto mt-10 lg:mt-30 grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 p-3 lg:p-5 mb-25">

          <PhotoProvider>
            {
              galleries.map((item) => (
                <PhotoView key={item.id} src={item.img}>
                    <Image src={item.img} width={1000} height={500} alt="gallery" className="rounded-lg cursor-pointer hover:opacity-80" />
                </PhotoView>
              ))
            }
          </PhotoProvider>
          
        </section>


      
      <Brands />
      <Footer />
    </>
  );
}


