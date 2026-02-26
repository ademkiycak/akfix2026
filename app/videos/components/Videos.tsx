"use client"
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


interface VideoItem{
   videos:[]
}

interface Videos{
    id: number
    title:string
    img_url:string
    video_url: string
}


export default function VideoList({videos}: VideoItem){
    return(

            <>
                {
                    videos.map((item: Videos, index) => (
                        <VideoItem 
                            key={index} 
                            title={item.title}
                            url={item.video_url}
                            cover={`https://www.akfix.com${item.img_url}`}
                            coverHover="/images/videos/hover/1.webp" />

                    ))
                }
            </>
    )
}





function VideoItem({title = "", url = "", cover = "", coverHover = ""}){
    return (
      <Link href={url} className="w-full h-auto flex flex-col gap-3 relative group">
          <div className="w-auto h-auto p-0.5 rounded-lg bg-akfix-green absolute z-50 top-2 right-2 flex justify-center items-center">
            <FontAwesomeIcon icon={faYoutube} fontSize={22} className="text-white" />
          </div>
          <Image src={cover} alt="videos" width={335} height={188} className="w-full h-[150] md:h-[205] object-cover rounded-lg group-hover:hidden border border-transparent" />
          <Image src={coverHover} alt="videos" width={335} height={188} className="w-full h-[150] md:h-[205] object-cover rounded-lg hidden group-hover:block" unoptimized />
          <strong className="text-akfix-gray text-sm md:text-[16px] group-hover-text-akfix-red">{title}</strong>
      </Link>
    );
}