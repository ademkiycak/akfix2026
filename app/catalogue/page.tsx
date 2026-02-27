
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { fetchData } from "@/lib/api";
import CatalogueList from "./components/Catalogue";
import { BaseUrl } from "@/lib/baseurl";

export default async function Catalogue(){



const data = await fetchData<[]>(BaseUrl()+`/api/data/catalogues/`);

  return (
    <>
      <Header />

      <Breadcrumb
        title="Catalogues"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
          { label: "Catalogues", href: "/catalogue", active: true }
        ]}
      />


      {/* Brochures */}
      <section className="w-full lg:container mx-auto p-5 mb-20">

          <div className="w-full lg:container mx-auto m-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-6 lg:gap-5 lg:gap-y-10">
            
            <CatalogueList catalogue={data} />

        </div>

      </section>




      
      <Brands />
      <Footer />
    </>
  );
}





