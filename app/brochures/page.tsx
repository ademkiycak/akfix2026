
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";
import BrochureList from "./components/Brochures";
import { fetchData } from "@/lib/api";
import { BaseUrl, SiteUrl } from "@/lib/baseurl";
import { SEO } from "@/lib/seo";



export function generateMetadata() {
  return {
    title: "Brochures",
    openGraph: {
      title: "Brochures",
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
      title: "Brochures",
      images: [
        {
          url: `${SiteUrl()}/images/og.jpg`,
          width: 1200,
          height: 630
        }
      ]
    },

    alternates: {
      canonical: `/brochures`
    }
  }
}



export default async function Brochures(){

const data = await fetchData<[]>(BaseUrl()+`/api/data/brochures/`);

  return (
    <>
      <Header />

      <Breadcrumb
        title="Brochures"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/akfix" },
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




