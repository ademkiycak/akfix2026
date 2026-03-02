
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt, faChevronRight, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { fetchData } from "@/lib/api";
import { BaseUrl } from "@/lib/baseurl";
import parse from "html-react-parser";

export default async function Blog({ params }: { params: { slug: string } }){

  interface Blog{
    id:number
    title:string
    url:string
    more_information:string
    blog_tags:string
    createdAt:string
  }

  const { slug } = await params

  const data_list = await fetchData<Blog[]>(BaseUrl()+"/api/data/blogs");
  const data = await fetchData<Blog[]>(`${BaseUrl()}/api/data/blogs/detail/?url=${slug}`);

  return (
    <>
      <Header />

      <Breadcrumb
        title={data[0].title}
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
          { label: "What is a Chemical Anchor? How To Apply?", href: "/blog", active: true }
        ]}
      />



      {/* Blog */}
      <section className="w-full lg:w-5xl xl:w-7xl mx-auto p-5 mt-10 mb-20 flex justify-between flex-col lg:flex-row gap-15 lg:gap-20">
        
        <div className="w-full max-w-[900] h-auto flex flex-col space-y-4">
          
          { /** Blog item */ }

          <div className="w-full h-auto flex flex-col bg-gray-50 p-4 rounded-lg space-y-3 text-[16px] text-akfix-gray leading-7
          [&_strong]:font-bold
          [&_strong]:text-xl
          [&_strong]:mt-5
          [&_h2]:text-xl
          [&_h2]:font-bold
          [&_h2]:mt-5
          [&_h3]:text-lg
          [&_h3]:font-bold
          [&_h3]:mt-5
          [&_h4]:text-lg
          [&_h4]:font-bold
          [&_h5]:text-lg
          [&_h5]:font-bold
          [&_h5]:mt-5
          [&_a]:font-bold
          [&>a]:text-[#4197D2]
          [&_a]:hover:text-[#C00020]
          [&_a]:w-fit
          [&_img]:w-full
          [&_img]:h-auto
          [&_img]:mt-5
          [&_ul]:list-disc
          [&_ul]:list-inside
          [&_ul_li_strong]:text-lg
          [&>a]:leading-4">
            

            { parse(data[0].more_information) }


            <div className="mt-3 text-gray-600">
              <span className="text-xs">{ data[0].blog_tags }</span>
            </div>

            <hr className="text-gray-300 my-4" />

            <div className="w-full flex justify-between items-center">

              <div className="flex flex-row space-x-1">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-akfix-green" />
                <span className="text-xs font-medium text-gray-500"> { new Date(data[0].createdAt).toLocaleDateString("tr-TR").toString() } </span>
              </div>


              <div className="flex flex-row gap-3">
                <Link href={""} className="text-gray-600 hover:text-[#00AE9B] text-lg">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>

                <Link href={""} className="text-gray-600 hover:text-[#00AE9B] text-lg">
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>

                <Link href={""} className="text-gray-600 hover:text-[#00AE9B] text-lg">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>

              </div>

            </div>

          </div>



        </div>


        <div className="w-full max-w-full lg:max-w-[310] h-auto flex flex-col gap-8">
          {/* 
            <div className="w-full flex flex-col gap-3">
              <strong className="text-[#222]">Blog Categories</strong>
              <ul>
                <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                  <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3" /> DIY SOLUTIONS</Link>
                </li>
                <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                  <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> PU FOAMS</Link>
                </li>
                <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                  <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> PU SEALANTS</Link>
                </li>
                <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                  <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> ADHESIVES</Link>
                </li>
                <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                  <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> AEROSOLS</Link>
                </li>
                <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                  <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> COATINGS</Link>
                </li>
              </ul>
            </div>
           */}


          <div className="w-full flex flex-col gap-3">
            <strong className="text-[#222]">Latest Posts</strong>

            {
              data_list.map((item, index) => (
                  <LatestPostItem 
                    key={index}
                    title={item.title}
                    url={`/blog/${item.url}`}
                    create_at={new Date(item.createdAt).toLocaleDateString("tr-TR").toString()}
                  />

              ))
            }
    
            
          </div>



        </div>



      </section>



      
      <Brands />
      <Footer />
    </>
  );
}









function LatestPostItem({title = "", url = "", create_at = ""}){
  return(
    <div className="w-full h-auto p-2 bg-white flex flex-col gap-2 border border-gray-100 rounded">
      <span className="text-[10px] font-bold text-white bg-gray-500 self-start py-0.5 px-2 rounded">{create_at}</span>
      <Link href={url}>
        <strong className="text-sm font-bold text-gray-600 hover:text-[#C00020]">{title}</strong>
      </Link>
    </div>
  );
}