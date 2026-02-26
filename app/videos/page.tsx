
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { fetchData } from "@/lib/api";
import VideoList from "./components/Videos";

export default async function Brochures(){



const data = await fetchData<[]>(`https://www.akfix.com/public/api/data/videos/`);

  return (
    <>
      <Header />

      <Breadcrumb
        title="Videos"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
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




