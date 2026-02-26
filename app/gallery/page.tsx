
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";

import GalleryList from "./components/Gallery";
import { fetchData } from "@/lib/api";

export default async function Gallery(){

const data = await fetchData<[]>(`https://www.akfix.com/public/api/data/galleries/`);


  return (
    <>
      <Header />

      <Breadcrumb
        title="Gallery"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
          { label: "Gallery", href: "/gallery", active: true }
        ]}
      />


        {/* Galleries */}
        <section className="w-full lg:container mx-auto p-5 mb-20">
                  
          <GalleryList gallery={data} />
              
        </section>



      
      <Brands />
      <Footer />
    </>
  );
}




