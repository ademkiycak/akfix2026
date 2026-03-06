
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { fetchData } from "@/lib/api";
import VideoList from "./components/Videos";
import { BaseUrl, SiteUrl } from "@/lib/baseurl";
import { SEO } from "@/lib/seo";


export function generateMetadata() {
  return {
    title: "Videos",
    openGraph: {
      title: "Videos",
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
      title: "Videos",
      images: [
        {
          url: `${SiteUrl()}/images/og.jpg`,
          width: 1200,
          height: 630
        }
      ]
    },

    alternates: {
      canonical: `/Videos`
    }
  }
}


export default async function Videos(){

const data = await fetchData<[]>(BaseUrl()+`/api/data/videos/`);

  return (
    <>
      <Header />

      <Breadcrumb
        title="Videos"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/akfix" },
          { label: "Videos", href: "/videos", active: true }
        ]}
      />


      {/* Videos */}
      <section className="w-full lg:container mx-auto p-5 mb-20">

        <div className="w-full lg:container mx-auto m-6 gap-y-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 lg:gap-y-10">
            
          <VideoList videos={data} />    

        </div>

      </section>




      
      <Brands />
      <Footer />
    </>
  );
}




