import Image from "next/image";
import Link from "next/link";


interface BrochureItem{
    product_brochures:[]
}

interface Brochures{
    brochure_title:string
    brochure_cover:string
    brochure_url:string
}


export default function ProductBrochure({product_brochures}: BrochureItem){
    return(
        <div className="w-full lg:container mx-auto m-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-6 lg:gap-5 lg:gap-y-10">

            {
                product_brochures.map((item: Brochures, index) => (
                    <BrochureItem 
                        key={index} 
                        title={item.brochure_title} 
                        url={`http://akfix.akfix.com.tr${item.brochure_url}`} 
                        cover={`http://akfix.akfix.com.tr${item.brochure_cover}`} 
                    />
                ))
            }
        </div>
    )
}





function BrochureItem({title = "", url = "", cover = ""}){
    return (
      <Link href={url} className="w-full h-auto flex flex-col gap-3 overflow-hidden" target="_blank">
          <Image src={cover} alt="videos" width={335} height={188} className="w-full h-auto max-h-[250] object-cover rounded-lg border border-gray-200 hover:border-[#00AE9B]" />
          <strong className="text-akfix-gray text-sm md:text-[16px] group-hover-text-akfix-red">{title}</strong>
      </Link>
    );
}
