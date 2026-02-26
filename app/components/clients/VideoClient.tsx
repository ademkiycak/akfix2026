import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";



interface VideoItem{
    videos:[]
    title:string
    img_url:string
}





export default function VideoClient({ data }: { data: VideoItem[] }){
    return (

        <>

            <div className="w-auto h-auto mx-auto text-center mt-20 space-x-2 text-3xl">
                <strong className="font-extrabold text-akfix-gray text-2xl md:text-3xl">APPLICATION</strong>
                <span className="text-akfix-gray font-light text-2xl md:text-3xl">VIDEOS</span>
            </div>


            <div className="container mx-auto m-10 flex flex-wrap justify-center gap-5 gap-y-6">
                {
                    data.map((item, index) => (
                        <VideoItem key={index} title={item.title} url="#" cover={`https://www.akfix.com${item.img_url}`} coverHover="/images/videos/hover/1.webp" />
                    ))
                }
       
            </div>

        </>


    );
}


function VideoItem({title = "", url = "", cover = "", coverHover = ""}){
    return (
        <Link href={url} className="w-[40%] md:w-[335] h-auto flex flex-col gap-4 relative group">
            <div className="w-auto h-auto p-0.5 rounded-lg bg-akfix-green absolute z-50 top-2 right-2 flex justify-center items-center">
                <FontAwesomeIcon icon={faYoutube} fontSize={22} className="text-white" />
            </div>
            <Image src={cover} alt="videos" width={335} height={188} className="w-full md:w-[335] h-[150] md:h-[205] object-cover rounded-lg group-hover:hidden" />
            <Image src={coverHover} alt="videos" width={335} height={188} className="w-full md:w-[335] h-[150] md:h-[205] object-cover rounded-lg hidden group-hover:block" unoptimized />
            <strong className="text-akfix-gray text-sm md:text-md group-hover-text-akfix-red">{title}</strong>
        </Link>
    );
}