"use client"

import { BaseUrl } from "@/lib/baseurl"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"


interface Menus{
    id: number
    parentID: number
    url: string
    title: string
    img_url: string
    sub_menu: []
}


interface SubMenu{
    title: string
    url: string
    img_url: string
    banner_img_url:string

}


const MenuClient = ({data} : {data:Menus[]}) =>{

    return(
        <>

       <nav className="mt-5 hidden lg:block">
            <ul className="flex gap-4 xl:gap-6 font-bold text-akfix-gray-light text-xs lg:text-sm xl:text-[16px]">

                {
                    data.map((item, index) => (
                    <li key={index} className="flex space-x-2 relative group">
                        <Link href={`/${item.url}`} className="flex items-center gap-2 hover:text-gray-600">
                        {item.title} 
                        {
                            item.sub_menu?.length > 0 && (
                                <FontAwesomeIcon icon={faChevronDown} fontSize={12} />
                            )
                        }
                        </Link>


                        {
                            item.sub_menu?.length > 0 && (

                        <ul className="w-max min-w-[280] absolute left-0 top-full hidden flex-col gap-2 bg-white shadow-lg rounded-md py-6  group-hover:flex z-60">


                            {
                                item.sub_menu.map((sub_item: SubMenu, index) => (
                                    <li key={index}>
                                        <Link href={`/${sub_item.url}`} className="flex items-center gap-2 hover:text-gray-600 mx-5">
                                            <div className="w-[45] h-[45] rounded-full flex justify-center items-center p-3 bg-center bg-no-repeat bg-cover" style={{backgroundColor: `${sub_item.banner_img_url}`}}>
                                                <Image className="w-full h-auto" src={BaseUrl()+sub_item.img_url} alt="Akfix" width={20} height={27} priority />
                                            </div>
                                            {sub_item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                   
                        </ul>

                            )
                        }


                    </li>
                    ))
                }



            </ul>
        </nav>

        
        </>
    )
}


export default MenuClient;