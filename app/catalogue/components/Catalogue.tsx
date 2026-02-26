import Image from "next/image";
import Link from "next/link";


interface CatalogueItem{
   catalogue:[]
}

interface Catalogue{
    title:string
    cover_url:string
    img_url:string
}


export default function CatalogueList({catalogue}: CatalogueItem){
    return(

            <>
                {
                    catalogue.map((item: Catalogue, index) => (
                        <CatalogueItem 
                            key={index} 
                            title={item.title} 
                            url={`https://www.akfix.com${item.img_url}`} 
                            cover={`https:www.akfix.com${item.cover_url}`} 
                        />
                    ))
                }
            </>
    )
}





function CatalogueItem({title = "", url = "", cover = ""}){
    return (
      <Link href={url} className="w-full h-auto flex flex-col gap-3 overflow-hidden" target="_blank">
          <Image src={cover} alt="videos" width={335} height={188} className="w-full h-auto max-h-[250] object-cover rounded-lg border border-gray-200 hover:border-[#00AE9B]" />
          <strong className="text-akfix-gray text-sm md:text-[16px] group-hover-text-akfix-red">{title}</strong>
      </Link>
    );
}
