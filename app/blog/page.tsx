
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faCalendarAlt, faCircleChevronRight, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { BaseUrl, SiteUrl } from "@/lib/baseurl";
import { fetchData } from "@/lib/api";
import { SEO } from "@/lib/seo";


export function generateMetadata() {
  return {
    title: "Blog",
    openGraph: {
      title: "Blog",
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
      title: "Blog",
      images: [
        {
          url: `${SiteUrl()}/images/og.jpg`,
          width: 1200,
          height: 630
        }
      ]
    },

    alternates: {
      canonical: `/blog`
    }
  }
}



export default async function Blog(){


    interface BlogItem{
        id:number
        title:string
        url:string
        blog_summary:string
        img_url:string
        blog_tags:string
        createdAt:string
    }


    const data = await fetchData<BlogItem[]>(BaseUrl()+"/api/data/blogs");



    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog",
      url: `${SiteUrl()}/blog`,
      description: SEO.description,
      publisher: {
        "@type": "Organization",
        name: "Akkim Yapı Kimyasalları A.Ş.",
      },
      blogPost: data.map(item => ({
        "@type": "BlogPosting",
        headline: item.title,
        description: item.blog_summary.replace(/<[^>]*>?/gm, ""),
        url: `${SiteUrl()}/blog/${item.url}`,
        datePublished: item.createdAt,
        dateModified: item.createdAt,
        author: {
          "@type": "Person",
          name: "Akfix Master Of Solutions"
        },
        image: SiteUrl()+item.img_url
      }))
    };




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
        title="Blog"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/akfix" },
          { label: "Blog", href: "/blog", active: true }
        ]}
      />



      {/* Blog */}
      <section className="w-full lg:w-5xl xl:w-7xl mx-auto p-5 mt-10 mb-20 flex justify-between flex-col lg:flex-row gap-15 lg:gap-20">
        
        <div className="w-full max-w-[900] h-auto flex flex-col space-y-4">
          
          {/** Blog item */}


          {
              data.slice(0, 10).map((item, index) => (
                  <BlogItem 
                      key={index}
                      title ={item.title}
                      url={`blog/${item.url}`}
                      cover={BaseUrl()+item.img_url}
                      summary={item.blog_summary}
                      tags={item.blog_tags}
                      create_at={new Date(item.createdAt).toLocaleDateString("tr-TR").toString()}
                  />
              ))
          }

          <Link href={"/blog/list"} className="font-bold text-sm text-gray-600 hover:text-red-700 mt-5"> 
            <FontAwesomeIcon icon={faCircleChevronRight} fontSize={14} /> All Blog List</Link>

        </div>



        <div className="w-full max-w-full lg:max-w-[310] h-auto flex flex-col gap-8">


          <div className="w-full flex flex-col gap-3">
            <strong className="text-[#222]">Latest Posts</strong>

            {
              data.map((item, index) => (
                  <LatestPostItem 
                    key={index}
                    title={item.title}
                    url={`/blog/${item.url}`}
                    create_at={new Date(item.createdAt).toLocaleDateString("tr-TR").toString()}
                  />

              ))
            }

            
          </div>

          <Link href={"/blog/list"} className="font-bold text-sm text-gray-600 hover:text-red-700"> 
            <FontAwesomeIcon icon={faCircleChevronRight} fontSize={14} /> All Blog List</Link>

        </div>



      </section>



      
      <Brands />
      <Footer />
    </>
  );
}







function BlogItem({title = "", url = "", cover = "", summary = "", tags = "", create_at = ""}){
  return(
          <div className="w-full h-auto flex flex-col bg-gray-50 p-2 rounded-lg space-y-3">
            <Image src={cover} width={700} height={299}  alt="blog" className="w-full h-auto md:h-[299] object-cover rounded-lg" />
            <Link href={url}>
              <strong className="text-xl text-akfix-gray hover:text-[#C00020]">{title}</strong>
            </Link>

            <Link href={url} className="font-book leading-7 text-akfix-gray hover:text-[#C00020]">
              <p>
                {summary}
              </p>
            </Link>

            <div className="mt-3 text-gray-600">
              <span className="text-xs">Tags : {tags}</span>
            </div>

            <hr className="text-gray-300 my-4" />

            <div className="w-full flex justify-between items-center">

              <div className="flex flex-row space-x-1">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-akfix-green" />
                <span className="text-xs font-medium text-gray-500"> {create_at} </span>
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