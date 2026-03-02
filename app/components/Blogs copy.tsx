import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
    return(
        <>
            <div className="w-auto h-auto mx-auto text-center mt-20 mb-10 space-x-2 text-3xl">
                <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">AKFİX</strong>
                <span className="text-akfix-gray font-light text-2xl md:text-3xl">BLOG</span>
            </div>


            <div className="container mx-auto flex flex-wrap gap-7 md:flex-nowrap px-5">

                <BlogBigItem 
                    title = "Zero Risk In Insulation, Excellent Result: Akfix Aquazero"
                    url="#"
                    cover="/images/blog/blog-1.jpg"
                    summary="By waterproofing your buildings, you can prevent your living spaces from being damaged by moisture. Whether the surfaces are flat or inclined, you can protect your building with the right waterproofing applications."
                    category="ADHESIVES"
                    bgColor="#F27C00"
                />

                <BlogBigItem 
                    title = "Zero Risk In Insulation, Excellent Result: Akfix Aquazero"
                    url="#"
                    cover="/images/blog/blog-1.jpg"
                    summary="By waterproofing your buildings, you can prevent your living spaces from being damaged by moisture. Whether the surfaces are flat or inclined, you can protect your building with the right waterproofing applications."
                    category="COATINGS"
                    bgColor="#329626"
                />

                <BlogBigItem 
                    title = "Zero Risk In Insulation, Excellent Result: Akfix Aquazero"
                    url="#"
                    cover="/images/blog/blog-1.jpg"
                    summary="By waterproofing your buildings, you can prevent your living spaces from being damaged by moisture. Whether the surfaces are flat or inclined, you can protect your building with the right waterproofing applications."
                    category="SEALANTS"
                    bgColor="#0064B3"
                />

            </div>


            <hr className="container mx-auto my-15 text-gray-200" />


            <div className="container mx-auto my-10 flex flex-wrap justify-between gap-5 px-5 mb-25">

                <BlogSmallItem 
                    title = "Zero Risk In Insulation, Excellent Result: Akfix Aquazero"
                    url="#"
                    cover="/images/blog/blog-1.jpg"
                />

                <BlogSmallItem 
                    title = "Zero Risk In Insulation, Excellent Result: Akfix Aquazero"
                    url="#"
                    cover="/images/blog/blog-1.jpg"
                />

                <BlogSmallItem 
                    title = "Zero Risk In Insulation, Excellent Result: Akfix Aquazero"
                    url="#"
                    cover="/images/blog/blog-1.jpg"
                />

            </div>

        </>
    );
}



function BlogBigItem({title = "", url = "", cover = "", summary = "", category = "", bgColor = ""}){
    return(
        <Link href={url}>
            <div className="w-full max-w-4xl h-auto flex flex-col gap-2 group">
                <Image src={cover} width={520} height={250} className="w-full object-cover h-full rounded-xl" alt="blog" />

                <strong className="text-lg text-gray-600 mt-2 group-hover-text-akfix-red">{title}</strong>
                <div className="text-sm leading-6 font-medium text-gray-500 group-hover:text-gray-500">
                    <p>{summary}</p>
                </div>
                <div className="px-2 py-1 bg-[#777] w-max text-xs font-black text-white rounded-sm my-1" style={{backgroundColor: bgColor}}>{category}</div>
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