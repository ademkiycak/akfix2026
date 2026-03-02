import Image from "next/image";
import Link from "next/link";


import ContactInfo from "@/app/contact/components/ContactInfo";
import { fetchData } from "@/lib/api";
import { BaseUrl } from "@/lib/baseurl";


interface FooterMenuItem{
    id: number
    title: string
    url: string
    sub_menu:[]
}

export default async function Footer(){

    const footerMenus = await fetchData<[]>(BaseUrl()+"/api/data/menus/");

    return (
        <>

            <footer className="w-full h-auto my-10">
                <div className="container mx-auto flex flex-wrap flex-col lg:flex-row gap-10 lg:gap-20 justify-between px-3 lg:px-5">


                    {
                        footerMenus.map((item: FooterMenuItem, index) => (
                            <div key={index} className="w-max h-auto flex flex-col gap-4">
                                <Link href={`/${item.url}`}>
                                    <strong className="text-lg text-gray-700 hover:text-[#C00020]">{item.title}</strong>
                                </Link>
                                {
                                    item.sub_menu?.length > 0 && (
                                        <div className="flex flex-col gap-3">
                                            {
                                                item.sub_menu.map((item: FooterMenuItem, index) => (
                                                    <Link 
                                                        key={index} 
                                                        href={`/${item.url}`} 
                                                        className="text-[16px] font-medium text-gray-500 hover:text-[#C00020]">{item.title}</Link>
                                                ))
                                            }
                                         
                                        </div>
                                    )
                                }

                            </div>
                        ))
                    }






                <div className="w-max h-auto flex flex-col gap-4">
                    <ContactInfo />
                </div>

                </div>
            </footer>


            <hr className="text-gray-200" />


            <div className="container mx-auto my-10 flex flex-wrap flex-col lg:flex-row justify-between px-3 lg:px-5">

                <div className="w-max h-auto flex flex-col ">
                    <div className="w-max h-auto flex gap-3">
                        <div className="w-[30] h-[30] p-4 flex justify-center items-center relative">
                        <Image
                            src="/images/certificates/logos/1.png"
                            alt="certificates"
                            fill
                            className="object-contain"
                        />
                        </div>

                        
                        <div className="w-[30] h-[30] p-4 flex justify-center items-center relative">
                        <Image
                            src="/images/certificates/logos/2.png"
                            alt="certificates"
                            fill
                            className="object-contain"
                        />
                        </div>


                        <div className="w-[30] h-[30] p-4 flex justify-center items-center relative">
                        <Image
                            src="/images/certificates/logos/3.png"
                            alt="certificates"
                            fill
                            className="object-contain"
                        />
                        </div>


                        <div className="w-[30] h-[30] p-4 flex justify-center items-center relative">
                        <Image
                            src="/images/certificates/logos/4.png"
                            alt="certificates"
                            fill
                            className="object-contain"
                        />
                        </div>

                        <div className="w-[30] h-[30] p-4 flex justify-center items-center relative">
                        <Image
                            src="/images/certificates/logos/5.png"
                            alt="certificates"
                            fill
                            className="object-contain"
                        />
                        </div>


                        <div className="w-[35] h-[35] p-4 flex justify-center items-center relative">
                        <Image
                            src="/images/certificates/logos/6.png"
                            alt="certificates"
                            fill
                            className="object-contain"
                        />
                        </div>

                        <div className="w-[30] h-[30] p-4 flex justify-center items-center relative">
                        <Image
                            src="/images/certificates/logos/7.png"
                            alt="certificates"
                            fill
                            className="object-contain"
                        />
                        </div>


                        <div className="w-[30] h-[30] p-4 flex justify-center items-center relative">
                        <Image
                            src="/images/certificates/logos/8.png"
                            alt="certificates"
                            fill
                            className="object-contain"
                        />
                        </div>

                    </div>

                    <div className="flex gap-3 my-5">
                        <Link href={"https://apps.apple.com/tr/app/akfix/id993230336?l=tr"} target={"_blank"} className="w-[90] h-[25] p-4 flex justify-center items-center relative hover:opacity-80">
                        <Image
                            src="/images/app-store.png"
                            alt="app store"
                            fill
                            className="object-contain"
                        />
                        </Link>


                        <Link href={"https://play.google.com/store/apps/details?id=com.akfix.navigationdrawer&hl=en_US"} target={"_blank"} className="w-[90] h-[25] p-4 flex justify-center items-center relative hover:opacity-80">
                        <Image
                            src="/images/google-play.png"
                            alt="google play"
                            fill
                            className="object-contain"
                        />
                        </Link>
                    </div>

                </div>

                <div>
                    <Link href={""} className="w-[190] h-[65] p-4 flex justify-center items-center relative hover:opacity-80">
                    <Image
                        src="/images/sealant-calculator.png"
                        alt="sealant calculator"
                        fill
                        className="object-contain"
                    />
                    </Link>
                </div>

                <div className="flex flex-wrap flex-col items-start lg:items-end mt-10 lg:mt-0 gap-7">
                    <Link href={"https://www.akkim.net"} target={"_blank"} className="w-[150] h-[36] p-4 flex justify-center items-center relative hover:opacity-80">
                    <Image
                        src="/images/akkim-logo.svg"
                        alt="Akkim"
                        fill
                        className="object-contain"
                    />
                    </Link>

                    <span className="text-xs lg:text-sm text-gray-500">2026 © Copyright Akfix Master Of Solutions / All Rights Reserved.</span>


                </div>

            </div>


        </>
    );
}