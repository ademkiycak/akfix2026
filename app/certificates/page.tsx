
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";

import { fetchData } from "@/lib/api";
import CertificateList from "./components/Certificates";
import { BaseUrl, SiteUrl } from "@/lib/baseurl";
import { SEO } from "@/lib/seo";



export function generateMetadata() {
  return {
    title: "Certificates",
    openGraph: {
      title: "Certificates",
      url: `${SEO.siteUrl}`,
      images: [
        {
          url: "",
          width: 1200,
          height: 630
        }
      ]
    },

    twitter: {
      title: "Certificates",
      images: [
        {
          url: `${SiteUrl()}/images/og.jpg`,
          width: 1200,
          height: 630
        }
      ]
    },

    alternates: {
      canonical: `/certificates`
    }
  }
}


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
          { label: "Akfix", href: "/akfix" },
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




