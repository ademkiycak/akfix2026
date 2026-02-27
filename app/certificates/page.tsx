
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";

import { fetchData } from "@/lib/api";
import CertificateList from "./components/Certificates";
import { BaseUrl } from "@/lib/baseurl";

export default async function Certificates(){

const data = await fetchData<[]>(BaseUrl()+`/api/data/certificates/`);


  return (
    <>
      <Header />

      <Breadcrumb
        title="Certificates"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
          { label: "Certificates", href: "/certificates", active: true }
        ]}
      />


        {/* Galleries */}
        <section className="w-full lg:container mx-auto p-5 mb-20">
                  
          <CertificateList certificate={data} />
              
        </section>



      
      <Brands />
      <Footer />
    </>
  );
}




