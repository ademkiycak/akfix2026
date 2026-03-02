"use client"
import { useState } from "react";
import { BaseUrl } from "@/lib/baseurl";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import VideoModal from "@/app/videos/components/VideoModal";


interface Type{
    cover_img: string
    product_images:[]
    product_galleries:[]
    product_videos:[]
    product_brochures:[]
    color:string
}

interface VideoItem {
  video_cover: string
  video_url:string
}

interface BrochureItem {
  brochure_cover: string
  brochure_url: string
}


export default function ProducyContentAll({cover_img, product_images, product_galleries, product_videos, product_brochures, color}: Type){

    const [isOpen, setIsOpen] = useState(false);
    const [videoId, setVideoId] = useState("");


    const openVideo = (id: string) => {
        setVideoId(id);
        setIsOpen(true);
    };

    const closeVideo = () => {
        setIsOpen(false);
        setVideoId("");
    };

    return(
            <PhotoProvider>
              <div className="w-full lg:w-[530] h-auto flex flex-col">

              <div className="w-full lg:w-[530] h-[480] md:h-[680] bg-white rounded-lg flex justify-center items-center relative p-10">
                  <PhotoView src={cover_img}>
                      <Image src={cover_img} fill className="w-auto  h-fit object-contain p-10 cursor-pointer hover:opacity-90" alt="Product" loading="lazy" />
                  </PhotoView>
              </div>

              <div className="w-full h-auto grid grid-cols-2  md:grid-cols-4 lg:grid-cols-3  gap-3 mt-5">


                {
                    /* Product images */
                    product_images.map((item:string, index) => (
                        <PhotoView key={index} src={BaseUrl()+`${item.replace('small/', '')}`}>
                            <div className="w-full h-[110]  rounded-xl relative border border-white hover:border hover:border-[#00AE9B] cursor-pointer hover:opacity-70"
                            style={{borderColor: `rgba(${color ? color : "192, 0, 32"}, 0.3)`, backgroundColor: `rgba(${color ? color : "192, 0, 32"}, 0.1)`}}>
                            <Image src={BaseUrl()+`${item}`} fill className="w-auto  h-fit object-contain p-2" alt="Product" loading="lazy" />
                            </div>
                        </PhotoView>
                    ))
                }


                

                {
                    /* Product gallery */
                    product_galleries.map((item:string, index) => (
                        <PhotoView key={index} src={BaseUrl()+`${item}`}>
                            <div className="w-full h-[110] bg-amber-50 rounded-xl relative overflow-hidden border border-white hover:border hover:border-[#00AE9B] cursor-pointer hover:opacity-70">
                                <Image src={BaseUrl()+`${item}`} fill className="w-auto h-fit object-cover" alt="Product" loading="lazy" />
                            </div>
                        </PhotoView>
                    ))
                }




                {
                    /* Product videos */
                    product_videos.map((item:VideoItem, index) => (
                        <Link key={index} onClick={() => openVideo(item.video_url)} href={"#"}>
                        <div className="w-full h-[110] bg-amber-50 rounded-xl relative overflow-hidden border border-white hover:border hover:border-[#00AE9B] cursor-pointer hover:opacity-90">
                            <div className="w-auto h-auto p-0.5 rounded-lg bg-akfix-green absolute z-50 top-2 right-2 flex justify-center items-center">
                            <FontAwesomeIcon icon={faYoutube} fontSize={22} className="text-white" />
                            </div>
                            <Image src={BaseUrl()+`${item.video_cover}`} fill className="w-auto h-fit object-left object-cover" alt="Product" loading="lazy" />
                        </div>
                        </Link>
                    ))
                }


                <VideoModal
                    isOpen={isOpen}
                    onClose={closeVideo}
                    videoId={videoId}
                />

                


                {
                    /* Product brochures */
                    product_brochures.map((item: BrochureItem, index) => (
                        <Link key={index} href={BaseUrl()+`${item.brochure_url}`} target="_blank">
                            <div className="w-full h-[110] bg-amber-50 rounded-xl relative overflow-hidden border border-white hover:border hover:border-[#00AE9B]">
                                <Image src={BaseUrl()+`${item.brochure_cover}`} fill className="w-auto  h-fit object-cover" alt="Product" loading="lazy" />
                            </div>
                        </Link>
                    ))
                }



              </div>
              
              </div>
            </PhotoProvider>
    )
}