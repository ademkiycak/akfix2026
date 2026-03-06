
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { fetchData } from "@/lib/api";
import parse from "html-react-parser";
import { BaseUrl, SiteUrl } from "@/lib/baseurl";
import { SEO } from "@/lib/seo";


interface RdPolicy{
  data:[]
  title: string
  description: string
  img_url: string
}


export async function generateMetadata() {

  const post = await fetch(BaseUrl()+`/api/data/company/rd_policy/`)
    .then(res => res.json())

  return {
    title: post[0].title,
    openGraph: {
      title: post[0].title,
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
      title: post[0].title,
      images: [
        {
          url: `${SiteUrl()}/images/og.jpg`,
          width: 1200,
          height: 630
        }
      ]
    },

    alternates: {
      canonical: `/akfix`
    }
  }
}


export default async function RdPolicy(){

  const data = await fetchData<RdPolicy[]>(BaseUrl()+"/api/data/company/rd_policy/");


  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data[0].title,
    url: `${BaseUrl()}/rd-policy`,
    description: data[0].description.replace(/<[^>]*>?/gm, ""),
    about: {
      "@type": "Organization",
      name: "Akkim Yapı Kimyasalları A.Ş.",
      brand: {
        "@type": "Brand",
        name: "Akfix"
      }
    }
  }


  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />


      <Header />

      <Breadcrumb
        title={data[0].title}
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: data[0].title, href: "", active:true },
        ]}
      />

        <section className="w-full lg:container mx-auto my-5 flex justify-between gap-20 p-4 mt-10">
            <Image src={BaseUrl()+`${data[0].img_url}`} width={544} height={696} alt="about" className="w-[50%] max-w-[544] h-auto self-start hidden lg:block rounded-lg" />

            <div className="w-full h-auto space-y-6 font-medium text-[16px] text-[#929292] leading-7">
              
              {
                parse(data[0].description)
              }

              
            </div>

            
        </section>



        <section className="container mx-auto mt-10 lg:mt-30 grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 p-3 lg:p-5 mb-25">

          { /* Photo Gallery */ }

        </section>


      
      <Brands />
      <Footer />
    </>
  );
}


