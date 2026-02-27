
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faChevronLeft, faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchData } from "@/lib/api";


export default async function Products({ params }: { params: { list: string } }){

const { list } = await params


   
interface Product {
  id: number
  categoriesID: number
  title: string
  url: string
  cover_img: string
  isActive: boolean
  new_product: boolean
  new_design: boolean
}
   
interface Category {
  id: number
  categoriesID: number
  title: string
  url: string
  img_url: string
  color: string
}


    const productLists = await fetchData<Product[]>(`http://akfix.akfix.com.tr/api/data/products/index.php?url=${list}`);
    const productCategory = await fetchData<Category[]>(`http://akfix.akfix.com.tr/public/api/data/categories/one_categories/?url=${list}`);


  return (
    <>

      <Header />

      <Breadcrumb
        title={productCategory[0].title}
        color={productCategory[0].color}
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
          { label: productCategory[0].title, href: "/products", active: true }
        ]}
      />

      <section className="w-full h-auto bg-[#FFF7F8]" style={{ backgroundColor: `rgba(${productCategory[0].color ? productCategory[0].color : "192, 0, 32"}, 0.1)` }}>
        <div className="w-full lg:container mx-auto py-15 grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap justify-center lg:gap-8 px-2">

          {
        
            productLists.map((item, index) =>
              <ProductItem 
                key={index} 
                productCode={"Akfix"} 
                title={item.title} 
                url={list+"/"+item.url} 
                img={`http://akfix.akfix.com.tr${item.cover_img}`} 
                color={productCategory[0].color} 
                productFrameColor={productCategory[0].color}
                borderColor={productCategory[0].color} 
                newProduct={item.new_product} 
                newDesign={item.new_design} 
              />
          )
        }

        </div>


        <section className="w-full h-auto flex justify-between items-center-safe py-10 px-3 md:px-20 border-t border-[#C3D7EA]">
          
          <Link href={""}>
            <div className="w-auto h-auto px-3 md:px-4 py-2 bg-[#F27C00] hover:bg-gray-600 relative flex items-center text-white gap-2 md:gap-5 rounded-lg">
              <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
              <div className="text-right">
                <span className="text-xs font-normal block">Previos Categories</span>
                <strong className="text-xs md:text-sm font-bol block leading-5">Adhesives & Glues</strong>
              </div>
              <Image src={"/images/categories/adhesives-a.png"} width={37} height={50} alt="categories" className="hidden lg:block" />
            </div>
          </Link>

          <span className="px-2 py-2 text-white text-sm font-semibold rounded-md hidden md:block"
                style={{ backgroundColor: `rgb(${productCategory[0].color})` }}>{productCategory[0].title}</span>

          <Link href={""}>
            <div className="w-auto h-auto px-3 md:px-4 py-2 bg-[#E13510] hover:bg-gray-600 relative flex items-center text-white gap-2 md:gap-5 rounded-lg">
              <Image src={"/images/categories/foams-a.png"} width={37} height={50} alt="categories" className="hidden lg:block" />
              <div className="text-left">
                <span className="text-xs font-normal block">Previos Categories</span>
                <strong className="text-xs md:text-sm font-bol block leading-5">Pu Foams</strong>
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






function ProductItem({productCode="", title = "", url = "", img = "", color = "#222", productFrameColor="#fff", borderColor = "#222", newProduct = false, newDesign = false}){
    return(
      <Link href={url} className="w-auto lg:w-[300] lg:m-0 h-auto flex flex-col gap-3 m-2 relative group">
            {newProduct == true && (
                <div className="flex flex-col absolute m-2 font-extrabold italic text-[10px] lgtext-xs text-white">
                  <span className="bg-[#C00020] w-max py-1 px-1.5 rounded-tl-sm rounded-tr-sm">NEW</span>
                  <span className="bg-[#00AE9B] w-max py-1 px-1.5 rounded-tr-sm rounded-bl-sm rounded-br-sm">PRODUCT</span>
                </div>
              )}

              {newDesign == true && (
                <div className="flex flex-col absolute m-2 font-extrabold italic text-[10px] lgtext-xs text-white">
                  <span className="bg-[#C00020] w-max py-1 px-1.5 rounded-tl-sm rounded-tr-sm">NEW</span>
                  <span className="bg-[#00AE9B] w-max py-1 px-1.5 rounded-tr-sm rounded-bl-sm rounded-br-sm">DESIGN</span>
                </div>
              )}

              <div className={`product-card w-full h-[320] lg:h-[420] border rounded-xl lg:p-10 p-5 flex items-center justify-center 
                 group-hover:border-[#C00020]`} style={{borderColor: `rgba(${borderColor ? borderColor : "192, 0, 32"}, 0.3)`, backgroundColor: `rgba(${productFrameColor ? productFrameColor : "192, 0, 32"}, 0.1)`}} >
  
              <div className="w-full h-[250] lg:h-[350] relative">
                <Image src={img} fill className="object-contain" alt="product" priority />
              </div>
              
          </div>
         <div className="flex flex-col gap-1 mt-2 mb-7">
            <strong className="text-sm lg:text-xl group-hover:text-[#C00020]" style={{color: `rgb(${color})`}}>{productCode}</strong>
            <strong className="text-gray-500 text-sm group-hover:text-[#C00020]">{title}</strong>
         </div>
      </Link>
    );
}


