import { BaseUrl } from "@/lib/baseurl";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


interface VideoItem{
    product_videos:[]
}

interface Videos{
    video_title:string
    video_cover:string
    video_url:string
}


export default function ProductVideos({product_videos}: VideoItem){
    return(
        <div className="w-full lg:container mx-auto m-6 gap-y-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 lg:gap-y-6">

            {
                product_videos.map((item:Videos, index) => (
                    <VideoItem key={index} title={item.video_title} url={`https://www.youtube.com/watch?v=${item.video_url}`} 
                    cover={BaseUrl()+`${item.video_cover}`} coverHover="/images/videos/hover/1.webp" />
                ))
            }

    
        </div>
    )
}



function VideoItem({title = "", url = "", cover = "", coverHover = ""}){
    return (
      <Link href={url} target={"_blank"} className="w-full h-auto flex flex-col gap-3 relative group">
          <div className="w-auto h-auto p-0.5 rounded-lg bg-akfix-green absolute z-50 top-2 right-2 flex justify-center items-center">
            <FontAwesomeIcon icon={faYoutube} fontSize={22} className="text-white" />
          </div>
          <Image src={cover} alt="videos" width={335} height={188} className="w-full h-[150] md:h-[205] object-cover rounded-lg group-hover:hidden border border-transparent" />
          <Image src={coverHover} alt="videos" width={335} height={188} className="w-full h-[150] md:h-[205] object-cover rounded-lg hidden group-hover:block" unoptimized />
          <strong className="text-akfix-gray text-sm md:text-[16px] group-hover-text-akfix-red">{title}</strong>
      </Link>
    );
}