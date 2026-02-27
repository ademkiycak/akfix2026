import { fetchData } from "@/lib/api";
import { BaseUrl } from "@/lib/baseurl";
import { faFacebookF, faInstagram, faLinkedin, faPinterest, faVimeo, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default async function ContactInfo(){

    interface Contact{
        id: number
        title: string
        address: string
        email_title_1: string
        email_1: string
        email_title_2: string
        email_2: string
        email_title_3: string
        email_3: string
        phone_title_1: string
        phone_1: string
        phone_title_2: string
        phone_2: string
        phone_title_3: string
        phone_3: string
        fax: string
        maps: string
        facebook_url: string
        twitter_url: string
        instagram_url: string
        youtube_url: string
        vimeo_url: string
        pinterest_url: string
        linkedin_url: string

    }

    const data = await fetchData<Contact>(BaseUrl()+"/api/data/contact/");


    return(
         <div className="w-full h-auto flex flex-col space-y-5">
            <strong className="text-lg text-akfix-red">Contact Information</strong>

            <div className="text-[16px] text-akfix-gray flex flex-col space-y-1">
              <strong className="font-bold">{data.title}</strong>
              <p className="font-book">{data.address}</p>
            </div>

            <div className="text-[16px] text-akfix-gray flex flex-col space-y-1">
              <strong className="font-bold">{data.phone_title_1}</strong>
              <p className="font-book">{data.phone_1}</p>
            </div>

            <div className="text-[16px] text-akfix-gray flex flex-col space-y-1">
              <strong className="font-bold">Fax</strong>
              <p className="font-book">{data.fax}</p>
            </div>


            <div className="flex flex-col space-y-1 text-akfix-red mt-5">
              <strong>{data.email_title_1} {data.email_1}</strong>
              <strong>{data.email_title_2} {data.email_2}</strong>
            </div>

            <div className="flex gap-3 my-5">
                {
                    data.facebook_url && (
                        <Link href={data.facebook_url} target={"_blank"} className="w-[33] h-[33] bg-gray-600 hover:bg-[#C00020] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faFacebookF} fontSize={18} className="text-white" />
                        </Link>
                    )
                }
                

                {
                    data.twitter_url && (
                            <Link href={data.twitter_url} target={"_blank"} className="w-[33] h-[33] bg-gray-600 hover:bg-[#C00020] rounded-full flex justify-center items-center">
                                <FontAwesomeIcon icon={faXTwitter} fontSize={18} className="text-white" />
                            </Link>
                    )
                }


                {
                    data.instagram_url && (
                        <Link href={data.instagram_url} target={"_blank"} className="w-[33] h-[33] bg-gray-600 hover:bg-[#C00020] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faInstagram} fontSize={18} className="text-white" />
                        </Link>
                    )
                }


                {
                    data.youtube_url && (
                        <Link href={data.youtube_url} target={"_blank"} className="w-[33] h-[33] bg-gray-600 hover:bg-[#C00020] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faYoutube} fontSize={18} className="text-white" />
                        </Link>
                    )
                }



                {
                    data.vimeo_url && (
                        <Link href={data.vimeo_url} target={"_blank"} className="w-[33] h-[33] bg-gray-600 hover:bg-[#C00020] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faVimeo} fontSize={18} className="text-white" />
                        </Link>
                    )
                }


                {
                    data.pinterest_url && (
                        <Link href={data.pinterest_url} target={"_blank"} className="w-[33] h-[33] bg-gray-600 hover:bg-[#C00020] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faPinterest} fontSize={18} className="text-white" />
                        </Link>
                    )
                }


                {
                    data.linkedin_url && (
                        <Link href={data.linkedin_url} target={"_blank"} className="w-[33] h-[33] bg-gray-600 hover:bg-[#C00020] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faLinkedin} fontSize={18} className="text-white" />
                        </Link>
                    )
                }

            </div>

        </div>
    );
}