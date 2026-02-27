
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { fetchData } from "@/lib/api";
import parse from "html-react-parser";
import { BaseUrl } from "@/lib/baseurl";


interface QualityPolicy{
  data:[]
  title: string
  description: string
  img_url: string
}

export default async function QualityPolicy(){


  const data = await fetchData<QualityPolicy[]>(BaseUrl()+"/api/data/company/quality_policy/");



  return (
    <>
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


