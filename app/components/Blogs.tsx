import { fetchData } from "@/lib/api";
import { BaseUrl } from "@/lib/baseurl";
import Image from "next/image";
import Link from "next/link";

export default async function Blogs() {

    interface BlogItem{
        id:number
        title:string
        url:string
        blog_summary:string
        img_url:string
    }

    const data = await fetchData<BlogItem[]>(BaseUrl()+"/api/data/blogs");


    return(
        <>
            <div className="w-auto h-auto mx-auto text-center mt-20 mb-10 space-x-2 text-3xl">
                <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">AKFİX</strong>
                <span className="text-akfix-gray font-light text-2xl md:text-3xl">BLOG</span>
            </div>


            <div className="container mx-auto flex flex-wrap gap-7 md:flex-nowrap px-5">


                {
                    data.slice(0, 3).map((item, index) => (
                        <BlogBigItem 
                            key={index}
                            title ={item.title}
                            url={`blog/${item.url}`}
                            cover={BaseUrl()+item.img_url}
                            summary={item.blog_summary}
                        />
                    ))
                }



       

            </div>


            <hr className="container mx-auto my-15 text-gray-200" />


            <div className="container mx-auto my-10 flex flex-wrap justify-between gap-5 px-5 mb-25">


                {
                    data.slice(3, 6).map((item, index) => (
                        <BlogSmallItem 
                            key={index}
                            title ={item.title}
                            url={`blog/${item.url}`}
                            cover={BaseUrl()+item.img_url}
                        />
                    ))
                }

            </div>

        </>
    );
}



function BlogBigItem({title = "", url = "", cover = "", summary = ""}){
    return(
        <Link href={url}>
            <div className="w-full max-w-4xl h-auto flex flex-col gap-2 group">
                <Image src={cover} width={520} height={250} className="w-full object-cover h-full rounded-xl" alt="blog" />

                <strong className="text-lg text-gray-600 mt-2 group-hover-text-akfix-red">{title}</strong>
                <div className="text-sm leading-6 font-medium text-gray-500 group-hover:text-gray-500">
                    <p>{summary}</p>
                </div>
            </div>
        </Link>
    );
}



function BlogSmallItem({title = "", url = "", cover = ""}){
    return(
        <Link href={url}>
            <div className="w-full lg:max-w-sm  flex items-center gap-5 group">
                <div className="w-[100] sm:w-[136] h-[100] sm:h-[136]">
                    <Image src={cover} width={520} height={250} className="w-full object-cover h-full rounded-xl" alt="blog" />
                </div>
                <strong className="w-1/2 text-sm text-gray-600 group-hover-text-akfix-red">{title}</strong>
            </div>
        </Link>
    );
}