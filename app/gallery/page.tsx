
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";

import GalleryList from "./components/Gallery";
import { fetchData } from "@/lib/api";
import { BaseUrl, SiteUrl } from "@/lib/baseurl";
import { SEO } from "@/lib/seo";




export function generateMetadata() {
  return {
    title: "Gallery",
    openGraph: {
      title: "Gallery",
      url: `${SEO.siteUrl}`,
     images: [
        {
          url: `${SiteUrl()}/images/og.jpg`,
          width: 1200,
          height: 630
        }
      ]
    },

    twitter: {
      title: "Gallery",
      images: [
        {
          url: `${SiteUrl()}/images/og.jpg`,
          width: 1200,
          height: 630
        }
      ]
    },
    alternates: {
      canonical: `/gallery`
    }
  }
}




export default async function Gallery(){

const data = await fetchData<[]>(BaseUrl()+`/api/data/galleries/`);


  return (
    <>
      <Header />

      <Breadcrumb
        title="Gallery"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/akfix" },
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




