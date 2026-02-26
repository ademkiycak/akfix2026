
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";
import BrochureList from "./components/Brochures";
import { fetchData } from "@/lib/api";

export default async function Brochures(){



const data = await fetchData<[]>(`https://www.akfix.com/public/api/data/brochures/`);

  return (
    <>
      <Header />

      <Breadcrumb
        title="Brochures"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
          { label: "Brochures", href: "/brochures", active: true }
        ]}
      />


      {/* Brochures */}
      <section className="w-full lg:container mx-auto p-5 mb-20">

          <div className="w-full lg:container mx-auto m-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-6 lg:gap-5 lg:gap-y-10">
            
            <BrochureList brochures={data} />

        </div>

      </section>




      
      <Brands />
      <Footer />
    </>
  );
}




